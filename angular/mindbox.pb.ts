/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for mindbox.IsUserExistParams
 */
export class IsUserExistParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IsUserExistParams();
    IsUserExistParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IsUserExistParams) {
    _instance.mobilePhone = _instance.mobilePhone || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IsUserExistParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.mobilePhone = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    IsUserExistParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IsUserExistParams,
    _writer: BinaryWriter
  ) {
    if (_instance.mobilePhone) {
      _writer.writeString(1, _instance.mobilePhone);
    }
  }

  private _mobilePhone?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IsUserExistParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<IsUserExistParams>) {
    _value = _value || {};
    this.mobilePhone = _value.mobilePhone;
    IsUserExistParams.refineValues(this);
  }
  get mobilePhone(): string | undefined {
    return this._mobilePhone;
  }
  set mobilePhone(value: string | undefined) {
    this._mobilePhone = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IsUserExistParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IsUserExistParams.AsObject {
    return {
      mobilePhone: this.mobilePhone
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
export module IsUserExistParams {
  /**
   * Standard JavaScript object representation for IsUserExistParams
   */
  export interface AsObject {
    mobilePhone?: string;
  }
}

/**
 * Message implementation for mindbox.IsUserExistResponse
 */
export class IsUserExistResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IsUserExistResponse();
    IsUserExistResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IsUserExistResponse) {
    _instance.ok = _instance.ok || false;
    _instance.clientId = _instance.clientId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IsUserExistResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ok = _reader.readBool();
          break;
        case 2:
          _instance.clientId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    IsUserExistResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IsUserExistResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
    if (_instance.clientId) {
      _writer.writeString(2, _instance.clientId);
    }
  }

  private _ok?: boolean;
  private _clientId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IsUserExistResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<IsUserExistResponse>) {
    _value = _value || {};
    this.ok = _value.ok;
    this.clientId = _value.clientId;
    IsUserExistResponse.refineValues(this);
  }
  get ok(): boolean | undefined {
    return this._ok;
  }
  set ok(value: boolean | undefined) {
    this._ok = value;
  }
  get clientId(): string | undefined {
    return this._clientId;
  }
  set clientId(value: string | undefined) {
    this._clientId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IsUserExistResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IsUserExistResponse.AsObject {
    return {
      ok: this.ok,
      clientId: this.clientId
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
export module IsUserExistResponse {
  /**
   * Standard JavaScript object representation for IsUserExistResponse
   */
  export interface AsObject {
    ok?: boolean;
    clientId?: string;
  }
}

/**
 * Message implementation for mindbox.InitDeviceParams
 */
export class InitDeviceParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InitDeviceParams();
    InitDeviceParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InitDeviceParams) {
    _instance.deviceId = _instance.deviceId || '';
    _instance.apnsToken = _instance.apnsToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InitDeviceParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deviceId = _reader.readString();
          break;
        case 2:
          _instance.apnsToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    InitDeviceParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InitDeviceParams,
    _writer: BinaryWriter
  ) {
    if (_instance.deviceId) {
      _writer.writeString(1, _instance.deviceId);
    }
    if (_instance.apnsToken) {
      _writer.writeString(2, _instance.apnsToken);
    }
  }

  private _deviceId?: string;
  private _apnsToken?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InitDeviceParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<InitDeviceParams>) {
    _value = _value || {};
    this.deviceId = _value.deviceId;
    this.apnsToken = _value.apnsToken;
    InitDeviceParams.refineValues(this);
  }
  get deviceId(): string | undefined {
    return this._deviceId;
  }
  set deviceId(value: string | undefined) {
    this._deviceId = value;
  }
  get apnsToken(): string | undefined {
    return this._apnsToken;
  }
  set apnsToken(value: string | undefined) {
    this._apnsToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InitDeviceParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InitDeviceParams.AsObject {
    return {
      deviceId: this.deviceId,
      apnsToken: this.apnsToken
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
export module InitDeviceParams {
  /**
   * Standard JavaScript object representation for InitDeviceParams
   */
  export interface AsObject {
    deviceId?: string;
    apnsToken?: string;
  }
}

/**
 * Message implementation for mindbox.InitDeviceResponse
 */
export class InitDeviceResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InitDeviceResponse();
    InitDeviceResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InitDeviceResponse) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InitDeviceResponse,
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

    InitDeviceResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InitDeviceResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InitDeviceResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<InitDeviceResponse>) {
    _value = _value || {};
    this.ok = _value.ok;
    InitDeviceResponse.refineValues(this);
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
    InitDeviceResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InitDeviceResponse.AsObject {
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
export module InitDeviceResponse {
  /**
   * Standard JavaScript object representation for InitDeviceResponse
   */
  export interface AsObject {
    ok?: boolean;
  }
}

/**
 * Message implementation for mindbox.InitClientParams
 */
export class InitClientParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InitClientParams();
    InitClientParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InitClientParams) {
    _instance.deviceId = _instance.deviceId || '';
    _instance.clientId = _instance.clientId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InitClientParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deviceId = _reader.readString();
          break;
        case 2:
          _instance.clientId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    InitClientParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InitClientParams,
    _writer: BinaryWriter
  ) {
    if (_instance.deviceId) {
      _writer.writeString(1, _instance.deviceId);
    }
    if (_instance.clientId) {
      _writer.writeString(2, _instance.clientId);
    }
  }

  private _deviceId?: string;
  private _clientId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InitClientParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<InitClientParams>) {
    _value = _value || {};
    this.deviceId = _value.deviceId;
    this.clientId = _value.clientId;
    InitClientParams.refineValues(this);
  }
  get deviceId(): string | undefined {
    return this._deviceId;
  }
  set deviceId(value: string | undefined) {
    this._deviceId = value;
  }
  get clientId(): string | undefined {
    return this._clientId;
  }
  set clientId(value: string | undefined) {
    this._clientId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InitClientParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InitClientParams.AsObject {
    return {
      deviceId: this.deviceId,
      clientId: this.clientId
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
export module InitClientParams {
  /**
   * Standard JavaScript object representation for InitClientParams
   */
  export interface AsObject {
    deviceId?: string;
    clientId?: string;
  }
}

/**
 * Message implementation for mindbox.InitClientResponse
 */
export class InitClientResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InitClientResponse();
    InitClientResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InitClientResponse) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InitClientResponse,
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

    InitClientResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InitClientResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InitClientResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<InitClientResponse>) {
    _value = _value || {};
    this.ok = _value.ok;
    InitClientResponse.refineValues(this);
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
    InitClientResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InitClientResponse.AsObject {
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
export module InitClientResponse {
  /**
   * Standard JavaScript object representation for InitClientResponse
   */
  export interface AsObject {
    ok?: boolean;
  }
}

/**
 * Message implementation for mindbox.ParamsUser
 */
export class ParamsUser implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsUser();
    ParamsUser.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsUser) {
    _instance.clientId = _instance.clientId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsUser,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.clientId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsUser.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ParamsUser, _writer: BinaryWriter) {
    if (_instance.clientId) {
      _writer.writeString(1, _instance.clientId);
    }
  }

  private _clientId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsUser to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsUser>) {
    _value = _value || {};
    this.clientId = _value.clientId;
    ParamsUser.refineValues(this);
  }
  get clientId(): string | undefined {
    return this._clientId;
  }
  set clientId(value: string | undefined) {
    this._clientId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsUser.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsUser.AsObject {
    return {
      clientId: this.clientId
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
export module ParamsUser {
  /**
   * Standard JavaScript object representation for ParamsUser
   */
  export interface AsObject {
    clientId?: string;
  }
}

/**
 * Message implementation for mindbox.ResponseUser
 */
export class ResponseUser implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseUser();
    ResponseUser.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseUser) {
    _instance.firstName = _instance.firstName || '';
    _instance.lastName = _instance.lastName || '';
    _instance.email = _instance.email || '';
    _instance.phone = _instance.phone || '';
    _instance.bonusTotal = _instance.bonusTotal || 0;
    _instance.bonusAvailable = _instance.bonusAvailable || 0;
    _instance.bonusBlocked = _instance.bonusBlocked || 0;
    _instance.totalPaidAmount = _instance.totalPaidAmount || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseUser,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.firstName = _reader.readString();
          break;
        case 2:
          _instance.lastName = _reader.readString();
          break;
        case 3:
          _instance.email = _reader.readString();
          break;
        case 4:
          _instance.phone = _reader.readString();
          break;
        case 5:
          _instance.bonusTotal = _reader.readInt32();
          break;
        case 6:
          _instance.bonusAvailable = _reader.readInt32();
          break;
        case 7:
          _instance.bonusBlocked = _reader.readInt32();
          break;
        case 8:
          _instance.totalPaidAmount = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseUser.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseUser,
    _writer: BinaryWriter
  ) {
    if (_instance.firstName) {
      _writer.writeString(1, _instance.firstName);
    }
    if (_instance.lastName) {
      _writer.writeString(2, _instance.lastName);
    }
    if (_instance.email) {
      _writer.writeString(3, _instance.email);
    }
    if (_instance.phone) {
      _writer.writeString(4, _instance.phone);
    }
    if (_instance.bonusTotal) {
      _writer.writeInt32(5, _instance.bonusTotal);
    }
    if (_instance.bonusAvailable) {
      _writer.writeInt32(6, _instance.bonusAvailable);
    }
    if (_instance.bonusBlocked) {
      _writer.writeInt32(7, _instance.bonusBlocked);
    }
    if (_instance.totalPaidAmount) {
      _writer.writeInt32(8, _instance.totalPaidAmount);
    }
  }

  private _firstName?: string;
  private _lastName?: string;
  private _email?: string;
  private _phone?: string;
  private _bonusTotal?: number;
  private _bonusAvailable?: number;
  private _bonusBlocked?: number;
  private _totalPaidAmount?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseUser to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseUser>) {
    _value = _value || {};
    this.firstName = _value.firstName;
    this.lastName = _value.lastName;
    this.email = _value.email;
    this.phone = _value.phone;
    this.bonusTotal = _value.bonusTotal;
    this.bonusAvailable = _value.bonusAvailable;
    this.bonusBlocked = _value.bonusBlocked;
    this.totalPaidAmount = _value.totalPaidAmount;
    ResponseUser.refineValues(this);
  }
  get firstName(): string | undefined {
    return this._firstName;
  }
  set firstName(value: string | undefined) {
    this._firstName = value;
  }
  get lastName(): string | undefined {
    return this._lastName;
  }
  set lastName(value: string | undefined) {
    this._lastName = value;
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
  get bonusTotal(): number | undefined {
    return this._bonusTotal;
  }
  set bonusTotal(value: number | undefined) {
    this._bonusTotal = value;
  }
  get bonusAvailable(): number | undefined {
    return this._bonusAvailable;
  }
  set bonusAvailable(value: number | undefined) {
    this._bonusAvailable = value;
  }
  get bonusBlocked(): number | undefined {
    return this._bonusBlocked;
  }
  set bonusBlocked(value: number | undefined) {
    this._bonusBlocked = value;
  }
  get totalPaidAmount(): number | undefined {
    return this._totalPaidAmount;
  }
  set totalPaidAmount(value: number | undefined) {
    this._totalPaidAmount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseUser.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseUser.AsObject {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      bonusTotal: this.bonusTotal,
      bonusAvailable: this.bonusAvailable,
      bonusBlocked: this.bonusBlocked,
      totalPaidAmount: this.totalPaidAmount
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
export module ResponseUser {
  /**
   * Standard JavaScript object representation for ResponseUser
   */
  export interface AsObject {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    bonusTotal?: number;
    bonusAvailable?: number;
    bonusBlocked?: number;
    totalPaidAmount?: number;
  }
}

/**
 * Message implementation for mindbox.ParamsOrders
 */
export class ParamsOrders implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsOrders();
    ParamsOrders.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsOrders) {
    _instance.clientId = _instance.clientId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsOrders,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.clientId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsOrders.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsOrders,
    _writer: BinaryWriter
  ) {
    if (_instance.clientId) {
      _writer.writeString(1, _instance.clientId);
    }
  }

  private _clientId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsOrders to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsOrders>) {
    _value = _value || {};
    this.clientId = _value.clientId;
    ParamsOrders.refineValues(this);
  }
  get clientId(): string | undefined {
    return this._clientId;
  }
  set clientId(value: string | undefined) {
    this._clientId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsOrders.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsOrders.AsObject {
    return {
      clientId: this.clientId
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
export module ParamsOrders {
  /**
   * Standard JavaScript object representation for ParamsOrders
   */
  export interface AsObject {
    clientId?: string;
  }
}

/**
 * Message implementation for mindbox.ResponseOrders
 */
export class ResponseOrders implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseOrders();
    ResponseOrders.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseOrders) {
    _instance.total = _instance.total || 0;
    _instance.result = _instance.result || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseOrders,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.total = _reader.readInt32();
          break;
        case 2:
          const messageInitializer2 = new Order();
          _reader.readMessage(
            messageInitializer2,
            Order.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseOrders.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseOrders,
    _writer: BinaryWriter
  ) {
    if (_instance.total) {
      _writer.writeInt32(1, _instance.total);
    }
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.result as any,
        Order.serializeBinaryToWriter
      );
    }
  }

  private _total?: number;
  private _result?: Order[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseOrders to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseOrders>) {
    _value = _value || {};
    this.total = _value.total;
    this.result = (_value.result || []).map(m => new Order(m));
    ResponseOrders.refineValues(this);
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }
  get result(): Order[] | undefined {
    return this._result;
  }
  set result(value: Order[] | undefined) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseOrders.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseOrders.AsObject {
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
export module ResponseOrders {
  /**
   * Standard JavaScript object representation for ResponseOrders
   */
  export interface AsObject {
    total?: number;
    result?: Order.AsObject[];
  }
}

/**
 * Message implementation for mindbox.Order
 */
export class Order implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Order();
    Order.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Order) {
    _instance.orderId = _instance.orderId || '';
    _instance.createdDate = _instance.createdDate || '';
    _instance.paymentType = _instance.paymentType || '';
    _instance.discountedTotalPrice = _instance.discountedTotalPrice || 0;
    _instance.paymentAmount = _instance.paymentAmount || 0;
    _instance.appliedDiscount = _instance.appliedDiscount || 0;
    _instance.acquiredBalanceChange = _instance.acquiredBalanceChange || 0;
    _instance.createdTs = _instance.createdTs || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Order, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.orderId = _reader.readString();
          break;
        case 2:
          _instance.createdDate = _reader.readString();
          break;
        case 3:
          _instance.paymentType = _reader.readString();
          break;
        case 4:
          _instance.discountedTotalPrice = _reader.readInt32();
          break;
        case 5:
          _instance.paymentAmount = _reader.readInt32();
          break;
        case 6:
          _instance.appliedDiscount = _reader.readInt32();
          break;
        case 7:
          _instance.acquiredBalanceChange = _reader.readInt32();
          break;
        case 8:
          _instance.createdTs = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Order.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Order, _writer: BinaryWriter) {
    if (_instance.orderId) {
      _writer.writeString(1, _instance.orderId);
    }
    if (_instance.createdDate) {
      _writer.writeString(2, _instance.createdDate);
    }
    if (_instance.paymentType) {
      _writer.writeString(3, _instance.paymentType);
    }
    if (_instance.discountedTotalPrice) {
      _writer.writeInt32(4, _instance.discountedTotalPrice);
    }
    if (_instance.paymentAmount) {
      _writer.writeInt32(5, _instance.paymentAmount);
    }
    if (_instance.appliedDiscount) {
      _writer.writeInt32(6, _instance.appliedDiscount);
    }
    if (_instance.acquiredBalanceChange) {
      _writer.writeInt32(7, _instance.acquiredBalanceChange);
    }
    if (_instance.createdTs) {
      _writer.writeInt32(8, _instance.createdTs);
    }
  }

  private _orderId?: string;
  private _createdDate?: string;
  private _paymentType?: string;
  private _discountedTotalPrice?: number;
  private _paymentAmount?: number;
  private _appliedDiscount?: number;
  private _acquiredBalanceChange?: number;
  private _createdTs?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Order to deeply clone from
   */
  constructor(_value?: RecursivePartial<Order>) {
    _value = _value || {};
    this.orderId = _value.orderId;
    this.createdDate = _value.createdDate;
    this.paymentType = _value.paymentType;
    this.discountedTotalPrice = _value.discountedTotalPrice;
    this.paymentAmount = _value.paymentAmount;
    this.appliedDiscount = _value.appliedDiscount;
    this.acquiredBalanceChange = _value.acquiredBalanceChange;
    this.createdTs = _value.createdTs;
    Order.refineValues(this);
  }
  get orderId(): string | undefined {
    return this._orderId;
  }
  set orderId(value: string | undefined) {
    this._orderId = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }
  get paymentType(): string | undefined {
    return this._paymentType;
  }
  set paymentType(value: string | undefined) {
    this._paymentType = value;
  }
  get discountedTotalPrice(): number | undefined {
    return this._discountedTotalPrice;
  }
  set discountedTotalPrice(value: number | undefined) {
    this._discountedTotalPrice = value;
  }
  get paymentAmount(): number | undefined {
    return this._paymentAmount;
  }
  set paymentAmount(value: number | undefined) {
    this._paymentAmount = value;
  }
  get appliedDiscount(): number | undefined {
    return this._appliedDiscount;
  }
  set appliedDiscount(value: number | undefined) {
    this._appliedDiscount = value;
  }
  get acquiredBalanceChange(): number | undefined {
    return this._acquiredBalanceChange;
  }
  set acquiredBalanceChange(value: number | undefined) {
    this._acquiredBalanceChange = value;
  }
  get createdTs(): number | undefined {
    return this._createdTs;
  }
  set createdTs(value: number | undefined) {
    this._createdTs = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Order.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Order.AsObject {
    return {
      orderId: this.orderId,
      createdDate: this.createdDate,
      paymentType: this.paymentType,
      discountedTotalPrice: this.discountedTotalPrice,
      paymentAmount: this.paymentAmount,
      appliedDiscount: this.appliedDiscount,
      acquiredBalanceChange: this.acquiredBalanceChange,
      createdTs: this.createdTs
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
export module Order {
  /**
   * Standard JavaScript object representation for Order
   */
  export interface AsObject {
    orderId?: string;
    createdDate?: string;
    paymentType?: string;
    discountedTotalPrice?: number;
    paymentAmount?: number;
    appliedDiscount?: number;
    acquiredBalanceChange?: number;
    createdTs?: number;
  }
}

/**
 * Message implementation for mindbox.ParamsCode
 */
export class ParamsCode implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsCode();
    ParamsCode.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsCode) {
    _instance.mobilePhone = _instance.mobilePhone || '';
    _instance.deviceId = _instance.deviceId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsCode,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.mobilePhone = _reader.readString();
          break;
        case 2:
          _instance.deviceId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsCode.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ParamsCode, _writer: BinaryWriter) {
    if (_instance.mobilePhone) {
      _writer.writeString(1, _instance.mobilePhone);
    }
    if (_instance.deviceId) {
      _writer.writeString(2, _instance.deviceId);
    }
  }

  private _mobilePhone?: string;
  private _deviceId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsCode to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsCode>) {
    _value = _value || {};
    this.mobilePhone = _value.mobilePhone;
    this.deviceId = _value.deviceId;
    ParamsCode.refineValues(this);
  }
  get mobilePhone(): string | undefined {
    return this._mobilePhone;
  }
  set mobilePhone(value: string | undefined) {
    this._mobilePhone = value;
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
    ParamsCode.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsCode.AsObject {
    return {
      mobilePhone: this.mobilePhone,
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
export module ParamsCode {
  /**
   * Standard JavaScript object representation for ParamsCode
   */
  export interface AsObject {
    mobilePhone?: string;
    deviceId?: string;
  }
}

/**
 * Message implementation for mindbox.ResponseCode
 */
export class ResponseCode implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseCode();
    ResponseCode.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseCode) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseCode,
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

    ResponseCode.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseCode,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseCode to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseCode>) {
    _value = _value || {};
    this.ok = _value.ok;
    ResponseCode.refineValues(this);
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
    ResponseCode.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseCode.AsObject {
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
export module ResponseCode {
  /**
   * Standard JavaScript object representation for ResponseCode
   */
  export interface AsObject {
    ok?: boolean;
  }
}

/**
 * Message implementation for mindbox.ParamsCheckCode
 */
export class ParamsCheckCode implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsCheckCode();
    ParamsCheckCode.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsCheckCode) {
    _instance.mobilePhone = _instance.mobilePhone || '';
    _instance.code = _instance.code || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsCheckCode,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.mobilePhone = _reader.readString();
          break;
        case 2:
          _instance.code = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsCheckCode.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsCheckCode,
    _writer: BinaryWriter
  ) {
    if (_instance.mobilePhone) {
      _writer.writeString(1, _instance.mobilePhone);
    }
    if (_instance.code) {
      _writer.writeString(2, _instance.code);
    }
  }

  private _mobilePhone?: string;
  private _code?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsCheckCode to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsCheckCode>) {
    _value = _value || {};
    this.mobilePhone = _value.mobilePhone;
    this.code = _value.code;
    ParamsCheckCode.refineValues(this);
  }
  get mobilePhone(): string | undefined {
    return this._mobilePhone;
  }
  set mobilePhone(value: string | undefined) {
    this._mobilePhone = value;
  }
  get code(): string | undefined {
    return this._code;
  }
  set code(value: string | undefined) {
    this._code = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsCheckCode.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsCheckCode.AsObject {
    return {
      mobilePhone: this.mobilePhone,
      code: this.code
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
export module ParamsCheckCode {
  /**
   * Standard JavaScript object representation for ParamsCheckCode
   */
  export interface AsObject {
    mobilePhone?: string;
    code?: string;
  }
}

/**
 * Message implementation for mindbox.ResponseCheckCode
 */
export class ResponseCheckCode implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseCheckCode();
    ResponseCheckCode.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseCheckCode) {
    _instance.ok = _instance.ok || false;
    _instance.status = _instance.status || '';
    _instance.clientId = _instance.clientId || '';
    _instance.mindboxId = _instance.mindboxId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseCheckCode,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ok = _reader.readBool();
          break;
        case 2:
          _instance.status = _reader.readString();
          break;
        case 3:
          _instance.clientId = _reader.readString();
          break;
        case 4:
          _instance.mindboxId = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseCheckCode.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseCheckCode,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
    if (_instance.status) {
      _writer.writeString(2, _instance.status);
    }
    if (_instance.clientId) {
      _writer.writeString(3, _instance.clientId);
    }
    if (_instance.mindboxId) {
      _writer.writeInt32(4, _instance.mindboxId);
    }
  }

  private _ok?: boolean;
  private _status?: string;
  private _clientId?: string;
  private _mindboxId?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseCheckCode to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseCheckCode>) {
    _value = _value || {};
    this.ok = _value.ok;
    this.status = _value.status;
    this.clientId = _value.clientId;
    this.mindboxId = _value.mindboxId;
    ResponseCheckCode.refineValues(this);
  }
  get ok(): boolean | undefined {
    return this._ok;
  }
  set ok(value: boolean | undefined) {
    this._ok = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get clientId(): string | undefined {
    return this._clientId;
  }
  set clientId(value: string | undefined) {
    this._clientId = value;
  }
  get mindboxId(): number | undefined {
    return this._mindboxId;
  }
  set mindboxId(value: number | undefined) {
    this._mindboxId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseCheckCode.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseCheckCode.AsObject {
    return {
      ok: this.ok,
      status: this.status,
      clientId: this.clientId,
      mindboxId: this.mindboxId
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
export module ResponseCheckCode {
  /**
   * Standard JavaScript object representation for ResponseCheckCode
   */
  export interface AsObject {
    ok?: boolean;
    status?: string;
    clientId?: string;
    mindboxId?: number;
  }
}

/**
 * Message implementation for mindbox.ParamsEditUser
 */
export class ParamsEditUser implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsEditUser();
    ParamsEditUser.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsEditUser) {
    _instance.deviceUuid = _instance.deviceUuid || '';
    _instance.clientId = _instance.clientId || '';
    _instance.mobilePhone = _instance.mobilePhone || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsEditUser,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deviceUuid = _reader.readString();
          break;
        case 2:
          _instance.clientId = _reader.readString();
          break;
        case 3:
          _instance.mobilePhone = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsEditUser.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsEditUser,
    _writer: BinaryWriter
  ) {
    if (_instance.deviceUuid) {
      _writer.writeString(1, _instance.deviceUuid);
    }
    if (_instance.clientId) {
      _writer.writeString(2, _instance.clientId);
    }
    if (_instance.mobilePhone) {
      _writer.writeString(3, _instance.mobilePhone);
    }
  }

  private _deviceUuid?: string;
  private _clientId?: string;
  private _mobilePhone?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsEditUser to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsEditUser>) {
    _value = _value || {};
    this.deviceUuid = _value.deviceUuid;
    this.clientId = _value.clientId;
    this.mobilePhone = _value.mobilePhone;
    ParamsEditUser.refineValues(this);
  }
  get deviceUuid(): string | undefined {
    return this._deviceUuid;
  }
  set deviceUuid(value: string | undefined) {
    this._deviceUuid = value;
  }
  get clientId(): string | undefined {
    return this._clientId;
  }
  set clientId(value: string | undefined) {
    this._clientId = value;
  }
  get mobilePhone(): string | undefined {
    return this._mobilePhone;
  }
  set mobilePhone(value: string | undefined) {
    this._mobilePhone = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsEditUser.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsEditUser.AsObject {
    return {
      deviceUuid: this.deviceUuid,
      clientId: this.clientId,
      mobilePhone: this.mobilePhone
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
export module ParamsEditUser {
  /**
   * Standard JavaScript object representation for ParamsEditUser
   */
  export interface AsObject {
    deviceUuid?: string;
    clientId?: string;
    mobilePhone?: string;
  }
}

/**
 * Message implementation for mindbox.ResponseEditUser
 */
export class ResponseEditUser implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseEditUser();
    ResponseEditUser.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseEditUser) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseEditUser,
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

    ResponseEditUser.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseEditUser,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseEditUser to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseEditUser>) {
    _value = _value || {};
    this.ok = _value.ok;
    ResponseEditUser.refineValues(this);
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
    ResponseEditUser.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseEditUser.AsObject {
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
export module ResponseEditUser {
  /**
   * Standard JavaScript object representation for ResponseEditUser
   */
  export interface AsObject {
    ok?: boolean;
  }
}

/**
 * Message implementation for mindbox.ParamsOSMICard
 */
export class ParamsOSMICard implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsOSMICard();
    ParamsOSMICard.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsOSMICard) {
    _instance.clientId = _instance.clientId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsOSMICard,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.clientId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsOSMICard.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsOSMICard,
    _writer: BinaryWriter
  ) {
    if (_instance.clientId) {
      _writer.writeString(1, _instance.clientId);
    }
  }

  private _clientId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsOSMICard to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsOSMICard>) {
    _value = _value || {};
    this.clientId = _value.clientId;
    ParamsOSMICard.refineValues(this);
  }
  get clientId(): string | undefined {
    return this._clientId;
  }
  set clientId(value: string | undefined) {
    this._clientId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsOSMICard.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsOSMICard.AsObject {
    return {
      clientId: this.clientId
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
export module ParamsOSMICard {
  /**
   * Standard JavaScript object representation for ParamsOSMICard
   */
  export interface AsObject {
    clientId?: string;
  }
}

/**
 * Message implementation for mindbox.ResponseOSMICard
 */
export class ResponseOSMICard implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseOSMICard();
    ResponseOSMICard.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseOSMICard) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseOSMICard,
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

    ResponseOSMICard.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseOSMICard,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseOSMICard to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseOSMICard>) {
    _value = _value || {};
    this.ok = _value.ok;
    ResponseOSMICard.refineValues(this);
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
    ResponseOSMICard.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseOSMICard.AsObject {
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
export module ResponseOSMICard {
  /**
   * Standard JavaScript object representation for ResponseOSMICard
   */
  export interface AsObject {
    ok?: boolean;
  }
}

/**
 * Message implementation for mindbox.RemoveDeviceParams
 */
export class RemoveDeviceParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoveDeviceParams();
    RemoveDeviceParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoveDeviceParams) {
    _instance.deviceId = _instance.deviceId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoveDeviceParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deviceId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RemoveDeviceParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoveDeviceParams,
    _writer: BinaryWriter
  ) {
    if (_instance.deviceId) {
      _writer.writeString(1, _instance.deviceId);
    }
  }

  private _deviceId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoveDeviceParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<RemoveDeviceParams>) {
    _value = _value || {};
    this.deviceId = _value.deviceId;
    RemoveDeviceParams.refineValues(this);
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
    RemoveDeviceParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoveDeviceParams.AsObject {
    return {
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
export module RemoveDeviceParams {
  /**
   * Standard JavaScript object representation for RemoveDeviceParams
   */
  export interface AsObject {
    deviceId?: string;
  }
}

/**
 * Message implementation for mindbox.RemoveDeviceResponse
 */
export class RemoveDeviceResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoveDeviceResponse();
    RemoveDeviceResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoveDeviceResponse) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoveDeviceResponse,
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

    RemoveDeviceResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoveDeviceResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoveDeviceResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RemoveDeviceResponse>) {
    _value = _value || {};
    this.ok = _value.ok;
    RemoveDeviceResponse.refineValues(this);
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
    RemoveDeviceResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoveDeviceResponse.AsObject {
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
export module RemoveDeviceResponse {
  /**
   * Standard JavaScript object representation for RemoveDeviceResponse
   */
  export interface AsObject {
    ok?: boolean;
  }
}
