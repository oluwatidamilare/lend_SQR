"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accounts = /** @class */ (function () {
    function accounts() {
    }
    accounts.addAccount = function (newAcc) {
        var oldAcc = this.findAccount(newAcc.getAccountNo());
        if (oldAcc === null) {
            this.record.push(newAcc);
            return true;
        }
        return false;
    };
    accounts.getAllAccounts = function () {
        return this.record;
    };
    accounts.findAccount = function (accountNo) {
        for (var idx in this.record) {
            var cust = this.record[idx];
            console.log("accounts::findAccount -> oldAccNo=".concat(cust.getAccountNo(), " newAccNo=").concat(accountNo));
            if (cust.getAccountNo() === accountNo) {
                return cust;
            }
        }
        return null;
    };
    accounts.record = [];
    return accounts;
}());
exports.default = accounts;
