import {customer} from './customer'

export default class accounts {
	private static record: customer[] = []

	static addAccount(newAcc: customer): boolean {
		let oldAcc = this.findAccount(newAcc.getAccountNo())
		if (oldAcc === null) {
			this.record.push(newAcc)
			return true
		}
		return false
	}

	static getAllAccounts(): customer[] {
		return this.record
	}

	static findAccount(accountNo: string): customer | null {
		for (let idx in this.record) {	
			let cust = this.record[idx]
		
			console.log(`accounts::findAccount -> oldAccNo=${cust.getAccountNo()} newAccNo=${accountNo}`)

			if (cust.getAccountNo() === accountNo) {
				return cust
			}
		}
		return null
	}
}
