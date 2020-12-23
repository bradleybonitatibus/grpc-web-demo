/**
 * @fileoverview gRPC-Web generated client stub for sensorpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.sensorpb = require('./sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sensorpb.SensorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sensorpb.SensorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sensorpb.SensorRequest,
 *   !proto.sensorpb.SensorResponse>}
 */
const methodDescriptor_Sensor_TempSensor = new grpc.web.MethodDescriptor(
  '/sensorpb.Sensor/TempSensor',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.sensorpb.SensorRequest,
  proto.sensorpb.SensorResponse,
  /**
   * @param {!proto.sensorpb.SensorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sensorpb.SensorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sensorpb.SensorRequest,
 *   !proto.sensorpb.SensorResponse>}
 */
const methodInfo_Sensor_TempSensor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sensorpb.SensorResponse,
  /**
   * @param {!proto.sensorpb.SensorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sensorpb.SensorResponse.deserializeBinary
);


/**
 * @param {!proto.sensorpb.SensorRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sensorpb.SensorResponse>}
 *     The XHR Node Readable Stream
 */
proto.sensorpb.SensorClient.prototype.tempSensor =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sensorpb.Sensor/TempSensor',
      request,
      metadata || {},
      methodDescriptor_Sensor_TempSensor);
};


/**
 * @param {!proto.sensorpb.SensorRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sensorpb.SensorResponse>}
 *     The XHR Node Readable Stream
 */
proto.sensorpb.SensorPromiseClient.prototype.tempSensor =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sensorpb.Sensor/TempSensor',
      request,
      metadata || {},
      methodDescriptor_Sensor_TempSensor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sensorpb.SensorRequest,
 *   !proto.sensorpb.SensorResponse>}
 */
const methodDescriptor_Sensor_HumiditySensor = new grpc.web.MethodDescriptor(
  '/sensorpb.Sensor/HumiditySensor',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.sensorpb.SensorRequest,
  proto.sensorpb.SensorResponse,
  /**
   * @param {!proto.sensorpb.SensorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sensorpb.SensorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sensorpb.SensorRequest,
 *   !proto.sensorpb.SensorResponse>}
 */
const methodInfo_Sensor_HumiditySensor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sensorpb.SensorResponse,
  /**
   * @param {!proto.sensorpb.SensorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sensorpb.SensorResponse.deserializeBinary
);


/**
 * @param {!proto.sensorpb.SensorRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sensorpb.SensorResponse>}
 *     The XHR Node Readable Stream
 */
proto.sensorpb.SensorClient.prototype.humiditySensor =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sensorpb.Sensor/HumiditySensor',
      request,
      metadata || {},
      methodDescriptor_Sensor_HumiditySensor);
};


/**
 * @param {!proto.sensorpb.SensorRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sensorpb.SensorResponse>}
 *     The XHR Node Readable Stream
 */
proto.sensorpb.SensorPromiseClient.prototype.humiditySensor =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sensorpb.Sensor/HumiditySensor',
      request,
      metadata || {},
      methodDescriptor_Sensor_HumiditySensor);
};


module.exports = proto.sensorpb;

