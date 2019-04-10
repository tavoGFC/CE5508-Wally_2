/*
 * Estudiantes: Randy Martínez y Gustavo Fallas
 
 * Carnets: 2014047395 y 2014035394

 * Proyecto #1: IoT - Basurero Inteligente

 * Descripción: El siguiente código parte del módulo movimiento 
   autónomo del la tapa del basurero, de manera que se accione 
   por medio del sensor.

 * Nota: Las referencias respectivas de algunas partes de este código
   se pueden encontrar en el archivo referencias_codigo.txt que se 
   encuentran en esta misma carpeta. 
 
 * Aclaración: El código fue ajustado y modificado por Randy y Gustavo
   por las necesidades del proyecto respectivamente.
 
*/

#include <Servo.h>
#include "HX711.h"
#include <SoftwareSerial.h>

//-Modulo WiFi--//
#define RX_Pin 2
#define TX_Pin 3
SoftwareSerial wifi(RX_Pin, TX_Pin);

//-Sensor Radar-//
#define echo_Pin 13
#define trigger_Pin 12
#define Max_Distance 400
bool state;


//-Motor DC-//
#define dcOne_Pin 8
#define dcTwo_Pin 11
#define durationCompressor 1000
#define isActivatedCompressor true
int pwm1;
int pwm2;

//-Motores Servo-//
Servo servoRight;
Servo servoLeft;
#define servoRight_Pin 10
#define servoLeft_Pin 9

//-Sensores Peso-//
unsigned long currentMillis = 0;
HX711 scaleRight;
HX711 scaleLeft;
#define rightDout_Pin 5
#define rightClk_Pin 4
#define leftDout_Pin 7
#define leftClk_Pin 6
float calibrationFactor = -92050.00;

String mensajeWifi = "";

void compressor(int directionCompressor)
{
    pwm1 = map(directionCompressor, 0, 1023, 0, 255);
    pwm2 = map(directionCompressor, 0, 1023, 255, 0);
  
    analogWrite(dcOne_Pin, pwm1);
    analogWrite(dcTwo_Pin, pwm2);
}


void controlCompressor()
{
  Serial.println("ejecutando compressor");
  while(true){
    for (int i=0; i<250; i++){
      Serial.println("comprimiendo-bajando.......");
      compressor(0);
    }
    for (int i=0; i<250; i++){
      Serial.println("comprimiendo-subiendo.......");
      compressor(1023);
    }
    analogWrite(dcOne_Pin, LOW);
    analogWrite(dcTwo_Pin, LOW);
    break;
  }
}

void getWeight()
{
  scaleRight.set_scale(calibrationFactor);
  scaleLeft.set_scale(calibrationFactor);

  Serial.print("Reading compartment right: ");
  Serial.print(scaleRight.get_units(), 1);
  Serial.print(" lbs ");
  Serial.print(" ó ");
  Serial.print(scaleRight.get_units() * 453.592, 3);
  Serial.print(" g ");

  Serial.print('\n');

  Serial.print("Reading compartment left: ");
  Serial.print(scaleLeft.get_units(), 1);
  Serial.print(" lbs ");
  Serial.print(" ó ");
  Serial.print(scaleLeft.get_units() * 453.592, 3);
  Serial.print(" g ");
  Serial.print('\n');

  if (Serial.available())
  {
    char temp = Serial.read();
    if (temp == '+' || temp == 'b')
    {
      calibrationFactor += 1000;
    }
    else if (temp == '-' || temp == 'z')
    {
      calibrationFactor -= 1000;
    }
    else if (temp == 't' || temp == 'T')
    {
      Serial.println("HX711 calibration sketch");
      scaleRight.tare();
      scaleLeft.tare();
    }
  }
}

void closeTop()
{
  state = !state;
  servoRight.write(167);
  servoLeft.write(13);
  Serial.println("Pos: R170 & L10 - Closing top door...");
}
void openTop()
{
  state = !state;
  servoRight.write(100);
  servoLeft.write(80);
  Serial.println("Pos: R120 & L60 - Opening top door...");
}

void radar(){
  long duration, distance ;
  digitalWrite(trigger_Pin, LOW);        // Nos aseguramos de que el trigger está desactivado
  delayMicroseconds(2);              // Para asegurarnos de que el trigger esta LOW
  digitalWrite(trigger_Pin, HIGH);       // Activamos el pulso de salida
  delayMicroseconds(10);             // Esperamos 10µs. El pulso sigue active este tiempo
  digitalWrite(trigger_Pin, LOW);        // Cortamos el pulso y a esperar el echo
  duration = pulseIn(echo_Pin, HIGH) ;
  distance = duration / 2 / 29.1  ;
   
  Serial.println(String(distance) + " cm") ;
  if (distance > Max_Distance)
  {
    Serial.println("....fuera de rango...");
  }
  else if (distance < 20 && !state) 
  {
    closeTop();
  }
  else if (distance < 20 && state)
  {
    openTop();
  }
  delay (1500);
}

void setup()
{
    Serial.begin(9600);
    wifi.begin(9600);
    Serial.println("Starting system.....");

    //-----Servo Motor-----// 
    servoRight.attach(servoRight_Pin);
    servoLeft.attach(servoLeft_Pin);

    //-----Sensor Radar-----//
    state = false;
    pinMode(trigger_Pin, OUTPUT);
    pinMode(echo_Pin, INPUT); 
    
    
    //-----Sensor Peso-----//
    scaleRight.begin(rightDout_Pin, rightClk_Pin);
    scaleRight.set_scale();
    scaleRight.tare();
    scaleLeft.begin(leftDout_Pin, leftClk_Pin);
    scaleLeft.set_scale();
    scaleLeft.tare();

    //-----Motor DC-----//
    pinMode(dcOne_Pin, OUTPUT);
    pinMode(dcTwo_Pin, OUTPUT);
    
    //------\\
    closeTop();
}

void loop()
{
  while (wifi.available()){
    mensajeWifi = wifi.readString();
  }
  //-----Sensor Cercanía-----//
  radar();

  //-----Sensor Peso-----//
  if(millis() > (currentMillis+10000))
  {
    currentMillis = millis();
    getWeight();
  }
  
  //---Recibir mensaje del WiFi MQTT----\\
  
  if (mensajeWifi == "abrirTapa"){
    openTop();
    mensajeWifi = "";
    Serial.println("abrir tapa");
  }
  else if (mensajeWifi == "cerrarTapa"){
    closeTop();
    Serial.print("cerrando tapa");
    mensajeWifi = "";
  }
  //-----Motores DC-----//
  else if (mensajeWifi == "comprimirBasura"){
    controlCompressor();
    mensajeWifi = "";
    Serial.println("compriendo");
  }
}
