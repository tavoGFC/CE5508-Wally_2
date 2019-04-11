#include <ESP8266WiFi.h>
#include <PubSubClient.h>

/*---- WiFI ----*/
const char *ssid = "LG K5";        //"HTC Portable";
const char *password = "Alonso11"; //"AlonsoFC11";

/*---- Server MQTT ----*/
const char *mqtt_server = "m24.cloudmqtt.com";
const int port_mqtt_server = 14805;
const char *user_mqtt_server = "ydgftwoz";
const char *password_mqtt_server = "D1hzagk3oj49";
const char *device_id = "esp8266-ardu";

const char *topicSub = "Wally/controll";

WiFiClient espClient;
PubSubClient client(espClient);

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
}

//Read from Server
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
    delay(10);
    // We start by connecting to a WiFi network
    /*Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);
*/
    WiFi.begin(ssid, password);

    /*Serial.print("Estatus de exito: ");
    Serial.println(WL_CONNECTED);
    */
    while (WiFi.status() != WL_CONNECTED)
    {
        //Serial.print("."); //Serial.print(WiFi.status());
        delay(100);
    }
    /*
    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
*/
}

void reconnect()
{
    while (!client.connected())
    {
        //      Serial.print("Attempting MQTT connection...");

        if (client.connect(device_id, user_mqtt_server, password_mqtt_server))
        {
            //        Serial.println("connected");
            client.subscribe(topicSub);
        }
        else
        {
            /*      Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println(" try again in 5 seconds");
            */
            delay(5000);
        }
    }
}
