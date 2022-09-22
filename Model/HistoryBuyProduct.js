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
exports.HistoryBuyProduct = void 0;
var ManageCart_1 = require("../Manage/ManageCart");
var HistoryBuyProduct = /** @class */ (function (_super) {
    __extends(HistoryBuyProduct, _super);
    function HistoryBuyProduct(user, time) {
        var _this = _super.call(this) || this;
        _this._money = _this.cart.pay();
        _this._user = user;
        _this._time = time;
        return _this;
    }
    Object.defineProperty(HistoryBuyProduct.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HistoryBuyProduct.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HistoryBuyProduct.prototype, "money", {
        get: function () {
            return this._money;
        },
        set: function (value) {
            this._money = value;
        },
        enumerable: false,
        configurable: true
    });
    return HistoryBuyProduct;
}(ManageCart_1.ManageCart));
exports.HistoryBuyProduct = HistoryBuyProduct;
