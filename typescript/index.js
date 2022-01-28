"use strict";
exports.__esModule = true;
exports.logistics = exports.release = exports.platform = exports.geo = exports.mindbox = void 0;
var mindbox;
(function (mindbox) {
    var Platform;
    (function (Platform) {
        Platform[Platform["IOS"] = 0] = "IOS";
        Platform[Platform["ANDROID"] = 1] = "ANDROID";
    })(Platform = mindbox.Platform || (mindbox.Platform = {}));
})(mindbox = exports.mindbox || (exports.mindbox = {}));
var geo;
(function (geo) {
    var LocaleType;
    (function (LocaleType) {
        LocaleType[LocaleType["ru"] = 0] = "ru";
        LocaleType[LocaleType["en"] = 1] = "en";
    })(LocaleType = geo.LocaleType || (geo.LocaleType = {}));
})(geo = exports.geo || (exports.geo = {}));
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
    var Restriction;
    (function (Restriction) {
        Restriction[Restriction["price"] = 0] = "price";
        Restriction[Restriction["quantity"] = 1] = "quantity";
    })(Restriction || (Restriction = {}));
})(logistics = exports.logistics || (exports.logistics = {}));
(function (logistics) {
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
