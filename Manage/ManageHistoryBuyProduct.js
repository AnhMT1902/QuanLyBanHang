"use strict";
exports.__esModule = true;
exports.ManageHistoryBuyProduct = void 0;
var ManageHistoryBuyProduct = /** @class */ (function () {
    function ManageHistoryBuyProduct() {
    }
    ManageHistoryBuyProduct.addHistory = function (history) {
        ManageHistoryBuyProduct.listHistory.push(history);
    };
    ManageHistoryBuyProduct.showAll = function () {
        this.listHistory.forEach(function (item, index) {
            console.log("STT: ".concat(index + 1, " Thoi gian: ").concat(item.time, ", Tong tien: ").concat(item.money, ", Chi tiet san pham: ").concat(item.cart.showAll()));
        });
    };
    ManageHistoryBuyProduct.listHistory = [];
    return ManageHistoryBuyProduct;
}());
exports.ManageHistoryBuyProduct = ManageHistoryBuyProduct;
