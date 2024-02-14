function sum (a, b){
    const firstNumber = number(a)
    const secondNumber = number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)){
        throw new Error('arguments must be to numbers')
    }

    return firstNumber + secondNumber
}

console.log(sum(2, 9))
console.log(sum(true, 14))
console.log(sum(undefined, 22))
