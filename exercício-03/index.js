/*Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. 

O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)*/

const metros =parseFloat(prompt("digite um valor em metros: "))
const conversao =prompt("Para qual unidade de medida deseja converter?" +
  "\n1 - milímetros (mm)" +
  "\n2 - centímetros (cm)" +
  "\n3 - decímetros (dm)" +
  "\n4 - decâmetros (dam)" +
  "\n5 - hectômetro (hm)" +
  "\n6 - quilômetro (km)")

switch(conversao){
    case "1":
        alert(metros + "convertido para milímetro fica" + metros * 1000 )
        break
    case "2":
        alert(metros + "convertido para centímetros fica" + metros *100) 
        break
    case "3":
        alert(metros + "convertido para decímetro fica" + metros * 10)
        break
    case "4":
        alert(metros + "convertido para decâmetro fica" + metros * 0.1)
        break
    case "5":
        alert(metros + "convertido para hectômetro fica" + metros *0.01)
        break
    case "6":
        alert(metros + "convertido para quilômetro fica" + metros *0.001 )
        break
    default:
        alert("Opção inválida")
}