const book = {
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantasy", "adventure", "medieval"],
    autor:{
        name: "Christopher Paolini"
    },
    addOnStock(quantity){
        this.inStock += quantity
    },

}
//função construtora

console.log(book)
book.addOnStock(50)

book.save = function(){
      // salva no banco de dados
}
console.log(book)