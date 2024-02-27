console.log("Programa Iniciado")

//  const timeoutId = setTimeout(() =>{
//     console.log("3 segundos se passaram desde que o progrma foi iniciado.")
// }, 1000 * 3)

// clearTimeout(timeoutId)

let seconds = 0
const intervalId = setInterval(() =>{
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if(seconds > 10){
        clearInterval(intervalId)
        console.log("Tempo esgotado! Encerrando...")
    }
}, 1000 * 3)