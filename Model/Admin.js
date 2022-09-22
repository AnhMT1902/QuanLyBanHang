"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Admin = void 0;
var ManageProduct_1 = require("../Manage/ManageProduct");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(useName, password) {
        if (useName === void 0) { useName = "minh anh"; }
        if (password === void 0) { password = "123"; }
        var _this = _super.call(this) || this;
        _this._useName = useName;
        _this._password = password;
        return _this;
    }
    Object.defineProperty(Admin.prototype, "useName", {
        get: function () {
            return this._useName;
        },
        set: function (value) {
            this._useName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Admin.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}(ManageProduct_1.ManageProduct));
exports.Admin = Admin;
