function normalSum (a, b){
    return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymounsSum = function (a, b){
    return a + b
}

console.log(`Soma anônima: ${anonymounsSum(2, 6)}`)

const  arrowSum = (a, b)=> {
    return a + b
}

console.log(`Soma arrow function: ${arrowSum(6, 6)}`)

const subtact = (a, b) => a - b

console.log(`Subtração: ${subtact(5, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21
console.log(double(number))


const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffe']
const startingWithP = towns.filter(towns => towns[0] === 'P')
console.log(startingWithP)