"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(useName, password, status) {
        this._useName = useName;
        this._password = password;
        this._status = status;
    }
    Object.defineProperty(User.prototype, "useName", {
        get: function () {
            return this._useName;
        },
        set: function (value) {
            this._useName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
