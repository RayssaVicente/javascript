const { error } = require("cli")

function validateEmail (email){
     if(!email.match(/(^\w{2,}@[a-zA-Z-0-9 ]{2,}.\w{2,})/)){
        const error = new error ("Email invalido")
        error.input = 'email'
        throw error
     }
}

function validatePassword (password){
    if( password.length < 8 ||
        password[/a-z/] ||
        password[/A-Z/] ||
        password[/0-9/] ||
        password[/a-z-A-Z-0-9/s]){
       const error =  new error ('Senha invalida')
       error.input = 'password'
       throw error
    }
}

