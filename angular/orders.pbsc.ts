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
import * as thisProto from './orders.pb';
import {
  GRPC_OFFLINE_CLIENT_SETTINGS,
  GRPC_ONLINE_CLIENT_SETTINGS
} from './orders.pbconf';
/**
 * Service client implementation for orders.Offline
 */
@Injectable({
  providedIn: 'root'
})
export class OfflineClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_OFFLINE_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('orders.Offline', settings);
  }

  /**
   * Unary RPC for /orders.Offline/ByClient
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOfflineByClient>
   */
  byClient(
    requestData: thisProto.ParamsOfflineByClient,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOfflineByClient> {
    return this.byClient$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /orders.Offline/ByClient
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOfflineByClient>>
   */
  byClient$eventStream(
    requestData: thisProto.ParamsOfflineByClient,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOfflineByClient>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/orders.Offline/ByClient',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsOfflineByClient,
      responseClass: thisProto.ResponseOfflineByClient
    });
  }
}
/**
 * Service client implementation for orders.Online
 */
@Injectable({
  providedIn: 'root'
})
export class OnlineClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_ONLINE_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('orders.Online', settings);
  }

  /**
   * Unary RPC for /orders.Online/ByClient
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOnlineByClient>
   */
  byClient(
    requestData: thisProto.ParamsOnlineByClient,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOnlineByClient> {
    return this.byClient$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /orders.Online/ByClient
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOnlineByClient>>
   */
  byClient$eventStream(
    requestData: thisProto.ParamsOnlineByClient,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOnlineByClient>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/orders.Online/ByClient',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsOnlineByClient,
      responseClass: thisProto.ResponseOnlineByClient
    });
  }
}
