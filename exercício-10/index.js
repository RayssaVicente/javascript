// Sistema de Vagas de Emprego

// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// Ter um menu onde é possível escolher entre as diferentes funcionalidades do sistema Listar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever um candidato em uma vagaExcluir uma vagaSair

// Listar vagas disponíveis
// Criar um nova vaga
// Visualizar uma vaga
// Inscrever um candidato em uma vaga
// Excluir uma vaga
// Sair

// A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.

// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

const vagas = []

// A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

function listaVagas (){
   const vagasEmTexto =  vagas.reduce(function(textoFinal, vaga, indice){
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.lenght + "candidatos)\n"
    return textoFinal
   }, "")
    alert(vagasEmTexto)
}


// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.

function novaVaga () {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe um descrição para a vaga:")
    const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga: ")


    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
      )

    if(confirmacao === "sim"){
        const vagaNova = {nome, descricao, dataLimite, candidatos: []}
        listaVagas.push(vagaNova)
        alert("Vaga criada.")
    }
}

// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

function visualizarVaga (){
    const indice = prompt("Informe o indice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n -" + candidato
    }, "")

    alert(
        "Vaga n°" + indice +
        "\nNome: " + vagas.nome +
        "\nDesccrição: " + vagas.descricao + 
        "\nData limite: " + vagas.dataLimite +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}


// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
function inscreverCandidato (){
    const nome = prompt("Qual o seu nome: ")
    const indice = prompt("Qual é o indeice da sua vaga: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vagas.nome + "\nDescrição: " + vagas.descricao + "\nData limite: " + vagas.dataLimite
      )


    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert("Candidato inscrito.")
    }

}

// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

function excluirVaga (){
    const indice = prompt("Qual é o indice da sua vaga: ")
    const vaga =  vagas[indice]

    const confirmacao = confirm("Confirme as infomações para podermos salvá-las\n" + indice + "?\n" +
    "Nome: " + vagas.nome + "\nDescrição: " + vagas.descricao + "\nData limite: " + vagas.dataLimite)

    if (confirmacao){
        vaga.splice(indice, 1)
        alert("Vaga excluida.")
    }
}

function exibirMenu (){
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções!" + 
        "\n1. Listar vagas disponiveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )
    
    return opcao
}

function executar (){
    let opcao = ""

    do{
        opcao = exibirMenu

        switch(opcao){
            case "1":
                listaVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                visualizarVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção Invalida!")
        }



    }while(opcao !== "6")

}

executar()
