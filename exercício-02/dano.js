/*Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.

Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.

Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.*/


const ataque =prompt("Qual é o nome do personagem atacante? ")
const poderDeAtaque =parseFloat(prompt("Qual é o poder de ataque?"))

const defensor =prompt("Qual o nome do personagem defensor? ")
let pontosDeVida =parseFloat(prompt("Qual a sua quantidade de pontos de vida?"))
const poderDeDefesa =parseFloat(prompt("Qual o seu poder de defesa?"))
const escudo =prompt("Você possiu escudo? (sim,não) ")

let danoCausado = 0 

if (poderDeAtaque > poderDeDefesa && escudo === "não"){
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo === ("sim")){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(ataque + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  ataque + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)




