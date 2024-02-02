const Database = require("./Database")
const Author = require("./classes/Author")
const User = require("./classes/User")

module.exports =  class App {
    static #database = new Database()

    creatUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers(){
        App.#database.find('users')
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthor(){
        return App.#database.find('authors')
    }
}