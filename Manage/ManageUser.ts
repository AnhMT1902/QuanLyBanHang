import {User} from "../Model/User";
import {Manage} from "./Interface";
import it from "node:test";

export class ManageUser {
    listUser: User [] = []
    constructor() {
        this.addOneUser();
    }

    addUser(user: User) {
        this.listUser.push(user);
    }

    showAll() {
        this.listUser.forEach((item, index) => {
            console.log(`${index + 1}. UseName: ${item.useName}, password: ${item.password}, status: ${item.status}`)
        })
    }

    findByUserName(useName: string) {
        for (let i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].useName == useName) {
                return i;
            }
        }
        return -1;
    }

    lockUser(useName: string) {
        let index = this.findByUserName(useName);
        this.listUser[index].status = false;
    }

    unLockUser(useName: string) {
        let index = this.findByUserName(useName);
        this.listUser[index].status = true;
    }

    addOneUser(){
        this.listUser.push(new User("ninh","123", true))
    }
}