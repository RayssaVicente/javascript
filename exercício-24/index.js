// Escreva uma função assíncrona que têm como parâmetros o peso e a altura de uma pessoa e retorna uma promise do IMC dessa pessoa. Além disso, caso algum dos parâmetros não seja do tipo “number” a promise deverá ser rejeitada.

// Você deverá criar também uma outra função que recebe os mesmos parâmetros de peso e altura, chama a função que calcula o IMC e então exibe no terminal o resultado das promises em texto. Caso a promise seja resolvida você também deverá mostrar no terminal a situação do IMC da pessoa de acordo com a seguinte tabela:

// - Abaixo de 18,5: **magreza**
// - Entre 18,5 e 24,9: **normal**
// - Entre 25 e 29,9: **sobrepeso**
// - Entre 30 e 39,9: **obesidade**
// - Acima de 40: **obesidade grave**

// Dentro da segunda função, após chamar a função que calcula o IMC, chame a função log do console com uma mensagem qualquer para evidenciar o funcionamento assíncrono do código.


function imc (weight, height){
    return new Promise ((resolver, reject) =>{
        if(typeof weight !== 'number' || typeof height !== 'number'){
            reject('arguments must be of type number')
        } else{
            resolver(weight / (height * height))
        }
    })
}

function showImc(weight, height){
    imc(weight, height).then((result) =>{
        console.log(`O resultado de IMC foi de ${result}`)

        if(result < 18.5) console.log('Situação: MAGRESA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBSIDADE GRAVE')
    }).catch((err) =>{
        console.log(err)
    })

    console.log(`Calcualdo o IMC para peso ${weight} e altura ${height}...`)
}

showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, 'texto')
showImc(82, 1.72)
showImc(120, 1.80)