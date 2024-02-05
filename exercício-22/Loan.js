const Installment = require("./installment")

module.exports = class  Loan {
    static #fee = 1.05

    constructor(value, installment){
        this.value = value
        this.installment = []
        for (let i = 1; i <= installment; i++){
            this.installment.push(new Installment(value * Loan.#fee) / installment, i)
        }
        this.createdAt  = new Date()
    }


    static get fee(){
        return Loan.#fee
    }

    static set fee(newFeePercentage){
        Loan.#fee = 1  + (newFeePercentage /  100)
    }
}