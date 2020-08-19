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
import * as thisProto from './payments.pb';
import { GRPC_PAYMENTS_CLIENT_SETTINGS } from './payments.pbconf';
/**
 * Service client implementation for payments.Payments
 */
@Injectable({
  providedIn: 'root'
})
export class PaymentsClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_PAYMENTS_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('payments.Payments', settings);
  }

  /**
   * Unary RPC for /payments.Payments/GetCardsByUserID
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseGetCardByUserID>
   */
  getCardsByUserID(
    requestData: thisProto.ParamsGetCardByUserID,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseGetCardByUserID> {
    return this.getCardsByUserID$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /payments.Payments/GetCardsByUserID
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseGetCardByUserID>>
   */
  getCardsByUserID$eventStream(
    requestData: thisProto.ParamsGetCardByUserID,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseGetCardByUserID>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/payments.Payments/GetCardsByUserID',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsGetCardByUserID,
      responseClass: thisProto.ResponseGetCardByUserID
    });
  }

  /**
   * Unary RPC for /payments.Payments/SaveUserCard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseSuccess>
   */
  saveUserCard(
    requestData: thisProto.UserCard,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseSuccess> {
    return this.saveUserCard$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /payments.Payments/SaveUserCard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseSuccess>>
   */
  saveUserCard$eventStream(
    requestData: thisProto.UserCard,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseSuccess>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/payments.Payments/SaveUserCard',
      requestData,
      requestMetadata,
      requestClass: thisProto.UserCard,
      responseClass: thisProto.ResponseSuccess
    });
  }

  /**
   * Unary RPC for /payments.Payments/DeleteCardByID
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseSuccess>
   */
  deleteCardByID(
    requestData: thisProto.ParamsDeleteCardByID,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseSuccess> {
    return this.deleteCardByID$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /payments.Payments/DeleteCardByID
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseSuccess>>
   */
  deleteCardByID$eventStream(
    requestData: thisProto.ParamsDeleteCardByID,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseSuccess>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/payments.Payments/DeleteCardByID',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsDeleteCardByID,
      responseClass: thisProto.ResponseSuccess
    });
  }
}
