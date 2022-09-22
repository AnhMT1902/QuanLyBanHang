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
exports.ManageCart = void 0;
var User_1 = require("../Model/User");
var ManageCart = /** @class */ (function (_super) {
    __extends(ManageCart, _super);
    function ManageCart(useName, password, status) {
        var _this = _super.call(this, useName, password, status) || this;
        _this._cart = [];
        return _this;
    }
    ManageCart.prototype.add = function (t) {
        this._cart.push(t);
    };
    ManageCart.prototype.findByID = function (id) {
        for (var i = 0; i < this._cart.length; i++) {
            if (this._cart[i].productID == id) {
                return i;
            }
        }
        return -1;
    };
    ManageCart.prototype.removeByID = function (id) {
        var index = this.findByID(id);
        if (index == -1) {
            console.log("san phap khong ton tai");
        }
        else {
            this._cart.splice(index, 1);
        }
    };
    ManageCart.prototype.update = function (id, t) {
        var index = this.findByID(id);
        this._cart[index] = t;
    };
    ManageCart.prototype.pay = function () {
        var money = 0;
        this._cart.forEach(function (item) { return money += item.productPrice; });
        return money;
    };
    ManageCart.prototype.showAll = function () {
        var informationCart = "";
        this._cart.forEach(function (item, index) {
            informationCart += "STT: ".concat(index + 1, ",ma san pham: ").concat(item.productID, ", ten sp: ").concat(item.productName, ", so luong sp: ").concat(item.productAmount, " ").concat(item.productPrice, ", gia: ").concat(item.productPrice, "\n");
        });
    };
    Object.defineProperty(ManageCart.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    return ManageCart;
}(User_1.User));
exports.ManageCart = ManageCart;
