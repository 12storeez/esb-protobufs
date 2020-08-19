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
import * as thisProto from './meta.pb';
import * as googleProtobuf000 from './google/protobuf/empty.pb';
import {
  GRPC_MOBILE_CLIENT_SETTINGS,
  GRPC_STORES_CLIENT_SETTINGS
} from './meta.pbconf';
/**
 * Service client implementation for meta.Mobile
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
    this.client = clientFactory.createClient('meta.Mobile', settings);
  }

  /**
   * Unary RPC for /meta.Mobile/Contacts
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseMobileAPIContacts>
   */
  contacts(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseMobileAPIContacts> {
    return this.contacts$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /meta.Mobile/Contacts
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseMobileAPIContacts>>
   */
  contacts$eventStream(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseMobileAPIContacts>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/meta.Mobile/Contacts',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf000.Empty,
      responseClass: thisProto.ResponseMobileAPIContacts
    });
  }

  /**
   * Unary RPC for /meta.Mobile/About
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseMobileApiAbout>
   */
  about(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseMobileApiAbout> {
    return this.about$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /meta.Mobile/About
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseMobileApiAbout>>
   */
  about$eventStream(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseMobileApiAbout>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/meta.Mobile/About',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf000.Empty,
      responseClass: thisProto.ResponseMobileApiAbout
    });
  }

  /**
   * Unary RPC for /meta.Mobile/Faq
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseFaq>
   */
  faq(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseFaq> {
    return this.faq$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /meta.Mobile/Faq
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseFaq>>
   */
  faq$eventStream(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseFaq>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/meta.Mobile/Faq',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf000.Empty,
      responseClass: thisProto.ResponseFaq
    });
  }

  /**
   * Unary RPC for /meta.Mobile/Countries
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseCountries>
   */
  countries(
    requestData: thisProto.ParamsCountries,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseCountries> {
    return this.countries$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /meta.Mobile/Countries
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseCountries>>
   */
  countries$eventStream(
    requestData: thisProto.ParamsCountries,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseCountries>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/meta.Mobile/Countries',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsCountries,
      responseClass: thisProto.ResponseCountries
    });
  }

  /**
   * Unary RPC for /meta.Mobile/SocialNetworks
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseSocialNetworks>
   */
  socialNetworks(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseSocialNetworks> {
    return this.socialNetworks$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /meta.Mobile/SocialNetworks
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseSocialNetworks>>
   */
  socialNetworks$eventStream(
    requestData: googleProtobuf000.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseSocialNetworks>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/meta.Mobile/SocialNetworks',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf000.Empty,
      responseClass: thisProto.ResponseSocialNetworks
    });
  }
}
/**
 * Service client implementation for meta.Stores
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
    this.client = clientFactory.createClient('meta.Stores', settings);
  }

  /**
   * Unary RPC for /meta.Stores/All
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseAllOfflineStoresInfo>
   */
  all(
    requestData: thisProto.ParamsStores,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseAllOfflineStoresInfo> {
    return this.all$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /meta.Stores/All
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseAllOfflineStoresInfo>>
   */
  all$eventStream(
    requestData: thisProto.ParamsStores,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseAllOfflineStoresInfo>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/meta.Stores/All',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsStores,
      responseClass: thisProto.ResponseAllOfflineStoresInfo
    });
  }

  /**
   * Unary RPC for /meta.Stores/ByID
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseOfflineStoreInfoByID>
   */
  byID(
    requestData: thisProto.ParamsOfflineStoreInfoByID,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseOfflineStoreInfoByID> {
    return this.byID$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /meta.Stores/ByID
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseOfflineStoreInfoByID>>
   */
  byID$eventStream(
    requestData: thisProto.ParamsOfflineStoreInfoByID,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseOfflineStoreInfoByID>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/meta.Stores/ByID',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsOfflineStoreInfoByID,
      responseClass: thisProto.ResponseOfflineStoreInfoByID
    });
  }

  /**
   * Unary RPC for /meta.Stores/Cities
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ResponseStoresCities>
   */
  cities(
    requestData: thisProto.ParamsStoresCities,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ResponseStoresCities> {
    return this.cities$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /meta.Stores/Cities
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ResponseStoresCities>>
   */
  cities$eventStream(
    requestData: thisProto.ParamsStoresCities,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ResponseStoresCities>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/meta.Stores/Cities',
      requestData,
      requestMetadata,
      requestClass: thisProto.ParamsStoresCities,
      responseClass: thisProto.ResponseStoresCities
    });
  }
}
