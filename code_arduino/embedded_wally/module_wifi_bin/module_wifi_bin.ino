/*
 * Nota: Ciertas partes de este código fueron tomadas de códigos funcionales
 * encontrados en internet a la hora de la investigación de los diferentes 
 * módulos electrónicos que componen el dispositvo. Las referencias respectivas
 * se pueden encontrar en el documento code_refereneces.txt que se encuentran 
 * en esta misma carpeta. 
 
 - Randy Martínez y Gustavo Fallas. 
*/

#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

/*---- WiFI ----*/
const char *ssid = "LG K5";       
const char *password = "Alonso11";

/*---- Server MQTT ----*/
const char *mqtt_server = "m24.cloudmqtt.com";
const int port_mqtt_server = 14805;
const char *user_mqtt_server = "ydgftwoz";
const char *password_mqtt_server = "D1hzagk3oj49";
const char *device_id = "esp8266-ardu";

const char *topicSub = "Wally/controll";

/*---- Server HAPI ----*/
const char *host_hapi_server = "192.168.43.84";
const int port_hapi_server = 8000;
String fromArdu = "";

WiFiClient espClient;
PubSubClient client(espClient);
HTTPClient httpClient;

void setup()
{
    Serial.begin(9600);
    setup_wifi();
    client.setServer(mqtt_server, port_mqtt_server);
    client.setCallback(callback);
}

void loop()
{
    if (!client.connected())
    {
        reconnect();
    }
    client.loop();


    //Send data to Server
    while (Serial.available()){
      fromArdu = Serial.readString();
    }
    if (fromArdu != ""){
      dataToServer(fromArdu);
      fromArdu="";
    }
    
}

//Write to Server Hapi
void dataToServer(String data){
  if (WiFi.status() == WL_CONNECTED){
      httpClient.begin("http://192.168.43.84:8000/api/v1/stats/insert");
      httpClient.addHeader("Content-Type", "application/x-www-form-urlencoded");
      httpClient.addHeader("content-type", "multipart/form-data");
  
      //String dataPost = "leftScale=2.3&rightScale=1.3&Month=Marzo";
      httpClient.POST(data);
      httpClient.end();
    }
}

//Read from Server MQTT
void callback(char *topic, byte *payload, unsigned int length)
{
    String message = "";
    for (int i = 0; i < length; i++)
    {
        message += (char)payload[i];
    }
    if (message == "open")
    {
        Serial.write("open");
    }
    else if (message == "close")
    {
        Serial.write("close");
    }
    else if (message == "compress")
    {
        Serial.write("compress");
    }
}

void setup_wifi()
{
    WiFi.begin(ssid, password);
    
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(100);
    }
}

void reconnect()
{
    while (!client.connected())
    {
        if (client.connect(device_id, user_mqtt_server, password_mqtt_server))
        {
            client.subscribe(topicSub);
        }
        else //failed - try again in 5 seconds
        {
            delay(5000);
        }
    }
}