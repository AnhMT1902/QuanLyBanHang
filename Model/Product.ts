export class Product {
    private _productID: number;
    private _productName: string;
    private _productAmount: number;
    private _productPrice: number;

    constructor(productID: number, productName: string, productAmount: number, ProductPrice: number) {
        this._productID = productID;
        this._productName = productName;
        this._productAmount = productAmount;
        this._productPrice = ProductPrice;
    }

    get productID(): number {
        return this._productID;
    }

    set productID(value: number) {
        this._productID = value;
    }

    get productName(): string {
        return this._productName;
    }

    set productName(value: string) {
        this._productName = value;
    }

    get productAmount(): number {
        return this._productAmount;
    }

    set productAmount(value: number) {
        this._productAmount = value;
    }

    get productPrice(): number {
        return this._productPrice;
    }

    set productPrice(value: number) {
        this._productPrice = value;
    }
}