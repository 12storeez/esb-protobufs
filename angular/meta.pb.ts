/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from './google/protobuf/empty.pb';
/**
 * Message implementation for meta.ResponseAllOfflineStoresInfo
 */
export class ResponseAllOfflineStoresInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseAllOfflineStoresInfo();
    ResponseAllOfflineStoresInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseAllOfflineStoresInfo) {
    _instance.result = _instance.result || [];
    _instance.total = _instance.total || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseAllOfflineStoresInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new OfflineStore();
          _reader.readMessage(
            messageInitializer1,
            OfflineStore.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer1);
          break;
        case 2:
          _instance.total = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseAllOfflineStoresInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseAllOfflineStoresInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.result as any,
        OfflineStore.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt32(2, _instance.total);
    }
  }

  private _result?: OfflineStore[];
  private _total?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseAllOfflineStoresInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseAllOfflineStoresInfo>) {
    _value = _value || {};
    this.result = (_value.result || []).map(m => new OfflineStore(m));
    this.total = _value.total;
    ResponseAllOfflineStoresInfo.refineValues(this);
  }
  get result(): OfflineStore[] | undefined {
    return this._result;
  }
  set result(value: OfflineStore[] | undefined) {
    this._result = value;
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseAllOfflineStoresInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseAllOfflineStoresInfo.AsObject {
    return {
      result: (this.result || []).map(m => m.toObject()),
      total: this.total
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ResponseAllOfflineStoresInfo {
  /**
   * Standard JavaScript object representation for ResponseAllOfflineStoresInfo
   */
  export interface AsObject {
    result?: OfflineStore.AsObject[];
    total?: number;
  }
}

/**
 * Message implementation for meta.OfflineStore
 */
export class OfflineStore implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OfflineStore();
    OfflineStore.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OfflineStore) {
    _instance.storeId = _instance.storeId || 0;
    _instance.title = _instance.title || '';
    _instance.address = _instance.address || '';
    _instance.phone = _instance.phone || '';
    _instance.geo = _instance.geo || '';
    _instance.city = _instance.city || '';
    _instance.country = _instance.country || '';
    _instance.active = _instance.active || false;
    _instance.pictureUrl = _instance.pictureUrl || '';
    _instance.schedule = _instance.schedule || '';
    _instance.cityId = _instance.cityId || 0;
    _instance.shortAddress = _instance.shortAddress || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OfflineStore,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.storeId = _reader.readInt32();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.address = _reader.readString();
          break;
        case 4:
          _instance.phone = _reader.readString();
          break;
        case 5:
          _instance.geo = _reader.readString();
          break;
        case 6:
          _instance.city = _reader.readString();
          break;
        case 7:
          _instance.country = _reader.readString();
          break;
        case 8:
          _instance.active = _reader.readBool();
          break;
        case 9:
          _instance.pictureUrl = _reader.readString();
          break;
        case 10:
          _instance.schedule = _reader.readString();
          break;
        case 11:
          _instance.cityId = _reader.readInt32();
          break;
        case 12:
          _instance.shortAddress = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    OfflineStore.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OfflineStore,
    _writer: BinaryWriter
  ) {
    if (_instance.storeId) {
      _writer.writeInt32(1, _instance.storeId);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.address) {
      _writer.writeString(3, _instance.address);
    }
    if (_instance.phone) {
      _writer.writeString(4, _instance.phone);
    }
    if (_instance.geo) {
      _writer.writeString(5, _instance.geo);
    }
    if (_instance.city) {
      _writer.writeString(6, _instance.city);
    }
    if (_instance.country) {
      _writer.writeString(7, _instance.country);
    }
    if (_instance.active) {
      _writer.writeBool(8, _instance.active);
    }
    if (_instance.pictureUrl) {
      _writer.writeString(9, _instance.pictureUrl);
    }
    if (_instance.schedule) {
      _writer.writeString(10, _instance.schedule);
    }
    if (_instance.cityId) {
      _writer.writeInt32(11, _instance.cityId);
    }
    if (_instance.shortAddress) {
      _writer.writeString(12, _instance.shortAddress);
    }
  }

  private _storeId?: number;
  private _title?: string;
  private _address?: string;
  private _phone?: string;
  private _geo?: string;
  private _city?: string;
  private _country?: string;
  private _active?: boolean;
  private _pictureUrl?: string;
  private _schedule?: string;
  private _cityId?: number;
  private _shortAddress?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OfflineStore to deeply clone from
   */
  constructor(_value?: RecursivePartial<OfflineStore>) {
    _value = _value || {};
    this.storeId = _value.storeId;
    this.title = _value.title;
    this.address = _value.address;
    this.phone = _value.phone;
    this.geo = _value.geo;
    this.city = _value.city;
    this.country = _value.country;
    this.active = _value.active;
    this.pictureUrl = _value.pictureUrl;
    this.schedule = _value.schedule;
    this.cityId = _value.cityId;
    this.shortAddress = _value.shortAddress;
    OfflineStore.refineValues(this);
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get phone(): string | undefined {
    return this._phone;
  }
  set phone(value: string | undefined) {
    this._phone = value;
  }
  get geo(): string | undefined {
    return this._geo;
  }
  set geo(value: string | undefined) {
    this._geo = value;
  }
  get city(): string | undefined {
    return this._city;
  }
  set city(value: string | undefined) {
    this._city = value;
  }
  get country(): string | undefined {
    return this._country;
  }
  set country(value: string | undefined) {
    this._country = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get pictureUrl(): string | undefined {
    return this._pictureUrl;
  }
  set pictureUrl(value: string | undefined) {
    this._pictureUrl = value;
  }
  get schedule(): string | undefined {
    return this._schedule;
  }
  set schedule(value: string | undefined) {
    this._schedule = value;
  }
  get cityId(): number | undefined {
    return this._cityId;
  }
  set cityId(value: number | undefined) {
    this._cityId = value;
  }
  get shortAddress(): string | undefined {
    return this._shortAddress;
  }
  set shortAddress(value: string | undefined) {
    this._shortAddress = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OfflineStore.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OfflineStore.AsObject {
    return {
      storeId: this.storeId,
      title: this.title,
      address: this.address,
      phone: this.phone,
      geo: this.geo,
      city: this.city,
      country: this.country,
      active: this.active,
      pictureUrl: this.pictureUrl,
      schedule: this.schedule,
      cityId: this.cityId,
      shortAddress: this.shortAddress
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module OfflineStore {
  /**
   * Standard JavaScript object representation for OfflineStore
   */
  export interface AsObject {
    storeId?: number;
    title?: string;
    address?: string;
    phone?: string;
    geo?: string;
    city?: string;
    country?: string;
    active?: boolean;
    pictureUrl?: string;
    schedule?: string;
    cityId?: number;
    shortAddress?: string;
  }
}

/**
 * Message implementation for meta.ParamsOfflineStoreInfoByID
 */
export class ParamsOfflineStoreInfoByID implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsOfflineStoreInfoByID();
    ParamsOfflineStoreInfoByID.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsOfflineStoreInfoByID) {
    _instance.storeId = _instance.storeId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsOfflineStoreInfoByID,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.storeId = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsOfflineStoreInfoByID.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsOfflineStoreInfoByID,
    _writer: BinaryWriter
  ) {
    if (_instance.storeId) {
      _writer.writeInt32(1, _instance.storeId);
    }
  }

  private _storeId?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsOfflineStoreInfoByID to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsOfflineStoreInfoByID>) {
    _value = _value || {};
    this.storeId = _value.storeId;
    ParamsOfflineStoreInfoByID.refineValues(this);
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsOfflineStoreInfoByID.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsOfflineStoreInfoByID.AsObject {
    return {
      storeId: this.storeId
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ParamsOfflineStoreInfoByID {
  /**
   * Standard JavaScript object representation for ParamsOfflineStoreInfoByID
   */
  export interface AsObject {
    storeId?: number;
  }
}

/**
 * Message implementation for meta.ResponseOfflineStoreInfoByID
 */
export class ResponseOfflineStoreInfoByID implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseOfflineStoreInfoByID();
    ResponseOfflineStoreInfoByID.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseOfflineStoreInfoByID) {
    _instance.store = _instance.store || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseOfflineStoreInfoByID,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.store = new OfflineStore();
          _reader.readMessage(
            _instance.store,
            OfflineStore.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseOfflineStoreInfoByID.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseOfflineStoreInfoByID,
    _writer: BinaryWriter
  ) {
    if (_instance.store) {
      _writer.writeMessage(
        1,
        _instance.store as any,
        OfflineStore.serializeBinaryToWriter
      );
    }
  }

  private _store?: OfflineStore;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseOfflineStoreInfoByID to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseOfflineStoreInfoByID>) {
    _value = _value || {};
    this.store = _value.store ? new OfflineStore(_value.store) : undefined;
    ResponseOfflineStoreInfoByID.refineValues(this);
  }
  get store(): OfflineStore | undefined {
    return this._store;
  }
  set store(value: OfflineStore | undefined) {
    this._store = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseOfflineStoreInfoByID.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseOfflineStoreInfoByID.AsObject {
    return {
      store: this.store ? this.store.toObject() : undefined
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ResponseOfflineStoreInfoByID {
  /**
   * Standard JavaScript object representation for ResponseOfflineStoreInfoByID
   */
  export interface AsObject {
    store?: OfflineStore.AsObject;
  }
}

/**
 * Message implementation for meta.ResponseMobileAPIContacts
 */
export class ResponseMobileAPIContacts implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseMobileAPIContacts();
    ResponseMobileAPIContacts.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseMobileAPIContacts) {
    _instance.email = _instance.email || '';
    _instance.partnership = _instance.partnership || '';
    _instance.phone = _instance.phone || undefined;
    _instance.quality = _instance.quality || '';
    _instance.social = _instance.social || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseMobileAPIContacts,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.email = _reader.readString();
          break;
        case 2:
          _instance.partnership = _reader.readString();
          break;
        case 3:
          _instance.phone = new Phone();
          _reader.readMessage(
            _instance.phone,
            Phone.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.quality = _reader.readString();
          break;
        case 5:
          _instance.social = new Social();
          _reader.readMessage(
            _instance.social,
            Social.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseMobileAPIContacts.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseMobileAPIContacts,
    _writer: BinaryWriter
  ) {
    if (_instance.email) {
      _writer.writeString(1, _instance.email);
    }
    if (_instance.partnership) {
      _writer.writeString(2, _instance.partnership);
    }
    if (_instance.phone) {
      _writer.writeMessage(
        3,
        _instance.phone as any,
        Phone.serializeBinaryToWriter
      );
    }
    if (_instance.quality) {
      _writer.writeString(4, _instance.quality);
    }
    if (_instance.social) {
      _writer.writeMessage(
        5,
        _instance.social as any,
        Social.serializeBinaryToWriter
      );
    }
  }

  private _email?: string;
  private _partnership?: string;
  private _phone?: Phone;
  private _quality?: string;
  private _social?: Social;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseMobileAPIContacts to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseMobileAPIContacts>) {
    _value = _value || {};
    this.email = _value.email;
    this.partnership = _value.partnership;
    this.phone = _value.phone ? new Phone(_value.phone) : undefined;
    this.quality = _value.quality;
    this.social = _value.social ? new Social(_value.social) : undefined;
    ResponseMobileAPIContacts.refineValues(this);
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }
  get partnership(): string | undefined {
    return this._partnership;
  }
  set partnership(value: string | undefined) {
    this._partnership = value;
  }
  get phone(): Phone | undefined {
    return this._phone;
  }
  set phone(value: Phone | undefined) {
    this._phone = value;
  }
  get quality(): string | undefined {
    return this._quality;
  }
  set quality(value: string | undefined) {
    this._quality = value;
  }
  get social(): Social | undefined {
    return this._social;
  }
  set social(value: Social | undefined) {
    this._social = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseMobileAPIContacts.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseMobileAPIContacts.AsObject {
    return {
      email: this.email,
      partnership: this.partnership,
      phone: this.phone ? this.phone.toObject() : undefined,
      quality: this.quality,
      social: this.social ? this.social.toObject() : undefined
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ResponseMobileAPIContacts {
  /**
   * Standard JavaScript object representation for ResponseMobileAPIContacts
   */
  export interface AsObject {
    email?: string;
    partnership?: string;
    phone?: Phone.AsObject;
    quality?: string;
    social?: Social.AsObject;
  }
}

/**
 * Message implementation for meta.Social
 */
export class Social implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Social();
    Social.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Social) {
    _instance.telegram = _instance.telegram || '';
    _instance.whatsapp = _instance.whatsapp || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Social, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.telegram = _reader.readString();
          break;
        case 2:
          _instance.whatsapp = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Social.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Social, _writer: BinaryWriter) {
    if (_instance.telegram) {
      _writer.writeString(1, _instance.telegram);
    }
    if (_instance.whatsapp) {
      _writer.writeString(2, _instance.whatsapp);
    }
  }

  private _telegram?: string;
  private _whatsapp?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Social to deeply clone from
   */
  constructor(_value?: RecursivePartial<Social>) {
    _value = _value || {};
    this.telegram = _value.telegram;
    this.whatsapp = _value.whatsapp;
    Social.refineValues(this);
  }
  get telegram(): string | undefined {
    return this._telegram;
  }
  set telegram(value: string | undefined) {
    this._telegram = value;
  }
  get whatsapp(): string | undefined {
    return this._whatsapp;
  }
  set whatsapp(value: string | undefined) {
    this._whatsapp = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Social.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Social.AsObject {
    return {
      telegram: this.telegram,
      whatsapp: this.whatsapp
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Social {
  /**
   * Standard JavaScript object representation for Social
   */
  export interface AsObject {
    telegram?: string;
    whatsapp?: string;
  }
}

/**
 * Message implementation for meta.Phone
 */
export class Phone implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Phone();
    Phone.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Phone) {
    _instance.subtitle = _instance.subtitle || '';
    _instance.title = _instance.title || '';
    _instance.numbers = _instance.numbers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Phone, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.subtitle = _reader.readString();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          (_instance.numbers = _instance.numbers || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Phone.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Phone, _writer: BinaryWriter) {
    if (_instance.subtitle) {
      _writer.writeString(1, _instance.subtitle);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.numbers && _instance.numbers.length) {
      _writer.writeRepeatedString(3, _instance.numbers);
    }
  }

  private _subtitle?: string;
  private _title?: string;
  private _numbers?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Phone to deeply clone from
   */
  constructor(_value?: RecursivePartial<Phone>) {
    _value = _value || {};
    this.subtitle = _value.subtitle;
    this.title = _value.title;
    this.numbers = (_value.numbers || []).slice();
    Phone.refineValues(this);
  }
  get subtitle(): string | undefined {
    return this._subtitle;
  }
  set subtitle(value: string | undefined) {
    this._subtitle = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get numbers(): string[] | undefined {
    return this._numbers;
  }
  set numbers(value: string[] | undefined) {
    this._numbers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Phone.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Phone.AsObject {
    return {
      subtitle: this.subtitle,
      title: this.title,
      numbers: (this.numbers || []).slice()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Phone {
  /**
   * Standard JavaScript object representation for Phone
   */
  export interface AsObject {
    subtitle?: string;
    title?: string;
    numbers?: string[];
  }
}

/**
 * Message implementation for meta.ResponseMobileApiAbout
 */
export class ResponseMobileApiAbout implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseMobileApiAbout();
    ResponseMobileApiAbout.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseMobileApiAbout) {
    _instance.about = _instance.about || '';
    _instance.mission = _instance.mission || '';
    _instance.blocks = _instance.blocks || [];
    _instance.imageUrl = _instance.imageUrl || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseMobileApiAbout,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.about = _reader.readString();
          break;
        case 2:
          _instance.mission = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new Block();
          _reader.readMessage(
            messageInitializer3,
            Block.deserializeBinaryFromReader
          );
          (_instance.blocks = _instance.blocks || []).push(messageInitializer3);
          break;
        case 4:
          _instance.imageUrl = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseMobileApiAbout.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseMobileApiAbout,
    _writer: BinaryWriter
  ) {
    if (_instance.about) {
      _writer.writeString(1, _instance.about);
    }
    if (_instance.mission) {
      _writer.writeString(2, _instance.mission);
    }
    if (_instance.blocks && _instance.blocks.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.blocks as any,
        Block.serializeBinaryToWriter
      );
    }
    if (_instance.imageUrl) {
      _writer.writeString(4, _instance.imageUrl);
    }
  }

  private _about?: string;
  private _mission?: string;
  private _blocks?: Block[];
  private _imageUrl?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseMobileApiAbout to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseMobileApiAbout>) {
    _value = _value || {};
    this.about = _value.about;
    this.mission = _value.mission;
    this.blocks = (_value.blocks || []).map(m => new Block(m));
    this.imageUrl = _value.imageUrl;
    ResponseMobileApiAbout.refineValues(this);
  }
  get about(): string | undefined {
    return this._about;
  }
  set about(value: string | undefined) {
    this._about = value;
  }
  get mission(): string | undefined {
    return this._mission;
  }
  set mission(value: string | undefined) {
    this._mission = value;
  }
  get blocks(): Block[] | undefined {
    return this._blocks;
  }
  set blocks(value: Block[] | undefined) {
    this._blocks = value;
  }
  get imageUrl(): string | undefined {
    return this._imageUrl;
  }
  set imageUrl(value: string | undefined) {
    this._imageUrl = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseMobileApiAbout.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseMobileApiAbout.AsObject {
    return {
      about: this.about,
      mission: this.mission,
      blocks: (this.blocks || []).map(m => m.toObject()),
      imageUrl: this.imageUrl
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ResponseMobileApiAbout {
  /**
   * Standard JavaScript object representation for ResponseMobileApiAbout
   */
  export interface AsObject {
    about?: string;
    mission?: string;
    blocks?: Block.AsObject[];
    imageUrl?: string;
  }
}

/**
 * Message implementation for meta.Block
 */
export class Block implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Block();
    Block.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Block) {
    _instance.title = _instance.title || '';
    _instance.value = _instance.value || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Block, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.title = _reader.readString();
          break;
        case 2:
          _instance.value = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Block.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Block, _writer: BinaryWriter) {
    if (_instance.title) {
      _writer.writeString(1, _instance.title);
    }
    if (_instance.value) {
      _writer.writeString(2, _instance.value);
    }
  }

  private _title?: string;
  private _value?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Block to deeply clone from
   */
  constructor(_value?: RecursivePartial<Block>) {
    _value = _value || {};
    this.title = _value.title;
    this.value = _value.value;
    Block.refineValues(this);
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get value(): string | undefined {
    return this._value;
  }
  set value(value: string | undefined) {
    this._value = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Block.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Block.AsObject {
    return {
      title: this.title,
      value: this.value
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Block {
  /**
   * Standard JavaScript object representation for Block
   */
  export interface AsObject {
    title?: string;
    value?: string;
  }
}

/**
 * Message implementation for meta.ResponseFaq
 */
export class ResponseFaq implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseFaq();
    ResponseFaq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseFaq) {
    _instance.result = _instance.result || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseFaq,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new BlockFaq();
          _reader.readMessage(
            messageInitializer1,
            BlockFaq.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseFaq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseFaq,
    _writer: BinaryWriter
  ) {
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.result as any,
        BlockFaq.serializeBinaryToWriter
      );
    }
  }

  private _result?: BlockFaq[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseFaq to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseFaq>) {
    _value = _value || {};
    this.result = (_value.result || []).map(m => new BlockFaq(m));
    ResponseFaq.refineValues(this);
  }
  get result(): BlockFaq[] | undefined {
    return this._result;
  }
  set result(value: BlockFaq[] | undefined) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseFaq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseFaq.AsObject {
    return {
      result: (this.result || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ResponseFaq {
  /**
   * Standard JavaScript object representation for ResponseFaq
   */
  export interface AsObject {
    result?: BlockFaq.AsObject[];
  }
}

/**
 * Message implementation for meta.BlockFaq
 */
export class BlockFaq implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BlockFaq();
    BlockFaq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BlockFaq) {
    _instance.title = _instance.title || '';
    _instance.content = _instance.content || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BlockFaq,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.title = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new TextFaq();
          _reader.readMessage(
            messageInitializer2,
            TextFaq.deserializeBinaryFromReader
          );
          (_instance.content = _instance.content || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BlockFaq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: BlockFaq, _writer: BinaryWriter) {
    if (_instance.title) {
      _writer.writeString(1, _instance.title);
    }
    if (_instance.content && _instance.content.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.content as any,
        TextFaq.serializeBinaryToWriter
      );
    }
  }

  private _title?: string;
  private _content?: TextFaq[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BlockFaq to deeply clone from
   */
  constructor(_value?: RecursivePartial<BlockFaq>) {
    _value = _value || {};
    this.title = _value.title;
    this.content = (_value.content || []).map(m => new TextFaq(m));
    BlockFaq.refineValues(this);
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get content(): TextFaq[] | undefined {
    return this._content;
  }
  set content(value: TextFaq[] | undefined) {
    this._content = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BlockFaq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BlockFaq.AsObject {
    return {
      title: this.title,
      content: (this.content || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module BlockFaq {
  /**
   * Standard JavaScript object representation for BlockFaq
   */
  export interface AsObject {
    title?: string;
    content?: TextFaq.AsObject[];
  }
}

/**
 * Message implementation for meta.TextFaq
 */
export class TextFaq implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TextFaq();
    TextFaq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TextFaq) {
    _instance.title = _instance.title || '';
    _instance.answer = _instance.answer || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TextFaq,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.title = _reader.readString();
          break;
        case 2:
          _instance.answer = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TextFaq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TextFaq, _writer: BinaryWriter) {
    if (_instance.title) {
      _writer.writeString(1, _instance.title);
    }
    if (_instance.answer) {
      _writer.writeString(2, _instance.answer);
    }
  }

  private _title?: string;
  private _answer?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TextFaq to deeply clone from
   */
  constructor(_value?: RecursivePartial<TextFaq>) {
    _value = _value || {};
    this.title = _value.title;
    this.answer = _value.answer;
    TextFaq.refineValues(this);
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get answer(): string | undefined {
    return this._answer;
  }
  set answer(value: string | undefined) {
    this._answer = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TextFaq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TextFaq.AsObject {
    return {
      title: this.title,
      answer: this.answer
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module TextFaq {
  /**
   * Standard JavaScript object representation for TextFaq
   */
  export interface AsObject {
    title?: string;
    answer?: string;
  }
}

/**
 * Message implementation for meta.ParamsStoresCities
 */
export class ParamsStoresCities implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsStoresCities();
    ParamsStoresCities.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsStoresCities) {
    _instance.offset = _instance.offset || 0;
    _instance.limit = _instance.limit || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsStoresCities,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.offset = _reader.readInt32();
          break;
        case 2:
          _instance.limit = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsStoresCities.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsStoresCities,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeInt32(1, _instance.offset);
    }
    if (_instance.limit) {
      _writer.writeInt32(2, _instance.limit);
    }
  }

  private _offset?: number;
  private _limit?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsStoresCities to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsStoresCities>) {
    _value = _value || {};
    this.offset = _value.offset;
    this.limit = _value.limit;
    ParamsStoresCities.refineValues(this);
  }
  get offset(): number | undefined {
    return this._offset;
  }
  set offset(value: number | undefined) {
    this._offset = value;
  }
  get limit(): number | undefined {
    return this._limit;
  }
  set limit(value: number | undefined) {
    this._limit = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsStoresCities.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsStoresCities.AsObject {
    return {
      offset: this.offset,
      limit: this.limit
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ParamsStoresCities {
  /**
   * Standard JavaScript object representation for ParamsStoresCities
   */
  export interface AsObject {
    offset?: number;
    limit?: number;
  }
}

/**
 * Message implementation for meta.City
 */
export class City implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new City();
    City.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: City) {
    _instance.cityId = _instance.cityId || 0;
    _instance.title = _instance.title || '';
    _instance.stores = _instance.stores || 0;
    _instance.country = _instance.country || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: City, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.cityId = _reader.readInt32();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.stores = _reader.readInt32();
          break;
        case 4:
          _instance.country = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    City.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: City, _writer: BinaryWriter) {
    if (_instance.cityId) {
      _writer.writeInt32(1, _instance.cityId);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.stores) {
      _writer.writeInt32(3, _instance.stores);
    }
    if (_instance.country) {
      _writer.writeString(4, _instance.country);
    }
  }

  private _cityId?: number;
  private _title?: string;
  private _stores?: number;
  private _country?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of City to deeply clone from
   */
  constructor(_value?: RecursivePartial<City>) {
    _value = _value || {};
    this.cityId = _value.cityId;
    this.title = _value.title;
    this.stores = _value.stores;
    this.country = _value.country;
    City.refineValues(this);
  }
  get cityId(): number | undefined {
    return this._cityId;
  }
  set cityId(value: number | undefined) {
    this._cityId = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get stores(): number | undefined {
    return this._stores;
  }
  set stores(value: number | undefined) {
    this._stores = value;
  }
  get country(): string | undefined {
    return this._country;
  }
  set country(value: string | undefined) {
    this._country = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    City.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): City.AsObject {
    return {
      cityId: this.cityId,
      title: this.title,
      stores: this.stores,
      country: this.country
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module City {
  /**
   * Standard JavaScript object representation for City
   */
  export interface AsObject {
    cityId?: number;
    title?: string;
    stores?: number;
    country?: string;
  }
}

/**
 * Message implementation for meta.ResponseStoresCities
 */
export class ResponseStoresCities implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseStoresCities();
    ResponseStoresCities.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseStoresCities) {
    _instance.result = _instance.result || [];
    _instance.total = _instance.total || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseStoresCities,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new City();
          _reader.readMessage(
            messageInitializer1,
            City.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer1);
          break;
        case 2:
          _instance.total = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseStoresCities.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseStoresCities,
    _writer: BinaryWriter
  ) {
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.result as any,
        City.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt32(2, _instance.total);
    }
  }

  private _result?: City[];
  private _total?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseStoresCities to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseStoresCities>) {
    _value = _value || {};
    this.result = (_value.result || []).map(m => new City(m));
    this.total = _value.total;
    ResponseStoresCities.refineValues(this);
  }
  get result(): City[] | undefined {
    return this._result;
  }
  set result(value: City[] | undefined) {
    this._result = value;
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseStoresCities.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseStoresCities.AsObject {
    return {
      result: (this.result || []).map(m => m.toObject()),
      total: this.total
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ResponseStoresCities {
  /**
   * Standard JavaScript object representation for ResponseStoresCities
   */
  export interface AsObject {
    result?: City.AsObject[];
    total?: number;
  }
}

/**
 * Message implementation for meta.ParamsStores
 */
export class ParamsStores implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsStores();
    ParamsStores.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsStores) {
    _instance.cityId = _instance.cityId || 0;
    _instance.offset = _instance.offset || 0;
    _instance.limit = _instance.limit || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsStores,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.cityId = _reader.readInt32();
          break;
        case 2:
          _instance.offset = _reader.readInt32();
          break;
        case 3:
          _instance.limit = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsStores.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsStores,
    _writer: BinaryWriter
  ) {
    if (_instance.cityId) {
      _writer.writeInt32(1, _instance.cityId);
    }
    if (_instance.offset) {
      _writer.writeInt32(2, _instance.offset);
    }
    if (_instance.limit) {
      _writer.writeInt32(3, _instance.limit);
    }
  }

  private _cityId?: number;
  private _offset?: number;
  private _limit?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsStores to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsStores>) {
    _value = _value || {};
    this.cityId = _value.cityId;
    this.offset = _value.offset;
    this.limit = _value.limit;
    ParamsStores.refineValues(this);
  }
  get cityId(): number | undefined {
    return this._cityId;
  }
  set cityId(value: number | undefined) {
    this._cityId = value;
  }
  get offset(): number | undefined {
    return this._offset;
  }
  set offset(value: number | undefined) {
    this._offset = value;
  }
  get limit(): number | undefined {
    return this._limit;
  }
  set limit(value: number | undefined) {
    this._limit = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsStores.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsStores.AsObject {
    return {
      cityId: this.cityId,
      offset: this.offset,
      limit: this.limit
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ParamsStores {
  /**
   * Standard JavaScript object representation for ParamsStores
   */
  export interface AsObject {
    cityId?: number;
    offset?: number;
    limit?: number;
  }
}

/**
 * Message implementation for meta.responseStoresByCity
 */
export class responseStoresByCity implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new responseStoresByCity();
    responseStoresByCity.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: responseStoresByCity) {
    _instance.cityId = _instance.cityId || 0;
    _instance.title = _instance.title || '';
    _instance.total = _instance.total || 0;
    _instance.stores = _instance.stores || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: responseStoresByCity,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.cityId = _reader.readInt32();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.total = _reader.readInt32();
          break;
        case 4:
          const messageInitializer4 = new OfflineStore();
          _reader.readMessage(
            messageInitializer4,
            OfflineStore.deserializeBinaryFromReader
          );
          (_instance.stores = _instance.stores || []).push(messageInitializer4);
          break;
        default:
          _reader.skipField();
      }
    }

    responseStoresByCity.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: responseStoresByCity,
    _writer: BinaryWriter
  ) {
    if (_instance.cityId) {
      _writer.writeInt32(1, _instance.cityId);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.total) {
      _writer.writeInt32(3, _instance.total);
    }
    if (_instance.stores && _instance.stores.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.stores as any,
        OfflineStore.serializeBinaryToWriter
      );
    }
  }

  private _cityId?: number;
  private _title?: string;
  private _total?: number;
  private _stores?: OfflineStore[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of responseStoresByCity to deeply clone from
   */
  constructor(_value?: RecursivePartial<responseStoresByCity>) {
    _value = _value || {};
    this.cityId = _value.cityId;
    this.title = _value.title;
    this.total = _value.total;
    this.stores = (_value.stores || []).map(m => new OfflineStore(m));
    responseStoresByCity.refineValues(this);
  }
  get cityId(): number | undefined {
    return this._cityId;
  }
  set cityId(value: number | undefined) {
    this._cityId = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }
  get stores(): OfflineStore[] | undefined {
    return this._stores;
  }
  set stores(value: OfflineStore[] | undefined) {
    this._stores = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    responseStoresByCity.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): responseStoresByCity.AsObject {
    return {
      cityId: this.cityId,
      title: this.title,
      total: this.total,
      stores: (this.stores || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module responseStoresByCity {
  /**
   * Standard JavaScript object representation for responseStoresByCity
   */
  export interface AsObject {
    cityId?: number;
    title?: string;
    total?: number;
    stores?: OfflineStore.AsObject[];
  }
}

/**
 * Message implementation for meta.ParamsCountries
 */
export class ParamsCountries implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsCountries();
    ParamsCountries.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsCountries) {
    _instance.offset = _instance.offset || 0;
    _instance.limit = _instance.limit || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsCountries,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.offset = _reader.readInt32();
          break;
        case 2:
          _instance.limit = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsCountries.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsCountries,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeInt32(1, _instance.offset);
    }
    if (_instance.limit) {
      _writer.writeInt32(2, _instance.limit);
    }
  }

  private _offset?: number;
  private _limit?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsCountries to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsCountries>) {
    _value = _value || {};
    this.offset = _value.offset;
    this.limit = _value.limit;
    ParamsCountries.refineValues(this);
  }
  get offset(): number | undefined {
    return this._offset;
  }
  set offset(value: number | undefined) {
    this._offset = value;
  }
  get limit(): number | undefined {
    return this._limit;
  }
  set limit(value: number | undefined) {
    this._limit = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsCountries.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsCountries.AsObject {
    return {
      offset: this.offset,
      limit: this.limit
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ParamsCountries {
  /**
   * Standard JavaScript object representation for ParamsCountries
   */
  export interface AsObject {
    offset?: number;
    limit?: number;
  }
}

/**
 * Message implementation for meta.ResponseCountries
 */
export class ResponseCountries implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseCountries();
    ResponseCountries.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseCountries) {
    _instance.total = _instance.total || 0;
    _instance.result = _instance.result || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseCountries,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.total = _reader.readInt32();
          break;
        case 2:
          const messageInitializer2 = new Country();
          _reader.readMessage(
            messageInitializer2,
            Country.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseCountries.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseCountries,
    _writer: BinaryWriter
  ) {
    if (_instance.total) {
      _writer.writeInt32(1, _instance.total);
    }
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.result as any,
        Country.serializeBinaryToWriter
      );
    }
  }

  private _total?: number;
  private _result?: Country[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseCountries to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseCountries>) {
    _value = _value || {};
    this.total = _value.total;
    this.result = (_value.result || []).map(m => new Country(m));
    ResponseCountries.refineValues(this);
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }
  get result(): Country[] | undefined {
    return this._result;
  }
  set result(value: Country[] | undefined) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseCountries.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseCountries.AsObject {
    return {
      total: this.total,
      result: (this.result || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ResponseCountries {
  /**
   * Standard JavaScript object representation for ResponseCountries
   */
  export interface AsObject {
    total?: number;
    result?: Country.AsObject[];
  }
}

/**
 * Message implementation for meta.Country
 */
export class Country implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Country();
    Country.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Country) {
    _instance.id = _instance.id || 0;
    _instance.countryCode = _instance.countryCode || '';
    _instance.prefix = _instance.prefix || '';
    _instance.titleRu = _instance.titleRu || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Country,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.countryCode = _reader.readString();
          break;
        case 3:
          _instance.prefix = _reader.readString();
          break;
        case 4:
          _instance.titleRu = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Country.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Country, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.countryCode) {
      _writer.writeString(2, _instance.countryCode);
    }
    if (_instance.prefix) {
      _writer.writeString(3, _instance.prefix);
    }
    if (_instance.titleRu) {
      _writer.writeString(4, _instance.titleRu);
    }
  }

  private _id?: number;
  private _countryCode?: string;
  private _prefix?: string;
  private _titleRu?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Country to deeply clone from
   */
  constructor(_value?: RecursivePartial<Country>) {
    _value = _value || {};
    this.id = _value.id;
    this.countryCode = _value.countryCode;
    this.prefix = _value.prefix;
    this.titleRu = _value.titleRu;
    Country.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get countryCode(): string | undefined {
    return this._countryCode;
  }
  set countryCode(value: string | undefined) {
    this._countryCode = value;
  }
  get prefix(): string | undefined {
    return this._prefix;
  }
  set prefix(value: string | undefined) {
    this._prefix = value;
  }
  get titleRu(): string | undefined {
    return this._titleRu;
  }
  set titleRu(value: string | undefined) {
    this._titleRu = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Country.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Country.AsObject {
    return {
      id: this.id,
      countryCode: this.countryCode,
      prefix: this.prefix,
      titleRu: this.titleRu
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Country {
  /**
   * Standard JavaScript object representation for Country
   */
  export interface AsObject {
    id?: number;
    countryCode?: string;
    prefix?: string;
    titleRu?: string;
  }
}

/**
 * Message implementation for meta.SocialNetwork
 */
export class SocialNetwork implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SocialNetwork();
    SocialNetwork.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SocialNetwork) {
    _instance.icon = _instance.icon || '';
    _instance.name = _instance.name || '';
    _instance.link = _instance.link || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SocialNetwork,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.icon = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.link = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SocialNetwork.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SocialNetwork,
    _writer: BinaryWriter
  ) {
    if (_instance.icon) {
      _writer.writeString(1, _instance.icon);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.link) {
      _writer.writeString(3, _instance.link);
    }
  }

  private _icon?: string;
  private _name?: string;
  private _link?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SocialNetwork to deeply clone from
   */
  constructor(_value?: RecursivePartial<SocialNetwork>) {
    _value = _value || {};
    this.icon = _value.icon;
    this.name = _value.name;
    this.link = _value.link;
    SocialNetwork.refineValues(this);
  }
  get icon(): string | undefined {
    return this._icon;
  }
  set icon(value: string | undefined) {
    this._icon = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get link(): string | undefined {
    return this._link;
  }
  set link(value: string | undefined) {
    this._link = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SocialNetwork.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SocialNetwork.AsObject {
    return {
      icon: this.icon,
      name: this.name,
      link: this.link
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SocialNetwork {
  /**
   * Standard JavaScript object representation for SocialNetwork
   */
  export interface AsObject {
    icon?: string;
    name?: string;
    link?: string;
  }
}

/**
 * Message implementation for meta.ResponseSocialNetworks
 */
export class ResponseSocialNetworks implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseSocialNetworks();
    ResponseSocialNetworks.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseSocialNetworks) {
    _instance.result = _instance.result || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseSocialNetworks,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new SocialNetwork();
          _reader.readMessage(
            messageInitializer1,
            SocialNetwork.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseSocialNetworks.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseSocialNetworks,
    _writer: BinaryWriter
  ) {
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.result as any,
        SocialNetwork.serializeBinaryToWriter
      );
    }
  }

  private _result?: SocialNetwork[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseSocialNetworks to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseSocialNetworks>) {
    _value = _value || {};
    this.result = (_value.result || []).map(m => new SocialNetwork(m));
    ResponseSocialNetworks.refineValues(this);
  }
  get result(): SocialNetwork[] | undefined {
    return this._result;
  }
  set result(value: SocialNetwork[] | undefined) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseSocialNetworks.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseSocialNetworks.AsObject {
    return {
      result: (this.result || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ResponseSocialNetworks {
  /**
   * Standard JavaScript object representation for ResponseSocialNetworks
   */
  export interface AsObject {
    result?: SocialNetwork.AsObject[];
  }
}
