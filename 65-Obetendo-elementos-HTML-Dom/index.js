function show(){
    // Obter um elemento único a partir do seu id 
    const contactList = document.getElementById("contact-list")
    console.log(contactList)
}

function show(){
    //obter vários elementos (HTMLCollection) a partir de uma classe
    const contactInputs = document.getElementsByClassName("contact-inputs")
    console.log(contactInputs)
}

function show(){
    //Obter vários elementos (NodeList) a partir do atributo name
    const contact1 = document.getElementsByName("contact1")
    console.log(contact1)
}

function show(){
    //Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do css)
    const contacts = document.querySelectorAlll("#contact-list > li > label")
}

function show (){
    //Obter um elemento a partir de uma query (O primeiro elemento a corresponder)
    const  contact = document.querySelector("#conatct-list > li > label")
    // console.log(contact)
}