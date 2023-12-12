/*Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.


O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.

O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.


Quantidade de quartos.Quantidade de banheiros.Se possui garagem.

Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos.*/

const imoveis = []
let opcao = ""



do{
    
    opcao =prompt("imóveis cadastrados: " + imoveis.length + "\n1 - Salvar um imovel\n2 - Mostra todos os imoveis\n3 - Sair" )

    switch(opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Qual é o nome do proprietário? ")
           
            imovel.quantidadeQuartos = prompt("Quantos quartos tem o imovel? ")
           
            imovel.quantidadeBanheiros = prompt("quantos banheiros tem o imovel? ")
           
            imovel.garagem = prompt ("O imovel tem garagem: (sim/ não)")
            
            const confirmar = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quantidadeBanheiros +
                "\nBanheiro: " + imovel.quantidadeBanheiros +
                "\nPossui Garagem? " + imovel.garagem
            )

            if(confirmar){
                imoveis.push(imovel)
            }

           break
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel "+ (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quantidadeQuartos +
                    "\nBanheiros: " + imoveis[i].quantidadeBanheiros +
                    "\nPossui Garagem? " + imoveis[i].garagem
                )
            }
            
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção Invalida!")
            break
    }

}while(opcao !== "3"){
    
}
