// cria título
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de Compras';
document.body.appendChild(titulo); // Corrigido 'title' para 'titulo'

// cria input de texto
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'Digite um item';
document.body.appendChild(inputItem); // Corrigido 'btnadd' para 'inputItem'

// cria botão de adicionar
const btnadd = document.createElement('button');
btnadd.textContent = 'Adicionar';
document.body.appendChild(btnadd);

// cria lista 
const lista = document.createElement('ul');
document.body.appendChild(lista);

// função para adicionar item
function adicionarItem() {
    const valor = inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent = valor;
        lista.appendChild(li);
        inputItem.value = '';
        inputItem.focus(); // volta o foco para o campo
    }
}

// evento do botão
btnadd.addEventListener('click', adicionarItem);

// evento para tecla Enter no input
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarItem();
    }
});