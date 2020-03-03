/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $util = $protobuf.util;

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

        return UserCard;
    })();

    return payments;
})();

module.exports = $root;
