// function asyncSum(a, b){
//     return new Promise((resolver, reject)=>{
//         if (typeof a !== 'number' || typeof b !== 'number'){
//             reject('arguments must be of type number')
//         }else {
//             resolver (a + b)
//         }
//     })
// }

// function asyncSubtract(a, b){
//     return new Promise((resolver, reject) =>{
//         if (typeof a !== 'number' || typeof b !== 'number'){
//             reject('arguments must be of type number')
//         }else{
//             resolver(a - b)
//         }
//     })
// }

// const sumResult =  asyncSum(50, 33)
// const subtractResult = asyncSubtract(50, 33)


// Promise.all([sumResult, subtractResult]).then(results => {
//     console.log(results)
// }).catch (err => {
//     console.log(err)
// })

const numbers = [4, 9, 5, 13, 'julia']

function asyncSquare(x){
    return new Promise((resolver, reject)=>{
       if(typeof x !== 'number'){
        reject(false)
       } else {
        resolver (x * x)
       }
    })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
}).catch((err) =>{
    console.log(err)
})