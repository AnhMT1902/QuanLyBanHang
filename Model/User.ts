import {Product} from "./Product";
import {ManageUser} from "../Manage/ManageUser";
import {ManageCart} from "../Manage/ManageCart";

export class User extends ManageCart{
    private _useName: string;
    private _password: string;
    private _status: boolean
    cart: Product[] = [];

    constructor(useName: string, password: string, status: boolean) {
        super();
        this._useName = useName;
        this._password = password;
        this._status = status;
    }

    get useName(): string {
        return this._useName;
    }

    set useName(value: string) {
        this._useName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}