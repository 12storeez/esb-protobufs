/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from './google/protobuf/empty.pb';
/**
 * Message implementation for logistics.PingResponse
 */
export class PingResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PingResponse();
    PingResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PingResponse) {
    _instance.response = _instance.response || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PingResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PingResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PingResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeString(1, _instance.response);
    }
  }

  private _response?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PingResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PingResponse>) {
    _value = _value || {};
    this.response = _value.response;
    PingResponse.refineValues(this);
  }
  get response(): string | undefined {
    return this._response;
  }
  set response(value: string | undefined) {
    this._response = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PingResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PingResponse.AsObject {
    return {
      response: this.response
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
export module PingResponse {
  /**
   * Standard JavaScript object representation for PingResponse
   */
  export interface AsObject {
    response?: string;
  }
}

/**
 * Message implementation for logistics.GetParamsUPS
 */
export class GetParamsUPS implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetParamsUPS();
    GetParamsUPS.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetParamsUPS) {
    _instance.originCountryCode = _instance.originCountryCode || '';
    _instance.originPostalCode = _instance.originPostalCode || '';
    _instance.destinationCountryCode = _instance.destinationCountryCode || '';
    _instance.destinationPostalCode = _instance.destinationPostalCode || '';
    _instance.shipDate = _instance.shipDate || '';
    _instance.shipTime = _instance.shipTime || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetParamsUPS,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.originCountryCode = _reader.readString();
          break;
        case 2:
          _instance.originPostalCode = _reader.readString();
          break;
        case 3:
          _instance.destinationCountryCode = _reader.readString();
          break;
        case 4:
          _instance.destinationPostalCode = _reader.readString();
          break;
        case 5:
          _instance.shipDate = _reader.readString();
          break;
        case 6:
          _instance.shipTime = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetParamsUPS.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetParamsUPS,
    _writer: BinaryWriter
  ) {
    if (_instance.originCountryCode) {
      _writer.writeString(1, _instance.originCountryCode);
    }
    if (_instance.originPostalCode) {
      _writer.writeString(2, _instance.originPostalCode);
    }
    if (_instance.destinationCountryCode) {
      _writer.writeString(3, _instance.destinationCountryCode);
    }
    if (_instance.destinationPostalCode) {
      _writer.writeString(4, _instance.destinationPostalCode);
    }
    if (_instance.shipDate) {
      _writer.writeString(5, _instance.shipDate);
    }
    if (_instance.shipTime) {
      _writer.writeString(6, _instance.shipTime);
    }
  }

  private _originCountryCode?: string;
  private _originPostalCode?: string;
  private _destinationCountryCode?: string;
  private _destinationPostalCode?: string;
  private _shipDate?: string;
  private _shipTime?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetParamsUPS to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetParamsUPS>) {
    _value = _value || {};
    this.originCountryCode = _value.originCountryCode;
    this.originPostalCode = _value.originPostalCode;
    this.destinationCountryCode = _value.destinationCountryCode;
    this.destinationPostalCode = _value.destinationPostalCode;
    this.shipDate = _value.shipDate;
    this.shipTime = _value.shipTime;
    GetParamsUPS.refineValues(this);
  }
  get originCountryCode(): string | undefined {
    return this._originCountryCode;
  }
  set originCountryCode(value: string | undefined) {
    this._originCountryCode = value;
  }
  get originPostalCode(): string | undefined {
    return this._originPostalCode;
  }
  set originPostalCode(value: string | undefined) {
    this._originPostalCode = value;
  }
  get destinationCountryCode(): string | undefined {
    return this._destinationCountryCode;
  }
  set destinationCountryCode(value: string | undefined) {
    this._destinationCountryCode = value;
  }
  get destinationPostalCode(): string | undefined {
    return this._destinationPostalCode;
  }
  set destinationPostalCode(value: string | undefined) {
    this._destinationPostalCode = value;
  }
  get shipDate(): string | undefined {
    return this._shipDate;
  }
  set shipDate(value: string | undefined) {
    this._shipDate = value;
  }
  get shipTime(): string | undefined {
    return this._shipTime;
  }
  set shipTime(value: string | undefined) {
    this._shipTime = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetParamsUPS.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetParamsUPS.AsObject {
    return {
      originCountryCode: this.originCountryCode,
      originPostalCode: this.originPostalCode,
      destinationCountryCode: this.destinationCountryCode,
      destinationPostalCode: this.destinationPostalCode,
      shipDate: this.shipDate,
      shipTime: this.shipTime
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
export module GetParamsUPS {
  /**
   * Standard JavaScript object representation for GetParamsUPS
   */
  export interface AsObject {
    originCountryCode?: string;
    originPostalCode?: string;
    destinationCountryCode?: string;
    destinationPostalCode?: string;
    shipDate?: string;
    shipTime?: string;
  }
}

/**
 * Message implementation for logistics.GetResponseUPS
 */
export class GetResponseUPS implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResponseUPS();
    GetResponseUPS.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResponseUPS) {
    _instance.deliveryDate = _instance.deliveryDate || '';
    _instance.deliveryTime = _instance.deliveryTime || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResponseUPS,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deliveryDate = _reader.readString();
          break;
        case 2:
          _instance.deliveryTime = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetResponseUPS.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResponseUPS,
    _writer: BinaryWriter
  ) {
    if (_instance.deliveryDate) {
      _writer.writeString(1, _instance.deliveryDate);
    }
    if (_instance.deliveryTime) {
      _writer.writeString(2, _instance.deliveryTime);
    }
  }

  private _deliveryDate?: string;
  private _deliveryTime?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResponseUPS to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResponseUPS>) {
    _value = _value || {};
    this.deliveryDate = _value.deliveryDate;
    this.deliveryTime = _value.deliveryTime;
    GetResponseUPS.refineValues(this);
  }
  get deliveryDate(): string | undefined {
    return this._deliveryDate;
  }
  set deliveryDate(value: string | undefined) {
    this._deliveryDate = value;
  }
  get deliveryTime(): string | undefined {
    return this._deliveryTime;
  }
  set deliveryTime(value: string | undefined) {
    this._deliveryTime = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetResponseUPS.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResponseUPS.AsObject {
    return {
      deliveryDate: this.deliveryDate,
      deliveryTime: this.deliveryTime
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
export module GetResponseUPS {
  /**
   * Standard JavaScript object representation for GetResponseUPS
   */
  export interface AsObject {
    deliveryDate?: string;
    deliveryTime?: string;
  }
}

/**
 * Message implementation for logistics.GetParamsBoxberry
 */
export class GetParamsBoxberry implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetParamsBoxberry();
    GetParamsBoxberry.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetParamsBoxberry) {
    _instance.originCode = _instance.originCode || '';
    _instance.destionationCode = _instance.destionationCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetParamsBoxberry,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.originCode = _reader.readString();
          break;
        case 2:
          _instance.destionationCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetParamsBoxberry.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetParamsBoxberry,
    _writer: BinaryWriter
  ) {
    if (_instance.originCode) {
      _writer.writeString(1, _instance.originCode);
    }
    if (_instance.destionationCode) {
      _writer.writeString(2, _instance.destionationCode);
    }
  }

  private _originCode?: string;
  private _destionationCode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetParamsBoxberry to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetParamsBoxberry>) {
    _value = _value || {};
    this.originCode = _value.originCode;
    this.destionationCode = _value.destionationCode;
    GetParamsBoxberry.refineValues(this);
  }
  get originCode(): string | undefined {
    return this._originCode;
  }
  set originCode(value: string | undefined) {
    this._originCode = value;
  }
  get destionationCode(): string | undefined {
    return this._destionationCode;
  }
  set destionationCode(value: string | undefined) {
    this._destionationCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetParamsBoxberry.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetParamsBoxberry.AsObject {
    return {
      originCode: this.originCode,
      destionationCode: this.destionationCode
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
export module GetParamsBoxberry {
  /**
   * Standard JavaScript object representation for GetParamsBoxberry
   */
  export interface AsObject {
    originCode?: string;
    destionationCode?: string;
  }
}

/**
 * Message implementation for logistics.GetResponseBoxberry
 */
export class GetResponseBoxberry implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResponseBoxberry();
    GetResponseBoxberry.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResponseBoxberry) {
    _instance.price = _instance.price || 0;
    _instance.deliveryPeriod = _instance.deliveryPeriod || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResponseBoxberry,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.price = _reader.readInt32();
          break;
        case 2:
          _instance.deliveryPeriod = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetResponseBoxberry.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResponseBoxberry,
    _writer: BinaryWriter
  ) {
    if (_instance.price) {
      _writer.writeInt32(1, _instance.price);
    }
    if (_instance.deliveryPeriod) {
      _writer.writeInt32(2, _instance.deliveryPeriod);
    }
  }

  private _price?: number;
  private _deliveryPeriod?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResponseBoxberry to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResponseBoxberry>) {
    _value = _value || {};
    this.price = _value.price;
    this.deliveryPeriod = _value.deliveryPeriod;
    GetResponseBoxberry.refineValues(this);
  }
  get price(): number | undefined {
    return this._price;
  }
  set price(value: number | undefined) {
    this._price = value;
  }
  get deliveryPeriod(): number | undefined {
    return this._deliveryPeriod;
  }
  set deliveryPeriod(value: number | undefined) {
    this._deliveryPeriod = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetResponseBoxberry.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResponseBoxberry.AsObject {
    return {
      price: this.price,
      deliveryPeriod: this.deliveryPeriod
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
export module GetResponseBoxberry {
  /**
   * Standard JavaScript object representation for GetResponseBoxberry
   */
  export interface AsObject {
    price?: number;
    deliveryPeriod?: number;
  }
}

/**
 * Message implementation for logistics.GetParamsBoxberryDurationByCity
 */
export class GetParamsBoxberryDurationByCity implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetParamsBoxberryDurationByCity();
    GetParamsBoxberryDurationByCity.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetParamsBoxberryDurationByCity) {
    _instance.originCode = _instance.originCode || '';
    _instance.cityName = _instance.cityName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetParamsBoxberryDurationByCity,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.originCode = _reader.readString();
          break;
        case 2:
          _instance.cityName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetParamsBoxberryDurationByCity.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetParamsBoxberryDurationByCity,
    _writer: BinaryWriter
  ) {
    if (_instance.originCode) {
      _writer.writeString(1, _instance.originCode);
    }
    if (_instance.cityName) {
      _writer.writeString(2, _instance.cityName);
    }
  }

  private _originCode?: string;
  private _cityName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetParamsBoxberryDurationByCity to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetParamsBoxberryDurationByCity>) {
    _value = _value || {};
    this.originCode = _value.originCode;
    this.cityName = _value.cityName;
    GetParamsBoxberryDurationByCity.refineValues(this);
  }
  get originCode(): string | undefined {
    return this._originCode;
  }
  set originCode(value: string | undefined) {
    this._originCode = value;
  }
  get cityName(): string | undefined {
    return this._cityName;
  }
  set cityName(value: string | undefined) {
    this._cityName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetParamsBoxberryDurationByCity.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetParamsBoxberryDurationByCity.AsObject {
    return {
      originCode: this.originCode,
      cityName: this.cityName
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
export module GetParamsBoxberryDurationByCity {
  /**
   * Standard JavaScript object representation for GetParamsBoxberryDurationByCity
   */
  export interface AsObject {
    originCode?: string;
    cityName?: string;
  }
}

/**
 * Message implementation for logistics.GetResponseBoxberryDurationByCity
 */
export class GetResponseBoxberryDurationByCity implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResponseBoxberryDurationByCity();
    GetResponseBoxberryDurationByCity.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResponseBoxberryDurationByCity) {
    _instance.price = _instance.price || 0;
    _instance.deliveryPeriod = _instance.deliveryPeriod || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResponseBoxberryDurationByCity,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.price = _reader.readInt32();
          break;
        case 2:
          _instance.deliveryPeriod = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetResponseBoxberryDurationByCity.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResponseBoxberryDurationByCity,
    _writer: BinaryWriter
  ) {
    if (_instance.price) {
      _writer.writeInt32(1, _instance.price);
    }
    if (_instance.deliveryPeriod) {
      _writer.writeInt32(2, _instance.deliveryPeriod);
    }
  }

  private _price?: number;
  private _deliveryPeriod?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResponseBoxberryDurationByCity to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResponseBoxberryDurationByCity>) {
    _value = _value || {};
    this.price = _value.price;
    this.deliveryPeriod = _value.deliveryPeriod;
    GetResponseBoxberryDurationByCity.refineValues(this);
  }
  get price(): number | undefined {
    return this._price;
  }
  set price(value: number | undefined) {
    this._price = value;
  }
  get deliveryPeriod(): number | undefined {
    return this._deliveryPeriod;
  }
  set deliveryPeriod(value: number | undefined) {
    this._deliveryPeriod = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetResponseBoxberryDurationByCity.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResponseBoxberryDurationByCity.AsObject {
    return {
      price: this.price,
      deliveryPeriod: this.deliveryPeriod
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
export module GetResponseBoxberryDurationByCity {
  /**
   * Standard JavaScript object representation for GetResponseBoxberryDurationByCity
   */
  export interface AsObject {
    price?: number;
    deliveryPeriod?: number;
  }
}

/**
 * Message implementation for logistics.GetParamsPointInformation
 */
export class GetParamsPointInformation implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetParamsPointInformation();
    GetParamsPointInformation.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetParamsPointInformation) {
    _instance.pointCode = _instance.pointCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetParamsPointInformation,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pointCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetParamsPointInformation.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetParamsPointInformation,
    _writer: BinaryWriter
  ) {
    if (_instance.pointCode) {
      _writer.writeString(1, _instance.pointCode);
    }
  }

  private _pointCode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetParamsPointInformation to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetParamsPointInformation>) {
    _value = _value || {};
    this.pointCode = _value.pointCode;
    GetParamsPointInformation.refineValues(this);
  }
  get pointCode(): string | undefined {
    return this._pointCode;
  }
  set pointCode(value: string | undefined) {
    this._pointCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetParamsPointInformation.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetParamsPointInformation.AsObject {
    return {
      pointCode: this.pointCode
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
export module GetParamsPointInformation {
  /**
   * Standard JavaScript object representation for GetParamsPointInformation
   */
  export interface AsObject {
    pointCode?: string;
  }
}

/**
 * Message implementation for logistics.GetResponsePointInformation
 */
export class GetResponsePointInformation implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResponsePointInformation();
    GetResponsePointInformation.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResponsePointInformation) {
    _instance.workSchedule = _instance.workSchedule || '';
    _instance.address = _instance.address || '';
    _instance.metro = _instance.metro || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResponsePointInformation,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.workSchedule = _reader.readString();
          break;
        case 2:
          _instance.address = _reader.readString();
          break;
        case 3:
          _instance.metro = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetResponsePointInformation.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResponsePointInformation,
    _writer: BinaryWriter
  ) {
    if (_instance.workSchedule) {
      _writer.writeString(1, _instance.workSchedule);
    }
    if (_instance.address) {
      _writer.writeString(2, _instance.address);
    }
    if (_instance.metro) {
      _writer.writeString(3, _instance.metro);
    }
  }

  private _workSchedule?: string;
  private _address?: string;
  private _metro?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResponsePointInformation to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResponsePointInformation>) {
    _value = _value || {};
    this.workSchedule = _value.workSchedule;
    this.address = _value.address;
    this.metro = _value.metro;
    GetResponsePointInformation.refineValues(this);
  }
  get workSchedule(): string | undefined {
    return this._workSchedule;
  }
  set workSchedule(value: string | undefined) {
    this._workSchedule = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get metro(): string | undefined {
    return this._metro;
  }
  set metro(value: string | undefined) {
    this._metro = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetResponsePointInformation.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResponsePointInformation.AsObject {
    return {
      workSchedule: this.workSchedule,
      address: this.address,
      metro: this.metro
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
export module GetResponsePointInformation {
  /**
   * Standard JavaScript object representation for GetResponsePointInformation
   */
  export interface AsObject {
    workSchedule?: string;
    address?: string;
    metro?: string;
  }
}

/**
 * Message implementation for logistics.GetParamsOrderStatus
 */
export class GetParamsOrderStatus implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetParamsOrderStatus();
    GetParamsOrderStatus.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetParamsOrderStatus) {
    _instance.orderId = _instance.orderId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetParamsOrderStatus,
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

    GetParamsOrderStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetParamsOrderStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.orderId) {
      _writer.writeString(1, _instance.orderId);
    }
  }

  private _orderId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetParamsOrderStatus to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetParamsOrderStatus>) {
    _value = _value || {};
    this.orderId = _value.orderId;
    GetParamsOrderStatus.refineValues(this);
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
    GetParamsOrderStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetParamsOrderStatus.AsObject {
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
export module GetParamsOrderStatus {
  /**
   * Standard JavaScript object representation for GetParamsOrderStatus
   */
  export interface AsObject {
    orderId?: string;
  }
}

/**
 * Message implementation for logistics.GetResponseOrderStatus
 */
export class GetResponseOrderStatus implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResponseOrderStatus();
    GetResponseOrderStatus.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResponseOrderStatus) {
    _instance.statuses = _instance.statuses || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResponseOrderStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new status();
          _reader.readMessage(
            messageInitializer1,
            status.deserializeBinaryFromReader
          );
          (_instance.statuses = _instance.statuses || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetResponseOrderStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResponseOrderStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.statuses && _instance.statuses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.statuses as any,
        status.serializeBinaryToWriter
      );
    }
  }

  private _statuses?: status[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResponseOrderStatus to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResponseOrderStatus>) {
    _value = _value || {};
    this.statuses = (_value.statuses || []).map(m => new status(m));
    GetResponseOrderStatus.refineValues(this);
  }
  get statuses(): status[] | undefined {
    return this._statuses;
  }
  set statuses(value: status[] | undefined) {
    this._statuses = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetResponseOrderStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResponseOrderStatus.AsObject {
    return {
      statuses: (this.statuses || []).map(m => m.toObject())
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
export module GetResponseOrderStatus {
  /**
   * Standard JavaScript object representation for GetResponseOrderStatus
   */
  export interface AsObject {
    statuses?: status.AsObject[];
  }
}

/**
 * Message implementation for logistics.status
 */
export class status implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new status();
    status.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: status) {
    _instance.date = _instance.date || '';
    _instance.name = _instance.name || '';
    _instance.comment = _instance.comment || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: status, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.date = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.comment = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    status.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: status, _writer: BinaryWriter) {
    if (_instance.date) {
      _writer.writeString(1, _instance.date);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.comment) {
      _writer.writeString(3, _instance.comment);
    }
  }

  private _date?: string;
  private _name?: string;
  private _comment?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of status to deeply clone from
   */
  constructor(_value?: RecursivePartial<status>) {
    _value = _value || {};
    this.date = _value.date;
    this.name = _value.name;
    this.comment = _value.comment;
    status.refineValues(this);
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get comment(): string | undefined {
    return this._comment;
  }
  set comment(value: string | undefined) {
    this._comment = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    status.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): status.AsObject {
    return {
      date: this.date,
      name: this.name,
      comment: this.comment
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
export module status {
  /**
   * Standard JavaScript object representation for status
   */
  export interface AsObject {
    date?: string;
    name?: string;
    comment?: string;
  }
}
