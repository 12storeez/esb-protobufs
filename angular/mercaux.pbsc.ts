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
import * as thisProto from './mercaux.pb';
import * as googleProtobuf000 from './google/protobuf/empty.pb';
import {
  GRPC_STOCKS_CLIENT_SETTINGS,
  GRPC_STORES_CLIENT_SETTINGS,
  GRPC_SELLERS_CLIENT_SETTINGS,
  GRPC_ORDERS_CLIENT_SETTINGS
} from './mercaux.pbconf';
/**
 * Service client implementation for mercaux.Stocks
 */
@Injectable({
  providedIn: 'root'
})
export class StocksClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_STOCKS_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('mercaux.Stocks', settings);
  }

  /**
   * Unary RPC for /mercaux.Stocks/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StocksGetResponse>
   */
  get(
    requestData: thisProto.StocksGetParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.StocksGetResponse> {
    return this.get$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mercaux.Stocks/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.StocksGetResponse>>
   */
  get$eventStream(
    requestData: thisProto.StocksGetParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.StocksGetResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mercaux.Stocks/Get',
      requestData,
      requestMetadata,
      requestClass: thisProto.StocksGetParams,
      responseClass: thisProto.StocksGetResponse
    });
  }
}
/**
 * Service client implementation for mercaux.Stores
 */
@Injectable({
  providedIn: 'root'
})
export class StoresClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_STORES_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('mercaux.Stores', settings);
  }

  /**
   * Unary RPC for /mercaux.Stores/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StoresGetResponse>
   */
  get(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.StoresGetResponse> {
    return this.get$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mercaux.Stores/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.StoresGetResponse>>
   */
  get$eventStream(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.StoresGetResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mercaux.Stores/Get',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf000.Empty,
      responseClass: thisProto.StoresGetResponse
    });
  }
}
/**
 * Service client implementation for mercaux.Sellers
 */
@Injectable({
  providedIn: 'root'
})
export class SellersClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_SELLERS_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('mercaux.Sellers', settings);
  }

  /**
   * Unary RPC for /mercaux.Sellers/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SellersGetResponse>
   */
  get(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.SellersGetResponse> {
    return this.get$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mercaux.Sellers/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.SellersGetResponse>>
   */
  get$eventStream(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.SellersGetResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mercaux.Sellers/Get',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf000.Empty,
      responseClass: thisProto.SellersGetResponse
    });
  }
}
/**
 * Service client implementation for mercaux.Orders
 */
@Injectable({
  providedIn: 'root'
})
export class OrdersClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_ORDERS_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('mercaux.Orders', settings);
  }

  /**
   * Unary RPC for /mercaux.Orders/New
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OrdersNewResponse>
   */
  new(
    requestData: thisProto.OrdersNewParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OrdersNewResponse> {
    return this.new$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mercaux.Orders/New
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OrdersNewResponse>>
   */
  new$eventStream(
    requestData: thisProto.OrdersNewParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OrdersNewResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mercaux.Orders/New',
      requestData,
      requestMetadata,
      requestClass: thisProto.OrdersNewParams,
      responseClass: thisProto.OrdersNewResponse
    });
  }
}
