const express = require('express');
const mqtt = require('mqtt');

const app = express();

const MQTT_TOPIC1 = "neighborhood/1/parameter/solids";
const MQTT_TOPIC2 = "neighborhood/1/parameter/turbidity";
const MQTT_TOPIC3 = "neighborhood/1/parameter/organic_carbon";
const MQTT_TOPIC4 = "neighborhood/1/parameter/ph";
const MQTT_HOUSE_TOPIC = "neighborhood/1/house/1/sensor/ultrassom_and_pressure";

const MQTT_BROKER = "mqtt://broker.mqttdashboard.com";
const MQTT_USER = "TestWater";
const MQTT_PASSWORD = "#testwat3rpassWord";

let mqtt_data = {
    [MQTT_TOPIC1]: null,
    [MQTT_TOPIC2]: null,
    [MQTT_TOPIC3]: null,
    [MQTT_TOPIC4]: null,
    [MQTT_HOUSE_TOPIC]: null,
};

const client = mqtt.connect(MQTT_BROKER, {
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    console.log('Connected to MQTT broker');
    client.subscribe([MQTT_TOPIC1, MQTT_TOPIC2, MQTT_TOPIC3, MQTT_TOPIC4, MQTT_HOUSE_TOPIC], function (err) {
        if (!err) {
            console.log('Subscribed to MQTT topics');
        }
    });
});

client.on('message', function (topic, message) {
    console.log(`Received message: ${topic} - ${message.toString()}`);
    mqtt_data[topic] = message.toString();
});

app.get('/data', function (req, res) {
    res.json(mqtt_data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
