var mqtt = require('mqtt');
var options = {
  port: 15255,
  host: 'mqtt://m11.cloudmqtt.com',
  clientId:
    'mqttjs_' +
    Math.random()
      .toString(16)
      .substr(2, 8),
  username: 'xxxxxxxxxxxxxxxxxx',
  password: 'xxxxxxxxxxxxxxxxxx',
  keepalive: 60,
  reconnectPeriod: 1000,
  protocolId: 'MQIsdp',
  protocolVersion: 3,
  clean: true,
  encoding: 'utf8'
};
var client = mqtt.connect('mqtt://m11.cloudmqtt.com', options);
client.on('connect', function() {
  // When connected
  console.log('connected');
  // subscribe to a topic
  client.subscribe('topic1/#', function() {
    // when a message arrives, do something with it
    client.on('message', function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  });

  // publish a message to a topic
  client.publish('topic1/#', 'my message', function() {
    console.log('Message is published');
    client.end(); // Close the connection when published
  });
});
