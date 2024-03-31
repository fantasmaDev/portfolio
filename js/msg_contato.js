// Criando a variável que contém a mensagem exibida ao usuário
let mensagem = "[INFORMAÇÃO FICTÍCIA]"

// Capturando os elementos da página pertinentes ao funcionamento da mesma
let campo_telefone = document.getElementById("cont_telefone");
let msg_telefone = document.getElementById("txt_tel");

let campo_email = document.getElementById("cont_email");
let msg_email = document.getElementById("txt_email");

// Adicionando os elementos de campo em um Array
let lista_campos = [campo_telefone, campo_email];

// Iterando sobre o array com 'forEach', permitindo gerar a função mais facilmente
lista_campos.forEach(campo => {

    campo.addEventListener('mouseover', function() {

        if (campo == campo_telefone) {

            msg_telefone.innerHTML = mensagem;

        }

        else if (campo == campo_email) {
            msg_email.innerHTML = mensagem;
        }

    })

    campo.addEventListener('mouseout', function() {
        msg_telefone.innerHTML = "";
        msg_email.innerHTML = "";
    })

})