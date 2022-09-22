import {Product} from "../Model/Product";
import {Manage} from "./Interface";
import {User} from "../Model/User";

export class ManageCart extends User implements Manage<Product> {
    private _user: User;
    _cart: Product[] = [];

    constructor(useName: string, password: string, status: boolean) {
        super(useName, password, status);

    }

    add(t: Product): void {
        this._cart.push(t);
    }

    findByID(id: number) {
        for (let i = 0; i < this._cart.length; i++) {
            if (this._cart[i].productID == id) {
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
            this._cart.splice(index, 1);
        }
    }

    update(id: number, t: Product): void {
        let index = this.findByID(id);
        this._cart[index] = t;
    }

    pay(): number {
        let money = 0;
        this._cart.forEach(item => money += item.productPrice)
        return money;
    }

    showAll() {
        let informationCart = ``
        this._cart.forEach((item, index) => {
            informationCart += `STT: ${index+1},ma san pham: ${item.productID}, ten sp: ${item.productName}, so luong sp: ${item.productAmount} ${item.productPrice}, gia: ${item.productPrice}\n`
        })
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }
}