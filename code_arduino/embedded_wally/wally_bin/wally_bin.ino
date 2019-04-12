/*
 * Nota: Ciertas partes de este código fueron tomadas de códigos funcionales
 * encontrados en internet a la hora de la investigación de los diferentes 
 * módulos electrónicos que componen el dispositvo. Las referencias respectivas
 * se pueden encontrar en el documento code_refereneces.txt que se encuentran 
 * en esta misma carpeta. 
 
 - Randy Martínez y Gustavo Fallas. 
*/

#include <Servo.h>
#include "HX711.h"
#include <SoftwareSerial.h>

//-- DC Motor --//
#define dcOne_Pin 8
#define dcTwo_Pin 11
#define durationCompressor 1000
#define isActivatedCompressor true
int pwm1;
int pwm2;

//-- Radar Sensor --//
#define echo_Pin 13
#define trigger_Pin 12
#define Max_Distance 400
bool state;

//-- Servo Motors --//
Servo servoRight;
Servo servoLeft;
#define servoRight_Pin 10
#define servoLeft_Pin 9

//-- Weight Sensors --//
unsigned long currentMillis = 0;
HX711 scaleRight;
HX711 scaleLeft;
#define rightDout_Pin 5
#define rightClk_Pin 4
#define leftDout_Pin 7
#define leftClk_Pin 6
float calibrationFactor = -92050.00;

//-- WiFi Module --//
#define RX_Pin 2
#define TX_Pin 3
SoftwareSerial wifi(RX_Pin, TX_Pin);
String wifiMessage = "";

void compressor(int directionCompressor)
{
  pwm1 = map(directionCompressor, 0, 1023, 0, 255);
  pwm2 = map(directionCompressor, 0, 1023, 255, 0);

  analogWrite(dcOne_Pin, pwm1);
  analogWrite(dcTwo_Pin, pwm2);
}

void controlCompressor()
{
  while (true)
  {
    for (int i = 0; i < 250; i++)
    {
      Serial.println("Compressor descending.");
      compressor(0);
    }
    for (int i = 0; i < 250; i++)
    {
      Serial.println("Compressor ascending.");
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
  Serial.println("Pos: R167 & L13 - Closing top door...");
}

void openTop()
{
  state = !state;
  servoRight.write(100);
  servoLeft.write(80);
  Serial.println("Pos: R100 & L80 - Opening top door...");
}

void radar()
{
  long duration, distance;
  digitalWrite(trigger_Pin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger_Pin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger_Pin, LOW);
  duration = pulseIn(echo_Pin, HIGH);
  distance = duration / 2 / 29.1;

  Serial.println(String(distance) + " cm");
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
  delay(1500);
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
  while (wifi.available())
  {
    wifiMessage = wifi.readString();
  }
  //-- Radar Sensor --//
  radar();

  //-- Weight Sensors --//
  if (millis() > (currentMillis + 10000))
  {
    currentMillis = millis();
    float lS = (float)scaleLeft.get_units() * 453.592;
    float lR = (float)scaleRight.get_units() * 453.592;
    String sendServer = "leftScale=";
    sendServer += lS;
    sendServer += "&rightScale=";
    sendServer += lR;
    sendServer += "&Month=Junio";
    wifi.print(sendServer);
    //getWeight();
  }

  //-- Reading WiFi Message --//
  if (wifiMessage == "open") // open top
  {
    openTop();
    wifiMessage = "";
  }
  else if (wifiMessage == "close") // close top
  {
    closeTop();
    wifiMessage = "";
  }
  else if (wifiMessage == "compress") //move compressor
  {
    controlCompressor();
    wifiMessage = "";
  }
}
