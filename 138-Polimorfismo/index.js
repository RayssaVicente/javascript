class Vehicle {
    move(){
        console.log("O veículo está se movendo")
    }
}

class Car extends Vehicle{
    move(){
        console.log("O carro está se movendo.")
    }
}

class Shipe extends Vehicle {
    move(){
        console.log("O navio está navegando.")
    }
}

class Aircraft extends Vehicle{
    move(speed){
        console.log(`A aeronave está voando a ${speed} Km/h`)
    }
}

const delorean = new Car()
const blackPearl = new Shipe()
const epoh = new Aircraft()

// delorean.move()
// blackPearl.move()
// epoh.move(80)

function start(Vehicle){
    console.log("Iniciando um veículo...")
    Vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoh)