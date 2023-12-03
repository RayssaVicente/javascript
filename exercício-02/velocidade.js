// Teste de Velocidade

// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)


const nome =prompt("Nome do primeiro veiculo:")
const v =parseFloat(prompt("Velocidade do primeiro veiculo:"))
const nome2 =prompt("Nome do segundo veiculo:")
const v2 =parseFloat(prompt("Velocidade do segundo veiculo:"))

if (v > v2){
    alert(nome + "" +"é mais rapido do que" + "" + nome2)
}else if (v2 > v){
    alert(nome2 + "é mais rapido do que" + "" + nome)
}else{
    alert(nome + "e" + nome2 +""+ "possuem velocidades iguais")
}
   



