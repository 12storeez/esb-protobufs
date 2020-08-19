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
import * as thisProto from './mindbox.pb';
import {
  GRPC_USER_CLIENT_SETTINGS,
  GRPC_MOBILE_CLIENT_SETTINGS
} from './mindbox.pbconf';
/**
 * Service client implementation for mindbox.User
 */
@Injectable({
  providedIn: 'root'
})
export class UserClient {
  private client: GrpcClient;

  constructor(
    @Optional() @Inject(GRPC_USER_CLIENT_SETTINGS) settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('mindbox.User', settings);
  }

  /**
   * Unary RPC for /mindbox.User/Info
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseUser>
   */
  info(
    requestData: thisProto.ParamsUser,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseUser> {
    return this.info$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.User/Info
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseUser>>
   */
  info$eventStream(
    requestData: thisProto.ParamsUser,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseUser>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.User/Info',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsUser,
      responseClass: thisProto.ResponseUser
    });
  }

  /**
   * Unary RPC for /mindbox.User/Orders
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOrders>
   */
  orders(
    requestData: thisProto.ParamsOrders,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOrders> {
    return this.orders$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.User/Orders
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOrders>>
   */
  orders$eventStream(
    requestData: thisProto.ParamsOrders,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOrders>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.User/Orders',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsOrders,
      responseClass: thisProto.ResponseOrders
    });
  }

  /**
   * Unary RPC for /mindbox.User/SendOSMICard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOSMICard>
   */
  sendOSMICard(
    requestData: thisProto.ParamsOSMICard,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOSMICard> {
    return this.sendOSMICard$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.User/SendOSMICard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOSMICard>>
   */
  sendOSMICard$eventStream(
    requestData: thisProto.ParamsOSMICard,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOSMICard>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.User/SendOSMICard',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsOSMICard,
      responseClass: thisProto.ResponseOSMICard
    });
  }
}
/**
 * Service client implementation for mindbox.Mobile
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
    this.client = clientFactory.createClient('mindbox.Mobile', settings);
  }

  /**
   * Unary RPC for /mindbox.Mobile/InitDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.InitDeviceResponse>
   */
  initDevice(
    requestData: thisProto.InitDeviceParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.InitDeviceResponse> {
    return this.initDevice$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.Mobile/InitDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.InitDeviceResponse>>
   */
  initDevice$eventStream(
    requestData: thisProto.InitDeviceParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.InitDeviceResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.Mobile/InitDevice',
      requestData,
      requestMetadata,
      requestClass: thisProto.InitDeviceParams,
      responseClass: thisProto.InitDeviceResponse
    });
  }

  /**
   * Unary RPC for /mindbox.Mobile/InitClient
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.InitClientResponse>
   */
  initClient(
    requestData: thisProto.InitClientParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.InitClientResponse> {
    return this.initClient$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.Mobile/InitClient
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.InitClientResponse>>
   */
  initClient$eventStream(
    requestData: thisProto.InitClientParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.InitClientResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.Mobile/InitClient',
      requestData,
      requestMetadata,
      requestClass: thisProto.InitClientParams,
      responseClass: thisProto.InitClientResponse
    });
  }

  /**
   * Unary RPC for /mindbox.Mobile/RemoveDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RemoveDeviceResponse>
   */
  removeDevice(
    requestData: thisProto.RemoveDeviceParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.RemoveDeviceResponse> {
    return this.removeDevice$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.Mobile/RemoveDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.RemoveDeviceResponse>>
   */
  removeDevice$eventStream(
    requestData: thisProto.RemoveDeviceParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.RemoveDeviceResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.Mobile/RemoveDevice',
      requestData,
      requestMetadata,
      requestClass: thisProto.RemoveDeviceParams,
      responseClass: thisProto.RemoveDeviceResponse
    });
  }

  /**
   * Unary RPC for /mindbox.Mobile/Code
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseCode>
   */
  code(
    requestData: thisProto.ParamsCode,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseCode> {
    return this.code$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.Mobile/Code
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseCode>>
   */
  code$eventStream(
    requestData: thisProto.ParamsCode,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseCode>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.Mobile/Code',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsCode,
      responseClass: thisProto.ResponseCode
    });
  }

  /**
   * Unary RPC for /mindbox.Mobile/CheckCode
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseCheckCode>
   */
  checkCode(
    requestData: thisProto.ParamsCheckCode,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseCheckCode> {
    return this.checkCode$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.Mobile/CheckCode
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseCheckCode>>
   */
  checkCode$eventStream(
    requestData: thisProto.ParamsCheckCode,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseCheckCode>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.Mobile/CheckCode',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsCheckCode,
      responseClass: thisProto.ResponseCheckCode
    });
  }

  /**
   * Unary RPC for /mindbox.Mobile/EditUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseEditUser>
   */
  editUser(
    requestData: thisProto.ParamsEditUser,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseEditUser> {
    return this.editUser$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.Mobile/EditUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseEditUser>>
   */
  editUser$eventStream(
    requestData: thisProto.ParamsEditUser,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseEditUser>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.Mobile/EditUser',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsEditUser,
      responseClass: thisProto.ResponseEditUser
    });
  }

  /**
   * Unary RPC for /mindbox.Mobile/IsUserExist
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.IsUserExistResponse>
   */
  isUserExist(
    requestData: thisProto.IsUserExistParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.IsUserExistResponse> {
    return this.isUserExist$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /mindbox.Mobile/IsUserExist
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.IsUserExistResponse>>
   */
  isUserExist$eventStream(
    requestData: thisProto.IsUserExistParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.IsUserExistResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/mindbox.Mobile/IsUserExist',
      requestData,
      requestMetadata,
      requestClass: thisProto.IsUserExistParams,
      responseClass: thisProto.IsUserExistResponse
    });
  }
}
