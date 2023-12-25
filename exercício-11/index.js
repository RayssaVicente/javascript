/*Escalação do Time

Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value. */

function adicionarJogador() {
    const listaDeJogadores = document.getElementById('listaDeJogadores')

    const h3 = document.createElement('h3')
    h3.innerText = 'Escalação dos Jogadores'

    const ul = document.createElement('ul')

    const liPosicao = document.createElement('li')
    liPosicao.innerText = "Informe a posição do jogador: "
    const inputPosicao = document.createElement('input')
    inputPosicao.type = 'number'
    inputPosicao.name = 'number'
    inputPosicao.value = 'posicao'

    liPosicao.appendChild(inputPosicao)
    ul.appendChild(liPosicao)
    ul.appendChild(document.createElement('br'))



    const liNome = document.createElement('li')
    liNome.innerText = "Informe o nome do jogador: "
    const inputNome = document.createElement('input')
    inputNome.type = 'text'
    inputNome.name = 'fullname'
    liNome.appendChild(inputNome)
    ul.appendChild(liNome)
    ul.appendChild(document.createElement('br'))

   

    const liCamisa = document.createElement('li')
    liCamisa.innerText = "Informe o número da camisa do jogador: "
    const inputCamisa = document.createElement('input')
    inputCamisa.type = 'number'
    inputCamisa.name = 'number'
    inputCamisa.value = 'camisa'
    liCamisa.appendChild(inputCamisa)
    ul.appendChild(liCamisa)
    ul.appendChild(document.createElement('br'))
    listaDeJogadores.append(h3, ul)

}


/*- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.*/

function removerJogador() {
    const numeroCamisa = prompt("Informar o número da camisa do jogador a ser removido: ")

    const jogador = document.getElementsByName (numeroCamisa)
    numeroCamisa.removeChild(jogador[jogador.length - 1])
}
