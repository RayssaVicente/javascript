const post = require("./post")

class author {
    constructor(name){
        this.name = name
        this.posts = []
    }

    writePost(title, body){
        const post = new post(title, body, this)
        this.posts.push(post)
        return post
    }
}

module.exportes = author