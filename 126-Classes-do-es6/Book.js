class Book{
    constructor(title){
        this.title = title
        this.published = false
    }

    published(){
        this.published = true
    }
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.published()

console.log(eragon)
console.log(eldest)