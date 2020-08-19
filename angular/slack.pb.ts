/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for slack.StatusChangeTicketParams
 */
export class StatusChangeTicketParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StatusChangeTicketParams();
    StatusChangeTicketParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StatusChangeTicketParams) {
    _instance.ticketKey = _instance.ticketKey || '';
    _instance.slackChannel = _instance.slackChannel || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StatusChangeTicketParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ticketKey = _reader.readString();
          break;
        case 2:
          _instance.slackChannel = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StatusChangeTicketParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StatusChangeTicketParams,
    _writer: BinaryWriter
  ) {
    if (_instance.ticketKey) {
      _writer.writeString(1, _instance.ticketKey);
    }
    if (_instance.slackChannel) {
      _writer.writeString(2, _instance.slackChannel);
    }
  }

  private _ticketKey?: string;
  private _slackChannel?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StatusChangeTicketParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<StatusChangeTicketParams>) {
    _value = _value || {};
    this.ticketKey = _value.ticketKey;
    this.slackChannel = _value.slackChannel;
    StatusChangeTicketParams.refineValues(this);
  }
  get ticketKey(): string | undefined {
    return this._ticketKey;
  }
  set ticketKey(value: string | undefined) {
    this._ticketKey = value;
  }
  get slackChannel(): string | undefined {
    return this._slackChannel;
  }
  set slackChannel(value: string | undefined) {
    this._slackChannel = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StatusChangeTicketParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StatusChangeTicketParams.AsObject {
    return {
      ticketKey: this.ticketKey,
      slackChannel: this.slackChannel
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
export module StatusChangeTicketParams {
  /**
   * Standard JavaScript object representation for StatusChangeTicketParams
   */
  export interface AsObject {
    ticketKey?: string;
    slackChannel?: string;
  }
}

/**
 * Message implementation for slack.StatusChangeTicketResponse
 */
export class StatusChangeTicketResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StatusChangeTicketResponse();
    StatusChangeTicketResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StatusChangeTicketResponse) {
    _instance.ok = _instance.ok || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StatusChangeTicketResponse,
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

    StatusChangeTicketResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StatusChangeTicketResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
  }

  private _ok?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StatusChangeTicketResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StatusChangeTicketResponse>) {
    _value = _value || {};
    this.ok = _value.ok;
    StatusChangeTicketResponse.refineValues(this);
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
    StatusChangeTicketResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StatusChangeTicketResponse.AsObject {
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
export module StatusChangeTicketResponse {
  /**
   * Standard JavaScript object representation for StatusChangeTicketResponse
   */
  export interface AsObject {
    ok?: boolean;
  }
}

/**
 * Message implementation for slack.SendParams
 */
export class SendParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SendParams();
    SendParams.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SendParams) {
    _instance.channel = _instance.channel || '';
    _instance.email = _instance.email || '';
    _instance.message = _instance.message || '';
    _instance.from = _instance.from || '';
    _instance.threadTs = _instance.threadTs || '';
    _instance.type = _instance.type || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SendParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.channel = _reader.readString();
          break;
        case 2:
          _instance.email = _reader.readString();
          break;
        case 3:
          _instance.message = _reader.readString();
          break;
        case 4:
          _instance.from = _reader.readString();
          break;
        case 5:
          _instance.threadTs = _reader.readString();
          break;
        case 6:
          _instance.type = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SendParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: SendParams, _writer: BinaryWriter) {
    if (_instance.channel) {
      _writer.writeString(1, _instance.channel);
    }
    if (_instance.email) {
      _writer.writeString(2, _instance.email);
    }
    if (_instance.message) {
      _writer.writeString(3, _instance.message);
    }
    if (_instance.from) {
      _writer.writeString(4, _instance.from);
    }
    if (_instance.threadTs) {
      _writer.writeString(5, _instance.threadTs);
    }
    if (_instance.type) {
      _writer.writeString(6, _instance.type);
    }
  }

  private _channel?: string;
  private _email?: string;
  private _message?: string;
  private _from?: string;
  private _threadTs?: string;
  private _type?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SendParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<SendParams>) {
    _value = _value || {};
    this.channel = _value.channel;
    this.email = _value.email;
    this.message = _value.message;
    this.from = _value.from;
    this.threadTs = _value.threadTs;
    this.type = _value.type;
    SendParams.refineValues(this);
  }
  get channel(): string | undefined {
    return this._channel;
  }
  set channel(value: string | undefined) {
    this._channel = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }
  get from(): string | undefined {
    return this._from;
  }
  set from(value: string | undefined) {
    this._from = value;
  }
  get threadTs(): string | undefined {
    return this._threadTs;
  }
  set threadTs(value: string | undefined) {
    this._threadTs = value;
  }
  get type(): string | undefined {
    return this._type;
  }
  set type(value: string | undefined) {
    this._type = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SendParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SendParams.AsObject {
    return {
      channel: this.channel,
      email: this.email,
      message: this.message,
      from: this.from,
      threadTs: this.threadTs,
      type: this.type
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
export module SendParams {
  /**
   * Standard JavaScript object representation for SendParams
   */
  export interface AsObject {
    channel?: string;
    email?: string;
    message?: string;
    from?: string;
    threadTs?: string;
    type?: string;
  }
}

/**
 * Message implementation for slack.SendResponse
 */
export class SendResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SendResponse();
    SendResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SendResponse) {
    _instance.ok = _instance.ok || false;
    _instance.respChannel = _instance.respChannel || '';
    _instance.respTimestamp = _instance.respTimestamp || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SendResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ok = _reader.readBool();
          break;
        case 2:
          _instance.respChannel = _reader.readString();
          break;
        case 3:
          _instance.respTimestamp = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SendResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SendResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
    if (_instance.respChannel) {
      _writer.writeString(2, _instance.respChannel);
    }
    if (_instance.respTimestamp) {
      _writer.writeString(3, _instance.respTimestamp);
    }
  }

  private _ok?: boolean;
  private _respChannel?: string;
  private _respTimestamp?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SendResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SendResponse>) {
    _value = _value || {};
    this.ok = _value.ok;
    this.respChannel = _value.respChannel;
    this.respTimestamp = _value.respTimestamp;
    SendResponse.refineValues(this);
  }
  get ok(): boolean | undefined {
    return this._ok;
  }
  set ok(value: boolean | undefined) {
    this._ok = value;
  }
  get respChannel(): string | undefined {
    return this._respChannel;
  }
  set respChannel(value: string | undefined) {
    this._respChannel = value;
  }
  get respTimestamp(): string | undefined {
    return this._respTimestamp;
  }
  set respTimestamp(value: string | undefined) {
    this._respTimestamp = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SendResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SendResponse.AsObject {
    return {
      ok: this.ok,
      respChannel: this.respChannel,
      respTimestamp: this.respTimestamp
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
export module SendResponse {
  /**
   * Standard JavaScript object representation for SendResponse
   */
  export interface AsObject {
    ok?: boolean;
    respChannel?: string;
    respTimestamp?: string;
  }
}
