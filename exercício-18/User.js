class User {
    constructor(fullname, email, passoword){
        this.fullname = fullname
        this.email = email 
        this.passoword = passoword
    }

    login(email, passoword){
        if(this.email === email && this.passoword === passoword){
            console.log("Login realizado com sucesso!")
        }else{
            console.log("Falha ao fazer login! Email ou senha incorretos. ")
        }
    }
}

const jonh = new User("Jonh Doe", "jonh@email.com","1234")

jonh.login("jonh@email.com", "1234")