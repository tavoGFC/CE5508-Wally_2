#include <NewPing.h>
#include <Servo.h>

/*Aqui se configuran los pines donde debemos conectar el sensor*/
#define TRIGGER_PIN  12
#define ECHO_PIN     11
#define MAX_DISTANCE 200

/*Crear el objeto de la clase NewPing*/
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);



int pos = 0;
Servo servo_9;
bool state;


void setup() {
  Serial.begin(9600);
  servo_9.attach(9);
  state = false;
}

void loop() {
  radar();
}


void radar(){
  // Esperar 1 segundo entre mediciones
  delay(200);
  servo_9.write(pos);
  
  // Obtener medicion de tiempo de viaje del sonido y guardar en variable uS
  int uS = sonar.ping_median();
  
  // Calcular la distancia con base en una constante
  int distance = (uS / US_ROUNDTRIP_CM);
  // Imprimir la distancia medida a la consola serial
  /*
  Serial.print("Distancia: ");
  Serial.print(distance);
  Serial.println("cm");
  */
  if (distance <= 20){
     Serial.println("Abriendo tapada de basurero...");
     state = true;
     pos = 180;
  }

  if (state && distance <= 5){
    Serial.println("Ceerrando tapada de basurero...");
    state = false;
    pos = 0;
  } 
}
