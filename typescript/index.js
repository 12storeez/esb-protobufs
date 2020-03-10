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
         * @param {feedbacks.IParamsApp} request ParamsApp message or plain object
         * @param {feedbacks.Mobile.AppCallback} callback Node-style callback called with the error, if any, and ResponseOk
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.app = function app(request, callback) {
            return this.rpcCall(app, $root.feedbacks.ParamsApp, $root.feedbacks.ResponseOk, request, callback);
        }, "name", { value: "App" });

        /**
         * Calls App.
         * @function app
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IParamsApp} request ParamsApp message or plain object
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
         * @param {feedbacks.IParamsStore} request ParamsStore message or plain object
         * @param {feedbacks.Mobile.StoreCallback} callback Node-style callback called with the error, if any, and ResponseOk
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.store = function store(request, callback) {
            return this.rpcCall(store, $root.feedbacks.ParamsStore, $root.feedbacks.ResponseOk, request, callback);
        }, "name", { value: "Store" });

        /**
         * Calls Store.
         * @function store
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IParamsStore} request ParamsStore message or plain object
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
         * @param {feedbacks.IParamsOrder} request ParamsOrder message or plain object
         * @param {feedbacks.Mobile.OrderCallback} callback Node-style callback called with the error, if any, and ResponseOk
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.order = function order(request, callback) {
            return this.rpcCall(order, $root.feedbacks.ParamsOrder, $root.feedbacks.ResponseOk, request, callback);
        }, "name", { value: "Order" });

        /**
         * Calls Order.
         * @function order
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IParamsOrder} request ParamsOrder message or plain object
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
         * Callback as used by {@link feedbacks.Mobile#reasonsByOrder}.
         * @memberof feedbacks.Mobile
         * @typedef ReasonsByOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {feedbacks.ResponseReasons} [response] ResponseReasons
         */

        /**
         * Calls ReasonsByOrder.
         * @function reasonsByOrder
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IParamsReasonsByOrder} request ParamsReasonsByOrder message or plain object
         * @param {feedbacks.Mobile.ReasonsByOrderCallback} callback Node-style callback called with the error, if any, and ResponseReasons
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.reasonsByOrder = function reasonsByOrder(request, callback) {
            return this.rpcCall(reasonsByOrder, $root.feedbacks.ParamsReasonsByOrder, $root.feedbacks.ResponseReasons, request, callback);
        }, "name", { value: "ReasonsByOrder" });

        /**
         * Calls ReasonsByOrder.
         * @function reasonsByOrder
         * @memberof feedbacks.Mobile
         * @instance
         * @param {feedbacks.IParamsReasonsByOrder} request ParamsReasonsByOrder message or plain object
         * @returns {Promise<feedbacks.ResponseReasons>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link feedbacks.Mobile#reasonsByStore}.
         * @memberof feedbacks.Mobile
         * @typedef ReasonsByStoreCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {feedbacks.ResponseReasons} [response] ResponseReasons
         */

        /**
         * Calls ReasonsByStore.
         * @function reasonsByStore
         * @memberof feedbacks.Mobile
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {feedbacks.Mobile.ReasonsByStoreCallback} callback Node-style callback called with the error, if any, and ResponseReasons
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.reasonsByStore = function reasonsByStore(request, callback) {
            return this.rpcCall(reasonsByStore, $root.google.protobuf.Empty, $root.feedbacks.ResponseReasons, request, callback);
        }, "name", { value: "ReasonsByStore" });

        /**
         * Calls ReasonsByStore.
         * @function reasonsByStore
         * @memberof feedbacks.Mobile
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<feedbacks.ResponseReasons>} Promise
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

    feedbacks.ParamsApp = (function() {

        /**
         * Properties of a ParamsApp.
         * @memberof feedbacks
         * @interface IParamsApp
         * @property {number|Long|null} [client_id] ParamsApp client_id
         * @property {string|null} [app_version] ParamsApp app_version
         * @property {string|null} [rate] ParamsApp rate
         * @property {Array.<number>|null} [reasons] ParamsApp reasons
         * @property {string|null} [comment] ParamsApp comment
         */

        /**
         * Constructs a new ParamsApp.
         * @memberof feedbacks
         * @classdesc Represents a ParamsApp.
         * @implements IParamsApp
         * @constructor
         * @param {feedbacks.IParamsApp=} [properties] Properties to set
         */
        function ParamsApp(properties) {
            this.reasons = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsApp client_id.
         * @member {number|Long} client_id
         * @memberof feedbacks.ParamsApp
         * @instance
         */
        ParamsApp.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ParamsApp app_version.
         * @member {string} app_version
         * @memberof feedbacks.ParamsApp
         * @instance
         */
        ParamsApp.prototype.app_version = "";

        /**
         * ParamsApp rate.
         * @member {string} rate
         * @memberof feedbacks.ParamsApp
         * @instance
         */
        ParamsApp.prototype.rate = "";

        /**
         * ParamsApp reasons.
         * @member {Array.<number>} reasons
         * @memberof feedbacks.ParamsApp
         * @instance
         */
        ParamsApp.prototype.reasons = $util.emptyArray;

        /**
         * ParamsApp comment.
         * @member {string} comment
         * @memberof feedbacks.ParamsApp
         * @instance
         */
        ParamsApp.prototype.comment = "";

        return ParamsApp;
    })();

    feedbacks.ParamsStore = (function() {

        /**
         * Properties of a ParamsStore.
         * @memberof feedbacks
         * @interface IParamsStore
         * @property {number|Long|null} [client_id] ParamsStore client_id
         * @property {string|null} [rate] ParamsStore rate
         * @property {Array.<number>|null} [reasons] ParamsStore reasons
         * @property {string|null} [comment] ParamsStore comment
         * @property {number|null} [store_id] ParamsStore store_id
         */

        /**
         * Constructs a new ParamsStore.
         * @memberof feedbacks
         * @classdesc Represents a ParamsStore.
         * @implements IParamsStore
         * @constructor
         * @param {feedbacks.IParamsStore=} [properties] Properties to set
         */
        function ParamsStore(properties) {
            this.reasons = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsStore client_id.
         * @member {number|Long} client_id
         * @memberof feedbacks.ParamsStore
         * @instance
         */
        ParamsStore.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ParamsStore rate.
         * @member {string} rate
         * @memberof feedbacks.ParamsStore
         * @instance
         */
        ParamsStore.prototype.rate = "";

        /**
         * ParamsStore reasons.
         * @member {Array.<number>} reasons
         * @memberof feedbacks.ParamsStore
         * @instance
         */
        ParamsStore.prototype.reasons = $util.emptyArray;

        /**
         * ParamsStore comment.
         * @member {string} comment
         * @memberof feedbacks.ParamsStore
         * @instance
         */
        ParamsStore.prototype.comment = "";

        /**
         * ParamsStore store_id.
         * @member {number} store_id
         * @memberof feedbacks.ParamsStore
         * @instance
         */
        ParamsStore.prototype.store_id = 0;

        return ParamsStore;
    })();

    feedbacks.ParamsOrder = (function() {

        /**
         * Properties of a ParamsOrder.
         * @memberof feedbacks
         * @interface IParamsOrder
         * @property {string|null} [order_id] ParamsOrder order_id
         * @property {string|null} [rate] ParamsOrder rate
         * @property {Array.<number>|null} [reasons] ParamsOrder reasons
         * @property {string|null} [comment] ParamsOrder comment
         * @property {number|null} [store_id] ParamsOrder store_id
         */

        /**
         * Constructs a new ParamsOrder.
         * @memberof feedbacks
         * @classdesc Represents a ParamsOrder.
         * @implements IParamsOrder
         * @constructor
         * @param {feedbacks.IParamsOrder=} [properties] Properties to set
         */
        function ParamsOrder(properties) {
            this.reasons = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsOrder order_id.
         * @member {string} order_id
         * @memberof feedbacks.ParamsOrder
         * @instance
         */
        ParamsOrder.prototype.order_id = "";

        /**
         * ParamsOrder rate.
         * @member {string} rate
         * @memberof feedbacks.ParamsOrder
         * @instance
         */
        ParamsOrder.prototype.rate = "";

        /**
         * ParamsOrder reasons.
         * @member {Array.<number>} reasons
         * @memberof feedbacks.ParamsOrder
         * @instance
         */
        ParamsOrder.prototype.reasons = $util.emptyArray;

        /**
         * ParamsOrder comment.
         * @member {string} comment
         * @memberof feedbacks.ParamsOrder
         * @instance
         */
        ParamsOrder.prototype.comment = "";

        /**
         * ParamsOrder store_id.
         * @member {number} store_id
         * @memberof feedbacks.ParamsOrder
         * @instance
         */
        ParamsOrder.prototype.store_id = 0;

        return ParamsOrder;
    })();

    feedbacks.Reason = (function() {

        /**
         * Properties of a Reason.
         * @memberof feedbacks
         * @interface IReason
         * @property {number|null} [id] Reason id
         * @property {string|null} [title] Reason title
         * @property {number|null} [category_id] Reason category_id
         */

        /**
         * Constructs a new Reason.
         * @memberof feedbacks
         * @classdesc Represents a Reason.
         * @implements IReason
         * @constructor
         * @param {feedbacks.IReason=} [properties] Properties to set
         */
        function Reason(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reason id.
         * @member {number} id
         * @memberof feedbacks.Reason
         * @instance
         */
        Reason.prototype.id = 0;

        /**
         * Reason title.
         * @member {string} title
         * @memberof feedbacks.Reason
         * @instance
         */
        Reason.prototype.title = "";

        /**
         * Reason category_id.
         * @member {number} category_id
         * @memberof feedbacks.Reason
         * @instance
         */
        Reason.prototype.category_id = 0;

        return Reason;
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

    feedbacks.ResponseReasons = (function() {

        /**
         * Properties of a ResponseReasons.
         * @memberof feedbacks
         * @interface IResponseReasons
         * @property {Array.<feedbacks.IReason>|null} [result] ResponseReasons result
         */

        /**
         * Constructs a new ResponseReasons.
         * @memberof feedbacks
         * @classdesc Represents a ResponseReasons.
         * @implements IResponseReasons
         * @constructor
         * @param {feedbacks.IResponseReasons=} [properties] Properties to set
         */
        function ResponseReasons(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseReasons result.
         * @member {Array.<feedbacks.IReason>} result
         * @memberof feedbacks.ResponseReasons
         * @instance
         */
        ResponseReasons.prototype.result = $util.emptyArray;

        return ResponseReasons;
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

    feedbacks.ParamsReasonsByOrder = (function() {

        /**
         * Properties of a ParamsReasonsByOrder.
         * @memberof feedbacks
         * @interface IParamsReasonsByOrder
         * @property {string|null} [order_id] ParamsReasonsByOrder order_id
         */

        /**
         * Constructs a new ParamsReasonsByOrder.
         * @memberof feedbacks
         * @classdesc Represents a ParamsReasonsByOrder.
         * @implements IParamsReasonsByOrder
         * @constructor
         * @param {feedbacks.IParamsReasonsByOrder=} [properties] Properties to set
         */
        function ParamsReasonsByOrder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsReasonsByOrder order_id.
         * @member {string} order_id
         * @memberof feedbacks.ParamsReasonsByOrder
         * @instance
         */
        ParamsReasonsByOrder.prototype.order_id = "";

        return ParamsReasonsByOrder;
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

$root.grpc = (function() {

    /**
     * Namespace grpc.
     * @exports grpc
     * @namespace
     */
    var grpc = {};

    grpc.health = (function() {

        /**
         * Namespace health.
         * @memberof grpc
         * @namespace
         */
        var health = {};

        health.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof grpc.health
             * @namespace
             */
            var v1 = {};

            v1.Health = (function() {

                /**
                 * Constructs a new Health service.
                 * @memberof grpc.health.v1
                 * @classdesc Represents a Health
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Health(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Health.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Health;

                /**
                 * Callback as used by {@link grpc.health.v1.Health#check}.
                 * @memberof grpc.health.v1.Health
                 * @typedef CheckCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {grpc.health.v1.HealthCheckResponse} [response] HealthCheckResponse
                 */

                /**
                 * Calls Check.
                 * @function check
                 * @memberof grpc.health.v1.Health
                 * @instance
                 * @param {grpc.health.v1.IHealthCheckRequest} request HealthCheckRequest message or plain object
                 * @param {grpc.health.v1.Health.CheckCallback} callback Node-style callback called with the error, if any, and HealthCheckResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Health.prototype.check = function check(request, callback) {
                    return this.rpcCall(check, $root.grpc.health.v1.HealthCheckRequest, $root.grpc.health.v1.HealthCheckResponse, request, callback);
                }, "name", { value: "Check" });

                /**
                 * Calls Check.
                 * @function check
                 * @memberof grpc.health.v1.Health
                 * @instance
                 * @param {grpc.health.v1.IHealthCheckRequest} request HealthCheckRequest message or plain object
                 * @returns {Promise<grpc.health.v1.HealthCheckResponse>} Promise
                 * @variation 2
                 */

                return Health;
            })();

            v1.HealthCheckRequest = (function() {

                /**
                 * Properties of a HealthCheckRequest.
                 * @memberof grpc.health.v1
                 * @interface IHealthCheckRequest
                 * @property {string|null} [service] HealthCheckRequest service
                 */

                /**
                 * Constructs a new HealthCheckRequest.
                 * @memberof grpc.health.v1
                 * @classdesc Represents a HealthCheckRequest.
                 * @implements IHealthCheckRequest
                 * @constructor
                 * @param {grpc.health.v1.IHealthCheckRequest=} [properties] Properties to set
                 */
                function HealthCheckRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HealthCheckRequest service.
                 * @member {string} service
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @instance
                 */
                HealthCheckRequest.prototype.service = "";

                return HealthCheckRequest;
            })();

            v1.HealthCheckResponse = (function() {

                /**
                 * Properties of a HealthCheckResponse.
                 * @memberof grpc.health.v1
                 * @interface IHealthCheckResponse
                 * @property {grpc.health.v1.HealthCheckResponse.ServingStatus|null} [status] HealthCheckResponse status
                 */

                /**
                 * Constructs a new HealthCheckResponse.
                 * @memberof grpc.health.v1
                 * @classdesc Represents a HealthCheckResponse.
                 * @implements IHealthCheckResponse
                 * @constructor
                 * @param {grpc.health.v1.IHealthCheckResponse=} [properties] Properties to set
                 */
                function HealthCheckResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HealthCheckResponse status.
                 * @member {grpc.health.v1.HealthCheckResponse.ServingStatus} status
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @instance
                 */
                HealthCheckResponse.prototype.status = 0;

                /**
                 * ServingStatus enum.
                 * @name grpc.health.v1.HealthCheckResponse.ServingStatus
                 * @enum {string}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} SERVING=1 SERVING value
                 * @property {number} NOT_SERVING=2 NOT_SERVING value
                 */
                HealthCheckResponse.ServingStatus = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "SERVING"] = 1;
                    values[valuesById[2] = "NOT_SERVING"] = 2;
                    return values;
                })();

                return HealthCheckResponse;
            })();

            return v1;
        })();

        return health;
    })();

    return grpc;
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

        /**
         * Callback as used by {@link meta.Mobile#countries}.
         * @memberof meta.Mobile
         * @typedef CountriesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meta.ResponseCountries} [response] ResponseCountries
         */

        /**
         * Calls Countries.
         * @function countries
         * @memberof meta.Mobile
         * @instance
         * @param {meta.IParamsCountries} request ParamsCountries message or plain object
         * @param {meta.Mobile.CountriesCallback} callback Node-style callback called with the error, if any, and ResponseCountries
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.countries = function countries(request, callback) {
            return this.rpcCall(countries, $root.meta.ParamsCountries, $root.meta.ResponseCountries, request, callback);
        }, "name", { value: "Countries" });

        /**
         * Calls Countries.
         * @function countries
         * @memberof meta.Mobile
         * @instance
         * @param {meta.IParamsCountries} request ParamsCountries message or plain object
         * @returns {Promise<meta.ResponseCountries>} Promise
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
         * @param {meta.IParamsStores} request ParamsStores message or plain object
         * @param {meta.Stores.AllCallback} callback Node-style callback called with the error, if any, and ResponseAllOfflineStoresInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Stores.prototype.all = function all(request, callback) {
            return this.rpcCall(all, $root.meta.ParamsStores, $root.meta.ResponseAllOfflineStoresInfo, request, callback);
        }, "name", { value: "All" });

        /**
         * Calls All.
         * @function all
         * @memberof meta.Stores
         * @instance
         * @param {meta.IParamsStores} request ParamsStores message or plain object
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
         * @param {meta.IParamsOfflineStoreInfoByID} request ParamsOfflineStoreInfoByID message or plain object
         * @param {meta.Stores.ByIDCallback} callback Node-style callback called with the error, if any, and ResponseOfflineStoreInfoByID
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Stores.prototype.byID = function byID(request, callback) {
            return this.rpcCall(byID, $root.meta.ParamsOfflineStoreInfoByID, $root.meta.ResponseOfflineStoreInfoByID, request, callback);
        }, "name", { value: "ByID" });

        /**
         * Calls ByID.
         * @function byID
         * @memberof meta.Stores
         * @instance
         * @param {meta.IParamsOfflineStoreInfoByID} request ParamsOfflineStoreInfoByID message or plain object
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
         * @param {meta.IParamsStoresCities} request ParamsStoresCities message or plain object
         * @param {meta.Stores.CitiesCallback} callback Node-style callback called with the error, if any, and ResponseStoresCities
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Stores.prototype.cities = function cities(request, callback) {
            return this.rpcCall(cities, $root.meta.ParamsStoresCities, $root.meta.ResponseStoresCities, request, callback);
        }, "name", { value: "Cities" });

        /**
         * Calls Cities.
         * @function cities
         * @memberof meta.Stores
         * @instance
         * @param {meta.IParamsStoresCities} request ParamsStoresCities message or plain object
         * @returns {Promise<meta.ResponseStoresCities>} Promise
         * @variation 2
         */

        return Stores;
    })();

    meta.ResponseAllOfflineStoresInfo = (function() {

        /**
         * Properties of a ResponseAllOfflineStoresInfo.
         * @memberof meta
         * @interface IResponseAllOfflineStoresInfo
         * @property {Array.<meta.IOfflineStore>|null} [result] ResponseAllOfflineStoresInfo result
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
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseAllOfflineStoresInfo result.
         * @member {Array.<meta.IOfflineStore>} result
         * @memberof meta.ResponseAllOfflineStoresInfo
         * @instance
         */
        ResponseAllOfflineStoresInfo.prototype.result = $util.emptyArray;

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

    meta.ParamsOfflineStoreInfoByID = (function() {

        /**
         * Properties of a ParamsOfflineStoreInfoByID.
         * @memberof meta
         * @interface IParamsOfflineStoreInfoByID
         * @property {number|null} [store_id] ParamsOfflineStoreInfoByID store_id
         */

        /**
         * Constructs a new ParamsOfflineStoreInfoByID.
         * @memberof meta
         * @classdesc Represents a ParamsOfflineStoreInfoByID.
         * @implements IParamsOfflineStoreInfoByID
         * @constructor
         * @param {meta.IParamsOfflineStoreInfoByID=} [properties] Properties to set
         */
        function ParamsOfflineStoreInfoByID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsOfflineStoreInfoByID store_id.
         * @member {number} store_id
         * @memberof meta.ParamsOfflineStoreInfoByID
         * @instance
         */
        ParamsOfflineStoreInfoByID.prototype.store_id = 0;

        return ParamsOfflineStoreInfoByID;
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
         * @property {Array.<meta.ITextFaq>|null} [content] BlockFaq content
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
            this.content = [];
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
         * BlockFaq content.
         * @member {Array.<meta.ITextFaq>} content
         * @memberof meta.BlockFaq
         * @instance
         */
        BlockFaq.prototype.content = $util.emptyArray;

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

    meta.ParamsStoresCities = (function() {

        /**
         * Properties of a ParamsStoresCities.
         * @memberof meta
         * @interface IParamsStoresCities
         * @property {number|null} [offset] ParamsStoresCities offset
         * @property {number|null} [limit] ParamsStoresCities limit
         */

        /**
         * Constructs a new ParamsStoresCities.
         * @memberof meta
         * @classdesc Represents a ParamsStoresCities.
         * @implements IParamsStoresCities
         * @constructor
         * @param {meta.IParamsStoresCities=} [properties] Properties to set
         */
        function ParamsStoresCities(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsStoresCities offset.
         * @member {number} offset
         * @memberof meta.ParamsStoresCities
         * @instance
         */
        ParamsStoresCities.prototype.offset = 0;

        /**
         * ParamsStoresCities limit.
         * @member {number} limit
         * @memberof meta.ParamsStoresCities
         * @instance
         */
        ParamsStoresCities.prototype.limit = 0;

        return ParamsStoresCities;
    })();

    meta.City = (function() {

        /**
         * Properties of a City.
         * @memberof meta
         * @interface ICity
         * @property {number|null} [city_id] City city_id
         * @property {string|null} [title] City title
         * @property {number|null} [stores] City stores
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
         * City stores.
         * @member {number} stores
         * @memberof meta.City
         * @instance
         */
        City.prototype.stores = 0;

        return City;
    })();

    meta.ResponseStoresCities = (function() {

        /**
         * Properties of a ResponseStoresCities.
         * @memberof meta
         * @interface IResponseStoresCities
         * @property {Array.<meta.ICity>|null} [result] ResponseStoresCities result
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
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseStoresCities result.
         * @member {Array.<meta.ICity>} result
         * @memberof meta.ResponseStoresCities
         * @instance
         */
        ResponseStoresCities.prototype.result = $util.emptyArray;

        return ResponseStoresCities;
    })();

    meta.ParamsStores = (function() {

        /**
         * Properties of a ParamsStores.
         * @memberof meta
         * @interface IParamsStores
         * @property {number|null} [city_id] ParamsStores city_id
         * @property {number|null} [offset] ParamsStores offset
         * @property {number|null} [limit] ParamsStores limit
         */

        /**
         * Constructs a new ParamsStores.
         * @memberof meta
         * @classdesc Represents a ParamsStores.
         * @implements IParamsStores
         * @constructor
         * @param {meta.IParamsStores=} [properties] Properties to set
         */
        function ParamsStores(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsStores city_id.
         * @member {number} city_id
         * @memberof meta.ParamsStores
         * @instance
         */
        ParamsStores.prototype.city_id = 0;

        /**
         * ParamsStores offset.
         * @member {number} offset
         * @memberof meta.ParamsStores
         * @instance
         */
        ParamsStores.prototype.offset = 0;

        /**
         * ParamsStores limit.
         * @member {number} limit
         * @memberof meta.ParamsStores
         * @instance
         */
        ParamsStores.prototype.limit = 0;

        return ParamsStores;
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

    meta.ParamsCountries = (function() {

        /**
         * Properties of a ParamsCountries.
         * @memberof meta
         * @interface IParamsCountries
         * @property {number|null} [offset] ParamsCountries offset
         * @property {number|null} [limit] ParamsCountries limit
         */

        /**
         * Constructs a new ParamsCountries.
         * @memberof meta
         * @classdesc Represents a ParamsCountries.
         * @implements IParamsCountries
         * @constructor
         * @param {meta.IParamsCountries=} [properties] Properties to set
         */
        function ParamsCountries(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsCountries offset.
         * @member {number} offset
         * @memberof meta.ParamsCountries
         * @instance
         */
        ParamsCountries.prototype.offset = 0;

        /**
         * ParamsCountries limit.
         * @member {number} limit
         * @memberof meta.ParamsCountries
         * @instance
         */
        ParamsCountries.prototype.limit = 0;

        return ParamsCountries;
    })();

    meta.ResponseCountries = (function() {

        /**
         * Properties of a ResponseCountries.
         * @memberof meta
         * @interface IResponseCountries
         * @property {number|null} [total] ResponseCountries total
         * @property {Array.<meta.ICountry>|null} [result] ResponseCountries result
         */

        /**
         * Constructs a new ResponseCountries.
         * @memberof meta
         * @classdesc Represents a ResponseCountries.
         * @implements IResponseCountries
         * @constructor
         * @param {meta.IResponseCountries=} [properties] Properties to set
         */
        function ResponseCountries(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseCountries total.
         * @member {number} total
         * @memberof meta.ResponseCountries
         * @instance
         */
        ResponseCountries.prototype.total = 0;

        /**
         * ResponseCountries result.
         * @member {Array.<meta.ICountry>} result
         * @memberof meta.ResponseCountries
         * @instance
         */
        ResponseCountries.prototype.result = $util.emptyArray;

        return ResponseCountries;
    })();

    meta.Country = (function() {

        /**
         * Properties of a Country.
         * @memberof meta
         * @interface ICountry
         * @property {number|Long|null} [id] Country id
         * @property {string|null} [country_code] Country country_code
         * @property {string|null} [prefix] Country prefix
         * @property {string|null} [title_ru] Country title_ru
         */

        /**
         * Constructs a new Country.
         * @memberof meta
         * @classdesc Represents a Country.
         * @implements ICountry
         * @constructor
         * @param {meta.ICountry=} [properties] Properties to set
         */
        function Country(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Country id.
         * @member {number|Long} id
         * @memberof meta.Country
         * @instance
         */
        Country.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Country country_code.
         * @member {string} country_code
         * @memberof meta.Country
         * @instance
         */
        Country.prototype.country_code = "";

        /**
         * Country prefix.
         * @member {string} prefix
         * @memberof meta.Country
         * @instance
         */
        Country.prototype.prefix = "";

        /**
         * Country title_ru.
         * @member {string} title_ru
         * @memberof meta.Country
         * @instance
         */
        Country.prototype.title_ru = "";

        return Country;
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

    mindbox.User = (function() {

        /**
         * Constructs a new User service.
         * @memberof mindbox
         * @classdesc Represents a User
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function User(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (User.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = User;

        /**
         * Callback as used by {@link mindbox.User#info}.
         * @memberof mindbox.User
         * @typedef InfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseUser} [response] ResponseUser
         */

        /**
         * Calls Info.
         * @function info
         * @memberof mindbox.User
         * @instance
         * @param {mindbox.IParamsUser} request ParamsUser message or plain object
         * @param {mindbox.User.InfoCallback} callback Node-style callback called with the error, if any, and ResponseUser
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(User.prototype.info = function info(request, callback) {
            return this.rpcCall(info, $root.mindbox.ParamsUser, $root.mindbox.ResponseUser, request, callback);
        }, "name", { value: "Info" });

        /**
         * Calls Info.
         * @function info
         * @memberof mindbox.User
         * @instance
         * @param {mindbox.IParamsUser} request ParamsUser message or plain object
         * @returns {Promise<mindbox.ResponseUser>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mindbox.User#orders}.
         * @memberof mindbox.User
         * @typedef OrdersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseOrders} [response] ResponseOrders
         */

        /**
         * Calls Orders.
         * @function orders
         * @memberof mindbox.User
         * @instance
         * @param {mindbox.IParamsOrders} request ParamsOrders message or plain object
         * @param {mindbox.User.OrdersCallback} callback Node-style callback called with the error, if any, and ResponseOrders
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(User.prototype.orders = function orders(request, callback) {
            return this.rpcCall(orders, $root.mindbox.ParamsOrders, $root.mindbox.ResponseOrders, request, callback);
        }, "name", { value: "Orders" });

        /**
         * Calls Orders.
         * @function orders
         * @memberof mindbox.User
         * @instance
         * @param {mindbox.IParamsOrders} request ParamsOrders message or plain object
         * @returns {Promise<mindbox.ResponseOrders>} Promise
         * @variation 2
         */

        return User;
    })();

    mindbox.Mobile = (function() {

        /**
         * Constructs a new Mobile service.
         * @memberof mindbox
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
         * Callback as used by {@link mindbox.Mobile#creation}.
         * @memberof mindbox.Mobile
         * @typedef CreationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseCreation} [response] ResponseCreation
         */

        /**
         * Calls Creation.
         * @function creation
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsCreation} request ParamsCreation message or plain object
         * @param {mindbox.Mobile.CreationCallback} callback Node-style callback called with the error, if any, and ResponseCreation
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.creation = function creation(request, callback) {
            return this.rpcCall(creation, $root.mindbox.ParamsCreation, $root.mindbox.ResponseCreation, request, callback);
        }, "name", { value: "Creation" });

        /**
         * Calls Creation.
         * @function creation
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsCreation} request ParamsCreation message or plain object
         * @returns {Promise<mindbox.ResponseCreation>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mindbox.Mobile#authorization}.
         * @memberof mindbox.Mobile
         * @typedef AuthorizationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseAuthorization} [response] ResponseAuthorization
         */

        /**
         * Calls Authorization.
         * @function authorization
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsAuthorization} request ParamsAuthorization message or plain object
         * @param {mindbox.Mobile.AuthorizationCallback} callback Node-style callback called with the error, if any, and ResponseAuthorization
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.authorization = function authorization(request, callback) {
            return this.rpcCall(authorization, $root.mindbox.ParamsAuthorization, $root.mindbox.ResponseAuthorization, request, callback);
        }, "name", { value: "Authorization" });

        /**
         * Calls Authorization.
         * @function authorization
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsAuthorization} request ParamsAuthorization message or plain object
         * @returns {Promise<mindbox.ResponseAuthorization>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mindbox.Mobile#registration}.
         * @memberof mindbox.Mobile
         * @typedef RegistrationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseRegistration} [response] ResponseRegistration
         */

        /**
         * Calls Registration.
         * @function registration
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsRegistration} request ParamsRegistration message or plain object
         * @param {mindbox.Mobile.RegistrationCallback} callback Node-style callback called with the error, if any, and ResponseRegistration
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.registration = function registration(request, callback) {
            return this.rpcCall(registration, $root.mindbox.ParamsRegistration, $root.mindbox.ResponseRegistration, request, callback);
        }, "name", { value: "Registration" });

        /**
         * Calls Registration.
         * @function registration
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsRegistration} request ParamsRegistration message or plain object
         * @returns {Promise<mindbox.ResponseRegistration>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mindbox.Mobile#code}.
         * @memberof mindbox.Mobile
         * @typedef CodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseCode} [response] ResponseCode
         */

        /**
         * Calls Code.
         * @function code
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsCode} request ParamsCode message or plain object
         * @param {mindbox.Mobile.CodeCallback} callback Node-style callback called with the error, if any, and ResponseCode
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.code = function code(request, callback) {
            return this.rpcCall(code, $root.mindbox.ParamsCode, $root.mindbox.ResponseCode, request, callback);
        }, "name", { value: "Code" });

        /**
         * Calls Code.
         * @function code
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsCode} request ParamsCode message or plain object
         * @returns {Promise<mindbox.ResponseCode>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mindbox.Mobile#checkCode}.
         * @memberof mindbox.Mobile
         * @typedef CheckCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseCheckCode} [response] ResponseCheckCode
         */

        /**
         * Calls CheckCode.
         * @function checkCode
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsCheckCode} request ParamsCheckCode message or plain object
         * @param {mindbox.Mobile.CheckCodeCallback} callback Node-style callback called with the error, if any, and ResponseCheckCode
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.checkCode = function checkCode(request, callback) {
            return this.rpcCall(checkCode, $root.mindbox.ParamsCheckCode, $root.mindbox.ResponseCheckCode, request, callback);
        }, "name", { value: "CheckCode" });

        /**
         * Calls CheckCode.
         * @function checkCode
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsCheckCode} request ParamsCheckCode message or plain object
         * @returns {Promise<mindbox.ResponseCheckCode>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mindbox.Mobile#editUser}.
         * @memberof mindbox.Mobile
         * @typedef EditUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mindbox.ResponseEditUser} [response] ResponseEditUser
         */

        /**
         * Calls EditUser.
         * @function editUser
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsEditUser} request ParamsEditUser message or plain object
         * @param {mindbox.Mobile.EditUserCallback} callback Node-style callback called with the error, if any, and ResponseEditUser
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Mobile.prototype.editUser = function editUser(request, callback) {
            return this.rpcCall(editUser, $root.mindbox.ParamsEditUser, $root.mindbox.ResponseEditUser, request, callback);
        }, "name", { value: "EditUser" });

        /**
         * Calls EditUser.
         * @function editUser
         * @memberof mindbox.Mobile
         * @instance
         * @param {mindbox.IParamsEditUser} request ParamsEditUser message or plain object
         * @returns {Promise<mindbox.ResponseEditUser>} Promise
         * @variation 2
         */

        return Mobile;
    })();

    mindbox.ParamsUser = (function() {

        /**
         * Properties of a ParamsUser.
         * @memberof mindbox
         * @interface IParamsUser
         * @property {string|null} [client_id] ParamsUser client_id
         */

        /**
         * Constructs a new ParamsUser.
         * @memberof mindbox
         * @classdesc Represents a ParamsUser.
         * @implements IParamsUser
         * @constructor
         * @param {mindbox.IParamsUser=} [properties] Properties to set
         */
        function ParamsUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsUser client_id.
         * @member {string} client_id
         * @memberof mindbox.ParamsUser
         * @instance
         */
        ParamsUser.prototype.client_id = "";

        return ParamsUser;
    })();

    mindbox.ResponseUser = (function() {

        /**
         * Properties of a ResponseUser.
         * @memberof mindbox
         * @interface IResponseUser
         * @property {string|null} [first_name] ResponseUser first_name
         * @property {string|null} [last_name] ResponseUser last_name
         * @property {string|null} [email] ResponseUser email
         * @property {string|null} [phone] ResponseUser phone
         * @property {number|null} [bonus_total] ResponseUser bonus_total
         * @property {number|null} [bonus_available] ResponseUser bonus_available
         * @property {number|null} [bonus_blocked] ResponseUser bonus_blocked
         * @property {number|null} [total_paid_amount] ResponseUser total_paid_amount
         */

        /**
         * Constructs a new ResponseUser.
         * @memberof mindbox
         * @classdesc Represents a ResponseUser.
         * @implements IResponseUser
         * @constructor
         * @param {mindbox.IResponseUser=} [properties] Properties to set
         */
        function ResponseUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseUser first_name.
         * @member {string} first_name
         * @memberof mindbox.ResponseUser
         * @instance
         */
        ResponseUser.prototype.first_name = "";

        /**
         * ResponseUser last_name.
         * @member {string} last_name
         * @memberof mindbox.ResponseUser
         * @instance
         */
        ResponseUser.prototype.last_name = "";

        /**
         * ResponseUser email.
         * @member {string} email
         * @memberof mindbox.ResponseUser
         * @instance
         */
        ResponseUser.prototype.email = "";

        /**
         * ResponseUser phone.
         * @member {string} phone
         * @memberof mindbox.ResponseUser
         * @instance
         */
        ResponseUser.prototype.phone = "";

        /**
         * ResponseUser bonus_total.
         * @member {number} bonus_total
         * @memberof mindbox.ResponseUser
         * @instance
         */
        ResponseUser.prototype.bonus_total = 0;

        /**
         * ResponseUser bonus_available.
         * @member {number} bonus_available
         * @memberof mindbox.ResponseUser
         * @instance
         */
        ResponseUser.prototype.bonus_available = 0;

        /**
         * ResponseUser bonus_blocked.
         * @member {number} bonus_blocked
         * @memberof mindbox.ResponseUser
         * @instance
         */
        ResponseUser.prototype.bonus_blocked = 0;

        /**
         * ResponseUser total_paid_amount.
         * @member {number} total_paid_amount
         * @memberof mindbox.ResponseUser
         * @instance
         */
        ResponseUser.prototype.total_paid_amount = 0;

        return ResponseUser;
    })();

    mindbox.ParamsOrders = (function() {

        /**
         * Properties of a ParamsOrders.
         * @memberof mindbox
         * @interface IParamsOrders
         * @property {string|null} [client_id] ParamsOrders client_id
         */

        /**
         * Constructs a new ParamsOrders.
         * @memberof mindbox
         * @classdesc Represents a ParamsOrders.
         * @implements IParamsOrders
         * @constructor
         * @param {mindbox.IParamsOrders=} [properties] Properties to set
         */
        function ParamsOrders(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsOrders client_id.
         * @member {string} client_id
         * @memberof mindbox.ParamsOrders
         * @instance
         */
        ParamsOrders.prototype.client_id = "";

        return ParamsOrders;
    })();

    mindbox.ResponseOrders = (function() {

        /**
         * Properties of a ResponseOrders.
         * @memberof mindbox
         * @interface IResponseOrders
         * @property {number|null} [total] ResponseOrders total
         * @property {Array.<mindbox.IOrder>|null} [result] ResponseOrders result
         */

        /**
         * Constructs a new ResponseOrders.
         * @memberof mindbox
         * @classdesc Represents a ResponseOrders.
         * @implements IResponseOrders
         * @constructor
         * @param {mindbox.IResponseOrders=} [properties] Properties to set
         */
        function ResponseOrders(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseOrders total.
         * @member {number} total
         * @memberof mindbox.ResponseOrders
         * @instance
         */
        ResponseOrders.prototype.total = 0;

        /**
         * ResponseOrders result.
         * @member {Array.<mindbox.IOrder>} result
         * @memberof mindbox.ResponseOrders
         * @instance
         */
        ResponseOrders.prototype.result = $util.emptyArray;

        return ResponseOrders;
    })();

    mindbox.Order = (function() {

        /**
         * Properties of an Order.
         * @memberof mindbox
         * @interface IOrder
         * @property {string|null} [order_id] Order order_id
         * @property {string|null} [created_date] Order created_date
         * @property {string|null} [payment_type] Order payment_type
         * @property {number|null} [discounted_total_price] Order discounted_total_price
         * @property {number|null} [payment_amount] Order payment_amount
         * @property {number|null} [applied_discount] Order applied_discount
         * @property {number|null} [acquired_balance_change] Order acquired_balance_change
         */

        /**
         * Constructs a new Order.
         * @memberof mindbox
         * @classdesc Represents an Order.
         * @implements IOrder
         * @constructor
         * @param {mindbox.IOrder=} [properties] Properties to set
         */
        function Order(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Order order_id.
         * @member {string} order_id
         * @memberof mindbox.Order
         * @instance
         */
        Order.prototype.order_id = "";

        /**
         * Order created_date.
         * @member {string} created_date
         * @memberof mindbox.Order
         * @instance
         */
        Order.prototype.created_date = "";

        /**
         * Order payment_type.
         * @member {string} payment_type
         * @memberof mindbox.Order
         * @instance
         */
        Order.prototype.payment_type = "";

        /**
         * Order discounted_total_price.
         * @member {number} discounted_total_price
         * @memberof mindbox.Order
         * @instance
         */
        Order.prototype.discounted_total_price = 0;

        /**
         * Order payment_amount.
         * @member {number} payment_amount
         * @memberof mindbox.Order
         * @instance
         */
        Order.prototype.payment_amount = 0;

        /**
         * Order applied_discount.
         * @member {number} applied_discount
         * @memberof mindbox.Order
         * @instance
         */
        Order.prototype.applied_discount = 0;

        /**
         * Order acquired_balance_change.
         * @member {number} acquired_balance_change
         * @memberof mindbox.Order
         * @instance
         */
        Order.prototype.acquired_balance_change = 0;

        return Order;
    })();

    mindbox.ParamsAuthorization = (function() {

        /**
         * Properties of a ParamsAuthorization.
         * @memberof mindbox
         * @interface IParamsAuthorization
         * @property {string|null} [device_uuid] ParamsAuthorization device_uuid
         */

        /**
         * Constructs a new ParamsAuthorization.
         * @memberof mindbox
         * @classdesc Represents a ParamsAuthorization.
         * @implements IParamsAuthorization
         * @constructor
         * @param {mindbox.IParamsAuthorization=} [properties] Properties to set
         */
        function ParamsAuthorization(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsAuthorization device_uuid.
         * @member {string} device_uuid
         * @memberof mindbox.ParamsAuthorization
         * @instance
         */
        ParamsAuthorization.prototype.device_uuid = "";

        return ParamsAuthorization;
    })();

    mindbox.ResponseAuthorization = (function() {

        /**
         * Properties of a ResponseAuthorization.
         * @memberof mindbox
         * @interface IResponseAuthorization
         * @property {boolean|null} [ok] ResponseAuthorization ok
         */

        /**
         * Constructs a new ResponseAuthorization.
         * @memberof mindbox
         * @classdesc Represents a ResponseAuthorization.
         * @implements IResponseAuthorization
         * @constructor
         * @param {mindbox.IResponseAuthorization=} [properties] Properties to set
         */
        function ResponseAuthorization(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseAuthorization ok.
         * @member {boolean} ok
         * @memberof mindbox.ResponseAuthorization
         * @instance
         */
        ResponseAuthorization.prototype.ok = false;

        return ResponseAuthorization;
    })();

    mindbox.ParamsRegistration = (function() {

        /**
         * Properties of a ParamsRegistration.
         * @memberof mindbox
         * @interface IParamsRegistration
         * @property {string|null} [device_uuid] ParamsRegistration device_uuid
         * @property {string|null} [client_id] ParamsRegistration client_id
         * @property {string|null} [email] ParamsRegistration email
         * @property {string|null} [full_name] ParamsRegistration full_name
         * @property {string|null} [mobile_phone] ParamsRegistration mobile_phone
         */

        /**
         * Constructs a new ParamsRegistration.
         * @memberof mindbox
         * @classdesc Represents a ParamsRegistration.
         * @implements IParamsRegistration
         * @constructor
         * @param {mindbox.IParamsRegistration=} [properties] Properties to set
         */
        function ParamsRegistration(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsRegistration device_uuid.
         * @member {string} device_uuid
         * @memberof mindbox.ParamsRegistration
         * @instance
         */
        ParamsRegistration.prototype.device_uuid = "";

        /**
         * ParamsRegistration client_id.
         * @member {string} client_id
         * @memberof mindbox.ParamsRegistration
         * @instance
         */
        ParamsRegistration.prototype.client_id = "";

        /**
         * ParamsRegistration email.
         * @member {string} email
         * @memberof mindbox.ParamsRegistration
         * @instance
         */
        ParamsRegistration.prototype.email = "";

        /**
         * ParamsRegistration full_name.
         * @member {string} full_name
         * @memberof mindbox.ParamsRegistration
         * @instance
         */
        ParamsRegistration.prototype.full_name = "";

        /**
         * ParamsRegistration mobile_phone.
         * @member {string} mobile_phone
         * @memberof mindbox.ParamsRegistration
         * @instance
         */
        ParamsRegistration.prototype.mobile_phone = "";

        return ParamsRegistration;
    })();

    mindbox.ResponseRegistration = (function() {

        /**
         * Properties of a ResponseRegistration.
         * @memberof mindbox
         * @interface IResponseRegistration
         * @property {boolean|null} [ok] ResponseRegistration ok
         */

        /**
         * Constructs a new ResponseRegistration.
         * @memberof mindbox
         * @classdesc Represents a ResponseRegistration.
         * @implements IResponseRegistration
         * @constructor
         * @param {mindbox.IResponseRegistration=} [properties] Properties to set
         */
        function ResponseRegistration(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseRegistration ok.
         * @member {boolean} ok
         * @memberof mindbox.ResponseRegistration
         * @instance
         */
        ResponseRegistration.prototype.ok = false;

        return ResponseRegistration;
    })();

    mindbox.ParamsCode = (function() {

        /**
         * Properties of a ParamsCode.
         * @memberof mindbox
         * @interface IParamsCode
         * @property {string|null} [mobile_phone] ParamsCode mobile_phone
         */

        /**
         * Constructs a new ParamsCode.
         * @memberof mindbox
         * @classdesc Represents a ParamsCode.
         * @implements IParamsCode
         * @constructor
         * @param {mindbox.IParamsCode=} [properties] Properties to set
         */
        function ParamsCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsCode mobile_phone.
         * @member {string} mobile_phone
         * @memberof mindbox.ParamsCode
         * @instance
         */
        ParamsCode.prototype.mobile_phone = "";

        return ParamsCode;
    })();

    mindbox.ResponseCode = (function() {

        /**
         * Properties of a ResponseCode.
         * @memberof mindbox
         * @interface IResponseCode
         * @property {boolean|null} [ok] ResponseCode ok
         */

        /**
         * Constructs a new ResponseCode.
         * @memberof mindbox
         * @classdesc Represents a ResponseCode.
         * @implements IResponseCode
         * @constructor
         * @param {mindbox.IResponseCode=} [properties] Properties to set
         */
        function ResponseCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseCode ok.
         * @member {boolean} ok
         * @memberof mindbox.ResponseCode
         * @instance
         */
        ResponseCode.prototype.ok = false;

        return ResponseCode;
    })();

    mindbox.ParamsCheckCode = (function() {

        /**
         * Properties of a ParamsCheckCode.
         * @memberof mindbox
         * @interface IParamsCheckCode
         * @property {string|null} [mobile_phone] ParamsCheckCode mobile_phone
         * @property {string|null} [code] ParamsCheckCode code
         */

        /**
         * Constructs a new ParamsCheckCode.
         * @memberof mindbox
         * @classdesc Represents a ParamsCheckCode.
         * @implements IParamsCheckCode
         * @constructor
         * @param {mindbox.IParamsCheckCode=} [properties] Properties to set
         */
        function ParamsCheckCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsCheckCode mobile_phone.
         * @member {string} mobile_phone
         * @memberof mindbox.ParamsCheckCode
         * @instance
         */
        ParamsCheckCode.prototype.mobile_phone = "";

        /**
         * ParamsCheckCode code.
         * @member {string} code
         * @memberof mindbox.ParamsCheckCode
         * @instance
         */
        ParamsCheckCode.prototype.code = "";

        return ParamsCheckCode;
    })();

    mindbox.ResponseCheckCode = (function() {

        /**
         * Properties of a ResponseCheckCode.
         * @memberof mindbox
         * @interface IResponseCheckCode
         * @property {boolean|null} [ok] ResponseCheckCode ok
         * @property {string|null} [status] ResponseCheckCode status
         * @property {string|null} [client_id] ResponseCheckCode client_id
         * @property {number|Long|null} [mindbox_id] ResponseCheckCode mindbox_id
         */

        /**
         * Constructs a new ResponseCheckCode.
         * @memberof mindbox
         * @classdesc Represents a ResponseCheckCode.
         * @implements IResponseCheckCode
         * @constructor
         * @param {mindbox.IResponseCheckCode=} [properties] Properties to set
         */
        function ResponseCheckCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseCheckCode ok.
         * @member {boolean} ok
         * @memberof mindbox.ResponseCheckCode
         * @instance
         */
        ResponseCheckCode.prototype.ok = false;

        /**
         * ResponseCheckCode status.
         * @member {string} status
         * @memberof mindbox.ResponseCheckCode
         * @instance
         */
        ResponseCheckCode.prototype.status = "";

        /**
         * ResponseCheckCode client_id.
         * @member {string} client_id
         * @memberof mindbox.ResponseCheckCode
         * @instance
         */
        ResponseCheckCode.prototype.client_id = "";

        /**
         * ResponseCheckCode mindbox_id.
         * @member {number|Long} mindbox_id
         * @memberof mindbox.ResponseCheckCode
         * @instance
         */
        ResponseCheckCode.prototype.mindbox_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        return ResponseCheckCode;
    })();

    mindbox.ParamsCreation = (function() {

        /**
         * Properties of a ParamsCreation.
         * @memberof mindbox
         * @interface IParamsCreation
         * @property {string|null} [device_uuid] ParamsCreation device_uuid
         * @property {string|null} [id] ParamsCreation id
         * @property {string|null} [vendor] ParamsCreation vendor
         * @property {string|null} [model] ParamsCreation model
         */

        /**
         * Constructs a new ParamsCreation.
         * @memberof mindbox
         * @classdesc Represents a ParamsCreation.
         * @implements IParamsCreation
         * @constructor
         * @param {mindbox.IParamsCreation=} [properties] Properties to set
         */
        function ParamsCreation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsCreation device_uuid.
         * @member {string} device_uuid
         * @memberof mindbox.ParamsCreation
         * @instance
         */
        ParamsCreation.prototype.device_uuid = "";

        /**
         * ParamsCreation id.
         * @member {string} id
         * @memberof mindbox.ParamsCreation
         * @instance
         */
        ParamsCreation.prototype.id = "";

        /**
         * ParamsCreation vendor.
         * @member {string} vendor
         * @memberof mindbox.ParamsCreation
         * @instance
         */
        ParamsCreation.prototype.vendor = "";

        /**
         * ParamsCreation model.
         * @member {string} model
         * @memberof mindbox.ParamsCreation
         * @instance
         */
        ParamsCreation.prototype.model = "";

        return ParamsCreation;
    })();

    mindbox.ResponseCreation = (function() {

        /**
         * Properties of a ResponseCreation.
         * @memberof mindbox
         * @interface IResponseCreation
         * @property {boolean|null} [ok] ResponseCreation ok
         */

        /**
         * Constructs a new ResponseCreation.
         * @memberof mindbox
         * @classdesc Represents a ResponseCreation.
         * @implements IResponseCreation
         * @constructor
         * @param {mindbox.IResponseCreation=} [properties] Properties to set
         */
        function ResponseCreation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseCreation ok.
         * @member {boolean} ok
         * @memberof mindbox.ResponseCreation
         * @instance
         */
        ResponseCreation.prototype.ok = false;

        return ResponseCreation;
    })();

    mindbox.ParamsEditUser = (function() {

        /**
         * Properties of a ParamsEditUser.
         * @memberof mindbox
         * @interface IParamsEditUser
         * @property {string|null} [device_uuid] ParamsEditUser device_uuid
         * @property {string|null} [client_id] ParamsEditUser client_id
         * @property {string|null} [mobile_phone] ParamsEditUser mobile_phone
         */

        /**
         * Constructs a new ParamsEditUser.
         * @memberof mindbox
         * @classdesc Represents a ParamsEditUser.
         * @implements IParamsEditUser
         * @constructor
         * @param {mindbox.IParamsEditUser=} [properties] Properties to set
         */
        function ParamsEditUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsEditUser device_uuid.
         * @member {string} device_uuid
         * @memberof mindbox.ParamsEditUser
         * @instance
         */
        ParamsEditUser.prototype.device_uuid = "";

        /**
         * ParamsEditUser client_id.
         * @member {string} client_id
         * @memberof mindbox.ParamsEditUser
         * @instance
         */
        ParamsEditUser.prototype.client_id = "";

        /**
         * ParamsEditUser mobile_phone.
         * @member {string} mobile_phone
         * @memberof mindbox.ParamsEditUser
         * @instance
         */
        ParamsEditUser.prototype.mobile_phone = "";

        return ParamsEditUser;
    })();

    mindbox.ResponseEditUser = (function() {

        /**
         * Properties of a ResponseEditUser.
         * @memberof mindbox
         * @interface IResponseEditUser
         * @property {boolean|null} [ok] ResponseEditUser ok
         */

        /**
         * Constructs a new ResponseEditUser.
         * @memberof mindbox
         * @classdesc Represents a ResponseEditUser.
         * @implements IResponseEditUser
         * @constructor
         * @param {mindbox.IResponseEditUser=} [properties] Properties to set
         */
        function ResponseEditUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseEditUser ok.
         * @member {boolean} ok
         * @memberof mindbox.ResponseEditUser
         * @instance
         */
        ResponseEditUser.prototype.ok = false;

        return ResponseEditUser;
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

    orders.Offline = (function() {

        /**
         * Constructs a new Offline service.
         * @memberof orders
         * @classdesc Represents an Offline
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Offline(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Offline.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Offline;

        /**
         * Callback as used by {@link orders.Offline#byClient}.
         * @memberof orders.Offline
         * @typedef ByClientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {orders.ResponseOfflineByClient} [response] ResponseOfflineByClient
         */

        /**
         * Calls ByClient.
         * @function byClient
         * @memberof orders.Offline
         * @instance
         * @param {orders.IParamsOfflineByClient} request ParamsOfflineByClient message or plain object
         * @param {orders.Offline.ByClientCallback} callback Node-style callback called with the error, if any, and ResponseOfflineByClient
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Offline.prototype.byClient = function byClient(request, callback) {
            return this.rpcCall(byClient, $root.orders.ParamsOfflineByClient, $root.orders.ResponseOfflineByClient, request, callback);
        }, "name", { value: "ByClient" });

        /**
         * Calls ByClient.
         * @function byClient
         * @memberof orders.Offline
         * @instance
         * @param {orders.IParamsOfflineByClient} request ParamsOfflineByClient message or plain object
         * @returns {Promise<orders.ResponseOfflineByClient>} Promise
         * @variation 2
         */

        return Offline;
    })();

    orders.Online = (function() {

        /**
         * Constructs a new Online service.
         * @memberof orders
         * @classdesc Represents an Online
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Online(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Online.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Online;

        /**
         * Callback as used by {@link orders.Online#byClient}.
         * @memberof orders.Online
         * @typedef ByClientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {orders.ResponseOnlineByClient} [response] ResponseOnlineByClient
         */

        /**
         * Calls ByClient.
         * @function byClient
         * @memberof orders.Online
         * @instance
         * @param {orders.IParamsOnlineByClient} request ParamsOnlineByClient message or plain object
         * @param {orders.Online.ByClientCallback} callback Node-style callback called with the error, if any, and ResponseOnlineByClient
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Online.prototype.byClient = function byClient(request, callback) {
            return this.rpcCall(byClient, $root.orders.ParamsOnlineByClient, $root.orders.ResponseOnlineByClient, request, callback);
        }, "name", { value: "ByClient" });

        /**
         * Calls ByClient.
         * @function byClient
         * @memberof orders.Online
         * @instance
         * @param {orders.IParamsOnlineByClient} request ParamsOnlineByClient message or plain object
         * @returns {Promise<orders.ResponseOnlineByClient>} Promise
         * @variation 2
         */

        return Online;
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
