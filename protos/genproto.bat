protoc sensor.proto --go_out=plugins=grpc:./../server/sensorpb
protoc sensor.proto --go_out=plugins=grpc:./../go-client/sensorpb
protoc sensor.proto --js_out=import_style=commonjs,binary:./../js-client/src/sensorpb --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./../js-client/src/sensorpb