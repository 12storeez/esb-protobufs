/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from './google/protobuf/empty.pb';
/**
 * Message implementation for feedbacks.CanBeSavedParams
 */
export class CanBeSavedParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CanBeSavedParams();
    CanBeSavedParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CanBeSavedParams) {
    _instance.orderId = _instance.orderId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CanBeSavedParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.orderId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CanBeSavedParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CanBeSavedParams,
    _writer: BinaryWriter
  ) {
    if (_instance.orderId) {
      _writer.writeString(1, _instance.orderId);
    }
  }

  private _orderId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CanBeSavedParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<CanBeSavedParams>) {
    _value = _value || {};
    this.orderId = _value.orderId;
    CanBeSavedParams.refineValues(this);
  }
  get orderId(): string | undefined {
    return this._orderId;
  }
  set orderId(value: string | undefined) {
    this._orderId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CanBeSavedParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CanBeSavedParams.AsObject {
    return {
      orderId: this.orderId
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
export module CanBeSavedParams {
  /**
   * Standard JavaScript object representation for CanBeSavedParams
   */
  export interface AsObject {
    orderId?: string;
  }
}

/**
 * Message implementation for feedbacks.PatchParams
 */
export class PatchParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PatchParams();
    PatchParams.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PatchParams) {
    _instance.id = _instance.id || 0;
    _instance.storeId = _instance.storeId || 0;
    _instance.location = _instance.location || 0;
    _instance.type = _instance.type || 0;
    _instance.rate = _instance.rate || 0;
    _instance.improvements = _instance.improvements || [];
    _instance.comment = _instance.comment || '';
    _instance.contact = _instance.contact || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PatchParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.storeId = _reader.readInt32();
          break;
        case 3:
          _instance.location = _reader.readInt32();
          break;
        case 4:
          _instance.type = _reader.readInt32();
          break;
        case 5:
          _instance.rate = _reader.readInt32();
          break;
        case 6:
          (_instance.improvements = _instance.improvements || []).push(
            _reader.readInt32()
          );
          break;
        case 7:
          _instance.comment = _reader.readString();
          break;
        case 8:
          _instance.contact = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PatchParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PatchParams,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.storeId) {
      _writer.writeInt32(2, _instance.storeId);
    }
    if (_instance.location) {
      _writer.writeInt32(3, _instance.location);
    }
    if (_instance.type) {
      _writer.writeInt32(4, _instance.type);
    }
    if (_instance.rate) {
      _writer.writeInt32(5, _instance.rate);
    }
    if (_instance.improvements && _instance.improvements.length) {
      _writer.writeRepeatedInt32(6, _instance.improvements);
    }
    if (_instance.comment) {
      _writer.writeString(7, _instance.comment);
    }
    if (_instance.contact) {
      _writer.writeString(8, _instance.contact);
    }
  }

  private _id?: number;
  private _storeId?: number;
  private _location?: number;
  private _type?: number;
  private _rate?: number;
  private _improvements?: number[];
  private _comment?: string;
  private _contact?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PatchParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<PatchParams>) {
    _value = _value || {};
    this.id = _value.id;
    this.storeId = _value.storeId;
    this.location = _value.location;
    this.type = _value.type;
    this.rate = _value.rate;
    this.improvements = (_value.improvements || []).slice();
    this.comment = _value.comment;
    this.contact = _value.contact;
    PatchParams.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get location(): number | undefined {
    return this._location;
  }
  set location(value: number | undefined) {
    this._location = value;
  }
  get type(): number | undefined {
    return this._type;
  }
  set type(value: number | undefined) {
    this._type = value;
  }
  get rate(): number | undefined {
    return this._rate;
  }
  set rate(value: number | undefined) {
    this._rate = value;
  }
  get improvements(): number[] | undefined {
    return this._improvements;
  }
  set improvements(value: number[] | undefined) {
    this._improvements = value;
  }
  get comment(): string | undefined {
    return this._comment;
  }
  set comment(value: string | undefined) {
    this._comment = value;
  }
  get contact(): string | undefined {
    return this._contact;
  }
  set contact(value: string | undefined) {
    this._contact = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PatchParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PatchParams.AsObject {
    return {
      id: this.id,
      storeId: this.storeId,
      location: this.location,
      type: this.type,
      rate: this.rate,
      improvements: (this.improvements || []).slice(),
      comment: this.comment,
      contact: this.contact
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
export module PatchParams {
  /**
   * Standard JavaScript object representation for PatchParams
   */
  export interface AsObject {
    id?: number;
    storeId?: number;
    location?: number;
    type?: number;
    rate?: number;
    improvements?: number[];
    comment?: string;
    contact?: string;
  }
}

/**
 * Message implementation for feedbacks.NewParams
 */
export class NewParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NewParams();
    NewParams.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NewParams) {
    _instance.storeId = _instance.storeId || 0;
    _instance.location = _instance.location || 0;
    _instance.type = _instance.type || 0;
    _instance.rate = _instance.rate || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NewParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.storeId = _reader.readInt32();
          break;
        case 2:
          _instance.location = _reader.readInt32();
          break;
        case 3:
          _instance.type = _reader.readInt32();
          break;
        case 4:
          _instance.rate = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    NewParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: NewParams, _writer: BinaryWriter) {
    if (_instance.storeId) {
      _writer.writeInt32(1, _instance.storeId);
    }
    if (_instance.location) {
      _writer.writeInt32(2, _instance.location);
    }
    if (_instance.type) {
      _writer.writeInt32(3, _instance.type);
    }
    if (_instance.rate) {
      _writer.writeInt32(4, _instance.rate);
    }
  }

  private _storeId?: number;
  private _location?: number;
  private _type?: number;
  private _rate?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NewParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<NewParams>) {
    _value = _value || {};
    this.storeId = _value.storeId;
    this.location = _value.location;
    this.type = _value.type;
    this.rate = _value.rate;
    NewParams.refineValues(this);
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get location(): number | undefined {
    return this._location;
  }
  set location(value: number | undefined) {
    this._location = value;
  }
  get type(): number | undefined {
    return this._type;
  }
  set type(value: number | undefined) {
    this._type = value;
  }
  get rate(): number | undefined {
    return this._rate;
  }
  set rate(value: number | undefined) {
    this._rate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NewParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NewParams.AsObject {
    return {
      storeId: this.storeId,
      location: this.location,
      type: this.type,
      rate: this.rate
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
export module NewParams {
  /**
   * Standard JavaScript object representation for NewParams
   */
  export interface AsObject {
    storeId?: number;
    location?: number;
    type?: number;
    rate?: number;
  }
}

/**
 * Message implementation for feedbacks.NewResponse
 */
export class NewResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NewResponse();
    NewResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NewResponse) {
    _instance.id = _instance.id || 0;
    _instance.improvements = _instance.improvements || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NewResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          const messageInitializer2 = new Improvement();
          _reader.readMessage(
            messageInitializer2,
            Improvement.deserializeBinaryFromReader
          );
          (_instance.improvements = _instance.improvements || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    NewResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: NewResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.improvements && _instance.improvements.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.improvements as any,
        Improvement.serializeBinaryToWriter
      );
    }
  }

  private _id?: number;
  private _improvements?: Improvement[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NewResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<NewResponse>) {
    _value = _value || {};
    this.id = _value.id;
    this.improvements = (_value.improvements || []).map(
      m => new Improvement(m)
    );
    NewResponse.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get improvements(): Improvement[] | undefined {
    return this._improvements;
  }
  set improvements(value: Improvement[] | undefined) {
    this._improvements = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NewResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NewResponse.AsObject {
    return {
      id: this.id,
      improvements: (this.improvements || []).map(m => m.toObject())
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
export module NewResponse {
  /**
   * Standard JavaScript object representation for NewResponse
   */
  export interface AsObject {
    id?: number;
    improvements?: Improvement.AsObject[];
  }
}

/**
 * Message implementation for feedbacks.Improvement
 */
export class Improvement implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Improvement();
    Improvement.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Improvement) {
    _instance.id = _instance.id || 0;
    _instance.title = _instance.title || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Improvement,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Improvement.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Improvement,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
  }

  private _id?: number;
  private _title?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Improvement to deeply clone from
   */
  constructor(_value?: RecursivePartial<Improvement>) {
    _value = _value || {};
    this.id = _value.id;
    this.title = _value.title;
    Improvement.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Improvement.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Improvement.AsObject {
    return {
      id: this.id,
      title: this.title
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
export module Improvement {
  /**
   * Standard JavaScript object representation for Improvement
   */
  export interface AsObject {
    id?: number;
    title?: string;
  }
}

/**
 * Message implementation for feedbacks.ResponseOk
 */
export class ResponseOk implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseOk();
    ResponseOk.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseOk) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseOk,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ok = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseOk.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ResponseOk, _writer: BinaryWriter) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseOk to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseOk>) {
    _value = _value || {};
    this.ok = _value.ok;
    ResponseOk.refineValues(this);
  }
  get ok(): boolean | undefined {
    return this._ok;
  }
  set ok(value: boolean | undefined) {
    this._ok = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseOk.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseOk.AsObject {
    return {
      ok: this.ok
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
export module ResponseOk {
  /**
   * Standard JavaScript object representation for ResponseOk
   */
  export interface AsObject {
    ok?: boolean;
  }
}

/**
 * Message implementation for feedbacks.ParamsApp
 */
export class ParamsApp implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsApp();
    ParamsApp.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsApp) {
    _instance.clientId = _instance.clientId || 0;
    _instance.name = _instance.name || '';
    _instance.email = _instance.email || '';
    _instance.phone = _instance.phone || '';
    _instance.appVersion = _instance.appVersion || '';
    _instance.rate = _instance.rate || '';
    _instance.comment = _instance.comment || '';
    _instance.deviceId = _instance.deviceId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsApp,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.clientId = _reader.readInt32();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.email = _reader.readString();
          break;
        case 4:
          _instance.phone = _reader.readString();
          break;
        case 5:
          _instance.appVersion = _reader.readString();
          break;
        case 6:
          _instance.rate = _reader.readString();
          break;
        case 7:
          _instance.comment = _reader.readString();
          break;
        case 8:
          _instance.deviceId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsApp.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ParamsApp, _writer: BinaryWriter) {
    if (_instance.clientId) {
      _writer.writeInt32(1, _instance.clientId);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.email) {
      _writer.writeString(3, _instance.email);
    }
    if (_instance.phone) {
      _writer.writeString(4, _instance.phone);
    }
    if (_instance.appVersion) {
      _writer.writeString(5, _instance.appVersion);
    }
    if (_instance.rate) {
      _writer.writeString(6, _instance.rate);
    }
    if (_instance.comment) {
      _writer.writeString(7, _instance.comment);
    }
    if (_instance.deviceId) {
      _writer.writeString(8, _instance.deviceId);
    }
  }

  private _clientId?: number;
  private _name?: string;
  private _email?: string;
  private _phone?: string;
  private _appVersion?: string;
  private _rate?: string;
  private _comment?: string;
  private _deviceId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsApp to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsApp>) {
    _value = _value || {};
    this.clientId = _value.clientId;
    this.name = _value.name;
    this.email = _value.email;
    this.phone = _value.phone;
    this.appVersion = _value.appVersion;
    this.rate = _value.rate;
    this.comment = _value.comment;
    this.deviceId = _value.deviceId;
    ParamsApp.refineValues(this);
  }
  get clientId(): number | undefined {
    return this._clientId;
  }
  set clientId(value: number | undefined) {
    this._clientId = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }
  get phone(): string | undefined {
    return this._phone;
  }
  set phone(value: string | undefined) {
    this._phone = value;
  }
  get appVersion(): string | undefined {
    return this._appVersion;
  }
  set appVersion(value: string | undefined) {
    this._appVersion = value;
  }
  get rate(): string | undefined {
    return this._rate;
  }
  set rate(value: string | undefined) {
    this._rate = value;
  }
  get comment(): string | undefined {
    return this._comment;
  }
  set comment(value: string | undefined) {
    this._comment = value;
  }
  get deviceId(): string | undefined {
    return this._deviceId;
  }
  set deviceId(value: string | undefined) {
    this._deviceId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsApp.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsApp.AsObject {
    return {
      clientId: this.clientId,
      name: this.name,
      email: this.email,
      phone: this.phone,
      appVersion: this.appVersion,
      rate: this.rate,
      comment: this.comment,
      deviceId: this.deviceId
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
export module ParamsApp {
  /**
   * Standard JavaScript object representation for ParamsApp
   */
  export interface AsObject {
    clientId?: number;
    name?: string;
    email?: string;
    phone?: string;
    appVersion?: string;
    rate?: string;
    comment?: string;
    deviceId?: string;
  }
}

/**
 * Message implementation for feedbacks.ParamsStore
 */
export class ParamsStore implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsStore();
    ParamsStore.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsStore) {
    _instance.clientId = _instance.clientId || 0;
    _instance.rate = _instance.rate || '';
    _instance.reasons = _instance.reasons || [];
    _instance.comment = _instance.comment || '';
    _instance.storeId = _instance.storeId || 0;
    _instance.deviceId = _instance.deviceId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsStore,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.clientId = _reader.readInt32();
          break;
        case 2:
          _instance.rate = _reader.readString();
          break;
        case 3:
          (_instance.reasons = _instance.reasons || []).push(
            _reader.readInt32()
          );
          break;
        case 4:
          _instance.comment = _reader.readString();
          break;
        case 5:
          _instance.storeId = _reader.readInt32();
          break;
        case 6:
          _instance.deviceId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsStore.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsStore,
    _writer: BinaryWriter
  ) {
    if (_instance.clientId) {
      _writer.writeInt32(1, _instance.clientId);
    }
    if (_instance.rate) {
      _writer.writeString(2, _instance.rate);
    }
    if (_instance.reasons && _instance.reasons.length) {
      _writer.writeRepeatedInt32(3, _instance.reasons);
    }
    if (_instance.comment) {
      _writer.writeString(4, _instance.comment);
    }
    if (_instance.storeId) {
      _writer.writeInt32(5, _instance.storeId);
    }
    if (_instance.deviceId) {
      _writer.writeString(6, _instance.deviceId);
    }
  }

  private _clientId?: number;
  private _rate?: string;
  private _reasons?: number[];
  private _comment?: string;
  private _storeId?: number;
  private _deviceId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsStore to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsStore>) {
    _value = _value || {};
    this.clientId = _value.clientId;
    this.rate = _value.rate;
    this.reasons = (_value.reasons || []).slice();
    this.comment = _value.comment;
    this.storeId = _value.storeId;
    this.deviceId = _value.deviceId;
    ParamsStore.refineValues(this);
  }
  get clientId(): number | undefined {
    return this._clientId;
  }
  set clientId(value: number | undefined) {
    this._clientId = value;
  }
  get rate(): string | undefined {
    return this._rate;
  }
  set rate(value: string | undefined) {
    this._rate = value;
  }
  get reasons(): number[] | undefined {
    return this._reasons;
  }
  set reasons(value: number[] | undefined) {
    this._reasons = value;
  }
  get comment(): string | undefined {
    return this._comment;
  }
  set comment(value: string | undefined) {
    this._comment = value;
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get deviceId(): string | undefined {
    return this._deviceId;
  }
  set deviceId(value: string | undefined) {
    this._deviceId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsStore.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsStore.AsObject {
    return {
      clientId: this.clientId,
      rate: this.rate,
      reasons: (this.reasons || []).slice(),
      comment: this.comment,
      storeId: this.storeId,
      deviceId: this.deviceId
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
export module ParamsStore {
  /**
   * Standard JavaScript object representation for ParamsStore
   */
  export interface AsObject {
    clientId?: number;
    rate?: string;
    reasons?: number[];
    comment?: string;
    storeId?: number;
    deviceId?: string;
  }
}

/**
 * Message implementation for feedbacks.ParamsOrder
 */
export class ParamsOrder implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsOrder();
    ParamsOrder.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsOrder) {
    _instance.orderId = _instance.orderId || '';
    _instance.rate = _instance.rate || '';
    _instance.reasons = _instance.reasons || [];
    _instance.comment = _instance.comment || '';
    _instance.storeId = _instance.storeId || 0;
    _instance.deviceId = _instance.deviceId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsOrder,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.orderId = _reader.readString();
          break;
        case 2:
          _instance.rate = _reader.readString();
          break;
        case 3:
          (_instance.reasons = _instance.reasons || []).push(
            _reader.readInt32()
          );
          break;
        case 4:
          _instance.comment = _reader.readString();
          break;
        case 5:
          _instance.storeId = _reader.readInt32();
          break;
        case 6:
          _instance.deviceId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsOrder.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsOrder,
    _writer: BinaryWriter
  ) {
    if (_instance.orderId) {
      _writer.writeString(1, _instance.orderId);
    }
    if (_instance.rate) {
      _writer.writeString(2, _instance.rate);
    }
    if (_instance.reasons && _instance.reasons.length) {
      _writer.writeRepeatedInt32(3, _instance.reasons);
    }
    if (_instance.comment) {
      _writer.writeString(4, _instance.comment);
    }
    if (_instance.storeId) {
      _writer.writeInt32(5, _instance.storeId);
    }
    if (_instance.deviceId) {
      _writer.writeString(6, _instance.deviceId);
    }
  }

  private _orderId?: string;
  private _rate?: string;
  private _reasons?: number[];
  private _comment?: string;
  private _storeId?: number;
  private _deviceId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsOrder to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsOrder>) {
    _value = _value || {};
    this.orderId = _value.orderId;
    this.rate = _value.rate;
    this.reasons = (_value.reasons || []).slice();
    this.comment = _value.comment;
    this.storeId = _value.storeId;
    this.deviceId = _value.deviceId;
    ParamsOrder.refineValues(this);
  }
  get orderId(): string | undefined {
    return this._orderId;
  }
  set orderId(value: string | undefined) {
    this._orderId = value;
  }
  get rate(): string | undefined {
    return this._rate;
  }
  set rate(value: string | undefined) {
    this._rate = value;
  }
  get reasons(): number[] | undefined {
    return this._reasons;
  }
  set reasons(value: number[] | undefined) {
    this._reasons = value;
  }
  get comment(): string | undefined {
    return this._comment;
  }
  set comment(value: string | undefined) {
    this._comment = value;
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get deviceId(): string | undefined {
    return this._deviceId;
  }
  set deviceId(value: string | undefined) {
    this._deviceId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsOrder.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsOrder.AsObject {
    return {
      orderId: this.orderId,
      rate: this.rate,
      reasons: (this.reasons || []).slice(),
      comment: this.comment,
      storeId: this.storeId,
      deviceId: this.deviceId
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
export module ParamsOrder {
  /**
   * Standard JavaScript object representation for ParamsOrder
   */
  export interface AsObject {
    orderId?: string;
    rate?: string;
    reasons?: number[];
    comment?: string;
    storeId?: number;
    deviceId?: string;
  }
}

/**
 * Message implementation for feedbacks.Reason
 */
export class Reason implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Reason();
    Reason.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Reason) {
    _instance.id = _instance.id || 0;
    _instance.title = _instance.title || '';
    _instance.categoryId = _instance.categoryId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Reason, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.categoryId = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Reason.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Reason, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.categoryId) {
      _writer.writeInt32(3, _instance.categoryId);
    }
  }

  private _id?: number;
  private _title?: string;
  private _categoryId?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Reason to deeply clone from
   */
  constructor(_value?: RecursivePartial<Reason>) {
    _value = _value || {};
    this.id = _value.id;
    this.title = _value.title;
    this.categoryId = _value.categoryId;
    Reason.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get categoryId(): number | undefined {
    return this._categoryId;
  }
  set categoryId(value: number | undefined) {
    this._categoryId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Reason.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Reason.AsObject {
    return {
      id: this.id,
      title: this.title,
      categoryId: this.categoryId
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
export module Reason {
  /**
   * Standard JavaScript object representation for Reason
   */
  export interface AsObject {
    id?: number;
    title?: string;
    categoryId?: number;
  }
}

/**
 * Message implementation for feedbacks.Category
 */
export class Category implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Category();
    Category.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Category) {
    _instance.id = _instance.id || 0;
    _instance.title = _instance.title || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Category,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Category.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Category, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
  }

  private _id?: number;
  private _title?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Category to deeply clone from
   */
  constructor(_value?: RecursivePartial<Category>) {
    _value = _value || {};
    this.id = _value.id;
    this.title = _value.title;
    Category.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Category.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Category.AsObject {
    return {
      id: this.id,
      title: this.title
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
export module Category {
  /**
   * Standard JavaScript object representation for Category
   */
  export interface AsObject {
    id?: number;
    title?: string;
  }
}

/**
 * Message implementation for feedbacks.RequestChoices
 */
export class RequestChoices implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RequestChoices();
    RequestChoices.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RequestChoices) {
    _instance.categoryId = _instance.categoryId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RequestChoices,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.categoryId = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    RequestChoices.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RequestChoices,
    _writer: BinaryWriter
  ) {
    if (_instance.categoryId) {
      _writer.writeInt32(1, _instance.categoryId);
    }
  }

  private _categoryId?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RequestChoices to deeply clone from
   */
  constructor(_value?: RecursivePartial<RequestChoices>) {
    _value = _value || {};
    this.categoryId = _value.categoryId;
    RequestChoices.refineValues(this);
  }
  get categoryId(): number | undefined {
    return this._categoryId;
  }
  set categoryId(value: number | undefined) {
    this._categoryId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RequestChoices.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RequestChoices.AsObject {
    return {
      categoryId: this.categoryId
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
export module RequestChoices {
  /**
   * Standard JavaScript object representation for RequestChoices
   */
  export interface AsObject {
    categoryId?: number;
  }
}

/**
 * Message implementation for feedbacks.ResponseReasons
 */
export class ResponseReasons implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseReasons();
    ResponseReasons.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseReasons) {
    _instance.result = _instance.result || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseReasons,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Reason();
          _reader.readMessage(
            messageInitializer1,
            Reason.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseReasons.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseReasons,
    _writer: BinaryWriter
  ) {
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.result as any,
        Reason.serializeBinaryToWriter
      );
    }
  }

  private _result?: Reason[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseReasons to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseReasons>) {
    _value = _value || {};
    this.result = (_value.result || []).map(m => new Reason(m));
    ResponseReasons.refineValues(this);
  }
  get result(): Reason[] | undefined {
    return this._result;
  }
  set result(value: Reason[] | undefined) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseReasons.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseReasons.AsObject {
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
export module ResponseReasons {
  /**
   * Standard JavaScript object representation for ResponseReasons
   */
  export interface AsObject {
    result?: Reason.AsObject[];
  }
}

/**
 * Message implementation for feedbacks.ResponseCategories
 */
export class ResponseCategories implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseCategories();
    ResponseCategories.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseCategories) {
    _instance.result = _instance.result || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseCategories,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Category();
          _reader.readMessage(
            messageInitializer1,
            Category.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseCategories.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseCategories,
    _writer: BinaryWriter
  ) {
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.result as any,
        Category.serializeBinaryToWriter
      );
    }
  }

  private _result?: Category[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseCategories to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseCategories>) {
    _value = _value || {};
    this.result = (_value.result || []).map(m => new Category(m));
    ResponseCategories.refineValues(this);
  }
  get result(): Category[] | undefined {
    return this._result;
  }
  set result(value: Category[] | undefined) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseCategories.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseCategories.AsObject {
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
export module ResponseCategories {
  /**
   * Standard JavaScript object representation for ResponseCategories
   */
  export interface AsObject {
    result?: Category.AsObject[];
  }
}

/**
 * Message implementation for feedbacks.ParamsReasonsByOrder
 */
export class ParamsReasonsByOrder implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsReasonsByOrder();
    ParamsReasonsByOrder.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsReasonsByOrder) {
    _instance.orderId = _instance.orderId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsReasonsByOrder,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.orderId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsReasonsByOrder.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsReasonsByOrder,
    _writer: BinaryWriter
  ) {
    if (_instance.orderId) {
      _writer.writeString(1, _instance.orderId);
    }
  }

  private _orderId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsReasonsByOrder to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsReasonsByOrder>) {
    _value = _value || {};
    this.orderId = _value.orderId;
    ParamsReasonsByOrder.refineValues(this);
  }
  get orderId(): string | undefined {
    return this._orderId;
  }
  set orderId(value: string | undefined) {
    this._orderId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsReasonsByOrder.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsReasonsByOrder.AsObject {
    return {
      orderId: this.orderId
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
export module ParamsReasonsByOrder {
  /**
   * Standard JavaScript object representation for ParamsReasonsByOrder
   */
  export interface AsObject {
    orderId?: string;
  }
}
