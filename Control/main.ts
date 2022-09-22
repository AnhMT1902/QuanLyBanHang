import {Admin} from "../Model/Admin";
import {ManageUser} from "../Manage/ManageUser";
import {Product} from "../Model/Product";
import {ManageProduct} from "../Manage/ManageProduct";

let inp = require('readline-sync');
let admin = new Admin();
let listUser = new ManageUser();
let listProduct = new ManageProduct();
let choice: number;
let temp: number = 4;

function main() {
    while (choice != 0) {
        menuLogIn();
        choice = +inp.question("Lua chon cua ban: ")
        switch (choice) {
            case 1:
                logInAdmin();
                break;
            case 2:
                logInUser();
                break;
        }
    }
}

main();

function menuLogIn() {
    console.log("----Ban phai dang nhap----\n1. Dang nhap Admin\n2. Dang nhap User\n0. Thoat");
}

function logInAdmin() {
    if (checkLoginAdmin() == true) {
        while (choice != 3) {
            menuAdmin();
            choice = +inp.question("lua chon cua ban: ");
            switch (choice) {
                case 1:
                    menuManageUser();
                    break;
                case 2:
                    menuManageProduct();
                    break;
            }
        }
    }
}

function menuAdmin() {
    console.log("----MENU ADMIN----\n1. Quan ly User\n2. Quan ly san pham\n3. Dang xuat")
}

function checkLoginAdmin() {
    let useName = inp.question("useName: ")
    let password = inp.question("password: ")
    if (admin.useName == useName && admin.password == password) {
        return true;
    } else {
        console.log("----thong tin tai khoan chua chinh xac, vui long dang nhap lai----")
        return false;
    }
}

function menuManageUser() {
    while (choice != 4) {
        showMenuManageUser();
        choice = +inp.question("nhap lua chon cua ban: ")
        switch (choice) {
            case 1:
                listUser.showAll();
                break;
            case 2:
                listUser.showAll();
                let lockUseName: string = inp.question("nhap useName: ");
                listUser.lockUser(lockUseName);
                break;
            case 3:
                listUser.showAll();
                let useName = inp.question("nhap useName: ")
                listUser.unLockUser(useName);
                break;
            case 4:
                menuManageUser();
                break;
        }
    }
}

function menuManageProduct() {
    while (choice != 0) {
        showMenuManageProduct()
        choice = +inp.question("lua chon cua ban: ")
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                showProduct();
                break;
            case 3:
                findByName();
                break;
            case 4:
                updateProduct();
                break;
            case 5:
                removeProduct();
                break;
        }
    }
}

function showMenuManageUser() {
    console.log("----MANAGE USER----\n1. Danh sach User\n2. Khoa tai khoan \n3. Mo tai khoan\n4. Quay lai")
}

function showMenuManageProduct() {
    console.log("----MANAGE PRODUCT----\n1. Them\n2. Hien thi tat ca san pham\n3. Tim san pham\n4. Sua sp\n5. Xoa sp\n0. Quay lai")
}

function addProduct() {
    let id = +inp.question("id san pham: ");
    let name = inp.question("ten san pham: ");
    let amount = +inp.question("so luong san pham: ");
    let price = +inp.question("gia san pham");
    let temp = 0;
    for (let i = 0; i < listProduct.listProduct.length; i++) {
        if (listProduct.listProduct[i].productID == id) {
            listProduct.listProduct[i].productID += id;
            temp++
        }
    }
    if (temp == 0) {
        listProduct.add(new Product(id, name, amount, price))
    }
}

function findByName() {
    let name = inp.question("nhap ten sp can tim")
    listProduct.findByName(name);
}

function updateProduct() {
    let id = +inp.question("nhap id sp can sua: ")
    let index = listProduct.findByID(id);
    console.log("-----Bo trong neu khong muon thay doi-----");
    let name = inp.question("nhap ten moi: ");
    let amount = +inp.question("nhap lai so luong: ");
    let price = +inp.question("nhap gia moi: ");
    if (name != "") {
        listProduct.listProduct[index].productName = name;
    }
    if (amount != 0) {
        listProduct.listProduct[index].productAmount = amount;
    }
    if (price != 0) {
        listProduct.listProduct[index].productPrice = price;
    }
}

function showProduct() {
    listProduct.showAllProduct();
}

function removeProduct() {
    showProduct();
    let id = inp.question("nhap id can xoa: ");
    listProduct.removeByID(id);
}

function logInUser() {
    let useName = inp.question("useName: ");
    let password = inp.question("password: ");

    if (checkLoginUser(useName, password) == true) {
        if (listUser.listUser[listUser.findByUserName(useName)].status == false) {
            console.log("-----Tai khoan bi khoa, vui long lien he ADMIN de mo-----")
        } else {
            logInHistory();
            while (choice != 0) {
                showShoppingMenu();
                // viết tiếp ở đây
            }
        }
    }
}

function checkLoginUser(useName: string, password: string) {
    for (let i = 0; i < listUser.listUser.length; i++) {
        if (listUser.listUser[i].useName == useName && listUser.listUser[i].password == password) {
            temp = 4;
            return true;
        } else {
            temp--;
            console.log("----Ten dang nhap hoac mat khau khong chinh xac----")
        }
    }
    if (temp == 0) {
        listUser.listUser[listUser.findByUserName(useName)].status = false;
    }
}

function showShoppingMenu() {
    console.log("----MENU SHOPPING----\n1. Mua sam\n2. Gio hang cua toi\n3. Lich su\n0. Thoat")
}

function logInHistory() {

}