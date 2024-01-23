const comment = require('./comment')

class post {
    constructor(title,body, author){
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createAt = new Date()
    }

    addComment(username, content){
        this.comments.push(new this.comment(username, content))
    }
}

module.exports = post