 // Pendente - pending
 // Resolvida - resolved
 // Rejeitada - rejected

const { result } = require("lodash")

// const p = new Promise((resolve, reject)=>{
//     console.log('A promise está sendo executada.')
//     setTimeout(()=>{
//         if (true){
//             reject(false)
//         }
//         console.log('Resolvendo a promise...')
//         resolve(true)
//     }, 1000 * 2)
    
// })

// console.log(p)

// setTimeout(()=>{
//     console.log(p)
// }, 1000 * 3)



function execute(){
    return new Promise((resolve, reject)=>{
        console.log('A promise está sendo executada...')
        setTimeout(()=> {
           if(true){
            reject('a promise foi rejeitada')
           }else {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
           }
        }, 1000 * 2)
    })
}

const p = execute()

console.log(p)

setTimeout(()=> {
    console.log(p)
}, 2000)

p.then((result)=>{
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err)=>{
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
})


