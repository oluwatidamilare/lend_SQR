"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var transaction_1 = require("./transaction");
var accounts_1 = __importDefault(require("./accounts"));
var bodyParser = require('body-parser');
// initialize express
var app = (0, express_1.default)();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
var trnx = new transaction_1.transaction();
app.get('/', function (req, res) {
    res.send('Transaction Home Endpoint');
});
app.route('/createAcc')
    .get(function (req, res) {
    res.send('GET: Create Account Endpoint');
})
    .post(function (req, res) {
    var firstName = req.body.firstName ? req.body.firstName : '';
    var lastName = req.body.lastName ? req.body.lastName : '';
    if (firstName === '' || lastName === '') {
        res.send("Error: You cannot leave the `firstName` and `lastName` fields blank");
    }
    else {
        var msg = trnx.createAccount(firstName, lastName);
        res.send(msg);
        //res.send('POST: Create Account Endpoint')
    }
});
app.route('/fundAcc')
    .get(function (req, res) {
    res.send('GET: Fund Account Endpoint');
})
    .post(function (req, res) {
    var accountNo = req.body.accountNo ? req.body.accountNo : '';
    var amount = req.body.amount ? req.body.amount : '';
    if (accountNo === '' || amount === '') {
        res.send("Error: You cannot leave the `accountNo` and `amount` fields blank");
    }
    else {
        var msg = trnx.fundAccount(accountNo, +amount);
        res.send(msg);
        //res.send('POST: Fund Account Endpoint')
    }
});
app.route('/transferFunds')
    .get(function (req, res) {
    res.send('GET: Transfer Funds Endpoint');
})
    .post(function (req, res) {
    var fromAccountNo = req.body.fromAccountNo ? req.body.fromAccountNo : '';
    var toAccountNo = req.body.toAccountNo ? req.body.toAccountNo : '';
    var amount = req.body.amount ? req.body.amount : '';
    if (fromAccountNo === '' || toAccountNo === '' || amount === '') {
        res.send("Error: You cannot leave the `fromAccountNo`, `toAccountNo` and `amount` fields blank");
    }
    else {
        var msg = trnx.transferFunds(fromAccountNo, toAccountNo, +amount);
        res.send(msg);
        //res.send('POST: Transfer Funds Endpoint')
    }
});
app.route('/withdrawFunds')
    .get(function (req, res) {
    res.send('GET: Withdraw  Funds Endpoint');
})
    .post(function (req, res) {
    var accountNo = req.body.accountNo ? req.body.accountNo : '';
    var amount = req.body.amount ? req.body.amount : '';
    if (accountNo === '' || amount === '') {
        res.send("Error: You cannot leave the `accountNo` and `amount` fields blank");
    }
    else {
        var msg = trnx.withdrawFunds(accountNo, +amount);
        res.send(msg);
        //res.send('POST: Fund Account Endpoint')
    }
    //res.send('POST: Withdraw Funds Endpoint')
});
app.route('/allAccounts')
    .get(function (req, res) {
    //res.send(accounts.getAllAccountsJSON())
    res.send(accounts_1.default.getAllAccounts());
});
var port = process.env.PORT || 3005;
app.listen(port, function () { return console.log("App listening on PORT ".concat(port)); });
