/*### Modularizando uma Aplicação

Para esse exercício você irá utilizar o código do projeto **Calc.js**, desenvolvido nas aulas Projeto Prático Guiado do módulo anterior, **Javascript II - DOM**. Você deverá modularizar o código javascript da aplicação, dividindo o conteúdo do arquivo index.js em diferentes módulos utilizando a sintaxe dos ES Modules. Seu projeto deve conter **pelo menos 3 módulos**.

Caso você não tenha os arquivos do projeto Calc.js você poderá baixá-los na aba de materiais dessa aula.*/

import calculando from "./calculando.js"
import copyToClipboard from "./copyToClipboard.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
    charKeyBtn.addEventListener("click", function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function(){
    input.value = ""
    input.focus()
})

input.addEventListener('keydown', function(ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    if (ev.key === 'Enter'){
        calculando()
    }
})

document.getElementById('equal').addEventListener('click', calculando)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)

