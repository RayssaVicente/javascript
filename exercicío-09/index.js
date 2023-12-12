/*Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 

O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 

O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.*/


function areaTriangulo(){
    const base = parseFloat(prompt("Qual é a base do triangulo: "))
    const altura = parseFloat(prompt("Qual é a altura do triangulo: "))
    return base * altura / 2
}

function arearetangulo(){
    const base = parseFloat(prompt("Qual é a base do retangulo: "))
    const altura = parseFloat(prompt("Qual é a altura do retangulo: "))
    return base * altura
}

function areaQuadrado(){
    const lado = parseFloat(prompt("Qual é o lado do quadrado: "))
    return lado * lado
}

function areaTrapezio(){
    const baseMaior = parseFloat(prompt("Qual o tamanho da base maior do trapezio: "))
    const baseMenor = parseFloat(prompt("Qual o tamanho da base menor do trapezio: "))
    const altura = parseFloat(prompt("Qual a altura do trapezio: "))
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(){
    const raio = parseFloat(prompt("Qual o tamnho do raio do circulo: "))
    const pi = parseFloat(3.14)
    return pi * (raio*raio)
}

function exibirMenu (){
    return prompt(
        "Calculadora Geometrica\n" + 
        "\n1. Área do Triangulo" +
        "\n2. Área do Retangulo" +
        "\n3. Área do Quadrado" +
        "\n4. Área do Trapezio" +
        "\n5. Área do Circulo" +
        "\n6. Sair"
    )
}

function executar (){
    let opcao = ""

    do{

        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = areaTriangulo()
                break;
            case "2":
                resultado = arearetangulo()
                break
            case "3":
                resultado = areaQuadrado()
                break
            case "4":
                resultado = areaTrapezio()
                break
            case "5":
                resultado = areaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção invalida!")
                break;
        }
    
        if(resultado){
            alert("Resultado: " + resultado)
        }

    }while(opcao !== "6");
}

executar()