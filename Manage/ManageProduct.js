"use strict";
exports.__esModule = true;
exports.ManageProduct = void 0;
var Product_1 = require("../Model/Product");
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        var _this = this;
        this.listProduct = [];
        this.update = function (id, t) {
            var index = _this.findByID(id);
            _this.listProduct[index] = t;
        };
        this.addFiveProduct();
    }
    ManageProduct.prototype.add = function (t) {
        this.listProduct.push(t);
    };
    ManageProduct.prototype.findByID = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].productID == id) {
                return i;
            }
        }
        return -1;
    };
    ManageProduct.prototype.findByName = function (name) {
        // @ts-ignore
        return this.listProduct.filter(function (item) { return item.productName.toUpperCase().includes(name.toUpperCase()); });
    };
    ManageProduct.prototype.removeByID = function (id) {
        var index = this.findByID(id);
        if (index == -1) {
            console.log("san phap khong ton tai");
        }
        else {
            this.listProduct.splice(index, 1);
        }
    };
    ManageProduct.prototype.addFiveProduct = function () {
        this.listProduct.push(new Product_1.Product(1, "Iphone 14 Pro Max", 50, 31000000));
        this.listProduct.push(new Product_1.Product(2, "Iphone 14 Pro", 50, 29000000));
        this.listProduct.push(new Product_1.Product(3, "Iphone 14", 50, 24000000));
        this.listProduct.push(new Product_1.Product(4, "Iphone 14 Plus", 50, 27000000));
        this.listProduct.push(new Product_1.Product(5, "Iphone 13 Pro Max", 50, 26000000));
    };
    ManageProduct.prototype.showAllProduct = function () {
        this.listProduct.forEach(function (item, index) {
            console.log("STT: ".concat(index + 1, ", id: ").concat(item.productID, ", ").concat(item.productName, ", sl: ").concat(item.productAmount, ", gia: ").concat(item.productPrice));
        });
    };
    ManageProduct.prototype.findProductByID = function (id) {
        var index = this.findByID(id);
        if (index == -1) {
            return undefined;
        }
        else {
            return this.listProduct[index];
        }
    };
    return ManageProduct;
}());
exports.ManageProduct = ManageProduct;
