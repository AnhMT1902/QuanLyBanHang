"use strict";
exports.__esModule = true;
exports.ManageUser = void 0;
var User_1 = require("../Model/User");
var ManageUser = /** @class */ (function () {
    function ManageUser() {
        this.listUser = [];
        this.addOneUser();
    }
    ManageUser.prototype.addUser = function (user) {
        this.listUser.push(user);
    };
    ManageUser.prototype.showAll = function () {
        this.listUser.forEach(function (item, index) {
            console.log("".concat(index + 1, ". UseName: ").concat(item.useName, ", password: ").concat(item.password, ", status: ").concat(item.status));
        });
    };
    ManageUser.prototype.findByUserName = function (useName) {
        for (var i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].useName == useName) {
                return i;
            }
        }
        return -1;
    };
    ManageUser.prototype.findUseName = function (useName) {
        var index = this.findByUserName(useName);
        return this.listUser[index];
    };
    ManageUser.prototype.lockUser = function (useName) {
        var index = this.findByUserName(useName);
        this.listUser[index].status = false;
    };
    ManageUser.prototype.unLockUser = function (useName) {
        var index = this.findByUserName(useName);
        this.listUser[index].status = true;
    };
    ManageUser.prototype.addOneUser = function () {
        this.listUser.push(new User_1.User("ninh", "123", true));
    };
    return ManageUser;
}());
exports.ManageUser = ManageUser;
