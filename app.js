//O principal objetivo deste desafio é fortalecer suas habilidades em 
// lógica de programação. Aqui você deverá desenvolver a lógica para 
// resolver o problema.

/*
Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo 
de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

Validar entrada: Se o campo de texto estiver vazio, o programa exibirá 
um alerta solicitando um nome válido.

Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo 
do campo de entrada.

Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da 
lista será selecionado aleatoriamente e exibido na página.
*/

// criando lista de amigos
let amigos = [];

function adicionarAmigo(){
    // obtem o valor do campo texto do HTML
    let nome = document.getElementById("amigo").value;

    // valida se o campo texto está vazio
    if(nome == ""){
        // exibe um alerta
        alert("Por favor, insira um nome.");
    }
    else{
        // adiciona o nome na lista de amigos
        amigos.push(nome);
        // limpa o campo nome
        document.getElementById("amigo").value = "";
        // chama a função atualizarAmigos passando a lista amigos por parâmetro
        atualizaAmigos(amigos);
   }
}

function atualizaAmigos(amigos){
    // obtem o elemento da lista no HTML
    let lista = document.getElementById("listaAmigos");
    // limpa a lista existente de nomes
    lista.innerHTML = "";
    // loop for para pecorrer o array amigos e criar elementos de lista
    for (let i = 0; i < amigos.length; i++){
        // cria o elemento li
        let li = document.createElement("li");
        // atribui o nome da lista amigos ao elemento li
        li.appendChild(document.createTextNode(amigos[i]));
        // atribui o elemento li a lista ul
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    // valida se a lista de amigos está vazia
    if(amigos == ""){
        // exibe um alerta avisando que a lista esta vazia
        alert("A lista esta vazia. Por favor, insira um nome.");
    }
    // caso a lista não esteja vazia
    else{
        // gera um índice com o tamanho máximo de elementos
        let indice = Math.floor(Math.random() * amigos.length);
        // obtem o elemento resultado do HTML
        let resultado = document.getElementById("resultado");
        // obtem o elemento da lista no HTML
        lista = document.getElementById("listaAmigos");
        // limpa a lista existente de nomes
        lista.innerHTML = "";
        // atribui o nome da lista de amigos pelo índice escolhido aleatoriamente ao elemento ul do HTML
        resultado.innerHTML = "O amigo secreto sorteado é: " + amigos[indice];
    }
}

