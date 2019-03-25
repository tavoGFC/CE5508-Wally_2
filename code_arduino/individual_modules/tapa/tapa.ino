/******************************************************************************
servo-skatch.ino
Example sketch for connecting a hobby servo to a sparkfun redboard
  (https://www.sparkfun.com/products/9065)
  (https://www.sparkfun.com/products/12757)
Byron Jacquot@ SparkFun Electronics
May 17, 2016

**SparkFun code, firmware, and software is released under the MIT License(http://opensource.org/licenses/MIT).**

Development environment specifics:
Arduino 1.6.5
******************************************************************************/

#include <Servo.h>

Servo servo_1;
Servo servo_2;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
   if (Serial.available())
  {
    char temp = Serial.read();
    if (temp == 'a'){
      abrir();
    }
    if (temp == 'c'){
      cerrar();
    }
  }

}

void abrir(){  
  servo_1.attach(4);
  servo_2.attach(3);
  servo_1.writeMicroseconds(2000);
  servo_2.writeMicroseconds(1000);
  delay(100);
  //servo_1.writeMicroseconds(1000);
  //servo_2.writeMicroseconds(2000);
  servo_1.detach();
  servo_2.detach();
  Serial.println("abriendo..."); 
}


void cerrar(){
  servo_1.attach(4);
  servo_2.attach(3);
  servo_1.writeMicroseconds(1000);
  servo_2.writeMicroseconds(2000);
  delay(100);
  //servo_1.writeMicroseconds(2000);
  //servo_2.writeMicroseconds(1000);
  servo_1.detach();
  servo_2.detach();
  Serial.println("cerrando...");
}

/*
#include <Servo.h>

Servo servo_1;
Servo servo_2;

int pos = 0;

void setup() {
  Serial.begin(9600);
  servo_1.attach(3);
  servo_2.attach(2);
}

void loop() {
  //tapa abierta
  servo_1.write(100);
  //servo_2.write(0);


  delay(500);

  //tapa cerrada
  servo_1.write(60);
  //servo_2.write(90);

  delay(500);
  
}
*/
