import {ManageCart} from "./Manage/ManageCart";
import {Product} from "./Model/Product";

let cart: ManageCart = new ManageCart("minh anh", "123", true)
function f(cart) {
    cart._cart.push(new Product(1, "a", 1,2));
    cart._cart.push(new Product(2, "aaa", 1,2));
    cart._cart.push(new Product(3, "ab", 1,2));
    return cart;
}
f(cart)
console.log(cart)