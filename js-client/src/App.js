import './App.css';
import React, { useState, useEffect } from 'react';
import { SensorRequest } from './sensorpb/sensor_pb';
import { SensorClient } from "./sensorpb/sensor_grpc_web_pb";

const client = new SensorClient("http://localhost:8000", null, null);

function App() {

  const [temp, setTemp] = useState(-9999);
  const [hum, setHum] = useState(-9999);

  const getTemp = () => {
    let request = new SensorRequest();
    let stream = client.tempSensor(request, {});
    stream.on("data", res => {
      var t = res.getValue();
      console.log(t);
      setTemp(t);
    });
    stream.on("error", (err) => {
      console.error(err.message);
    });
  }

  const getHum = () => {
    let req = new SensorRequest();
    let stream = client.humiditySensor(req);
    stream.on("data", (res)=> {
      let h = res.getValue();
      console.log(h);
      setHum(h);
    });
    stream.on("error", (err) => {
      console.error(err.message);
    });
  }

  useEffect(() => {
    getTemp();
  }, [temp]);

  useEffect(() => {
    getHum();
  }, [hum]);

  return (
    <div className="App">
      <h1>GRPC Frontend</h1>
      <h3>Temperature: {temp}</h3>
      <h3>Humidity: {hum}%</h3>
    </div>
  );
}

export default App;
