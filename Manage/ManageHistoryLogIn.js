"use strict";
exports.__esModule = true;
exports.ManageHistoryLogIn = void 0;
var ManageHistoryLogIn = /** @class */ (function () {
    function ManageHistoryLogIn() {
        this.listHistoryLogIn = [];
    }
    ManageHistoryLogIn.prototype.addHistoryLogIn = function (historyLogIn) {
        this.listHistoryLogIn.push(historyLogIn);
    };
    return ManageHistoryLogIn;
}());
exports.ManageHistoryLogIn = ManageHistoryLogIn;
