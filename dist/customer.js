"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customer = void 0;
function gen_acc_no() {
    var d = new Date().getTime();
    return "".concat(d).substring(3);
}
var customer = /** @class */ (function () {
    function customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountNo = gen_acc_no();
        this.balance = 0.0;
    }
    customer.prototype.getAccountNo = function () {
        return this.accountNo;
    };
    customer.prototype.getName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    customer.prototype.getAccountBalance = function () {
        return this.balance;
    };
    customer.prototype.setAccountBalance = function (newBalance) {
        this.balance = newBalance;
    };
    customer.prototype.increaseBalance = function (amount) {
        this.balance += amount;
    };
    customer.prototype.decreaseBalance = function (amount) {
        this.balance -= amount;
    };
    return customer;
}());
exports.customer = customer;
