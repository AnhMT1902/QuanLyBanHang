import {ManageProduct} from "../Manage/ManageProduct";

export class Admin extends ManageProduct {
    private _useName: string;
    private _password: string;

    constructor(useName: string = "minh anh", password: string = "123") {
        super();
        this._useName = useName;
        this._password = password;
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
}