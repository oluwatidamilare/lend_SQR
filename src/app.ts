import express from 'express';
import {transaction} from './transaction';
import accounts from './accounts';
const bodyParser = require('body-parser');

// initialize express
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const trnx = new transaction()

app.get('/', (req, res) => {
	res.send('Transaction Home Endpoint'); 
});

app.route('/createAcc')
	.get((req, res) => {
		res.send('GET: Create Account Endpoint')
	})
	.post((req, res) => {
		const firstName = req.body.firstName ? req.body.firstName : ''
		const lastName = req.body.lastName ? req.body.lastName : ''

		if (firstName==='' || lastName ===''){
			res.send("Error: You cannot leave the `firstName` and `lastName` fields blank")
		}
		else{
			const msg = trnx.createAccount(firstName, lastName)
			res.send(msg)
			//res.send('POST: Create Account Endpoint')
		}
	});

app.route('/fundAcc')
	.get((req, res) => {
		res.send('GET: Fund Account Endpoint')
	})
	.post((req, res) => {
		const accountNo = req.body.accountNo ? req.body.accountNo : ''
		const amount = req.body.amount ? req.body.amount : ''

		if (accountNo==='' || amount ===''){
			res.send("Error: You cannot leave the `accountNo` and `amount` fields blank")
		}
		else{
			const msg = trnx.fundAccount(accountNo, +amount)
			res.send(msg)
		//res.send('POST: Fund Account Endpoint')
		}
	});

app.route('/transferFunds')
	.get((req, res) => {
		res.send('GET: Transfer Funds Endpoint')
	})
	.post((req, res) => {
		const fromAccountNo = req.body.fromAccountNo ? req.body.fromAccountNo : ''
		const toAccountNo = req.body.toAccountNo ? req.body.toAccountNo : ''
		const amount = req.body.amount ? req.body.amount : ''

		if (fromAccountNo==='' || toAccountNo==='' || amount ===''){
			res.send("Error: You cannot leave the `fromAccountNo`, `toAccountNo` and `amount` fields blank")
		}
		else{
			const msg = trnx.transferFunds(fromAccountNo, toAccountNo, +amount)
			res.send(msg)
			//res.send('POST: Transfer Funds Endpoint')
		}
	});
	
app.route('/withdrawFunds')
	.get((req, res) => {
		res.send('GET: Withdraw  Funds Endpoint')
	})
	.post((req, res) => {
		const accountNo = req.body.accountNo ? req.body.accountNo : ''
		const amount = req.body.amount ? req.body.amount : ''

		if (accountNo==='' || amount ===''){
			res.send("Error: You cannot leave the `accountNo` and `amount` fields blank")
		}
		else{
			const msg = trnx.withdrawFunds(accountNo, +amount)
			res.send(msg)
		//res.send('POST: Fund Account Endpoint')
		}
		//res.send('POST: Withdraw Funds Endpoint')
	});

app.route('/allAccounts')
	.get((req, res) => {
		//res.send(accounts.getAllAccountsJSON())
		res.send(accounts.getAllAccounts())
	})
const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`App listening on PORT ${port}`));




