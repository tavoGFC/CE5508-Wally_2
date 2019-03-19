//----------------------
 
int pinA=9;   //Entrada 2 del L293D
int pinB=10;  //Entrada 7 del L293D
int valueDirectionCompressor; //indica la direccion del compresor //valores 0 y 1023
bool isActivatedCompressor;

//------------------------------------
int periodo = 5000;  // tiempo que el motor dura en hacer media vuelta (bajar por completo o subir por completo)
unsigned long tiempoAnterior = 0;  //guarda tiempo de referencia para comparar

void setup()
{
  //Inicializamos los pins de salida
  Serial.begin(9600);
  pinMode(pin2,OUTPUT);
  pinMode(pin7, OUTPUT);
}

void motor(){
  //se activa el compresor (empieza a bajar)
  isActivatedCompressor = true;
  bool bajando_compresor = true;

  //se le da el valor para bajar el compresor
  if (bajando_compresor){
    //se inicia el motor con la direccion 0 (P.D: probar que direccion es el valor cero)
    directionCompressor = 0;
  } else{
    //se le da la direccion para que el compresor suba 
    directionCompressor = 1023;
  }

  //Como esperar el tiempo de que dura en bajar y subir para dejar de llamar la funcion motor()???

  
  //se espera 5000 ms la variable directionCompressor en 0
  //transcurrido el tiempo necesario para llegar abajo se cambia la booleana bajando -> subiendo
  if(millis()-tiempoAnterior >= periodo){  //si ha transcurrido el periodo programado
    bajando_compresor = false;
    tiempoAnterior=millis();  //guarda el tiempo actual como referencia
  }

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