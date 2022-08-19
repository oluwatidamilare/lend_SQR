function gen_acc_no(): string {
	let d = new Date().getTime()
	return `${d}`.substring(3)	
}

export class customer {
	private accountNo: string;
	private balance: number;
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.accountNo = gen_acc_no()
		this.balance = 0.0;
	}
	
	getAccountNo(): string {
		return this.accountNo;
	}
	getName(): string {
		return this.firstName + ' ' + this.lastName;
	}
	getAccountBalance(): number {
		return this.balance;
	}
	setAccountBalance(newBalance: number) {
		this.balance = newBalance;
	}
	increaseBalance(amount: number) {
		this.balance += amount;
	}
	decreaseBalance(amount: number) {
		this.balance -= amount;

	}
}
