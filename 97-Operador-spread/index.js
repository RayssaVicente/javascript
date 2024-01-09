const tows = ['Protera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Juno']

console.log(tows)
console.log(...tows)
console.log(...tows[0]) // conole.log(P, r, o, n, t, e, r, a)

const towsCopy = tows

towsCopy.pop()
towsCopy.pop()
tows.push('Marcher')

console.log({tows, towsCopy})

const towsClone = [...tows]
towsClone.push('Aldebaran')
console.log({tows, towsCopy, towsClone})

const townsObjs = {...tows}
const townsObjsClone = {...townsObjs}

townsObjsClone.test = "Test"

console.log({townsObjs, townsObjsClone})
