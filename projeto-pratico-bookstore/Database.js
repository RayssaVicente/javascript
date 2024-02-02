module.exports = class Database {
    #storege = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key){
        return this.#storege(key)
    }

    saveAuthor(author){
        this.#storege.authors.push(author)
    }

    findBooByName (bookName){
        return this.#storege.books.find(b => b.name === bookName)
    }

    saveBook(book){
        const bookExists = this.findBooByName(book.name)
        if(bookExists){
            this.#storege.books.push(book)
        }
    }

    addBooksToStock(bookName, quantity){
        const book = this.findBooByName(bookName)
        book?.addBooksToStock(quantity)

    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBooByName(bookName)
        book?.removeBooksFromStock(quantity)
    }
}