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
import * as thisProto from './slack.pb';
import {
  GRPC_TRACKER_CLIENT_SETTINGS,
  GRPC_SLACK_CLIENT_SETTINGS
} from './slack.pbconf';
/**
 * Service client implementation for slack.Tracker
 */
@Injectable({
  providedIn: 'root'
})
export class TrackerClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_TRACKER_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('slack.Tracker', settings);
  }

  /**
   * Unary RPC for /slack.Tracker/StatusChangeTicket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StatusChangeTicketResponse>
   */
  statusChangeTicket(
    requestData: thisProto.StatusChangeTicketParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.StatusChangeTicketResponse> {
    return this.statusChangeTicket$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /slack.Tracker/StatusChangeTicket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.StatusChangeTicketResponse>>
   */
  statusChangeTicket$eventStream(
    requestData: thisProto.StatusChangeTicketParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.StatusChangeTicketResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/slack.Tracker/StatusChangeTicket',
      requestData,
      requestMetadata,
      requestClass: thisProto.StatusChangeTicketParams,
      responseClass: thisProto.StatusChangeTicketResponse
    });
  }
}
/**
 * Service client implementation for slack.Slack
 */
@Injectable({
  providedIn: 'root'
})
export class SlackClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_SLACK_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('slack.Slack', settings);
  }

  /**
   * Unary RPC for /slack.Slack/Send
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SendResponse>
   */
  send(
    requestData: thisProto.SendParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.SendResponse> {
    return this.send$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /slack.Slack/Send
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.SendResponse>>
   */
  send$eventStream(
    requestData: thisProto.SendParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.SendResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/slack.Slack/Send',
      requestData,
      requestMetadata,
      requestClass: thisProto.SendParams,
      responseClass: thisProto.SendResponse
    });
  }
}
