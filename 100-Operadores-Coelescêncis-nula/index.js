// const a = 0
// const b = null
// const c = "Teste"

// console.log(a || b || c) // Operador OU

// console.log(a ?? b ?? c) // Operador de Coelescência nula
// console.log(b ?? a)


let a = 0

let b = a || 42

console.log({a, b})

b = a ?? 42

console.log({a, b})

let c = false ?? 42
console.log({c})


