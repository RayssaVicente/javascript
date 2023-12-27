/*## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.

- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.*/

function novatec (){
    const listaDeDevs = document.getElementById('listaDeDevs')
    const ul = document.createElement('ul')
    
    const linome = document.createElement('li')
    linome.innerText = "Nome da Tecnologia: "
    const inputnome = document.createElement('input')
    inputnome.type = 'text'
 

    linome.appendChild(inputnome)
    ul.appendChild(linome)


    const liradio = document.createElement('li')
    liradio.innerText = "Tempo de Experiência"
    const inputradio = document.createElement('input')
    inputradio.type = 'radio'
    inputradio.id = 'experiencia'
    inputradio.name = 'experiencia'
    inputradio.min = 0
    inputradio.max = 2

    liradio.appendChild(inputradio)
    ul.appendChild(liradio)

    const liradio2 = document.createElement('li')
    const inputradio2 = document.createElement('input')
    inputradio2.type = 'radio'
    inputradio2.id = 'experiencia'
    inputradio2.name = 'experiencia'
    inputradio2.min = 3
    inputradio2.max = 4

    liradio2.

    console.log(ul)
    


}