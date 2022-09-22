import {User} from "./User";
import {ManageProduct} from "../Manage/ManageProduct";
import {ManageCart} from "../Manage/ManageCart";

export class HistoryBuyProduct extends ManageCart {
    private _user: User;
    private _time: any;
    cart;
    private _money: number = this.cart.pay();


    constructor(user: User, time: any) {
        super();
        this._user = user;
        this._time = time;
    }


    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    get time(): any {
        return this._time;
    }

    set time(value: any) {
        this._time = value;
    }

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value;
    }
}