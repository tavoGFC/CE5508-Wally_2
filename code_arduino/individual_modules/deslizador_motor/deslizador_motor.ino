//--------------------- version 2 ------------------------------------

int pinA=9;   //Entrada 2 del L293D
int pinB=10;  //Entrada 7 del L293D
int valueDirectionCompressor; //indica la direccion del compresor //valores 0 y 1023
int periodo = 5000;  // tiempo que el motor dura en hacer media vuelta (bajar por completo o subir por completo)

void setup()
{
  //Inicializamos los pins de salida
  Serial.begin(9600);
  pinMode(pin2,OUTPUT);
  pinMode(pin7, OUTPUT);
}

void loop(){
  motor();
}

void motor(){
  if (millis() >= 2*periodo) {
    Serial.println("Se bajo y subio el compresor!!...");
   	return;
  }
  
  //se espera el tiempo del perido en  ms mientras baja
  //transcurrido el tiempo necesario para llegar abajo se cambia la booleana bajando -> subiendo
  if(millis() <= periodo) {  //si ha transcurrido el periodo programado
    //se inicia el motor con la direccion 0 (P.D: probar que direccion es el valor cero)
    //valueDirectionCompressor = 0;
    Serial.println("bajando...");
  } else if (millis() >= periodo && millis() <= 2*periodo) {
    //se le da la direccion para que el compresor suba 
    //valueDirectionCompressor = 1023;
    Serial.println("subiendo...");
  }
  
  Serial.print("tiempo transcurrido: ");
  Serial.println(tiempo);

  /*Se le manda el valor al motor*/
  pwm1 = map(directionCompressor, 0, 1023, 0, 255);
  pwm2 = map(directionCompressor, 0, 1023, 255, 0);
  analogWrite(pinA, pwm1);
  analogWrite(pinB, pwm2);
  
  /*
  //al pasar 5000ms(tiempo estimado en lo que dura en hacer media vuelta, sea bajar o subir) se cambia la direccion del motor con el valor 1023
  if(millis() - tiempoAnterior >= periodo){  //si ha transcurrido el periodo programado
    directionCompressor = 1023;  //cambia el estado del led cada 100ms
    tiempoAnterior = millis();  //guarda el tiempo actual como referencia
   }
   */

}


//---------------------- version 3 ------------------------------------
 
int pinA=9;   //Entrada 2 del L293D
int pinB=10;  //Entrada 7 del L293D
int valueDirectionCompressor; //indica la direccion del compresor //valores 0 y 1023
int tiempoO = 0;
int periodo = 1000;  // tiempo que el motor dura en hacer media vuelta (bajar por completo o subir por completo)
boolean estadoLed = true;  //guarda el estado del led (encendido o apagado)
int intervaloBanjando = 1500;  // tiempo que esta encendido el led
int IntervaloSubiendo = 1500;  // tiempo que esta apagado el led
unsigned long tiempoAnteriorBajando = 0;  //guarda tiempo de referencia para comparar
unsigned long tiempoAnteriorSubiendo = 0;  //guarda tiempo de referencia para comparar
bool isActivatedCompressor = true;

void setup()
{
  //Inicializamos los pins de salida
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop(){
  
  motor();
  
}

void motor(){
  
  if (isActivatedCompressor){
    if((millis()-tiempoAnteriorBajando>=intervaloBanjando)&&estadoLed==true){  //si ha transcurrido el periodo programado
      estadoLed=false;  //actualizo la variable para apagar el led
      digitalWrite(13,estadoLed);  //apago el led
      //se inicia el motor con la direccion 0 (P.D: probar que direccion es el valor cero)
      //valueDirectionCompressor = 0;
      Serial.println("bajando...");
      tiempoAnteriorSubiendo=millis();  //guarda el tiempo actual para comenzar a contar el tiempo apagado
    }
    if((millis()-tiempoAnteriorSubiendo>=IntervaloSubiendo)&&estadoLed==false){  //si ha transcurrido el periodo programado
      estadoLed=true;  //actualizo la variable para encender el led
      digitalWrite(13,estadoLed);  //enciendo el led
      //valueDirectionCompressor = 1023;
      Serial.println("subiendo...");
      tiempoAnteriorBajando=millis();  //guarda el tiempo actual para comenzar a contar el tiempo encendido
    }
  }
  
}
