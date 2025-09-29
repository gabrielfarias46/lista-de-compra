// Cria título
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de Compras';

// Cria container e adiciona ao body
const container = document.createElement('div');
container.id = 'lista-container';
container.appendChild(titulo);

// Cria input de texto
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'Digite um item';
container.appendChild(inputItem);

// Cria botão de adicionar
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
container.appendChild(btnAdd);

// Cria lista
const lista = document.createElement('ul');
container.appendChild(lista);

// Adiciona container ao body
document.body.appendChild(container);

// Função para adicionar item
function adicionarItem() {
    const valor = inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent = valor;
        lista.appendChild(li);
        inputItem.value = '';  // Limpa o campo de entrada
        inputItem.focus();     // Volta o foco para o campo
    }
}

// Evento do botão
btnAdd.addEventListener('click', adicionarItem);

// Evento para tecla Enter no input
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarItem();
    }
});

// Estilos direto no JS
container.style.backgroundColor = '#f9f9f9';  // Cor de fundo
container.style.border = '2px solid #ccc';    // Borda
container.style.borderRadius = '10px';        // Cantos arredondados
container.style.padding = '20px';             // Espaçamento interno
container.style.maxWidth = '400px';           // Largura máxima
container.style.margin = '20px auto';         // Centraliza horizontalmente
container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Sombra