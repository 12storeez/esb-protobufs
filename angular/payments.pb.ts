/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for payments.ParamsGetCardByUserID
 */
export class ParamsGetCardByUserID implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsGetCardByUserID();
    ParamsGetCardByUserID.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsGetCardByUserID) {
    _instance.userId = _instance.userId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsGetCardByUserID,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsGetCardByUserID.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsGetCardByUserID,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeInt32(1, _instance.userId);
    }
  }

  private _userId?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsGetCardByUserID to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsGetCardByUserID>) {
    _value = _value || {};
    this.userId = _value.userId;
    ParamsGetCardByUserID.refineValues(this);
  }
  get userId(): number | undefined {
    return this._userId;
  }
  set userId(value: number | undefined) {
    this._userId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsGetCardByUserID.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsGetCardByUserID.AsObject {
    return {
      userId: this.userId
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
export module ParamsGetCardByUserID {
  /**
   * Standard JavaScript object representation for ParamsGetCardByUserID
   */
  export interface AsObject {
    userId?: number;
  }
}

/**
 * Message implementation for payments.ResponseGetCardByUserID
 */
export class ResponseGetCardByUserID implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseGetCardByUserID();
    ResponseGetCardByUserID.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseGetCardByUserID) {
    _instance.total = _instance.total || 0;
    _instance.cards = _instance.cards || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseGetCardByUserID,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.total = _reader.readInt32();
          break;
        case 2:
          const messageInitializer2 = new UserCard();
          _reader.readMessage(
            messageInitializer2,
            UserCard.deserializeBinaryFromReader
          );
          (_instance.cards = _instance.cards || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseGetCardByUserID.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseGetCardByUserID,
    _writer: BinaryWriter
  ) {
    if (_instance.total) {
      _writer.writeInt32(1, _instance.total);
    }
    if (_instance.cards && _instance.cards.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.cards as any,
        UserCard.serializeBinaryToWriter
      );
    }
  }

  private _total?: number;
  private _cards?: UserCard[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseGetCardByUserID to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseGetCardByUserID>) {
    _value = _value || {};
    this.total = _value.total;
    this.cards = (_value.cards || []).map(m => new UserCard(m));
    ResponseGetCardByUserID.refineValues(this);
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }
  get cards(): UserCard[] | undefined {
    return this._cards;
  }
  set cards(value: UserCard[] | undefined) {
    this._cards = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseGetCardByUserID.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseGetCardByUserID.AsObject {
    return {
      total: this.total,
      cards: (this.cards || []).map(m => m.toObject())
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
export module ResponseGetCardByUserID {
  /**
   * Standard JavaScript object representation for ResponseGetCardByUserID
   */
  export interface AsObject {
    total?: number;
    cards?: UserCard.AsObject[];
  }
}

/**
 * Message implementation for payments.ResponseSuccess
 */
export class ResponseSuccess implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseSuccess();
    ResponseSuccess.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseSuccess) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseSuccess,
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

    ResponseSuccess.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseSuccess,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseSuccess to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseSuccess>) {
    _value = _value || {};
    this.ok = _value.ok;
    ResponseSuccess.refineValues(this);
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
    ResponseSuccess.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseSuccess.AsObject {
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
export module ResponseSuccess {
  /**
   * Standard JavaScript object representation for ResponseSuccess
   */
  export interface AsObject {
    ok?: boolean;
  }
}

/**
 * Message implementation for payments.ParamsDeleteCardByID
 */
export class ParamsDeleteCardByID implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsDeleteCardByID();
    ParamsDeleteCardByID.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsDeleteCardByID) {
    _instance.cardId = _instance.cardId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsDeleteCardByID,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.cardId = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsDeleteCardByID.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsDeleteCardByID,
    _writer: BinaryWriter
  ) {
    if (_instance.cardId) {
      _writer.writeInt32(1, _instance.cardId);
    }
  }

  private _cardId?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsDeleteCardByID to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsDeleteCardByID>) {
    _value = _value || {};
    this.cardId = _value.cardId;
    ParamsDeleteCardByID.refineValues(this);
  }
  get cardId(): number | undefined {
    return this._cardId;
  }
  set cardId(value: number | undefined) {
    this._cardId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsDeleteCardByID.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsDeleteCardByID.AsObject {
    return {
      cardId: this.cardId
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
export module ParamsDeleteCardByID {
  /**
   * Standard JavaScript object representation for ParamsDeleteCardByID
   */
  export interface AsObject {
    cardId?: number;
  }
}

/**
 * Message implementation for payments.UserCard
 */
export class UserCard implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserCard();
    UserCard.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserCard) {
    _instance.id = _instance.id || 0;
    _instance.userId = _instance.userId || 0;
    _instance.type = _instance.type || '';
    _instance.vendor = _instance.vendor || '';
    _instance.number = _instance.number || '';
    _instance.expDate = _instance.expDate || '';
    _instance.active = _instance.active || false;
    _instance.test = _instance.test || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserCard,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.userId = _reader.readInt32();
          break;
        case 3:
          _instance.type = _reader.readString();
          break;
        case 4:
          _instance.vendor = _reader.readString();
          break;
        case 5:
          _instance.number = _reader.readString();
          break;
        case 6:
          _instance.expDate = _reader.readString();
          break;
        case 7:
          _instance.active = _reader.readBool();
          break;
        case 8:
          _instance.test = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    UserCard.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserCard, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.userId) {
      _writer.writeInt32(2, _instance.userId);
    }
    if (_instance.type) {
      _writer.writeString(3, _instance.type);
    }
    if (_instance.vendor) {
      _writer.writeString(4, _instance.vendor);
    }
    if (_instance.number) {
      _writer.writeString(5, _instance.number);
    }
    if (_instance.expDate) {
      _writer.writeString(6, _instance.expDate);
    }
    if (_instance.active) {
      _writer.writeBool(7, _instance.active);
    }
    if (_instance.test) {
      _writer.writeBool(8, _instance.test);
    }
  }

  private _id?: number;
  private _userId?: number;
  private _type?: string;
  private _vendor?: string;
  private _number?: string;
  private _expDate?: string;
  private _active?: boolean;
  private _test?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserCard to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserCard>) {
    _value = _value || {};
    this.id = _value.id;
    this.userId = _value.userId;
    this.type = _value.type;
    this.vendor = _value.vendor;
    this.number = _value.number;
    this.expDate = _value.expDate;
    this.active = _value.active;
    this.test = _value.test;
    UserCard.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get userId(): number | undefined {
    return this._userId;
  }
  set userId(value: number | undefined) {
    this._userId = value;
  }
  get type(): string | undefined {
    return this._type;
  }
  set type(value: string | undefined) {
    this._type = value;
  }
  get vendor(): string | undefined {
    return this._vendor;
  }
  set vendor(value: string | undefined) {
    this._vendor = value;
  }
  get number(): string | undefined {
    return this._number;
  }
  set number(value: string | undefined) {
    this._number = value;
  }
  get expDate(): string | undefined {
    return this._expDate;
  }
  set expDate(value: string | undefined) {
    this._expDate = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get test(): boolean | undefined {
    return this._test;
  }
  set test(value: boolean | undefined) {
    this._test = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserCard.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserCard.AsObject {
    return {
      id: this.id,
      userId: this.userId,
      type: this.type,
      vendor: this.vendor,
      number: this.number,
      expDate: this.expDate,
      active: this.active,
      test: this.test
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
export module UserCard {
  /**
   * Standard JavaScript object representation for UserCard
   */
  export interface AsObject {
    id?: number;
    userId?: number;
    type?: string;
    vendor?: string;
    number?: string;
    expDate?: string;
    active?: boolean;
    test?: boolean;
  }
}
