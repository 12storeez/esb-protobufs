/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

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
    
            /**
             * Callback as used by {@link feedbacks.Mobile#categories}.
             * @memberof feedbacks.Mobile
             * @typedef CategoriesCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {feedbacks.ResponseCategories} [response] ResponseCategories
             */
    
            /**
             * Calls Categories.
             * @function categories
             * @memberof feedbacks.Mobile
             * @instance
             * @param {google.protobuf.IEmpty} request Empty message or plain object
             * @param {feedbacks.Mobile.CategoriesCallback} callback Node-style callback called with the error, if any, and ResponseCategories
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(Mobile.prototype.categories = function categories(request, callback) {
                return this.rpcCall(categories, $root.google.protobuf.Empty, $root.feedbacks.ResponseCategories, request, callback);
            }, "name", { value: "Categories" });
    
            /**
             * Calls Categories.
             * @function categories
             * @memberof feedbacks.Mobile
             * @instance
             * @param {google.protobuf.IEmpty} request Empty message or plain object
             * @returns {Promise<feedbacks.ResponseCategories>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link feedbacks.Mobile#choices}.
             * @memberof feedbacks.Mobile
             * @typedef ChoicesCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {feedbacks.ResponseChoices} [response] ResponseChoices
             */
    
            /**
             * Calls Choices.
             * @function choices
             * @memberof feedbacks.Mobile
             * @instance
             * @param {feedbacks.IRequestChoices} request RequestChoices message or plain object
             * @param {feedbacks.Mobile.ChoicesCallback} callback Node-style callback called with the error, if any, and ResponseChoices
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(Mobile.prototype.choices = function choices(request, callback) {
                return this.rpcCall(choices, $root.feedbacks.RequestChoices, $root.feedbacks.ResponseChoices, request, callback);
            }, "name", { value: "Choices" });
    
            /**
             * Calls Choices.
             * @function choices
             * @memberof feedbacks.Mobile
             * @instance
             * @param {feedbacks.IRequestChoices} request RequestChoices message or plain object
             * @returns {Promise<feedbacks.ResponseChoices>} Promise
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
    
            return ResponseOk;
        })();
    
        feedbacks.RequestApp = (function() {
    
            /**
             * Properties of a RequestApp.
             * @memberof feedbacks
             * @interface IRequestApp
             * @property {number|Long|null} [client_id] RequestApp client_id
             * @property {string|null} [app_version] RequestApp app_version
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
             * RequestApp client_id.
             * @member {number|Long} client_id
             * @memberof feedbacks.RequestApp
             * @instance
             */
            RequestApp.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * RequestApp app_version.
             * @member {string} app_version
             * @memberof feedbacks.RequestApp
             * @instance
             */
            RequestApp.prototype.app_version = "";
    
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
                if (message.client_id != null && message.hasOwnProperty("client_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.client_id);
                if (message.app_version != null && message.hasOwnProperty("app_version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.app_version);
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
                        message.client_id = reader.int64();
                        break;
                    case 2:
                        message.app_version = reader.string();
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
    
            return RequestApp;
        })();
    
        feedbacks.RequestStore = (function() {
    
            /**
             * Properties of a RequestStore.
             * @memberof feedbacks
             * @interface IRequestStore
             * @property {number|Long|null} [client_id] RequestStore client_id
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
             * RequestStore client_id.
             * @member {number|Long} client_id
             * @memberof feedbacks.RequestStore
             * @instance
             */
            RequestStore.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
                if (message.client_id != null && message.hasOwnProperty("client_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.client_id);
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
                        message.client_id = reader.int64();
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
    
            return RequestStore;
        })();
    
        feedbacks.RequestOrder = (function() {
    
            /**
             * Properties of a RequestOrder.
             * @memberof feedbacks
             * @interface IRequestOrder
             * @property {string|null} [order_id] RequestOrder order_id
             * @property {number|Long|null} [client_id] RequestOrder client_id
             * @property {string|null} [payment_type] RequestOrder payment_type
             * @property {string|null} [delivery_type] RequestOrder delivery_type
             * @property {string|null} [rate] RequestOrder rate
             * @property {Array.<number>|null} [reason] RequestOrder reason
             * @property {string|null} [comment] RequestOrder comment
             * @property {string|null} [date_order] RequestOrder date_order
             * @property {string|null} [date_rate] RequestOrder date_rate
             * @property {string|null} [store_name] RequestOrder store_name
             * @property {string|null} [transport_company] RequestOrder transport_company
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
             * RequestOrder order_id.
             * @member {string} order_id
             * @memberof feedbacks.RequestOrder
             * @instance
             */
            RequestOrder.prototype.order_id = "";
    
            /**
             * RequestOrder client_id.
             * @member {number|Long} client_id
             * @memberof feedbacks.RequestOrder
             * @instance
             */
            RequestOrder.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * RequestOrder payment_type.
             * @member {string} payment_type
             * @memberof feedbacks.RequestOrder
             * @instance
             */
            RequestOrder.prototype.payment_type = "";
    
            /**
             * RequestOrder delivery_type.
             * @member {string} delivery_type
             * @memberof feedbacks.RequestOrder
             * @instance
             */
            RequestOrder.prototype.delivery_type = "";
    
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
             * RequestOrder date_order.
             * @member {string} date_order
             * @memberof feedbacks.RequestOrder
             * @instance
             */
            RequestOrder.prototype.date_order = "";
    
            /**
             * RequestOrder date_rate.
             * @member {string} date_rate
             * @memberof feedbacks.RequestOrder
             * @instance
             */
            RequestOrder.prototype.date_rate = "";
    
            /**
             * RequestOrder store_name.
             * @member {string} store_name
             * @memberof feedbacks.RequestOrder
             * @instance
             */
            RequestOrder.prototype.store_name = "";
    
            /**
             * RequestOrder transport_company.
             * @member {string} transport_company
             * @memberof feedbacks.RequestOrder
             * @instance
             */
            RequestOrder.prototype.transport_company = "";
    
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
                if (message.order_id != null && message.hasOwnProperty("order_id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.order_id);
                if (message.client_id != null && message.hasOwnProperty("client_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.client_id);
                if (message.payment_type != null && message.hasOwnProperty("payment_type"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.payment_type);
                if (message.delivery_type != null && message.hasOwnProperty("delivery_type"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.delivery_type);
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
                if (message.date_order != null && message.hasOwnProperty("date_order"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.date_order);
                if (message.date_rate != null && message.hasOwnProperty("date_rate"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.date_rate);
                if (message.store_name != null && message.hasOwnProperty("store_name"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.store_name);
                if (message.transport_company != null && message.hasOwnProperty("transport_company"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.transport_company);
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
                        message.order_id = reader.string();
                        break;
                    case 2:
                        message.client_id = reader.int64();
                        break;
                    case 3:
                        message.payment_type = reader.string();
                        break;
                    case 4:
                        message.delivery_type = reader.string();
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
                        message.date_order = reader.string();
                        break;
                    case 9:
                        message.date_rate = reader.string();
                        break;
                    case 10:
                        message.store_name = reader.string();
                        break;
                    case 11:
                        message.transport_company = reader.string();
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
    
            return RequestOrder;
        })();
    
        feedbacks.Choice = (function() {
    
            /**
             * Properties of a Choice.
             * @memberof feedbacks
             * @interface IChoice
             * @property {number|null} [id] Choice id
             * @property {string|null} [title] Choice title
             * @property {number|null} [category_id] Choice category_id
             */
    
            /**
             * Constructs a new Choice.
             * @memberof feedbacks
             * @classdesc Represents a Choice.
             * @implements IChoice
             * @constructor
             * @param {feedbacks.IChoice=} [properties] Properties to set
             */
            function Choice(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Choice id.
             * @member {number} id
             * @memberof feedbacks.Choice
             * @instance
             */
            Choice.prototype.id = 0;
    
            /**
             * Choice title.
             * @member {string} title
             * @memberof feedbacks.Choice
             * @instance
             */
            Choice.prototype.title = "";
    
            /**
             * Choice category_id.
             * @member {number} category_id
             * @memberof feedbacks.Choice
             * @instance
             */
            Choice.prototype.category_id = 0;
    
            /**
             * Encodes the specified Choice message. Does not implicitly {@link feedbacks.Choice.verify|verify} messages.
             * @function encode
             * @memberof feedbacks.Choice
             * @static
             * @param {feedbacks.IChoice} message Choice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Choice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.title != null && message.hasOwnProperty("title"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                if (message.category_id != null && message.hasOwnProperty("category_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.category_id);
                return writer;
            };
    
            /**
             * Encodes the specified Choice message, length delimited. Does not implicitly {@link feedbacks.Choice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof feedbacks.Choice
             * @static
             * @param {feedbacks.IChoice} message Choice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Choice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Choice message from the specified reader or buffer.
             * @function decode
             * @memberof feedbacks.Choice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {feedbacks.Choice} Choice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Choice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feedbacks.Choice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.title = reader.string();
                        break;
                    case 3:
                        message.category_id = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Choice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof feedbacks.Choice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {feedbacks.Choice} Choice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Choice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            return Choice;
        })();
    
        feedbacks.Category = (function() {
    
            /**
             * Properties of a Category.
             * @memberof feedbacks
             * @interface ICategory
             * @property {number|null} [id] Category id
             * @property {string|null} [title] Category title
             */
    
            /**
             * Constructs a new Category.
             * @memberof feedbacks
             * @classdesc Represents a Category.
             * @implements ICategory
             * @constructor
             * @param {feedbacks.ICategory=} [properties] Properties to set
             */
            function Category(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Category id.
             * @member {number} id
             * @memberof feedbacks.Category
             * @instance
             */
            Category.prototype.id = 0;
    
            /**
             * Category title.
             * @member {string} title
             * @memberof feedbacks.Category
             * @instance
             */
            Category.prototype.title = "";
    
            /**
             * Encodes the specified Category message. Does not implicitly {@link feedbacks.Category.verify|verify} messages.
             * @function encode
             * @memberof feedbacks.Category
             * @static
             * @param {feedbacks.ICategory} message Category message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Category.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.title != null && message.hasOwnProperty("title"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                return writer;
            };
    
            /**
             * Encodes the specified Category message, length delimited. Does not implicitly {@link feedbacks.Category.verify|verify} messages.
             * @function encodeDelimited
             * @memberof feedbacks.Category
             * @static
             * @param {feedbacks.ICategory} message Category message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Category.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Category message from the specified reader or buffer.
             * @function decode
             * @memberof feedbacks.Category
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {feedbacks.Category} Category
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Category.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feedbacks.Category();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
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
             * Decodes a Category message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof feedbacks.Category
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {feedbacks.Category} Category
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Category.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            return Category;
        })();
    
        feedbacks.RequestChoices = (function() {
    
            /**
             * Properties of a RequestChoices.
             * @memberof feedbacks
             * @interface IRequestChoices
             * @property {number|null} [category_id] RequestChoices category_id
             */
    
            /**
             * Constructs a new RequestChoices.
             * @memberof feedbacks
             * @classdesc Represents a RequestChoices.
             * @implements IRequestChoices
             * @constructor
             * @param {feedbacks.IRequestChoices=} [properties] Properties to set
             */
            function RequestChoices(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestChoices category_id.
             * @member {number} category_id
             * @memberof feedbacks.RequestChoices
             * @instance
             */
            RequestChoices.prototype.category_id = 0;
    
            /**
             * Encodes the specified RequestChoices message. Does not implicitly {@link feedbacks.RequestChoices.verify|verify} messages.
             * @function encode
             * @memberof feedbacks.RequestChoices
             * @static
             * @param {feedbacks.IRequestChoices} message RequestChoices message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestChoices.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.category_id != null && message.hasOwnProperty("category_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.category_id);
                return writer;
            };
    
            /**
             * Encodes the specified RequestChoices message, length delimited. Does not implicitly {@link feedbacks.RequestChoices.verify|verify} messages.
             * @function encodeDelimited
             * @memberof feedbacks.RequestChoices
             * @static
             * @param {feedbacks.IRequestChoices} message RequestChoices message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestChoices.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestChoices message from the specified reader or buffer.
             * @function decode
             * @memberof feedbacks.RequestChoices
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {feedbacks.RequestChoices} RequestChoices
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestChoices.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feedbacks.RequestChoices();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.category_id = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestChoices message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof feedbacks.RequestChoices
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {feedbacks.RequestChoices} RequestChoices
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestChoices.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            return RequestChoices;
        })();
    
        feedbacks.ResponseChoices = (function() {
    
            /**
             * Properties of a ResponseChoices.
             * @memberof feedbacks
             * @interface IResponseChoices
             * @property {Array.<feedbacks.IChoice>|null} [result] ResponseChoices result
             */
    
            /**
             * Constructs a new ResponseChoices.
             * @memberof feedbacks
             * @classdesc Represents a ResponseChoices.
             * @implements IResponseChoices
             * @constructor
             * @param {feedbacks.IResponseChoices=} [properties] Properties to set
             */
            function ResponseChoices(properties) {
                this.result = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseChoices result.
             * @member {Array.<feedbacks.IChoice>} result
             * @memberof feedbacks.ResponseChoices
             * @instance
             */
            ResponseChoices.prototype.result = $util.emptyArray;
    
            /**
             * Encodes the specified ResponseChoices message. Does not implicitly {@link feedbacks.ResponseChoices.verify|verify} messages.
             * @function encode
             * @memberof feedbacks.ResponseChoices
             * @static
             * @param {feedbacks.IResponseChoices} message ResponseChoices message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseChoices.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.result != null && message.result.length)
                    for (var i = 0; i < message.result.length; ++i)
                        $root.feedbacks.Choice.encode(message.result[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ResponseChoices message, length delimited. Does not implicitly {@link feedbacks.ResponseChoices.verify|verify} messages.
             * @function encodeDelimited
             * @memberof feedbacks.ResponseChoices
             * @static
             * @param {feedbacks.IResponseChoices} message ResponseChoices message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseChoices.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseChoices message from the specified reader or buffer.
             * @function decode
             * @memberof feedbacks.ResponseChoices
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {feedbacks.ResponseChoices} ResponseChoices
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseChoices.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feedbacks.ResponseChoices();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.result && message.result.length))
                            message.result = [];
                        message.result.push($root.feedbacks.Choice.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseChoices message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof feedbacks.ResponseChoices
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {feedbacks.ResponseChoices} ResponseChoices
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseChoices.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            return ResponseChoices;
        })();
    
        feedbacks.ResponseCategories = (function() {
    
            /**
             * Properties of a ResponseCategories.
             * @memberof feedbacks
             * @interface IResponseCategories
             * @property {Array.<feedbacks.ICategory>|null} [result] ResponseCategories result
             */
    
            /**
             * Constructs a new ResponseCategories.
             * @memberof feedbacks
             * @classdesc Represents a ResponseCategories.
             * @implements IResponseCategories
             * @constructor
             * @param {feedbacks.IResponseCategories=} [properties] Properties to set
             */
            function ResponseCategories(properties) {
                this.result = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseCategories result.
             * @member {Array.<feedbacks.ICategory>} result
             * @memberof feedbacks.ResponseCategories
             * @instance
             */
            ResponseCategories.prototype.result = $util.emptyArray;
    
            /**
             * Encodes the specified ResponseCategories message. Does not implicitly {@link feedbacks.ResponseCategories.verify|verify} messages.
             * @function encode
             * @memberof feedbacks.ResponseCategories
             * @static
             * @param {feedbacks.IResponseCategories} message ResponseCategories message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseCategories.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.result != null && message.result.length)
                    for (var i = 0; i < message.result.length; ++i)
                        $root.feedbacks.Category.encode(message.result[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ResponseCategories message, length delimited. Does not implicitly {@link feedbacks.ResponseCategories.verify|verify} messages.
             * @function encodeDelimited
             * @memberof feedbacks.ResponseCategories
             * @static
             * @param {feedbacks.IResponseCategories} message ResponseCategories message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseCategories.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseCategories message from the specified reader or buffer.
             * @function decode
             * @memberof feedbacks.ResponseCategories
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {feedbacks.ResponseCategories} ResponseCategories
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseCategories.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feedbacks.ResponseCategories();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.result && message.result.length))
                            message.result = [];
                        message.result.push($root.feedbacks.Category.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseCategories message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof feedbacks.ResponseCategories
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {feedbacks.ResponseCategories} ResponseCategories
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseCategories.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            return ResponseCategories;
        })();
    
        return feedbacks;
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
    
                return Empty;
            })();
    
            return protobuf;
        })();
    
        return google;
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
    
            return GetResponseBoxberryDurationByCity;
        })();
    
        logistics.GetParamsPointInformation = (function() {
    
            /**
             * Properties of a GetParamsPointInformation.
             * @memberof logistics
             * @interface IGetParamsPointInformation
             * @property {string|null} [point_code] GetParamsPointInformation point_code
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
             * GetParamsPointInformation point_code.
             * @member {string} point_code
             * @memberof logistics.GetParamsPointInformation
             * @instance
             */
            GetParamsPointInformation.prototype.point_code = "";
    
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
                if (message.point_code != null && message.hasOwnProperty("point_code"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.point_code);
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
                        message.point_code = reader.string();
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
    
            return GetParamsPointInformation;
        })();
    
        logistics.GetResponsePointInformation = (function() {
    
            /**
             * Properties of a GetResponsePointInformation.
             * @memberof logistics
             * @interface IGetResponsePointInformation
             * @property {string|null} [work_schedule] GetResponsePointInformation work_schedule
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
             * GetResponsePointInformation work_schedule.
             * @member {string} work_schedule
             * @memberof logistics.GetResponsePointInformation
             * @instance
             */
            GetResponsePointInformation.prototype.work_schedule = "";
    
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
                if (message.work_schedule != null && message.hasOwnProperty("work_schedule"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.work_schedule);
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
                        message.work_schedule = reader.string();
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
    
            return GetResponsePointInformation;
        })();
    
        logistics.GetParamsOrderStatus = (function() {
    
            /**
             * Properties of a GetParamsOrderStatus.
             * @memberof logistics
             * @interface IGetParamsOrderStatus
             * @property {string|null} [order_id] GetParamsOrderStatus order_id
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
             * GetParamsOrderStatus order_id.
             * @member {string} order_id
             * @memberof logistics.GetParamsOrderStatus
             * @instance
             */
            GetParamsOrderStatus.prototype.order_id = "";
    
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
                if (message.order_id != null && message.hasOwnProperty("order_id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.order_id);
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
                        message.order_id = reader.string();
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
    
            return status;
        })();
    
        return logistics;
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
    
            return ResponseAllOfflineStoresInfo;
        })();
    
        meta.OfflineStore = (function() {
    
            /**
             * Properties of an OfflineStore.
             * @memberof meta
             * @interface IOfflineStore
             * @property {number|null} [store_id] OfflineStore store_id
             * @property {string|null} [title] OfflineStore title
             * @property {string|null} [address] OfflineStore address
             * @property {string|null} [phone] OfflineStore phone
             * @property {string|null} [geo] OfflineStore geo
             * @property {string|null} [city] OfflineStore city
             * @property {string|null} [country] OfflineStore country
             * @property {boolean|null} [active] OfflineStore active
             * @property {string|null} [picture_url] OfflineStore picture_url
             * @property {string|null} [schedule] OfflineStore schedule
             * @property {number|null} [city_id] OfflineStore city_id
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
             * OfflineStore store_id.
             * @member {number} store_id
             * @memberof meta.OfflineStore
             * @instance
             */
            OfflineStore.prototype.store_id = 0;
    
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
             * OfflineStore picture_url.
             * @member {string} picture_url
             * @memberof meta.OfflineStore
             * @instance
             */
            OfflineStore.prototype.picture_url = "";
    
            /**
             * OfflineStore schedule.
             * @member {string} schedule
             * @memberof meta.OfflineStore
             * @instance
             */
            OfflineStore.prototype.schedule = "";
    
            /**
             * OfflineStore city_id.
             * @member {number} city_id
             * @memberof meta.OfflineStore
             * @instance
             */
            OfflineStore.prototype.city_id = 0;
    
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
                if (message.store_id != null && message.hasOwnProperty("store_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.store_id);
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
                if (message.picture_url != null && message.hasOwnProperty("picture_url"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.picture_url);
                if (message.schedule != null && message.hasOwnProperty("schedule"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.schedule);
                if (message.city_id != null && message.hasOwnProperty("city_id"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.city_id);
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
                        message.store_id = reader.int32();
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
                        message.picture_url = reader.string();
                        break;
                    case 10:
                        message.schedule = reader.string();
                        break;
                    case 11:
                        message.city_id = reader.int32();
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
    
            return OfflineStore;
        })();
    
        meta.paramsOfflineStoreInfoByID = (function() {
    
            /**
             * Properties of a paramsOfflineStoreInfoByID.
             * @memberof meta
             * @interface IparamsOfflineStoreInfoByID
             * @property {number|null} [store_id] paramsOfflineStoreInfoByID store_id
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
             * paramsOfflineStoreInfoByID store_id.
             * @member {number} store_id
             * @memberof meta.paramsOfflineStoreInfoByID
             * @instance
             */
            paramsOfflineStoreInfoByID.prototype.store_id = 0;
    
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
                if (message.store_id != null && message.hasOwnProperty("store_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.store_id);
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
                        message.store_id = reader.int32();
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
             * @property {string|null} [image_url] ResponseMobileApiAbout image_url
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
             * ResponseMobileApiAbout image_url.
             * @member {string} image_url
             * @memberof meta.ResponseMobileApiAbout
             * @instance
             */
            ResponseMobileApiAbout.prototype.image_url = "";
    
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
                if (message.image_url != null && message.hasOwnProperty("image_url"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.image_url);
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
                        message.image_url = reader.string();
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
    
            return paramsStoresCities;
        })();
    
        meta.City = (function() {
    
            /**
             * Properties of a City.
             * @memberof meta
             * @interface ICity
             * @property {number|null} [city_id] City city_id
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
             * City city_id.
             * @member {number} city_id
             * @memberof meta.City
             * @instance
             */
            City.prototype.city_id = 0;
    
            /**
             * City title.
             * @member {string} title
             * @memberof meta.City
             * @instance
             */
            City.prototype.title = "";
    
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
                if (message.city_id != null && message.hasOwnProperty("city_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.city_id);
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
                        message.city_id = reader.int32();
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
    
            return ResponseStoresCities;
        })();
    
        meta.paramsStoresByCity = (function() {
    
            /**
             * Properties of a paramsStoresByCity.
             * @memberof meta
             * @interface IparamsStoresByCity
             * @property {number|null} [city_id] paramsStoresByCity city_id
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
             * paramsStoresByCity city_id.
             * @member {number} city_id
             * @memberof meta.paramsStoresByCity
             * @instance
             */
            paramsStoresByCity.prototype.city_id = 0;
    
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
                if (message.city_id != null && message.hasOwnProperty("city_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.city_id);
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
                        message.city_id = reader.int32();
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
    
            return paramsStoresByCity;
        })();
    
        meta.responseStoresByCity = (function() {
    
            /**
             * Properties of a responseStoresByCity.
             * @memberof meta
             * @interface IresponseStoresByCity
             * @property {number|null} [city_id] responseStoresByCity city_id
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
             * responseStoresByCity city_id.
             * @member {number} city_id
             * @memberof meta.responseStoresByCity
             * @instance
             */
            responseStoresByCity.prototype.city_id = 0;
    
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
                if (message.city_id != null && message.hasOwnProperty("city_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.city_id);
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
                        message.city_id = reader.int32();
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
    
            return PingResponse;
        })();
    
        mindbox.ParamsUserInformation = (function() {
    
            /**
             * Properties of a ParamsUserInformation.
             * @memberof mindbox
             * @interface IParamsUserInformation
             * @property {number|null} [client_id] ParamsUserInformation client_id
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
             * ParamsUserInformation client_id.
             * @member {number} client_id
             * @memberof mindbox.ParamsUserInformation
             * @instance
             */
            ParamsUserInformation.prototype.client_id = 0;
    
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
                if (message.client_id != null && message.hasOwnProperty("client_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.client_id);
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
                        message.client_id = reader.int32();
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
    
            return ParamsUserInformation;
        })();
    
        mindbox.ResponseUserInformation = (function() {
    
            /**
             * Properties of a ResponseUserInformation.
             * @memberof mindbox
             * @interface IResponseUserInformation
             * @property {string|null} [first_name] ResponseUserInformation first_name
             * @property {string|null} [last_name] ResponseUserInformation last_name
             * @property {string|null} [email] ResponseUserInformation email
             * @property {string|null} [phone] ResponseUserInformation phone
             * @property {number|null} [bonus_total] ResponseUserInformation bonus_total
             * @property {number|null} [bonus_available] ResponseUserInformation bonus_available
             * @property {number|null} [bonus_blocked] ResponseUserInformation bonus_blocked
             * @property {number|null} [total_paid_amount] ResponseUserInformation total_paid_amount
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
             * ResponseUserInformation first_name.
             * @member {string} first_name
             * @memberof mindbox.ResponseUserInformation
             * @instance
             */
            ResponseUserInformation.prototype.first_name = "";
    
            /**
             * ResponseUserInformation last_name.
             * @member {string} last_name
             * @memberof mindbox.ResponseUserInformation
             * @instance
             */
            ResponseUserInformation.prototype.last_name = "";
    
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
             * ResponseUserInformation bonus_total.
             * @member {number} bonus_total
             * @memberof mindbox.ResponseUserInformation
             * @instance
             */
            ResponseUserInformation.prototype.bonus_total = 0;
    
            /**
             * ResponseUserInformation bonus_available.
             * @member {number} bonus_available
             * @memberof mindbox.ResponseUserInformation
             * @instance
             */
            ResponseUserInformation.prototype.bonus_available = 0;
    
            /**
             * ResponseUserInformation bonus_blocked.
             * @member {number} bonus_blocked
             * @memberof mindbox.ResponseUserInformation
             * @instance
             */
            ResponseUserInformation.prototype.bonus_blocked = 0;
    
            /**
             * ResponseUserInformation total_paid_amount.
             * @member {number} total_paid_amount
             * @memberof mindbox.ResponseUserInformation
             * @instance
             */
            ResponseUserInformation.prototype.total_paid_amount = 0;
    
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
                if (message.first_name != null && message.hasOwnProperty("first_name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.first_name);
                if (message.last_name != null && message.hasOwnProperty("last_name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.last_name);
                if (message.email != null && message.hasOwnProperty("email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                if (message.phone != null && message.hasOwnProperty("phone"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.phone);
                if (message.bonus_total != null && message.hasOwnProperty("bonus_total"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.bonus_total);
                if (message.bonus_available != null && message.hasOwnProperty("bonus_available"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.bonus_available);
                if (message.bonus_blocked != null && message.hasOwnProperty("bonus_blocked"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.bonus_blocked);
                if (message.total_paid_amount != null && message.hasOwnProperty("total_paid_amount"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.total_paid_amount);
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
                        message.first_name = reader.string();
                        break;
                    case 2:
                        message.last_name = reader.string();
                        break;
                    case 3:
                        message.email = reader.string();
                        break;
                    case 4:
                        message.phone = reader.string();
                        break;
                    case 5:
                        message.bonus_total = reader.int32();
                        break;
                    case 6:
                        message.bonus_available = reader.int32();
                        break;
                    case 7:
                        message.bonus_blocked = reader.int32();
                        break;
                    case 8:
                        message.total_paid_amount = reader.double();
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
    
            return ResponseUserInformation;
        })();
    
        mindbox.ParamsOrdersHistory = (function() {
    
            /**
             * Properties of a ParamsOrdersHistory.
             * @memberof mindbox
             * @interface IParamsOrdersHistory
             * @property {number|null} [client_id] ParamsOrdersHistory client_id
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
             * ParamsOrdersHistory client_id.
             * @member {number} client_id
             * @memberof mindbox.ParamsOrdersHistory
             * @instance
             */
            ParamsOrdersHistory.prototype.client_id = 0;
    
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
                if (message.client_id != null && message.hasOwnProperty("client_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.client_id);
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
                        message.client_id = reader.int32();
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
    
            return ParamsOrdersHistory;
        })();
    
        mindbox.ResponseOrdersHistory = (function() {
    
            /**
             * Properties of a ResponseOrdersHistory.
             * @memberof mindbox
             * @interface IResponseOrdersHistory
             * @property {number|null} [total_count] ResponseOrdersHistory total_count
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
             * ResponseOrdersHistory total_count.
             * @member {number} total_count
             * @memberof mindbox.ResponseOrdersHistory
             * @instance
             */
            ResponseOrdersHistory.prototype.total_count = 0;
    
            /**
             * ResponseOrdersHistory orders.
             * @member {Array.<mindbox.Iorder>} orders
             * @memberof mindbox.ResponseOrdersHistory
             * @instance
             */
            ResponseOrdersHistory.prototype.orders = $util.emptyArray;
    
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
                if (message.total_count != null && message.hasOwnProperty("total_count"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.total_count);
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
                        message.total_count = reader.int32();
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
    
            return ResponseOrdersHistory;
        })();
    
        mindbox.order = (function() {
    
            /**
             * Properties of an order.
             * @memberof mindbox
             * @interface Iorder
             * @property {string|null} [id] order id
             * @property {string|null} [created_date] order created_date
             * @property {string|null} [payment_type] order payment_type
             * @property {number|null} [discounted_total_price] order discounted_total_price
             * @property {number|null} [payment_amount] order payment_amount
             * @property {number|null} [applied_discount] order applied_discount
             * @property {number|null} [acquired_balance_change] order acquired_balance_change
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
             * order created_date.
             * @member {string} created_date
             * @memberof mindbox.order
             * @instance
             */
            order.prototype.created_date = "";
    
            /**
             * order payment_type.
             * @member {string} payment_type
             * @memberof mindbox.order
             * @instance
             */
            order.prototype.payment_type = "";
    
            /**
             * order discounted_total_price.
             * @member {number} discounted_total_price
             * @memberof mindbox.order
             * @instance
             */
            order.prototype.discounted_total_price = 0;
    
            /**
             * order payment_amount.
             * @member {number} payment_amount
             * @memberof mindbox.order
             * @instance
             */
            order.prototype.payment_amount = 0;
    
            /**
             * order applied_discount.
             * @member {number} applied_discount
             * @memberof mindbox.order
             * @instance
             */
            order.prototype.applied_discount = 0;
    
            /**
             * order acquired_balance_change.
             * @member {number} acquired_balance_change
             * @memberof mindbox.order
             * @instance
             */
            order.prototype.acquired_balance_change = 0;
    
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
                if (message.created_date != null && message.hasOwnProperty("created_date"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.created_date);
                if (message.payment_type != null && message.hasOwnProperty("payment_type"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.payment_type);
                if (message.discounted_total_price != null && message.hasOwnProperty("discounted_total_price"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.discounted_total_price);
                if (message.payment_amount != null && message.hasOwnProperty("payment_amount"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.payment_amount);
                if (message.applied_discount != null && message.hasOwnProperty("applied_discount"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.applied_discount);
                if (message.acquired_balance_change != null && message.hasOwnProperty("acquired_balance_change"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.acquired_balance_change);
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
                        message.created_date = reader.string();
                        break;
                    case 3:
                        message.payment_type = reader.string();
                        break;
                    case 4:
                        message.discounted_total_price = reader.double();
                        break;
                    case 5:
                        message.payment_amount = reader.double();
                        break;
                    case 6:
                        message.applied_discount = reader.double();
                        break;
                    case 7:
                        message.acquired_balance_change = reader.double();
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
    
            return ResponseOnlineByClient;
        })();
    
        orders.OfflineOrder = (function() {
    
            /**
             * Properties of an OfflineOrder.
             * @memberof orders
             * @interface IOfflineOrder
             * @property {string|null} [store_name] OfflineOrder store_name
             * @property {number|null} [store_id] OfflineOrder store_id
             * @property {number|null} [cashbox_id] OfflineOrder cashbox_id
             * @property {string|null} [order_id] OfflineOrder order_id
             * @property {number|null} [row_receipt] OfflineOrder row_receipt
             * @property {string|null} [date] OfflineOrder date
             * @property {string|null} [time] OfflineOrder time
             * @property {string|null} [article] OfflineOrder article
             * @property {string|null} [title] OfflineOrder title
             * @property {string|null} [color] OfflineOrder color
             * @property {string|null} [size] OfflineOrder size
             * @property {string|null} [barcode] OfflineOrder barcode
             * @property {number|null} [qty] OfflineOrder qty
             * @property {number|null} [total_gross] OfflineOrder total_gross
             * @property {number|null} [discount] OfflineOrder discount
             * @property {number|null} [total] OfflineOrder total
             * @property {number|null} [client_id] OfflineOrder client_id
             * @property {string|null} [seller] OfflineOrder seller
             * @property {string|null} [family] OfflineOrder family
             * @property {number|null} [operation] OfflineOrder operation
             * @property {string|null} [source] OfflineOrder source
             * @property {number|null} [bonuses_wasted] OfflineOrder bonuses_wasted
             * @property {number|null} [bonuses_accrued] OfflineOrder bonuses_accrued
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
             * OfflineOrder store_name.
             * @member {string} store_name
             * @memberof orders.OfflineOrder
             * @instance
             */
            OfflineOrder.prototype.store_name = "";
    
            /**
             * OfflineOrder store_id.
             * @member {number} store_id
             * @memberof orders.OfflineOrder
             * @instance
             */
            OfflineOrder.prototype.store_id = 0;
    
            /**
             * OfflineOrder cashbox_id.
             * @member {number} cashbox_id
             * @memberof orders.OfflineOrder
             * @instance
             */
            OfflineOrder.prototype.cashbox_id = 0;
    
            /**
             * OfflineOrder order_id.
             * @member {string} order_id
             * @memberof orders.OfflineOrder
             * @instance
             */
            OfflineOrder.prototype.order_id = "";
    
            /**
             * OfflineOrder row_receipt.
             * @member {number} row_receipt
             * @memberof orders.OfflineOrder
             * @instance
             */
            OfflineOrder.prototype.row_receipt = 0;
    
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
             * OfflineOrder total_gross.
             * @member {number} total_gross
             * @memberof orders.OfflineOrder
             * @instance
             */
            OfflineOrder.prototype.total_gross = 0;
    
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
             * OfflineOrder client_id.
             * @member {number} client_id
             * @memberof orders.OfflineOrder
             * @instance
             */
            OfflineOrder.prototype.client_id = 0;
    
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
             * OfflineOrder bonuses_wasted.
             * @member {number} bonuses_wasted
             * @memberof orders.OfflineOrder
             * @instance
             */
            OfflineOrder.prototype.bonuses_wasted = 0;
    
            /**
             * OfflineOrder bonuses_accrued.
             * @member {number} bonuses_accrued
             * @memberof orders.OfflineOrder
             * @instance
             */
            OfflineOrder.prototype.bonuses_accrued = 0;
    
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
                if (message.store_name != null && message.hasOwnProperty("store_name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.store_name);
                if (message.store_id != null && message.hasOwnProperty("store_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.store_id);
                if (message.cashbox_id != null && message.hasOwnProperty("cashbox_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cashbox_id);
                if (message.order_id != null && message.hasOwnProperty("order_id"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.order_id);
                if (message.row_receipt != null && message.hasOwnProperty("row_receipt"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.row_receipt);
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
                if (message.total_gross != null && message.hasOwnProperty("total_gross"))
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.total_gross);
                if (message.discount != null && message.hasOwnProperty("discount"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.discount);
                if (message.total != null && message.hasOwnProperty("total"))
                    writer.uint32(/* id 16, wireType 0 =*/128).int32(message.total);
                if (message.client_id != null && message.hasOwnProperty("client_id"))
                    writer.uint32(/* id 17, wireType 0 =*/136).int32(message.client_id);
                if (message.seller != null && message.hasOwnProperty("seller"))
                    writer.uint32(/* id 18, wireType 2 =*/146).string(message.seller);
                if (message.family != null && message.hasOwnProperty("family"))
                    writer.uint32(/* id 19, wireType 2 =*/154).string(message.family);
                if (message.operation != null && message.hasOwnProperty("operation"))
                    writer.uint32(/* id 20, wireType 0 =*/160).int32(message.operation);
                if (message.source != null && message.hasOwnProperty("source"))
                    writer.uint32(/* id 21, wireType 2 =*/170).string(message.source);
                if (message.bonuses_wasted != null && message.hasOwnProperty("bonuses_wasted"))
                    writer.uint32(/* id 22, wireType 0 =*/176).int32(message.bonuses_wasted);
                if (message.bonuses_accrued != null && message.hasOwnProperty("bonuses_accrued"))
                    writer.uint32(/* id 23, wireType 0 =*/184).int32(message.bonuses_accrued);
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
                        message.store_name = reader.string();
                        break;
                    case 2:
                        message.store_id = reader.int32();
                        break;
                    case 3:
                        message.cashbox_id = reader.int32();
                        break;
                    case 4:
                        message.order_id = reader.string();
                        break;
                    case 5:
                        message.row_receipt = reader.int32();
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
                        message.total_gross = reader.int32();
                        break;
                    case 15:
                        message.discount = reader.int32();
                        break;
                    case 16:
                        message.total = reader.int32();
                        break;
                    case 17:
                        message.client_id = reader.int32();
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
                        message.bonuses_wasted = reader.int32();
                        break;
                    case 23:
                        message.bonuses_accrued = reader.int32();
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
    
            return PingResponse;
        })();
    
        payments.ParamsGetCardByUserID = (function() {
    
            /**
             * Properties of a ParamsGetCardByUserID.
             * @memberof payments
             * @interface IParamsGetCardByUserID
             * @property {number|null} [user_id] ParamsGetCardByUserID user_id
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
             * ParamsGetCardByUserID user_id.
             * @member {number} user_id
             * @memberof payments.ParamsGetCardByUserID
             * @instance
             */
            ParamsGetCardByUserID.prototype.user_id = 0;
    
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
                if (message.user_id != null && message.hasOwnProperty("user_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.user_id);
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
                        message.user_id = reader.int32();
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
    
            return ResponseSuccess;
        })();
    
        payments.ParamsDeleteCardByID = (function() {
    
            /**
             * Properties of a ParamsDeleteCardByID.
             * @memberof payments
             * @interface IParamsDeleteCardByID
             * @property {number|null} [card_id] ParamsDeleteCardByID card_id
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
             * ParamsDeleteCardByID card_id.
             * @member {number} card_id
             * @memberof payments.ParamsDeleteCardByID
             * @instance
             */
            ParamsDeleteCardByID.prototype.card_id = 0;
    
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
                if (message.card_id != null && message.hasOwnProperty("card_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.card_id);
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
                        message.card_id = reader.int32();
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
    
            return ParamsDeleteCardByID;
        })();
    
        payments.UserCard = (function() {
    
            /**
             * Properties of a UserCard.
             * @memberof payments
             * @interface IUserCard
             * @property {number|null} [id] UserCard id
             * @property {number|null} [user_id] UserCard user_id
             * @property {string|null} [type] UserCard type
             * @property {string|null} [vendor] UserCard vendor
             * @property {string|null} [number] UserCard number
             * @property {string|null} [exp_date] UserCard exp_date
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
             * UserCard user_id.
             * @member {number} user_id
             * @memberof payments.UserCard
             * @instance
             */
            UserCard.prototype.user_id = 0;
    
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
             * UserCard exp_date.
             * @member {string} exp_date
             * @memberof payments.UserCard
             * @instance
             */
            UserCard.prototype.exp_date = "";
    
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
                if (message.user_id != null && message.hasOwnProperty("user_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.user_id);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
                if (message.vendor != null && message.hasOwnProperty("vendor"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.vendor);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.number);
                if (message.exp_date != null && message.hasOwnProperty("exp_date"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.exp_date);
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
                        message.user_id = reader.int32();
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
                        message.exp_date = reader.string();
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
    
            return UserCard;
        })();
    
        return payments;
    })();

    return $root;
});
