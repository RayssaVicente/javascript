const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Adicionar Elementos no final do array  e devolver o tamanho do array
// - push

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)


// Adicionar um elemento no começo do array e devolver o tamanho do array
// -unshift

tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Removendo Elemento no final do array e devolvendo o elemento removido
// -pop

let elementoRemovido = arr.pop("Boromir")
console.log(arr)
console.log(elementoRemovido)

// Remove um elemento no começo do array e devolve o elemento removido
// -shift

elementoRemovido = arr.shift("Boromir")
console.log(arr)
console.log(elementoRemovido)

// Pesquisando por um elemento: verificar se um certo elemento está presente no array
// -includes

const inclui = arr.includes("Gandalf")
console.log(inclui)

// Pesquisando por um elemento: Encontrara o índice que possui o elemento indicado, ou -1 caso ele não exista no array
// -indexOf

const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortando e concatenando: Copiando uma parte do array e devolvendo a parte copiada sem alterar o array original
// -slice

const hobbits = arr.slice(0, 4)

// Também pode ser usado com números negativos referenciar o final do array

const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
// -concat

const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

// Subistituindo Elementos: Remove elementos em qualquer posição do array e subtitui por novos 
// -splice

const elementoRemovidos = sociedade.splice(indice, 1, "Gendalf, o Cinzento")
console.log(elementoRemovidos)
console.log(sociedade)

// Iterando sobre os elementos: Usando o for para percorrer cada elemento do array

for (let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}