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

    findBookByName (bookName){
        return this.#storege.books.find(b => b.name === bookName)
    }

    saveBook(book){
        const bookExists = this.findBooByName(book.name)
        if(!bookExists){
            this.#storege.books.push(book)
        }
    }

    addBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addBooksToStock(quantity)

    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeBooksFromStock(quantity)
    }

    findPosterByName (posterName){
        return this.#storege.posters.find(p => p.name === posterName)
    }

    savePoster(book){
        const PosterExists = this.findPosterByName(poster.name)
        if(!posterExists){
            this.#storege.posters.push(poster)
        }
    }

    addPostersToStock(posterName, quantity){
        const poster = this.findPosterByNamposter(posterName)
        poster?.addBooksToStock(quantity)

    }

    removePostersFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeBooksFromStock(quantity)
    }

    saveUser(user){
        const userExists = this.#storege.users.find(u => u.email === user.email)
        if (!userExists){
            this.#storege.users.push(user)
        }
    }

    saveOrder(order){
        this.#storege.orders.push(order)
    }

    showStorege(){
        console.table(this.#storege.authors)
        console.table(this.#storege.books)
        console.table(this.#storege.posters)
        console.table(this.#storege.users)
        console.table(this.#storege.orders.map(order => order.data))
    }
}