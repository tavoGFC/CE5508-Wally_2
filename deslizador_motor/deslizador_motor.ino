/*
  www.diymakers.es
  by A.García
  Control velocidad y sentido motor DC
  Tutorial en: http://diymakers.es/control-velocidad-y-sentido-de-motor-dc/
*/
 
int pin2=9;   //Entrada 2 del L293D
int pin7=10;  //Entrada 7 del L293D
int valorpote;  
int pwm1;          //Variable del PWM 1
int pwm2;          //Variable del PWM 2

bool estadoLed = false;  //guarda el estado del led (encendido o apagado)
int periodo = 5000;  // tiempo que esta el LED en alto y bajo
unsigned long tiempoAnterior = 0;  //guarda tiempo de referencia para comparar


const int analogInPin = A1; // Pin analogico 1 para la lectura del Fototransistor
const int OutPin = 13;      // Pin para el led indicador

int sensorValue = 0;        // Inicializamos el valor del sensor


void setup()
{
  //Inicializamos los pins de salida
  Serial.begin(9600);
  pinMode(pin2,OUTPUT);
  pinMode(pin7, OUTPUT);
}
 
void loop()
{
   LedIR();
   //Motor();
}

void Motor(){
  if(millis() - tiempoAnterior >= periodo){  //si ha transcurrido el periodo programado
    estadoLed =! estadoLed;  //cambia el estado del led cada 100ms
    tiempoAnterior = millis();  //guarda el tiempo actual como referencia
   }
   
   valorpote=0;
   if (estadoLed){
    valorpote=1023;
   }

   /*
   Serial.print("Direccion: " );
   Serial.println(valorpote);
  */
   
  //Como la entrada analógica del Arduino es de 10 bits, el rango va de 0 a 1023.
  //En cambio, la salidas del Arduio son de 8 bits, quiere decir, rango entre 0 a 255.
  //Por esta razón tenemos que mapear el número de un rango a otro usando este código.
  pwm1 = map(valorpote, 0, 1023, 0, 255);
  pwm2 = map(valorpote, 0, 1023, 255, 0); //El PWM 2 esta invertido respecto al PWM 1
 
  //Sacamos el PWM de las dos salidas usando analogWrite(pin,valor)
  analogWrite(pin2,pwm1);
  analogWrite(pin7,pwm2);
}

void LedIR(){
  // leemos el pin para y asignamos el valor a la variable.
  sensorValue = analogRead(analogInPin);            
  
  // Si el valor obtenido es mayor a 900 se activa el LED
  if(sensorValue > 900)
  {
    Serial.println("Deteccion > 900");
    Motor();
  }
  else
  {
    Serial.println("Deteccion < 900");
  }

  // Imprimimos el valor en el monitor.
  Serial.print("sensor = " );                       
  Serial.println(sensorValue);     

  delay(100);                 
}
