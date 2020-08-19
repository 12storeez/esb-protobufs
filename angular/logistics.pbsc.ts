/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcClientSettings,
  GrpcEvent
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './logistics.pb';
import * as googleProtobuf000 from './google/protobuf/empty.pb';
import { GRPC_LOGISTICS_CLIENT_SETTINGS } from './logistics.pbconf';
/**
 * Service client implementation for logistics.Logistics
 */
@Injectable({
  providedIn: 'root'
})
export class LogisticsClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_LOGISTICS_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('logistics.Logistics', settings);
  }

  /**
   * Unary RPC for /logistics.Logistics/Ping
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PingResponse>
   */
  ping(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.PingResponse> {
    return this.ping$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /logistics.Logistics/Ping
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.PingResponse>>
   */
  ping$eventStream(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.PingResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/logistics.Logistics/Ping',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf000.Empty,
      responseClass: thisProto.PingResponse
    });
  }

  /**
   * Unary RPC for /logistics.Logistics/UPSDuration
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetResponseUPS>
   */
  uPSDuration(
    requestData: thisProto.GetParamsUPS,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.GetResponseUPS> {
    return this.uPSDuration$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /logistics.Logistics/UPSDuration
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.GetResponseUPS>>
   */
  uPSDuration$eventStream(
    requestData: thisProto.GetParamsUPS,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.GetResponseUPS>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/logistics.Logistics/UPSDuration',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetParamsUPS,
      responseClass: thisProto.GetResponseUPS
    });
  }

  /**
   * Unary RPC for /logistics.Logistics/BoxberryDuration
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetResponseBoxberry>
   */
  boxberryDuration(
    requestData: thisProto.GetParamsBoxberry,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.GetResponseBoxberry> {
    return this.boxberryDuration$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /logistics.Logistics/BoxberryDuration
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.GetResponseBoxberry>>
   */
  boxberryDuration$eventStream(
    requestData: thisProto.GetParamsBoxberry,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.GetResponseBoxberry>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/logistics.Logistics/BoxberryDuration',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetParamsBoxberry,
      responseClass: thisProto.GetResponseBoxberry
    });
  }

  /**
   * Unary RPC for /logistics.Logistics/BoxberryDurationByCity
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetResponseBoxberryDurationByCity>
   */
  boxberryDurationByCity(
    requestData: thisProto.GetParamsBoxberryDurationByCity,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.GetResponseBoxberryDurationByCity> {
    return this.boxberryDurationByCity$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /logistics.Logistics/BoxberryDurationByCity
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.GetResponseBoxberryDurationByCity>>
   */
  boxberryDurationByCity$eventStream(
    requestData: thisProto.GetParamsBoxberryDurationByCity,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.GetResponseBoxberryDurationByCity>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/logistics.Logistics/BoxberryDurationByCity',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetParamsBoxberryDurationByCity,
      responseClass: thisProto.GetResponseBoxberryDurationByCity
    });
  }

  /**
   * Unary RPC for /logistics.Logistics/BoxberryPointInformation
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetResponsePointInformation>
   */
  boxberryPointInformation(
    requestData: thisProto.GetParamsPointInformation,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.GetResponsePointInformation> {
    return this.boxberryPointInformation$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /logistics.Logistics/BoxberryPointInformation
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.GetResponsePointInformation>>
   */
  boxberryPointInformation$eventStream(
    requestData: thisProto.GetParamsPointInformation,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.GetResponsePointInformation>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/logistics.Logistics/BoxberryPointInformation',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetParamsPointInformation,
      responseClass: thisProto.GetResponsePointInformation
    });
  }

  /**
   * Unary RPC for /logistics.Logistics/BoxberryOrderStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetResponseOrderStatus>
   */
  boxberryOrderStatus(
    requestData: thisProto.GetParamsOrderStatus,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.GetResponseOrderStatus> {
    return this.boxberryOrderStatus$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /logistics.Logistics/BoxberryOrderStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.GetResponseOrderStatus>>
   */
  boxberryOrderStatus$eventStream(
    requestData: thisProto.GetParamsOrderStatus,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.GetResponseOrderStatus>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/logistics.Logistics/BoxberryOrderStatus',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetParamsOrderStatus,
      responseClass: thisProto.GetResponseOrderStatus
    });
  }
}
