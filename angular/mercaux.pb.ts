/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from './google/protobuf/empty.pb';
/**
 * Message implementation for mercaux.StocksGetParams
 */
export class StocksGetParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StocksGetParams();
    StocksGetParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StocksGetParams) {
    _instance.page = _instance.page || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StocksGetParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.page = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    StocksGetParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StocksGetParams,
    _writer: BinaryWriter
  ) {
    if (_instance.page) {
      _writer.writeInt32(1, _instance.page);
    }
  }

  private _page?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StocksGetParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<StocksGetParams>) {
    _value = _value || {};
    this.page = _value.page;
    StocksGetParams.refineValues(this);
  }
  get page(): number | undefined {
    return this._page;
  }
  set page(value: number | undefined) {
    this._page = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StocksGetParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StocksGetParams.AsObject {
    return {
      page: this.page
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
export module StocksGetParams {
  /**
   * Standard JavaScript object representation for StocksGetParams
   */
  export interface AsObject {
    page?: number;
  }
}

/**
 * Message implementation for mercaux.StocksGetResponse
 */
export class StocksGetResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StocksGetResponse();
    StocksGetResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StocksGetResponse) {
    _instance.pages = _instance.pages || 0;
    _instance.page = _instance.page || 0;
    _instance.stocks = _instance.stocks || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StocksGetResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pages = _reader.readInt32();
          break;
        case 2:
          _instance.page = _reader.readInt32();
          break;
        case 3:
          const messageInitializer3 = new Stock();
          _reader.readMessage(
            messageInitializer3,
            Stock.deserializeBinaryFromReader
          );
          (_instance.stocks = _instance.stocks || []).push(messageInitializer3);
          break;
        default:
          _reader.skipField();
      }
    }

    StocksGetResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StocksGetResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.pages) {
      _writer.writeInt32(1, _instance.pages);
    }
    if (_instance.page) {
      _writer.writeInt32(2, _instance.page);
    }
    if (_instance.stocks && _instance.stocks.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.stocks as any,
        Stock.serializeBinaryToWriter
      );
    }
  }

  private _pages?: number;
  private _page?: number;
  private _stocks?: Stock[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StocksGetResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StocksGetResponse>) {
    _value = _value || {};
    this.pages = _value.pages;
    this.page = _value.page;
    this.stocks = (_value.stocks || []).map(m => new Stock(m));
    StocksGetResponse.refineValues(this);
  }
  get pages(): number | undefined {
    return this._pages;
  }
  set pages(value: number | undefined) {
    this._pages = value;
  }
  get page(): number | undefined {
    return this._page;
  }
  set page(value: number | undefined) {
    this._page = value;
  }
  get stocks(): Stock[] | undefined {
    return this._stocks;
  }
  set stocks(value: Stock[] | undefined) {
    this._stocks = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StocksGetResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StocksGetResponse.AsObject {
    return {
      pages: this.pages,
      page: this.page,
      stocks: (this.stocks || []).map(m => m.toObject())
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
export module StocksGetResponse {
  /**
   * Standard JavaScript object representation for StocksGetResponse
   */
  export interface AsObject {
    pages?: number;
    page?: number;
    stocks?: Stock.AsObject[];
  }
}

/**
 * Message implementation for mercaux.Stock
 */
export class Stock implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Stock();
    Stock.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Stock) {
    _instance.barcode = _instance.barcode || '';
    _instance.category = _instance.category || '';
    _instance.family = _instance.family || '';
    _instance.productName = _instance.productName || '';
    _instance.productNameEn = _instance.productNameEn || '';
    _instance.picture = _instance.picture || '';
    _instance.url = _instance.url || '';
    _instance.isActive = _instance.isActive || false;
    _instance.price = _instance.price || 0;
    _instance.article = _instance.article || '';
    _instance.size = _instance.size || '';
    _instance.color = _instance.color || '';
    _instance.fabric = _instance.fabric || '';
    _instance.model = _instance.model || '';
    _instance.gender = _instance.gender || '';
    _instance.sizes = _instance.sizes || [];
    _instance.barcodeAlt = _instance.barcodeAlt || [];
    _instance.discount = _instance.discount || 0;
    _instance.totalLook = _instance.totalLook || [];
    _instance.description = _instance.description || '';
    _instance.images = _instance.images || [];
    _instance.siteCategory = _instance.siteCategory || [];
    _instance.sizeDescription = _instance.sizeDescription || '';
    _instance.recommendations = _instance.recommendations || [];
    _instance.alternatives = _instance.alternatives || [];
    _instance.video = _instance.video || '';
    _instance.instashop = _instance.instashop || [];
    _instance.country = _instance.country || '';
    _instance.quantity = _instance.quantity || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Stock, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.barcode = _reader.readString();
          break;
        case 2:
          _instance.category = _reader.readString();
          break;
        case 3:
          _instance.family = _reader.readString();
          break;
        case 4:
          _instance.productName = _reader.readString();
          break;
        case 5:
          _instance.productNameEn = _reader.readString();
          break;
        case 6:
          _instance.picture = _reader.readString();
          break;
        case 7:
          _instance.url = _reader.readString();
          break;
        case 9:
          _instance.isActive = _reader.readBool();
          break;
        case 10:
          _instance.price = _reader.readInt32();
          break;
        case 11:
          _instance.article = _reader.readString();
          break;
        case 12:
          _instance.size = _reader.readString();
          break;
        case 13:
          _instance.color = _reader.readString();
          break;
        case 14:
          _instance.fabric = _reader.readString();
          break;
        case 15:
          _instance.model = _reader.readString();
          break;
        case 16:
          _instance.gender = _reader.readString();
          break;
        case 17:
          (_instance.sizes = _instance.sizes || []).push(_reader.readString());
          break;
        case 18:
          (_instance.barcodeAlt = _instance.barcodeAlt || []).push(
            _reader.readString()
          );
          break;
        case 19:
          _instance.discount = _reader.readInt32();
          break;
        case 20:
          (_instance.totalLook = _instance.totalLook || []).push(
            _reader.readString()
          );
          break;
        case 21:
          _instance.description = _reader.readString();
          break;
        case 22:
          (_instance.images = _instance.images || []).push(
            _reader.readString()
          );
          break;
        case 23:
          (_instance.siteCategory = _instance.siteCategory || []).push(
            _reader.readString()
          );
          break;
        case 24:
          _instance.sizeDescription = _reader.readString();
          break;
        case 25:
          (_instance.recommendations = _instance.recommendations || []).push(
            _reader.readString()
          );
          break;
        case 26:
          (_instance.alternatives = _instance.alternatives || []).push(
            _reader.readString()
          );
          break;
        case 27:
          _instance.video = _reader.readString();
          break;
        case 28:
          (_instance.instashop = _instance.instashop || []).push(
            _reader.readString()
          );
          break;
        case 29:
          _instance.country = _reader.readString();
          break;
        case 30:
          const messageInitializer30 = new Quantity();
          _reader.readMessage(
            messageInitializer30,
            Quantity.deserializeBinaryFromReader
          );
          (_instance.quantity = _instance.quantity || []).push(
            messageInitializer30
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Stock.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Stock, _writer: BinaryWriter) {
    if (_instance.barcode) {
      _writer.writeString(1, _instance.barcode);
    }
    if (_instance.category) {
      _writer.writeString(2, _instance.category);
    }
    if (_instance.family) {
      _writer.writeString(3, _instance.family);
    }
    if (_instance.productName) {
      _writer.writeString(4, _instance.productName);
    }
    if (_instance.productNameEn) {
      _writer.writeString(5, _instance.productNameEn);
    }
    if (_instance.picture) {
      _writer.writeString(6, _instance.picture);
    }
    if (_instance.url) {
      _writer.writeString(7, _instance.url);
    }
    if (_instance.isActive) {
      _writer.writeBool(9, _instance.isActive);
    }
    if (_instance.price) {
      _writer.writeInt32(10, _instance.price);
    }
    if (_instance.article) {
      _writer.writeString(11, _instance.article);
    }
    if (_instance.size) {
      _writer.writeString(12, _instance.size);
    }
    if (_instance.color) {
      _writer.writeString(13, _instance.color);
    }
    if (_instance.fabric) {
      _writer.writeString(14, _instance.fabric);
    }
    if (_instance.model) {
      _writer.writeString(15, _instance.model);
    }
    if (_instance.gender) {
      _writer.writeString(16, _instance.gender);
    }
    if (_instance.sizes && _instance.sizes.length) {
      _writer.writeRepeatedString(17, _instance.sizes);
    }
    if (_instance.barcodeAlt && _instance.barcodeAlt.length) {
      _writer.writeRepeatedString(18, _instance.barcodeAlt);
    }
    if (_instance.discount) {
      _writer.writeInt32(19, _instance.discount);
    }
    if (_instance.totalLook && _instance.totalLook.length) {
      _writer.writeRepeatedString(20, _instance.totalLook);
    }
    if (_instance.description) {
      _writer.writeString(21, _instance.description);
    }
    if (_instance.images && _instance.images.length) {
      _writer.writeRepeatedString(22, _instance.images);
    }
    if (_instance.siteCategory && _instance.siteCategory.length) {
      _writer.writeRepeatedString(23, _instance.siteCategory);
    }
    if (_instance.sizeDescription) {
      _writer.writeString(24, _instance.sizeDescription);
    }
    if (_instance.recommendations && _instance.recommendations.length) {
      _writer.writeRepeatedString(25, _instance.recommendations);
    }
    if (_instance.alternatives && _instance.alternatives.length) {
      _writer.writeRepeatedString(26, _instance.alternatives);
    }
    if (_instance.video) {
      _writer.writeString(27, _instance.video);
    }
    if (_instance.instashop && _instance.instashop.length) {
      _writer.writeRepeatedString(28, _instance.instashop);
    }
    if (_instance.country) {
      _writer.writeString(29, _instance.country);
    }
    if (_instance.quantity && _instance.quantity.length) {
      _writer.writeRepeatedMessage(
        30,
        _instance.quantity as any,
        Quantity.serializeBinaryToWriter
      );
    }
  }

  private _barcode?: string;
  private _category?: string;
  private _family?: string;
  private _productName?: string;
  private _productNameEn?: string;
  private _picture?: string;
  private _url?: string;
  private _isActive?: boolean;
  private _price?: number;
  private _article?: string;
  private _size?: string;
  private _color?: string;
  private _fabric?: string;
  private _model?: string;
  private _gender?: string;
  private _sizes?: string[];
  private _barcodeAlt?: string[];
  private _discount?: number;
  private _totalLook?: string[];
  private _description?: string;
  private _images?: string[];
  private _siteCategory?: string[];
  private _sizeDescription?: string;
  private _recommendations?: string[];
  private _alternatives?: string[];
  private _video?: string;
  private _instashop?: string[];
  private _country?: string;
  private _quantity?: Quantity[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Stock to deeply clone from
   */
  constructor(_value?: RecursivePartial<Stock>) {
    _value = _value || {};
    this.barcode = _value.barcode;
    this.category = _value.category;
    this.family = _value.family;
    this.productName = _value.productName;
    this.productNameEn = _value.productNameEn;
    this.picture = _value.picture;
    this.url = _value.url;
    this.isActive = _value.isActive;
    this.price = _value.price;
    this.article = _value.article;
    this.size = _value.size;
    this.color = _value.color;
    this.fabric = _value.fabric;
    this.model = _value.model;
    this.gender = _value.gender;
    this.sizes = (_value.sizes || []).slice();
    this.barcodeAlt = (_value.barcodeAlt || []).slice();
    this.discount = _value.discount;
    this.totalLook = (_value.totalLook || []).slice();
    this.description = _value.description;
    this.images = (_value.images || []).slice();
    this.siteCategory = (_value.siteCategory || []).slice();
    this.sizeDescription = _value.sizeDescription;
    this.recommendations = (_value.recommendations || []).slice();
    this.alternatives = (_value.alternatives || []).slice();
    this.video = _value.video;
    this.instashop = (_value.instashop || []).slice();
    this.country = _value.country;
    this.quantity = (_value.quantity || []).map(m => new Quantity(m));
    Stock.refineValues(this);
  }
  get barcode(): string | undefined {
    return this._barcode;
  }
  set barcode(value: string | undefined) {
    this._barcode = value;
  }
  get category(): string | undefined {
    return this._category;
  }
  set category(value: string | undefined) {
    this._category = value;
  }
  get family(): string | undefined {
    return this._family;
  }
  set family(value: string | undefined) {
    this._family = value;
  }
  get productName(): string | undefined {
    return this._productName;
  }
  set productName(value: string | undefined) {
    this._productName = value;
  }
  get productNameEn(): string | undefined {
    return this._productNameEn;
  }
  set productNameEn(value: string | undefined) {
    this._productNameEn = value;
  }
  get picture(): string | undefined {
    return this._picture;
  }
  set picture(value: string | undefined) {
    this._picture = value;
  }
  get url(): string | undefined {
    return this._url;
  }
  set url(value: string | undefined) {
    this._url = value;
  }
  get isActive(): boolean | undefined {
    return this._isActive;
  }
  set isActive(value: boolean | undefined) {
    this._isActive = value;
  }
  get price(): number | undefined {
    return this._price;
  }
  set price(value: number | undefined) {
    this._price = value;
  }
  get article(): string | undefined {
    return this._article;
  }
  set article(value: string | undefined) {
    this._article = value;
  }
  get size(): string | undefined {
    return this._size;
  }
  set size(value: string | undefined) {
    this._size = value;
  }
  get color(): string | undefined {
    return this._color;
  }
  set color(value: string | undefined) {
    this._color = value;
  }
  get fabric(): string | undefined {
    return this._fabric;
  }
  set fabric(value: string | undefined) {
    this._fabric = value;
  }
  get model(): string | undefined {
    return this._model;
  }
  set model(value: string | undefined) {
    this._model = value;
  }
  get gender(): string | undefined {
    return this._gender;
  }
  set gender(value: string | undefined) {
    this._gender = value;
  }
  get sizes(): string[] | undefined {
    return this._sizes;
  }
  set sizes(value: string[] | undefined) {
    this._sizes = value;
  }
  get barcodeAlt(): string[] | undefined {
    return this._barcodeAlt;
  }
  set barcodeAlt(value: string[] | undefined) {
    this._barcodeAlt = value;
  }
  get discount(): number | undefined {
    return this._discount;
  }
  set discount(value: number | undefined) {
    this._discount = value;
  }
  get totalLook(): string[] | undefined {
    return this._totalLook;
  }
  set totalLook(value: string[] | undefined) {
    this._totalLook = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get images(): string[] | undefined {
    return this._images;
  }
  set images(value: string[] | undefined) {
    this._images = value;
  }
  get siteCategory(): string[] | undefined {
    return this._siteCategory;
  }
  set siteCategory(value: string[] | undefined) {
    this._siteCategory = value;
  }
  get sizeDescription(): string | undefined {
    return this._sizeDescription;
  }
  set sizeDescription(value: string | undefined) {
    this._sizeDescription = value;
  }
  get recommendations(): string[] | undefined {
    return this._recommendations;
  }
  set recommendations(value: string[] | undefined) {
    this._recommendations = value;
  }
  get alternatives(): string[] | undefined {
    return this._alternatives;
  }
  set alternatives(value: string[] | undefined) {
    this._alternatives = value;
  }
  get video(): string | undefined {
    return this._video;
  }
  set video(value: string | undefined) {
    this._video = value;
  }
  get instashop(): string[] | undefined {
    return this._instashop;
  }
  set instashop(value: string[] | undefined) {
    this._instashop = value;
  }
  get country(): string | undefined {
    return this._country;
  }
  set country(value: string | undefined) {
    this._country = value;
  }
  get quantity(): Quantity[] | undefined {
    return this._quantity;
  }
  set quantity(value: Quantity[] | undefined) {
    this._quantity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Stock.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Stock.AsObject {
    return {
      barcode: this.barcode,
      category: this.category,
      family: this.family,
      productName: this.productName,
      productNameEn: this.productNameEn,
      picture: this.picture,
      url: this.url,
      isActive: this.isActive,
      price: this.price,
      article: this.article,
      size: this.size,
      color: this.color,
      fabric: this.fabric,
      model: this.model,
      gender: this.gender,
      sizes: (this.sizes || []).slice(),
      barcodeAlt: (this.barcodeAlt || []).slice(),
      discount: this.discount,
      totalLook: (this.totalLook || []).slice(),
      description: this.description,
      images: (this.images || []).slice(),
      siteCategory: (this.siteCategory || []).slice(),
      sizeDescription: this.sizeDescription,
      recommendations: (this.recommendations || []).slice(),
      alternatives: (this.alternatives || []).slice(),
      video: this.video,
      instashop: (this.instashop || []).slice(),
      country: this.country,
      quantity: (this.quantity || []).map(m => m.toObject())
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
export module Stock {
  /**
   * Standard JavaScript object representation for Stock
   */
  export interface AsObject {
    barcode?: string;
    category?: string;
    family?: string;
    productName?: string;
    productNameEn?: string;
    picture?: string;
    url?: string;
    isActive?: boolean;
    price?: number;
    article?: string;
    size?: string;
    color?: string;
    fabric?: string;
    model?: string;
    gender?: string;
    sizes?: string[];
    barcodeAlt?: string[];
    discount?: number;
    totalLook?: string[];
    description?: string;
    images?: string[];
    siteCategory?: string[];
    sizeDescription?: string;
    recommendations?: string[];
    alternatives?: string[];
    video?: string;
    instashop?: string[];
    country?: string;
    quantity?: Quantity.AsObject[];
  }
}

/**
 * Message implementation for mercaux.Quantity
 */
export class Quantity implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Quantity();
    Quantity.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Quantity) {
    _instance.storeId = _instance.storeId || 0;
    _instance.available = _instance.available || 0;
    _instance.reserved = _instance.reserved || 0;
    _instance.discount = _instance.discount || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Quantity,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.storeId = _reader.readInt32();
          break;
        case 2:
          _instance.available = _reader.readInt32();
          break;
        case 3:
          _instance.reserved = _reader.readInt32();
          break;
        case 4:
          _instance.discount = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Quantity.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Quantity, _writer: BinaryWriter) {
    if (_instance.storeId) {
      _writer.writeInt32(1, _instance.storeId);
    }
    if (_instance.available) {
      _writer.writeInt32(2, _instance.available);
    }
    if (_instance.reserved) {
      _writer.writeInt32(3, _instance.reserved);
    }
    if (_instance.discount) {
      _writer.writeInt32(4, _instance.discount);
    }
  }

  private _storeId?: number;
  private _available?: number;
  private _reserved?: number;
  private _discount?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Quantity to deeply clone from
   */
  constructor(_value?: RecursivePartial<Quantity>) {
    _value = _value || {};
    this.storeId = _value.storeId;
    this.available = _value.available;
    this.reserved = _value.reserved;
    this.discount = _value.discount;
    Quantity.refineValues(this);
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get available(): number | undefined {
    return this._available;
  }
  set available(value: number | undefined) {
    this._available = value;
  }
  get reserved(): number | undefined {
    return this._reserved;
  }
  set reserved(value: number | undefined) {
    this._reserved = value;
  }
  get discount(): number | undefined {
    return this._discount;
  }
  set discount(value: number | undefined) {
    this._discount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Quantity.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Quantity.AsObject {
    return {
      storeId: this.storeId,
      available: this.available,
      reserved: this.reserved,
      discount: this.discount
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
export module Quantity {
  /**
   * Standard JavaScript object representation for Quantity
   */
  export interface AsObject {
    storeId?: number;
    available?: number;
    reserved?: number;
    discount?: number;
  }
}

/**
 * Message implementation for mercaux.StoresGetResponse
 */
export class StoresGetResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StoresGetResponse();
    StoresGetResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StoresGetResponse) {
    _instance.stores = _instance.stores || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StoresGetResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 3:
          const messageInitializer3 = new Store();
          _reader.readMessage(
            messageInitializer3,
            Store.deserializeBinaryFromReader
          );
          (_instance.stores = _instance.stores || []).push(messageInitializer3);
          break;
        default:
          _reader.skipField();
      }
    }

    StoresGetResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StoresGetResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.stores && _instance.stores.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.stores as any,
        Store.serializeBinaryToWriter
      );
    }
  }

  private _stores?: Store[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StoresGetResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StoresGetResponse>) {
    _value = _value || {};
    this.stores = (_value.stores || []).map(m => new Store(m));
    StoresGetResponse.refineValues(this);
  }
  get stores(): Store[] | undefined {
    return this._stores;
  }
  set stores(value: Store[] | undefined) {
    this._stores = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StoresGetResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StoresGetResponse.AsObject {
    return {
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
export module StoresGetResponse {
  /**
   * Standard JavaScript object representation for StoresGetResponse
   */
  export interface AsObject {
    stores?: Store.AsObject[];
  }
}

/**
 * Message implementation for mercaux.Store
 */
export class Store implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Store();
    Store.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Store) {
    _instance.storeId = _instance.storeId || 0;
    _instance.shortTitle = _instance.shortTitle || '';
    _instance.address = _instance.address || '';
    _instance.phone = _instance.phone || '';
    _instance.geo = _instance.geo || '';
    _instance.city = _instance.city || '';
    _instance.country = _instance.country || '';
    _instance.active = _instance.active || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Store, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.storeId = _reader.readInt32();
          break;
        case 2:
          _instance.shortTitle = _reader.readString();
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
        default:
          _reader.skipField();
      }
    }

    Store.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Store, _writer: BinaryWriter) {
    if (_instance.storeId) {
      _writer.writeInt32(1, _instance.storeId);
    }
    if (_instance.shortTitle) {
      _writer.writeString(2, _instance.shortTitle);
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
  }

  private _storeId?: number;
  private _shortTitle?: string;
  private _address?: string;
  private _phone?: string;
  private _geo?: string;
  private _city?: string;
  private _country?: string;
  private _active?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Store to deeply clone from
   */
  constructor(_value?: RecursivePartial<Store>) {
    _value = _value || {};
    this.storeId = _value.storeId;
    this.shortTitle = _value.shortTitle;
    this.address = _value.address;
    this.phone = _value.phone;
    this.geo = _value.geo;
    this.city = _value.city;
    this.country = _value.country;
    this.active = _value.active;
    Store.refineValues(this);
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get shortTitle(): string | undefined {
    return this._shortTitle;
  }
  set shortTitle(value: string | undefined) {
    this._shortTitle = value;
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Store.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Store.AsObject {
    return {
      storeId: this.storeId,
      shortTitle: this.shortTitle,
      address: this.address,
      phone: this.phone,
      geo: this.geo,
      city: this.city,
      country: this.country,
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
export module Store {
  /**
   * Standard JavaScript object representation for Store
   */
  export interface AsObject {
    storeId?: number;
    shortTitle?: string;
    address?: string;
    phone?: string;
    geo?: string;
    city?: string;
    country?: string;
    active?: boolean;
  }
}

/**
 * Message implementation for mercaux.SellersGetResponse
 */
export class SellersGetResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SellersGetResponse();
    SellersGetResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SellersGetResponse) {
    _instance.sellers = _instance.sellers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SellersGetResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Seller();
          _reader.readMessage(
            messageInitializer1,
            Seller.deserializeBinaryFromReader
          );
          (_instance.sellers = _instance.sellers || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SellersGetResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SellersGetResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.sellers && _instance.sellers.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.sellers as any,
        Seller.serializeBinaryToWriter
      );
    }
  }

  private _sellers?: Seller[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SellersGetResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SellersGetResponse>) {
    _value = _value || {};
    this.sellers = (_value.sellers || []).map(m => new Seller(m));
    SellersGetResponse.refineValues(this);
  }
  get sellers(): Seller[] | undefined {
    return this._sellers;
  }
  set sellers(value: Seller[] | undefined) {
    this._sellers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SellersGetResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SellersGetResponse.AsObject {
    return {
      sellers: (this.sellers || []).map(m => m.toObject())
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
export module SellersGetResponse {
  /**
   * Standard JavaScript object representation for SellersGetResponse
   */
  export interface AsObject {
    sellers?: Seller.AsObject[];
  }
}

/**
 * Message implementation for mercaux.Seller
 */
export class Seller implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Seller();
    Seller.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Seller) {
    _instance.storeId = _instance.storeId || 0;
    _instance.sellerId = _instance.sellerId || '';
    _instance.sellerName = _instance.sellerName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Seller, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.storeId = _reader.readInt32();
          break;
        case 2:
          _instance.sellerId = _reader.readString();
          break;
        case 3:
          _instance.sellerName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Seller.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Seller, _writer: BinaryWriter) {
    if (_instance.storeId) {
      _writer.writeInt32(1, _instance.storeId);
    }
    if (_instance.sellerId) {
      _writer.writeString(2, _instance.sellerId);
    }
    if (_instance.sellerName) {
      _writer.writeString(3, _instance.sellerName);
    }
  }

  private _storeId?: number;
  private _sellerId?: string;
  private _sellerName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Seller to deeply clone from
   */
  constructor(_value?: RecursivePartial<Seller>) {
    _value = _value || {};
    this.storeId = _value.storeId;
    this.sellerId = _value.sellerId;
    this.sellerName = _value.sellerName;
    Seller.refineValues(this);
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get sellerId(): string | undefined {
    return this._sellerId;
  }
  set sellerId(value: string | undefined) {
    this._sellerId = value;
  }
  get sellerName(): string | undefined {
    return this._sellerName;
  }
  set sellerName(value: string | undefined) {
    this._sellerName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Seller.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Seller.AsObject {
    return {
      storeId: this.storeId,
      sellerId: this.sellerId,
      sellerName: this.sellerName
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
export module Seller {
  /**
   * Standard JavaScript object representation for Seller
   */
  export interface AsObject {
    storeId?: number;
    sellerId?: string;
    sellerName?: string;
  }
}

/**
 * Message implementation for mercaux.OrdersNewParams
 */
export class OrdersNewParams implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OrdersNewParams();
    OrdersNewParams.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OrdersNewParams) {
    _instance.order = _instance.order || undefined;
    _instance.source = _instance.source || '';
    _instance.sellerId = _instance.sellerId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OrdersNewParams,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.order = new Order();
          _reader.readMessage(
            _instance.order,
            Order.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.source = _reader.readString();
          break;
        case 3:
          _instance.sellerId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    OrdersNewParams.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OrdersNewParams,
    _writer: BinaryWriter
  ) {
    if (_instance.order) {
      _writer.writeMessage(
        1,
        _instance.order as any,
        Order.serializeBinaryToWriter
      );
    }
    if (_instance.source) {
      _writer.writeString(2, _instance.source);
    }
    if (_instance.sellerId) {
      _writer.writeString(3, _instance.sellerId);
    }
  }

  private _order?: Order;
  private _source?: string;
  private _sellerId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrdersNewParams to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrdersNewParams>) {
    _value = _value || {};
    this.order = _value.order ? new Order(_value.order) : undefined;
    this.source = _value.source;
    this.sellerId = _value.sellerId;
    OrdersNewParams.refineValues(this);
  }
  get order(): Order | undefined {
    return this._order;
  }
  set order(value: Order | undefined) {
    this._order = value;
  }
  get source(): string | undefined {
    return this._source;
  }
  set source(value: string | undefined) {
    this._source = value;
  }
  get sellerId(): string | undefined {
    return this._sellerId;
  }
  set sellerId(value: string | undefined) {
    this._sellerId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OrdersNewParams.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OrdersNewParams.AsObject {
    return {
      order: this.order ? this.order.toObject() : undefined,
      source: this.source,
      sellerId: this.sellerId
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
export module OrdersNewParams {
  /**
   * Standard JavaScript object representation for OrdersNewParams
   */
  export interface AsObject {
    order?: Order.AsObject;
    source?: string;
    sellerId?: string;
  }
}

/**
 * Message implementation for mercaux.Order
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
    _instance.lastName = _instance.lastName || '';
    _instance.firstName = _instance.firstName || '';
    _instance.phone = _instance.phone || '';
    _instance.email = _instance.email || '';
    _instance.storeId = _instance.storeId || 0;
    _instance.items = _instance.items || [];
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
          _instance.lastName = _reader.readString();
          break;
        case 2:
          _instance.firstName = _reader.readString();
          break;
        case 3:
          _instance.phone = _reader.readString();
          break;
        case 4:
          _instance.email = _reader.readString();
          break;
        case 5:
          _instance.storeId = _reader.readInt32();
          break;
        case 6:
          const messageInitializer6 = new OrderItem();
          _reader.readMessage(
            messageInitializer6,
            OrderItem.deserializeBinaryFromReader
          );
          (_instance.items = _instance.items || []).push(messageInitializer6);
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
    if (_instance.lastName) {
      _writer.writeString(1, _instance.lastName);
    }
    if (_instance.firstName) {
      _writer.writeString(2, _instance.firstName);
    }
    if (_instance.phone) {
      _writer.writeString(3, _instance.phone);
    }
    if (_instance.email) {
      _writer.writeString(4, _instance.email);
    }
    if (_instance.storeId) {
      _writer.writeInt32(5, _instance.storeId);
    }
    if (_instance.items && _instance.items.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.items as any,
        OrderItem.serializeBinaryToWriter
      );
    }
  }

  private _lastName?: string;
  private _firstName?: string;
  private _phone?: string;
  private _email?: string;
  private _storeId?: number;
  private _items?: OrderItem[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Order to deeply clone from
   */
  constructor(_value?: RecursivePartial<Order>) {
    _value = _value || {};
    this.lastName = _value.lastName;
    this.firstName = _value.firstName;
    this.phone = _value.phone;
    this.email = _value.email;
    this.storeId = _value.storeId;
    this.items = (_value.items || []).map(m => new OrderItem(m));
    Order.refineValues(this);
  }
  get lastName(): string | undefined {
    return this._lastName;
  }
  set lastName(value: string | undefined) {
    this._lastName = value;
  }
  get firstName(): string | undefined {
    return this._firstName;
  }
  set firstName(value: string | undefined) {
    this._firstName = value;
  }
  get phone(): string | undefined {
    return this._phone;
  }
  set phone(value: string | undefined) {
    this._phone = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }
  get storeId(): number | undefined {
    return this._storeId;
  }
  set storeId(value: number | undefined) {
    this._storeId = value;
  }
  get items(): OrderItem[] | undefined {
    return this._items;
  }
  set items(value: OrderItem[] | undefined) {
    this._items = value;
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
      lastName: this.lastName,
      firstName: this.firstName,
      phone: this.phone,
      email: this.email,
      storeId: this.storeId,
      items: (this.items || []).map(m => m.toObject())
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
    lastName?: string;
    firstName?: string;
    phone?: string;
    email?: string;
    storeId?: number;
    items?: OrderItem.AsObject[];
  }
}

/**
 * Message implementation for mercaux.OrderItem
 */
export class OrderItem implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OrderItem();
    OrderItem.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OrderItem) {
    _instance.id = _instance.id || '';
    _instance.quantity = _instance.quantity || 0;
    _instance.price = _instance.price || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OrderItem,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.quantity = _reader.readInt32();
          break;
        case 3:
          _instance.price = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    OrderItem.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: OrderItem, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.quantity) {
      _writer.writeInt32(2, _instance.quantity);
    }
    if (_instance.price) {
      _writer.writeFloat(3, _instance.price);
    }
  }

  private _id?: string;
  private _quantity?: number;
  private _price?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrderItem to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrderItem>) {
    _value = _value || {};
    this.id = _value.id;
    this.quantity = _value.quantity;
    this.price = _value.price;
    OrderItem.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get quantity(): number | undefined {
    return this._quantity;
  }
  set quantity(value: number | undefined) {
    this._quantity = value;
  }
  get price(): number | undefined {
    return this._price;
  }
  set price(value: number | undefined) {
    this._price = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OrderItem.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OrderItem.AsObject {
    return {
      id: this.id,
      quantity: this.quantity,
      price: this.price
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
export module OrderItem {
  /**
   * Standard JavaScript object representation for OrderItem
   */
  export interface AsObject {
    id?: string;
    quantity?: number;
    price?: number;
  }
}

/**
 * Message implementation for mercaux.OrdersNewResponse
 */
export class OrdersNewResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OrdersNewResponse();
    OrdersNewResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OrdersNewResponse) {
    _instance.ok = _instance.ok || false;
    _instance.orderId = _instance.orderId || '';
    _instance.errors = _instance.errors || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OrdersNewResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ok = _reader.readBool();
          break;
        case 2:
          _instance.orderId = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new OrderError();
          _reader.readMessage(
            messageInitializer3,
            OrderError.deserializeBinaryFromReader
          );
          (_instance.errors = _instance.errors || []).push(messageInitializer3);
          break;
        default:
          _reader.skipField();
      }
    }

    OrdersNewResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OrdersNewResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ok) {
      _writer.writeBool(1, _instance.ok);
    }
    if (_instance.orderId) {
      _writer.writeString(2, _instance.orderId);
    }
    if (_instance.errors && _instance.errors.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.errors as any,
        OrderError.serializeBinaryToWriter
      );
    }
  }

  private _ok?: boolean;
  private _orderId?: string;
  private _errors?: OrderError[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrdersNewResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrdersNewResponse>) {
    _value = _value || {};
    this.ok = _value.ok;
    this.orderId = _value.orderId;
    this.errors = (_value.errors || []).map(m => new OrderError(m));
    OrdersNewResponse.refineValues(this);
  }
  get ok(): boolean | undefined {
    return this._ok;
  }
  set ok(value: boolean | undefined) {
    this._ok = value;
  }
  get orderId(): string | undefined {
    return this._orderId;
  }
  set orderId(value: string | undefined) {
    this._orderId = value;
  }
  get errors(): OrderError[] | undefined {
    return this._errors;
  }
  set errors(value: OrderError[] | undefined) {
    this._errors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OrdersNewResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OrdersNewResponse.AsObject {
    return {
      ok: this.ok,
      orderId: this.orderId,
      errors: (this.errors || []).map(m => m.toObject())
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
export module OrdersNewResponse {
  /**
   * Standard JavaScript object representation for OrdersNewResponse
   */
  export interface AsObject {
    ok?: boolean;
    orderId?: string;
    errors?: OrderError.AsObject[];
  }
}

/**
 * Message implementation for mercaux.OrderError
 */
export class OrderError implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OrderError();
    OrderError.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OrderError) {
    _instance.code = _instance.code || 0;
    _instance.message = _instance.message || '';
    _instance.price = _instance.price || '';
    _instance.availableQuantity = _instance.availableQuantity || 0;
    _instance.barcode = _instance.barcode || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OrderError,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.code = _reader.readInt32();
          break;
        case 2:
          _instance.message = _reader.readString();
          break;
        case 3:
          _instance.price = _reader.readString();
          break;
        case 4:
          _instance.availableQuantity = _reader.readInt32();
          break;
        case 5:
          _instance.barcode = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    OrderError.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: OrderError, _writer: BinaryWriter) {
    if (_instance.code) {
      _writer.writeInt32(1, _instance.code);
    }
    if (_instance.message) {
      _writer.writeString(2, _instance.message);
    }
    if (_instance.price) {
      _writer.writeString(3, _instance.price);
    }
    if (_instance.availableQuantity) {
      _writer.writeInt32(4, _instance.availableQuantity);
    }
    if (_instance.barcode) {
      _writer.writeInt64String(5, _instance.barcode);
    }
  }

  private _code?: number;
  private _message?: string;
  private _price?: string;
  private _availableQuantity?: number;
  private _barcode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrderError to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrderError>) {
    _value = _value || {};
    this.code = _value.code;
    this.message = _value.message;
    this.price = _value.price;
    this.availableQuantity = _value.availableQuantity;
    this.barcode = _value.barcode;
    OrderError.refineValues(this);
  }
  get code(): number | undefined {
    return this._code;
  }
  set code(value: number | undefined) {
    this._code = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }
  get price(): string | undefined {
    return this._price;
  }
  set price(value: string | undefined) {
    this._price = value;
  }
  get availableQuantity(): number | undefined {
    return this._availableQuantity;
  }
  set availableQuantity(value: number | undefined) {
    this._availableQuantity = value;
  }
  get barcode(): string | undefined {
    return this._barcode;
  }
  set barcode(value: string | undefined) {
    this._barcode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OrderError.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OrderError.AsObject {
    return {
      code: this.code,
      message: this.message,
      price: this.price,
      availableQuantity: this.availableQuantity,
      barcode: this.barcode
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
export module OrderError {
  /**
   * Standard JavaScript object representation for OrderError
   */
  export interface AsObject {
    code?: number;
    message?: string;
    price?: string;
    availableQuantity?: number;
    barcode?: string;
  }
}
