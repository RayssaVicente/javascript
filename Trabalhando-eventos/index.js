function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTargent.parentNode
    
    const username = sectionElement.children.username.value
    const passoword = sectionElement.chidren.passoword.value
    const passwordConfirmation = sectionElement.chidren.passwordconfirmatio.value

    if(passoword === passwordConfirmation) {
        alert("Usuário" + username + " registrado")
    } else{
        alert("As senhas não conferem!")
    }

}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

button.addEventListener("mouseover", function(ev){
    console.log(ev)
})