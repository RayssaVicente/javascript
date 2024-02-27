const { error } = require("cli")

function validateEmail (email){
     if(!email.match(/\w{2,}@[a-zA-Z]{2,}.[a-zA-Z]{2,}/)){
        const err = new err ("Email invalido")
        err.input = 'email'
        throw err
     }
}

function resetFormStyles(){
    Object.entries(userInputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#$(key).error`).textContent = ""
    }) 

    
}

const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) =>{
    ev.preventDefault

    try{
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
    } catch (err){
        userInputs[err.input].classList.add('error')
        document.querySelector(`#$(err.input).error`).textContent = err.mensage
    }
})

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

