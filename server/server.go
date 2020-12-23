package main

import (
	"fmt"
	"log"
	"net"
	"time"

	"github.com/bradleybonitatibus/grpc_sensor/server/sensor"
	"github.com/bradleybonitatibus/grpc_sensor/server/sensorpb"
	"google.golang.org/grpc"
)

type server struct {
	Sensor *sensor.Sensor
}

func newServer(s *sensor.Sensor) *server {
	return &server{
		Sensor: s,
	}
}

func (s *server) HumiditySensor(req *sensorpb.SensorRequest, stream sensorpb.Sensor_HumiditySensorServer) error {
	for {
		fmt.Println("Running humidity sensor stream")
		time.Sleep(time.Second * 3)

		humidity := s.Sensor.GetHumiditySensor()
		err := stream.Send(&sensorpb.SensorResponse{
			Value: humidity,
		})
		if err != nil {
			log.Printf("Error sending metric message: %v", err)
		}
		defer stream.Context().Done()
		return nil
	}
}

func (s *server) TempSensor(req *sensorpb.SensorRequest, stream sensorpb.Sensor_TempSensorServer) error {
	for {
		time.Sleep(time.Second * 5)
		fmt.Println("Running temp sensor stream")
		temp := s.Sensor.GetTempSensor()
		err := stream.Send(&sensorpb.SensorResponse{
			Value: temp,
		})

		if err == grpc.ErrClientConnClosing {
			fmt.Println("Client hung up")
		}

		if err != nil {
			log.Printf("Error sending metric message: %v", err)
		}
		defer stream.Context().Done()
		return nil
	}
}

func main() {
	sn := sensor.NewSensor()
	sn.StartMonitoring()
	lis, err := net.Listen("tcp", "0.0.0.0:8080")

	if err != nil {
		log.Fatalf("Error starting tcp server: %v", err)
	}

	s := grpc.NewServer()

	sensorpb.RegisterSensorServer(s, newServer(sn))
	fmt.Println("Starting tcp server on port 8000")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Error while serving: %v", err)
	}
}