"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = void 0;
var customer_1 = require("./customer");
var accounts_1 = __importDefault(require("./accounts"));
var transaction = /** @class */ (function () {
    function transaction() {
    }
    transaction.prototype.createAccount = function (firstName, lastName) {
        var cust = new customer_1.customer(firstName, lastName);
        if (accounts_1.default.addAccount(cust)) {
            return "Account with: AccountNo=".concat(cust.getAccountNo(), " created successfully");
        }
        else {
            return 'Account already exists';
        }
    };
    transaction.prototype.fundAccount = function (accountNo, amount) {
        console.log("transaction::fundAccount -> accountNo=".concat(accountNo));
        var cust = accounts_1.default.findAccount(accountNo);
        if (cust !== null) {
            cust.increaseBalance(amount);
            return "Funded your account successfully. Your Account balance: ".concat(cust.getAccountBalance());
        }
        else {
            return "No such account exists";
        }
    };
    transaction.prototype.transferFunds = function (fromAccountNo, toAccountNo, amount) {
        var custA = accounts_1.default.findAccount(fromAccountNo);
        var custB = accounts_1.default.findAccount(toAccountNo);
        if (custA !== null && custB !== null) {
            if (custA.getAccountBalance() >= amount) {
                custA.decreaseBalance(amount);
                custB.increaseBalance(amount);
            }
            else {
                return "Insufficient funds.";
            }
        }
        else {
            return "Both accounts must exist.";
        }
        return "Successful funds transfer. Your Account balance: ".concat(custA.getAccountBalance());
    };
    transaction.prototype.withdrawFunds = function (accountNo, amount) {
        var cust = accounts_1.default.findAccount(accountNo);
        if (cust !== null) {
            var balance = cust.getAccountBalance();
            if (amount > balance) {
                return "Trying to withdraw more than is available. Your current Account balance: ".concat(balance);
            }
            else {
                cust.decreaseBalance(amount);
                return "Money withdrawal was successful. Your Account balance: ".concat(cust.getAccountBalance());
            }
        }
        else {
            return "No such account exists";
        }
    };
    return transaction;
}());
exports.transaction = transaction;
