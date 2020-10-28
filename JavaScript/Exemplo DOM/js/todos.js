var listarElemento = document.querySelector('#app ul')//buscando o id app ul em index.html
var adicionarElemento = document.querySelector('#app input');//buscando o input
var BotaoElemento = document.querySelector('#app button');//buscando o botão

var elementos = [
    
];

//Jogar todos os elementos da lista dentro da <li>
function renderElementos(){
    listarElemento.innerHTML='';//Remove todo conteudo dentro do listar elementos
    
    for (todo of elementos){//Percorre a lista de elementos
        var todoElementos = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElemento = document.createElement('a');//Criar elemento <a> 
        linkElemento.setAttribute('href', '#');//Atribuir um href para o elemento criado

        var pos = elementos.indexOf(todo);//Procura no array de elementos o indice de cada um
        linkElemento.setAttribute('onclick', 'deleteTodo('+ pos +')');//Adiciona a função ao link passando a posição por parametro

        var linkTexto = document.createTextNode('\nExcluir');//Texto do elemento  

        //Adicionar elementos
        linkElemento.appendChild(linkTexto);
        todoElementos.appendChild(todoText);
        todoElementos.appendChild(linkElemento);
        listarElemento.appendChild(todoElementos);
      

        
    }
}

renderElementos();

//Adicionar elemento na lista
function adicionarTodo(){
    var todoText = adicionarElemento.value;//Pega o elemento digitado no input
    elementos.push(todoText);//Passa ele por parametro para a lista de elementos
    adicionarElemento.value = '';//Limpa o campo input
    renderElementos();//Atualiza a lista com o novo elemento

}

function deleteTodo(pos){
    elementos.splice(pos, 1); //Remover 1 item da posição recebida no parametro
    renderElementos();
}

BotaoElemento.onclick = adicionarTodo;//chamar a função ao clicar no botão