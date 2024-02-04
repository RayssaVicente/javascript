const Database = require("./Database")
const Author = require("./classes/Author")
const Book = require("./classes/Book")
const Order = require("./classes/Order")
const Poster = require("./classes/Poster")
const User = require("./classes/User")

module.exports =  class App {
    static #database = new Database()

    creatUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers(){
         return App.#database.find('users')
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors(){
        return App.#database.find('authors')
    }

    createBook(title, synopie, genre, pages, author, description, price, inStock){
        const book = new Book (title, synopie, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantity){
        App.#database.addBooksToStock(bookName, quantity)
    }

    getBooks(){
        return App.#database.find('books')
    }

    createPoster(name,  width, hight, description, price, inStock){
        const poster = new Poster (name, width, hight , description, price, inStock)
        App.#database.saveBook(poster)
    }

    addPoster(posterName, quantity){
        App.#database.addPostersToStock(posterName, quantity)
    }

    getPosters(){
        return App.#database.find('posters')
    }

    createOrdder(items, user){
        const order = new Order (items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({product, quantity}) => {
            if (product instanceof Book){
                App.#database.removeBooksFromStock(product.name, quantity)
            }else if (product instanceof Poster){
                App.#database.removeBooksFromStock(product.name, quantity)
            }
        })
    }

    getOrders(){
        return App.#database.find('orders')
    }

    showDatabase(){
        App.#database.showStorege()
    }
}