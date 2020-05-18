class BankAccount {
    constructor (balance, interestRate) {
    this.balance = balance;
    this.interestRate = interestRate;
    }
    addInterest() {
        let newBalance = this.balance * this.interestRate; {
        return newBalance + this.balance;
        }
    }
}

const aliceAccount = new BankAccount(5000, 0.05);

console.log(aliceAccount.addInterest());

class BankAccountWithFee extends BankAccount {
    constructor (balance, interestRate, fee) {
    super(balance, interestRate);
    this.fee = fee;
    }
    applyFee() {
        return this.balance - this.fee;
    }
}

const aliceAccount2 = new BankAccountWithFee(500, 0.01, 10)

console.log(aliceAccount2.applyFee());
console.log(aliceAccount2.addInterest());