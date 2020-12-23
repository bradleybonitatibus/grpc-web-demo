package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"os"

	"github.com/bradleybonitatibus/grpc_sensor/server/sensorpb"
	"google.golang.org/grpc"
)

func main() {
	con, err := grpc.Dial("localhost:8080", grpc.WithInsecure())
	if err != nil {
		fmt.Println("Err dialing server")
		os.Exit(1)
	}
	defer con.Close()

	client := sensorpb.NewSensorClient(con)

	getTemp(client)
}

func getTemp(client sensorpb.SensorClient) {
	req := &sensorpb.SensorRequest{}

	stream, err := client.TempSensor(context.Background(), req)

	if err != nil {
		log.Fatalf("Failed to fech temp sensor %v", err)
		os.Exit(1)
	}

	for {
		res, err := stream.Recv()
		if err != nil {
			log.Fatal("Failed to receive message from server")
		}

		if err == io.EOF {
			return
		}

		temp := res.GetValue()
		fmt.Printf("Current temperature from sensor: %v\n", temp)
	}
}