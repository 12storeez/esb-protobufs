"use strict";
exports.__esModule = true;
exports.logistics = exports.release = exports.platform = exports.geo = exports.transport = exports.mindbox = void 0;
var mindbox;
(function (mindbox) {
    var Platform;
    (function (Platform) {
        Platform[Platform["IOS"] = 0] = "IOS";
        Platform[Platform["ANDROID"] = 1] = "ANDROID";
    })(Platform = mindbox.Platform || (mindbox.Platform = {}));
})(mindbox = exports.mindbox || (exports.mindbox = {}));
var transport;
(function (transport) {
    var DeliveryType;
    (function (DeliveryType) {
        DeliveryType[DeliveryType["courier"] = 0] = "courier";
        DeliveryType[DeliveryType["courierFast"] = 1] = "courierFast";
        DeliveryType[DeliveryType["courieFitting"] = 2] = "courieFitting";
        DeliveryType[DeliveryType["pickupShop"] = 3] = "pickupShop";
        DeliveryType[DeliveryType["pickupBoxberry"] = 4] = "pickupBoxberry";
    })(DeliveryType = transport.DeliveryType || (transport.DeliveryType = {}));
})(transport = exports.transport || (exports.transport = {}));
(function (transport) {
    var TransportCompanyType;
    (function (TransportCompanyType) {
        TransportCompanyType[TransportCompanyType["boxberry"] = 0] = "boxberry";
        TransportCompanyType[TransportCompanyType["cdek"] = 1] = "cdek";
        TransportCompanyType[TransportCompanyType["pochta"] = 2] = "pochta";
        TransportCompanyType[TransportCompanyType["ups"] = 3] = "ups";
        TransportCompanyType[TransportCompanyType["dpd"] = 4] = "dpd";
        TransportCompanyType[TransportCompanyType["dhl"] = 5] = "dhl";
        TransportCompanyType[TransportCompanyType["redexpress"] = 6] = "redexpress";
    })(TransportCompanyType = transport.TransportCompanyType || (transport.TransportCompanyType = {}));
})(transport = exports.transport || (exports.transport = {}));
var geo;
(function (geo) {
    var LocaleType;
    (function (LocaleType) {
        LocaleType[LocaleType["ru"] = 0] = "ru";
        LocaleType[LocaleType["en"] = 1] = "en";
    })(LocaleType = geo.LocaleType || (geo.LocaleType = {}));
})(geo = exports.geo || (exports.geo = {}));
(function (transport) {
    var GeoType;
    (function (GeoType) {
        GeoType[GeoType["dadata"] = 0] = "dadata";
        GeoType[GeoType["geonames"] = 1] = "geonames";
    })(GeoType = transport.GeoType || (transport.GeoType = {}));
})(transport = exports.transport || (exports.transport = {}));
(function (transport) {
    var DAY_OF_WEEK_TYPE;
    (function (DAY_OF_WEEK_TYPE) {
        DAY_OF_WEEK_TYPE[DAY_OF_WEEK_TYPE["WORK"] = 0] = "WORK";
        DAY_OF_WEEK_TYPE[DAY_OF_WEEK_TYPE["HOLIDAY"] = 1] = "HOLIDAY";
        DAY_OF_WEEK_TYPE[DAY_OF_WEEK_TYPE["SATURDAY"] = 2] = "SATURDAY";
        DAY_OF_WEEK_TYPE[DAY_OF_WEEK_TYPE["SUNDAY"] = 3] = "SUNDAY";
    })(DAY_OF_WEEK_TYPE = transport.DAY_OF_WEEK_TYPE || (transport.DAY_OF_WEEK_TYPE = {}));
})(transport = exports.transport || (exports.transport = {}));
var platform;
(function (platform) {
    var Scope;
    (function (Scope) {
        Scope[Scope["read"] = 0] = "read";
        Scope[Scope["write"] = 1] = "write";
    })(Scope || (Scope = {}));
})(platform = exports.platform || (exports.platform = {}));
var release;
(function (release) {
    var ArticleReleaseType;
    (function (ArticleReleaseType) {
        ArticleReleaseType[ArticleReleaseType["site"] = 0] = "site";
        ArticleReleaseType[ArticleReleaseType["mercaux"] = 1] = "mercaux";
    })(ArticleReleaseType = release.ArticleReleaseType || (release.ArticleReleaseType = {}));
})(release = exports.release || (exports.release = {}));
var logistics;
(function (logistics) {
    var BorderType;
    (function (BorderType) {
        BorderType[BorderType["less"] = 0] = "less";
        BorderType[BorderType["none"] = 1] = "none";
        BorderType[BorderType["greater"] = 2] = "greater";
    })(BorderType = logistics.BorderType || (logistics.BorderType = {}));
})(logistics = exports.logistics || (exports.logistics = {}));
(function (logistics) {
    var IntervalType;
    (function (IntervalType) {
        IntervalType[IntervalType["weekdays"] = 0] = "weekdays";
        IntervalType[IntervalType["saturday"] = 1] = "saturday";
        IntervalType[IntervalType["sunday"] = 2] = "sunday";
    })(IntervalType = logistics.IntervalType || (logistics.IntervalType = {}));
})(logistics = exports.logistics || (exports.logistics = {}));
