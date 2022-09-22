"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(productID, productName, productAmount, ProductPrice) {
        this._productID = productID;
        this._productName = productName;
        this._productAmount = productAmount;
        this._productPrice = ProductPrice;
    }
    Object.defineProperty(Product.prototype, "productID", {
        get: function () {
            return this._productID;
        },
        set: function (value) {
            this._productID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (value) {
            this._productName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productAmount", {
        get: function () {
            return this._productAmount;
        },
        set: function (value) {
            this._productAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productPrice", {
        get: function () {
            return this._productPrice;
        },
        set: function (value) {
            this._productPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
