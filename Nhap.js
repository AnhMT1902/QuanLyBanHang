"use strict";
exports.__esModule = true;
var ManageCart_1 = require("./Manage/ManageCart");
var Product_1 = require("./Model/Product");
var cart = new ManageCart_1.ManageCart("minh anh", "123", true);
function f(cart) {
    cart._cart.push(new Product_1.Product(1, "a", 1, 2));
    cart._cart.push(new Product_1.Product(2, "aaa", 1, 2));
    cart._cart.push(new Product_1.Product(3, "ab", 1, 2));
    return cart;
}
f(cart);
console.log(cart);
