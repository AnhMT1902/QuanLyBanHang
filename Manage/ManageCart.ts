import {Product} from "../Model/Product";
import {Manage} from "./Interface";

export class ManageCart implements Manage<Product> {
    cart: Product[] = [];

    add(t: Product): void {
        this.cart.push(t);
    }

    findByID(id: number) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].productID == id) {
                return i;
            }
        }
        return -1;
    }

    removeByID(id: number): void {
        let index = this.findByID(id)
        if (index == -1) {
            console.log(`san phap khong ton tai`);
        } else {
            this.cart.splice(index, 1);
        }
    }

    update(id: number, t: Product): void {
        let index = this.findByID(id);
        this.cart[index] = t;
    }

    pay(): number {
        let money = 0;
        this.cart.forEach(item => money += item.productPrice)
        return money;
    }

    showAll() {
        let informationCart = ``
        this.cart.forEach((item,index) => {
            informationCart += `STT: ${index+1},ma san pham: ${item.productID}, ten sp: ${item.productName}, so luong sp: ${item.productAmount} ${item.productPrice}, gia: ${item.productPrice}\n`
        })
    }
}