/*Crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de *arrow functions* para calcular as operações abaixo.

Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar uma interface. Para testar a função você pode fazer chamadas manuais a ela no javascript ou utilizar o console do navegador (qualquer função incluída na página pode ser chamada diretamente no console).

Operações:

Média Aritmética Simples
Média Aritmética Ponderada
Mediana
Moda*/



function mediaAritimetica (...number){
    const sum = number.reduce((accum, num) => accum + num, 0) 
    return sum / number.length
}

console.log(mediaAritimetica(2, 6, 3, 7, 4))
