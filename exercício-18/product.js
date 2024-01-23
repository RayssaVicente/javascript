class product {
    constructor(name,description, price, inStock){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantities){
        this.inStock += quantities
    }

    calculateDiscount(porcentagem){
        return this.price *((100 - porcentagem)/ 100)
    }
}

const watch =  new product("Relogio de Pulso", "....", 80)
watch.addToStock(99)
const pricewithDiscount = watch.calculateDiscount(15)

console.log(watch)
console.log(pricewithDiscount)
console.log(watch.calculateDiscount(10))