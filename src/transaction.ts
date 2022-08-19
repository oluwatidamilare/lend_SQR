import {customer} from './customer'
import accounts from './accounts'

export class transaction {

	createAccount(firstName: string, lastName: string): string {
		let cust = new customer(firstName, lastName)

		if (accounts.addAccount(cust)) {
			return `Account with: AccountNo=${cust.getAccountNo()} created successfully`
		} else {
			return 'Account already exists'
		}
	}

	fundAccount(accountNo: string, amount: number): string {
		console.log(`transaction::fundAccount -> accountNo=${accountNo}`)

		let cust = accounts.findAccount(accountNo);

		if (cust !== null) {
			cust.increaseBalance(amount)

			return `Funded your account successfully. Your Account balance: ${cust.getAccountBalance()}` 
		} else {
			return "No such account exists"
		}
	}
	
	transferFunds(fromAccountNo: string, toAccountNo: string, amount: number): string {
		let custA = accounts.findAccount(fromAccountNo);
		let custB = accounts.findAccount(toAccountNo);

		if (custA !== null && custB !== null) {
			if (custA.getAccountBalance() >= amount) {
				custA.decreaseBalance(amount)
				custB.increaseBalance(amount)
			} else {
				return "Insufficient funds."
			}
		} else {
			return "Both accounts must exist."
		}

		return `Successful funds transfer. Your Account balance: ${custA.getAccountBalance()}`
	}

	withdrawFunds(accountNo: string, amount: number): string {
		let cust = accounts.findAccount(accountNo);

		if (cust !== null) {
			const balance = cust.getAccountBalance()
			if (amount > balance) {
				return `Trying to withdraw more than is available. Your current Account balance: ${balance}`
			} else {
				cust.decreaseBalance(amount)
				return `Money withdrawal was successful. Your Account balance: ${cust.getAccountBalance()}`
			}
		} else {
			return "No such account exists"
		}

	}

}
