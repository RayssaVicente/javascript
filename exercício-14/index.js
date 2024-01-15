/*Crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de *arrow functions* para calcular as operações abaixo.

Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar uma interface. Para testar a função você pode fazer chamadas manuais a ela no javascript ou utilizar o console do navegador (qualquer função incluída na página pode ser chamada diretamente no console).

Operações:

Média Aritmética Simples
Média Aritmética Ponderada
Mediana
Moda*/

const MediaAritmeticaSimples = (...numbers) => {
    const sum = numbers.reduce((accum, num ) => accum + num, 0 )
    return sum / numbers.length
}

console.log(`Média Aritmética simples: ${MediaAritmeticaSimples(3, 6, 10, 9)}`)


const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
  }
  
  console.log(`Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 },
  )}`)


  const median = (...numbers) => {
    const orderNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderNumbers.length / 2)
    if(orderNumbers.length % 2 !== 0){
      return orderNumbers[middle]
    }
    const firstMedian = orderNumbers[middle - 1]
    const seondMedian = orderNumbers[middle]
    return MediaAritmeticaSimples(firstMedian, seondMedian)
  }

  console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
  console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

  const mode = (...numbers) => {
    const quantities = numbers.map(num => [
      num,
      numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b [1] - a[1])
    return quantities[0][0]
  }

  console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)