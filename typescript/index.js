"use strict";
exports.__esModule = true;
exports.platform = exports.logistics = exports.release = exports.mindbox = exports.geo = void 0;
var geo;
(function (geo) {
    var LocaleType;
    (function (LocaleType) {
        LocaleType[LocaleType["nil"] = 0] = "nil";
        LocaleType[LocaleType["ru"] = 1] = "ru";
        LocaleType[LocaleType["en"] = 2] = "en";
    })(LocaleType = geo.LocaleType || (geo.LocaleType = {}));
})(geo = exports.geo || (exports.geo = {}));
var mindbox;
(function (mindbox) {
    var Platform;
    (function (Platform) {
        Platform[Platform["IOS"] = 0] = "IOS";
        Platform[Platform["ANDROID"] = 1] = "ANDROID";
    })(Platform = mindbox.Platform || (mindbox.Platform = {}));
})(mindbox = exports.mindbox || (exports.mindbox = {}));
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
    var Restriction;
    (function (Restriction) {
        Restriction[Restriction["price"] = 0] = "price";
        Restriction[Restriction["quantity"] = 1] = "quantity";
    })(Restriction = logistics.Restriction || (logistics.Restriction = {}));
    var DayOfWeek;
    (function (DayOfWeek) {
        DayOfWeek[DayOfWeek["monday"] = 0] = "monday";
        DayOfWeek[DayOfWeek["tuesday"] = 1] = "tuesday";
        DayOfWeek[DayOfWeek["wednesday"] = 2] = "wednesday";
        DayOfWeek[DayOfWeek["thursday"] = 3] = "thursday";
        DayOfWeek[DayOfWeek["friday"] = 4] = "friday";
        DayOfWeek[DayOfWeek["saturday"] = 5] = "saturday";
        DayOfWeek[DayOfWeek["sunday"] = 6] = "sunday";
    })(DayOfWeek = logistics.DayOfWeek || (logistics.DayOfWeek = {}));
})(logistics = exports.logistics || (exports.logistics = {}));
var platform;
(function (platform) {
    var Scope;
    (function (Scope) {
        Scope[Scope["read"] = 0] = "read";
        Scope[Scope["write"] = 1] = "write";
    })(Scope = platform.Scope || (platform.Scope = {}));
})(platform = exports.platform || (exports.platform = {}));
