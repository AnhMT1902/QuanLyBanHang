import {Manage} from "./Interface";
import {Product} from "../Model/Product";
import {ManageUser} from "./ManageUser";

export class ManageProduct implements Manage<Product> {
    public listProduct: Product[] = [];

    constructor() {
        this.addFiveProduct();
    }

    add(t: Product): void {
        this.listProduct.push(t);
    }

    findByID(id: number): number {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].productID == id) {
                return i;
            }
        }
        return -1;
    }

    findByName(name: string) {
        // @ts-ignore
        return this.listProduct.filter(item => item.productName.toUpperCase().includes(name.toUpperCase()))
    }

    removeByID(id: number): void {
        let index = this.findByID(id)
        if (index == -1) {
            console.log(`san phap khong ton tai`);
        } else {
            this.listProduct.splice(index, 1);
        }
    }

    update = (id: number, t: Product): void => {
        let index = this.findByID(id);
        this.listProduct[index] = t;
    };

    addFiveProduct() {
        this.listProduct.push(new Product(1, "Iphone 14 Pro Max", 50, 31000000))
        this.listProduct.push(new Product(2, "Iphone 14 Pro", 50, 29000000))
        this.listProduct.push(new Product(3, "Iphone 14", 50, 24000000))
        this.listProduct.push(new Product(4, "Iphone 14 Plus", 50, 27000000))
        this.listProduct.push(new Product(5, "Iphone 13 Pro Max", 50, 26000000))
    }

    showAllProduct() {
        this.listProduct.forEach((item, index) => {
            console.log(`STT: ${index + 1}, id: ${item.productID}, ${item.productName}, sl: ${item.productAmount}, gia: ${item.productPrice}`)
        })
    }
}