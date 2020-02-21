/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.feedbacks = (function() {

    /**
     * Namespace feedbacks.
     * @exports feedbacks
     * @namespace
     */
    var feedbacks = {};

    feedbacks.Mobile = (function() {

        /**
         * Constructs a new Mobile service.
         * @memberof feedbacks
         * @classdesc Represents a Mobile
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Mobile(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Mobile.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Mobile;

        /**
         * Creates new Mobile service using the specified rpc implementation.
         * @function create
         * @memberof feedbacks.Mobile
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Mobile} RPC service. Useful where requests and/or responses are streamed.
         */
        Mobile.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link feedbacks.Mobile#app}.
         * @memberof feedbacks.Mobile
         * @typedef AppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {feedbacks.ResponseOk} [response] ResponseOk
         */

        /**
         * Calls App.
         * @function app
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IRequestApp} request RequestApp message or plain object
         * @param {feedbacks.Mobile.AppCallback} callback Node-style callback called with the error, if any, and ResponseOk
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.app = function app(request, callback) {
            return this.rpcCall(app, $root.feedbacks.RequestApp, $root.feedbacks.ResponseOk, request, callback);
        }, "name", { value: "App" });

        /**
         * Calls App.
         * @function app
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IRequestApp} request RequestApp message or plain object
         * @returns {Promise<feedbacks.ResponseOk>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link feedbacks.Mobile#store}.
         * @memberof feedbacks.Mobile
         * @typedef StoreCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {feedbacks.ResponseOk} [response] ResponseOk
         */

        /**
         * Calls Store.
         * @function store
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IRequestStore} request RequestStore message or plain object
         * @param {feedbacks.Mobile.StoreCallback} callback Node-style callback called with the error, if any, and ResponseOk
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.store = function store(request, callback) {
            return this.rpcCall(store, $root.feedbacks.RequestStore, $root.feedbacks.ResponseOk, request, callback);
        }, "name", { value: "Store" });

        /**
         * Calls Store.
         * @function store
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IRequestStore} request RequestStore message or plain object
         * @returns {Promise<feedbacks.ResponseOk>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link feedbacks.Mobile#order}.
         * @memberof feedbacks.Mobile
         * @typedef OrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {feedbacks.ResponseOk} [response] ResponseOk
         */

        /**
         * Calls Order.
         * @function order
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IRequestOrder} request RequestOrder message or plain object
         * @param {feedbacks.Mobile.OrderCallback} callback Node-style callback called with the error, if any, and ResponseOk
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.order = function order(request, callback) {
            return this.rpcCall(order, $root.feedbacks.RequestOrder, $root.feedbacks.ResponseOk, request, callback);
        }, "name", { value: "Order" });

        /**
         * Calls Order.
         * @function order
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IRequestOrder} request RequestOrder message or plain object
         * @returns {Promise<feedbacks.ResponseOk>} Promise
         * @variation 2
         */

        return Mobile;
    })();

    feedbacks.ResponseOk = (function() {

        /**
         * Properties of a ResponseOk.
         * @memberof feedbacks
         * @interface IResponseOk
         * @property {boolean|null} [ok] ResponseOk ok
         */

        /**
         * Constructs a new ResponseOk.
         * @memberof feedbacks
         * @classdesc Represents a ResponseOk.
         * @implements IResponseOk
         * @constructor
         * @param {feedbacks.IResponseOk=} [properties] Properties to set
         */
        function ResponseOk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseOk ok.
         * @member {boolean} ok
         * @memberof feedbacks.ResponseOk
         * @instance
         */
        ResponseOk.prototype.ok = false;

        /**
         * Creates a new ResponseOk instance using the specified properties.
         * @function create
         * @memberof feedbacks.ResponseOk
         * @static
         * @param {feedbacks.IResponseOk=} [properties] Properties to set
         * @returns {feedbacks.ResponseOk} ResponseOk instance
         */
        ResponseOk.create = function create(properties) {
            return new ResponseOk(properties);
        };

        /**
         * Encodes the specified ResponseOk message. Does not implicitly {@link feedbacks.ResponseOk.verify|verify} messages.
         * @function encode
         * @memberof feedbacks.ResponseOk
         * @static
         * @param {feedbacks.IResponseOk} message ResponseOk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && message.hasOwnProperty("ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified ResponseOk message, length delimited. Does not implicitly {@link feedbacks.ResponseOk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof feedbacks.ResponseOk
         * @static
         * @param {feedbacks.IResponseOk} message ResponseOk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseOk message from the specified reader or buffer.
         * @function decode
         * @memberof feedbacks.ResponseOk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feedbacks.ResponseOk} ResponseOk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feedbacks.ResponseOk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseOk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof feedbacks.ResponseOk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {feedbacks.ResponseOk} ResponseOk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseOk message.
         * @function verify
         * @memberof feedbacks.ResponseOk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseOk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a ResponseOk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof feedbacks.ResponseOk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {feedbacks.ResponseOk} ResponseOk
         */
        ResponseOk.fromObject = function fromObject(object) {
            if (object instanceof $root.feedbacks.ResponseOk)
                return object;
            var message = new $root.feedbacks.ResponseOk();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a ResponseOk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof feedbacks.ResponseOk
         * @static
         * @param {feedbacks.ResponseOk} message ResponseOk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseOk.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ok = false;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this ResponseOk to JSON.
         * @function toJSON
         * @memberof feedbacks.ResponseOk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseOk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseOk;
    })();

    feedbacks.RequestApp = (function() {

        /**
         * Properties of a RequestApp.
         * @memberof feedbacks
         * @interface IRequestApp
         * @property {number|Long|null} [clientId] RequestApp clientId
         * @property {string|null} [appVersion] RequestApp appVersion
         * @property {string|null} [rate] RequestApp rate
         * @property {Array.<number>|null} [reason] RequestApp reason
         * @property {string|null} [comment] RequestApp comment
         * @property {string|null} [date] RequestApp date
         */

        /**
         * Constructs a new RequestApp.
         * @memberof feedbacks
         * @classdesc Represents a RequestApp.
         * @implements IRequestApp
         * @constructor
         * @param {feedbacks.IRequestApp=} [properties] Properties to set
         */
        function RequestApp(properties) {
            this.reason = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestApp clientId.
         * @member {number|Long} clientId
         * @memberof feedbacks.RequestApp
         * @instance
         */
        RequestApp.prototype.clientId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RequestApp appVersion.
         * @member {string} appVersion
         * @memberof feedbacks.RequestApp
         * @instance
         */
        RequestApp.prototype.appVersion = "";

        /**
         * RequestApp rate.
         * @member {string} rate
         * @memberof feedbacks.RequestApp
         * @instance
         */
        RequestApp.prototype.rate = "";

        /**
         * RequestApp reason.
         * @member {Array.<number>} reason
         * @memberof feedbacks.RequestApp
         * @instance
         */
        RequestApp.prototype.reason = $util.emptyArray;

        /**
         * RequestApp comment.
         * @member {string} comment
         * @memberof feedbacks.RequestApp
         * @instance
         */
        RequestApp.prototype.comment = "";

        /**
         * RequestApp date.
         * @member {string} date
         * @memberof feedbacks.RequestApp
         * @instance
         */
        RequestApp.prototype.date = "";

        /**
         * Creates a new RequestApp instance using the specified properties.
         * @function create
         * @memberof feedbacks.RequestApp
         * @static
         * @param {feedbacks.IRequestApp=} [properties] Properties to set
         * @returns {feedbacks.RequestApp} RequestApp instance
         */
        RequestApp.create = function create(properties) {
            return new RequestApp(properties);
        };

        /**
         * Encodes the specified RequestApp message. Does not implicitly {@link feedbacks.RequestApp.verify|verify} messages.
         * @function encode
         * @memberof feedbacks.RequestApp
         * @static
         * @param {feedbacks.IRequestApp} message RequestApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestApp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.clientId);
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appVersion);
            if (message.rate != null && message.hasOwnProperty("rate"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rate);
            if (message.reason != null && message.reason.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.reason.length; ++i)
                    writer.int32(message.reason[i]);
                writer.ldelim();
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.comment);
            if (message.date != null && message.hasOwnProperty("date"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.date);
            return writer;
        };

        /**
         * Encodes the specified RequestApp message, length delimited. Does not implicitly {@link feedbacks.RequestApp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof feedbacks.RequestApp
         * @static
         * @param {feedbacks.IRequestApp} message RequestApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestApp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestApp message from the specified reader or buffer.
         * @function decode
         * @memberof feedbacks.RequestApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feedbacks.RequestApp} RequestApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestApp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feedbacks.RequestApp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.int64();
                    break;
                case 2:
                    message.appVersion = reader.string();
                    break;
                case 3:
                    message.rate = reader.string();
                    break;
                case 4:
                    if (!(message.reason && message.reason.length))
                        message.reason = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.reason.push(reader.int32());
                    } else
                        message.reason.push(reader.int32());
                    break;
                case 5:
                    message.comment = reader.string();
                    break;
                case 6:
                    message.date = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RequestApp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof feedbacks.RequestApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {feedbacks.RequestApp} RequestApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestApp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestApp message.
         * @function verify
         * @memberof feedbacks.RequestApp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestApp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId) && !(message.clientId && $util.isInteger(message.clientId.low) && $util.isInteger(message.clientId.high)))
                    return "clientId: integer|Long expected";
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                if (!$util.isString(message.appVersion))
                    return "appVersion: string expected";
            if (message.rate != null && message.hasOwnProperty("rate"))
                if (!$util.isString(message.rate))
                    return "rate: string expected";
            if (message.reason != null && message.hasOwnProperty("reason")) {
                if (!Array.isArray(message.reason))
                    return "reason: array expected";
                for (var i = 0; i < message.reason.length; ++i)
                    if (!$util.isInteger(message.reason[i]))
                        return "reason: integer[] expected";
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isString(message.date))
                    return "date: string expected";
            return null;
        };

        /**
         * Creates a RequestApp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof feedbacks.RequestApp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {feedbacks.RequestApp} RequestApp
         */
        RequestApp.fromObject = function fromObject(object) {
            if (object instanceof $root.feedbacks.RequestApp)
                return object;
            var message = new $root.feedbacks.RequestApp();
            if (object.clientId != null)
                if ($util.Long)
                    (message.clientId = $util.Long.fromValue(object.clientId)).unsigned = false;
                else if (typeof object.clientId === "string")
                    message.clientId = parseInt(object.clientId, 10);
                else if (typeof object.clientId === "number")
                    message.clientId = object.clientId;
                else if (typeof object.clientId === "object")
                    message.clientId = new $util.LongBits(object.clientId.low >>> 0, object.clientId.high >>> 0).toNumber();
            if (object.appVersion != null)
                message.appVersion = String(object.appVersion);
            if (object.rate != null)
                message.rate = String(object.rate);
            if (object.reason) {
                if (!Array.isArray(object.reason))
                    throw TypeError(".feedbacks.RequestApp.reason: array expected");
                message.reason = [];
                for (var i = 0; i < object.reason.length; ++i)
                    message.reason[i] = object.reason[i] | 0;
            }
            if (object.comment != null)
                message.comment = String(object.comment);
            if (object.date != null)
                message.date = String(object.date);
            return message;
        };

        /**
         * Creates a plain object from a RequestApp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof feedbacks.RequestApp
         * @static
         * @param {feedbacks.RequestApp} message RequestApp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestApp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reason = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientId = options.longs === String ? "0" : 0;
                object.appVersion = "";
                object.rate = "";
                object.comment = "";
                object.date = "";
            }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (typeof message.clientId === "number")
                    object.clientId = options.longs === String ? String(message.clientId) : message.clientId;
                else
                    object.clientId = options.longs === String ? $util.Long.prototype.toString.call(message.clientId) : options.longs === Number ? new $util.LongBits(message.clientId.low >>> 0, message.clientId.high >>> 0).toNumber() : message.clientId;
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                object.appVersion = message.appVersion;
            if (message.rate != null && message.hasOwnProperty("rate"))
                object.rate = message.rate;
            if (message.reason && message.reason.length) {
                object.reason = [];
                for (var j = 0; j < message.reason.length; ++j)
                    object.reason[j] = message.reason[j];
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            return object;
        };

        /**
         * Converts this RequestApp to JSON.
         * @function toJSON
         * @memberof feedbacks.RequestApp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestApp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestApp;
    })();

    feedbacks.RequestStore = (function() {

        /**
         * Properties of a RequestStore.
         * @memberof feedbacks
         * @interface IRequestStore
         * @property {number|Long|null} [clientId] RequestStore clientId
         * @property {string|null} [rate] RequestStore rate
         * @property {Array.<number>|null} [reason] RequestStore reason
         * @property {string|null} [comment] RequestStore comment
         * @property {string|null} [city] RequestStore city
         * @property {string|null} [date] RequestStore date
         */

        /**
         * Constructs a new RequestStore.
         * @memberof feedbacks
         * @classdesc Represents a RequestStore.
         * @implements IRequestStore
         * @constructor
         * @param {feedbacks.IRequestStore=} [properties] Properties to set
         */
        function RequestStore(properties) {
            this.reason = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestStore clientId.
         * @member {number|Long} clientId
         * @memberof feedbacks.RequestStore
         * @instance
         */
        RequestStore.prototype.clientId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RequestStore rate.
         * @member {string} rate
         * @memberof feedbacks.RequestStore
         * @instance
         */
        RequestStore.prototype.rate = "";

        /**
         * RequestStore reason.
         * @member {Array.<number>} reason
         * @memberof feedbacks.RequestStore
         * @instance
         */
        RequestStore.prototype.reason = $util.emptyArray;

        /**
         * RequestStore comment.
         * @member {string} comment
         * @memberof feedbacks.RequestStore
         * @instance
         */
        RequestStore.prototype.comment = "";

        /**
         * RequestStore city.
         * @member {string} city
         * @memberof feedbacks.RequestStore
         * @instance
         */
        RequestStore.prototype.city = "";

        /**
         * RequestStore date.
         * @member {string} date
         * @memberof feedbacks.RequestStore
         * @instance
         */
        RequestStore.prototype.date = "";

        /**
         * Creates a new RequestStore instance using the specified properties.
         * @function create
         * @memberof feedbacks.RequestStore
         * @static
         * @param {feedbacks.IRequestStore=} [properties] Properties to set
         * @returns {feedbacks.RequestStore} RequestStore instance
         */
        RequestStore.create = function create(properties) {
            return new RequestStore(properties);
        };

        /**
         * Encodes the specified RequestStore message. Does not implicitly {@link feedbacks.RequestStore.verify|verify} messages.
         * @function encode
         * @memberof feedbacks.RequestStore
         * @static
         * @param {feedbacks.IRequestStore} message RequestStore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestStore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.clientId);
            if (message.rate != null && message.hasOwnProperty("rate"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.rate);
            if (message.reason != null && message.reason.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.reason.length; ++i)
                    writer.int32(message.reason[i]);
                writer.ldelim();
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.comment);
            if (message.city != null && message.hasOwnProperty("city"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.city);
            if (message.date != null && message.hasOwnProperty("date"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.date);
            return writer;
        };

        /**
         * Encodes the specified RequestStore message, length delimited. Does not implicitly {@link feedbacks.RequestStore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof feedbacks.RequestStore
         * @static
         * @param {feedbacks.IRequestStore} message RequestStore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestStore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestStore message from the specified reader or buffer.
         * @function decode
         * @memberof feedbacks.RequestStore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feedbacks.RequestStore} RequestStore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestStore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feedbacks.RequestStore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.int64();
                    break;
                case 2:
                    message.rate = reader.string();
                    break;
                case 3:
                    if (!(message.reason && message.reason.length))
                        message.reason = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.reason.push(reader.int32());
                    } else
                        message.reason.push(reader.int32());
                    break;
                case 4:
                    message.comment = reader.string();
                    break;
                case 5:
                    message.city = reader.string();
                    break;
                case 6:
                    message.date = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RequestStore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof feedbacks.RequestStore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {feedbacks.RequestStore} RequestStore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestStore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestStore message.
         * @function verify
         * @memberof feedbacks.RequestStore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestStore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId) && !(message.clientId && $util.isInteger(message.clientId.low) && $util.isInteger(message.clientId.high)))
                    return "clientId: integer|Long expected";
            if (message.rate != null && message.hasOwnProperty("rate"))
                if (!$util.isString(message.rate))
                    return "rate: string expected";
            if (message.reason != null && message.hasOwnProperty("reason")) {
                if (!Array.isArray(message.reason))
                    return "reason: array expected";
                for (var i = 0; i < message.reason.length; ++i)
                    if (!$util.isInteger(message.reason[i]))
                        return "reason: integer[] expected";
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isString(message.date))
                    return "date: string expected";
            return null;
        };

        /**
         * Creates a RequestStore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof feedbacks.RequestStore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {feedbacks.RequestStore} RequestStore
         */
        RequestStore.fromObject = function fromObject(object) {
            if (object instanceof $root.feedbacks.RequestStore)
                return object;
            var message = new $root.feedbacks.RequestStore();
            if (object.clientId != null)
                if ($util.Long)
                    (message.clientId = $util.Long.fromValue(object.clientId)).unsigned = false;
                else if (typeof object.clientId === "string")
                    message.clientId = parseInt(object.clientId, 10);
                else if (typeof object.clientId === "number")
                    message.clientId = object.clientId;
                else if (typeof object.clientId === "object")
                    message.clientId = new $util.LongBits(object.clientId.low >>> 0, object.clientId.high >>> 0).toNumber();
            if (object.rate != null)
                message.rate = String(object.rate);
            if (object.reason) {
                if (!Array.isArray(object.reason))
                    throw TypeError(".feedbacks.RequestStore.reason: array expected");
                message.reason = [];
                for (var i = 0; i < object.reason.length; ++i)
                    message.reason[i] = object.reason[i] | 0;
            }
            if (object.comment != null)
                message.comment = String(object.comment);
            if (object.city != null)
                message.city = String(object.city);
            if (object.date != null)
                message.date = String(object.date);
            return message;
        };

        /**
         * Creates a plain object from a RequestStore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof feedbacks.RequestStore
         * @static
         * @param {feedbacks.RequestStore} message RequestStore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestStore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reason = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientId = options.longs === String ? "0" : 0;
                object.rate = "";
                object.comment = "";
                object.city = "";
                object.date = "";
            }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (typeof message.clientId === "number")
                    object.clientId = options.longs === String ? String(message.clientId) : message.clientId;
                else
                    object.clientId = options.longs === String ? $util.Long.prototype.toString.call(message.clientId) : options.longs === Number ? new $util.LongBits(message.clientId.low >>> 0, message.clientId.high >>> 0).toNumber() : message.clientId;
            if (message.rate != null && message.hasOwnProperty("rate"))
                object.rate = message.rate;
            if (message.reason && message.reason.length) {
                object.reason = [];
                for (var j = 0; j < message.reason.length; ++j)
                    object.reason[j] = message.reason[j];
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            return object;
        };

        /**
         * Converts this RequestStore to JSON.
         * @function toJSON
         * @memberof feedbacks.RequestStore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestStore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestStore;
    })();

    feedbacks.RequestOrder = (function() {

        /**
         * Properties of a RequestOrder.
         * @memberof feedbacks
         * @interface IRequestOrder
         * @property {string|null} [orderId] RequestOrder orderId
         * @property {number|Long|null} [clientId] RequestOrder clientId
         * @property {string|null} [paymentType] RequestOrder paymentType
         * @property {string|null} [deliveryType] RequestOrder deliveryType
         * @property {string|null} [rate] RequestOrder rate
         * @property {Array.<number>|null} [reason] RequestOrder reason
         * @property {string|null} [comment] RequestOrder comment
         * @property {string|null} [dateOrder] RequestOrder dateOrder
         * @property {string|null} [dateRate] RequestOrder dateRate
         * @property {string|null} [storeName] RequestOrder storeName
         * @property {string|null} [transportCompany] RequestOrder transportCompany
         * @property {string|null} [country] RequestOrder country
         * @property {string|null} [city] RequestOrder city
         */

        /**
         * Constructs a new RequestOrder.
         * @memberof feedbacks
         * @classdesc Represents a RequestOrder.
         * @implements IRequestOrder
         * @constructor
         * @param {feedbacks.IRequestOrder=} [properties] Properties to set
         */
        function RequestOrder(properties) {
            this.reason = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestOrder orderId.
         * @member {string} orderId
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.orderId = "";

        /**
         * RequestOrder clientId.
         * @member {number|Long} clientId
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.clientId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RequestOrder paymentType.
         * @member {string} paymentType
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.paymentType = "";

        /**
         * RequestOrder deliveryType.
         * @member {string} deliveryType
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.deliveryType = "";

        /**
         * RequestOrder rate.
         * @member {string} rate
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.rate = "";

        /**
         * RequestOrder reason.
         * @member {Array.<number>} reason
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.reason = $util.emptyArray;

        /**
         * RequestOrder comment.
         * @member {string} comment
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.comment = "";

        /**
         * RequestOrder dateOrder.
         * @member {string} dateOrder
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.dateOrder = "";

        /**
         * RequestOrder dateRate.
         * @member {string} dateRate
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.dateRate = "";

        /**
         * RequestOrder storeName.
         * @member {string} storeName
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.storeName = "";

        /**
         * RequestOrder transportCompany.
         * @member {string} transportCompany
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.transportCompany = "";

        /**
         * RequestOrder country.
         * @member {string} country
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.country = "";

        /**
         * RequestOrder city.
         * @member {string} city
         * @memberof feedbacks.RequestOrder
         * @instance
         */
        RequestOrder.prototype.city = "";

        /**
         * Creates a new RequestOrder instance using the specified properties.
         * @function create
         * @memberof feedbacks.RequestOrder
         * @static
         * @param {feedbacks.IRequestOrder=} [properties] Properties to set
         * @returns {feedbacks.RequestOrder} RequestOrder instance
         */
        RequestOrder.create = function create(properties) {
            return new RequestOrder(properties);
        };

        /**
         * Encodes the specified RequestOrder message. Does not implicitly {@link feedbacks.RequestOrder.verify|verify} messages.
         * @function encode
         * @memberof feedbacks.RequestOrder
         * @static
         * @param {feedbacks.IRequestOrder} message RequestOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.orderId);
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.clientId);
            if (message.paymentType != null && message.hasOwnProperty("paymentType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.paymentType);
            if (message.deliveryType != null && message.hasOwnProperty("deliveryType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deliveryType);
            if (message.rate != null && message.hasOwnProperty("rate"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.rate);
            if (message.reason != null && message.reason.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.reason.length; ++i)
                    writer.int32(message.reason[i]);
                writer.ldelim();
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.comment);
            if (message.dateOrder != null && message.hasOwnProperty("dateOrder"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.dateOrder);
            if (message.dateRate != null && message.hasOwnProperty("dateRate"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.dateRate);
            if (message.storeName != null && message.hasOwnProperty("storeName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.storeName);
            if (message.transportCompany != null && message.hasOwnProperty("transportCompany"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.transportCompany);
            if (message.country != null && message.hasOwnProperty("country"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.country);
            if (message.city != null && message.hasOwnProperty("city"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.city);
            return writer;
        };

        /**
         * Encodes the specified RequestOrder message, length delimited. Does not implicitly {@link feedbacks.RequestOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof feedbacks.RequestOrder
         * @static
         * @param {feedbacks.IRequestOrder} message RequestOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestOrder message from the specified reader or buffer.
         * @function decode
         * @memberof feedbacks.RequestOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feedbacks.RequestOrder} RequestOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feedbacks.RequestOrder();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.clientId = reader.int64();
                    break;
                case 3:
                    message.paymentType = reader.string();
                    break;
                case 4:
                    message.deliveryType = reader.string();
                    break;
                case 5:
                    message.rate = reader.string();
                    break;
                case 6:
                    if (!(message.reason && message.reason.length))
                        message.reason = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.reason.push(reader.int32());
                    } else
                        message.reason.push(reader.int32());
                    break;
                case 7:
                    message.comment = reader.string();
                    break;
                case 8:
                    message.dateOrder = reader.string();
                    break;
                case 9:
                    message.dateRate = reader.string();
                    break;
                case 10:
                    message.storeName = reader.string();
                    break;
                case 11:
                    message.transportCompany = reader.string();
                    break;
                case 12:
                    message.country = reader.string();
                    break;
                case 13:
                    message.city = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RequestOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof feedbacks.RequestOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {feedbacks.RequestOrder} RequestOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestOrder message.
         * @function verify
         * @memberof feedbacks.RequestOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                if (!$util.isString(message.orderId))
                    return "orderId: string expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId) && !(message.clientId && $util.isInteger(message.clientId.low) && $util.isInteger(message.clientId.high)))
                    return "clientId: integer|Long expected";
            if (message.paymentType != null && message.hasOwnProperty("paymentType"))
                if (!$util.isString(message.paymentType))
                    return "paymentType: string expected";
            if (message.deliveryType != null && message.hasOwnProperty("deliveryType"))
                if (!$util.isString(message.deliveryType))
                    return "deliveryType: string expected";
            if (message.rate != null && message.hasOwnProperty("rate"))
                if (!$util.isString(message.rate))
                    return "rate: string expected";
            if (message.reason != null && message.hasOwnProperty("reason")) {
                if (!Array.isArray(message.reason))
                    return "reason: array expected";
                for (var i = 0; i < message.reason.length; ++i)
                    if (!$util.isInteger(message.reason[i]))
                        return "reason: integer[] expected";
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            if (message.dateOrder != null && message.hasOwnProperty("dateOrder"))
                if (!$util.isString(message.dateOrder))
                    return "dateOrder: string expected";
            if (message.dateRate != null && message.hasOwnProperty("dateRate"))
                if (!$util.isString(message.dateRate))
                    return "dateRate: string expected";
            if (message.storeName != null && message.hasOwnProperty("storeName"))
                if (!$util.isString(message.storeName))
                    return "storeName: string expected";
            if (message.transportCompany != null && message.hasOwnProperty("transportCompany"))
                if (!$util.isString(message.transportCompany))
                    return "transportCompany: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            return null;
        };

        /**
         * Creates a RequestOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof feedbacks.RequestOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {feedbacks.RequestOrder} RequestOrder
         */
        RequestOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.feedbacks.RequestOrder)
                return object;
            var message = new $root.feedbacks.RequestOrder();
            if (object.orderId != null)
                message.orderId = String(object.orderId);
            if (object.clientId != null)
                if ($util.Long)
                    (message.clientId = $util.Long.fromValue(object.clientId)).unsigned = false;
                else if (typeof object.clientId === "string")
                    message.clientId = parseInt(object.clientId, 10);
                else if (typeof object.clientId === "number")
                    message.clientId = object.clientId;
                else if (typeof object.clientId === "object")
                    message.clientId = new $util.LongBits(object.clientId.low >>> 0, object.clientId.high >>> 0).toNumber();
            if (object.paymentType != null)
                message.paymentType = String(object.paymentType);
            if (object.deliveryType != null)
                message.deliveryType = String(object.deliveryType);
            if (object.rate != null)
                message.rate = String(object.rate);
            if (object.reason) {
                if (!Array.isArray(object.reason))
                    throw TypeError(".feedbacks.RequestOrder.reason: array expected");
                message.reason = [];
                for (var i = 0; i < object.reason.length; ++i)
                    message.reason[i] = object.reason[i] | 0;
            }
            if (object.comment != null)
                message.comment = String(object.comment);
            if (object.dateOrder != null)
                message.dateOrder = String(object.dateOrder);
            if (object.dateRate != null)
                message.dateRate = String(object.dateRate);
            if (object.storeName != null)
                message.storeName = String(object.storeName);
            if (object.transportCompany != null)
                message.transportCompany = String(object.transportCompany);
            if (object.country != null)
                message.country = String(object.country);
            if (object.city != null)
                message.city = String(object.city);
            return message;
        };

        /**
         * Creates a plain object from a RequestOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof feedbacks.RequestOrder
         * @static
         * @param {feedbacks.RequestOrder} message RequestOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reason = [];
            if (options.defaults) {
                object.orderId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientId = options.longs === String ? "0" : 0;
                object.paymentType = "";
                object.deliveryType = "";
                object.rate = "";
                object.comment = "";
                object.dateOrder = "";
                object.dateRate = "";
                object.storeName = "";
                object.transportCompany = "";
                object.country = "";
                object.city = "";
            }
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                object.orderId = message.orderId;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (typeof message.clientId === "number")
                    object.clientId = options.longs === String ? String(message.clientId) : message.clientId;
                else
                    object.clientId = options.longs === String ? $util.Long.prototype.toString.call(message.clientId) : options.longs === Number ? new $util.LongBits(message.clientId.low >>> 0, message.clientId.high >>> 0).toNumber() : message.clientId;
            if (message.paymentType != null && message.hasOwnProperty("paymentType"))
                object.paymentType = message.paymentType;
            if (message.deliveryType != null && message.hasOwnProperty("deliveryType"))
                object.deliveryType = message.deliveryType;
            if (message.rate != null && message.hasOwnProperty("rate"))
                object.rate = message.rate;
            if (message.reason && message.reason.length) {
                object.reason = [];
                for (var j = 0; j < message.reason.length; ++j)
                    object.reason[j] = message.reason[j];
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            if (message.dateOrder != null && message.hasOwnProperty("dateOrder"))
                object.dateOrder = message.dateOrder;
            if (message.dateRate != null && message.hasOwnProperty("dateRate"))
                object.dateRate = message.dateRate;
            if (message.storeName != null && message.hasOwnProperty("storeName"))
                object.storeName = message.storeName;
            if (message.transportCompany != null && message.hasOwnProperty("transportCompany"))
                object.transportCompany = message.transportCompany;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            return object;
        };

        /**
         * Converts this RequestOrder to JSON.
         * @function toJSON
         * @memberof feedbacks.RequestOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestOrder;
    })();

    return feedbacks;
})();

$root.logistics = (function() {

    /**
     * Namespace logistics.
     * @exports logistics
     * @namespace
     */
    var logistics = {};

    logistics.Logistics = (function() {

        /**
         * Constructs a new Logistics service.
         * @memberof logistics
         * @classdesc Represents a Logistics
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Logistics(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Logistics.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Logistics;

        /**
         * Creates new Logistics service using the specified rpc implementation.
         * @function create
         * @memberof logistics.Logistics
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Logistics} RPC service. Useful where requests and/or responses are streamed.
         */
        Logistics.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link logistics.Logistics#ping}.
         * @memberof logistics.Logistics
         * @typedef PingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logistics.PingResponse} [response] PingResponse
         */

        /**
         * Calls Ping.
         * @function ping
         * @memberof logistics.Logistics
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {logistics.Logistics.PingCallback} callback Node-style callback called with the error, if any, and PingResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Logistics.prototype.ping = function ping(request, callback) {
            return this.rpcCall(ping, $root.google.protobuf.Empty, $root.logistics.PingResponse, request, callback);
        }, "name", { value: "Ping" });

        /**
         * Calls Ping.
         * @function ping
         * @memberof logistics.Logistics
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<logistics.PingResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link logistics.Logistics#uPSDuration}.
         * @memberof logistics.Logistics
         * @typedef UPSDurationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logistics.GetResponseUPS} [response] GetResponseUPS
         */

        /**
         * Calls UPSDuration.
         * @function uPSDuration
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsUPS} request GetParamsUPS message or plain object
         * @param {logistics.Logistics.UPSDurationCallback} callback Node-style callback called with the error, if any, and GetResponseUPS
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Logistics.prototype.uPSDuration = function uPSDuration(request, callback) {
            return this.rpcCall(uPSDuration, $root.logistics.GetParamsUPS, $root.logistics.GetResponseUPS, request, callback);
        }, "name", { value: "UPSDuration" });

        /**
         * Calls UPSDuration.
         * @function uPSDuration
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsUPS} request GetParamsUPS message or plain object
         * @returns {Promise<logistics.GetResponseUPS>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link logistics.Logistics#boxberryDuration}.
         * @memberof logistics.Logistics
         * @typedef BoxberryDurationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logistics.GetResponseBoxberry} [response] GetResponseBoxberry
         */

        /**
         * Calls BoxberryDuration.
         * @function boxberryDuration
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsBoxberry} request GetParamsBoxberry message or plain object
         * @param {logistics.Logistics.BoxberryDurationCallback} callback Node-style callback called with the error, if any, and GetResponseBoxberry
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Logistics.prototype.boxberryDuration = function boxberryDuration(request, callback) {
            return this.rpcCall(boxberryDuration, $root.logistics.GetParamsBoxberry, $root.logistics.GetResponseBoxberry, request, callback);
        }, "name", { value: "BoxberryDuration" });

        /**
         * Calls BoxberryDuration.
         * @function boxberryDuration
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsBoxberry} request GetParamsBoxberry message or plain object
         * @returns {Promise<logistics.GetResponseBoxberry>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link logistics.Logistics#boxberryDurationByCity}.
         * @memberof logistics.Logistics
         * @typedef BoxberryDurationByCityCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logistics.GetResponseBoxberryDurationByCity} [response] GetResponseBoxberryDurationByCity
         */

        /**
         * Calls BoxberryDurationByCity.
         * @function boxberryDurationByCity
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsBoxberryDurationByCity} request GetParamsBoxberryDurationByCity message or plain object
         * @param {logistics.Logistics.BoxberryDurationByCityCallback} callback Node-style callback called with the error, if any, and GetResponseBoxberryDurationByCity
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Logistics.prototype.boxberryDurationByCity = function boxberryDurationByCity(request, callback) {
            return this.rpcCall(boxberryDurationByCity, $root.logistics.GetParamsBoxberryDurationByCity, $root.logistics.GetResponseBoxberryDurationByCity, request, callback);
        }, "name", { value: "BoxberryDurationByCity" });

        /**
         * Calls BoxberryDurationByCity.
         * @function boxberryDurationByCity
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsBoxberryDurationByCity} request GetParamsBoxberryDurationByCity message or plain object
         * @returns {Promise<logistics.GetResponseBoxberryDurationByCity>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link logistics.Logistics#boxberryPointInformation}.
         * @memberof logistics.Logistics
         * @typedef BoxberryPointInformationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logistics.GetResponsePointInformation} [response] GetResponsePointInformation
         */

        /**
         * Calls BoxberryPointInformation.
         * @function boxberryPointInformation
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsPointInformation} request GetParamsPointInformation message or plain object
         * @param {logistics.Logistics.BoxberryPointInformationCallback} callback Node-style callback called with the error, if any, and GetResponsePointInformation
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Logistics.prototype.boxberryPointInformation = function boxberryPointInformation(request, callback) {
            return this.rpcCall(boxberryPointInformation, $root.logistics.GetParamsPointInformation, $root.logistics.GetResponsePointInformation, request, callback);
        }, "name", { value: "BoxberryPointInformation" });

        /**
         * Calls BoxberryPointInformation.
         * @function boxberryPointInformation
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsPointInformation} request GetParamsPointInformation message or plain object
         * @returns {Promise<logistics.GetResponsePointInformation>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link logistics.Logistics#boxberryOrderStatus}.
         * @memberof logistics.Logistics
         * @typedef BoxberryOrderStatusCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logistics.GetResponseOrderStatus} [response] GetResponseOrderStatus
         */

        /**
         * Calls BoxberryOrderStatus.
         * @function boxberryOrderStatus
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsOrderStatus} request GetParamsOrderStatus message or plain object
         * @param {logistics.Logistics.BoxberryOrderStatusCallback} callback Node-style callback called with the error, if any, and GetResponseOrderStatus
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Logistics.prototype.boxberryOrderStatus = function boxberryOrderStatus(request, callback) {
            return this.rpcCall(boxberryOrderStatus, $root.logistics.GetParamsOrderStatus, $root.logistics.GetResponseOrderStatus, request, callback);
        }, "name", { value: "BoxberryOrderStatus" });

        /**
         * Calls BoxberryOrderStatus.
         * @function boxberryOrderStatus
         * @memberof logistics.Logistics
         * @instance
         * @param {logistics.IGetParamsOrderStatus} request GetParamsOrderStatus message or plain object
         * @returns {Promise<logistics.GetResponseOrderStatus>} Promise
         * @variation 2
         */

        return Logistics;
    })();

    logistics.PingResponse = (function() {

        /**
         * Properties of a PingResponse.
         * @memberof logistics
         * @interface IPingResponse
         * @property {string|null} [response] PingResponse response
         */

        /**
         * Constructs a new PingResponse.
         * @memberof logistics
         * @classdesc Represents a PingResponse.
         * @implements IPingResponse
         * @constructor
         * @param {logistics.IPingResponse=} [properties] Properties to set
         */
        function PingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingResponse response.
         * @member {string} response
         * @memberof logistics.PingResponse
         * @instance
         */
        PingResponse.prototype.response = "";

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @function create
         * @memberof logistics.PingResponse
         * @static
         * @param {logistics.IPingResponse=} [properties] Properties to set
         * @returns {logistics.PingResponse} PingResponse instance
         */
        PingResponse.create = function create(properties) {
            return new PingResponse(properties);
        };

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link logistics.PingResponse.verify|verify} messages.
         * @function encode
         * @memberof logistics.PingResponse
         * @static
         * @param {logistics.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && message.hasOwnProperty("response"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.response);
            return writer;
        };

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link logistics.PingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.PingResponse
         * @static
         * @param {logistics.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.PingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingResponse message.
         * @function verify
         * @memberof logistics.PingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!$util.isString(message.response))
                    return "response: string expected";
            return null;
        };

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.PingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.PingResponse} PingResponse
         */
        PingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.PingResponse)
                return object;
            var message = new $root.logistics.PingResponse();
            if (object.response != null)
                message.response = String(object.response);
            return message;
        };

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.PingResponse
         * @static
         * @param {logistics.PingResponse} message PingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.response = "";
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = message.response;
            return object;
        };

        /**
         * Converts this PingResponse to JSON.
         * @function toJSON
         * @memberof logistics.PingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingResponse;
    })();

    logistics.GetParamsUPS = (function() {

        /**
         * Properties of a GetParamsUPS.
         * @memberof logistics
         * @interface IGetParamsUPS
         * @property {string|null} [originCountryCode] GetParamsUPS originCountryCode
         * @property {string|null} [originPostalCode] GetParamsUPS originPostalCode
         * @property {string|null} [destinationCountryCode] GetParamsUPS destinationCountryCode
         * @property {string|null} [destinationPostalCode] GetParamsUPS destinationPostalCode
         * @property {string|null} [shipDate] GetParamsUPS shipDate
         * @property {string|null} [shipTime] GetParamsUPS shipTime
         */

        /**
         * Constructs a new GetParamsUPS.
         * @memberof logistics
         * @classdesc Represents a GetParamsUPS.
         * @implements IGetParamsUPS
         * @constructor
         * @param {logistics.IGetParamsUPS=} [properties] Properties to set
         */
        function GetParamsUPS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetParamsUPS originCountryCode.
         * @member {string} originCountryCode
         * @memberof logistics.GetParamsUPS
         * @instance
         */
        GetParamsUPS.prototype.originCountryCode = "";

        /**
         * GetParamsUPS originPostalCode.
         * @member {string} originPostalCode
         * @memberof logistics.GetParamsUPS
         * @instance
         */
        GetParamsUPS.prototype.originPostalCode = "";

        /**
         * GetParamsUPS destinationCountryCode.
         * @member {string} destinationCountryCode
         * @memberof logistics.GetParamsUPS
         * @instance
         */
        GetParamsUPS.prototype.destinationCountryCode = "";

        /**
         * GetParamsUPS destinationPostalCode.
         * @member {string} destinationPostalCode
         * @memberof logistics.GetParamsUPS
         * @instance
         */
        GetParamsUPS.prototype.destinationPostalCode = "";

        /**
         * GetParamsUPS shipDate.
         * @member {string} shipDate
         * @memberof logistics.GetParamsUPS
         * @instance
         */
        GetParamsUPS.prototype.shipDate = "";

        /**
         * GetParamsUPS shipTime.
         * @member {string} shipTime
         * @memberof logistics.GetParamsUPS
         * @instance
         */
        GetParamsUPS.prototype.shipTime = "";

        /**
         * Creates a new GetParamsUPS instance using the specified properties.
         * @function create
         * @memberof logistics.GetParamsUPS
         * @static
         * @param {logistics.IGetParamsUPS=} [properties] Properties to set
         * @returns {logistics.GetParamsUPS} GetParamsUPS instance
         */
        GetParamsUPS.create = function create(properties) {
            return new GetParamsUPS(properties);
        };

        /**
         * Encodes the specified GetParamsUPS message. Does not implicitly {@link logistics.GetParamsUPS.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetParamsUPS
         * @static
         * @param {logistics.IGetParamsUPS} message GetParamsUPS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsUPS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.originCountryCode != null && message.hasOwnProperty("originCountryCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.originCountryCode);
            if (message.originPostalCode != null && message.hasOwnProperty("originPostalCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.originPostalCode);
            if (message.destinationCountryCode != null && message.hasOwnProperty("destinationCountryCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.destinationCountryCode);
            if (message.destinationPostalCode != null && message.hasOwnProperty("destinationPostalCode"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.destinationPostalCode);
            if (message.shipDate != null && message.hasOwnProperty("shipDate"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.shipDate);
            if (message.shipTime != null && message.hasOwnProperty("shipTime"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.shipTime);
            return writer;
        };

        /**
         * Encodes the specified GetParamsUPS message, length delimited. Does not implicitly {@link logistics.GetParamsUPS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetParamsUPS
         * @static
         * @param {logistics.IGetParamsUPS} message GetParamsUPS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsUPS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetParamsUPS message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetParamsUPS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetParamsUPS} GetParamsUPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsUPS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetParamsUPS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.originCountryCode = reader.string();
                    break;
                case 2:
                    message.originPostalCode = reader.string();
                    break;
                case 3:
                    message.destinationCountryCode = reader.string();
                    break;
                case 4:
                    message.destinationPostalCode = reader.string();
                    break;
                case 5:
                    message.shipDate = reader.string();
                    break;
                case 6:
                    message.shipTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetParamsUPS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetParamsUPS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetParamsUPS} GetParamsUPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsUPS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetParamsUPS message.
         * @function verify
         * @memberof logistics.GetParamsUPS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetParamsUPS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.originCountryCode != null && message.hasOwnProperty("originCountryCode"))
                if (!$util.isString(message.originCountryCode))
                    return "originCountryCode: string expected";
            if (message.originPostalCode != null && message.hasOwnProperty("originPostalCode"))
                if (!$util.isString(message.originPostalCode))
                    return "originPostalCode: string expected";
            if (message.destinationCountryCode != null && message.hasOwnProperty("destinationCountryCode"))
                if (!$util.isString(message.destinationCountryCode))
                    return "destinationCountryCode: string expected";
            if (message.destinationPostalCode != null && message.hasOwnProperty("destinationPostalCode"))
                if (!$util.isString(message.destinationPostalCode))
                    return "destinationPostalCode: string expected";
            if (message.shipDate != null && message.hasOwnProperty("shipDate"))
                if (!$util.isString(message.shipDate))
                    return "shipDate: string expected";
            if (message.shipTime != null && message.hasOwnProperty("shipTime"))
                if (!$util.isString(message.shipTime))
                    return "shipTime: string expected";
            return null;
        };

        /**
         * Creates a GetParamsUPS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetParamsUPS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetParamsUPS} GetParamsUPS
         */
        GetParamsUPS.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetParamsUPS)
                return object;
            var message = new $root.logistics.GetParamsUPS();
            if (object.originCountryCode != null)
                message.originCountryCode = String(object.originCountryCode);
            if (object.originPostalCode != null)
                message.originPostalCode = String(object.originPostalCode);
            if (object.destinationCountryCode != null)
                message.destinationCountryCode = String(object.destinationCountryCode);
            if (object.destinationPostalCode != null)
                message.destinationPostalCode = String(object.destinationPostalCode);
            if (object.shipDate != null)
                message.shipDate = String(object.shipDate);
            if (object.shipTime != null)
                message.shipTime = String(object.shipTime);
            return message;
        };

        /**
         * Creates a plain object from a GetParamsUPS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetParamsUPS
         * @static
         * @param {logistics.GetParamsUPS} message GetParamsUPS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetParamsUPS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.originCountryCode = "";
                object.originPostalCode = "";
                object.destinationCountryCode = "";
                object.destinationPostalCode = "";
                object.shipDate = "";
                object.shipTime = "";
            }
            if (message.originCountryCode != null && message.hasOwnProperty("originCountryCode"))
                object.originCountryCode = message.originCountryCode;
            if (message.originPostalCode != null && message.hasOwnProperty("originPostalCode"))
                object.originPostalCode = message.originPostalCode;
            if (message.destinationCountryCode != null && message.hasOwnProperty("destinationCountryCode"))
                object.destinationCountryCode = message.destinationCountryCode;
            if (message.destinationPostalCode != null && message.hasOwnProperty("destinationPostalCode"))
                object.destinationPostalCode = message.destinationPostalCode;
            if (message.shipDate != null && message.hasOwnProperty("shipDate"))
                object.shipDate = message.shipDate;
            if (message.shipTime != null && message.hasOwnProperty("shipTime"))
                object.shipTime = message.shipTime;
            return object;
        };

        /**
         * Converts this GetParamsUPS to JSON.
         * @function toJSON
         * @memberof logistics.GetParamsUPS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetParamsUPS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetParamsUPS;
    })();

    logistics.GetResponseUPS = (function() {

        /**
         * Properties of a GetResponseUPS.
         * @memberof logistics
         * @interface IGetResponseUPS
         * @property {string|null} [deliveryDate] GetResponseUPS deliveryDate
         * @property {string|null} [deliveryTime] GetResponseUPS deliveryTime
         */

        /**
         * Constructs a new GetResponseUPS.
         * @memberof logistics
         * @classdesc Represents a GetResponseUPS.
         * @implements IGetResponseUPS
         * @constructor
         * @param {logistics.IGetResponseUPS=} [properties] Properties to set
         */
        function GetResponseUPS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetResponseUPS deliveryDate.
         * @member {string} deliveryDate
         * @memberof logistics.GetResponseUPS
         * @instance
         */
        GetResponseUPS.prototype.deliveryDate = "";

        /**
         * GetResponseUPS deliveryTime.
         * @member {string} deliveryTime
         * @memberof logistics.GetResponseUPS
         * @instance
         */
        GetResponseUPS.prototype.deliveryTime = "";

        /**
         * Creates a new GetResponseUPS instance using the specified properties.
         * @function create
         * @memberof logistics.GetResponseUPS
         * @static
         * @param {logistics.IGetResponseUPS=} [properties] Properties to set
         * @returns {logistics.GetResponseUPS} GetResponseUPS instance
         */
        GetResponseUPS.create = function create(properties) {
            return new GetResponseUPS(properties);
        };

        /**
         * Encodes the specified GetResponseUPS message. Does not implicitly {@link logistics.GetResponseUPS.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetResponseUPS
         * @static
         * @param {logistics.IGetResponseUPS} message GetResponseUPS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponseUPS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deliveryDate != null && message.hasOwnProperty("deliveryDate"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deliveryDate);
            if (message.deliveryTime != null && message.hasOwnProperty("deliveryTime"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.deliveryTime);
            return writer;
        };

        /**
         * Encodes the specified GetResponseUPS message, length delimited. Does not implicitly {@link logistics.GetResponseUPS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetResponseUPS
         * @static
         * @param {logistics.IGetResponseUPS} message GetResponseUPS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponseUPS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetResponseUPS message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetResponseUPS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetResponseUPS} GetResponseUPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponseUPS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetResponseUPS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deliveryDate = reader.string();
                    break;
                case 2:
                    message.deliveryTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetResponseUPS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetResponseUPS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetResponseUPS} GetResponseUPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponseUPS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetResponseUPS message.
         * @function verify
         * @memberof logistics.GetResponseUPS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetResponseUPS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deliveryDate != null && message.hasOwnProperty("deliveryDate"))
                if (!$util.isString(message.deliveryDate))
                    return "deliveryDate: string expected";
            if (message.deliveryTime != null && message.hasOwnProperty("deliveryTime"))
                if (!$util.isString(message.deliveryTime))
                    return "deliveryTime: string expected";
            return null;
        };

        /**
         * Creates a GetResponseUPS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetResponseUPS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetResponseUPS} GetResponseUPS
         */
        GetResponseUPS.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetResponseUPS)
                return object;
            var message = new $root.logistics.GetResponseUPS();
            if (object.deliveryDate != null)
                message.deliveryDate = String(object.deliveryDate);
            if (object.deliveryTime != null)
                message.deliveryTime = String(object.deliveryTime);
            return message;
        };

        /**
         * Creates a plain object from a GetResponseUPS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetResponseUPS
         * @static
         * @param {logistics.GetResponseUPS} message GetResponseUPS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetResponseUPS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.deliveryDate = "";
                object.deliveryTime = "";
            }
            if (message.deliveryDate != null && message.hasOwnProperty("deliveryDate"))
                object.deliveryDate = message.deliveryDate;
            if (message.deliveryTime != null && message.hasOwnProperty("deliveryTime"))
                object.deliveryTime = message.deliveryTime;
            return object;
        };

        /**
         * Converts this GetResponseUPS to JSON.
         * @function toJSON
         * @memberof logistics.GetResponseUPS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetResponseUPS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetResponseUPS;
    })();

    logistics.GetParamsBoxberry = (function() {

        /**
         * Properties of a GetParamsBoxberry.
         * @memberof logistics
         * @interface IGetParamsBoxberry
         * @property {string|null} [originCode] GetParamsBoxberry originCode
         * @property {string|null} [destionationCode] GetParamsBoxberry destionationCode
         */

        /**
         * Constructs a new GetParamsBoxberry.
         * @memberof logistics
         * @classdesc Represents a GetParamsBoxberry.
         * @implements IGetParamsBoxberry
         * @constructor
         * @param {logistics.IGetParamsBoxberry=} [properties] Properties to set
         */
        function GetParamsBoxberry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetParamsBoxberry originCode.
         * @member {string} originCode
         * @memberof logistics.GetParamsBoxberry
         * @instance
         */
        GetParamsBoxberry.prototype.originCode = "";

        /**
         * GetParamsBoxberry destionationCode.
         * @member {string} destionationCode
         * @memberof logistics.GetParamsBoxberry
         * @instance
         */
        GetParamsBoxberry.prototype.destionationCode = "";

        /**
         * Creates a new GetParamsBoxberry instance using the specified properties.
         * @function create
         * @memberof logistics.GetParamsBoxberry
         * @static
         * @param {logistics.IGetParamsBoxberry=} [properties] Properties to set
         * @returns {logistics.GetParamsBoxberry} GetParamsBoxberry instance
         */
        GetParamsBoxberry.create = function create(properties) {
            return new GetParamsBoxberry(properties);
        };

        /**
         * Encodes the specified GetParamsBoxberry message. Does not implicitly {@link logistics.GetParamsBoxberry.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetParamsBoxberry
         * @static
         * @param {logistics.IGetParamsBoxberry} message GetParamsBoxberry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsBoxberry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.originCode != null && message.hasOwnProperty("originCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.originCode);
            if (message.destionationCode != null && message.hasOwnProperty("destionationCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.destionationCode);
            return writer;
        };

        /**
         * Encodes the specified GetParamsBoxberry message, length delimited. Does not implicitly {@link logistics.GetParamsBoxberry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetParamsBoxberry
         * @static
         * @param {logistics.IGetParamsBoxberry} message GetParamsBoxberry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsBoxberry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetParamsBoxberry message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetParamsBoxberry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetParamsBoxberry} GetParamsBoxberry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsBoxberry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetParamsBoxberry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.originCode = reader.string();
                    break;
                case 2:
                    message.destionationCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetParamsBoxberry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetParamsBoxberry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetParamsBoxberry} GetParamsBoxberry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsBoxberry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetParamsBoxberry message.
         * @function verify
         * @memberof logistics.GetParamsBoxberry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetParamsBoxberry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.originCode != null && message.hasOwnProperty("originCode"))
                if (!$util.isString(message.originCode))
                    return "originCode: string expected";
            if (message.destionationCode != null && message.hasOwnProperty("destionationCode"))
                if (!$util.isString(message.destionationCode))
                    return "destionationCode: string expected";
            return null;
        };

        /**
         * Creates a GetParamsBoxberry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetParamsBoxberry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetParamsBoxberry} GetParamsBoxberry
         */
        GetParamsBoxberry.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetParamsBoxberry)
                return object;
            var message = new $root.logistics.GetParamsBoxberry();
            if (object.originCode != null)
                message.originCode = String(object.originCode);
            if (object.destionationCode != null)
                message.destionationCode = String(object.destionationCode);
            return message;
        };

        /**
         * Creates a plain object from a GetParamsBoxberry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetParamsBoxberry
         * @static
         * @param {logistics.GetParamsBoxberry} message GetParamsBoxberry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetParamsBoxberry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.originCode = "";
                object.destionationCode = "";
            }
            if (message.originCode != null && message.hasOwnProperty("originCode"))
                object.originCode = message.originCode;
            if (message.destionationCode != null && message.hasOwnProperty("destionationCode"))
                object.destionationCode = message.destionationCode;
            return object;
        };

        /**
         * Converts this GetParamsBoxberry to JSON.
         * @function toJSON
         * @memberof logistics.GetParamsBoxberry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetParamsBoxberry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetParamsBoxberry;
    })();

    logistics.GetResponseBoxberry = (function() {

        /**
         * Properties of a GetResponseBoxberry.
         * @memberof logistics
         * @interface IGetResponseBoxberry
         * @property {number|null} [price] GetResponseBoxberry price
         * @property {number|null} [deliveryPeriod] GetResponseBoxberry deliveryPeriod
         */

        /**
         * Constructs a new GetResponseBoxberry.
         * @memberof logistics
         * @classdesc Represents a GetResponseBoxberry.
         * @implements IGetResponseBoxberry
         * @constructor
         * @param {logistics.IGetResponseBoxberry=} [properties] Properties to set
         */
        function GetResponseBoxberry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetResponseBoxberry price.
         * @member {number} price
         * @memberof logistics.GetResponseBoxberry
         * @instance
         */
        GetResponseBoxberry.prototype.price = 0;

        /**
         * GetResponseBoxberry deliveryPeriod.
         * @member {number} deliveryPeriod
         * @memberof logistics.GetResponseBoxberry
         * @instance
         */
        GetResponseBoxberry.prototype.deliveryPeriod = 0;

        /**
         * Creates a new GetResponseBoxberry instance using the specified properties.
         * @function create
         * @memberof logistics.GetResponseBoxberry
         * @static
         * @param {logistics.IGetResponseBoxberry=} [properties] Properties to set
         * @returns {logistics.GetResponseBoxberry} GetResponseBoxberry instance
         */
        GetResponseBoxberry.create = function create(properties) {
            return new GetResponseBoxberry(properties);
        };

        /**
         * Encodes the specified GetResponseBoxberry message. Does not implicitly {@link logistics.GetResponseBoxberry.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetResponseBoxberry
         * @static
         * @param {logistics.IGetResponseBoxberry} message GetResponseBoxberry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponseBoxberry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.price);
            if (message.deliveryPeriod != null && message.hasOwnProperty("deliveryPeriod"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deliveryPeriod);
            return writer;
        };

        /**
         * Encodes the specified GetResponseBoxberry message, length delimited. Does not implicitly {@link logistics.GetResponseBoxberry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetResponseBoxberry
         * @static
         * @param {logistics.IGetResponseBoxberry} message GetResponseBoxberry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponseBoxberry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetResponseBoxberry message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetResponseBoxberry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetResponseBoxberry} GetResponseBoxberry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponseBoxberry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetResponseBoxberry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.price = reader.int32();
                    break;
                case 2:
                    message.deliveryPeriod = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetResponseBoxberry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetResponseBoxberry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetResponseBoxberry} GetResponseBoxberry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponseBoxberry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetResponseBoxberry message.
         * @function verify
         * @memberof logistics.GetResponseBoxberry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetResponseBoxberry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            if (message.deliveryPeriod != null && message.hasOwnProperty("deliveryPeriod"))
                if (!$util.isInteger(message.deliveryPeriod))
                    return "deliveryPeriod: integer expected";
            return null;
        };

        /**
         * Creates a GetResponseBoxberry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetResponseBoxberry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetResponseBoxberry} GetResponseBoxberry
         */
        GetResponseBoxberry.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetResponseBoxberry)
                return object;
            var message = new $root.logistics.GetResponseBoxberry();
            if (object.price != null)
                message.price = object.price | 0;
            if (object.deliveryPeriod != null)
                message.deliveryPeriod = object.deliveryPeriod | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetResponseBoxberry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetResponseBoxberry
         * @static
         * @param {logistics.GetResponseBoxberry} message GetResponseBoxberry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetResponseBoxberry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.price = 0;
                object.deliveryPeriod = 0;
            }
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.deliveryPeriod != null && message.hasOwnProperty("deliveryPeriod"))
                object.deliveryPeriod = message.deliveryPeriod;
            return object;
        };

        /**
         * Converts this GetResponseBoxberry to JSON.
         * @function toJSON
         * @memberof logistics.GetResponseBoxberry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetResponseBoxberry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetResponseBoxberry;
    })();

    logistics.GetParamsBoxberryDurationByCity = (function() {

        /**
         * Properties of a GetParamsBoxberryDurationByCity.
         * @memberof logistics
         * @interface IGetParamsBoxberryDurationByCity
         * @property {string|null} [originCode] GetParamsBoxberryDurationByCity originCode
         * @property {string|null} [cityName] GetParamsBoxberryDurationByCity cityName
         */

        /**
         * Constructs a new GetParamsBoxberryDurationByCity.
         * @memberof logistics
         * @classdesc Represents a GetParamsBoxberryDurationByCity.
         * @implements IGetParamsBoxberryDurationByCity
         * @constructor
         * @param {logistics.IGetParamsBoxberryDurationByCity=} [properties] Properties to set
         */
        function GetParamsBoxberryDurationByCity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetParamsBoxberryDurationByCity originCode.
         * @member {string} originCode
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @instance
         */
        GetParamsBoxberryDurationByCity.prototype.originCode = "";

        /**
         * GetParamsBoxberryDurationByCity cityName.
         * @member {string} cityName
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @instance
         */
        GetParamsBoxberryDurationByCity.prototype.cityName = "";

        /**
         * Creates a new GetParamsBoxberryDurationByCity instance using the specified properties.
         * @function create
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @static
         * @param {logistics.IGetParamsBoxberryDurationByCity=} [properties] Properties to set
         * @returns {logistics.GetParamsBoxberryDurationByCity} GetParamsBoxberryDurationByCity instance
         */
        GetParamsBoxberryDurationByCity.create = function create(properties) {
            return new GetParamsBoxberryDurationByCity(properties);
        };

        /**
         * Encodes the specified GetParamsBoxberryDurationByCity message. Does not implicitly {@link logistics.GetParamsBoxberryDurationByCity.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @static
         * @param {logistics.IGetParamsBoxberryDurationByCity} message GetParamsBoxberryDurationByCity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsBoxberryDurationByCity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.originCode != null && message.hasOwnProperty("originCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.originCode);
            if (message.cityName != null && message.hasOwnProperty("cityName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cityName);
            return writer;
        };

        /**
         * Encodes the specified GetParamsBoxberryDurationByCity message, length delimited. Does not implicitly {@link logistics.GetParamsBoxberryDurationByCity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @static
         * @param {logistics.IGetParamsBoxberryDurationByCity} message GetParamsBoxberryDurationByCity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsBoxberryDurationByCity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetParamsBoxberryDurationByCity message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetParamsBoxberryDurationByCity} GetParamsBoxberryDurationByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsBoxberryDurationByCity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetParamsBoxberryDurationByCity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.originCode = reader.string();
                    break;
                case 2:
                    message.cityName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetParamsBoxberryDurationByCity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetParamsBoxberryDurationByCity} GetParamsBoxberryDurationByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsBoxberryDurationByCity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetParamsBoxberryDurationByCity message.
         * @function verify
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetParamsBoxberryDurationByCity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.originCode != null && message.hasOwnProperty("originCode"))
                if (!$util.isString(message.originCode))
                    return "originCode: string expected";
            if (message.cityName != null && message.hasOwnProperty("cityName"))
                if (!$util.isString(message.cityName))
                    return "cityName: string expected";
            return null;
        };

        /**
         * Creates a GetParamsBoxberryDurationByCity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetParamsBoxberryDurationByCity} GetParamsBoxberryDurationByCity
         */
        GetParamsBoxberryDurationByCity.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetParamsBoxberryDurationByCity)
                return object;
            var message = new $root.logistics.GetParamsBoxberryDurationByCity();
            if (object.originCode != null)
                message.originCode = String(object.originCode);
            if (object.cityName != null)
                message.cityName = String(object.cityName);
            return message;
        };

        /**
         * Creates a plain object from a GetParamsBoxberryDurationByCity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @static
         * @param {logistics.GetParamsBoxberryDurationByCity} message GetParamsBoxberryDurationByCity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetParamsBoxberryDurationByCity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.originCode = "";
                object.cityName = "";
            }
            if (message.originCode != null && message.hasOwnProperty("originCode"))
                object.originCode = message.originCode;
            if (message.cityName != null && message.hasOwnProperty("cityName"))
                object.cityName = message.cityName;
            return object;
        };

        /**
         * Converts this GetParamsBoxberryDurationByCity to JSON.
         * @function toJSON
         * @memberof logistics.GetParamsBoxberryDurationByCity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetParamsBoxberryDurationByCity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetParamsBoxberryDurationByCity;
    })();

    logistics.GetResponseBoxberryDurationByCity = (function() {

        /**
         * Properties of a GetResponseBoxberryDurationByCity.
         * @memberof logistics
         * @interface IGetResponseBoxberryDurationByCity
         * @property {number|null} [price] GetResponseBoxberryDurationByCity price
         * @property {number|null} [deliveryPeriod] GetResponseBoxberryDurationByCity deliveryPeriod
         */

        /**
         * Constructs a new GetResponseBoxberryDurationByCity.
         * @memberof logistics
         * @classdesc Represents a GetResponseBoxberryDurationByCity.
         * @implements IGetResponseBoxberryDurationByCity
         * @constructor
         * @param {logistics.IGetResponseBoxberryDurationByCity=} [properties] Properties to set
         */
        function GetResponseBoxberryDurationByCity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetResponseBoxberryDurationByCity price.
         * @member {number} price
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @instance
         */
        GetResponseBoxberryDurationByCity.prototype.price = 0;

        /**
         * GetResponseBoxberryDurationByCity deliveryPeriod.
         * @member {number} deliveryPeriod
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @instance
         */
        GetResponseBoxberryDurationByCity.prototype.deliveryPeriod = 0;

        /**
         * Creates a new GetResponseBoxberryDurationByCity instance using the specified properties.
         * @function create
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @static
         * @param {logistics.IGetResponseBoxberryDurationByCity=} [properties] Properties to set
         * @returns {logistics.GetResponseBoxberryDurationByCity} GetResponseBoxberryDurationByCity instance
         */
        GetResponseBoxberryDurationByCity.create = function create(properties) {
            return new GetResponseBoxberryDurationByCity(properties);
        };

        /**
         * Encodes the specified GetResponseBoxberryDurationByCity message. Does not implicitly {@link logistics.GetResponseBoxberryDurationByCity.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @static
         * @param {logistics.IGetResponseBoxberryDurationByCity} message GetResponseBoxberryDurationByCity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponseBoxberryDurationByCity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.price);
            if (message.deliveryPeriod != null && message.hasOwnProperty("deliveryPeriod"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deliveryPeriod);
            return writer;
        };

        /**
         * Encodes the specified GetResponseBoxberryDurationByCity message, length delimited. Does not implicitly {@link logistics.GetResponseBoxberryDurationByCity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @static
         * @param {logistics.IGetResponseBoxberryDurationByCity} message GetResponseBoxberryDurationByCity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponseBoxberryDurationByCity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetResponseBoxberryDurationByCity message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetResponseBoxberryDurationByCity} GetResponseBoxberryDurationByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponseBoxberryDurationByCity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetResponseBoxberryDurationByCity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.price = reader.int32();
                    break;
                case 2:
                    message.deliveryPeriod = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetResponseBoxberryDurationByCity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetResponseBoxberryDurationByCity} GetResponseBoxberryDurationByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponseBoxberryDurationByCity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetResponseBoxberryDurationByCity message.
         * @function verify
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetResponseBoxberryDurationByCity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            if (message.deliveryPeriod != null && message.hasOwnProperty("deliveryPeriod"))
                if (!$util.isInteger(message.deliveryPeriod))
                    return "deliveryPeriod: integer expected";
            return null;
        };

        /**
         * Creates a GetResponseBoxberryDurationByCity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetResponseBoxberryDurationByCity} GetResponseBoxberryDurationByCity
         */
        GetResponseBoxberryDurationByCity.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetResponseBoxberryDurationByCity)
                return object;
            var message = new $root.logistics.GetResponseBoxberryDurationByCity();
            if (object.price != null)
                message.price = object.price | 0;
            if (object.deliveryPeriod != null)
                message.deliveryPeriod = object.deliveryPeriod | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetResponseBoxberryDurationByCity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @static
         * @param {logistics.GetResponseBoxberryDurationByCity} message GetResponseBoxberryDurationByCity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetResponseBoxberryDurationByCity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.price = 0;
                object.deliveryPeriod = 0;
            }
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.deliveryPeriod != null && message.hasOwnProperty("deliveryPeriod"))
                object.deliveryPeriod = message.deliveryPeriod;
            return object;
        };

        /**
         * Converts this GetResponseBoxberryDurationByCity to JSON.
         * @function toJSON
         * @memberof logistics.GetResponseBoxberryDurationByCity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetResponseBoxberryDurationByCity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetResponseBoxberryDurationByCity;
    })();

    logistics.GetParamsPointInformation = (function() {

        /**
         * Properties of a GetParamsPointInformation.
         * @memberof logistics
         * @interface IGetParamsPointInformation
         * @property {string|null} [pointCode] GetParamsPointInformation pointCode
         */

        /**
         * Constructs a new GetParamsPointInformation.
         * @memberof logistics
         * @classdesc Represents a GetParamsPointInformation.
         * @implements IGetParamsPointInformation
         * @constructor
         * @param {logistics.IGetParamsPointInformation=} [properties] Properties to set
         */
        function GetParamsPointInformation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetParamsPointInformation pointCode.
         * @member {string} pointCode
         * @memberof logistics.GetParamsPointInformation
         * @instance
         */
        GetParamsPointInformation.prototype.pointCode = "";

        /**
         * Creates a new GetParamsPointInformation instance using the specified properties.
         * @function create
         * @memberof logistics.GetParamsPointInformation
         * @static
         * @param {logistics.IGetParamsPointInformation=} [properties] Properties to set
         * @returns {logistics.GetParamsPointInformation} GetParamsPointInformation instance
         */
        GetParamsPointInformation.create = function create(properties) {
            return new GetParamsPointInformation(properties);
        };

        /**
         * Encodes the specified GetParamsPointInformation message. Does not implicitly {@link logistics.GetParamsPointInformation.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetParamsPointInformation
         * @static
         * @param {logistics.IGetParamsPointInformation} message GetParamsPointInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsPointInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pointCode != null && message.hasOwnProperty("pointCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.pointCode);
            return writer;
        };

        /**
         * Encodes the specified GetParamsPointInformation message, length delimited. Does not implicitly {@link logistics.GetParamsPointInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetParamsPointInformation
         * @static
         * @param {logistics.IGetParamsPointInformation} message GetParamsPointInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsPointInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetParamsPointInformation message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetParamsPointInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetParamsPointInformation} GetParamsPointInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsPointInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetParamsPointInformation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pointCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetParamsPointInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetParamsPointInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetParamsPointInformation} GetParamsPointInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsPointInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetParamsPointInformation message.
         * @function verify
         * @memberof logistics.GetParamsPointInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetParamsPointInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pointCode != null && message.hasOwnProperty("pointCode"))
                if (!$util.isString(message.pointCode))
                    return "pointCode: string expected";
            return null;
        };

        /**
         * Creates a GetParamsPointInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetParamsPointInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetParamsPointInformation} GetParamsPointInformation
         */
        GetParamsPointInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetParamsPointInformation)
                return object;
            var message = new $root.logistics.GetParamsPointInformation();
            if (object.pointCode != null)
                message.pointCode = String(object.pointCode);
            return message;
        };

        /**
         * Creates a plain object from a GetParamsPointInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetParamsPointInformation
         * @static
         * @param {logistics.GetParamsPointInformation} message GetParamsPointInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetParamsPointInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.pointCode = "";
            if (message.pointCode != null && message.hasOwnProperty("pointCode"))
                object.pointCode = message.pointCode;
            return object;
        };

        /**
         * Converts this GetParamsPointInformation to JSON.
         * @function toJSON
         * @memberof logistics.GetParamsPointInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetParamsPointInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetParamsPointInformation;
    })();

    logistics.GetResponsePointInformation = (function() {

        /**
         * Properties of a GetResponsePointInformation.
         * @memberof logistics
         * @interface IGetResponsePointInformation
         * @property {string|null} [workSchedule] GetResponsePointInformation workSchedule
         * @property {string|null} [address] GetResponsePointInformation address
         * @property {string|null} [metro] GetResponsePointInformation metro
         */

        /**
         * Constructs a new GetResponsePointInformation.
         * @memberof logistics
         * @classdesc Represents a GetResponsePointInformation.
         * @implements IGetResponsePointInformation
         * @constructor
         * @param {logistics.IGetResponsePointInformation=} [properties] Properties to set
         */
        function GetResponsePointInformation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetResponsePointInformation workSchedule.
         * @member {string} workSchedule
         * @memberof logistics.GetResponsePointInformation
         * @instance
         */
        GetResponsePointInformation.prototype.workSchedule = "";

        /**
         * GetResponsePointInformation address.
         * @member {string} address
         * @memberof logistics.GetResponsePointInformation
         * @instance
         */
        GetResponsePointInformation.prototype.address = "";

        /**
         * GetResponsePointInformation metro.
         * @member {string} metro
         * @memberof logistics.GetResponsePointInformation
         * @instance
         */
        GetResponsePointInformation.prototype.metro = "";

        /**
         * Creates a new GetResponsePointInformation instance using the specified properties.
         * @function create
         * @memberof logistics.GetResponsePointInformation
         * @static
         * @param {logistics.IGetResponsePointInformation=} [properties] Properties to set
         * @returns {logistics.GetResponsePointInformation} GetResponsePointInformation instance
         */
        GetResponsePointInformation.create = function create(properties) {
            return new GetResponsePointInformation(properties);
        };

        /**
         * Encodes the specified GetResponsePointInformation message. Does not implicitly {@link logistics.GetResponsePointInformation.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetResponsePointInformation
         * @static
         * @param {logistics.IGetResponsePointInformation} message GetResponsePointInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponsePointInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.workSchedule != null && message.hasOwnProperty("workSchedule"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.workSchedule);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.address);
            if (message.metro != null && message.hasOwnProperty("metro"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.metro);
            return writer;
        };

        /**
         * Encodes the specified GetResponsePointInformation message, length delimited. Does not implicitly {@link logistics.GetResponsePointInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetResponsePointInformation
         * @static
         * @param {logistics.IGetResponsePointInformation} message GetResponsePointInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponsePointInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetResponsePointInformation message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetResponsePointInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetResponsePointInformation} GetResponsePointInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponsePointInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetResponsePointInformation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.workSchedule = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metro = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetResponsePointInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetResponsePointInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetResponsePointInformation} GetResponsePointInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponsePointInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetResponsePointInformation message.
         * @function verify
         * @memberof logistics.GetResponsePointInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetResponsePointInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.workSchedule != null && message.hasOwnProperty("workSchedule"))
                if (!$util.isString(message.workSchedule))
                    return "workSchedule: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.metro != null && message.hasOwnProperty("metro"))
                if (!$util.isString(message.metro))
                    return "metro: string expected";
            return null;
        };

        /**
         * Creates a GetResponsePointInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetResponsePointInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetResponsePointInformation} GetResponsePointInformation
         */
        GetResponsePointInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetResponsePointInformation)
                return object;
            var message = new $root.logistics.GetResponsePointInformation();
            if (object.workSchedule != null)
                message.workSchedule = String(object.workSchedule);
            if (object.address != null)
                message.address = String(object.address);
            if (object.metro != null)
                message.metro = String(object.metro);
            return message;
        };

        /**
         * Creates a plain object from a GetResponsePointInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetResponsePointInformation
         * @static
         * @param {logistics.GetResponsePointInformation} message GetResponsePointInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetResponsePointInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.workSchedule = "";
                object.address = "";
                object.metro = "";
            }
            if (message.workSchedule != null && message.hasOwnProperty("workSchedule"))
                object.workSchedule = message.workSchedule;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.metro != null && message.hasOwnProperty("metro"))
                object.metro = message.metro;
            return object;
        };

        /**
         * Converts this GetResponsePointInformation to JSON.
         * @function toJSON
         * @memberof logistics.GetResponsePointInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetResponsePointInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetResponsePointInformation;
    })();

    logistics.GetParamsOrderStatus = (function() {

        /**
         * Properties of a GetParamsOrderStatus.
         * @memberof logistics
         * @interface IGetParamsOrderStatus
         * @property {string|null} [orderId] GetParamsOrderStatus orderId
         */

        /**
         * Constructs a new GetParamsOrderStatus.
         * @memberof logistics
         * @classdesc Represents a GetParamsOrderStatus.
         * @implements IGetParamsOrderStatus
         * @constructor
         * @param {logistics.IGetParamsOrderStatus=} [properties] Properties to set
         */
        function GetParamsOrderStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetParamsOrderStatus orderId.
         * @member {string} orderId
         * @memberof logistics.GetParamsOrderStatus
         * @instance
         */
        GetParamsOrderStatus.prototype.orderId = "";

        /**
         * Creates a new GetParamsOrderStatus instance using the specified properties.
         * @function create
         * @memberof logistics.GetParamsOrderStatus
         * @static
         * @param {logistics.IGetParamsOrderStatus=} [properties] Properties to set
         * @returns {logistics.GetParamsOrderStatus} GetParamsOrderStatus instance
         */
        GetParamsOrderStatus.create = function create(properties) {
            return new GetParamsOrderStatus(properties);
        };

        /**
         * Encodes the specified GetParamsOrderStatus message. Does not implicitly {@link logistics.GetParamsOrderStatus.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetParamsOrderStatus
         * @static
         * @param {logistics.IGetParamsOrderStatus} message GetParamsOrderStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsOrderStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.orderId);
            return writer;
        };

        /**
         * Encodes the specified GetParamsOrderStatus message, length delimited. Does not implicitly {@link logistics.GetParamsOrderStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetParamsOrderStatus
         * @static
         * @param {logistics.IGetParamsOrderStatus} message GetParamsOrderStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetParamsOrderStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetParamsOrderStatus message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetParamsOrderStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetParamsOrderStatus} GetParamsOrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsOrderStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetParamsOrderStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetParamsOrderStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetParamsOrderStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetParamsOrderStatus} GetParamsOrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetParamsOrderStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetParamsOrderStatus message.
         * @function verify
         * @memberof logistics.GetParamsOrderStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetParamsOrderStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                if (!$util.isString(message.orderId))
                    return "orderId: string expected";
            return null;
        };

        /**
         * Creates a GetParamsOrderStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetParamsOrderStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetParamsOrderStatus} GetParamsOrderStatus
         */
        GetParamsOrderStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetParamsOrderStatus)
                return object;
            var message = new $root.logistics.GetParamsOrderStatus();
            if (object.orderId != null)
                message.orderId = String(object.orderId);
            return message;
        };

        /**
         * Creates a plain object from a GetParamsOrderStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetParamsOrderStatus
         * @static
         * @param {logistics.GetParamsOrderStatus} message GetParamsOrderStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetParamsOrderStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.orderId = "";
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                object.orderId = message.orderId;
            return object;
        };

        /**
         * Converts this GetParamsOrderStatus to JSON.
         * @function toJSON
         * @memberof logistics.GetParamsOrderStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetParamsOrderStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetParamsOrderStatus;
    })();

    logistics.GetResponseOrderStatus = (function() {

        /**
         * Properties of a GetResponseOrderStatus.
         * @memberof logistics
         * @interface IGetResponseOrderStatus
         * @property {Array.<logistics.Istatus>|null} [statuses] GetResponseOrderStatus statuses
         */

        /**
         * Constructs a new GetResponseOrderStatus.
         * @memberof logistics
         * @classdesc Represents a GetResponseOrderStatus.
         * @implements IGetResponseOrderStatus
         * @constructor
         * @param {logistics.IGetResponseOrderStatus=} [properties] Properties to set
         */
        function GetResponseOrderStatus(properties) {
            this.statuses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetResponseOrderStatus statuses.
         * @member {Array.<logistics.Istatus>} statuses
         * @memberof logistics.GetResponseOrderStatus
         * @instance
         */
        GetResponseOrderStatus.prototype.statuses = $util.emptyArray;

        /**
         * Creates a new GetResponseOrderStatus instance using the specified properties.
         * @function create
         * @memberof logistics.GetResponseOrderStatus
         * @static
         * @param {logistics.IGetResponseOrderStatus=} [properties] Properties to set
         * @returns {logistics.GetResponseOrderStatus} GetResponseOrderStatus instance
         */
        GetResponseOrderStatus.create = function create(properties) {
            return new GetResponseOrderStatus(properties);
        };

        /**
         * Encodes the specified GetResponseOrderStatus message. Does not implicitly {@link logistics.GetResponseOrderStatus.verify|verify} messages.
         * @function encode
         * @memberof logistics.GetResponseOrderStatus
         * @static
         * @param {logistics.IGetResponseOrderStatus} message GetResponseOrderStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponseOrderStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.statuses != null && message.statuses.length)
                for (var i = 0; i < message.statuses.length; ++i)
                    $root.logistics.status.encode(message.statuses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetResponseOrderStatus message, length delimited. Does not implicitly {@link logistics.GetResponseOrderStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.GetResponseOrderStatus
         * @static
         * @param {logistics.IGetResponseOrderStatus} message GetResponseOrderStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponseOrderStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetResponseOrderStatus message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.GetResponseOrderStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.GetResponseOrderStatus} GetResponseOrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponseOrderStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.GetResponseOrderStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.statuses && message.statuses.length))
                        message.statuses = [];
                    message.statuses.push($root.logistics.status.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetResponseOrderStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.GetResponseOrderStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.GetResponseOrderStatus} GetResponseOrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponseOrderStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetResponseOrderStatus message.
         * @function verify
         * @memberof logistics.GetResponseOrderStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetResponseOrderStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.statuses != null && message.hasOwnProperty("statuses")) {
                if (!Array.isArray(message.statuses))
                    return "statuses: array expected";
                for (var i = 0; i < message.statuses.length; ++i) {
                    var error = $root.logistics.status.verify(message.statuses[i]);
                    if (error)
                        return "statuses." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetResponseOrderStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.GetResponseOrderStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.GetResponseOrderStatus} GetResponseOrderStatus
         */
        GetResponseOrderStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.GetResponseOrderStatus)
                return object;
            var message = new $root.logistics.GetResponseOrderStatus();
            if (object.statuses) {
                if (!Array.isArray(object.statuses))
                    throw TypeError(".logistics.GetResponseOrderStatus.statuses: array expected");
                message.statuses = [];
                for (var i = 0; i < object.statuses.length; ++i) {
                    if (typeof object.statuses[i] !== "object")
                        throw TypeError(".logistics.GetResponseOrderStatus.statuses: object expected");
                    message.statuses[i] = $root.logistics.status.fromObject(object.statuses[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetResponseOrderStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.GetResponseOrderStatus
         * @static
         * @param {logistics.GetResponseOrderStatus} message GetResponseOrderStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetResponseOrderStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.statuses = [];
            if (message.statuses && message.statuses.length) {
                object.statuses = [];
                for (var j = 0; j < message.statuses.length; ++j)
                    object.statuses[j] = $root.logistics.status.toObject(message.statuses[j], options);
            }
            return object;
        };

        /**
         * Converts this GetResponseOrderStatus to JSON.
         * @function toJSON
         * @memberof logistics.GetResponseOrderStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetResponseOrderStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetResponseOrderStatus;
    })();

    logistics.status = (function() {

        /**
         * Properties of a status.
         * @memberof logistics
         * @interface Istatus
         * @property {string|null} [date] status date
         * @property {string|null} [name] status name
         * @property {string|null} [comment] status comment
         */

        /**
         * Constructs a new status.
         * @memberof logistics
         * @classdesc Represents a status.
         * @implements Istatus
         * @constructor
         * @param {logistics.Istatus=} [properties] Properties to set
         */
        function status(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * status date.
         * @member {string} date
         * @memberof logistics.status
         * @instance
         */
        status.prototype.date = "";

        /**
         * status name.
         * @member {string} name
         * @memberof logistics.status
         * @instance
         */
        status.prototype.name = "";

        /**
         * status comment.
         * @member {string} comment
         * @memberof logistics.status
         * @instance
         */
        status.prototype.comment = "";

        /**
         * Creates a new status instance using the specified properties.
         * @function create
         * @memberof logistics.status
         * @static
         * @param {logistics.Istatus=} [properties] Properties to set
         * @returns {logistics.status} status instance
         */
        status.create = function create(properties) {
            return new status(properties);
        };

        /**
         * Encodes the specified status message. Does not implicitly {@link logistics.status.verify|verify} messages.
         * @function encode
         * @memberof logistics.status
         * @static
         * @param {logistics.Istatus} message status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.date != null && message.hasOwnProperty("date"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.date);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.comment != null && message.hasOwnProperty("comment"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.comment);
            return writer;
        };

        /**
         * Encodes the specified status message, length delimited. Does not implicitly {@link logistics.status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logistics.status
         * @static
         * @param {logistics.Istatus} message status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a status message from the specified reader or buffer.
         * @function decode
         * @memberof logistics.status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logistics.status} status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logistics.status();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.date = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.comment = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logistics.status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logistics.status} status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a status message.
         * @function verify
         * @memberof logistics.status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isString(message.date))
                    return "date: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            return null;
        };

        /**
         * Creates a status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logistics.status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logistics.status} status
         */
        status.fromObject = function fromObject(object) {
            if (object instanceof $root.logistics.status)
                return object;
            var message = new $root.logistics.status();
            if (object.date != null)
                message.date = String(object.date);
            if (object.name != null)
                message.name = String(object.name);
            if (object.comment != null)
                message.comment = String(object.comment);
            return message;
        };

        /**
         * Creates a plain object from a status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logistics.status
         * @static
         * @param {logistics.status} message status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        status.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.date = "";
                object.name = "";
                object.comment = "";
            }
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            return object;
        };

        /**
         * Converts this status to JSON.
         * @function toJSON
         * @memberof logistics.status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return status;
    })();

    return logistics;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

$root.meta = (function() {

    /**
     * Namespace meta.
     * @exports meta
     * @namespace
     */
    var meta = {};

    meta.Mobile = (function() {

        /**
         * Constructs a new Mobile service.
         * @memberof meta
         * @classdesc Represents a Mobile
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Mobile(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Mobile.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Mobile;

        /**
         * Creates new Mobile service using the specified rpc implementation.
         * @function create
         * @memberof meta.Mobile
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Mobile} RPC service. Useful where requests and/or responses are streamed.
         */
        Mobile.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link meta.Mobile#contacts}.
         * @memberof meta.Mobile
         * @typedef ContactsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meta.ResponseMobileAPIContacts} [response] ResponseMobileAPIContacts
         */

        /**
         * Calls Contacts.
         * @function contacts
         * @memberof meta.Mobile
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {meta.Mobile.ContactsCallback} callback Node-style callback called with the error, if any, and ResponseMobileAPIContacts
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.contacts = function contacts(request, callback) {
            return this.rpcCall(contacts, $root.google.protobuf.Empty, $root.meta.ResponseMobileAPIContacts, request, callback);
        }, "name", { value: "Contacts" });

        /**
         * Calls Contacts.
         * @function contacts
         * @memberof meta.Mobile
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<meta.ResponseMobileAPIContacts>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link meta.Mobile#about}.
         * @memberof meta.Mobile
         * @typedef AboutCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meta.ResponseMobileApiAbout} [response] ResponseMobileApiAbout
         */

        /**
         * Calls About.
         * @function about
         * @memberof meta.Mobile
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {meta.Mobile.AboutCallback} callback Node-style callback called with the error, if any, and ResponseMobileApiAbout
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.about = function about(request, callback) {
            return this.rpcCall(about, $root.google.protobuf.Empty, $root.meta.ResponseMobileApiAbout, request, callback);
        }, "name", { value: "About" });

        /**
         * Calls About.
         * @function about
         * @memberof meta.Mobile
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<meta.ResponseMobileApiAbout>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link meta.Mobile#faq}.
         * @memberof meta.Mobile
         * @typedef FaqCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meta.ResponseFaq} [response] ResponseFaq
         */

        /**
         * Calls Faq.
         * @function faq
         * @memberof meta.Mobile
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {meta.Mobile.FaqCallback} callback Node-style callback called with the error, if any, and ResponseFaq
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.faq = function faq(request, callback) {
            return this.rpcCall(faq, $root.google.protobuf.Empty, $root.meta.ResponseFaq, request, callback);
        }, "name", { value: "Faq" });

        /**
         * Calls Faq.
         * @function faq
         * @memberof meta.Mobile
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<meta.ResponseFaq>} Promise
         * @variation 2
         */

        return Mobile;
    })();

    meta.Stores = (function() {

        /**
         * Constructs a new Stores service.
         * @memberof meta
         * @classdesc Represents a Stores
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Stores(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Stores.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Stores;

        /**
         * Creates new Stores service using the specified rpc implementation.
         * @function create
         * @memberof meta.Stores
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Stores} RPC service. Useful where requests and/or responses are streamed.
         */
        Stores.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link meta.Stores#all}.
         * @memberof meta.Stores
         * @typedef AllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meta.ResponseAllOfflineStoresInfo} [response] ResponseAllOfflineStoresInfo
         */

        /**
         * Calls All.
         * @function all
         * @memberof meta.Stores
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {meta.Stores.AllCallback} callback Node-style callback called with the error, if any, and ResponseAllOfflineStoresInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Stores.prototype.all = function all(request, callback) {
            return this.rpcCall(all, $root.google.protobuf.Empty, $root.meta.ResponseAllOfflineStoresInfo, request, callback);
        }, "name", { value: "All" });

        /**
         * Calls All.
         * @function all
         * @memberof meta.Stores
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<meta.ResponseAllOfflineStoresInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link meta.Stores#byID}.
         * @memberof meta.Stores
         * @typedef ByIDCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meta.ResponseOfflineStoreInfoByID} [response] ResponseOfflineStoreInfoByID
         */

        /**
         * Calls ByID.
         * @function byID
         * @memberof meta.Stores
         * @instance
         * @param {meta.IparamsOfflineStoreInfoByID} request paramsOfflineStoreInfoByID message or plain object
         * @param {meta.Stores.ByIDCallback} callback Node-style callback called with the error, if any, and ResponseOfflineStoreInfoByID
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Stores.prototype.byID = function byID(request, callback) {
            return this.rpcCall(byID, $root.meta.paramsOfflineStoreInfoByID, $root.meta.ResponseOfflineStoreInfoByID, request, callback);
        }, "name", { value: "ByID" });

        /**
         * Calls ByID.
         * @function byID
         * @memberof meta.Stores
         * @instance
         * @param {meta.IparamsOfflineStoreInfoByID} request paramsOfflineStoreInfoByID message or plain object
         * @returns {Promise<meta.ResponseOfflineStoreInfoByID>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link meta.Stores#cities}.
         * @memberof meta.Stores
         * @typedef CitiesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meta.ResponseStoresCities} [response] ResponseStoresCities
         */

        /**
         * Calls Cities.
         * @function cities
         * @memberof meta.Stores
         * @instance
         * @param {meta.IparamsStoresCities} request paramsStoresCities message or plain object
         * @param {meta.Stores.CitiesCallback} callback Node-style callback called with the error, if any, and ResponseStoresCities
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Stores.prototype.cities = function cities(request, callback) {
            return this.rpcCall(cities, $root.meta.paramsStoresCities, $root.meta.ResponseStoresCities, request, callback);
        }, "name", { value: "Cities" });

        /**
         * Calls Cities.
         * @function cities
         * @memberof meta.Stores
         * @instance
         * @param {meta.IparamsStoresCities} request paramsStoresCities message or plain object
         * @returns {Promise<meta.ResponseStoresCities>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link meta.Stores#byCity}.
         * @memberof meta.Stores
         * @typedef ByCityCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meta.responseStoresByCity} [response] responseStoresByCity
         */

        /**
         * Calls ByCity.
         * @function byCity
         * @memberof meta.Stores
         * @instance
         * @param {meta.IparamsStoresByCity} request paramsStoresByCity message or plain object
         * @param {meta.Stores.ByCityCallback} callback Node-style callback called with the error, if any, and responseStoresByCity
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Stores.prototype.byCity = function byCity(request, callback) {
            return this.rpcCall(byCity, $root.meta.paramsStoresByCity, $root.meta.responseStoresByCity, request, callback);
        }, "name", { value: "ByCity" });

        /**
         * Calls ByCity.
         * @function byCity
         * @memberof meta.Stores
         * @instance
         * @param {meta.IparamsStoresByCity} request paramsStoresByCity message or plain object
         * @returns {Promise<meta.responseStoresByCity>} Promise
         * @variation 2
         */

        return Stores;
    })();

    meta.ResponseAllOfflineStoresInfo = (function() {

        /**
         * Properties of a ResponseAllOfflineStoresInfo.
         * @memberof meta
         * @interface IResponseAllOfflineStoresInfo
         * @property {Array.<meta.IOfflineStore>|null} [stores] ResponseAllOfflineStoresInfo stores
         */

        /**
         * Constructs a new ResponseAllOfflineStoresInfo.
         * @memberof meta
         * @classdesc Represents a ResponseAllOfflineStoresInfo.
         * @implements IResponseAllOfflineStoresInfo
         * @constructor
         * @param {meta.IResponseAllOfflineStoresInfo=} [properties] Properties to set
         */
        function ResponseAllOfflineStoresInfo(properties) {
            this.stores = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseAllOfflineStoresInfo stores.
         * @member {Array.<meta.IOfflineStore>} stores
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @instance
         */
        ResponseAllOfflineStoresInfo.prototype.stores = $util.emptyArray;

        /**
         * Creates a new ResponseAllOfflineStoresInfo instance using the specified properties.
         * @function create
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @static
         * @param {meta.IResponseAllOfflineStoresInfo=} [properties] Properties to set
         * @returns {meta.ResponseAllOfflineStoresInfo} ResponseAllOfflineStoresInfo instance
         */
        ResponseAllOfflineStoresInfo.create = function create(properties) {
            return new ResponseAllOfflineStoresInfo(properties);
        };

        /**
         * Encodes the specified ResponseAllOfflineStoresInfo message. Does not implicitly {@link meta.ResponseAllOfflineStoresInfo.verify|verify} messages.
         * @function encode
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @static
         * @param {meta.IResponseAllOfflineStoresInfo} message ResponseAllOfflineStoresInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseAllOfflineStoresInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stores != null && message.stores.length)
                for (var i = 0; i < message.stores.length; ++i)
                    $root.meta.OfflineStore.encode(message.stores[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseAllOfflineStoresInfo message, length delimited. Does not implicitly {@link meta.ResponseAllOfflineStoresInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @static
         * @param {meta.IResponseAllOfflineStoresInfo} message ResponseAllOfflineStoresInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseAllOfflineStoresInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseAllOfflineStoresInfo message from the specified reader or buffer.
         * @function decode
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.ResponseAllOfflineStoresInfo} ResponseAllOfflineStoresInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseAllOfflineStoresInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.ResponseAllOfflineStoresInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.stores && message.stores.length))
                        message.stores = [];
                    message.stores.push($root.meta.OfflineStore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseAllOfflineStoresInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.ResponseAllOfflineStoresInfo} ResponseAllOfflineStoresInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseAllOfflineStoresInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseAllOfflineStoresInfo message.
         * @function verify
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseAllOfflineStoresInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stores != null && message.hasOwnProperty("stores")) {
                if (!Array.isArray(message.stores))
                    return "stores: array expected";
                for (var i = 0; i < message.stores.length; ++i) {
                    var error = $root.meta.OfflineStore.verify(message.stores[i]);
                    if (error)
                        return "stores." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResponseAllOfflineStoresInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.ResponseAllOfflineStoresInfo} ResponseAllOfflineStoresInfo
         */
        ResponseAllOfflineStoresInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.ResponseAllOfflineStoresInfo)
                return object;
            var message = new $root.meta.ResponseAllOfflineStoresInfo();
            if (object.stores) {
                if (!Array.isArray(object.stores))
                    throw TypeError(".meta.ResponseAllOfflineStoresInfo.stores: array expected");
                message.stores = [];
                for (var i = 0; i < object.stores.length; ++i) {
                    if (typeof object.stores[i] !== "object")
                        throw TypeError(".meta.ResponseAllOfflineStoresInfo.stores: object expected");
                    message.stores[i] = $root.meta.OfflineStore.fromObject(object.stores[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseAllOfflineStoresInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @static
         * @param {meta.ResponseAllOfflineStoresInfo} message ResponseAllOfflineStoresInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseAllOfflineStoresInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.stores = [];
            if (message.stores && message.stores.length) {
                object.stores = [];
                for (var j = 0; j < message.stores.length; ++j)
                    object.stores[j] = $root.meta.OfflineStore.toObject(message.stores[j], options);
            }
            return object;
        };

        /**
         * Converts this ResponseAllOfflineStoresInfo to JSON.
         * @function toJSON
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseAllOfflineStoresInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseAllOfflineStoresInfo;
    })();

    meta.OfflineStore = (function() {

        /**
         * Properties of an OfflineStore.
         * @memberof meta
         * @interface IOfflineStore
         * @property {number|null} [storeId] OfflineStore storeId
         * @property {string|null} [title] OfflineStore title
         * @property {string|null} [address] OfflineStore address
         * @property {string|null} [phone] OfflineStore phone
         * @property {string|null} [geo] OfflineStore geo
         * @property {string|null} [city] OfflineStore city
         * @property {string|null} [country] OfflineStore country
         * @property {boolean|null} [active] OfflineStore active
         * @property {string|null} [pictureUrl] OfflineStore pictureUrl
         * @property {string|null} [schedule] OfflineStore schedule
         * @property {number|null} [cityId] OfflineStore cityId
         */

        /**
         * Constructs a new OfflineStore.
         * @memberof meta
         * @classdesc Represents an OfflineStore.
         * @implements IOfflineStore
         * @constructor
         * @param {meta.IOfflineStore=} [properties] Properties to set
         */
        function OfflineStore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OfflineStore storeId.
         * @member {number} storeId
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.storeId = 0;

        /**
         * OfflineStore title.
         * @member {string} title
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.title = "";

        /**
         * OfflineStore address.
         * @member {string} address
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.address = "";

        /**
         * OfflineStore phone.
         * @member {string} phone
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.phone = "";

        /**
         * OfflineStore geo.
         * @member {string} geo
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.geo = "";

        /**
         * OfflineStore city.
         * @member {string} city
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.city = "";

        /**
         * OfflineStore country.
         * @member {string} country
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.country = "";

        /**
         * OfflineStore active.
         * @member {boolean} active
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.active = false;

        /**
         * OfflineStore pictureUrl.
         * @member {string} pictureUrl
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.pictureUrl = "";

        /**
         * OfflineStore schedule.
         * @member {string} schedule
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.schedule = "";

        /**
         * OfflineStore cityId.
         * @member {number} cityId
         * @memberof meta.OfflineStore
         * @instance
         */
        OfflineStore.prototype.cityId = 0;

        /**
         * Creates a new OfflineStore instance using the specified properties.
         * @function create
         * @memberof meta.OfflineStore
         * @static
         * @param {meta.IOfflineStore=} [properties] Properties to set
         * @returns {meta.OfflineStore} OfflineStore instance
         */
        OfflineStore.create = function create(properties) {
            return new OfflineStore(properties);
        };

        /**
         * Encodes the specified OfflineStore message. Does not implicitly {@link meta.OfflineStore.verify|verify} messages.
         * @function encode
         * @memberof meta.OfflineStore
         * @static
         * @param {meta.IOfflineStore} message OfflineStore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineStore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.storeId != null && message.hasOwnProperty("storeId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.storeId);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.address);
            if (message.phone != null && message.hasOwnProperty("phone"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.phone);
            if (message.geo != null && message.hasOwnProperty("geo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.geo);
            if (message.city != null && message.hasOwnProperty("city"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.city);
            if (message.country != null && message.hasOwnProperty("country"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.country);
            if (message.active != null && message.hasOwnProperty("active"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.active);
            if (message.pictureUrl != null && message.hasOwnProperty("pictureUrl"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.pictureUrl);
            if (message.schedule != null && message.hasOwnProperty("schedule"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.schedule);
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.cityId);
            return writer;
        };

        /**
         * Encodes the specified OfflineStore message, length delimited. Does not implicitly {@link meta.OfflineStore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.OfflineStore
         * @static
         * @param {meta.IOfflineStore} message OfflineStore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineStore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfflineStore message from the specified reader or buffer.
         * @function decode
         * @memberof meta.OfflineStore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.OfflineStore} OfflineStore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineStore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.OfflineStore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.storeId = reader.int32();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.phone = reader.string();
                    break;
                case 5:
                    message.geo = reader.string();
                    break;
                case 6:
                    message.city = reader.string();
                    break;
                case 7:
                    message.country = reader.string();
                    break;
                case 8:
                    message.active = reader.bool();
                    break;
                case 9:
                    message.pictureUrl = reader.string();
                    break;
                case 10:
                    message.schedule = reader.string();
                    break;
                case 11:
                    message.cityId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfflineStore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.OfflineStore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.OfflineStore} OfflineStore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineStore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfflineStore message.
         * @function verify
         * @memberof meta.OfflineStore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfflineStore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.storeId != null && message.hasOwnProperty("storeId"))
                if (!$util.isInteger(message.storeId))
                    return "storeId: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.geo != null && message.hasOwnProperty("geo"))
                if (!$util.isString(message.geo))
                    return "geo: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.active != null && message.hasOwnProperty("active"))
                if (typeof message.active !== "boolean")
                    return "active: boolean expected";
            if (message.pictureUrl != null && message.hasOwnProperty("pictureUrl"))
                if (!$util.isString(message.pictureUrl))
                    return "pictureUrl: string expected";
            if (message.schedule != null && message.hasOwnProperty("schedule"))
                if (!$util.isString(message.schedule))
                    return "schedule: string expected";
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                if (!$util.isInteger(message.cityId))
                    return "cityId: integer expected";
            return null;
        };

        /**
         * Creates an OfflineStore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.OfflineStore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.OfflineStore} OfflineStore
         */
        OfflineStore.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.OfflineStore)
                return object;
            var message = new $root.meta.OfflineStore();
            if (object.storeId != null)
                message.storeId = object.storeId | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.address != null)
                message.address = String(object.address);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.geo != null)
                message.geo = String(object.geo);
            if (object.city != null)
                message.city = String(object.city);
            if (object.country != null)
                message.country = String(object.country);
            if (object.active != null)
                message.active = Boolean(object.active);
            if (object.pictureUrl != null)
                message.pictureUrl = String(object.pictureUrl);
            if (object.schedule != null)
                message.schedule = String(object.schedule);
            if (object.cityId != null)
                message.cityId = object.cityId | 0;
            return message;
        };

        /**
         * Creates a plain object from an OfflineStore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.OfflineStore
         * @static
         * @param {meta.OfflineStore} message OfflineStore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfflineStore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.storeId = 0;
                object.title = "";
                object.address = "";
                object.phone = "";
                object.geo = "";
                object.city = "";
                object.country = "";
                object.active = false;
                object.pictureUrl = "";
                object.schedule = "";
                object.cityId = 0;
            }
            if (message.storeId != null && message.hasOwnProperty("storeId"))
                object.storeId = message.storeId;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.geo != null && message.hasOwnProperty("geo"))
                object.geo = message.geo;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.active != null && message.hasOwnProperty("active"))
                object.active = message.active;
            if (message.pictureUrl != null && message.hasOwnProperty("pictureUrl"))
                object.pictureUrl = message.pictureUrl;
            if (message.schedule != null && message.hasOwnProperty("schedule"))
                object.schedule = message.schedule;
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                object.cityId = message.cityId;
            return object;
        };

        /**
         * Converts this OfflineStore to JSON.
         * @function toJSON
         * @memberof meta.OfflineStore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfflineStore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OfflineStore;
    })();

    meta.paramsOfflineStoreInfoByID = (function() {

        /**
         * Properties of a paramsOfflineStoreInfoByID.
         * @memberof meta
         * @interface IparamsOfflineStoreInfoByID
         * @property {number|null} [storeId] paramsOfflineStoreInfoByID storeId
         */

        /**
         * Constructs a new paramsOfflineStoreInfoByID.
         * @memberof meta
         * @classdesc Represents a paramsOfflineStoreInfoByID.
         * @implements IparamsOfflineStoreInfoByID
         * @constructor
         * @param {meta.IparamsOfflineStoreInfoByID=} [properties] Properties to set
         */
        function paramsOfflineStoreInfoByID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * paramsOfflineStoreInfoByID storeId.
         * @member {number} storeId
         * @memberof meta.paramsOfflineStoreInfoByID
         * @instance
         */
        paramsOfflineStoreInfoByID.prototype.storeId = 0;

        /**
         * Creates a new paramsOfflineStoreInfoByID instance using the specified properties.
         * @function create
         * @memberof meta.paramsOfflineStoreInfoByID
         * @static
         * @param {meta.IparamsOfflineStoreInfoByID=} [properties] Properties to set
         * @returns {meta.paramsOfflineStoreInfoByID} paramsOfflineStoreInfoByID instance
         */
        paramsOfflineStoreInfoByID.create = function create(properties) {
            return new paramsOfflineStoreInfoByID(properties);
        };

        /**
         * Encodes the specified paramsOfflineStoreInfoByID message. Does not implicitly {@link meta.paramsOfflineStoreInfoByID.verify|verify} messages.
         * @function encode
         * @memberof meta.paramsOfflineStoreInfoByID
         * @static
         * @param {meta.IparamsOfflineStoreInfoByID} message paramsOfflineStoreInfoByID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        paramsOfflineStoreInfoByID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.storeId != null && message.hasOwnProperty("storeId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.storeId);
            return writer;
        };

        /**
         * Encodes the specified paramsOfflineStoreInfoByID message, length delimited. Does not implicitly {@link meta.paramsOfflineStoreInfoByID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.paramsOfflineStoreInfoByID
         * @static
         * @param {meta.IparamsOfflineStoreInfoByID} message paramsOfflineStoreInfoByID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        paramsOfflineStoreInfoByID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a paramsOfflineStoreInfoByID message from the specified reader or buffer.
         * @function decode
         * @memberof meta.paramsOfflineStoreInfoByID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.paramsOfflineStoreInfoByID} paramsOfflineStoreInfoByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        paramsOfflineStoreInfoByID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.paramsOfflineStoreInfoByID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.storeId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a paramsOfflineStoreInfoByID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.paramsOfflineStoreInfoByID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.paramsOfflineStoreInfoByID} paramsOfflineStoreInfoByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        paramsOfflineStoreInfoByID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a paramsOfflineStoreInfoByID message.
         * @function verify
         * @memberof meta.paramsOfflineStoreInfoByID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        paramsOfflineStoreInfoByID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.storeId != null && message.hasOwnProperty("storeId"))
                if (!$util.isInteger(message.storeId))
                    return "storeId: integer expected";
            return null;
        };

        /**
         * Creates a paramsOfflineStoreInfoByID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.paramsOfflineStoreInfoByID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.paramsOfflineStoreInfoByID} paramsOfflineStoreInfoByID
         */
        paramsOfflineStoreInfoByID.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.paramsOfflineStoreInfoByID)
                return object;
            var message = new $root.meta.paramsOfflineStoreInfoByID();
            if (object.storeId != null)
                message.storeId = object.storeId | 0;
            return message;
        };

        /**
         * Creates a plain object from a paramsOfflineStoreInfoByID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.paramsOfflineStoreInfoByID
         * @static
         * @param {meta.paramsOfflineStoreInfoByID} message paramsOfflineStoreInfoByID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        paramsOfflineStoreInfoByID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.storeId = 0;
            if (message.storeId != null && message.hasOwnProperty("storeId"))
                object.storeId = message.storeId;
            return object;
        };

        /**
         * Converts this paramsOfflineStoreInfoByID to JSON.
         * @function toJSON
         * @memberof meta.paramsOfflineStoreInfoByID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        paramsOfflineStoreInfoByID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return paramsOfflineStoreInfoByID;
    })();

    meta.ResponseOfflineStoreInfoByID = (function() {

        /**
         * Properties of a ResponseOfflineStoreInfoByID.
         * @memberof meta
         * @interface IResponseOfflineStoreInfoByID
         * @property {meta.IOfflineStore|null} [store] ResponseOfflineStoreInfoByID store
         */

        /**
         * Constructs a new ResponseOfflineStoreInfoByID.
         * @memberof meta
         * @classdesc Represents a ResponseOfflineStoreInfoByID.
         * @implements IResponseOfflineStoreInfoByID
         * @constructor
         * @param {meta.IResponseOfflineStoreInfoByID=} [properties] Properties to set
         */
        function ResponseOfflineStoreInfoByID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseOfflineStoreInfoByID store.
         * @member {meta.IOfflineStore|null|undefined} store
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @instance
         */
        ResponseOfflineStoreInfoByID.prototype.store = null;

        /**
         * Creates a new ResponseOfflineStoreInfoByID instance using the specified properties.
         * @function create
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @static
         * @param {meta.IResponseOfflineStoreInfoByID=} [properties] Properties to set
         * @returns {meta.ResponseOfflineStoreInfoByID} ResponseOfflineStoreInfoByID instance
         */
        ResponseOfflineStoreInfoByID.create = function create(properties) {
            return new ResponseOfflineStoreInfoByID(properties);
        };

        /**
         * Encodes the specified ResponseOfflineStoreInfoByID message. Does not implicitly {@link meta.ResponseOfflineStoreInfoByID.verify|verify} messages.
         * @function encode
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @static
         * @param {meta.IResponseOfflineStoreInfoByID} message ResponseOfflineStoreInfoByID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOfflineStoreInfoByID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.store != null && message.hasOwnProperty("store"))
                $root.meta.OfflineStore.encode(message.store, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseOfflineStoreInfoByID message, length delimited. Does not implicitly {@link meta.ResponseOfflineStoreInfoByID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @static
         * @param {meta.IResponseOfflineStoreInfoByID} message ResponseOfflineStoreInfoByID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOfflineStoreInfoByID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseOfflineStoreInfoByID message from the specified reader or buffer.
         * @function decode
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.ResponseOfflineStoreInfoByID} ResponseOfflineStoreInfoByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOfflineStoreInfoByID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.ResponseOfflineStoreInfoByID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.store = $root.meta.OfflineStore.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseOfflineStoreInfoByID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.ResponseOfflineStoreInfoByID} ResponseOfflineStoreInfoByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOfflineStoreInfoByID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseOfflineStoreInfoByID message.
         * @function verify
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseOfflineStoreInfoByID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.store != null && message.hasOwnProperty("store")) {
                var error = $root.meta.OfflineStore.verify(message.store);
                if (error)
                    return "store." + error;
            }
            return null;
        };

        /**
         * Creates a ResponseOfflineStoreInfoByID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.ResponseOfflineStoreInfoByID} ResponseOfflineStoreInfoByID
         */
        ResponseOfflineStoreInfoByID.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.ResponseOfflineStoreInfoByID)
                return object;
            var message = new $root.meta.ResponseOfflineStoreInfoByID();
            if (object.store != null) {
                if (typeof object.store !== "object")
                    throw TypeError(".meta.ResponseOfflineStoreInfoByID.store: object expected");
                message.store = $root.meta.OfflineStore.fromObject(object.store);
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseOfflineStoreInfoByID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @static
         * @param {meta.ResponseOfflineStoreInfoByID} message ResponseOfflineStoreInfoByID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseOfflineStoreInfoByID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.store = null;
            if (message.store != null && message.hasOwnProperty("store"))
                object.store = $root.meta.OfflineStore.toObject(message.store, options);
            return object;
        };

        /**
         * Converts this ResponseOfflineStoreInfoByID to JSON.
         * @function toJSON
         * @memberof meta.ResponseOfflineStoreInfoByID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseOfflineStoreInfoByID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseOfflineStoreInfoByID;
    })();

    meta.ResponseMobileAPIContacts = (function() {

        /**
         * Properties of a ResponseMobileAPIContacts.
         * @memberof meta
         * @interface IResponseMobileAPIContacts
         * @property {Array.<meta.IContact>|null} [contacts] ResponseMobileAPIContacts contacts
         */

        /**
         * Constructs a new ResponseMobileAPIContacts.
         * @memberof meta
         * @classdesc Represents a ResponseMobileAPIContacts.
         * @implements IResponseMobileAPIContacts
         * @constructor
         * @param {meta.IResponseMobileAPIContacts=} [properties] Properties to set
         */
        function ResponseMobileAPIContacts(properties) {
            this.contacts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseMobileAPIContacts contacts.
         * @member {Array.<meta.IContact>} contacts
         * @memberof meta.ResponseMobileAPIContacts
         * @instance
         */
        ResponseMobileAPIContacts.prototype.contacts = $util.emptyArray;

        /**
         * Creates a new ResponseMobileAPIContacts instance using the specified properties.
         * @function create
         * @memberof meta.ResponseMobileAPIContacts
         * @static
         * @param {meta.IResponseMobileAPIContacts=} [properties] Properties to set
         * @returns {meta.ResponseMobileAPIContacts} ResponseMobileAPIContacts instance
         */
        ResponseMobileAPIContacts.create = function create(properties) {
            return new ResponseMobileAPIContacts(properties);
        };

        /**
         * Encodes the specified ResponseMobileAPIContacts message. Does not implicitly {@link meta.ResponseMobileAPIContacts.verify|verify} messages.
         * @function encode
         * @memberof meta.ResponseMobileAPIContacts
         * @static
         * @param {meta.IResponseMobileAPIContacts} message ResponseMobileAPIContacts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseMobileAPIContacts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contacts != null && message.contacts.length)
                for (var i = 0; i < message.contacts.length; ++i)
                    $root.meta.Contact.encode(message.contacts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseMobileAPIContacts message, length delimited. Does not implicitly {@link meta.ResponseMobileAPIContacts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.ResponseMobileAPIContacts
         * @static
         * @param {meta.IResponseMobileAPIContacts} message ResponseMobileAPIContacts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseMobileAPIContacts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseMobileAPIContacts message from the specified reader or buffer.
         * @function decode
         * @memberof meta.ResponseMobileAPIContacts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.ResponseMobileAPIContacts} ResponseMobileAPIContacts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseMobileAPIContacts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.ResponseMobileAPIContacts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.contacts && message.contacts.length))
                        message.contacts = [];
                    message.contacts.push($root.meta.Contact.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseMobileAPIContacts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.ResponseMobileAPIContacts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.ResponseMobileAPIContacts} ResponseMobileAPIContacts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseMobileAPIContacts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseMobileAPIContacts message.
         * @function verify
         * @memberof meta.ResponseMobileAPIContacts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseMobileAPIContacts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contacts != null && message.hasOwnProperty("contacts")) {
                if (!Array.isArray(message.contacts))
                    return "contacts: array expected";
                for (var i = 0; i < message.contacts.length; ++i) {
                    var error = $root.meta.Contact.verify(message.contacts[i]);
                    if (error)
                        return "contacts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResponseMobileAPIContacts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.ResponseMobileAPIContacts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.ResponseMobileAPIContacts} ResponseMobileAPIContacts
         */
        ResponseMobileAPIContacts.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.ResponseMobileAPIContacts)
                return object;
            var message = new $root.meta.ResponseMobileAPIContacts();
            if (object.contacts) {
                if (!Array.isArray(object.contacts))
                    throw TypeError(".meta.ResponseMobileAPIContacts.contacts: array expected");
                message.contacts = [];
                for (var i = 0; i < object.contacts.length; ++i) {
                    if (typeof object.contacts[i] !== "object")
                        throw TypeError(".meta.ResponseMobileAPIContacts.contacts: object expected");
                    message.contacts[i] = $root.meta.Contact.fromObject(object.contacts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseMobileAPIContacts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.ResponseMobileAPIContacts
         * @static
         * @param {meta.ResponseMobileAPIContacts} message ResponseMobileAPIContacts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseMobileAPIContacts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.contacts = [];
            if (message.contacts && message.contacts.length) {
                object.contacts = [];
                for (var j = 0; j < message.contacts.length; ++j)
                    object.contacts[j] = $root.meta.Contact.toObject(message.contacts[j], options);
            }
            return object;
        };

        /**
         * Converts this ResponseMobileAPIContacts to JSON.
         * @function toJSON
         * @memberof meta.ResponseMobileAPIContacts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseMobileAPIContacts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseMobileAPIContacts;
    })();

    meta.Contact = (function() {

        /**
         * Properties of a Contact.
         * @memberof meta
         * @interface IContact
         * @property {string|null} [title] Contact title
         * @property {string|null} [subtitle] Contact subtitle
         * @property {string|null} [text] Contact text
         */

        /**
         * Constructs a new Contact.
         * @memberof meta
         * @classdesc Represents a Contact.
         * @implements IContact
         * @constructor
         * @param {meta.IContact=} [properties] Properties to set
         */
        function Contact(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Contact title.
         * @member {string} title
         * @memberof meta.Contact
         * @instance
         */
        Contact.prototype.title = "";

        /**
         * Contact subtitle.
         * @member {string} subtitle
         * @memberof meta.Contact
         * @instance
         */
        Contact.prototype.subtitle = "";

        /**
         * Contact text.
         * @member {string} text
         * @memberof meta.Contact
         * @instance
         */
        Contact.prototype.text = "";

        /**
         * Creates a new Contact instance using the specified properties.
         * @function create
         * @memberof meta.Contact
         * @static
         * @param {meta.IContact=} [properties] Properties to set
         * @returns {meta.Contact} Contact instance
         */
        Contact.create = function create(properties) {
            return new Contact(properties);
        };

        /**
         * Encodes the specified Contact message. Does not implicitly {@link meta.Contact.verify|verify} messages.
         * @function encode
         * @memberof meta.Contact
         * @static
         * @param {meta.IContact} message Contact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contact.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.subtitle != null && message.hasOwnProperty("subtitle"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.subtitle);
            if (message.text != null && message.hasOwnProperty("text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link meta.Contact.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.Contact
         * @static
         * @param {meta.IContact} message Contact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contact.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @function decode
         * @memberof meta.Contact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.Contact} Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contact.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.Contact();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.subtitle = reader.string();
                    break;
                case 3:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.Contact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.Contact} Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contact.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Contact message.
         * @function verify
         * @memberof meta.Contact
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Contact.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.subtitle != null && message.hasOwnProperty("subtitle"))
                if (!$util.isString(message.subtitle))
                    return "subtitle: string expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.Contact
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.Contact} Contact
         */
        Contact.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.Contact)
                return object;
            var message = new $root.meta.Contact();
            if (object.title != null)
                message.title = String(object.title);
            if (object.subtitle != null)
                message.subtitle = String(object.subtitle);
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.Contact
         * @static
         * @param {meta.Contact} message Contact
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Contact.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.title = "";
                object.subtitle = "";
                object.text = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.subtitle != null && message.hasOwnProperty("subtitle"))
                object.subtitle = message.subtitle;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this Contact to JSON.
         * @function toJSON
         * @memberof meta.Contact
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Contact.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Contact;
    })();

    meta.ResponseMobileApiAbout = (function() {

        /**
         * Properties of a ResponseMobileApiAbout.
         * @memberof meta
         * @interface IResponseMobileApiAbout
         * @property {string|null} [about] ResponseMobileApiAbout about
         * @property {string|null} [mission] ResponseMobileApiAbout mission
         * @property {Array.<meta.IBlock>|null} [blocks] ResponseMobileApiAbout blocks
         * @property {string|null} [imageUrl] ResponseMobileApiAbout imageUrl
         */

        /**
         * Constructs a new ResponseMobileApiAbout.
         * @memberof meta
         * @classdesc Represents a ResponseMobileApiAbout.
         * @implements IResponseMobileApiAbout
         * @constructor
         * @param {meta.IResponseMobileApiAbout=} [properties] Properties to set
         */
        function ResponseMobileApiAbout(properties) {
            this.blocks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseMobileApiAbout about.
         * @member {string} about
         * @memberof meta.ResponseMobileApiAbout
         * @instance
         */
        ResponseMobileApiAbout.prototype.about = "";

        /**
         * ResponseMobileApiAbout mission.
         * @member {string} mission
         * @memberof meta.ResponseMobileApiAbout
         * @instance
         */
        ResponseMobileApiAbout.prototype.mission = "";

        /**
         * ResponseMobileApiAbout blocks.
         * @member {Array.<meta.IBlock>} blocks
         * @memberof meta.ResponseMobileApiAbout
         * @instance
         */
        ResponseMobileApiAbout.prototype.blocks = $util.emptyArray;

        /**
         * ResponseMobileApiAbout imageUrl.
         * @member {string} imageUrl
         * @memberof meta.ResponseMobileApiAbout
         * @instance
         */
        ResponseMobileApiAbout.prototype.imageUrl = "";

        /**
         * Creates a new ResponseMobileApiAbout instance using the specified properties.
         * @function create
         * @memberof meta.ResponseMobileApiAbout
         * @static
         * @param {meta.IResponseMobileApiAbout=} [properties] Properties to set
         * @returns {meta.ResponseMobileApiAbout} ResponseMobileApiAbout instance
         */
        ResponseMobileApiAbout.create = function create(properties) {
            return new ResponseMobileApiAbout(properties);
        };

        /**
         * Encodes the specified ResponseMobileApiAbout message. Does not implicitly {@link meta.ResponseMobileApiAbout.verify|verify} messages.
         * @function encode
         * @memberof meta.ResponseMobileApiAbout
         * @static
         * @param {meta.IResponseMobileApiAbout} message ResponseMobileApiAbout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseMobileApiAbout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.about != null && message.hasOwnProperty("about"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.about);
            if (message.mission != null && message.hasOwnProperty("mission"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mission);
            if (message.blocks != null && message.blocks.length)
                for (var i = 0; i < message.blocks.length; ++i)
                    $root.meta.Block.encode(message.blocks[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.imageUrl);
            return writer;
        };

        /**
         * Encodes the specified ResponseMobileApiAbout message, length delimited. Does not implicitly {@link meta.ResponseMobileApiAbout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.ResponseMobileApiAbout
         * @static
         * @param {meta.IResponseMobileApiAbout} message ResponseMobileApiAbout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseMobileApiAbout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseMobileApiAbout message from the specified reader or buffer.
         * @function decode
         * @memberof meta.ResponseMobileApiAbout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.ResponseMobileApiAbout} ResponseMobileApiAbout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseMobileApiAbout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.ResponseMobileApiAbout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.about = reader.string();
                    break;
                case 2:
                    message.mission = reader.string();
                    break;
                case 3:
                    if (!(message.blocks && message.blocks.length))
                        message.blocks = [];
                    message.blocks.push($root.meta.Block.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.imageUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseMobileApiAbout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.ResponseMobileApiAbout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.ResponseMobileApiAbout} ResponseMobileApiAbout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseMobileApiAbout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseMobileApiAbout message.
         * @function verify
         * @memberof meta.ResponseMobileApiAbout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseMobileApiAbout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.about != null && message.hasOwnProperty("about"))
                if (!$util.isString(message.about))
                    return "about: string expected";
            if (message.mission != null && message.hasOwnProperty("mission"))
                if (!$util.isString(message.mission))
                    return "mission: string expected";
            if (message.blocks != null && message.hasOwnProperty("blocks")) {
                if (!Array.isArray(message.blocks))
                    return "blocks: array expected";
                for (var i = 0; i < message.blocks.length; ++i) {
                    var error = $root.meta.Block.verify(message.blocks[i]);
                    if (error)
                        return "blocks." + error;
                }
            }
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            return null;
        };

        /**
         * Creates a ResponseMobileApiAbout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.ResponseMobileApiAbout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.ResponseMobileApiAbout} ResponseMobileApiAbout
         */
        ResponseMobileApiAbout.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.ResponseMobileApiAbout)
                return object;
            var message = new $root.meta.ResponseMobileApiAbout();
            if (object.about != null)
                message.about = String(object.about);
            if (object.mission != null)
                message.mission = String(object.mission);
            if (object.blocks) {
                if (!Array.isArray(object.blocks))
                    throw TypeError(".meta.ResponseMobileApiAbout.blocks: array expected");
                message.blocks = [];
                for (var i = 0; i < object.blocks.length; ++i) {
                    if (typeof object.blocks[i] !== "object")
                        throw TypeError(".meta.ResponseMobileApiAbout.blocks: object expected");
                    message.blocks[i] = $root.meta.Block.fromObject(object.blocks[i]);
                }
            }
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            return message;
        };

        /**
         * Creates a plain object from a ResponseMobileApiAbout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.ResponseMobileApiAbout
         * @static
         * @param {meta.ResponseMobileApiAbout} message ResponseMobileApiAbout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseMobileApiAbout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.blocks = [];
            if (options.defaults) {
                object.about = "";
                object.mission = "";
                object.imageUrl = "";
            }
            if (message.about != null && message.hasOwnProperty("about"))
                object.about = message.about;
            if (message.mission != null && message.hasOwnProperty("mission"))
                object.mission = message.mission;
            if (message.blocks && message.blocks.length) {
                object.blocks = [];
                for (var j = 0; j < message.blocks.length; ++j)
                    object.blocks[j] = $root.meta.Block.toObject(message.blocks[j], options);
            }
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            return object;
        };

        /**
         * Converts this ResponseMobileApiAbout to JSON.
         * @function toJSON
         * @memberof meta.ResponseMobileApiAbout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseMobileApiAbout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseMobileApiAbout;
    })();

    meta.Block = (function() {

        /**
         * Properties of a Block.
         * @memberof meta
         * @interface IBlock
         * @property {string|null} [title] Block title
         * @property {string|null} [value] Block value
         */

        /**
         * Constructs a new Block.
         * @memberof meta
         * @classdesc Represents a Block.
         * @implements IBlock
         * @constructor
         * @param {meta.IBlock=} [properties] Properties to set
         */
        function Block(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Block title.
         * @member {string} title
         * @memberof meta.Block
         * @instance
         */
        Block.prototype.title = "";

        /**
         * Block value.
         * @member {string} value
         * @memberof meta.Block
         * @instance
         */
        Block.prototype.value = "";

        /**
         * Creates a new Block instance using the specified properties.
         * @function create
         * @memberof meta.Block
         * @static
         * @param {meta.IBlock=} [properties] Properties to set
         * @returns {meta.Block} Block instance
         */
        Block.create = function create(properties) {
            return new Block(properties);
        };

        /**
         * Encodes the specified Block message. Does not implicitly {@link meta.Block.verify|verify} messages.
         * @function encode
         * @memberof meta.Block
         * @static
         * @param {meta.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link meta.Block.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.Block
         * @static
         * @param {meta.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @function decode
         * @memberof meta.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.Block();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Block message.
         * @function verify
         * @memberof meta.Block
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Block.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.Block
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.Block} Block
         */
        Block.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.Block)
                return object;
            var message = new $root.meta.Block();
            if (object.title != null)
                message.title = String(object.title);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.Block
         * @static
         * @param {meta.Block} message Block
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Block.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.title = "";
                object.value = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Block to JSON.
         * @function toJSON
         * @memberof meta.Block
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Block.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Block;
    })();

    meta.ResponseFaq = (function() {

        /**
         * Properties of a ResponseFaq.
         * @memberof meta
         * @interface IResponseFaq
         * @property {Array.<meta.IBlockFaq>|null} [result] ResponseFaq result
         */

        /**
         * Constructs a new ResponseFaq.
         * @memberof meta
         * @classdesc Represents a ResponseFaq.
         * @implements IResponseFaq
         * @constructor
         * @param {meta.IResponseFaq=} [properties] Properties to set
         */
        function ResponseFaq(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseFaq result.
         * @member {Array.<meta.IBlockFaq>} result
         * @memberof meta.ResponseFaq
         * @instance
         */
        ResponseFaq.prototype.result = $util.emptyArray;

        /**
         * Creates a new ResponseFaq instance using the specified properties.
         * @function create
         * @memberof meta.ResponseFaq
         * @static
         * @param {meta.IResponseFaq=} [properties] Properties to set
         * @returns {meta.ResponseFaq} ResponseFaq instance
         */
        ResponseFaq.create = function create(properties) {
            return new ResponseFaq(properties);
        };

        /**
         * Encodes the specified ResponseFaq message. Does not implicitly {@link meta.ResponseFaq.verify|verify} messages.
         * @function encode
         * @memberof meta.ResponseFaq
         * @static
         * @param {meta.IResponseFaq} message ResponseFaq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseFaq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.result.length)
                for (var i = 0; i < message.result.length; ++i)
                    $root.meta.BlockFaq.encode(message.result[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseFaq message, length delimited. Does not implicitly {@link meta.ResponseFaq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.ResponseFaq
         * @static
         * @param {meta.IResponseFaq} message ResponseFaq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseFaq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseFaq message from the specified reader or buffer.
         * @function decode
         * @memberof meta.ResponseFaq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.ResponseFaq} ResponseFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseFaq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.ResponseFaq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.meta.BlockFaq.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseFaq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.ResponseFaq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.ResponseFaq} ResponseFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseFaq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseFaq message.
         * @function verify
         * @memberof meta.ResponseFaq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseFaq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                if (!Array.isArray(message.result))
                    return "result: array expected";
                for (var i = 0; i < message.result.length; ++i) {
                    var error = $root.meta.BlockFaq.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResponseFaq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.ResponseFaq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.ResponseFaq} ResponseFaq
         */
        ResponseFaq.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.ResponseFaq)
                return object;
            var message = new $root.meta.ResponseFaq();
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".meta.ResponseFaq.result: array expected");
                message.result = [];
                for (var i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".meta.ResponseFaq.result: object expected");
                    message.result[i] = $root.meta.BlockFaq.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseFaq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.ResponseFaq
         * @static
         * @param {meta.ResponseFaq} message ResponseFaq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseFaq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.result = [];
            if (message.result && message.result.length) {
                object.result = [];
                for (var j = 0; j < message.result.length; ++j)
                    object.result[j] = $root.meta.BlockFaq.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this ResponseFaq to JSON.
         * @function toJSON
         * @memberof meta.ResponseFaq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseFaq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseFaq;
    })();

    meta.BlockFaq = (function() {

        /**
         * Properties of a BlockFaq.
         * @memberof meta
         * @interface IBlockFaq
         * @property {string|null} [title] BlockFaq title
         * @property {Array.<meta.ITextFaq>|null} [context] BlockFaq context
         */

        /**
         * Constructs a new BlockFaq.
         * @memberof meta
         * @classdesc Represents a BlockFaq.
         * @implements IBlockFaq
         * @constructor
         * @param {meta.IBlockFaq=} [properties] Properties to set
         */
        function BlockFaq(properties) {
            this.context = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockFaq title.
         * @member {string} title
         * @memberof meta.BlockFaq
         * @instance
         */
        BlockFaq.prototype.title = "";

        /**
         * BlockFaq context.
         * @member {Array.<meta.ITextFaq>} context
         * @memberof meta.BlockFaq
         * @instance
         */
        BlockFaq.prototype.context = $util.emptyArray;

        /**
         * Creates a new BlockFaq instance using the specified properties.
         * @function create
         * @memberof meta.BlockFaq
         * @static
         * @param {meta.IBlockFaq=} [properties] Properties to set
         * @returns {meta.BlockFaq} BlockFaq instance
         */
        BlockFaq.create = function create(properties) {
            return new BlockFaq(properties);
        };

        /**
         * Encodes the specified BlockFaq message. Does not implicitly {@link meta.BlockFaq.verify|verify} messages.
         * @function encode
         * @memberof meta.BlockFaq
         * @static
         * @param {meta.IBlockFaq} message BlockFaq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockFaq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.context != null && message.context.length)
                for (var i = 0; i < message.context.length; ++i)
                    $root.meta.TextFaq.encode(message.context[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BlockFaq message, length delimited. Does not implicitly {@link meta.BlockFaq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.BlockFaq
         * @static
         * @param {meta.IBlockFaq} message BlockFaq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockFaq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockFaq message from the specified reader or buffer.
         * @function decode
         * @memberof meta.BlockFaq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.BlockFaq} BlockFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockFaq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.BlockFaq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    if (!(message.context && message.context.length))
                        message.context = [];
                    message.context.push($root.meta.TextFaq.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BlockFaq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.BlockFaq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.BlockFaq} BlockFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockFaq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockFaq message.
         * @function verify
         * @memberof meta.BlockFaq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BlockFaq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.context != null && message.hasOwnProperty("context")) {
                if (!Array.isArray(message.context))
                    return "context: array expected";
                for (var i = 0; i < message.context.length; ++i) {
                    var error = $root.meta.TextFaq.verify(message.context[i]);
                    if (error)
                        return "context." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BlockFaq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.BlockFaq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.BlockFaq} BlockFaq
         */
        BlockFaq.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.BlockFaq)
                return object;
            var message = new $root.meta.BlockFaq();
            if (object.title != null)
                message.title = String(object.title);
            if (object.context) {
                if (!Array.isArray(object.context))
                    throw TypeError(".meta.BlockFaq.context: array expected");
                message.context = [];
                for (var i = 0; i < object.context.length; ++i) {
                    if (typeof object.context[i] !== "object")
                        throw TypeError(".meta.BlockFaq.context: object expected");
                    message.context[i] = $root.meta.TextFaq.fromObject(object.context[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BlockFaq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.BlockFaq
         * @static
         * @param {meta.BlockFaq} message BlockFaq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockFaq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.context = [];
            if (options.defaults)
                object.title = "";
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.context && message.context.length) {
                object.context = [];
                for (var j = 0; j < message.context.length; ++j)
                    object.context[j] = $root.meta.TextFaq.toObject(message.context[j], options);
            }
            return object;
        };

        /**
         * Converts this BlockFaq to JSON.
         * @function toJSON
         * @memberof meta.BlockFaq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BlockFaq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BlockFaq;
    })();

    meta.TextFaq = (function() {

        /**
         * Properties of a TextFaq.
         * @memberof meta
         * @interface ITextFaq
         * @property {string|null} [title] TextFaq title
         * @property {string|null} [answer] TextFaq answer
         */

        /**
         * Constructs a new TextFaq.
         * @memberof meta
         * @classdesc Represents a TextFaq.
         * @implements ITextFaq
         * @constructor
         * @param {meta.ITextFaq=} [properties] Properties to set
         */
        function TextFaq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TextFaq title.
         * @member {string} title
         * @memberof meta.TextFaq
         * @instance
         */
        TextFaq.prototype.title = "";

        /**
         * TextFaq answer.
         * @member {string} answer
         * @memberof meta.TextFaq
         * @instance
         */
        TextFaq.prototype.answer = "";

        /**
         * Creates a new TextFaq instance using the specified properties.
         * @function create
         * @memberof meta.TextFaq
         * @static
         * @param {meta.ITextFaq=} [properties] Properties to set
         * @returns {meta.TextFaq} TextFaq instance
         */
        TextFaq.create = function create(properties) {
            return new TextFaq(properties);
        };

        /**
         * Encodes the specified TextFaq message. Does not implicitly {@link meta.TextFaq.verify|verify} messages.
         * @function encode
         * @memberof meta.TextFaq
         * @static
         * @param {meta.ITextFaq} message TextFaq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextFaq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.answer != null && message.hasOwnProperty("answer"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.answer);
            return writer;
        };

        /**
         * Encodes the specified TextFaq message, length delimited. Does not implicitly {@link meta.TextFaq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.TextFaq
         * @static
         * @param {meta.ITextFaq} message TextFaq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextFaq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TextFaq message from the specified reader or buffer.
         * @function decode
         * @memberof meta.TextFaq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.TextFaq} TextFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextFaq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.TextFaq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.answer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TextFaq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.TextFaq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.TextFaq} TextFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextFaq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TextFaq message.
         * @function verify
         * @memberof meta.TextFaq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TextFaq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.answer != null && message.hasOwnProperty("answer"))
                if (!$util.isString(message.answer))
                    return "answer: string expected";
            return null;
        };

        /**
         * Creates a TextFaq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.TextFaq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.TextFaq} TextFaq
         */
        TextFaq.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.TextFaq)
                return object;
            var message = new $root.meta.TextFaq();
            if (object.title != null)
                message.title = String(object.title);
            if (object.answer != null)
                message.answer = String(object.answer);
            return message;
        };

        /**
         * Creates a plain object from a TextFaq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.TextFaq
         * @static
         * @param {meta.TextFaq} message TextFaq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TextFaq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.title = "";
                object.answer = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.answer != null && message.hasOwnProperty("answer"))
                object.answer = message.answer;
            return object;
        };

        /**
         * Converts this TextFaq to JSON.
         * @function toJSON
         * @memberof meta.TextFaq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TextFaq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TextFaq;
    })();

    meta.paramsStoresCities = (function() {

        /**
         * Properties of a paramsStoresCities.
         * @memberof meta
         * @interface IparamsStoresCities
         * @property {number|null} [offset] paramsStoresCities offset
         * @property {number|null} [limit] paramsStoresCities limit
         */

        /**
         * Constructs a new paramsStoresCities.
         * @memberof meta
         * @classdesc Represents a paramsStoresCities.
         * @implements IparamsStoresCities
         * @constructor
         * @param {meta.IparamsStoresCities=} [properties] Properties to set
         */
        function paramsStoresCities(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * paramsStoresCities offset.
         * @member {number} offset
         * @memberof meta.paramsStoresCities
         * @instance
         */
        paramsStoresCities.prototype.offset = 0;

        /**
         * paramsStoresCities limit.
         * @member {number} limit
         * @memberof meta.paramsStoresCities
         * @instance
         */
        paramsStoresCities.prototype.limit = 0;

        /**
         * Creates a new paramsStoresCities instance using the specified properties.
         * @function create
         * @memberof meta.paramsStoresCities
         * @static
         * @param {meta.IparamsStoresCities=} [properties] Properties to set
         * @returns {meta.paramsStoresCities} paramsStoresCities instance
         */
        paramsStoresCities.create = function create(properties) {
            return new paramsStoresCities(properties);
        };

        /**
         * Encodes the specified paramsStoresCities message. Does not implicitly {@link meta.paramsStoresCities.verify|verify} messages.
         * @function encode
         * @memberof meta.paramsStoresCities
         * @static
         * @param {meta.IparamsStoresCities} message paramsStoresCities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        paramsStoresCities.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.offset != null && message.hasOwnProperty("offset"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.offset);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified paramsStoresCities message, length delimited. Does not implicitly {@link meta.paramsStoresCities.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.paramsStoresCities
         * @static
         * @param {meta.IparamsStoresCities} message paramsStoresCities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        paramsStoresCities.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a paramsStoresCities message from the specified reader or buffer.
         * @function decode
         * @memberof meta.paramsStoresCities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.paramsStoresCities} paramsStoresCities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        paramsStoresCities.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.paramsStoresCities();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.offset = reader.int32();
                    break;
                case 2:
                    message.limit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a paramsStoresCities message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.paramsStoresCities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.paramsStoresCities} paramsStoresCities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        paramsStoresCities.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a paramsStoresCities message.
         * @function verify
         * @memberof meta.paramsStoresCities
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        paramsStoresCities.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a paramsStoresCities message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.paramsStoresCities
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.paramsStoresCities} paramsStoresCities
         */
        paramsStoresCities.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.paramsStoresCities)
                return object;
            var message = new $root.meta.paramsStoresCities();
            if (object.offset != null)
                message.offset = object.offset | 0;
            if (object.limit != null)
                message.limit = object.limit | 0;
            return message;
        };

        /**
         * Creates a plain object from a paramsStoresCities message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.paramsStoresCities
         * @static
         * @param {meta.paramsStoresCities} message paramsStoresCities
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        paramsStoresCities.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.offset = 0;
                object.limit = 0;
            }
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this paramsStoresCities to JSON.
         * @function toJSON
         * @memberof meta.paramsStoresCities
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        paramsStoresCities.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return paramsStoresCities;
    })();

    meta.City = (function() {

        /**
         * Properties of a City.
         * @memberof meta
         * @interface ICity
         * @property {number|null} [cityId] City cityId
         * @property {string|null} [title] City title
         */

        /**
         * Constructs a new City.
         * @memberof meta
         * @classdesc Represents a City.
         * @implements ICity
         * @constructor
         * @param {meta.ICity=} [properties] Properties to set
         */
        function City(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * City cityId.
         * @member {number} cityId
         * @memberof meta.City
         * @instance
         */
        City.prototype.cityId = 0;

        /**
         * City title.
         * @member {string} title
         * @memberof meta.City
         * @instance
         */
        City.prototype.title = "";

        /**
         * Creates a new City instance using the specified properties.
         * @function create
         * @memberof meta.City
         * @static
         * @param {meta.ICity=} [properties] Properties to set
         * @returns {meta.City} City instance
         */
        City.create = function create(properties) {
            return new City(properties);
        };

        /**
         * Encodes the specified City message. Does not implicitly {@link meta.City.verify|verify} messages.
         * @function encode
         * @memberof meta.City
         * @static
         * @param {meta.ICity} message City message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        City.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cityId);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            return writer;
        };

        /**
         * Encodes the specified City message, length delimited. Does not implicitly {@link meta.City.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.City
         * @static
         * @param {meta.ICity} message City message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        City.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a City message from the specified reader or buffer.
         * @function decode
         * @memberof meta.City
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.City} City
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        City.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.City();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cityId = reader.int32();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a City message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.City
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.City} City
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        City.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a City message.
         * @function verify
         * @memberof meta.City
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        City.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                if (!$util.isInteger(message.cityId))
                    return "cityId: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            return null;
        };

        /**
         * Creates a City message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.City
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.City} City
         */
        City.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.City)
                return object;
            var message = new $root.meta.City();
            if (object.cityId != null)
                message.cityId = object.cityId | 0;
            if (object.title != null)
                message.title = String(object.title);
            return message;
        };

        /**
         * Creates a plain object from a City message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.City
         * @static
         * @param {meta.City} message City
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        City.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cityId = 0;
                object.title = "";
            }
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                object.cityId = message.cityId;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            return object;
        };

        /**
         * Converts this City to JSON.
         * @function toJSON
         * @memberof meta.City
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        City.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return City;
    })();

    meta.ResponseStoresCities = (function() {

        /**
         * Properties of a ResponseStoresCities.
         * @memberof meta
         * @interface IResponseStoresCities
         * @property {Array.<meta.ICity>|null} [cities] ResponseStoresCities cities
         */

        /**
         * Constructs a new ResponseStoresCities.
         * @memberof meta
         * @classdesc Represents a ResponseStoresCities.
         * @implements IResponseStoresCities
         * @constructor
         * @param {meta.IResponseStoresCities=} [properties] Properties to set
         */
        function ResponseStoresCities(properties) {
            this.cities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseStoresCities cities.
         * @member {Array.<meta.ICity>} cities
         * @memberof meta.ResponseStoresCities
         * @instance
         */
        ResponseStoresCities.prototype.cities = $util.emptyArray;

        /**
         * Creates a new ResponseStoresCities instance using the specified properties.
         * @function create
         * @memberof meta.ResponseStoresCities
         * @static
         * @param {meta.IResponseStoresCities=} [properties] Properties to set
         * @returns {meta.ResponseStoresCities} ResponseStoresCities instance
         */
        ResponseStoresCities.create = function create(properties) {
            return new ResponseStoresCities(properties);
        };

        /**
         * Encodes the specified ResponseStoresCities message. Does not implicitly {@link meta.ResponseStoresCities.verify|verify} messages.
         * @function encode
         * @memberof meta.ResponseStoresCities
         * @static
         * @param {meta.IResponseStoresCities} message ResponseStoresCities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseStoresCities.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cities != null && message.cities.length)
                for (var i = 0; i < message.cities.length; ++i)
                    $root.meta.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseStoresCities message, length delimited. Does not implicitly {@link meta.ResponseStoresCities.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.ResponseStoresCities
         * @static
         * @param {meta.IResponseStoresCities} message ResponseStoresCities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseStoresCities.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseStoresCities message from the specified reader or buffer.
         * @function decode
         * @memberof meta.ResponseStoresCities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.ResponseStoresCities} ResponseStoresCities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseStoresCities.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.ResponseStoresCities();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cities && message.cities.length))
                        message.cities = [];
                    message.cities.push($root.meta.City.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseStoresCities message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.ResponseStoresCities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.ResponseStoresCities} ResponseStoresCities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseStoresCities.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseStoresCities message.
         * @function verify
         * @memberof meta.ResponseStoresCities
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseStoresCities.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cities != null && message.hasOwnProperty("cities")) {
                if (!Array.isArray(message.cities))
                    return "cities: array expected";
                for (var i = 0; i < message.cities.length; ++i) {
                    var error = $root.meta.City.verify(message.cities[i]);
                    if (error)
                        return "cities." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResponseStoresCities message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.ResponseStoresCities
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.ResponseStoresCities} ResponseStoresCities
         */
        ResponseStoresCities.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.ResponseStoresCities)
                return object;
            var message = new $root.meta.ResponseStoresCities();
            if (object.cities) {
                if (!Array.isArray(object.cities))
                    throw TypeError(".meta.ResponseStoresCities.cities: array expected");
                message.cities = [];
                for (var i = 0; i < object.cities.length; ++i) {
                    if (typeof object.cities[i] !== "object")
                        throw TypeError(".meta.ResponseStoresCities.cities: object expected");
                    message.cities[i] = $root.meta.City.fromObject(object.cities[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseStoresCities message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.ResponseStoresCities
         * @static
         * @param {meta.ResponseStoresCities} message ResponseStoresCities
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseStoresCities.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cities = [];
            if (message.cities && message.cities.length) {
                object.cities = [];
                for (var j = 0; j < message.cities.length; ++j)
                    object.cities[j] = $root.meta.City.toObject(message.cities[j], options);
            }
            return object;
        };

        /**
         * Converts this ResponseStoresCities to JSON.
         * @function toJSON
         * @memberof meta.ResponseStoresCities
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseStoresCities.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseStoresCities;
    })();

    meta.paramsStoresByCity = (function() {

        /**
         * Properties of a paramsStoresByCity.
         * @memberof meta
         * @interface IparamsStoresByCity
         * @property {number|null} [cityId] paramsStoresByCity cityId
         * @property {number|null} [offset] paramsStoresByCity offset
         * @property {number|null} [limit] paramsStoresByCity limit
         */

        /**
         * Constructs a new paramsStoresByCity.
         * @memberof meta
         * @classdesc Represents a paramsStoresByCity.
         * @implements IparamsStoresByCity
         * @constructor
         * @param {meta.IparamsStoresByCity=} [properties] Properties to set
         */
        function paramsStoresByCity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * paramsStoresByCity cityId.
         * @member {number} cityId
         * @memberof meta.paramsStoresByCity
         * @instance
         */
        paramsStoresByCity.prototype.cityId = 0;

        /**
         * paramsStoresByCity offset.
         * @member {number} offset
         * @memberof meta.paramsStoresByCity
         * @instance
         */
        paramsStoresByCity.prototype.offset = 0;

        /**
         * paramsStoresByCity limit.
         * @member {number} limit
         * @memberof meta.paramsStoresByCity
         * @instance
         */
        paramsStoresByCity.prototype.limit = 0;

        /**
         * Creates a new paramsStoresByCity instance using the specified properties.
         * @function create
         * @memberof meta.paramsStoresByCity
         * @static
         * @param {meta.IparamsStoresByCity=} [properties] Properties to set
         * @returns {meta.paramsStoresByCity} paramsStoresByCity instance
         */
        paramsStoresByCity.create = function create(properties) {
            return new paramsStoresByCity(properties);
        };

        /**
         * Encodes the specified paramsStoresByCity message. Does not implicitly {@link meta.paramsStoresByCity.verify|verify} messages.
         * @function encode
         * @memberof meta.paramsStoresByCity
         * @static
         * @param {meta.IparamsStoresByCity} message paramsStoresByCity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        paramsStoresByCity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cityId);
            if (message.offset != null && message.hasOwnProperty("offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified paramsStoresByCity message, length delimited. Does not implicitly {@link meta.paramsStoresByCity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.paramsStoresByCity
         * @static
         * @param {meta.IparamsStoresByCity} message paramsStoresByCity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        paramsStoresByCity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a paramsStoresByCity message from the specified reader or buffer.
         * @function decode
         * @memberof meta.paramsStoresByCity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.paramsStoresByCity} paramsStoresByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        paramsStoresByCity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.paramsStoresByCity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cityId = reader.int32();
                    break;
                case 2:
                    message.offset = reader.int32();
                    break;
                case 3:
                    message.limit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a paramsStoresByCity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.paramsStoresByCity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.paramsStoresByCity} paramsStoresByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        paramsStoresByCity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a paramsStoresByCity message.
         * @function verify
         * @memberof meta.paramsStoresByCity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        paramsStoresByCity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                if (!$util.isInteger(message.cityId))
                    return "cityId: integer expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a paramsStoresByCity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.paramsStoresByCity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.paramsStoresByCity} paramsStoresByCity
         */
        paramsStoresByCity.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.paramsStoresByCity)
                return object;
            var message = new $root.meta.paramsStoresByCity();
            if (object.cityId != null)
                message.cityId = object.cityId | 0;
            if (object.offset != null)
                message.offset = object.offset | 0;
            if (object.limit != null)
                message.limit = object.limit | 0;
            return message;
        };

        /**
         * Creates a plain object from a paramsStoresByCity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.paramsStoresByCity
         * @static
         * @param {meta.paramsStoresByCity} message paramsStoresByCity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        paramsStoresByCity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cityId = 0;
                object.offset = 0;
                object.limit = 0;
            }
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                object.cityId = message.cityId;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this paramsStoresByCity to JSON.
         * @function toJSON
         * @memberof meta.paramsStoresByCity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        paramsStoresByCity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return paramsStoresByCity;
    })();

    meta.responseStoresByCity = (function() {

        /**
         * Properties of a responseStoresByCity.
         * @memberof meta
         * @interface IresponseStoresByCity
         * @property {number|null} [cityId] responseStoresByCity cityId
         * @property {string|null} [title] responseStoresByCity title
         * @property {number|null} [total] responseStoresByCity total
         * @property {Array.<meta.IOfflineStore>|null} [stores] responseStoresByCity stores
         */

        /**
         * Constructs a new responseStoresByCity.
         * @memberof meta
         * @classdesc Represents a responseStoresByCity.
         * @implements IresponseStoresByCity
         * @constructor
         * @param {meta.IresponseStoresByCity=} [properties] Properties to set
         */
        function responseStoresByCity(properties) {
            this.stores = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * responseStoresByCity cityId.
         * @member {number} cityId
         * @memberof meta.responseStoresByCity
         * @instance
         */
        responseStoresByCity.prototype.cityId = 0;

        /**
         * responseStoresByCity title.
         * @member {string} title
         * @memberof meta.responseStoresByCity
         * @instance
         */
        responseStoresByCity.prototype.title = "";

        /**
         * responseStoresByCity total.
         * @member {number} total
         * @memberof meta.responseStoresByCity
         * @instance
         */
        responseStoresByCity.prototype.total = 0;

        /**
         * responseStoresByCity stores.
         * @member {Array.<meta.IOfflineStore>} stores
         * @memberof meta.responseStoresByCity
         * @instance
         */
        responseStoresByCity.prototype.stores = $util.emptyArray;

        /**
         * Creates a new responseStoresByCity instance using the specified properties.
         * @function create
         * @memberof meta.responseStoresByCity
         * @static
         * @param {meta.IresponseStoresByCity=} [properties] Properties to set
         * @returns {meta.responseStoresByCity} responseStoresByCity instance
         */
        responseStoresByCity.create = function create(properties) {
            return new responseStoresByCity(properties);
        };

        /**
         * Encodes the specified responseStoresByCity message. Does not implicitly {@link meta.responseStoresByCity.verify|verify} messages.
         * @function encode
         * @memberof meta.responseStoresByCity
         * @static
         * @param {meta.IresponseStoresByCity} message responseStoresByCity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        responseStoresByCity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cityId);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.total != null && message.hasOwnProperty("total"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.total);
            if (message.stores != null && message.stores.length)
                for (var i = 0; i < message.stores.length; ++i)
                    $root.meta.OfflineStore.encode(message.stores[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified responseStoresByCity message, length delimited. Does not implicitly {@link meta.responseStoresByCity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meta.responseStoresByCity
         * @static
         * @param {meta.IresponseStoresByCity} message responseStoresByCity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        responseStoresByCity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a responseStoresByCity message from the specified reader or buffer.
         * @function decode
         * @memberof meta.responseStoresByCity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meta.responseStoresByCity} responseStoresByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        responseStoresByCity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.meta.responseStoresByCity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cityId = reader.int32();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.total = reader.int32();
                    break;
                case 4:
                    if (!(message.stores && message.stores.length))
                        message.stores = [];
                    message.stores.push($root.meta.OfflineStore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a responseStoresByCity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meta.responseStoresByCity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meta.responseStoresByCity} responseStoresByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        responseStoresByCity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a responseStoresByCity message.
         * @function verify
         * @memberof meta.responseStoresByCity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        responseStoresByCity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                if (!$util.isInteger(message.cityId))
                    return "cityId: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.stores != null && message.hasOwnProperty("stores")) {
                if (!Array.isArray(message.stores))
                    return "stores: array expected";
                for (var i = 0; i < message.stores.length; ++i) {
                    var error = $root.meta.OfflineStore.verify(message.stores[i]);
                    if (error)
                        return "stores." + error;
                }
            }
            return null;
        };

        /**
         * Creates a responseStoresByCity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meta.responseStoresByCity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meta.responseStoresByCity} responseStoresByCity
         */
        responseStoresByCity.fromObject = function fromObject(object) {
            if (object instanceof $root.meta.responseStoresByCity)
                return object;
            var message = new $root.meta.responseStoresByCity();
            if (object.cityId != null)
                message.cityId = object.cityId | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.total != null)
                message.total = object.total | 0;
            if (object.stores) {
                if (!Array.isArray(object.stores))
                    throw TypeError(".meta.responseStoresByCity.stores: array expected");
                message.stores = [];
                for (var i = 0; i < object.stores.length; ++i) {
                    if (typeof object.stores[i] !== "object")
                        throw TypeError(".meta.responseStoresByCity.stores: object expected");
                    message.stores[i] = $root.meta.OfflineStore.fromObject(object.stores[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a responseStoresByCity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meta.responseStoresByCity
         * @static
         * @param {meta.responseStoresByCity} message responseStoresByCity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        responseStoresByCity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.stores = [];
            if (options.defaults) {
                object.cityId = 0;
                object.title = "";
                object.total = 0;
            }
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                object.cityId = message.cityId;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.stores && message.stores.length) {
                object.stores = [];
                for (var j = 0; j < message.stores.length; ++j)
                    object.stores[j] = $root.meta.OfflineStore.toObject(message.stores[j], options);
            }
            return object;
        };

        /**
         * Converts this responseStoresByCity to JSON.
         * @function toJSON
         * @memberof meta.responseStoresByCity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        responseStoresByCity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return responseStoresByCity;
    })();

    return meta;
})();

$root.mindbox = (function() {

    /**
     * Namespace mindbox.
     * @exports mindbox
     * @namespace
     */
    var mindbox = {};

    mindbox.Mindbox = (function() {

        /**
         * Constructs a new Mindbox service.
         * @memberof mindbox
         * @classdesc Represents a Mindbox
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Mindbox(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Mindbox.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Mindbox;

        /**
         * Creates new Mindbox service using the specified rpc implementation.
         * @function create
         * @memberof mindbox.Mindbox
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Mindbox} RPC service. Useful where requests and/or responses are streamed.
         */
        Mindbox.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link mindbox.Mindbox#ping}.
         * @memberof mindbox.Mindbox
         * @typedef PingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.PingResponse} [response] PingResponse
         */

        /**
         * Calls Ping.
         * @function ping
         * @memberof mindbox.Mindbox
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {mindbox.Mindbox.PingCallback} callback Node-style callback called with the error, if any, and PingResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mindbox.prototype.ping = function ping(request, callback) {
            return this.rpcCall(ping, $root.google.protobuf.Empty, $root.mindbox.PingResponse, request, callback);
        }, "name", { value: "Ping" });

        /**
         * Calls Ping.
         * @function ping
         * @memberof mindbox.Mindbox
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<mindbox.PingResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mindbox.Mindbox#userInformation}.
         * @memberof mindbox.Mindbox
         * @typedef UserInformationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseUserInformation} [response] ResponseUserInformation
         */

        /**
         * Calls UserInformation.
         * @function userInformation
         * @memberof mindbox.Mindbox
         * @instance
         * @param {mindbox.IParamsUserInformation} request ParamsUserInformation message or plain object
         * @param {mindbox.Mindbox.UserInformationCallback} callback Node-style callback called with the error, if any, and ResponseUserInformation
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mindbox.prototype.userInformation = function userInformation(request, callback) {
            return this.rpcCall(userInformation, $root.mindbox.ParamsUserInformation, $root.mindbox.ResponseUserInformation, request, callback);
        }, "name", { value: "UserInformation" });

        /**
         * Calls UserInformation.
         * @function userInformation
         * @memberof mindbox.Mindbox
         * @instance
         * @param {mindbox.IParamsUserInformation} request ParamsUserInformation message or plain object
         * @returns {Promise<mindbox.ResponseUserInformation>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mindbox.Mindbox#ordersHistory}.
         * @memberof mindbox.Mindbox
         * @typedef OrdersHistoryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseOrdersHistory} [response] ResponseOrdersHistory
         */

        /**
         * Calls OrdersHistory.
         * @function ordersHistory
         * @memberof mindbox.Mindbox
         * @instance
         * @param {mindbox.IParamsOrdersHistory} request ParamsOrdersHistory message or plain object
         * @param {mindbox.Mindbox.OrdersHistoryCallback} callback Node-style callback called with the error, if any, and ResponseOrdersHistory
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mindbox.prototype.ordersHistory = function ordersHistory(request, callback) {
            return this.rpcCall(ordersHistory, $root.mindbox.ParamsOrdersHistory, $root.mindbox.ResponseOrdersHistory, request, callback);
        }, "name", { value: "OrdersHistory" });

        /**
         * Calls OrdersHistory.
         * @function ordersHistory
         * @memberof mindbox.Mindbox
         * @instance
         * @param {mindbox.IParamsOrdersHistory} request ParamsOrdersHistory message or plain object
         * @returns {Promise<mindbox.ResponseOrdersHistory>} Promise
         * @variation 2
         */

        return Mindbox;
    })();

    mindbox.PingResponse = (function() {

        /**
         * Properties of a PingResponse.
         * @memberof mindbox
         * @interface IPingResponse
         * @property {string|null} [response] PingResponse response
         */

        /**
         * Constructs a new PingResponse.
         * @memberof mindbox
         * @classdesc Represents a PingResponse.
         * @implements IPingResponse
         * @constructor
         * @param {mindbox.IPingResponse=} [properties] Properties to set
         */
        function PingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingResponse response.
         * @member {string} response
         * @memberof mindbox.PingResponse
         * @instance
         */
        PingResponse.prototype.response = "";

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @function create
         * @memberof mindbox.PingResponse
         * @static
         * @param {mindbox.IPingResponse=} [properties] Properties to set
         * @returns {mindbox.PingResponse} PingResponse instance
         */
        PingResponse.create = function create(properties) {
            return new PingResponse(properties);
        };

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link mindbox.PingResponse.verify|verify} messages.
         * @function encode
         * @memberof mindbox.PingResponse
         * @static
         * @param {mindbox.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && message.hasOwnProperty("response"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.response);
            return writer;
        };

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link mindbox.PingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mindbox.PingResponse
         * @static
         * @param {mindbox.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof mindbox.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mindbox.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mindbox.PingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mindbox.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mindbox.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingResponse message.
         * @function verify
         * @memberof mindbox.PingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!$util.isString(message.response))
                    return "response: string expected";
            return null;
        };

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mindbox.PingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mindbox.PingResponse} PingResponse
         */
        PingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mindbox.PingResponse)
                return object;
            var message = new $root.mindbox.PingResponse();
            if (object.response != null)
                message.response = String(object.response);
            return message;
        };

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mindbox.PingResponse
         * @static
         * @param {mindbox.PingResponse} message PingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.response = "";
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = message.response;
            return object;
        };

        /**
         * Converts this PingResponse to JSON.
         * @function toJSON
         * @memberof mindbox.PingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingResponse;
    })();

    mindbox.ParamsUserInformation = (function() {

        /**
         * Properties of a ParamsUserInformation.
         * @memberof mindbox
         * @interface IParamsUserInformation
         * @property {number|null} [clientId] ParamsUserInformation clientId
         */

        /**
         * Constructs a new ParamsUserInformation.
         * @memberof mindbox
         * @classdesc Represents a ParamsUserInformation.
         * @implements IParamsUserInformation
         * @constructor
         * @param {mindbox.IParamsUserInformation=} [properties] Properties to set
         */
        function ParamsUserInformation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsUserInformation clientId.
         * @member {number} clientId
         * @memberof mindbox.ParamsUserInformation
         * @instance
         */
        ParamsUserInformation.prototype.clientId = 0;

        /**
         * Creates a new ParamsUserInformation instance using the specified properties.
         * @function create
         * @memberof mindbox.ParamsUserInformation
         * @static
         * @param {mindbox.IParamsUserInformation=} [properties] Properties to set
         * @returns {mindbox.ParamsUserInformation} ParamsUserInformation instance
         */
        ParamsUserInformation.create = function create(properties) {
            return new ParamsUserInformation(properties);
        };

        /**
         * Encodes the specified ParamsUserInformation message. Does not implicitly {@link mindbox.ParamsUserInformation.verify|verify} messages.
         * @function encode
         * @memberof mindbox.ParamsUserInformation
         * @static
         * @param {mindbox.IParamsUserInformation} message ParamsUserInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsUserInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientId);
            return writer;
        };

        /**
         * Encodes the specified ParamsUserInformation message, length delimited. Does not implicitly {@link mindbox.ParamsUserInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mindbox.ParamsUserInformation
         * @static
         * @param {mindbox.IParamsUserInformation} message ParamsUserInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsUserInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParamsUserInformation message from the specified reader or buffer.
         * @function decode
         * @memberof mindbox.ParamsUserInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mindbox.ParamsUserInformation} ParamsUserInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsUserInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mindbox.ParamsUserInformation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParamsUserInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mindbox.ParamsUserInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mindbox.ParamsUserInformation} ParamsUserInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsUserInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParamsUserInformation message.
         * @function verify
         * @memberof mindbox.ParamsUserInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParamsUserInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId))
                    return "clientId: integer expected";
            return null;
        };

        /**
         * Creates a ParamsUserInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mindbox.ParamsUserInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mindbox.ParamsUserInformation} ParamsUserInformation
         */
        ParamsUserInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.mindbox.ParamsUserInformation)
                return object;
            var message = new $root.mindbox.ParamsUserInformation();
            if (object.clientId != null)
                message.clientId = object.clientId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ParamsUserInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mindbox.ParamsUserInformation
         * @static
         * @param {mindbox.ParamsUserInformation} message ParamsUserInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParamsUserInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.clientId = 0;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            return object;
        };

        /**
         * Converts this ParamsUserInformation to JSON.
         * @function toJSON
         * @memberof mindbox.ParamsUserInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParamsUserInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ParamsUserInformation;
    })();

    mindbox.ResponseUserInformation = (function() {

        /**
         * Properties of a ResponseUserInformation.
         * @memberof mindbox
         * @interface IResponseUserInformation
         * @property {string|null} [firstName] ResponseUserInformation firstName
         * @property {string|null} [lastName] ResponseUserInformation lastName
         * @property {string|null} [email] ResponseUserInformation email
         * @property {string|null} [phone] ResponseUserInformation phone
         * @property {number|null} [bonusTotal] ResponseUserInformation bonusTotal
         * @property {number|null} [bonusAvailable] ResponseUserInformation bonusAvailable
         * @property {number|null} [bonusBlocked] ResponseUserInformation bonusBlocked
         * @property {number|null} [totalPaidAmount] ResponseUserInformation totalPaidAmount
         */

        /**
         * Constructs a new ResponseUserInformation.
         * @memberof mindbox
         * @classdesc Represents a ResponseUserInformation.
         * @implements IResponseUserInformation
         * @constructor
         * @param {mindbox.IResponseUserInformation=} [properties] Properties to set
         */
        function ResponseUserInformation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseUserInformation firstName.
         * @member {string} firstName
         * @memberof mindbox.ResponseUserInformation
         * @instance
         */
        ResponseUserInformation.prototype.firstName = "";

        /**
         * ResponseUserInformation lastName.
         * @member {string} lastName
         * @memberof mindbox.ResponseUserInformation
         * @instance
         */
        ResponseUserInformation.prototype.lastName = "";

        /**
         * ResponseUserInformation email.
         * @member {string} email
         * @memberof mindbox.ResponseUserInformation
         * @instance
         */
        ResponseUserInformation.prototype.email = "";

        /**
         * ResponseUserInformation phone.
         * @member {string} phone
         * @memberof mindbox.ResponseUserInformation
         * @instance
         */
        ResponseUserInformation.prototype.phone = "";

        /**
         * ResponseUserInformation bonusTotal.
         * @member {number} bonusTotal
         * @memberof mindbox.ResponseUserInformation
         * @instance
         */
        ResponseUserInformation.prototype.bonusTotal = 0;

        /**
         * ResponseUserInformation bonusAvailable.
         * @member {number} bonusAvailable
         * @memberof mindbox.ResponseUserInformation
         * @instance
         */
        ResponseUserInformation.prototype.bonusAvailable = 0;

        /**
         * ResponseUserInformation bonusBlocked.
         * @member {number} bonusBlocked
         * @memberof mindbox.ResponseUserInformation
         * @instance
         */
        ResponseUserInformation.prototype.bonusBlocked = 0;

        /**
         * ResponseUserInformation totalPaidAmount.
         * @member {number} totalPaidAmount
         * @memberof mindbox.ResponseUserInformation
         * @instance
         */
        ResponseUserInformation.prototype.totalPaidAmount = 0;

        /**
         * Creates a new ResponseUserInformation instance using the specified properties.
         * @function create
         * @memberof mindbox.ResponseUserInformation
         * @static
         * @param {mindbox.IResponseUserInformation=} [properties] Properties to set
         * @returns {mindbox.ResponseUserInformation} ResponseUserInformation instance
         */
        ResponseUserInformation.create = function create(properties) {
            return new ResponseUserInformation(properties);
        };

        /**
         * Encodes the specified ResponseUserInformation message. Does not implicitly {@link mindbox.ResponseUserInformation.verify|verify} messages.
         * @function encode
         * @memberof mindbox.ResponseUserInformation
         * @static
         * @param {mindbox.IResponseUserInformation} message ResponseUserInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseUserInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstName);
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lastName);
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.phone != null && message.hasOwnProperty("phone"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.phone);
            if (message.bonusTotal != null && message.hasOwnProperty("bonusTotal"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.bonusTotal);
            if (message.bonusAvailable != null && message.hasOwnProperty("bonusAvailable"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.bonusAvailable);
            if (message.bonusBlocked != null && message.hasOwnProperty("bonusBlocked"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.bonusBlocked);
            if (message.totalPaidAmount != null && message.hasOwnProperty("totalPaidAmount"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.totalPaidAmount);
            return writer;
        };

        /**
         * Encodes the specified ResponseUserInformation message, length delimited. Does not implicitly {@link mindbox.ResponseUserInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mindbox.ResponseUserInformation
         * @static
         * @param {mindbox.IResponseUserInformation} message ResponseUserInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseUserInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseUserInformation message from the specified reader or buffer.
         * @function decode
         * @memberof mindbox.ResponseUserInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mindbox.ResponseUserInformation} ResponseUserInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseUserInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mindbox.ResponseUserInformation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.firstName = reader.string();
                    break;
                case 2:
                    message.lastName = reader.string();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                case 4:
                    message.phone = reader.string();
                    break;
                case 5:
                    message.bonusTotal = reader.int32();
                    break;
                case 6:
                    message.bonusAvailable = reader.int32();
                    break;
                case 7:
                    message.bonusBlocked = reader.int32();
                    break;
                case 8:
                    message.totalPaidAmount = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseUserInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mindbox.ResponseUserInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mindbox.ResponseUserInformation} ResponseUserInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseUserInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseUserInformation message.
         * @function verify
         * @memberof mindbox.ResponseUserInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseUserInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.bonusTotal != null && message.hasOwnProperty("bonusTotal"))
                if (!$util.isInteger(message.bonusTotal))
                    return "bonusTotal: integer expected";
            if (message.bonusAvailable != null && message.hasOwnProperty("bonusAvailable"))
                if (!$util.isInteger(message.bonusAvailable))
                    return "bonusAvailable: integer expected";
            if (message.bonusBlocked != null && message.hasOwnProperty("bonusBlocked"))
                if (!$util.isInteger(message.bonusBlocked))
                    return "bonusBlocked: integer expected";
            if (message.totalPaidAmount != null && message.hasOwnProperty("totalPaidAmount"))
                if (typeof message.totalPaidAmount !== "number")
                    return "totalPaidAmount: number expected";
            return null;
        };

        /**
         * Creates a ResponseUserInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mindbox.ResponseUserInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mindbox.ResponseUserInformation} ResponseUserInformation
         */
        ResponseUserInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.mindbox.ResponseUserInformation)
                return object;
            var message = new $root.mindbox.ResponseUserInformation();
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.bonusTotal != null)
                message.bonusTotal = object.bonusTotal | 0;
            if (object.bonusAvailable != null)
                message.bonusAvailable = object.bonusAvailable | 0;
            if (object.bonusBlocked != null)
                message.bonusBlocked = object.bonusBlocked | 0;
            if (object.totalPaidAmount != null)
                message.totalPaidAmount = Number(object.totalPaidAmount);
            return message;
        };

        /**
         * Creates a plain object from a ResponseUserInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mindbox.ResponseUserInformation
         * @static
         * @param {mindbox.ResponseUserInformation} message ResponseUserInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseUserInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.firstName = "";
                object.lastName = "";
                object.email = "";
                object.phone = "";
                object.bonusTotal = 0;
                object.bonusAvailable = 0;
                object.bonusBlocked = 0;
                object.totalPaidAmount = 0;
            }
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.bonusTotal != null && message.hasOwnProperty("bonusTotal"))
                object.bonusTotal = message.bonusTotal;
            if (message.bonusAvailable != null && message.hasOwnProperty("bonusAvailable"))
                object.bonusAvailable = message.bonusAvailable;
            if (message.bonusBlocked != null && message.hasOwnProperty("bonusBlocked"))
                object.bonusBlocked = message.bonusBlocked;
            if (message.totalPaidAmount != null && message.hasOwnProperty("totalPaidAmount"))
                object.totalPaidAmount = options.json && !isFinite(message.totalPaidAmount) ? String(message.totalPaidAmount) : message.totalPaidAmount;
            return object;
        };

        /**
         * Converts this ResponseUserInformation to JSON.
         * @function toJSON
         * @memberof mindbox.ResponseUserInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseUserInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseUserInformation;
    })();

    mindbox.ParamsOrdersHistory = (function() {

        /**
         * Properties of a ParamsOrdersHistory.
         * @memberof mindbox
         * @interface IParamsOrdersHistory
         * @property {number|null} [clientId] ParamsOrdersHistory clientId
         */

        /**
         * Constructs a new ParamsOrdersHistory.
         * @memberof mindbox
         * @classdesc Represents a ParamsOrdersHistory.
         * @implements IParamsOrdersHistory
         * @constructor
         * @param {mindbox.IParamsOrdersHistory=} [properties] Properties to set
         */
        function ParamsOrdersHistory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsOrdersHistory clientId.
         * @member {number} clientId
         * @memberof mindbox.ParamsOrdersHistory
         * @instance
         */
        ParamsOrdersHistory.prototype.clientId = 0;

        /**
         * Creates a new ParamsOrdersHistory instance using the specified properties.
         * @function create
         * @memberof mindbox.ParamsOrdersHistory
         * @static
         * @param {mindbox.IParamsOrdersHistory=} [properties] Properties to set
         * @returns {mindbox.ParamsOrdersHistory} ParamsOrdersHistory instance
         */
        ParamsOrdersHistory.create = function create(properties) {
            return new ParamsOrdersHistory(properties);
        };

        /**
         * Encodes the specified ParamsOrdersHistory message. Does not implicitly {@link mindbox.ParamsOrdersHistory.verify|verify} messages.
         * @function encode
         * @memberof mindbox.ParamsOrdersHistory
         * @static
         * @param {mindbox.IParamsOrdersHistory} message ParamsOrdersHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsOrdersHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientId);
            return writer;
        };

        /**
         * Encodes the specified ParamsOrdersHistory message, length delimited. Does not implicitly {@link mindbox.ParamsOrdersHistory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mindbox.ParamsOrdersHistory
         * @static
         * @param {mindbox.IParamsOrdersHistory} message ParamsOrdersHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsOrdersHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParamsOrdersHistory message from the specified reader or buffer.
         * @function decode
         * @memberof mindbox.ParamsOrdersHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mindbox.ParamsOrdersHistory} ParamsOrdersHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsOrdersHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mindbox.ParamsOrdersHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParamsOrdersHistory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mindbox.ParamsOrdersHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mindbox.ParamsOrdersHistory} ParamsOrdersHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsOrdersHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParamsOrdersHistory message.
         * @function verify
         * @memberof mindbox.ParamsOrdersHistory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParamsOrdersHistory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId))
                    return "clientId: integer expected";
            return null;
        };

        /**
         * Creates a ParamsOrdersHistory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mindbox.ParamsOrdersHistory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mindbox.ParamsOrdersHistory} ParamsOrdersHistory
         */
        ParamsOrdersHistory.fromObject = function fromObject(object) {
            if (object instanceof $root.mindbox.ParamsOrdersHistory)
                return object;
            var message = new $root.mindbox.ParamsOrdersHistory();
            if (object.clientId != null)
                message.clientId = object.clientId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ParamsOrdersHistory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mindbox.ParamsOrdersHistory
         * @static
         * @param {mindbox.ParamsOrdersHistory} message ParamsOrdersHistory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParamsOrdersHistory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.clientId = 0;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            return object;
        };

        /**
         * Converts this ParamsOrdersHistory to JSON.
         * @function toJSON
         * @memberof mindbox.ParamsOrdersHistory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParamsOrdersHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ParamsOrdersHistory;
    })();

    mindbox.ResponseOrdersHistory = (function() {

        /**
         * Properties of a ResponseOrdersHistory.
         * @memberof mindbox
         * @interface IResponseOrdersHistory
         * @property {number|null} [totalCount] ResponseOrdersHistory totalCount
         * @property {Array.<mindbox.Iorder>|null} [orders] ResponseOrdersHistory orders
         */

        /**
         * Constructs a new ResponseOrdersHistory.
         * @memberof mindbox
         * @classdesc Represents a ResponseOrdersHistory.
         * @implements IResponseOrdersHistory
         * @constructor
         * @param {mindbox.IResponseOrdersHistory=} [properties] Properties to set
         */
        function ResponseOrdersHistory(properties) {
            this.orders = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseOrdersHistory totalCount.
         * @member {number} totalCount
         * @memberof mindbox.ResponseOrdersHistory
         * @instance
         */
        ResponseOrdersHistory.prototype.totalCount = 0;

        /**
         * ResponseOrdersHistory orders.
         * @member {Array.<mindbox.Iorder>} orders
         * @memberof mindbox.ResponseOrdersHistory
         * @instance
         */
        ResponseOrdersHistory.prototype.orders = $util.emptyArray;

        /**
         * Creates a new ResponseOrdersHistory instance using the specified properties.
         * @function create
         * @memberof mindbox.ResponseOrdersHistory
         * @static
         * @param {mindbox.IResponseOrdersHistory=} [properties] Properties to set
         * @returns {mindbox.ResponseOrdersHistory} ResponseOrdersHistory instance
         */
        ResponseOrdersHistory.create = function create(properties) {
            return new ResponseOrdersHistory(properties);
        };

        /**
         * Encodes the specified ResponseOrdersHistory message. Does not implicitly {@link mindbox.ResponseOrdersHistory.verify|verify} messages.
         * @function encode
         * @memberof mindbox.ResponseOrdersHistory
         * @static
         * @param {mindbox.IResponseOrdersHistory} message ResponseOrdersHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOrdersHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalCount);
            if (message.orders != null && message.orders.length)
                for (var i = 0; i < message.orders.length; ++i)
                    $root.mindbox.order.encode(message.orders[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseOrdersHistory message, length delimited. Does not implicitly {@link mindbox.ResponseOrdersHistory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mindbox.ResponseOrdersHistory
         * @static
         * @param {mindbox.IResponseOrdersHistory} message ResponseOrdersHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOrdersHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseOrdersHistory message from the specified reader or buffer.
         * @function decode
         * @memberof mindbox.ResponseOrdersHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mindbox.ResponseOrdersHistory} ResponseOrdersHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOrdersHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mindbox.ResponseOrdersHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.int32();
                    break;
                case 2:
                    if (!(message.orders && message.orders.length))
                        message.orders = [];
                    message.orders.push($root.mindbox.order.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseOrdersHistory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mindbox.ResponseOrdersHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mindbox.ResponseOrdersHistory} ResponseOrdersHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOrdersHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseOrdersHistory message.
         * @function verify
         * @memberof mindbox.ResponseOrdersHistory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseOrdersHistory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                if (!$util.isInteger(message.totalCount))
                    return "totalCount: integer expected";
            if (message.orders != null && message.hasOwnProperty("orders")) {
                if (!Array.isArray(message.orders))
                    return "orders: array expected";
                for (var i = 0; i < message.orders.length; ++i) {
                    var error = $root.mindbox.order.verify(message.orders[i]);
                    if (error)
                        return "orders." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResponseOrdersHistory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mindbox.ResponseOrdersHistory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mindbox.ResponseOrdersHistory} ResponseOrdersHistory
         */
        ResponseOrdersHistory.fromObject = function fromObject(object) {
            if (object instanceof $root.mindbox.ResponseOrdersHistory)
                return object;
            var message = new $root.mindbox.ResponseOrdersHistory();
            if (object.totalCount != null)
                message.totalCount = object.totalCount | 0;
            if (object.orders) {
                if (!Array.isArray(object.orders))
                    throw TypeError(".mindbox.ResponseOrdersHistory.orders: array expected");
                message.orders = [];
                for (var i = 0; i < object.orders.length; ++i) {
                    if (typeof object.orders[i] !== "object")
                        throw TypeError(".mindbox.ResponseOrdersHistory.orders: object expected");
                    message.orders[i] = $root.mindbox.order.fromObject(object.orders[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseOrdersHistory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mindbox.ResponseOrdersHistory
         * @static
         * @param {mindbox.ResponseOrdersHistory} message ResponseOrdersHistory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseOrdersHistory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.orders = [];
            if (options.defaults)
                object.totalCount = 0;
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                object.totalCount = message.totalCount;
            if (message.orders && message.orders.length) {
                object.orders = [];
                for (var j = 0; j < message.orders.length; ++j)
                    object.orders[j] = $root.mindbox.order.toObject(message.orders[j], options);
            }
            return object;
        };

        /**
         * Converts this ResponseOrdersHistory to JSON.
         * @function toJSON
         * @memberof mindbox.ResponseOrdersHistory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseOrdersHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseOrdersHistory;
    })();

    mindbox.order = (function() {

        /**
         * Properties of an order.
         * @memberof mindbox
         * @interface Iorder
         * @property {string|null} [id] order id
         * @property {string|null} [createdDate] order createdDate
         * @property {string|null} [paymentType] order paymentType
         * @property {number|null} [discountedTotalPrice] order discountedTotalPrice
         * @property {number|null} [paymentAmount] order paymentAmount
         * @property {number|null} [appliedDiscount] order appliedDiscount
         * @property {number|null} [acquiredBalanceChange] order acquiredBalanceChange
         */

        /**
         * Constructs a new order.
         * @memberof mindbox
         * @classdesc Represents an order.
         * @implements Iorder
         * @constructor
         * @param {mindbox.Iorder=} [properties] Properties to set
         */
        function order(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * order id.
         * @member {string} id
         * @memberof mindbox.order
         * @instance
         */
        order.prototype.id = "";

        /**
         * order createdDate.
         * @member {string} createdDate
         * @memberof mindbox.order
         * @instance
         */
        order.prototype.createdDate = "";

        /**
         * order paymentType.
         * @member {string} paymentType
         * @memberof mindbox.order
         * @instance
         */
        order.prototype.paymentType = "";

        /**
         * order discountedTotalPrice.
         * @member {number} discountedTotalPrice
         * @memberof mindbox.order
         * @instance
         */
        order.prototype.discountedTotalPrice = 0;

        /**
         * order paymentAmount.
         * @member {number} paymentAmount
         * @memberof mindbox.order
         * @instance
         */
        order.prototype.paymentAmount = 0;

        /**
         * order appliedDiscount.
         * @member {number} appliedDiscount
         * @memberof mindbox.order
         * @instance
         */
        order.prototype.appliedDiscount = 0;

        /**
         * order acquiredBalanceChange.
         * @member {number} acquiredBalanceChange
         * @memberof mindbox.order
         * @instance
         */
        order.prototype.acquiredBalanceChange = 0;

        /**
         * Creates a new order instance using the specified properties.
         * @function create
         * @memberof mindbox.order
         * @static
         * @param {mindbox.Iorder=} [properties] Properties to set
         * @returns {mindbox.order} order instance
         */
        order.create = function create(properties) {
            return new order(properties);
        };

        /**
         * Encodes the specified order message. Does not implicitly {@link mindbox.order.verify|verify} messages.
         * @function encode
         * @memberof mindbox.order
         * @static
         * @param {mindbox.Iorder} message order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        order.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.createdDate != null && message.hasOwnProperty("createdDate"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdDate);
            if (message.paymentType != null && message.hasOwnProperty("paymentType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.paymentType);
            if (message.discountedTotalPrice != null && message.hasOwnProperty("discountedTotalPrice"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.discountedTotalPrice);
            if (message.paymentAmount != null && message.hasOwnProperty("paymentAmount"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.paymentAmount);
            if (message.appliedDiscount != null && message.hasOwnProperty("appliedDiscount"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.appliedDiscount);
            if (message.acquiredBalanceChange != null && message.hasOwnProperty("acquiredBalanceChange"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.acquiredBalanceChange);
            return writer;
        };

        /**
         * Encodes the specified order message, length delimited. Does not implicitly {@link mindbox.order.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mindbox.order
         * @static
         * @param {mindbox.Iorder} message order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        order.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an order message from the specified reader or buffer.
         * @function decode
         * @memberof mindbox.order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mindbox.order} order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        order.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mindbox.order();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.createdDate = reader.string();
                    break;
                case 3:
                    message.paymentType = reader.string();
                    break;
                case 4:
                    message.discountedTotalPrice = reader.double();
                    break;
                case 5:
                    message.paymentAmount = reader.double();
                    break;
                case 6:
                    message.appliedDiscount = reader.double();
                    break;
                case 7:
                    message.acquiredBalanceChange = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an order message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mindbox.order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mindbox.order} order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        order.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an order message.
         * @function verify
         * @memberof mindbox.order
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        order.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.createdDate != null && message.hasOwnProperty("createdDate"))
                if (!$util.isString(message.createdDate))
                    return "createdDate: string expected";
            if (message.paymentType != null && message.hasOwnProperty("paymentType"))
                if (!$util.isString(message.paymentType))
                    return "paymentType: string expected";
            if (message.discountedTotalPrice != null && message.hasOwnProperty("discountedTotalPrice"))
                if (typeof message.discountedTotalPrice !== "number")
                    return "discountedTotalPrice: number expected";
            if (message.paymentAmount != null && message.hasOwnProperty("paymentAmount"))
                if (typeof message.paymentAmount !== "number")
                    return "paymentAmount: number expected";
            if (message.appliedDiscount != null && message.hasOwnProperty("appliedDiscount"))
                if (typeof message.appliedDiscount !== "number")
                    return "appliedDiscount: number expected";
            if (message.acquiredBalanceChange != null && message.hasOwnProperty("acquiredBalanceChange"))
                if (typeof message.acquiredBalanceChange !== "number")
                    return "acquiredBalanceChange: number expected";
            return null;
        };

        /**
         * Creates an order message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mindbox.order
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mindbox.order} order
         */
        order.fromObject = function fromObject(object) {
            if (object instanceof $root.mindbox.order)
                return object;
            var message = new $root.mindbox.order();
            if (object.id != null)
                message.id = String(object.id);
            if (object.createdDate != null)
                message.createdDate = String(object.createdDate);
            if (object.paymentType != null)
                message.paymentType = String(object.paymentType);
            if (object.discountedTotalPrice != null)
                message.discountedTotalPrice = Number(object.discountedTotalPrice);
            if (object.paymentAmount != null)
                message.paymentAmount = Number(object.paymentAmount);
            if (object.appliedDiscount != null)
                message.appliedDiscount = Number(object.appliedDiscount);
            if (object.acquiredBalanceChange != null)
                message.acquiredBalanceChange = Number(object.acquiredBalanceChange);
            return message;
        };

        /**
         * Creates a plain object from an order message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mindbox.order
         * @static
         * @param {mindbox.order} message order
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        order.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.createdDate = "";
                object.paymentType = "";
                object.discountedTotalPrice = 0;
                object.paymentAmount = 0;
                object.appliedDiscount = 0;
                object.acquiredBalanceChange = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.createdDate != null && message.hasOwnProperty("createdDate"))
                object.createdDate = message.createdDate;
            if (message.paymentType != null && message.hasOwnProperty("paymentType"))
                object.paymentType = message.paymentType;
            if (message.discountedTotalPrice != null && message.hasOwnProperty("discountedTotalPrice"))
                object.discountedTotalPrice = options.json && !isFinite(message.discountedTotalPrice) ? String(message.discountedTotalPrice) : message.discountedTotalPrice;
            if (message.paymentAmount != null && message.hasOwnProperty("paymentAmount"))
                object.paymentAmount = options.json && !isFinite(message.paymentAmount) ? String(message.paymentAmount) : message.paymentAmount;
            if (message.appliedDiscount != null && message.hasOwnProperty("appliedDiscount"))
                object.appliedDiscount = options.json && !isFinite(message.appliedDiscount) ? String(message.appliedDiscount) : message.appliedDiscount;
            if (message.acquiredBalanceChange != null && message.hasOwnProperty("acquiredBalanceChange"))
                object.acquiredBalanceChange = options.json && !isFinite(message.acquiredBalanceChange) ? String(message.acquiredBalanceChange) : message.acquiredBalanceChange;
            return object;
        };

        /**
         * Converts this order to JSON.
         * @function toJSON
         * @memberof mindbox.order
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        order.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return order;
    })();

    return mindbox;
})();

$root.orders = (function() {

    /**
     * Namespace orders.
     * @exports orders
     * @namespace
     */
    var orders = {};

    orders.Orders = (function() {

        /**
         * Constructs a new Orders service.
         * @memberof orders
         * @classdesc Represents an Orders
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Orders(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Orders.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Orders;

        /**
         * Creates new Orders service using the specified rpc implementation.
         * @function create
         * @memberof orders.Orders
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Orders} RPC service. Useful where requests and/or responses are streamed.
         */
        Orders.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link orders.Orders#ping}.
         * @memberof orders.Orders
         * @typedef PingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {orders.PingResponse} [response] PingResponse
         */

        /**
         * Calls Ping.
         * @function ping
         * @memberof orders.Orders
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {orders.Orders.PingCallback} callback Node-style callback called with the error, if any, and PingResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Orders.prototype.ping = function ping(request, callback) {
            return this.rpcCall(ping, $root.google.protobuf.Empty, $root.orders.PingResponse, request, callback);
        }, "name", { value: "Ping" });

        /**
         * Calls Ping.
         * @function ping
         * @memberof orders.Orders
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<orders.PingResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link orders.Orders#offlineByClient}.
         * @memberof orders.Orders
         * @typedef OfflineByClientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {orders.ResponseOfflineByClient} [response] ResponseOfflineByClient
         */

        /**
         * Calls OfflineByClient.
         * @function offlineByClient
         * @memberof orders.Orders
         * @instance
         * @param {orders.IParamsOfflineByClient} request ParamsOfflineByClient message or plain object
         * @param {orders.Orders.OfflineByClientCallback} callback Node-style callback called with the error, if any, and ResponseOfflineByClient
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Orders.prototype.offlineByClient = function offlineByClient(request, callback) {
            return this.rpcCall(offlineByClient, $root.orders.ParamsOfflineByClient, $root.orders.ResponseOfflineByClient, request, callback);
        }, "name", { value: "OfflineByClient" });

        /**
         * Calls OfflineByClient.
         * @function offlineByClient
         * @memberof orders.Orders
         * @instance
         * @param {orders.IParamsOfflineByClient} request ParamsOfflineByClient message or plain object
         * @returns {Promise<orders.ResponseOfflineByClient>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link orders.Orders#onlineByClient}.
         * @memberof orders.Orders
         * @typedef OnlineByClientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {orders.ResponseOnlineByClient} [response] ResponseOnlineByClient
         */

        /**
         * Calls OnlineByClient.
         * @function onlineByClient
         * @memberof orders.Orders
         * @instance
         * @param {orders.IParamsOnlineByClient} request ParamsOnlineByClient message or plain object
         * @param {orders.Orders.OnlineByClientCallback} callback Node-style callback called with the error, if any, and ResponseOnlineByClient
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Orders.prototype.onlineByClient = function onlineByClient(request, callback) {
            return this.rpcCall(onlineByClient, $root.orders.ParamsOnlineByClient, $root.orders.ResponseOnlineByClient, request, callback);
        }, "name", { value: "OnlineByClient" });

        /**
         * Calls OnlineByClient.
         * @function onlineByClient
         * @memberof orders.Orders
         * @instance
         * @param {orders.IParamsOnlineByClient} request ParamsOnlineByClient message or plain object
         * @returns {Promise<orders.ResponseOnlineByClient>} Promise
         * @variation 2
         */

        return Orders;
    })();

    orders.PingResponse = (function() {

        /**
         * Properties of a PingResponse.
         * @memberof orders
         * @interface IPingResponse
         * @property {string|null} [response] PingResponse response
         */

        /**
         * Constructs a new PingResponse.
         * @memberof orders
         * @classdesc Represents a PingResponse.
         * @implements IPingResponse
         * @constructor
         * @param {orders.IPingResponse=} [properties] Properties to set
         */
        function PingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingResponse response.
         * @member {string} response
         * @memberof orders.PingResponse
         * @instance
         */
        PingResponse.prototype.response = "";

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @function create
         * @memberof orders.PingResponse
         * @static
         * @param {orders.IPingResponse=} [properties] Properties to set
         * @returns {orders.PingResponse} PingResponse instance
         */
        PingResponse.create = function create(properties) {
            return new PingResponse(properties);
        };

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link orders.PingResponse.verify|verify} messages.
         * @function encode
         * @memberof orders.PingResponse
         * @static
         * @param {orders.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && message.hasOwnProperty("response"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.response);
            return writer;
        };

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link orders.PingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof orders.PingResponse
         * @static
         * @param {orders.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof orders.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {orders.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.orders.PingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof orders.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {orders.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingResponse message.
         * @function verify
         * @memberof orders.PingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!$util.isString(message.response))
                    return "response: string expected";
            return null;
        };

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof orders.PingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {orders.PingResponse} PingResponse
         */
        PingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.orders.PingResponse)
                return object;
            var message = new $root.orders.PingResponse();
            if (object.response != null)
                message.response = String(object.response);
            return message;
        };

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof orders.PingResponse
         * @static
         * @param {orders.PingResponse} message PingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.response = "";
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = message.response;
            return object;
        };

        /**
         * Converts this PingResponse to JSON.
         * @function toJSON
         * @memberof orders.PingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingResponse;
    })();

    orders.ParamsOfflineByClient = (function() {

        /**
         * Properties of a ParamsOfflineByClient.
         * @memberof orders
         * @interface IParamsOfflineByClient
         * @property {number|null} [clientId] ParamsOfflineByClient clientId
         */

        /**
         * Constructs a new ParamsOfflineByClient.
         * @memberof orders
         * @classdesc Represents a ParamsOfflineByClient.
         * @implements IParamsOfflineByClient
         * @constructor
         * @param {orders.IParamsOfflineByClient=} [properties] Properties to set
         */
        function ParamsOfflineByClient(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsOfflineByClient clientId.
         * @member {number} clientId
         * @memberof orders.ParamsOfflineByClient
         * @instance
         */
        ParamsOfflineByClient.prototype.clientId = 0;

        /**
         * Creates a new ParamsOfflineByClient instance using the specified properties.
         * @function create
         * @memberof orders.ParamsOfflineByClient
         * @static
         * @param {orders.IParamsOfflineByClient=} [properties] Properties to set
         * @returns {orders.ParamsOfflineByClient} ParamsOfflineByClient instance
         */
        ParamsOfflineByClient.create = function create(properties) {
            return new ParamsOfflineByClient(properties);
        };

        /**
         * Encodes the specified ParamsOfflineByClient message. Does not implicitly {@link orders.ParamsOfflineByClient.verify|verify} messages.
         * @function encode
         * @memberof orders.ParamsOfflineByClient
         * @static
         * @param {orders.IParamsOfflineByClient} message ParamsOfflineByClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsOfflineByClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientId);
            return writer;
        };

        /**
         * Encodes the specified ParamsOfflineByClient message, length delimited. Does not implicitly {@link orders.ParamsOfflineByClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof orders.ParamsOfflineByClient
         * @static
         * @param {orders.IParamsOfflineByClient} message ParamsOfflineByClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsOfflineByClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParamsOfflineByClient message from the specified reader or buffer.
         * @function decode
         * @memberof orders.ParamsOfflineByClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {orders.ParamsOfflineByClient} ParamsOfflineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsOfflineByClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.orders.ParamsOfflineByClient();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParamsOfflineByClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof orders.ParamsOfflineByClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {orders.ParamsOfflineByClient} ParamsOfflineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsOfflineByClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParamsOfflineByClient message.
         * @function verify
         * @memberof orders.ParamsOfflineByClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParamsOfflineByClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId))
                    return "clientId: integer expected";
            return null;
        };

        /**
         * Creates a ParamsOfflineByClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof orders.ParamsOfflineByClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {orders.ParamsOfflineByClient} ParamsOfflineByClient
         */
        ParamsOfflineByClient.fromObject = function fromObject(object) {
            if (object instanceof $root.orders.ParamsOfflineByClient)
                return object;
            var message = new $root.orders.ParamsOfflineByClient();
            if (object.clientId != null)
                message.clientId = object.clientId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ParamsOfflineByClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof orders.ParamsOfflineByClient
         * @static
         * @param {orders.ParamsOfflineByClient} message ParamsOfflineByClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParamsOfflineByClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.clientId = 0;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            return object;
        };

        /**
         * Converts this ParamsOfflineByClient to JSON.
         * @function toJSON
         * @memberof orders.ParamsOfflineByClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParamsOfflineByClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ParamsOfflineByClient;
    })();

    orders.ResponseOfflineByClient = (function() {

        /**
         * Properties of a ResponseOfflineByClient.
         * @memberof orders
         * @interface IResponseOfflineByClient
         * @property {Array.<orders.IOfflineOrder>|null} [orders] ResponseOfflineByClient orders
         */

        /**
         * Constructs a new ResponseOfflineByClient.
         * @memberof orders
         * @classdesc Represents a ResponseOfflineByClient.
         * @implements IResponseOfflineByClient
         * @constructor
         * @param {orders.IResponseOfflineByClient=} [properties] Properties to set
         */
        function ResponseOfflineByClient(properties) {
            this.orders = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseOfflineByClient orders.
         * @member {Array.<orders.IOfflineOrder>} orders
         * @memberof orders.ResponseOfflineByClient
         * @instance
         */
        ResponseOfflineByClient.prototype.orders = $util.emptyArray;

        /**
         * Creates a new ResponseOfflineByClient instance using the specified properties.
         * @function create
         * @memberof orders.ResponseOfflineByClient
         * @static
         * @param {orders.IResponseOfflineByClient=} [properties] Properties to set
         * @returns {orders.ResponseOfflineByClient} ResponseOfflineByClient instance
         */
        ResponseOfflineByClient.create = function create(properties) {
            return new ResponseOfflineByClient(properties);
        };

        /**
         * Encodes the specified ResponseOfflineByClient message. Does not implicitly {@link orders.ResponseOfflineByClient.verify|verify} messages.
         * @function encode
         * @memberof orders.ResponseOfflineByClient
         * @static
         * @param {orders.IResponseOfflineByClient} message ResponseOfflineByClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOfflineByClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orders != null && message.orders.length)
                for (var i = 0; i < message.orders.length; ++i)
                    $root.orders.OfflineOrder.encode(message.orders[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseOfflineByClient message, length delimited. Does not implicitly {@link orders.ResponseOfflineByClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof orders.ResponseOfflineByClient
         * @static
         * @param {orders.IResponseOfflineByClient} message ResponseOfflineByClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOfflineByClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseOfflineByClient message from the specified reader or buffer.
         * @function decode
         * @memberof orders.ResponseOfflineByClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {orders.ResponseOfflineByClient} ResponseOfflineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOfflineByClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.orders.ResponseOfflineByClient();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.orders && message.orders.length))
                        message.orders = [];
                    message.orders.push($root.orders.OfflineOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseOfflineByClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof orders.ResponseOfflineByClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {orders.ResponseOfflineByClient} ResponseOfflineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOfflineByClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseOfflineByClient message.
         * @function verify
         * @memberof orders.ResponseOfflineByClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseOfflineByClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orders != null && message.hasOwnProperty("orders")) {
                if (!Array.isArray(message.orders))
                    return "orders: array expected";
                for (var i = 0; i < message.orders.length; ++i) {
                    var error = $root.orders.OfflineOrder.verify(message.orders[i]);
                    if (error)
                        return "orders." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResponseOfflineByClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof orders.ResponseOfflineByClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {orders.ResponseOfflineByClient} ResponseOfflineByClient
         */
        ResponseOfflineByClient.fromObject = function fromObject(object) {
            if (object instanceof $root.orders.ResponseOfflineByClient)
                return object;
            var message = new $root.orders.ResponseOfflineByClient();
            if (object.orders) {
                if (!Array.isArray(object.orders))
                    throw TypeError(".orders.ResponseOfflineByClient.orders: array expected");
                message.orders = [];
                for (var i = 0; i < object.orders.length; ++i) {
                    if (typeof object.orders[i] !== "object")
                        throw TypeError(".orders.ResponseOfflineByClient.orders: object expected");
                    message.orders[i] = $root.orders.OfflineOrder.fromObject(object.orders[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseOfflineByClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof orders.ResponseOfflineByClient
         * @static
         * @param {orders.ResponseOfflineByClient} message ResponseOfflineByClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseOfflineByClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.orders = [];
            if (message.orders && message.orders.length) {
                object.orders = [];
                for (var j = 0; j < message.orders.length; ++j)
                    object.orders[j] = $root.orders.OfflineOrder.toObject(message.orders[j], options);
            }
            return object;
        };

        /**
         * Converts this ResponseOfflineByClient to JSON.
         * @function toJSON
         * @memberof orders.ResponseOfflineByClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseOfflineByClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseOfflineByClient;
    })();

    orders.ParamsOnlineByClient = (function() {

        /**
         * Properties of a ParamsOnlineByClient.
         * @memberof orders
         * @interface IParamsOnlineByClient
         * @property {number|null} [clientId] ParamsOnlineByClient clientId
         */

        /**
         * Constructs a new ParamsOnlineByClient.
         * @memberof orders
         * @classdesc Represents a ParamsOnlineByClient.
         * @implements IParamsOnlineByClient
         * @constructor
         * @param {orders.IParamsOnlineByClient=} [properties] Properties to set
         */
        function ParamsOnlineByClient(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsOnlineByClient clientId.
         * @member {number} clientId
         * @memberof orders.ParamsOnlineByClient
         * @instance
         */
        ParamsOnlineByClient.prototype.clientId = 0;

        /**
         * Creates a new ParamsOnlineByClient instance using the specified properties.
         * @function create
         * @memberof orders.ParamsOnlineByClient
         * @static
         * @param {orders.IParamsOnlineByClient=} [properties] Properties to set
         * @returns {orders.ParamsOnlineByClient} ParamsOnlineByClient instance
         */
        ParamsOnlineByClient.create = function create(properties) {
            return new ParamsOnlineByClient(properties);
        };

        /**
         * Encodes the specified ParamsOnlineByClient message. Does not implicitly {@link orders.ParamsOnlineByClient.verify|verify} messages.
         * @function encode
         * @memberof orders.ParamsOnlineByClient
         * @static
         * @param {orders.IParamsOnlineByClient} message ParamsOnlineByClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsOnlineByClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientId);
            return writer;
        };

        /**
         * Encodes the specified ParamsOnlineByClient message, length delimited. Does not implicitly {@link orders.ParamsOnlineByClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof orders.ParamsOnlineByClient
         * @static
         * @param {orders.IParamsOnlineByClient} message ParamsOnlineByClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsOnlineByClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParamsOnlineByClient message from the specified reader or buffer.
         * @function decode
         * @memberof orders.ParamsOnlineByClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {orders.ParamsOnlineByClient} ParamsOnlineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsOnlineByClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.orders.ParamsOnlineByClient();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParamsOnlineByClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof orders.ParamsOnlineByClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {orders.ParamsOnlineByClient} ParamsOnlineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsOnlineByClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParamsOnlineByClient message.
         * @function verify
         * @memberof orders.ParamsOnlineByClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParamsOnlineByClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId))
                    return "clientId: integer expected";
            return null;
        };

        /**
         * Creates a ParamsOnlineByClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof orders.ParamsOnlineByClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {orders.ParamsOnlineByClient} ParamsOnlineByClient
         */
        ParamsOnlineByClient.fromObject = function fromObject(object) {
            if (object instanceof $root.orders.ParamsOnlineByClient)
                return object;
            var message = new $root.orders.ParamsOnlineByClient();
            if (object.clientId != null)
                message.clientId = object.clientId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ParamsOnlineByClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof orders.ParamsOnlineByClient
         * @static
         * @param {orders.ParamsOnlineByClient} message ParamsOnlineByClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParamsOnlineByClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.clientId = 0;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            return object;
        };

        /**
         * Converts this ParamsOnlineByClient to JSON.
         * @function toJSON
         * @memberof orders.ParamsOnlineByClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParamsOnlineByClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ParamsOnlineByClient;
    })();

    orders.ResponseOnlineByClient = (function() {

        /**
         * Properties of a ResponseOnlineByClient.
         * @memberof orders
         * @interface IResponseOnlineByClient
         * @property {Array.<number>|null} [order] ResponseOnlineByClient order
         */

        /**
         * Constructs a new ResponseOnlineByClient.
         * @memberof orders
         * @classdesc Represents a ResponseOnlineByClient.
         * @implements IResponseOnlineByClient
         * @constructor
         * @param {orders.IResponseOnlineByClient=} [properties] Properties to set
         */
        function ResponseOnlineByClient(properties) {
            this.order = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseOnlineByClient order.
         * @member {Array.<number>} order
         * @memberof orders.ResponseOnlineByClient
         * @instance
         */
        ResponseOnlineByClient.prototype.order = $util.emptyArray;

        /**
         * Creates a new ResponseOnlineByClient instance using the specified properties.
         * @function create
         * @memberof orders.ResponseOnlineByClient
         * @static
         * @param {orders.IResponseOnlineByClient=} [properties] Properties to set
         * @returns {orders.ResponseOnlineByClient} ResponseOnlineByClient instance
         */
        ResponseOnlineByClient.create = function create(properties) {
            return new ResponseOnlineByClient(properties);
        };

        /**
         * Encodes the specified ResponseOnlineByClient message. Does not implicitly {@link orders.ResponseOnlineByClient.verify|verify} messages.
         * @function encode
         * @memberof orders.ResponseOnlineByClient
         * @static
         * @param {orders.IResponseOnlineByClient} message ResponseOnlineByClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOnlineByClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.order != null && message.order.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.order.length; ++i)
                    writer.int32(message.order[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ResponseOnlineByClient message, length delimited. Does not implicitly {@link orders.ResponseOnlineByClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof orders.ResponseOnlineByClient
         * @static
         * @param {orders.IResponseOnlineByClient} message ResponseOnlineByClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseOnlineByClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseOnlineByClient message from the specified reader or buffer.
         * @function decode
         * @memberof orders.ResponseOnlineByClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {orders.ResponseOnlineByClient} ResponseOnlineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOnlineByClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.orders.ResponseOnlineByClient();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.order && message.order.length))
                        message.order = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.order.push(reader.int32());
                    } else
                        message.order.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseOnlineByClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof orders.ResponseOnlineByClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {orders.ResponseOnlineByClient} ResponseOnlineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseOnlineByClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseOnlineByClient message.
         * @function verify
         * @memberof orders.ResponseOnlineByClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseOnlineByClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.order != null && message.hasOwnProperty("order")) {
                if (!Array.isArray(message.order))
                    return "order: array expected";
                for (var i = 0; i < message.order.length; ++i)
                    if (!$util.isInteger(message.order[i]))
                        return "order: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a ResponseOnlineByClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof orders.ResponseOnlineByClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {orders.ResponseOnlineByClient} ResponseOnlineByClient
         */
        ResponseOnlineByClient.fromObject = function fromObject(object) {
            if (object instanceof $root.orders.ResponseOnlineByClient)
                return object;
            var message = new $root.orders.ResponseOnlineByClient();
            if (object.order) {
                if (!Array.isArray(object.order))
                    throw TypeError(".orders.ResponseOnlineByClient.order: array expected");
                message.order = [];
                for (var i = 0; i < object.order.length; ++i)
                    message.order[i] = object.order[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseOnlineByClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof orders.ResponseOnlineByClient
         * @static
         * @param {orders.ResponseOnlineByClient} message ResponseOnlineByClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseOnlineByClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.order = [];
            if (message.order && message.order.length) {
                object.order = [];
                for (var j = 0; j < message.order.length; ++j)
                    object.order[j] = message.order[j];
            }
            return object;
        };

        /**
         * Converts this ResponseOnlineByClient to JSON.
         * @function toJSON
         * @memberof orders.ResponseOnlineByClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseOnlineByClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseOnlineByClient;
    })();

    orders.OfflineOrder = (function() {

        /**
         * Properties of an OfflineOrder.
         * @memberof orders
         * @interface IOfflineOrder
         * @property {string|null} [storeName] OfflineOrder storeName
         * @property {number|null} [storeId] OfflineOrder storeId
         * @property {number|null} [cashboxId] OfflineOrder cashboxId
         * @property {string|null} [orderId] OfflineOrder orderId
         * @property {number|null} [rowReceipt] OfflineOrder rowReceipt
         * @property {string|null} [date] OfflineOrder date
         * @property {string|null} [time] OfflineOrder time
         * @property {string|null} [article] OfflineOrder article
         * @property {string|null} [title] OfflineOrder title
         * @property {string|null} [color] OfflineOrder color
         * @property {string|null} [size] OfflineOrder size
         * @property {string|null} [barcode] OfflineOrder barcode
         * @property {number|null} [qty] OfflineOrder qty
         * @property {number|null} [totalGross] OfflineOrder totalGross
         * @property {number|null} [discount] OfflineOrder discount
         * @property {number|null} [total] OfflineOrder total
         * @property {number|null} [clientId] OfflineOrder clientId
         * @property {string|null} [seller] OfflineOrder seller
         * @property {string|null} [family] OfflineOrder family
         * @property {number|null} [operation] OfflineOrder operation
         * @property {string|null} [source] OfflineOrder source
         * @property {number|null} [bonusesWasted] OfflineOrder bonusesWasted
         * @property {number|null} [bonusesAccrued] OfflineOrder bonusesAccrued
         */

        /**
         * Constructs a new OfflineOrder.
         * @memberof orders
         * @classdesc Represents an OfflineOrder.
         * @implements IOfflineOrder
         * @constructor
         * @param {orders.IOfflineOrder=} [properties] Properties to set
         */
        function OfflineOrder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OfflineOrder storeName.
         * @member {string} storeName
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.storeName = "";

        /**
         * OfflineOrder storeId.
         * @member {number} storeId
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.storeId = 0;

        /**
         * OfflineOrder cashboxId.
         * @member {number} cashboxId
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.cashboxId = 0;

        /**
         * OfflineOrder orderId.
         * @member {string} orderId
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.orderId = "";

        /**
         * OfflineOrder rowReceipt.
         * @member {number} rowReceipt
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.rowReceipt = 0;

        /**
         * OfflineOrder date.
         * @member {string} date
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.date = "";

        /**
         * OfflineOrder time.
         * @member {string} time
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.time = "";

        /**
         * OfflineOrder article.
         * @member {string} article
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.article = "";

        /**
         * OfflineOrder title.
         * @member {string} title
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.title = "";

        /**
         * OfflineOrder color.
         * @member {string} color
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.color = "";

        /**
         * OfflineOrder size.
         * @member {string} size
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.size = "";

        /**
         * OfflineOrder barcode.
         * @member {string} barcode
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.barcode = "";

        /**
         * OfflineOrder qty.
         * @member {number} qty
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.qty = 0;

        /**
         * OfflineOrder totalGross.
         * @member {number} totalGross
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.totalGross = 0;

        /**
         * OfflineOrder discount.
         * @member {number} discount
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.discount = 0;

        /**
         * OfflineOrder total.
         * @member {number} total
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.total = 0;

        /**
         * OfflineOrder clientId.
         * @member {number} clientId
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.clientId = 0;

        /**
         * OfflineOrder seller.
         * @member {string} seller
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.seller = "";

        /**
         * OfflineOrder family.
         * @member {string} family
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.family = "";

        /**
         * OfflineOrder operation.
         * @member {number} operation
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.operation = 0;

        /**
         * OfflineOrder source.
         * @member {string} source
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.source = "";

        /**
         * OfflineOrder bonusesWasted.
         * @member {number} bonusesWasted
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.bonusesWasted = 0;

        /**
         * OfflineOrder bonusesAccrued.
         * @member {number} bonusesAccrued
         * @memberof orders.OfflineOrder
         * @instance
         */
        OfflineOrder.prototype.bonusesAccrued = 0;

        /**
         * Creates a new OfflineOrder instance using the specified properties.
         * @function create
         * @memberof orders.OfflineOrder
         * @static
         * @param {orders.IOfflineOrder=} [properties] Properties to set
         * @returns {orders.OfflineOrder} OfflineOrder instance
         */
        OfflineOrder.create = function create(properties) {
            return new OfflineOrder(properties);
        };

        /**
         * Encodes the specified OfflineOrder message. Does not implicitly {@link orders.OfflineOrder.verify|verify} messages.
         * @function encode
         * @memberof orders.OfflineOrder
         * @static
         * @param {orders.IOfflineOrder} message OfflineOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.storeName != null && message.hasOwnProperty("storeName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.storeName);
            if (message.storeId != null && message.hasOwnProperty("storeId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.storeId);
            if (message.cashboxId != null && message.hasOwnProperty("cashboxId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cashboxId);
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderId);
            if (message.rowReceipt != null && message.hasOwnProperty("rowReceipt"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rowReceipt);
            if (message.date != null && message.hasOwnProperty("date"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.date);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.time);
            if (message.article != null && message.hasOwnProperty("article"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.article);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.title);
            if (message.color != null && message.hasOwnProperty("color"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.color);
            if (message.size != null && message.hasOwnProperty("size"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.size);
            if (message.barcode != null && message.hasOwnProperty("barcode"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.barcode);
            if (message.qty != null && message.hasOwnProperty("qty"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.qty);
            if (message.totalGross != null && message.hasOwnProperty("totalGross"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.totalGross);
            if (message.discount != null && message.hasOwnProperty("discount"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.discount);
            if (message.total != null && message.hasOwnProperty("total"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.total);
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.clientId);
            if (message.seller != null && message.hasOwnProperty("seller"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.seller);
            if (message.family != null && message.hasOwnProperty("family"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.family);
            if (message.operation != null && message.hasOwnProperty("operation"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.operation);
            if (message.source != null && message.hasOwnProperty("source"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.source);
            if (message.bonusesWasted != null && message.hasOwnProperty("bonusesWasted"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.bonusesWasted);
            if (message.bonusesAccrued != null && message.hasOwnProperty("bonusesAccrued"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.bonusesAccrued);
            return writer;
        };

        /**
         * Encodes the specified OfflineOrder message, length delimited. Does not implicitly {@link orders.OfflineOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof orders.OfflineOrder
         * @static
         * @param {orders.IOfflineOrder} message OfflineOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfflineOrder message from the specified reader or buffer.
         * @function decode
         * @memberof orders.OfflineOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {orders.OfflineOrder} OfflineOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.orders.OfflineOrder();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.storeName = reader.string();
                    break;
                case 2:
                    message.storeId = reader.int32();
                    break;
                case 3:
                    message.cashboxId = reader.int32();
                    break;
                case 4:
                    message.orderId = reader.string();
                    break;
                case 5:
                    message.rowReceipt = reader.int32();
                    break;
                case 6:
                    message.date = reader.string();
                    break;
                case 7:
                    message.time = reader.string();
                    break;
                case 8:
                    message.article = reader.string();
                    break;
                case 9:
                    message.title = reader.string();
                    break;
                case 10:
                    message.color = reader.string();
                    break;
                case 11:
                    message.size = reader.string();
                    break;
                case 12:
                    message.barcode = reader.string();
                    break;
                case 13:
                    message.qty = reader.int32();
                    break;
                case 14:
                    message.totalGross = reader.int32();
                    break;
                case 15:
                    message.discount = reader.int32();
                    break;
                case 16:
                    message.total = reader.int32();
                    break;
                case 17:
                    message.clientId = reader.int32();
                    break;
                case 18:
                    message.seller = reader.string();
                    break;
                case 19:
                    message.family = reader.string();
                    break;
                case 20:
                    message.operation = reader.int32();
                    break;
                case 21:
                    message.source = reader.string();
                    break;
                case 22:
                    message.bonusesWasted = reader.int32();
                    break;
                case 23:
                    message.bonusesAccrued = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfflineOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof orders.OfflineOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {orders.OfflineOrder} OfflineOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfflineOrder message.
         * @function verify
         * @memberof orders.OfflineOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfflineOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.storeName != null && message.hasOwnProperty("storeName"))
                if (!$util.isString(message.storeName))
                    return "storeName: string expected";
            if (message.storeId != null && message.hasOwnProperty("storeId"))
                if (!$util.isInteger(message.storeId))
                    return "storeId: integer expected";
            if (message.cashboxId != null && message.hasOwnProperty("cashboxId"))
                if (!$util.isInteger(message.cashboxId))
                    return "cashboxId: integer expected";
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                if (!$util.isString(message.orderId))
                    return "orderId: string expected";
            if (message.rowReceipt != null && message.hasOwnProperty("rowReceipt"))
                if (!$util.isInteger(message.rowReceipt))
                    return "rowReceipt: integer expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isString(message.date))
                    return "date: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isString(message.time))
                    return "time: string expected";
            if (message.article != null && message.hasOwnProperty("article"))
                if (!$util.isString(message.article))
                    return "article: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isString(message.size))
                    return "size: string expected";
            if (message.barcode != null && message.hasOwnProperty("barcode"))
                if (!$util.isString(message.barcode))
                    return "barcode: string expected";
            if (message.qty != null && message.hasOwnProperty("qty"))
                if (!$util.isInteger(message.qty))
                    return "qty: integer expected";
            if (message.totalGross != null && message.hasOwnProperty("totalGross"))
                if (!$util.isInteger(message.totalGross))
                    return "totalGross: integer expected";
            if (message.discount != null && message.hasOwnProperty("discount"))
                if (!$util.isInteger(message.discount))
                    return "discount: integer expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId))
                    return "clientId: integer expected";
            if (message.seller != null && message.hasOwnProperty("seller"))
                if (!$util.isString(message.seller))
                    return "seller: string expected";
            if (message.family != null && message.hasOwnProperty("family"))
                if (!$util.isString(message.family))
                    return "family: string expected";
            if (message.operation != null && message.hasOwnProperty("operation"))
                if (!$util.isInteger(message.operation))
                    return "operation: integer expected";
            if (message.source != null && message.hasOwnProperty("source"))
                if (!$util.isString(message.source))
                    return "source: string expected";
            if (message.bonusesWasted != null && message.hasOwnProperty("bonusesWasted"))
                if (!$util.isInteger(message.bonusesWasted))
                    return "bonusesWasted: integer expected";
            if (message.bonusesAccrued != null && message.hasOwnProperty("bonusesAccrued"))
                if (!$util.isInteger(message.bonusesAccrued))
                    return "bonusesAccrued: integer expected";
            return null;
        };

        /**
         * Creates an OfflineOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof orders.OfflineOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {orders.OfflineOrder} OfflineOrder
         */
        OfflineOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.orders.OfflineOrder)
                return object;
            var message = new $root.orders.OfflineOrder();
            if (object.storeName != null)
                message.storeName = String(object.storeName);
            if (object.storeId != null)
                message.storeId = object.storeId | 0;
            if (object.cashboxId != null)
                message.cashboxId = object.cashboxId | 0;
            if (object.orderId != null)
                message.orderId = String(object.orderId);
            if (object.rowReceipt != null)
                message.rowReceipt = object.rowReceipt | 0;
            if (object.date != null)
                message.date = String(object.date);
            if (object.time != null)
                message.time = String(object.time);
            if (object.article != null)
                message.article = String(object.article);
            if (object.title != null)
                message.title = String(object.title);
            if (object.color != null)
                message.color = String(object.color);
            if (object.size != null)
                message.size = String(object.size);
            if (object.barcode != null)
                message.barcode = String(object.barcode);
            if (object.qty != null)
                message.qty = object.qty | 0;
            if (object.totalGross != null)
                message.totalGross = object.totalGross | 0;
            if (object.discount != null)
                message.discount = object.discount | 0;
            if (object.total != null)
                message.total = object.total | 0;
            if (object.clientId != null)
                message.clientId = object.clientId | 0;
            if (object.seller != null)
                message.seller = String(object.seller);
            if (object.family != null)
                message.family = String(object.family);
            if (object.operation != null)
                message.operation = object.operation | 0;
            if (object.source != null)
                message.source = String(object.source);
            if (object.bonusesWasted != null)
                message.bonusesWasted = object.bonusesWasted | 0;
            if (object.bonusesAccrued != null)
                message.bonusesAccrued = object.bonusesAccrued | 0;
            return message;
        };

        /**
         * Creates a plain object from an OfflineOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof orders.OfflineOrder
         * @static
         * @param {orders.OfflineOrder} message OfflineOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfflineOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.storeName = "";
                object.storeId = 0;
                object.cashboxId = 0;
                object.orderId = "";
                object.rowReceipt = 0;
                object.date = "";
                object.time = "";
                object.article = "";
                object.title = "";
                object.color = "";
                object.size = "";
                object.barcode = "";
                object.qty = 0;
                object.totalGross = 0;
                object.discount = 0;
                object.total = 0;
                object.clientId = 0;
                object.seller = "";
                object.family = "";
                object.operation = 0;
                object.source = "";
                object.bonusesWasted = 0;
                object.bonusesAccrued = 0;
            }
            if (message.storeName != null && message.hasOwnProperty("storeName"))
                object.storeName = message.storeName;
            if (message.storeId != null && message.hasOwnProperty("storeId"))
                object.storeId = message.storeId;
            if (message.cashboxId != null && message.hasOwnProperty("cashboxId"))
                object.cashboxId = message.cashboxId;
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                object.orderId = message.orderId;
            if (message.rowReceipt != null && message.hasOwnProperty("rowReceipt"))
                object.rowReceipt = message.rowReceipt;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.article != null && message.hasOwnProperty("article"))
                object.article = message.article;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.barcode != null && message.hasOwnProperty("barcode"))
                object.barcode = message.barcode;
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = message.qty;
            if (message.totalGross != null && message.hasOwnProperty("totalGross"))
                object.totalGross = message.totalGross;
            if (message.discount != null && message.hasOwnProperty("discount"))
                object.discount = message.discount;
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.seller != null && message.hasOwnProperty("seller"))
                object.seller = message.seller;
            if (message.family != null && message.hasOwnProperty("family"))
                object.family = message.family;
            if (message.operation != null && message.hasOwnProperty("operation"))
                object.operation = message.operation;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            if (message.bonusesWasted != null && message.hasOwnProperty("bonusesWasted"))
                object.bonusesWasted = message.bonusesWasted;
            if (message.bonusesAccrued != null && message.hasOwnProperty("bonusesAccrued"))
                object.bonusesAccrued = message.bonusesAccrued;
            return object;
        };

        /**
         * Converts this OfflineOrder to JSON.
         * @function toJSON
         * @memberof orders.OfflineOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfflineOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OfflineOrder;
    })();

    return orders;
})();

$root.payments = (function() {

    /**
     * Namespace payments.
     * @exports payments
     * @namespace
     */
    var payments = {};

    payments.Payments = (function() {

        /**
         * Constructs a new Payments service.
         * @memberof payments
         * @classdesc Represents a Payments
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Payments(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Payments.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Payments;

        /**
         * Creates new Payments service using the specified rpc implementation.
         * @function create
         * @memberof payments.Payments
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Payments} RPC service. Useful where requests and/or responses are streamed.
         */
        Payments.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link payments.Payments#ping}.
         * @memberof payments.Payments
         * @typedef PingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {payments.PingResponse} [response] PingResponse
         */

        /**
         * Calls Ping.
         * @function ping
         * @memberof payments.Payments
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {payments.Payments.PingCallback} callback Node-style callback called with the error, if any, and PingResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Payments.prototype.ping = function ping(request, callback) {
            return this.rpcCall(ping, $root.google.protobuf.Empty, $root.payments.PingResponse, request, callback);
        }, "name", { value: "Ping" });

        /**
         * Calls Ping.
         * @function ping
         * @memberof payments.Payments
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<payments.PingResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link payments.Payments#getCardsByUserID}.
         * @memberof payments.Payments
         * @typedef GetCardsByUserIDCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {payments.ResponseGetCardByUserID} [response] ResponseGetCardByUserID
         */

        /**
         * Calls GetCardsByUserID.
         * @function getCardsByUserID
         * @memberof payments.Payments
         * @instance
         * @param {payments.IParamsGetCardByUserID} request ParamsGetCardByUserID message or plain object
         * @param {payments.Payments.GetCardsByUserIDCallback} callback Node-style callback called with the error, if any, and ResponseGetCardByUserID
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Payments.prototype.getCardsByUserID = function getCardsByUserID(request, callback) {
            return this.rpcCall(getCardsByUserID, $root.payments.ParamsGetCardByUserID, $root.payments.ResponseGetCardByUserID, request, callback);
        }, "name", { value: "GetCardsByUserID" });

        /**
         * Calls GetCardsByUserID.
         * @function getCardsByUserID
         * @memberof payments.Payments
         * @instance
         * @param {payments.IParamsGetCardByUserID} request ParamsGetCardByUserID message or plain object
         * @returns {Promise<payments.ResponseGetCardByUserID>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link payments.Payments#saveUserCard}.
         * @memberof payments.Payments
         * @typedef SaveUserCardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {payments.ResponseSuccess} [response] ResponseSuccess
         */

        /**
         * Calls SaveUserCard.
         * @function saveUserCard
         * @memberof payments.Payments
         * @instance
         * @param {payments.IUserCard} request UserCard message or plain object
         * @param {payments.Payments.SaveUserCardCallback} callback Node-style callback called with the error, if any, and ResponseSuccess
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Payments.prototype.saveUserCard = function saveUserCard(request, callback) {
            return this.rpcCall(saveUserCard, $root.payments.UserCard, $root.payments.ResponseSuccess, request, callback);
        }, "name", { value: "SaveUserCard" });

        /**
         * Calls SaveUserCard.
         * @function saveUserCard
         * @memberof payments.Payments
         * @instance
         * @param {payments.IUserCard} request UserCard message or plain object
         * @returns {Promise<payments.ResponseSuccess>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link payments.Payments#deleteCardByID}.
         * @memberof payments.Payments
         * @typedef DeleteCardByIDCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {payments.ResponseSuccess} [response] ResponseSuccess
         */

        /**
         * Calls DeleteCardByID.
         * @function deleteCardByID
         * @memberof payments.Payments
         * @instance
         * @param {payments.IParamsDeleteCardByID} request ParamsDeleteCardByID message or plain object
         * @param {payments.Payments.DeleteCardByIDCallback} callback Node-style callback called with the error, if any, and ResponseSuccess
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Payments.prototype.deleteCardByID = function deleteCardByID(request, callback) {
            return this.rpcCall(deleteCardByID, $root.payments.ParamsDeleteCardByID, $root.payments.ResponseSuccess, request, callback);
        }, "name", { value: "DeleteCardByID" });

        /**
         * Calls DeleteCardByID.
         * @function deleteCardByID
         * @memberof payments.Payments
         * @instance
         * @param {payments.IParamsDeleteCardByID} request ParamsDeleteCardByID message or plain object
         * @returns {Promise<payments.ResponseSuccess>} Promise
         * @variation 2
         */

        return Payments;
    })();

    payments.PingResponse = (function() {

        /**
         * Properties of a PingResponse.
         * @memberof payments
         * @interface IPingResponse
         * @property {string|null} [response] PingResponse response
         */

        /**
         * Constructs a new PingResponse.
         * @memberof payments
         * @classdesc Represents a PingResponse.
         * @implements IPingResponse
         * @constructor
         * @param {payments.IPingResponse=} [properties] Properties to set
         */
        function PingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingResponse response.
         * @member {string} response
         * @memberof payments.PingResponse
         * @instance
         */
        PingResponse.prototype.response = "";

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @function create
         * @memberof payments.PingResponse
         * @static
         * @param {payments.IPingResponse=} [properties] Properties to set
         * @returns {payments.PingResponse} PingResponse instance
         */
        PingResponse.create = function create(properties) {
            return new PingResponse(properties);
        };

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link payments.PingResponse.verify|verify} messages.
         * @function encode
         * @memberof payments.PingResponse
         * @static
         * @param {payments.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && message.hasOwnProperty("response"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.response);
            return writer;
        };

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link payments.PingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof payments.PingResponse
         * @static
         * @param {payments.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof payments.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {payments.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.payments.PingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof payments.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {payments.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingResponse message.
         * @function verify
         * @memberof payments.PingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!$util.isString(message.response))
                    return "response: string expected";
            return null;
        };

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof payments.PingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {payments.PingResponse} PingResponse
         */
        PingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.payments.PingResponse)
                return object;
            var message = new $root.payments.PingResponse();
            if (object.response != null)
                message.response = String(object.response);
            return message;
        };

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof payments.PingResponse
         * @static
         * @param {payments.PingResponse} message PingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.response = "";
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = message.response;
            return object;
        };

        /**
         * Converts this PingResponse to JSON.
         * @function toJSON
         * @memberof payments.PingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingResponse;
    })();

    payments.ParamsGetCardByUserID = (function() {

        /**
         * Properties of a ParamsGetCardByUserID.
         * @memberof payments
         * @interface IParamsGetCardByUserID
         * @property {number|null} [userId] ParamsGetCardByUserID userId
         */

        /**
         * Constructs a new ParamsGetCardByUserID.
         * @memberof payments
         * @classdesc Represents a ParamsGetCardByUserID.
         * @implements IParamsGetCardByUserID
         * @constructor
         * @param {payments.IParamsGetCardByUserID=} [properties] Properties to set
         */
        function ParamsGetCardByUserID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsGetCardByUserID userId.
         * @member {number} userId
         * @memberof payments.ParamsGetCardByUserID
         * @instance
         */
        ParamsGetCardByUserID.prototype.userId = 0;

        /**
         * Creates a new ParamsGetCardByUserID instance using the specified properties.
         * @function create
         * @memberof payments.ParamsGetCardByUserID
         * @static
         * @param {payments.IParamsGetCardByUserID=} [properties] Properties to set
         * @returns {payments.ParamsGetCardByUserID} ParamsGetCardByUserID instance
         */
        ParamsGetCardByUserID.create = function create(properties) {
            return new ParamsGetCardByUserID(properties);
        };

        /**
         * Encodes the specified ParamsGetCardByUserID message. Does not implicitly {@link payments.ParamsGetCardByUserID.verify|verify} messages.
         * @function encode
         * @memberof payments.ParamsGetCardByUserID
         * @static
         * @param {payments.IParamsGetCardByUserID} message ParamsGetCardByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsGetCardByUserID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ParamsGetCardByUserID message, length delimited. Does not implicitly {@link payments.ParamsGetCardByUserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof payments.ParamsGetCardByUserID
         * @static
         * @param {payments.IParamsGetCardByUserID} message ParamsGetCardByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsGetCardByUserID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParamsGetCardByUserID message from the specified reader or buffer.
         * @function decode
         * @memberof payments.ParamsGetCardByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {payments.ParamsGetCardByUserID} ParamsGetCardByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsGetCardByUserID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.payments.ParamsGetCardByUserID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParamsGetCardByUserID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof payments.ParamsGetCardByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {payments.ParamsGetCardByUserID} ParamsGetCardByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsGetCardByUserID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParamsGetCardByUserID message.
         * @function verify
         * @memberof payments.ParamsGetCardByUserID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParamsGetCardByUserID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a ParamsGetCardByUserID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof payments.ParamsGetCardByUserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {payments.ParamsGetCardByUserID} ParamsGetCardByUserID
         */
        ParamsGetCardByUserID.fromObject = function fromObject(object) {
            if (object instanceof $root.payments.ParamsGetCardByUserID)
                return object;
            var message = new $root.payments.ParamsGetCardByUserID();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ParamsGetCardByUserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof payments.ParamsGetCardByUserID
         * @static
         * @param {payments.ParamsGetCardByUserID} message ParamsGetCardByUserID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParamsGetCardByUserID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this ParamsGetCardByUserID to JSON.
         * @function toJSON
         * @memberof payments.ParamsGetCardByUserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParamsGetCardByUserID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ParamsGetCardByUserID;
    })();

    payments.ResponseGetCardByUserID = (function() {

        /**
         * Properties of a ResponseGetCardByUserID.
         * @memberof payments
         * @interface IResponseGetCardByUserID
         * @property {number|null} [total] ResponseGetCardByUserID total
         * @property {Array.<payments.IUserCard>|null} [cards] ResponseGetCardByUserID cards
         */

        /**
         * Constructs a new ResponseGetCardByUserID.
         * @memberof payments
         * @classdesc Represents a ResponseGetCardByUserID.
         * @implements IResponseGetCardByUserID
         * @constructor
         * @param {payments.IResponseGetCardByUserID=} [properties] Properties to set
         */
        function ResponseGetCardByUserID(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseGetCardByUserID total.
         * @member {number} total
         * @memberof payments.ResponseGetCardByUserID
         * @instance
         */
        ResponseGetCardByUserID.prototype.total = 0;

        /**
         * ResponseGetCardByUserID cards.
         * @member {Array.<payments.IUserCard>} cards
         * @memberof payments.ResponseGetCardByUserID
         * @instance
         */
        ResponseGetCardByUserID.prototype.cards = $util.emptyArray;

        /**
         * Creates a new ResponseGetCardByUserID instance using the specified properties.
         * @function create
         * @memberof payments.ResponseGetCardByUserID
         * @static
         * @param {payments.IResponseGetCardByUserID=} [properties] Properties to set
         * @returns {payments.ResponseGetCardByUserID} ResponseGetCardByUserID instance
         */
        ResponseGetCardByUserID.create = function create(properties) {
            return new ResponseGetCardByUserID(properties);
        };

        /**
         * Encodes the specified ResponseGetCardByUserID message. Does not implicitly {@link payments.ResponseGetCardByUserID.verify|verify} messages.
         * @function encode
         * @memberof payments.ResponseGetCardByUserID
         * @static
         * @param {payments.IResponseGetCardByUserID} message ResponseGetCardByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseGetCardByUserID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.total != null && message.hasOwnProperty("total"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.total);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.payments.UserCard.encode(message.cards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseGetCardByUserID message, length delimited. Does not implicitly {@link payments.ResponseGetCardByUserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof payments.ResponseGetCardByUserID
         * @static
         * @param {payments.IResponseGetCardByUserID} message ResponseGetCardByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseGetCardByUserID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseGetCardByUserID message from the specified reader or buffer.
         * @function decode
         * @memberof payments.ResponseGetCardByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {payments.ResponseGetCardByUserID} ResponseGetCardByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseGetCardByUserID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.payments.ResponseGetCardByUserID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.total = reader.int32();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.payments.UserCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseGetCardByUserID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof payments.ResponseGetCardByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {payments.ResponseGetCardByUserID} ResponseGetCardByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseGetCardByUserID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseGetCardByUserID message.
         * @function verify
         * @memberof payments.ResponseGetCardByUserID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseGetCardByUserID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i) {
                    var error = $root.payments.UserCard.verify(message.cards[i]);
                    if (error)
                        return "cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResponseGetCardByUserID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof payments.ResponseGetCardByUserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {payments.ResponseGetCardByUserID} ResponseGetCardByUserID
         */
        ResponseGetCardByUserID.fromObject = function fromObject(object) {
            if (object instanceof $root.payments.ResponseGetCardByUserID)
                return object;
            var message = new $root.payments.ResponseGetCardByUserID();
            if (object.total != null)
                message.total = object.total | 0;
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".payments.ResponseGetCardByUserID.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i) {
                    if (typeof object.cards[i] !== "object")
                        throw TypeError(".payments.ResponseGetCardByUserID.cards: object expected");
                    message.cards[i] = $root.payments.UserCard.fromObject(object.cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseGetCardByUserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof payments.ResponseGetCardByUserID
         * @static
         * @param {payments.ResponseGetCardByUserID} message ResponseGetCardByUserID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseGetCardByUserID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (options.defaults)
                object.total = 0;
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = $root.payments.UserCard.toObject(message.cards[j], options);
            }
            return object;
        };

        /**
         * Converts this ResponseGetCardByUserID to JSON.
         * @function toJSON
         * @memberof payments.ResponseGetCardByUserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseGetCardByUserID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseGetCardByUserID;
    })();

    payments.ResponseSuccess = (function() {

        /**
         * Properties of a ResponseSuccess.
         * @memberof payments
         * @interface IResponseSuccess
         * @property {boolean|null} [ok] ResponseSuccess ok
         */

        /**
         * Constructs a new ResponseSuccess.
         * @memberof payments
         * @classdesc Represents a ResponseSuccess.
         * @implements IResponseSuccess
         * @constructor
         * @param {payments.IResponseSuccess=} [properties] Properties to set
         */
        function ResponseSuccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseSuccess ok.
         * @member {boolean} ok
         * @memberof payments.ResponseSuccess
         * @instance
         */
        ResponseSuccess.prototype.ok = false;

        /**
         * Creates a new ResponseSuccess instance using the specified properties.
         * @function create
         * @memberof payments.ResponseSuccess
         * @static
         * @param {payments.IResponseSuccess=} [properties] Properties to set
         * @returns {payments.ResponseSuccess} ResponseSuccess instance
         */
        ResponseSuccess.create = function create(properties) {
            return new ResponseSuccess(properties);
        };

        /**
         * Encodes the specified ResponseSuccess message. Does not implicitly {@link payments.ResponseSuccess.verify|verify} messages.
         * @function encode
         * @memberof payments.ResponseSuccess
         * @static
         * @param {payments.IResponseSuccess} message ResponseSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && message.hasOwnProperty("ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified ResponseSuccess message, length delimited. Does not implicitly {@link payments.ResponseSuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof payments.ResponseSuccess
         * @static
         * @param {payments.IResponseSuccess} message ResponseSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseSuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof payments.ResponseSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {payments.ResponseSuccess} ResponseSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.payments.ResponseSuccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseSuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof payments.ResponseSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {payments.ResponseSuccess} ResponseSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseSuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseSuccess message.
         * @function verify
         * @memberof payments.ResponseSuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseSuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a ResponseSuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof payments.ResponseSuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {payments.ResponseSuccess} ResponseSuccess
         */
        ResponseSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.payments.ResponseSuccess)
                return object;
            var message = new $root.payments.ResponseSuccess();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a ResponseSuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof payments.ResponseSuccess
         * @static
         * @param {payments.ResponseSuccess} message ResponseSuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseSuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ok = false;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this ResponseSuccess to JSON.
         * @function toJSON
         * @memberof payments.ResponseSuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseSuccess;
    })();

    payments.ParamsDeleteCardByID = (function() {

        /**
         * Properties of a ParamsDeleteCardByID.
         * @memberof payments
         * @interface IParamsDeleteCardByID
         * @property {number|null} [cardId] ParamsDeleteCardByID cardId
         */

        /**
         * Constructs a new ParamsDeleteCardByID.
         * @memberof payments
         * @classdesc Represents a ParamsDeleteCardByID.
         * @implements IParamsDeleteCardByID
         * @constructor
         * @param {payments.IParamsDeleteCardByID=} [properties] Properties to set
         */
        function ParamsDeleteCardByID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsDeleteCardByID cardId.
         * @member {number} cardId
         * @memberof payments.ParamsDeleteCardByID
         * @instance
         */
        ParamsDeleteCardByID.prototype.cardId = 0;

        /**
         * Creates a new ParamsDeleteCardByID instance using the specified properties.
         * @function create
         * @memberof payments.ParamsDeleteCardByID
         * @static
         * @param {payments.IParamsDeleteCardByID=} [properties] Properties to set
         * @returns {payments.ParamsDeleteCardByID} ParamsDeleteCardByID instance
         */
        ParamsDeleteCardByID.create = function create(properties) {
            return new ParamsDeleteCardByID(properties);
        };

        /**
         * Encodes the specified ParamsDeleteCardByID message. Does not implicitly {@link payments.ParamsDeleteCardByID.verify|verify} messages.
         * @function encode
         * @memberof payments.ParamsDeleteCardByID
         * @static
         * @param {payments.IParamsDeleteCardByID} message ParamsDeleteCardByID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsDeleteCardByID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardId);
            return writer;
        };

        /**
         * Encodes the specified ParamsDeleteCardByID message, length delimited. Does not implicitly {@link payments.ParamsDeleteCardByID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof payments.ParamsDeleteCardByID
         * @static
         * @param {payments.IParamsDeleteCardByID} message ParamsDeleteCardByID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsDeleteCardByID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParamsDeleteCardByID message from the specified reader or buffer.
         * @function decode
         * @memberof payments.ParamsDeleteCardByID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {payments.ParamsDeleteCardByID} ParamsDeleteCardByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsDeleteCardByID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.payments.ParamsDeleteCardByID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cardId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParamsDeleteCardByID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof payments.ParamsDeleteCardByID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {payments.ParamsDeleteCardByID} ParamsDeleteCardByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsDeleteCardByID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParamsDeleteCardByID message.
         * @function verify
         * @memberof payments.ParamsDeleteCardByID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParamsDeleteCardByID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                if (!$util.isInteger(message.cardId))
                    return "cardId: integer expected";
            return null;
        };

        /**
         * Creates a ParamsDeleteCardByID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof payments.ParamsDeleteCardByID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {payments.ParamsDeleteCardByID} ParamsDeleteCardByID
         */
        ParamsDeleteCardByID.fromObject = function fromObject(object) {
            if (object instanceof $root.payments.ParamsDeleteCardByID)
                return object;
            var message = new $root.payments.ParamsDeleteCardByID();
            if (object.cardId != null)
                message.cardId = object.cardId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ParamsDeleteCardByID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof payments.ParamsDeleteCardByID
         * @static
         * @param {payments.ParamsDeleteCardByID} message ParamsDeleteCardByID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParamsDeleteCardByID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cardId = 0;
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                object.cardId = message.cardId;
            return object;
        };

        /**
         * Converts this ParamsDeleteCardByID to JSON.
         * @function toJSON
         * @memberof payments.ParamsDeleteCardByID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParamsDeleteCardByID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ParamsDeleteCardByID;
    })();

    payments.UserCard = (function() {

        /**
         * Properties of a UserCard.
         * @memberof payments
         * @interface IUserCard
         * @property {number|null} [id] UserCard id
         * @property {number|null} [userId] UserCard userId
         * @property {string|null} [type] UserCard type
         * @property {string|null} [vendor] UserCard vendor
         * @property {string|null} [number] UserCard number
         * @property {string|null} [expDate] UserCard expDate
         * @property {boolean|null} [active] UserCard active
         * @property {boolean|null} [test] UserCard test
         */

        /**
         * Constructs a new UserCard.
         * @memberof payments
         * @classdesc Represents a UserCard.
         * @implements IUserCard
         * @constructor
         * @param {payments.IUserCard=} [properties] Properties to set
         */
        function UserCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserCard id.
         * @member {number} id
         * @memberof payments.UserCard
         * @instance
         */
        UserCard.prototype.id = 0;

        /**
         * UserCard userId.
         * @member {number} userId
         * @memberof payments.UserCard
         * @instance
         */
        UserCard.prototype.userId = 0;

        /**
         * UserCard type.
         * @member {string} type
         * @memberof payments.UserCard
         * @instance
         */
        UserCard.prototype.type = "";

        /**
         * UserCard vendor.
         * @member {string} vendor
         * @memberof payments.UserCard
         * @instance
         */
        UserCard.prototype.vendor = "";

        /**
         * UserCard number.
         * @member {string} number
         * @memberof payments.UserCard
         * @instance
         */
        UserCard.prototype.number = "";

        /**
         * UserCard expDate.
         * @member {string} expDate
         * @memberof payments.UserCard
         * @instance
         */
        UserCard.prototype.expDate = "";

        /**
         * UserCard active.
         * @member {boolean} active
         * @memberof payments.UserCard
         * @instance
         */
        UserCard.prototype.active = false;

        /**
         * UserCard test.
         * @member {boolean} test
         * @memberof payments.UserCard
         * @instance
         */
        UserCard.prototype.test = false;

        /**
         * Creates a new UserCard instance using the specified properties.
         * @function create
         * @memberof payments.UserCard
         * @static
         * @param {payments.IUserCard=} [properties] Properties to set
         * @returns {payments.UserCard} UserCard instance
         */
        UserCard.create = function create(properties) {
            return new UserCard(properties);
        };

        /**
         * Encodes the specified UserCard message. Does not implicitly {@link payments.UserCard.verify|verify} messages.
         * @function encode
         * @memberof payments.UserCard
         * @static
         * @param {payments.IUserCard} message UserCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.vendor != null && message.hasOwnProperty("vendor"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.vendor);
            if (message.number != null && message.hasOwnProperty("number"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.number);
            if (message.expDate != null && message.hasOwnProperty("expDate"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.expDate);
            if (message.active != null && message.hasOwnProperty("active"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.active);
            if (message.test != null && message.hasOwnProperty("test"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.test);
            return writer;
        };

        /**
         * Encodes the specified UserCard message, length delimited. Does not implicitly {@link payments.UserCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof payments.UserCard
         * @static
         * @param {payments.IUserCard} message UserCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserCard message from the specified reader or buffer.
         * @function decode
         * @memberof payments.UserCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {payments.UserCard} UserCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.payments.UserCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int32();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    message.vendor = reader.string();
                    break;
                case 5:
                    message.number = reader.string();
                    break;
                case 6:
                    message.expDate = reader.string();
                    break;
                case 7:
                    message.active = reader.bool();
                    break;
                case 8:
                    message.test = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof payments.UserCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {payments.UserCard} UserCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserCard message.
         * @function verify
         * @memberof payments.UserCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.vendor != null && message.hasOwnProperty("vendor"))
                if (!$util.isString(message.vendor))
                    return "vendor: string expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isString(message.number))
                    return "number: string expected";
            if (message.expDate != null && message.hasOwnProperty("expDate"))
                if (!$util.isString(message.expDate))
                    return "expDate: string expected";
            if (message.active != null && message.hasOwnProperty("active"))
                if (typeof message.active !== "boolean")
                    return "active: boolean expected";
            if (message.test != null && message.hasOwnProperty("test"))
                if (typeof message.test !== "boolean")
                    return "test: boolean expected";
            return null;
        };

        /**
         * Creates a UserCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof payments.UserCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {payments.UserCard} UserCard
         */
        UserCard.fromObject = function fromObject(object) {
            if (object instanceof $root.payments.UserCard)
                return object;
            var message = new $root.payments.UserCard();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.type != null)
                message.type = String(object.type);
            if (object.vendor != null)
                message.vendor = String(object.vendor);
            if (object.number != null)
                message.number = String(object.number);
            if (object.expDate != null)
                message.expDate = String(object.expDate);
            if (object.active != null)
                message.active = Boolean(object.active);
            if (object.test != null)
                message.test = Boolean(object.test);
            return message;
        };

        /**
         * Creates a plain object from a UserCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof payments.UserCard
         * @static
         * @param {payments.UserCard} message UserCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.userId = 0;
                object.type = "";
                object.vendor = "";
                object.number = "";
                object.expDate = "";
                object.active = false;
                object.test = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.vendor != null && message.hasOwnProperty("vendor"))
                object.vendor = message.vendor;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.expDate != null && message.hasOwnProperty("expDate"))
                object.expDate = message.expDate;
            if (message.active != null && message.hasOwnProperty("active"))
                object.active = message.active;
            if (message.test != null && message.hasOwnProperty("test"))
                object.test = message.test;
            return object;
        };

        /**
         * Converts this UserCard to JSON.
         * @function toJSON
         * @memberof payments.UserCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserCard;
    })();

    return payments;
})();

module.exports = $root;
