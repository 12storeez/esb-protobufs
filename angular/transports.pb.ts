/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export enum DeliveryType {
  courier = 0,
  courier_fast = 1,
  courier_fitting = 2,
  pickup_shop = 3,
  pickup_boxberry = 4
}
/**
 * Message implementation for transport.Fias
 */
export class Fias implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Fias();
    Fias.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Fias) {
    _instance.fias = _instance.fias || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Fias, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fias = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Fias.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Fias, _writer: BinaryWriter) {
    if (_instance.fias) {
      _writer.writeString(1, _instance.fias);
    }
  }

  private _fias?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Fias to deeply clone from
   */
  constructor(_value?: RecursivePartial<Fias>) {
    _value = _value || {};
    this.fias = _value.fias;
    Fias.refineValues(this);
  }
  get fias(): string | undefined {
    return this._fias;
  }
  set fias(value: string | undefined) {
    this._fias = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Fias.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Fias.AsObject {
    return {
      fias: this.fias
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
export module Fias {
  /**
   * Standard JavaScript object representation for Fias
   */
  export interface AsObject {
    fias?: string;
  }
}

/**
 * Message implementation for transport.ZoneID
 */
export class ZoneID implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ZoneID();
    ZoneID.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ZoneID) {
    _instance.zoneId = _instance.zoneId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: ZoneID, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.zoneId = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ZoneID.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ZoneID, _writer: BinaryWriter) {
    if (_instance.zoneId) {
      _writer.writeInt32(1, _instance.zoneId);
    }
  }

  private _zoneId?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ZoneID to deeply clone from
   */
  constructor(_value?: RecursivePartial<ZoneID>) {
    _value = _value || {};
    this.zoneId = _value.zoneId;
    ZoneID.refineValues(this);
  }
  get zoneId(): number | undefined {
    return this._zoneId;
  }
  set zoneId(value: number | undefined) {
    this._zoneId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ZoneID.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ZoneID.AsObject {
    return {
      zoneId: this.zoneId
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
export module ZoneID {
  /**
   * Standard JavaScript object representation for ZoneID
   */
  export interface AsObject {
    zoneId?: number;
  }
}

/**
 * Message implementation for transport.GetIdByFiasesParams
 */
export class GetIdByFiasesParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetIdByFiasesParams();
    GetIdByFiasesParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetIdByFiasesParams) {
    _instance.fias = _instance.fias || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetIdByFiasesParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.fias = _instance.fias || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    GetIdByFiasesParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetIdByFiasesParams,
    _writer: BinaryWriter
  ) {
    if (_instance.fias && _instance.fias.length) {
      _writer.writeRepeatedString(1, _instance.fias);
    }
  }

  private _fias?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetIdByFiasesParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetIdByFiasesParams>) {
    _value = _value || {};
    this.fias = (_value.fias || []).slice();
    GetIdByFiasesParams.refineValues(this);
  }
  get fias(): string[] | undefined {
    return this._fias;
  }
  set fias(value: string[] | undefined) {
    this._fias = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetIdByFiasesParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetIdByFiasesParams.AsObject {
    return {
      fias: (this.fias || []).slice()
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
export module GetIdByFiasesParams {
  /**
   * Standard JavaScript object representation for GetIdByFiasesParams
   */
  export interface AsObject {
    fias?: string[];
  }
}

/**
 * Message implementation for transport.Zone
 */
export class Zone implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Zone();
    Zone.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Zone) {
    _instance.id = _instance.id || 0;
    _instance.name = _instance.name || '';
    _instance.active = _instance.active || false;
    _instance.created = _instance.created || 0;
    _instance.updated = _instance.updated || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Zone, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.active = _reader.readBool();
          break;
        case 4:
          _instance.created = _reader.readInt32();
          break;
        case 5:
          _instance.updated = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Zone.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Zone, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.active) {
      _writer.writeBool(3, _instance.active);
    }
    if (_instance.created) {
      _writer.writeInt32(4, _instance.created);
    }
    if (_instance.updated) {
      _writer.writeInt32(5, _instance.updated);
    }
  }

  private _id?: number;
  private _name?: string;
  private _active?: boolean;
  private _created?: number;
  private _updated?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Zone to deeply clone from
   */
  constructor(_value?: RecursivePartial<Zone>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.active = _value.active;
    this.created = _value.created;
    this.updated = _value.updated;
    Zone.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get created(): number | undefined {
    return this._created;
  }
  set created(value: number | undefined) {
    this._created = value;
  }
  get updated(): number | undefined {
    return this._updated;
  }
  set updated(value: number | undefined) {
    this._updated = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Zone.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Zone.AsObject {
    return {
      id: this.id,
      name: this.name,
      active: this.active,
      created: this.created,
      updated: this.updated
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
export module Zone {
  /**
   * Standard JavaScript object representation for Zone
   */
  export interface AsObject {
    id?: number;
    name?: string;
    active?: boolean;
    created?: number;
    updated?: number;
  }
}

/**
 * Message implementation for transport.GetZoneByIdParams
 */
export class GetZoneByIdParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetZoneByIdParams();
    GetZoneByIdParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetZoneByIdParams) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetZoneByIdParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetZoneByIdParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetZoneByIdParams,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetZoneByIdParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetZoneByIdParams>) {
    _value = _value || {};
    this.id = _value.id;
    GetZoneByIdParams.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetZoneByIdParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetZoneByIdParams.AsObject {
    return {
      id: this.id
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
export module GetZoneByIdParams {
  /**
   * Standard JavaScript object representation for GetZoneByIdParams
   */
  export interface AsObject {
    id?: number;
  }
}

/**
 * Message implementation for transport.CreateParams
 */
export class CreateParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateParams();
    CreateParams.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateParams) {
    _instance.zoneName = _instance.zoneName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.zoneName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateParams,
    _writer: BinaryWriter
  ) {
    if (_instance.zoneName) {
      _writer.writeString(1, _instance.zoneName);
    }
  }

  private _zoneName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateParams>) {
    _value = _value || {};
    this.zoneName = _value.zoneName;
    CreateParams.refineValues(this);
  }
  get zoneName(): string | undefined {
    return this._zoneName;
  }
  set zoneName(value: string | undefined) {
    this._zoneName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateParams.AsObject {
    return {
      zoneName: this.zoneName
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
export module CreateParams {
  /**
   * Standard JavaScript object representation for CreateParams
   */
  export interface AsObject {
    zoneName?: string;
  }
}

/**
 * Message implementation for transport.AddFiasToZoneParams
 */
export class AddFiasToZoneParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddFiasToZoneParams();
    AddFiasToZoneParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddFiasToZoneParams) {
    _instance.zoneId = _instance.zoneId || 0;
    _instance.fias = _instance.fias || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddFiasToZoneParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.zoneId = _reader.readInt32();
          break;
        case 2:
          (_instance.fias = _instance.fias || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    AddFiasToZoneParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddFiasToZoneParams,
    _writer: BinaryWriter
  ) {
    if (_instance.zoneId) {
      _writer.writeInt32(1, _instance.zoneId);
    }
    if (_instance.fias && _instance.fias.length) {
      _writer.writeRepeatedString(2, _instance.fias);
    }
  }

  private _zoneId?: number;
  private _fias?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddFiasToZoneParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddFiasToZoneParams>) {
    _value = _value || {};
    this.zoneId = _value.zoneId;
    this.fias = (_value.fias || []).slice();
    AddFiasToZoneParams.refineValues(this);
  }
  get zoneId(): number | undefined {
    return this._zoneId;
  }
  set zoneId(value: number | undefined) {
    this._zoneId = value;
  }
  get fias(): string[] | undefined {
    return this._fias;
  }
  set fias(value: string[] | undefined) {
    this._fias = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddFiasToZoneParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddFiasToZoneParams.AsObject {
    return {
      zoneId: this.zoneId,
      fias: (this.fias || []).slice()
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
export module AddFiasToZoneParams {
  /**
   * Standard JavaScript object representation for AddFiasToZoneParams
   */
  export interface AsObject {
    zoneId?: number;
    fias?: string[];
  }
}

/**
 * Message implementation for transport.OkResponse
 */
export class OkResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OkResponse();
    OkResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OkResponse) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OkResponse,
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

    OkResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: OkResponse, _writer: BinaryWriter) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OkResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<OkResponse>) {
    _value = _value || {};
    this.ok = _value.ok;
    OkResponse.refineValues(this);
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
    OkResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OkResponse.AsObject {
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
export module OkResponse {
  /**
   * Standard JavaScript object representation for OkResponse
   */
  export interface AsObject {
    ok?: boolean;
  }
}

/**
 * Message implementation for transport.AllParams
 */
export class AllParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AllParams();
    AllParams.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AllParams) {
    _instance.limit = _instance.limit || 0;
    _instance.offset = _instance.offset || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AllParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.limit = _reader.readInt32();
          break;
        case 2:
          _instance.offset = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    AllParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: AllParams, _writer: BinaryWriter) {
    if (_instance.limit) {
      _writer.writeInt32(1, _instance.limit);
    }
    if (_instance.offset) {
      _writer.writeInt32(2, _instance.offset);
    }
  }

  private _limit?: number;
  private _offset?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AllParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<AllParams>) {
    _value = _value || {};
    this.limit = _value.limit;
    this.offset = _value.offset;
    AllParams.refineValues(this);
  }
  get limit(): number | undefined {
    return this._limit;
  }
  set limit(value: number | undefined) {
    this._limit = value;
  }
  get offset(): number | undefined {
    return this._offset;
  }
  set offset(value: number | undefined) {
    this._offset = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AllParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AllParams.AsObject {
    return {
      limit: this.limit,
      offset: this.offset
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
export module AllParams {
  /**
   * Standard JavaScript object representation for AllParams
   */
  export interface AsObject {
    limit?: number;
    offset?: number;
  }
}

/**
 * Message implementation for transport.AllResponse
 */
export class AllResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AllResponse();
    AllResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AllResponse) {
    _instance.total = _instance.total || 0;
    _instance.zones = _instance.zones || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AllResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.total = _reader.readInt32();
          break;
        case 2:
          const messageInitializer2 = new Zone();
          _reader.readMessage(
            messageInitializer2,
            Zone.deserializeBinaryFromReader
          );
          (_instance.zones = _instance.zones || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    AllResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AllResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.total) {
      _writer.writeInt32(1, _instance.total);
    }
    if (_instance.zones && _instance.zones.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.zones as any,
        Zone.serializeBinaryToWriter
      );
    }
  }

  private _total?: number;
  private _zones?: Zone[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AllResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AllResponse>) {
    _value = _value || {};
    this.total = _value.total;
    this.zones = (_value.zones || []).map(m => new Zone(m));
    AllResponse.refineValues(this);
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }
  get zones(): Zone[] | undefined {
    return this._zones;
  }
  set zones(value: Zone[] | undefined) {
    this._zones = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AllResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AllResponse.AsObject {
    return {
      total: this.total,
      zones: (this.zones || []).map(m => m.toObject())
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
export module AllResponse {
  /**
   * Standard JavaScript object representation for AllResponse
   */
  export interface AsObject {
    total?: number;
    zones?: Zone.AsObject[];
  }
}

/**
 * Message implementation for transport.AddManualPriorityParams
 */
export class AddManualPriorityParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddManualPriorityParams();
    AddManualPriorityParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddManualPriorityParams) {
    _instance.zoneId = _instance.zoneId || 0;
    _instance.tkId = _instance.tkId || 0;
    _instance.deliveryId = _instance.deliveryId || 0;
    _instance.value = _instance.value || 0;
    _instance.maxDays = _instance.maxDays || 0;
    _instance.tariff = _instance.tariff || 0;
    _instance.active = _instance.active || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddManualPriorityParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.zoneId = _reader.readInt32();
          break;
        case 2:
          _instance.tkId = _reader.readInt32();
          break;
        case 3:
          _instance.deliveryId = _reader.readInt32();
          break;
        case 4:
          _instance.value = _reader.readFloat();
          break;
        case 5:
          _instance.maxDays = _reader.readFloat();
          break;
        case 6:
          _instance.tariff = _reader.readFloat();
          break;
        case 7:
          _instance.active = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    AddManualPriorityParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddManualPriorityParams,
    _writer: BinaryWriter
  ) {
    if (_instance.zoneId) {
      _writer.writeInt32(1, _instance.zoneId);
    }
    if (_instance.tkId) {
      _writer.writeInt32(2, _instance.tkId);
    }
    if (_instance.deliveryId) {
      _writer.writeInt32(3, _instance.deliveryId);
    }
    if (_instance.value) {
      _writer.writeFloat(4, _instance.value);
    }
    if (_instance.maxDays) {
      _writer.writeFloat(5, _instance.maxDays);
    }
    if (_instance.tariff) {
      _writer.writeFloat(6, _instance.tariff);
    }
    if (_instance.active) {
      _writer.writeBool(7, _instance.active);
    }
  }

  private _zoneId?: number;
  private _tkId?: number;
  private _deliveryId?: number;
  private _value?: number;
  private _maxDays?: number;
  private _tariff?: number;
  private _active?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddManualPriorityParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddManualPriorityParams>) {
    _value = _value || {};
    this.zoneId = _value.zoneId;
    this.tkId = _value.tkId;
    this.deliveryId = _value.deliveryId;
    this.value = _value.value;
    this.maxDays = _value.maxDays;
    this.tariff = _value.tariff;
    this.active = _value.active;
    AddManualPriorityParams.refineValues(this);
  }
  get zoneId(): number | undefined {
    return this._zoneId;
  }
  set zoneId(value: number | undefined) {
    this._zoneId = value;
  }
  get tkId(): number | undefined {
    return this._tkId;
  }
  set tkId(value: number | undefined) {
    this._tkId = value;
  }
  get deliveryId(): number | undefined {
    return this._deliveryId;
  }
  set deliveryId(value: number | undefined) {
    this._deliveryId = value;
  }
  get value(): number | undefined {
    return this._value;
  }
  set value(value: number | undefined) {
    this._value = value;
  }
  get maxDays(): number | undefined {
    return this._maxDays;
  }
  set maxDays(value: number | undefined) {
    this._maxDays = value;
  }
  get tariff(): number | undefined {
    return this._tariff;
  }
  set tariff(value: number | undefined) {
    this._tariff = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddManualPriorityParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddManualPriorityParams.AsObject {
    return {
      zoneId: this.zoneId,
      tkId: this.tkId,
      deliveryId: this.deliveryId,
      value: this.value,
      maxDays: this.maxDays,
      tariff: this.tariff,
      active: this.active
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
export module AddManualPriorityParams {
  /**
   * Standard JavaScript object representation for AddManualPriorityParams
   */
  export interface AsObject {
    zoneId?: number;
    tkId?: number;
    deliveryId?: number;
    value?: number;
    maxDays?: number;
    tariff?: number;
    active?: boolean;
  }
}

/**
 * Message implementation for transport.ManualPriorityParams
 */
export class ManualPriorityParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ManualPriorityParams();
    ManualPriorityParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ManualPriorityParams) {
    _instance.id = _instance.id || 0;
    _instance.zoneId = _instance.zoneId || 0;
    _instance.tkId = _instance.tkId || 0;
    _instance.deliveryId = _instance.deliveryId || 0;
    _instance.value = _instance.value || 0;
    _instance.maxDays = _instance.maxDays || 0;
    _instance.tariff = _instance.tariff || 0;
    _instance.active = _instance.active || false;
    _instance.created = _instance.created || 0;
    _instance.updated = _instance.updated || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ManualPriorityParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.zoneId = _reader.readInt32();
          break;
        case 3:
          _instance.tkId = _reader.readInt32();
          break;
        case 4:
          _instance.deliveryId = _reader.readInt32();
          break;
        case 5:
          _instance.value = _reader.readFloat();
          break;
        case 6:
          _instance.maxDays = _reader.readFloat();
          break;
        case 7:
          _instance.tariff = _reader.readFloat();
          break;
        case 8:
          _instance.active = _reader.readBool();
          break;
        case 9:
          _instance.created = _reader.readInt32();
          break;
        case 10:
          _instance.updated = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ManualPriorityParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ManualPriorityParams,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.zoneId) {
      _writer.writeInt32(2, _instance.zoneId);
    }
    if (_instance.tkId) {
      _writer.writeInt32(3, _instance.tkId);
    }
    if (_instance.deliveryId) {
      _writer.writeInt32(4, _instance.deliveryId);
    }
    if (_instance.value) {
      _writer.writeFloat(5, _instance.value);
    }
    if (_instance.maxDays) {
      _writer.writeFloat(6, _instance.maxDays);
    }
    if (_instance.tariff) {
      _writer.writeFloat(7, _instance.tariff);
    }
    if (_instance.active) {
      _writer.writeBool(8, _instance.active);
    }
    if (_instance.created) {
      _writer.writeInt32(9, _instance.created);
    }
    if (_instance.updated) {
      _writer.writeInt32(10, _instance.updated);
    }
  }

  private _id?: number;
  private _zoneId?: number;
  private _tkId?: number;
  private _deliveryId?: number;
  private _value?: number;
  private _maxDays?: number;
  private _tariff?: number;
  private _active?: boolean;
  private _created?: number;
  private _updated?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ManualPriorityParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<ManualPriorityParams>) {
    _value = _value || {};
    this.id = _value.id;
    this.zoneId = _value.zoneId;
    this.tkId = _value.tkId;
    this.deliveryId = _value.deliveryId;
    this.value = _value.value;
    this.maxDays = _value.maxDays;
    this.tariff = _value.tariff;
    this.active = _value.active;
    this.created = _value.created;
    this.updated = _value.updated;
    ManualPriorityParams.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get zoneId(): number | undefined {
    return this._zoneId;
  }
  set zoneId(value: number | undefined) {
    this._zoneId = value;
  }
  get tkId(): number | undefined {
    return this._tkId;
  }
  set tkId(value: number | undefined) {
    this._tkId = value;
  }
  get deliveryId(): number | undefined {
    return this._deliveryId;
  }
  set deliveryId(value: number | undefined) {
    this._deliveryId = value;
  }
  get value(): number | undefined {
    return this._value;
  }
  set value(value: number | undefined) {
    this._value = value;
  }
  get maxDays(): number | undefined {
    return this._maxDays;
  }
  set maxDays(value: number | undefined) {
    this._maxDays = value;
  }
  get tariff(): number | undefined {
    return this._tariff;
  }
  set tariff(value: number | undefined) {
    this._tariff = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get created(): number | undefined {
    return this._created;
  }
  set created(value: number | undefined) {
    this._created = value;
  }
  get updated(): number | undefined {
    return this._updated;
  }
  set updated(value: number | undefined) {
    this._updated = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ManualPriorityParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ManualPriorityParams.AsObject {
    return {
      id: this.id,
      zoneId: this.zoneId,
      tkId: this.tkId,
      deliveryId: this.deliveryId,
      value: this.value,
      maxDays: this.maxDays,
      tariff: this.tariff,
      active: this.active,
      created: this.created,
      updated: this.updated
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
export module ManualPriorityParams {
  /**
   * Standard JavaScript object representation for ManualPriorityParams
   */
  export interface AsObject {
    id?: number;
    zoneId?: number;
    tkId?: number;
    deliveryId?: number;
    value?: number;
    maxDays?: number;
    tariff?: number;
    active?: boolean;
    created?: number;
    updated?: number;
  }
}

/**
 * Message implementation for transport.ManualPriorityList
 */
export class ManualPriorityList implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ManualPriorityList();
    ManualPriorityList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ManualPriorityList) {
    _instance.list = _instance.list || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ManualPriorityList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ManualPriorityParams();
          _reader.readMessage(
            messageInitializer1,
            ManualPriorityParams.deserializeBinaryFromReader
          );
          (_instance.list = _instance.list || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ManualPriorityList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ManualPriorityList,
    _writer: BinaryWriter
  ) {
    if (_instance.list && _instance.list.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.list as any,
        ManualPriorityParams.serializeBinaryToWriter
      );
    }
  }

  private _list?: ManualPriorityParams[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ManualPriorityList to deeply clone from
   */
  constructor(_value?: RecursivePartial<ManualPriorityList>) {
    _value = _value || {};
    this.list = (_value.list || []).map(m => new ManualPriorityParams(m));
    ManualPriorityList.refineValues(this);
  }
  get list(): ManualPriorityParams[] | undefined {
    return this._list;
  }
  set list(value: ManualPriorityParams[] | undefined) {
    this._list = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ManualPriorityList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ManualPriorityList.AsObject {
    return {
      list: (this.list || []).map(m => m.toObject())
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
export module ManualPriorityList {
  /**
   * Standard JavaScript object representation for ManualPriorityList
   */
  export interface AsObject {
    list?: ManualPriorityParams.AsObject[];
  }
}

/**
 * Message implementation for transport.ZoneDeliveryManualPriorityID
 */
export class ZoneDeliveryManualPriorityID implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ZoneDeliveryManualPriorityID();
    ZoneDeliveryManualPriorityID.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ZoneDeliveryManualPriorityID) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ZoneDeliveryManualPriorityID,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ZoneDeliveryManualPriorityID.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ZoneDeliveryManualPriorityID,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ZoneDeliveryManualPriorityID to deeply clone from
   */
  constructor(_value?: RecursivePartial<ZoneDeliveryManualPriorityID>) {
    _value = _value || {};
    this.id = _value.id;
    ZoneDeliveryManualPriorityID.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ZoneDeliveryManualPriorityID.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ZoneDeliveryManualPriorityID.AsObject {
    return {
      id: this.id
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
export module ZoneDeliveryManualPriorityID {
  /**
   * Standard JavaScript object representation for ZoneDeliveryManualPriorityID
   */
  export interface AsObject {
    id?: number;
  }
}

/**
 * Message implementation for transport.AddDeliveryMethodParams
 */
export class AddDeliveryMethodParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddDeliveryMethodParams();
    AddDeliveryMethodParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddDeliveryMethodParams) {
    _instance.title = _instance.title || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddDeliveryMethodParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.title = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddDeliveryMethodParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddDeliveryMethodParams,
    _writer: BinaryWriter
  ) {
    if (_instance.title) {
      _writer.writeString(1, _instance.title);
    }
  }

  private _title?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddDeliveryMethodParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddDeliveryMethodParams>) {
    _value = _value || {};
    this.title = _value.title;
    AddDeliveryMethodParams.refineValues(this);
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
    AddDeliveryMethodParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddDeliveryMethodParams.AsObject {
    return {
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
export module AddDeliveryMethodParams {
  /**
   * Standard JavaScript object representation for AddDeliveryMethodParams
   */
  export interface AsObject {
    title?: string;
  }
}

/**
 * Message implementation for transport.GetDeliveryMethodParams
 */
export class GetDeliveryMethodParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetDeliveryMethodParams();
    GetDeliveryMethodParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetDeliveryMethodParams) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetDeliveryMethodParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetDeliveryMethodParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetDeliveryMethodParams,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetDeliveryMethodParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetDeliveryMethodParams>) {
    _value = _value || {};
    this.id = _value.id;
    GetDeliveryMethodParams.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetDeliveryMethodParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetDeliveryMethodParams.AsObject {
    return {
      id: this.id
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
export module GetDeliveryMethodParams {
  /**
   * Standard JavaScript object representation for GetDeliveryMethodParams
   */
  export interface AsObject {
    id?: number;
  }
}

/**
 * Message implementation for transport.GetDeliveryMethodResponse
 */
export class GetDeliveryMethodResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetDeliveryMethodResponse();
    GetDeliveryMethodResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetDeliveryMethodResponse) {
    _instance.id = _instance.id || 0;
    _instance.title = _instance.title || '';
    _instance.active = _instance.active || false;
    _instance.created = _instance.created || 0;
    _instance.updated = _instance.updated || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetDeliveryMethodResponse,
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
        case 3:
          _instance.active = _reader.readBool();
          break;
        case 4:
          _instance.created = _reader.readInt32();
          break;
        case 5:
          _instance.updated = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetDeliveryMethodResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetDeliveryMethodResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.active) {
      _writer.writeBool(3, _instance.active);
    }
    if (_instance.created) {
      _writer.writeInt32(4, _instance.created);
    }
    if (_instance.updated) {
      _writer.writeInt32(5, _instance.updated);
    }
  }

  private _id?: number;
  private _title?: string;
  private _active?: boolean;
  private _created?: number;
  private _updated?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetDeliveryMethodResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetDeliveryMethodResponse>) {
    _value = _value || {};
    this.id = _value.id;
    this.title = _value.title;
    this.active = _value.active;
    this.created = _value.created;
    this.updated = _value.updated;
    GetDeliveryMethodResponse.refineValues(this);
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
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get created(): number | undefined {
    return this._created;
  }
  set created(value: number | undefined) {
    this._created = value;
  }
  get updated(): number | undefined {
    return this._updated;
  }
  set updated(value: number | undefined) {
    this._updated = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetDeliveryMethodResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetDeliveryMethodResponse.AsObject {
    return {
      id: this.id,
      title: this.title,
      active: this.active,
      created: this.created,
      updated: this.updated
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
export module GetDeliveryMethodResponse {
  /**
   * Standard JavaScript object representation for GetDeliveryMethodResponse
   */
  export interface AsObject {
    id?: number;
    title?: string;
    active?: boolean;
    created?: number;
    updated?: number;
  }
}

/**
 * Message implementation for transport.AddZoneDeliveryMatrixParams
 */
export class AddZoneDeliveryMatrixParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddZoneDeliveryMatrixParams();
    AddZoneDeliveryMatrixParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddZoneDeliveryMatrixParams) {
    _instance.zoneId = _instance.zoneId || 0;
    _instance.cutoffTime = _instance.cutoffTime || '';
    _instance.gapDays = _instance.gapDays || 0;
    _instance.consolidationDays = _instance.consolidationDays || 0;
    _instance.deliveryId = _instance.deliveryId || 0;
    _instance.workDays = _instance.workDays || '';
    _instance.weekends = _instance.weekends || '';
    _instance.saturday = _instance.saturday || '';
    _instance.sunday = _instance.sunday || '';
    _instance.totalLess = _instance.totalLess || 0;
    _instance.totalMore = _instance.totalMore || 0;
    _instance.total = _instance.total || 0;
    _instance.deliveryMinDays = _instance.deliveryMinDays || 0;
    _instance.active = _instance.active || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddZoneDeliveryMatrixParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.zoneId = _reader.readInt32();
          break;
        case 2:
          _instance.cutoffTime = _reader.readString();
          break;
        case 3:
          _instance.gapDays = _reader.readInt32();
          break;
        case 4:
          _instance.consolidationDays = _reader.readInt32();
          break;
        case 5:
          _instance.deliveryId = _reader.readInt32();
          break;
        case 6:
          _instance.workDays = _reader.readString();
          break;
        case 7:
          _instance.weekends = _reader.readString();
          break;
        case 8:
          _instance.saturday = _reader.readString();
          break;
        case 9:
          _instance.sunday = _reader.readString();
          break;
        case 10:
          _instance.totalLess = _reader.readFloat();
          break;
        case 11:
          _instance.totalMore = _reader.readFloat();
          break;
        case 12:
          _instance.total = _reader.readFloat();
          break;
        case 13:
          _instance.deliveryMinDays = _reader.readInt32();
          break;
        case 14:
          _instance.active = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    AddZoneDeliveryMatrixParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddZoneDeliveryMatrixParams,
    _writer: BinaryWriter
  ) {
    if (_instance.zoneId) {
      _writer.writeInt32(1, _instance.zoneId);
    }
    if (_instance.cutoffTime) {
      _writer.writeString(2, _instance.cutoffTime);
    }
    if (_instance.gapDays) {
      _writer.writeInt32(3, _instance.gapDays);
    }
    if (_instance.consolidationDays) {
      _writer.writeInt32(4, _instance.consolidationDays);
    }
    if (_instance.deliveryId) {
      _writer.writeInt32(5, _instance.deliveryId);
    }
    if (_instance.workDays) {
      _writer.writeString(6, _instance.workDays);
    }
    if (_instance.weekends) {
      _writer.writeString(7, _instance.weekends);
    }
    if (_instance.saturday) {
      _writer.writeString(8, _instance.saturday);
    }
    if (_instance.sunday) {
      _writer.writeString(9, _instance.sunday);
    }
    if (_instance.totalLess) {
      _writer.writeFloat(10, _instance.totalLess);
    }
    if (_instance.totalMore) {
      _writer.writeFloat(11, _instance.totalMore);
    }
    if (_instance.total) {
      _writer.writeFloat(12, _instance.total);
    }
    if (_instance.deliveryMinDays) {
      _writer.writeInt32(13, _instance.deliveryMinDays);
    }
    if (_instance.active) {
      _writer.writeBool(14, _instance.active);
    }
  }

  private _zoneId?: number;
  private _cutoffTime?: string;
  private _gapDays?: number;
  private _consolidationDays?: number;
  private _deliveryId?: number;
  private _workDays?: string;
  private _weekends?: string;
  private _saturday?: string;
  private _sunday?: string;
  private _totalLess?: number;
  private _totalMore?: number;
  private _total?: number;
  private _deliveryMinDays?: number;
  private _active?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddZoneDeliveryMatrixParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddZoneDeliveryMatrixParams>) {
    _value = _value || {};
    this.zoneId = _value.zoneId;
    this.cutoffTime = _value.cutoffTime;
    this.gapDays = _value.gapDays;
    this.consolidationDays = _value.consolidationDays;
    this.deliveryId = _value.deliveryId;
    this.workDays = _value.workDays;
    this.weekends = _value.weekends;
    this.saturday = _value.saturday;
    this.sunday = _value.sunday;
    this.totalLess = _value.totalLess;
    this.totalMore = _value.totalMore;
    this.total = _value.total;
    this.deliveryMinDays = _value.deliveryMinDays;
    this.active = _value.active;
    AddZoneDeliveryMatrixParams.refineValues(this);
  }
  get zoneId(): number | undefined {
    return this._zoneId;
  }
  set zoneId(value: number | undefined) {
    this._zoneId = value;
  }
  get cutoffTime(): string | undefined {
    return this._cutoffTime;
  }
  set cutoffTime(value: string | undefined) {
    this._cutoffTime = value;
  }
  get gapDays(): number | undefined {
    return this._gapDays;
  }
  set gapDays(value: number | undefined) {
    this._gapDays = value;
  }
  get consolidationDays(): number | undefined {
    return this._consolidationDays;
  }
  set consolidationDays(value: number | undefined) {
    this._consolidationDays = value;
  }
  get deliveryId(): number | undefined {
    return this._deliveryId;
  }
  set deliveryId(value: number | undefined) {
    this._deliveryId = value;
  }
  get workDays(): string | undefined {
    return this._workDays;
  }
  set workDays(value: string | undefined) {
    this._workDays = value;
  }
  get weekends(): string | undefined {
    return this._weekends;
  }
  set weekends(value: string | undefined) {
    this._weekends = value;
  }
  get saturday(): string | undefined {
    return this._saturday;
  }
  set saturday(value: string | undefined) {
    this._saturday = value;
  }
  get sunday(): string | undefined {
    return this._sunday;
  }
  set sunday(value: string | undefined) {
    this._sunday = value;
  }
  get totalLess(): number | undefined {
    return this._totalLess;
  }
  set totalLess(value: number | undefined) {
    this._totalLess = value;
  }
  get totalMore(): number | undefined {
    return this._totalMore;
  }
  set totalMore(value: number | undefined) {
    this._totalMore = value;
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }
  get deliveryMinDays(): number | undefined {
    return this._deliveryMinDays;
  }
  set deliveryMinDays(value: number | undefined) {
    this._deliveryMinDays = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddZoneDeliveryMatrixParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddZoneDeliveryMatrixParams.AsObject {
    return {
      zoneId: this.zoneId,
      cutoffTime: this.cutoffTime,
      gapDays: this.gapDays,
      consolidationDays: this.consolidationDays,
      deliveryId: this.deliveryId,
      workDays: this.workDays,
      weekends: this.weekends,
      saturday: this.saturday,
      sunday: this.sunday,
      totalLess: this.totalLess,
      totalMore: this.totalMore,
      total: this.total,
      deliveryMinDays: this.deliveryMinDays,
      active: this.active
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
export module AddZoneDeliveryMatrixParams {
  /**
   * Standard JavaScript object representation for AddZoneDeliveryMatrixParams
   */
  export interface AsObject {
    zoneId?: number;
    cutoffTime?: string;
    gapDays?: number;
    consolidationDays?: number;
    deliveryId?: number;
    workDays?: string;
    weekends?: string;
    saturday?: string;
    sunday?: string;
    totalLess?: number;
    totalMore?: number;
    total?: number;
    deliveryMinDays?: number;
    active?: boolean;
  }
}

/**
 * Message implementation for transport.ZoneDeliveryMatrixModel
 */
export class ZoneDeliveryMatrixModel implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ZoneDeliveryMatrixModel();
    ZoneDeliveryMatrixModel.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ZoneDeliveryMatrixModel) {
    _instance.id = _instance.id || 0;
    _instance.zoneId = _instance.zoneId || 0;
    _instance.cutoffTime = _instance.cutoffTime || '';
    _instance.gapDays = _instance.gapDays || 0;
    _instance.consolidationDays = _instance.consolidationDays || 0;
    _instance.deliveryId = _instance.deliveryId || 0;
    _instance.workDays = _instance.workDays || '';
    _instance.weekends = _instance.weekends || '';
    _instance.saturday = _instance.saturday || '';
    _instance.sunday = _instance.sunday || '';
    _instance.totalLess = _instance.totalLess || 0;
    _instance.totalMore = _instance.totalMore || 0;
    _instance.total = _instance.total || 0;
    _instance.deliveryMinDays = _instance.deliveryMinDays || 0;
    _instance.active = _instance.active || false;
    _instance.created = _instance.created || 0;
    _instance.updated = _instance.updated || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ZoneDeliveryMatrixModel,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.zoneId = _reader.readInt32();
          break;
        case 3:
          _instance.cutoffTime = _reader.readString();
          break;
        case 4:
          _instance.gapDays = _reader.readInt32();
          break;
        case 5:
          _instance.consolidationDays = _reader.readInt32();
          break;
        case 6:
          _instance.deliveryId = _reader.readInt32();
          break;
        case 7:
          _instance.workDays = _reader.readString();
          break;
        case 8:
          _instance.weekends = _reader.readString();
          break;
        case 9:
          _instance.saturday = _reader.readString();
          break;
        case 10:
          _instance.sunday = _reader.readString();
          break;
        case 11:
          _instance.totalLess = _reader.readFloat();
          break;
        case 12:
          _instance.totalMore = _reader.readFloat();
          break;
        case 13:
          _instance.total = _reader.readFloat();
          break;
        case 14:
          _instance.deliveryMinDays = _reader.readInt32();
          break;
        case 15:
          _instance.active = _reader.readBool();
          break;
        case 16:
          _instance.created = _reader.readInt32();
          break;
        case 17:
          _instance.updated = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ZoneDeliveryMatrixModel.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ZoneDeliveryMatrixModel,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.zoneId) {
      _writer.writeInt32(2, _instance.zoneId);
    }
    if (_instance.cutoffTime) {
      _writer.writeString(3, _instance.cutoffTime);
    }
    if (_instance.gapDays) {
      _writer.writeInt32(4, _instance.gapDays);
    }
    if (_instance.consolidationDays) {
      _writer.writeInt32(5, _instance.consolidationDays);
    }
    if (_instance.deliveryId) {
      _writer.writeInt32(6, _instance.deliveryId);
    }
    if (_instance.workDays) {
      _writer.writeString(7, _instance.workDays);
    }
    if (_instance.weekends) {
      _writer.writeString(8, _instance.weekends);
    }
    if (_instance.saturday) {
      _writer.writeString(9, _instance.saturday);
    }
    if (_instance.sunday) {
      _writer.writeString(10, _instance.sunday);
    }
    if (_instance.totalLess) {
      _writer.writeFloat(11, _instance.totalLess);
    }
    if (_instance.totalMore) {
      _writer.writeFloat(12, _instance.totalMore);
    }
    if (_instance.total) {
      _writer.writeFloat(13, _instance.total);
    }
    if (_instance.deliveryMinDays) {
      _writer.writeInt32(14, _instance.deliveryMinDays);
    }
    if (_instance.active) {
      _writer.writeBool(15, _instance.active);
    }
    if (_instance.created) {
      _writer.writeInt32(16, _instance.created);
    }
    if (_instance.updated) {
      _writer.writeInt32(17, _instance.updated);
    }
  }

  private _id?: number;
  private _zoneId?: number;
  private _cutoffTime?: string;
  private _gapDays?: number;
  private _consolidationDays?: number;
  private _deliveryId?: number;
  private _workDays?: string;
  private _weekends?: string;
  private _saturday?: string;
  private _sunday?: string;
  private _totalLess?: number;
  private _totalMore?: number;
  private _total?: number;
  private _deliveryMinDays?: number;
  private _active?: boolean;
  private _created?: number;
  private _updated?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ZoneDeliveryMatrixModel to deeply clone from
   */
  constructor(_value?: RecursivePartial<ZoneDeliveryMatrixModel>) {
    _value = _value || {};
    this.id = _value.id;
    this.zoneId = _value.zoneId;
    this.cutoffTime = _value.cutoffTime;
    this.gapDays = _value.gapDays;
    this.consolidationDays = _value.consolidationDays;
    this.deliveryId = _value.deliveryId;
    this.workDays = _value.workDays;
    this.weekends = _value.weekends;
    this.saturday = _value.saturday;
    this.sunday = _value.sunday;
    this.totalLess = _value.totalLess;
    this.totalMore = _value.totalMore;
    this.total = _value.total;
    this.deliveryMinDays = _value.deliveryMinDays;
    this.active = _value.active;
    this.created = _value.created;
    this.updated = _value.updated;
    ZoneDeliveryMatrixModel.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get zoneId(): number | undefined {
    return this._zoneId;
  }
  set zoneId(value: number | undefined) {
    this._zoneId = value;
  }
  get cutoffTime(): string | undefined {
    return this._cutoffTime;
  }
  set cutoffTime(value: string | undefined) {
    this._cutoffTime = value;
  }
  get gapDays(): number | undefined {
    return this._gapDays;
  }
  set gapDays(value: number | undefined) {
    this._gapDays = value;
  }
  get consolidationDays(): number | undefined {
    return this._consolidationDays;
  }
  set consolidationDays(value: number | undefined) {
    this._consolidationDays = value;
  }
  get deliveryId(): number | undefined {
    return this._deliveryId;
  }
  set deliveryId(value: number | undefined) {
    this._deliveryId = value;
  }
  get workDays(): string | undefined {
    return this._workDays;
  }
  set workDays(value: string | undefined) {
    this._workDays = value;
  }
  get weekends(): string | undefined {
    return this._weekends;
  }
  set weekends(value: string | undefined) {
    this._weekends = value;
  }
  get saturday(): string | undefined {
    return this._saturday;
  }
  set saturday(value: string | undefined) {
    this._saturday = value;
  }
  get sunday(): string | undefined {
    return this._sunday;
  }
  set sunday(value: string | undefined) {
    this._sunday = value;
  }
  get totalLess(): number | undefined {
    return this._totalLess;
  }
  set totalLess(value: number | undefined) {
    this._totalLess = value;
  }
  get totalMore(): number | undefined {
    return this._totalMore;
  }
  set totalMore(value: number | undefined) {
    this._totalMore = value;
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }
  get deliveryMinDays(): number | undefined {
    return this._deliveryMinDays;
  }
  set deliveryMinDays(value: number | undefined) {
    this._deliveryMinDays = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get created(): number | undefined {
    return this._created;
  }
  set created(value: number | undefined) {
    this._created = value;
  }
  get updated(): number | undefined {
    return this._updated;
  }
  set updated(value: number | undefined) {
    this._updated = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ZoneDeliveryMatrixModel.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ZoneDeliveryMatrixModel.AsObject {
    return {
      id: this.id,
      zoneId: this.zoneId,
      cutoffTime: this.cutoffTime,
      gapDays: this.gapDays,
      consolidationDays: this.consolidationDays,
      deliveryId: this.deliveryId,
      workDays: this.workDays,
      weekends: this.weekends,
      saturday: this.saturday,
      sunday: this.sunday,
      totalLess: this.totalLess,
      totalMore: this.totalMore,
      total: this.total,
      deliveryMinDays: this.deliveryMinDays,
      active: this.active,
      created: this.created,
      updated: this.updated
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
export module ZoneDeliveryMatrixModel {
  /**
   * Standard JavaScript object representation for ZoneDeliveryMatrixModel
   */
  export interface AsObject {
    id?: number;
    zoneId?: number;
    cutoffTime?: string;
    gapDays?: number;
    consolidationDays?: number;
    deliveryId?: number;
    workDays?: string;
    weekends?: string;
    saturday?: string;
    sunday?: string;
    totalLess?: number;
    totalMore?: number;
    total?: number;
    deliveryMinDays?: number;
    active?: boolean;
    created?: number;
    updated?: number;
  }
}

/**
 * Message implementation for transport.AddZonePaymentMethodParams
 */
export class AddZonePaymentMethodParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddZonePaymentMethodParams();
    AddZonePaymentMethodParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddZonePaymentMethodParams) {
    _instance.zoneId = _instance.zoneId || 0;
    _instance.deliveryId = _instance.deliveryId || 0;
    _instance.paymentId = _instance.paymentId || 0;
    _instance.tkId = _instance.tkId || 0;
    _instance.active = _instance.active || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddZonePaymentMethodParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.zoneId = _reader.readInt32();
          break;
        case 2:
          _instance.deliveryId = _reader.readInt32();
          break;
        case 3:
          _instance.paymentId = _reader.readInt32();
          break;
        case 4:
          _instance.tkId = _reader.readInt32();
          break;
        case 5:
          _instance.active = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    AddZonePaymentMethodParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddZonePaymentMethodParams,
    _writer: BinaryWriter
  ) {
    if (_instance.zoneId) {
      _writer.writeInt32(1, _instance.zoneId);
    }
    if (_instance.deliveryId) {
      _writer.writeInt32(2, _instance.deliveryId);
    }
    if (_instance.paymentId) {
      _writer.writeInt32(3, _instance.paymentId);
    }
    if (_instance.tkId) {
      _writer.writeInt32(4, _instance.tkId);
    }
    if (_instance.active) {
      _writer.writeBool(5, _instance.active);
    }
  }

  private _zoneId?: number;
  private _deliveryId?: number;
  private _paymentId?: number;
  private _tkId?: number;
  private _active?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddZonePaymentMethodParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddZonePaymentMethodParams>) {
    _value = _value || {};
    this.zoneId = _value.zoneId;
    this.deliveryId = _value.deliveryId;
    this.paymentId = _value.paymentId;
    this.tkId = _value.tkId;
    this.active = _value.active;
    AddZonePaymentMethodParams.refineValues(this);
  }
  get zoneId(): number | undefined {
    return this._zoneId;
  }
  set zoneId(value: number | undefined) {
    this._zoneId = value;
  }
  get deliveryId(): number | undefined {
    return this._deliveryId;
  }
  set deliveryId(value: number | undefined) {
    this._deliveryId = value;
  }
  get paymentId(): number | undefined {
    return this._paymentId;
  }
  set paymentId(value: number | undefined) {
    this._paymentId = value;
  }
  get tkId(): number | undefined {
    return this._tkId;
  }
  set tkId(value: number | undefined) {
    this._tkId = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddZonePaymentMethodParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddZonePaymentMethodParams.AsObject {
    return {
      zoneId: this.zoneId,
      deliveryId: this.deliveryId,
      paymentId: this.paymentId,
      tkId: this.tkId,
      active: this.active
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
export module AddZonePaymentMethodParams {
  /**
   * Standard JavaScript object representation for AddZonePaymentMethodParams
   */
  export interface AsObject {
    zoneId?: number;
    deliveryId?: number;
    paymentId?: number;
    tkId?: number;
    active?: boolean;
  }
}

/**
 * Message implementation for transport.ZonePaymentMethodModel
 */
export class ZonePaymentMethodModel implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ZonePaymentMethodModel();
    ZonePaymentMethodModel.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ZonePaymentMethodModel) {
    _instance.id = _instance.id || 0;
    _instance.zoneId = _instance.zoneId || 0;
    _instance.deliveryId = _instance.deliveryId || 0;
    _instance.paymentId = _instance.paymentId || 0;
    _instance.tkId = _instance.tkId || 0;
    _instance.active = _instance.active || false;
    _instance.created = _instance.created || 0;
    _instance.updated = _instance.updated || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ZonePaymentMethodModel,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.zoneId = _reader.readInt32();
          break;
        case 3:
          _instance.deliveryId = _reader.readInt32();
          break;
        case 4:
          _instance.paymentId = _reader.readInt32();
          break;
        case 5:
          _instance.tkId = _reader.readInt32();
          break;
        case 6:
          _instance.active = _reader.readBool();
          break;
        case 7:
          _instance.created = _reader.readInt32();
          break;
        case 8:
          _instance.updated = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ZonePaymentMethodModel.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ZonePaymentMethodModel,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.zoneId) {
      _writer.writeInt32(2, _instance.zoneId);
    }
    if (_instance.deliveryId) {
      _writer.writeInt32(3, _instance.deliveryId);
    }
    if (_instance.paymentId) {
      _writer.writeInt32(4, _instance.paymentId);
    }
    if (_instance.tkId) {
      _writer.writeInt32(5, _instance.tkId);
    }
    if (_instance.active) {
      _writer.writeBool(6, _instance.active);
    }
    if (_instance.created) {
      _writer.writeInt32(7, _instance.created);
    }
    if (_instance.updated) {
      _writer.writeInt32(8, _instance.updated);
    }
  }

  private _id?: number;
  private _zoneId?: number;
  private _deliveryId?: number;
  private _paymentId?: number;
  private _tkId?: number;
  private _active?: boolean;
  private _created?: number;
  private _updated?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ZonePaymentMethodModel to deeply clone from
   */
  constructor(_value?: RecursivePartial<ZonePaymentMethodModel>) {
    _value = _value || {};
    this.id = _value.id;
    this.zoneId = _value.zoneId;
    this.deliveryId = _value.deliveryId;
    this.paymentId = _value.paymentId;
    this.tkId = _value.tkId;
    this.active = _value.active;
    this.created = _value.created;
    this.updated = _value.updated;
    ZonePaymentMethodModel.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get zoneId(): number | undefined {
    return this._zoneId;
  }
  set zoneId(value: number | undefined) {
    this._zoneId = value;
  }
  get deliveryId(): number | undefined {
    return this._deliveryId;
  }
  set deliveryId(value: number | undefined) {
    this._deliveryId = value;
  }
  get paymentId(): number | undefined {
    return this._paymentId;
  }
  set paymentId(value: number | undefined) {
    this._paymentId = value;
  }
  get tkId(): number | undefined {
    return this._tkId;
  }
  set tkId(value: number | undefined) {
    this._tkId = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get created(): number | undefined {
    return this._created;
  }
  set created(value: number | undefined) {
    this._created = value;
  }
  get updated(): number | undefined {
    return this._updated;
  }
  set updated(value: number | undefined) {
    this._updated = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ZonePaymentMethodModel.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ZonePaymentMethodModel.AsObject {
    return {
      id: this.id,
      zoneId: this.zoneId,
      deliveryId: this.deliveryId,
      paymentId: this.paymentId,
      tkId: this.tkId,
      active: this.active,
      created: this.created,
      updated: this.updated
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
export module ZonePaymentMethodModel {
  /**
   * Standard JavaScript object representation for ZonePaymentMethodModel
   */
  export interface AsObject {
    id?: number;
    zoneId?: number;
    deliveryId?: number;
    paymentId?: number;
    tkId?: number;
    active?: boolean;
    created?: number;
    updated?: number;
  }
}

/**
 * Message implementation for transport.WinnersParams
 */
export class WinnersParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WinnersParams();
    WinnersParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WinnersParams) {
    _instance.geoId = _instance.geoId || '';
    _instance.orderPrice = _instance.orderPrice || 0;
    _instance.geoType = _instance.geoType || 0;
    _instance.locale = _instance.locale || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WinnersParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.geoId = _reader.readString();
          break;
        case 2:
          _instance.orderPrice = _reader.readInt32();
          break;
        case 3:
          _instance.geoType = _reader.readInt32();
          break;
        case 4:
          _instance.locale = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    WinnersParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WinnersParams,
    _writer: BinaryWriter
  ) {
    if (_instance.geoId) {
      _writer.writeString(1, _instance.geoId);
    }
    if (_instance.orderPrice) {
      _writer.writeInt32(2, _instance.orderPrice);
    }
    if (_instance.geoType) {
      _writer.writeInt32(3, _instance.geoType);
    }
    if (_instance.locale) {
      _writer.writeString(4, _instance.locale);
    }
  }

  private _geoId?: string;
  private _orderPrice?: number;
  private _geoType?: number;
  private _locale?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WinnersParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<WinnersParams>) {
    _value = _value || {};
    this.geoId = _value.geoId;
    this.orderPrice = _value.orderPrice;
    this.geoType = _value.geoType;
    this.locale = _value.locale;
    WinnersParams.refineValues(this);
  }
  get geoId(): string | undefined {
    return this._geoId;
  }
  set geoId(value: string | undefined) {
    this._geoId = value;
  }
  get orderPrice(): number | undefined {
    return this._orderPrice;
  }
  set orderPrice(value: number | undefined) {
    this._orderPrice = value;
  }
  get geoType(): number | undefined {
    return this._geoType;
  }
  set geoType(value: number | undefined) {
    this._geoType = value;
  }
  get locale(): string | undefined {
    return this._locale;
  }
  set locale(value: string | undefined) {
    this._locale = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WinnersParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WinnersParams.AsObject {
    return {
      geoId: this.geoId,
      orderPrice: this.orderPrice,
      geoType: this.geoType,
      locale: this.locale
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
export module WinnersParams {
  /**
   * Standard JavaScript object representation for WinnersParams
   */
  export interface AsObject {
    geoId?: string;
    orderPrice?: number;
    geoType?: number;
    locale?: string;
  }
}

/**
 * Message implementation for transport.WinnersResponse
 */
export class WinnersResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WinnersResponse();
    WinnersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WinnersResponse) {
    _instance.result = _instance.result || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WinnersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new winner();
          _reader.readMessage(
            messageInitializer1,
            winner.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    WinnersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WinnersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.result as any,
        winner.serializeBinaryToWriter
      );
    }
  }

  private _result?: winner[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WinnersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<WinnersResponse>) {
    _value = _value || {};
    this.result = (_value.result || []).map(m => new winner(m));
    WinnersResponse.refineValues(this);
  }
  get result(): winner[] | undefined {
    return this._result;
  }
  set result(value: winner[] | undefined) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WinnersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WinnersResponse.AsObject {
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
export module WinnersResponse {
  /**
   * Standard JavaScript object representation for WinnersResponse
   */
  export interface AsObject {
    result?: winner.AsObject[];
  }
}

/**
 * Message implementation for transport.winner
 */
export class winner implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new winner();
    winner.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: winner) {
    _instance.deliveryTypeId = _instance.deliveryTypeId || 0;
    _instance.deliveryTypeTitle = _instance.deliveryTypeTitle || '';
    _instance.winnerCompany = _instance.winnerCompany || undefined;
    _instance.payments = _instance.payments || [];
    _instance.deliveryDate = _instance.deliveryDate || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: winner, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deliveryTypeId = _reader.readEnum();
          break;
        case 2:
          _instance.deliveryTypeTitle = _reader.readString();
          break;
        case 3:
          _instance.winnerCompany = new deliveryCompany();
          _reader.readMessage(
            _instance.winnerCompany,
            deliveryCompany.deserializeBinaryFromReader
          );
          break;
        case 4:
          const messageInitializer4 = new paymentType();
          _reader.readMessage(
            messageInitializer4,
            paymentType.deserializeBinaryFromReader
          );
          (_instance.payments = _instance.payments || []).push(
            messageInitializer4
          );
          break;
        case 6:
          const messageInitializer6 = new deliveryTime();
          _reader.readMessage(
            messageInitializer6,
            deliveryTime.deserializeBinaryFromReader
          );
          (_instance.deliveryDate = _instance.deliveryDate || []).push(
            messageInitializer6
          );
          break;
        default:
          _reader.skipField();
      }
    }

    winner.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: winner, _writer: BinaryWriter) {
    if (_instance.deliveryTypeId) {
      _writer.writeEnum(1, _instance.deliveryTypeId);
    }
    if (_instance.deliveryTypeTitle) {
      _writer.writeString(2, _instance.deliveryTypeTitle);
    }
    if (_instance.winnerCompany) {
      _writer.writeMessage(
        3,
        _instance.winnerCompany as any,
        deliveryCompany.serializeBinaryToWriter
      );
    }
    if (_instance.payments && _instance.payments.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.payments as any,
        paymentType.serializeBinaryToWriter
      );
    }
    if (_instance.deliveryDate && _instance.deliveryDate.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.deliveryDate as any,
        deliveryTime.serializeBinaryToWriter
      );
    }
  }

  private _deliveryTypeId?: DELIVERY_TYPE;
  private _deliveryTypeTitle?: string;
  private _winnerCompany?: deliveryCompany;
  private _payments?: paymentType[];
  private _deliveryDate?: deliveryTime[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of winner to deeply clone from
   */
  constructor(_value?: RecursivePartial<winner>) {
    _value = _value || {};
    this.deliveryTypeId = _value.deliveryTypeId;
    this.deliveryTypeTitle = _value.deliveryTypeTitle;
    this.winnerCompany = _value.winnerCompany
      ? new deliveryCompany(_value.winnerCompany)
      : undefined;
    this.payments = (_value.payments || []).map(m => new paymentType(m));
    this.deliveryDate = (_value.deliveryDate || []).map(
      m => new deliveryTime(m)
    );
    winner.refineValues(this);
  }
  get deliveryTypeId(): DELIVERY_TYPE | undefined {
    return this._deliveryTypeId;
  }
  set deliveryTypeId(value: DELIVERY_TYPE | undefined) {
    this._deliveryTypeId = value;
  }
  get deliveryTypeTitle(): string | undefined {
    return this._deliveryTypeTitle;
  }
  set deliveryTypeTitle(value: string | undefined) {
    this._deliveryTypeTitle = value;
  }
  get winnerCompany(): deliveryCompany | undefined {
    return this._winnerCompany;
  }
  set winnerCompany(value: deliveryCompany | undefined) {
    this._winnerCompany = value;
  }
  get payments(): paymentType[] | undefined {
    return this._payments;
  }
  set payments(value: paymentType[] | undefined) {
    this._payments = value;
  }
  get deliveryDate(): deliveryTime[] | undefined {
    return this._deliveryDate;
  }
  set deliveryDate(value: deliveryTime[] | undefined) {
    this._deliveryDate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    winner.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): winner.AsObject {
    return {
      deliveryTypeId: this.deliveryTypeId,
      deliveryTypeTitle: this.deliveryTypeTitle,
      winnerCompany: this.winnerCompany
        ? this.winnerCompany.toObject()
        : undefined,
      payments: (this.payments || []).map(m => m.toObject()),
      deliveryDate: (this.deliveryDate || []).map(m => m.toObject())
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
export module winner {
  /**
   * Standard JavaScript object representation for winner
   */
  export interface AsObject {
    deliveryTypeId?: DELIVERY_TYPE;
    deliveryTypeTitle?: string;
    winnerCompany?: deliveryCompany.AsObject;
    payments?: paymentType.AsObject[];
    deliveryDate?: deliveryTime.AsObject[];
  }
}

/**
 * Message implementation for transport.deliveryCompany
 */
export class deliveryCompany implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new deliveryCompany();
    deliveryCompany.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: deliveryCompany) {
    _instance.code = _instance.code || '';
    _instance.title = _instance.title || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: deliveryCompany,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.code = _reader.readString();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    deliveryCompany.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: deliveryCompany,
    _writer: BinaryWriter
  ) {
    if (_instance.code) {
      _writer.writeString(1, _instance.code);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
  }

  private _code?: string;
  private _title?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of deliveryCompany to deeply clone from
   */
  constructor(_value?: RecursivePartial<deliveryCompany>) {
    _value = _value || {};
    this.code = _value.code;
    this.title = _value.title;
    deliveryCompany.refineValues(this);
  }
  get code(): string | undefined {
    return this._code;
  }
  set code(value: string | undefined) {
    this._code = value;
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
    deliveryCompany.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): deliveryCompany.AsObject {
    return {
      code: this.code,
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
export module deliveryCompany {
  /**
   * Standard JavaScript object representation for deliveryCompany
   */
  export interface AsObject {
    code?: string;
    title?: string;
  }
}

/**
 * Message implementation for transport.paymentType
 */
export class paymentType implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new paymentType();
    paymentType.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: paymentType) {
    _instance.code = _instance.code || '';
    _instance.title = _instance.title || '';
    _instance.deliveryPrice = _instance.deliveryPrice || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: paymentType,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.code = _reader.readString();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.deliveryPrice = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    paymentType.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: paymentType,
    _writer: BinaryWriter
  ) {
    if (_instance.code) {
      _writer.writeString(1, _instance.code);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.deliveryPrice) {
      _writer.writeInt32(3, _instance.deliveryPrice);
    }
  }

  private _code?: string;
  private _title?: string;
  private _deliveryPrice?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of paymentType to deeply clone from
   */
  constructor(_value?: RecursivePartial<paymentType>) {
    _value = _value || {};
    this.code = _value.code;
    this.title = _value.title;
    this.deliveryPrice = _value.deliveryPrice;
    paymentType.refineValues(this);
  }
  get code(): string | undefined {
    return this._code;
  }
  set code(value: string | undefined) {
    this._code = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get deliveryPrice(): number | undefined {
    return this._deliveryPrice;
  }
  set deliveryPrice(value: number | undefined) {
    this._deliveryPrice = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    paymentType.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): paymentType.AsObject {
    return {
      code: this.code,
      title: this.title,
      deliveryPrice: this.deliveryPrice
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
export module paymentType {
  /**
   * Standard JavaScript object representation for paymentType
   */
  export interface AsObject {
    code?: string;
    title?: string;
    deliveryPrice?: number;
  }
}

/**
 * Message implementation for transport.deliveryTime
 */
export class deliveryTime implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new deliveryTime();
    deliveryTime.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: deliveryTime) {
    _instance.date = _instance.date || '';
    _instance.intervals = _instance.intervals || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: deliveryTime,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.date = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new Interval();
          _reader.readMessage(
            messageInitializer2,
            Interval.deserializeBinaryFromReader
          );
          (_instance.intervals = _instance.intervals || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    deliveryTime.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: deliveryTime,
    _writer: BinaryWriter
  ) {
    if (_instance.date) {
      _writer.writeString(1, _instance.date);
    }
    if (_instance.intervals && _instance.intervals.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.intervals as any,
        Interval.serializeBinaryToWriter
      );
    }
  }

  private _date?: string;
  private _intervals?: Interval[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of deliveryTime to deeply clone from
   */
  constructor(_value?: RecursivePartial<deliveryTime>) {
    _value = _value || {};
    this.date = _value.date;
    this.intervals = (_value.intervals || []).map(m => new Interval(m));
    deliveryTime.refineValues(this);
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get intervals(): Interval[] | undefined {
    return this._intervals;
  }
  set intervals(value: Interval[] | undefined) {
    this._intervals = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    deliveryTime.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): deliveryTime.AsObject {
    return {
      date: this.date,
      intervals: (this.intervals || []).map(m => m.toObject())
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
export module deliveryTime {
  /**
   * Standard JavaScript object representation for deliveryTime
   */
  export interface AsObject {
    date?: string;
    intervals?: Interval.AsObject[];
  }
}

/**
 * Message implementation for transport.Interval
 */
export class Interval implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Interval();
    Interval.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Interval) {
    _instance.timeFrom = _instance.timeFrom || '';
    _instance.timeTo = _instance.timeTo || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Interval,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.timeFrom = _reader.readString();
          break;
        case 2:
          _instance.timeTo = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Interval.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Interval, _writer: BinaryWriter) {
    if (_instance.timeFrom) {
      _writer.writeString(1, _instance.timeFrom);
    }
    if (_instance.timeTo) {
      _writer.writeString(2, _instance.timeTo);
    }
  }

  private _timeFrom?: string;
  private _timeTo?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Interval to deeply clone from
   */
  constructor(_value?: RecursivePartial<Interval>) {
    _value = _value || {};
    this.timeFrom = _value.timeFrom;
    this.timeTo = _value.timeTo;
    Interval.refineValues(this);
  }
  get timeFrom(): string | undefined {
    return this._timeFrom;
  }
  set timeFrom(value: string | undefined) {
    this._timeFrom = value;
  }
  get timeTo(): string | undefined {
    return this._timeTo;
  }
  set timeTo(value: string | undefined) {
    this._timeTo = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Interval.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Interval.AsObject {
    return {
      timeFrom: this.timeFrom,
      timeTo: this.timeTo
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
export module Interval {
  /**
   * Standard JavaScript object representation for Interval
   */
  export interface AsObject {
    timeFrom?: string;
    timeTo?: string;
  }
}
