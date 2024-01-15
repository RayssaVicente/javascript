/*### Modularizando uma Aplicação

Para esse exercício você irá utilizar o código do projeto **Calc.js**, desenvolvido nas aulas Projeto Prático Guiado do módulo anterior, **Javascript II - DOM**. Você deverá modularizar o código javascript da aplicação, dividindo o conteúdo do arquivo index.js em diferentes módulos utilizando a sintaxe dos ES Modules. Seu projeto deve conter **pelo menos 3 módulos**.

Caso você não tenha os arquivos do projeto Calc.js você poderá baixá-los na aba de materiais dessa aula.*/

import calculando from "./calculando.js"
import copyToClipboard from "./copyToClipboard.js"
import { heandleButtonPress, heandleClearButton, heandletype } from "./keysHandlers.js"
import themeSwitcher from "./themeSwitcher.js"


document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
    charKeyBtn.addEventListener("click", heandleButtonPress)
})


document.getElementById('clear').addEventListener('click', heandleClearButton)
document.getElementById('input').addEventListener('keydown', heandletype)
document.getElementById('equal').addEventListener('click', calculando)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)

