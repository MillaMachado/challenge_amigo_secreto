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

// função adicionar amigos
function adicionarAmigo(){
    //obtem o valor do campo texto
    let nome = document.getElementById("amigo").value;
    console.log(nome);
    //valida se o campo texto está vazio
    if(nome == ""){
        //exibe um alerta
        alert("Por favor, insira um nome.");
    }
    else{
        //adiciona o nome na lista de amigos
        amigos.push(nome);
        //limpa o campo nome
        nome = "";
        console.log(amigos);
        console.log(nome);
   }
}
