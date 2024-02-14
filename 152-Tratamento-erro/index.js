function sum (a, b){
    const firstNumber = number(a)
    const secondNumber = number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)){
        throw new Error('arguments must be to numbers')
    }

    return firstNumber + secondNumber
}

try{
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "8"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch(error){
    console.log("An error ocurred!")
    console.log(error.message)
}finally {
    console.log("Calculando finished!")
}
