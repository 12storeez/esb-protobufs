/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for orders.ParamsOfflineByClient
 */
export class ParamsOfflineByClient implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsOfflineByClient();
    ParamsOfflineByClient.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsOfflineByClient) {
    _instance.clientId = _instance.clientId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsOfflineByClient,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.clientId = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsOfflineByClient.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsOfflineByClient,
    _writer: BinaryWriter
  ) {
    if (_instance.clientId) {
      _writer.writeInt32(1, _instance.clientId);
    }
  }

  private _clientId?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsOfflineByClient to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsOfflineByClient>) {
    _value = _value || {};
    this.clientId = _value.clientId;
    ParamsOfflineByClient.refineValues(this);
  }
  get clientId(): number | undefined {
    return this._clientId;
  }
  set clientId(value: number | undefined) {
    this._clientId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsOfflineByClient.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsOfflineByClient.AsObject {
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
export module ParamsOfflineByClient {
  /**
   * Standard JavaScript object representation for ParamsOfflineByClient
   */
  export interface AsObject {
    clientId?: number;
  }
}

/**
 * Message implementation for orders.ResponseOfflineByClient
 */
export class ResponseOfflineByClient implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseOfflineByClient();
    ResponseOfflineByClient.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseOfflineByClient) {
    _instance.orders = _instance.orders || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseOfflineByClient,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new OfflineOrder();
          _reader.readMessage(
            messageInitializer1,
            OfflineOrder.deserializeBinaryFromReader
          );
          (_instance.orders = _instance.orders || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseOfflineByClient.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseOfflineByClient,
    _writer: BinaryWriter
  ) {
    if (_instance.orders && _instance.orders.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.orders as any,
        OfflineOrder.serializeBinaryToWriter
      );
    }
  }

  private _orders?: OfflineOrder[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseOfflineByClient to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseOfflineByClient>) {
    _value = _value || {};
    this.orders = (_value.orders || []).map(m => new OfflineOrder(m));
    ResponseOfflineByClient.refineValues(this);
  }
  get orders(): OfflineOrder[] | undefined {
    return this._orders;
  }
  set orders(value: OfflineOrder[] | undefined) {
    this._orders = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseOfflineByClient.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseOfflineByClient.AsObject {
    return {
      orders: (this.orders || []).map(m => m.toObject())
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
export module ResponseOfflineByClient {
  /**
   * Standard JavaScript object representation for ResponseOfflineByClient
   */
  export interface AsObject {
    orders?: OfflineOrder.AsObject[];
  }
}

/**
 * Message implementation for orders.ParamsOnlineByClient
 */
export class ParamsOnlineByClient implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParamsOnlineByClient();
    ParamsOnlineByClient.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParamsOnlineByClient) {
    _instance.clientId = _instance.clientId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParamsOnlineByClient,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.clientId = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ParamsOnlineByClient.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParamsOnlineByClient,
    _writer: BinaryWriter
  ) {
    if (_instance.clientId) {
      _writer.writeInt32(1, _instance.clientId);
    }
  }

  private _clientId?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParamsOnlineByClient to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParamsOnlineByClient>) {
    _value = _value || {};
    this.clientId = _value.clientId;
    ParamsOnlineByClient.refineValues(this);
  }
  get clientId(): number | undefined {
    return this._clientId;
  }
  set clientId(value: number | undefined) {
    this._clientId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParamsOnlineByClient.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParamsOnlineByClient.AsObject {
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
export module ParamsOnlineByClient {
  /**
   * Standard JavaScript object representation for ParamsOnlineByClient
   */
  export interface AsObject {
    clientId?: number;
  }
}

/**
 * Message implementation for orders.ResponseOnlineByClient
 */
export class ResponseOnlineByClient implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseOnlineByClient();
    ResponseOnlineByClient.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseOnlineByClient) {
    _instance.order = _instance.order || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseOnlineByClient,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.order = _instance.order || []).push(_reader.readInt32());
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseOnlineByClient.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseOnlineByClient,
    _writer: BinaryWriter
  ) {
    if (_instance.order && _instance.order.length) {
      _writer.writeRepeatedInt32(1, _instance.order);
    }
  }

  private _order?: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseOnlineByClient to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseOnlineByClient>) {
    _value = _value || {};
    this.order = (_value.order || []).slice();
    ResponseOnlineByClient.refineValues(this);
  }
  get order(): number[] | undefined {
    return this._order;
  }
  set order(value: number[] | undefined) {
    this._order = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseOnlineByClient.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseOnlineByClient.AsObject {
    return {
      order: (this.order || []).slice()
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
export module ResponseOnlineByClient {
  /**
   * Standard JavaScript object representation for ResponseOnlineByClient
   */
  export interface AsObject {
    order?: number[];
  }
}

/**
 * Message implementation for orders.OfflineOrder
 */
export class OfflineOrder implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OfflineOrder();
    OfflineOrder.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OfflineOrder) {
    _instance.storeName = _instance.storeName || '';
    _instance.storeId = _instance.storeId || 0;
    _instance.cashboxId = _instance.cashboxId || 0;
    _instance.orderId = _instance.orderId || '';
    _instance.rowReceipt = _instance.rowReceipt || 0;
    _instance.date = _instance.date || '';
    _instance.time = _instance.time || '';
    _instance.article = _instance.article || '';
    _instance.title = _instance.title || '';
    _instance.color = _instance.color || '';
    _instance.size = _instance.size || '';
    _instance.barcode = _instance.barcode || '';
    _instance.qty = _instance.qty || 0;
    _instance.totalGross = _instance.totalGross || 0;
    _instance.discount = _instance.discount || 0;
    _instance.total = _instance.total || 0;
    _instance.clientId = _instance.clientId || 0;
    _instance.seller = _instance.seller || '';
    _instance.family = _instance.family || '';
    _instance.operation = _instance.operation || 0;
    _instance.source = _instance.source || '';
    _instance.bonusesWasted = _instance.bonusesWasted || 0;
    _instance.bonusesAccrued = _instance.bonusesAccrued || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OfflineOrder,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.storeName = _reader.readString();
          break;
        case 2:
          _instance.storeId = _reader.readInt32();
          break;
        case 3:
          _instance.cashboxId = _reader.readInt32();
          break;
        case 4:
          _instance.orderId = _reader.readString();
          break;
        case 5:
          _instance.rowReceipt = _reader.readInt32();
          break;
        case 6:
          _instance.date = _reader.readString();
          break;
        case 7:
          _instance.time = _reader.readString();
          break;
        case 8:
          _instance.article = _reader.readString();
          break;
        case 9:
          _instance.title = _reader.readString();
          break;
        case 10:
          _instance.color = _reader.readString();
          break;
        case 11:
          _instance.size = _reader.readString();
          break;
        case 12:
          _instance.barcode = _reader.readString();
          break;
        case 13:
          _instance.qty = _reader.readInt32();
          break;
        case 14:
          _instance.totalGross = _reader.readInt32();
          break;
        case 15:
          _instance.discount = _reader.readInt32();
          break;
        case 16:
          _instance.total = _reader.readInt32();
          break;
        case 17:
          _instance.clientId = _reader.readInt32();
          break;
        case 18:
          _instance.seller = _reader.readString();
          break;
        case 19:
          _instance.family = _reader.readString();
          break;
        case 20:
          _instance.operation = _reader.readInt32();
          break;
        case 21:
          _instance.source = _reader.readString();
          break;
        case 22:
          _instance.bonusesWasted = _reader.readInt32();
          break;
        case 23:
          _instance.bonusesAccrued = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    OfflineOrder.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OfflineOrder,
    _writer: BinaryWriter
  ) {
    if (_instance.storeName) {
      _writer.writeString(1, _instance.storeName);
    }
    if (_instance.storeId) {
      _writer.writeInt32(2, _instance.storeId);
    }
    if (_instance.cashboxId) {
      _writer.writeInt32(3, _instance.cashboxId);
    }
    if (_instance.orderId) {
      _writer.writeString(4, _instance.orderId);
    }
    if (_instance.rowReceipt) {
      _writer.writeInt32(5, _instance.rowReceipt);
    }
    if (_instance.date) {
      _writer.writeString(6, _instance.date);
    }
    if (_instance.time) {
      _writer.writeString(7, _instance.time);
    }
    if (_instance.article) {
      _writer.writeString(8, _instance.article);
    }
    if (_instance.title) {
      _writer.writeString(9, _instance.title);
    }
    if (_instance.color) {
      _writer.writeString(10, _instance.color);
    }
    if (_instance.size) {
      _writer.writeString(11, _instance.size);
    }
    if (_instance.barcode) {
      _writer.writeString(12, _instance.barcode);
    }
    if (_instance.qty) {
      _writer.writeInt32(13, _instance.qty);
    }
    if (_instance.totalGross) {
      _writer.writeInt32(14, _instance.totalGross);
    }
    if (_instance.discount) {
      _writer.writeInt32(15, _instance.discount);
    }
    if (_instance.total) {
      _writer.writeInt32(16, _instance.total);
    }
    if (_instance.clientId) {
      _writer.writeInt32(17, _instance.clientId);
    }
    if (_instance.seller) {
      _writer.writeString(18, _instance.seller);
    }
    if (_instance.family) {
      _writer.writeString(19, _instance.family);
    }
    if (_instance.operation) {
      _writer.writeInt32(20, _instance.operation);
    }
    if (_instance.source) {
      _writer.writeString(21, _instance.source);
    }
    if (_instance.bonusesWasted) {
      _writer.writeInt32(22, _instance.bonusesWasted);
    }
    if (_instance.bonusesAccrued) {
      _writer.writeInt32(23, _instance.bonusesAccrued);
    }
  }

  private _storeName?: string;
  private _storeId?: number;
  private _cashboxId?: number;
  private _orderId?: string;
  private _rowReceipt?: number;
  private _date?: string;
  private _time?: string;
  private _article?: string;
  private _title?: string;
  private _color?: string;
  private _size?: string;
  private _barcode?: string;
  private _qty?: number;
  private _totalGross?: number;
  private _discount?: number;
  private _total?: number;
  private _clientId?: number;
  private _seller?: string;
  private _family?: string;
  private _operation?: number;
  private _source?: string;
  private _bonusesWasted?: number;
  private _bonusesAccrued?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OfflineOrder to deeply clone from
   */
  constructor(_value?: RecursivePartial<OfflineOrder>) {
    _value = _value || {};
    this.storeName = _value.storeName;
    this.storeId = _value.storeId;
    this.cashboxId = _value.cashboxId;
    this.orderId = _value.orderId;
    this.rowReceipt = _value.rowReceipt;
    this.date = _value.date;
    this.time = _value.time;
    this.article = _value.article;
    this.title = _value.title;
    this.color = _value.color;
    this.size = _value.size;
    this.barcode = _value.barcode;
    this.qty = _value.qty;
    this.totalGross = _value.totalGross;
    this.discount = _value.discount;
    this.total = _value.total;
    this.clientId = _value.clientId;
    this.seller = _value.seller;
    this.family = _value.family;
    this.operation = _value.operation;
    this.source = _value.source;
    this.bonusesWasted = _value.bonusesWasted;
    this.bonusesAccrued = _value.bonusesAccrued;
    OfflineOrder.refineValues(this);
  }
  get storeName(): string | undefined {
    return this._storeName;
  }
  set storeName(value: string | undefined) {
    this._storeName = value;
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get cashboxId(): number | undefined {
    return this._cashboxId;
  }
  set cashboxId(value: number | undefined) {
    this._cashboxId = value;
  }
  get orderId(): string | undefined {
    return this._orderId;
  }
  set orderId(value: string | undefined) {
    this._orderId = value;
  }
  get rowReceipt(): number | undefined {
    return this._rowReceipt;
  }
  set rowReceipt(value: number | undefined) {
    this._rowReceipt = value;
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get time(): string | undefined {
    return this._time;
  }
  set time(value: string | undefined) {
    this._time = value;
  }
  get article(): string | undefined {
    return this._article;
  }
  set article(value: string | undefined) {
    this._article = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get color(): string | undefined {
    return this._color;
  }
  set color(value: string | undefined) {
    this._color = value;
  }
  get size(): string | undefined {
    return this._size;
  }
  set size(value: string | undefined) {
    this._size = value;
  }
  get barcode(): string | undefined {
    return this._barcode;
  }
  set barcode(value: string | undefined) {
    this._barcode = value;
  }
  get qty(): number | undefined {
    return this._qty;
  }
  set qty(value: number | undefined) {
    this._qty = value;
  }
  get totalGross(): number | undefined {
    return this._totalGross;
  }
  set totalGross(value: number | undefined) {
    this._totalGross = value;
  }
  get discount(): number | undefined {
    return this._discount;
  }
  set discount(value: number | undefined) {
    this._discount = value;
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }
  get clientId(): number | undefined {
    return this._clientId;
  }
  set clientId(value: number | undefined) {
    this._clientId = value;
  }
  get seller(): string | undefined {
    return this._seller;
  }
  set seller(value: string | undefined) {
    this._seller = value;
  }
  get family(): string | undefined {
    return this._family;
  }
  set family(value: string | undefined) {
    this._family = value;
  }
  get operation(): number | undefined {
    return this._operation;
  }
  set operation(value: number | undefined) {
    this._operation = value;
  }
  get source(): string | undefined {
    return this._source;
  }
  set source(value: string | undefined) {
    this._source = value;
  }
  get bonusesWasted(): number | undefined {
    return this._bonusesWasted;
  }
  set bonusesWasted(value: number | undefined) {
    this._bonusesWasted = value;
  }
  get bonusesAccrued(): number | undefined {
    return this._bonusesAccrued;
  }
  set bonusesAccrued(value: number | undefined) {
    this._bonusesAccrued = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OfflineOrder.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OfflineOrder.AsObject {
    return {
      storeName: this.storeName,
      storeId: this.storeId,
      cashboxId: this.cashboxId,
      orderId: this.orderId,
      rowReceipt: this.rowReceipt,
      date: this.date,
      time: this.time,
      article: this.article,
      title: this.title,
      color: this.color,
      size: this.size,
      barcode: this.barcode,
      qty: this.qty,
      totalGross: this.totalGross,
      discount: this.discount,
      total: this.total,
      clientId: this.clientId,
      seller: this.seller,
      family: this.family,
      operation: this.operation,
      source: this.source,
      bonusesWasted: this.bonusesWasted,
      bonusesAccrued: this.bonusesAccrued
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
export module OfflineOrder {
  /**
   * Standard JavaScript object representation for OfflineOrder
   */
  export interface AsObject {
    storeName?: string;
    storeId?: number;
    cashboxId?: number;
    orderId?: string;
    rowReceipt?: number;
    date?: string;
    time?: string;
    article?: string;
    title?: string;
    color?: string;
    size?: string;
    barcode?: string;
    qty?: number;
    totalGross?: number;
    discount?: number;
    total?: number;
    clientId?: number;
    seller?: string;
    family?: string;
    operation?: number;
    source?: string;
    bonusesWasted?: number;
    bonusesAccrued?: number;
  }
}
