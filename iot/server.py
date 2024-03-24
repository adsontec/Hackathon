from flask import Flask, jsonify
import paho.mqtt.client as mqtt
import time
import threading

app = Flask(__name__)

MQTT_TOPIC1 = "neighborhood/1/parameter/solids"
MQTT_TOPIC2 = "neighborhood/1/parameter/turbidity"
MQTT_TOPIC3 = "neighborhood/1/parameter/organic_carbon"
MQTT_TOPIC4 = "neighborhood/1/parameter/ph"
MQTT_HOUSE_TOPIC = "neighborhood/1/house/1/sensor/ultrassom_and_pressure"

MQTT_BROKER = "broker.mqttdashboard.com"
MQTT_USER = "TestWater"
MQTT_PASSWORD = "#testwat3rpassWord"

mqtt_data = {
    MQTT_TOPIC1: None,
    MQTT_TOPIC2: None,
    MQTT_TOPIC3: None,
    MQTT_TOPIC4: None,
    MQTT_HOUSE_TOPIC: None,
}

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe([(MQTT_TOPIC1, 0), (MQTT_TOPIC2, 0), (MQTT_TOPIC3, 0), (MQTT_TOPIC4, 0), (MQTT_HOUSE_TOPIC, 0)])

def on_message(client, userdata, msg):
    global mqtt_data
    print(f"Received message: {msg.topic} - {msg.payload.decode()}")
    mqtt_data[msg.topic] = msg.payload.decode()

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(mqtt_data)

if __name__ == '__main__':
    mqtt_client = mqtt.Client()
    mqtt_client.username_pw_set(MQTT_USER, MQTT_PASSWORD)
    mqtt_client.on_connect = on_connect
    mqtt_client.on_message = on_message

    mqtt_client.connect(MQTT_BROKER, 1883, 60)

    mqtt_thread = threading.Thread(target=mqtt_client.loop_forever)
    mqtt_thread.start()

    print("Starting Flask app...")
    app.run(debug=True)
