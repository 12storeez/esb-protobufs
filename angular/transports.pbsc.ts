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
import * as thisProto from './transports.pb';
import {
  GRPC_ZONES_CLIENT_SETTINGS,
  GRPC_ZONE_MANUAL_PRIORITY_CLIENT_SETTINGS,
  GRPC_DELIVERY_METHOD_CLIENT_SETTINGS,
  GRPC_PAYMENT_METHOD_CLIENT_SETTINGS,
  GRPC_ZONE_DELIVERY_MATRIX_CLIENT_SETTINGS,
  GRPC_ZONE_PAYMENT_METHOD_CLIENT_SETTINGS,
  GRPC_WINNERS_COMPANIES_CLIENT_SETTINGS
} from './transports.pbconf';
/**
 * Service client implementation for transport.Zones
 */
@Injectable({
  providedIn: 'root'
})
export class ZonesClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_ZONES_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('transport.Zones', settings);
  }

  /**
   * Unary RPC for /transport.Zones/GetIdByFias
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ZoneID>
   */
  getIdByFias(
    requestData: thisProto.Fias,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ZoneID> {
    return this.getIdByFias$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.Zones/GetIdByFias
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ZoneID>>
   */
  getIdByFias$eventStream(
    requestData: thisProto.Fias,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ZoneID>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.Zones/GetIdByFias',
      requestData,
      requestMetadata,
      requestClass: thisProto.Fias,
      responseClass: thisProto.ZoneID
    });
  }

  /**
   * Unary RPC for /transport.Zones/GetIdByFiases
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ZoneID>
   */
  getIdByFiases(
    requestData: thisProto.GetIdByFiasesParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ZoneID> {
    return this.getIdByFiases$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.Zones/GetIdByFiases
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ZoneID>>
   */
  getIdByFiases$eventStream(
    requestData: thisProto.GetIdByFiasesParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ZoneID>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.Zones/GetIdByFiases',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetIdByFiasesParams,
      responseClass: thisProto.ZoneID
    });
  }

  /**
   * Unary RPC for /transport.Zones/GetZoneById
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Zone>
   */
  getZoneById(
    requestData: thisProto.GetZoneByIdParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Zone> {
    return this.getZoneById$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.Zones/GetZoneById
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Zone>>
   */
  getZoneById$eventStream(
    requestData: thisProto.GetZoneByIdParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Zone>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.Zones/GetZoneById',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetZoneByIdParams,
      responseClass: thisProto.Zone
    });
  }

  /**
   * Unary RPC for /transport.Zones/Create
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ZoneID>
   */
  create(
    requestData: thisProto.CreateParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ZoneID> {
    return this.create$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.Zones/Create
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ZoneID>>
   */
  create$eventStream(
    requestData: thisProto.CreateParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ZoneID>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.Zones/Create',
      requestData,
      requestMetadata,
      requestClass: thisProto.CreateParams,
      responseClass: thisProto.ZoneID
    });
  }

  /**
   * Unary RPC for /transport.Zones/AddFiasToZone
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  addFiasToZone(
    requestData: thisProto.AddFiasToZoneParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.addFiasToZone$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.Zones/AddFiasToZone
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  addFiasToZone$eventStream(
    requestData: thisProto.AddFiasToZoneParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.Zones/AddFiasToZone',
      requestData,
      requestMetadata,
      requestClass: thisProto.AddFiasToZoneParams,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.Zones/All
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AllResponse>
   */
  all(
    requestData: thisProto.AllParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.AllResponse> {
    return this.all$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.Zones/All
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.AllResponse>>
   */
  all$eventStream(
    requestData: thisProto.AllParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.AllResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.Zones/All',
      requestData,
      requestMetadata,
      requestClass: thisProto.AllParams,
      responseClass: thisProto.AllResponse
    });
  }

  /**
   * Unary RPC for /transport.Zones/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  update(
    requestData: thisProto.Zone,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.update$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.Zones/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  update$eventStream(
    requestData: thisProto.Zone,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.Zones/Update',
      requestData,
      requestMetadata,
      requestClass: thisProto.Zone,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.Zones/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  delete(
    requestData: thisProto.ZoneID,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.delete$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.Zones/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  delete$eventStream(
    requestData: thisProto.ZoneID,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.Zones/Delete',
      requestData,
      requestMetadata,
      requestClass: thisProto.ZoneID,
      responseClass: thisProto.OkResponse
    });
  }
}
/**
 * Service client implementation for transport.ZoneManualPriority
 */
@Injectable({
  providedIn: 'root'
})
export class ZoneManualPriorityClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_ZONE_MANUAL_PRIORITY_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'transport.ZoneManualPriority',
      settings
    );
  }

  /**
   * Unary RPC for /transport.ZoneManualPriority/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  add(
    requestData: thisProto.AddManualPriorityParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.add$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZoneManualPriority/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  add$eventStream(
    requestData: thisProto.AddManualPriorityParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZoneManualPriority/Add',
      requestData,
      requestMetadata,
      requestClass: thisProto.AddManualPriorityParams,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.ZoneManualPriority/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ManualPriorityList>
   */
  get(
    requestData: thisProto.ZoneID,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ManualPriorityList> {
    return this.get$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZoneManualPriority/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ManualPriorityList>>
   */
  get$eventStream(
    requestData: thisProto.ZoneID,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ManualPriorityList>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZoneManualPriority/Get',
      requestData,
      requestMetadata,
      requestClass: thisProto.ZoneID,
      responseClass: thisProto.ManualPriorityList
    });
  }

  /**
   * Unary RPC for /transport.ZoneManualPriority/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  update(
    requestData: thisProto.ManualPriorityParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.update$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZoneManualPriority/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  update$eventStream(
    requestData: thisProto.ManualPriorityParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZoneManualPriority/Update',
      requestData,
      requestMetadata,
      requestClass: thisProto.ManualPriorityParams,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.ZoneManualPriority/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  delete(
    requestData: thisProto.ZoneDeliveryManualPriorityID,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.delete$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZoneManualPriority/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  delete$eventStream(
    requestData: thisProto.ZoneDeliveryManualPriorityID,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZoneManualPriority/Delete',
      requestData,
      requestMetadata,
      requestClass: thisProto.ZoneDeliveryManualPriorityID,
      responseClass: thisProto.OkResponse
    });
  }
}
/**
 * Service client implementation for transport.DeliveryMethod
 */
@Injectable({
  providedIn: 'root'
})
export class DeliveryMethodClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_DELIVERY_METHOD_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'transport.DeliveryMethod',
      settings
    );
  }

  /**
   * Unary RPC for /transport.DeliveryMethod/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  add(
    requestData: thisProto.AddDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.add$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.DeliveryMethod/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  add$eventStream(
    requestData: thisProto.AddDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.DeliveryMethod/Add',
      requestData,
      requestMetadata,
      requestClass: thisProto.AddDeliveryMethodParams,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.DeliveryMethod/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetDeliveryMethodResponse>
   */
  get(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.GetDeliveryMethodResponse> {
    return this.get$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.DeliveryMethod/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.GetDeliveryMethodResponse>>
   */
  get$eventStream(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.GetDeliveryMethodResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.DeliveryMethod/Get',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetDeliveryMethodParams,
      responseClass: thisProto.GetDeliveryMethodResponse
    });
  }

  /**
   * Unary RPC for /transport.DeliveryMethod/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  update(
    requestData: thisProto.GetDeliveryMethodResponse,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.update$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.DeliveryMethod/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  update$eventStream(
    requestData: thisProto.GetDeliveryMethodResponse,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.DeliveryMethod/Update',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetDeliveryMethodResponse,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.DeliveryMethod/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  delete(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.delete$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.DeliveryMethod/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  delete$eventStream(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.DeliveryMethod/Delete',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetDeliveryMethodParams,
      responseClass: thisProto.OkResponse
    });
  }
}
/**
 * Service client implementation for transport.PaymentMethod
 */
@Injectable({
  providedIn: 'root'
})
export class PaymentMethodClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_PAYMENT_METHOD_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'transport.PaymentMethod',
      settings
    );
  }

  /**
   * Unary RPC for /transport.PaymentMethod/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  add(
    requestData: thisProto.AddDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.add$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.PaymentMethod/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  add$eventStream(
    requestData: thisProto.AddDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.PaymentMethod/Add',
      requestData,
      requestMetadata,
      requestClass: thisProto.AddDeliveryMethodParams,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.PaymentMethod/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetDeliveryMethodResponse>
   */
  get(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.GetDeliveryMethodResponse> {
    return this.get$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.PaymentMethod/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.GetDeliveryMethodResponse>>
   */
  get$eventStream(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.GetDeliveryMethodResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.PaymentMethod/Get',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetDeliveryMethodParams,
      responseClass: thisProto.GetDeliveryMethodResponse
    });
  }

  /**
   * Unary RPC for /transport.PaymentMethod/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  update(
    requestData: thisProto.GetDeliveryMethodResponse,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.update$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.PaymentMethod/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  update$eventStream(
    requestData: thisProto.GetDeliveryMethodResponse,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.PaymentMethod/Update',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetDeliveryMethodResponse,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.PaymentMethod/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  delete(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.delete$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.PaymentMethod/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  delete$eventStream(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.PaymentMethod/Delete',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetDeliveryMethodParams,
      responseClass: thisProto.OkResponse
    });
  }
}
/**
 * Service client implementation for transport.ZoneDeliveryMatrix
 */
@Injectable({
  providedIn: 'root'
})
export class ZoneDeliveryMatrixClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_ZONE_DELIVERY_MATRIX_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'transport.ZoneDeliveryMatrix',
      settings
    );
  }

  /**
   * Unary RPC for /transport.ZoneDeliveryMatrix/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  add(
    requestData: thisProto.AddZoneDeliveryMatrixParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.add$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZoneDeliveryMatrix/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  add$eventStream(
    requestData: thisProto.AddZoneDeliveryMatrixParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZoneDeliveryMatrix/Add',
      requestData,
      requestMetadata,
      requestClass: thisProto.AddZoneDeliveryMatrixParams,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.ZoneDeliveryMatrix/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ZoneDeliveryMatrixModel>
   */
  get(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ZoneDeliveryMatrixModel> {
    return this.get$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZoneDeliveryMatrix/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ZoneDeliveryMatrixModel>>
   */
  get$eventStream(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ZoneDeliveryMatrixModel>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZoneDeliveryMatrix/Get',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetDeliveryMethodParams,
      responseClass: thisProto.ZoneDeliveryMatrixModel
    });
  }

  /**
   * Unary RPC for /transport.ZoneDeliveryMatrix/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  update(
    requestData: thisProto.ZoneDeliveryMatrixModel,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.update$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZoneDeliveryMatrix/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  update$eventStream(
    requestData: thisProto.ZoneDeliveryMatrixModel,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZoneDeliveryMatrix/Update',
      requestData,
      requestMetadata,
      requestClass: thisProto.ZoneDeliveryMatrixModel,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.ZoneDeliveryMatrix/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  delete(
    requestData: thisProto.ZoneDeliveryMatrixModel,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.delete$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZoneDeliveryMatrix/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  delete$eventStream(
    requestData: thisProto.ZoneDeliveryMatrixModel,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZoneDeliveryMatrix/Delete',
      requestData,
      requestMetadata,
      requestClass: thisProto.ZoneDeliveryMatrixModel,
      responseClass: thisProto.OkResponse
    });
  }
}
/**
 * Service client implementation for transport.ZonePaymentMethod
 */
@Injectable({
  providedIn: 'root'
})
export class ZonePaymentMethodClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_ZONE_PAYMENT_METHOD_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'transport.ZonePaymentMethod',
      settings
    );
  }

  /**
   * Unary RPC for /transport.ZonePaymentMethod/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  add(
    requestData: thisProto.AddZonePaymentMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.add$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZonePaymentMethod/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  add$eventStream(
    requestData: thisProto.AddZonePaymentMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZonePaymentMethod/Add',
      requestData,
      requestMetadata,
      requestClass: thisProto.AddZonePaymentMethodParams,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.ZonePaymentMethod/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ZonePaymentMethodModel>
   */
  get(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ZonePaymentMethodModel> {
    return this.get$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZonePaymentMethod/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ZonePaymentMethodModel>>
   */
  get$eventStream(
    requestData: thisProto.GetDeliveryMethodParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ZonePaymentMethodModel>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZonePaymentMethod/Get',
      requestData,
      requestMetadata,
      requestClass: thisProto.GetDeliveryMethodParams,
      responseClass: thisProto.ZonePaymentMethodModel
    });
  }

  /**
   * Unary RPC for /transport.ZonePaymentMethod/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  update(
    requestData: thisProto.ZonePaymentMethodModel,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.update$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZonePaymentMethod/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  update$eventStream(
    requestData: thisProto.ZonePaymentMethodModel,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZonePaymentMethod/Update',
      requestData,
      requestMetadata,
      requestClass: thisProto.ZonePaymentMethodModel,
      responseClass: thisProto.OkResponse
    });
  }

  /**
   * Unary RPC for /transport.ZonePaymentMethod/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OkResponse>
   */
  delete(
    requestData: thisProto.ZonePaymentMethodModel,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.OkResponse> {
    return this.delete$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.ZonePaymentMethod/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.OkResponse>>
   */
  delete$eventStream(
    requestData: thisProto.ZonePaymentMethodModel,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.OkResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.ZonePaymentMethod/Delete',
      requestData,
      requestMetadata,
      requestClass: thisProto.ZonePaymentMethodModel,
      responseClass: thisProto.OkResponse
    });
  }
}
/**
 * Service client implementation for transport.WinnersCompanies
 */
@Injectable({
  providedIn: 'root'
})
export class WinnersCompaniesClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_WINNERS_COMPANIES_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'transport.WinnersCompanies',
      settings
    );
  }

  /**
   * Unary RPC for /transport.WinnersCompanies/Winners
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WinnersResponse>
   */
  winners(
    requestData: thisProto.WinnersParams,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.WinnersResponse> {
    return this.winners$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /transport.WinnersCompanies/Winners
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.WinnersResponse>>
   */
  winners$eventStream(
    requestData: thisProto.WinnersParams,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.WinnersResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/transport.WinnersCompanies/Winners',
      requestData,
      requestMetadata,
      requestClass: thisProto.WinnersParams,
      responseClass: thisProto.WinnersResponse
    });
  }
}
