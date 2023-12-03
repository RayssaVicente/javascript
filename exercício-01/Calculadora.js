const entrada1 = prompt("Digite um número:")
const entrada2 = prompt("Digite um segundo número:")


const x = parseFloat(entrada1)
const y = parseFloat(entrada2)


const soma = x + y
const subtracao = x - y
const divisao = x /y
const multiplicacao = x * y

alert(
    "Resultados:" +
    "\nSoma:" + soma +
    "\nSubtração" + subtracao +
    "\nDivisão" + divisao +
    "\nMultiplicação" + multiplicacao 
)
