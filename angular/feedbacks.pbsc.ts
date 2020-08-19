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
import * as thisProto from './feedbacks.pb';
import * as googleProtobuf000 from './google/protobuf/empty.pb';
import {
  GRPC_MOBILE_CLIENT_SETTINGS,
  GRPC_STORE_CLIENT_SETTINGS
} from './feedbacks.pbconf';
/**
 * Service client implementation for feedbacks.Mobile
 */
@Injectable({
  providedIn: 'root'
})
export class MobileClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_MOBILE_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('feedbacks.Mobile', settings);
  }

  /**
   * Unary RPC for /feedbacks.Mobile/App
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOk>
   */
  app(
    requestData: thisProto.ParamsApp,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOk> {
    return this.app$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /feedbacks.Mobile/App
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOk>>
   */
  app$eventStream(
    requestData: thisProto.ParamsApp,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOk>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/feedbacks.Mobile/App',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsApp,
      responseClass: thisProto.ResponseOk
    });
  }

  /**
   * Unary RPC for /feedbacks.Mobile/Store
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOk>
   */
  store(
    requestData: thisProto.ParamsStore,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOk> {
    return this.store$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /feedbacks.Mobile/Store
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOk>>
   */
  store$eventStream(
    requestData: thisProto.ParamsStore,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOk>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/feedbacks.Mobile/Store',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsStore,
      responseClass: thisProto.ResponseOk
    });
  }

  /**
   * Unary RPC for /feedbacks.Mobile/Order
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOk>
   */
  order(
    requestData: thisProto.ParamsOrder,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOk> {
    return this.order$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /feedbacks.Mobile/Order
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOk>>
   */
  order$eventStream(
    requestData: thisProto.ParamsOrder,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOk>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/feedbacks.Mobile/Order',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsOrder,
      responseClass: thisProto.ResponseOk
    });
  }

  /**
   * Unary RPC for /feedbacks.Mobile/Categories
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseCategories>
   */
  categories(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseCategories> {
    return this.categories$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /feedbacks.Mobile/Categories
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseCategories>>
   */
  categories$eventStream(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseCategories>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/feedbacks.Mobile/Categories',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf000.Empty,
      responseClass: thisProto.ResponseCategories
    });
  }

  /**
   * Unary RPC for /feedbacks.Mobile/ReasonsByOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseReasons>
   */
  reasonsByOrder(
    requestData: thisProto.ParamsReasonsByOrder,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseReasons> {
    return this.reasonsByOrder$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /feedbacks.Mobile/ReasonsByOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseReasons>>
   */
  reasonsByOrder$eventStream(
    requestData: thisProto.ParamsReasonsByOrder,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseReasons>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/feedbacks.Mobile/ReasonsByOrder',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsReasonsByOrder,
      responseClass: thisProto.ResponseReasons
    });
  }

  /**
   * Unary RPC for /feedbacks.Mobile/ReasonsByStore
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseReasons>
   */
  reasonsByStore(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseReasons> {
    return this.reasonsByStore$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /feedbacks.Mobile/ReasonsByStore
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseReasons>>
   */
  reasonsByStore$eventStream(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseReasons>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/feedbacks.Mobile/ReasonsByStore',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf000.Empty,
      responseClass: thisProto.ResponseReasons
    });
  }

  /**
   * Unary RPC for /feedbacks.Mobile/CanBeSaved
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOk>
   */
  canBeSaved(
    requestData: thisProto.CanBeSavedParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOk> {
    return this.canBeSaved$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /feedbacks.Mobile/CanBeSaved
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOk>>
   */
  canBeSaved$eventStream(
    requestData: thisProto.CanBeSavedParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOk>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/feedbacks.Mobile/CanBeSaved',
      requestData,
      requestMetadata,
      requestClass: thisProto.CanBeSavedParams,
      responseClass: thisProto.ResponseOk
    });
  }
}
/**
 * Service client implementation for feedbacks.Store
 */
@Injectable({
  providedIn: 'root'
})
export class StoreClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_STORE_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('feedbacks.Store', settings);
  }

  /**
   * Unary RPC for /feedbacks.Store/New
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.NewResponse>
   */
  new(
    requestData: thisProto.NewParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.NewResponse> {
    return this.new$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /feedbacks.Store/New
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.NewResponse>>
   */
  new$eventStream(
    requestData: thisProto.NewParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.NewResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/feedbacks.Store/New',
      requestData,
      requestMetadata,
      requestClass: thisProto.NewParams,
      responseClass: thisProto.NewResponse
    });
  }

  /**
   * Unary RPC for /feedbacks.Store/Patch
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOk>
   */
  patch(
    requestData: thisProto.PatchParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOk> {
    return this.patch$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /feedbacks.Store/Patch
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOk>>
   */
  patch$eventStream(
    requestData: thisProto.PatchParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOk>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/feedbacks.Store/Patch',
      requestData,
      requestMetadata,
      requestClass: thisProto.PatchParams,
      responseClass: thisProto.ResponseOk
    });
  }
}
