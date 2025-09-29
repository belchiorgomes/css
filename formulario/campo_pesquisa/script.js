// Obtém referências para os elementos do DOM
const searchInput = document.getElementById('search');
const optionsList = document.querySelector('.options');
const listItems = optionsList.querySelectorAll('li');
const selectText = document.querySelector('.container .select .text');
const checkbox = document.getElementById('select');

// 1. Lógica de Pesquisa e Destaque em Tempo Real
searchInput.addEventListener('keyup', () => {
    // Obtém o valor de pesquisa em minúsculas e remove espaços extras
    const searchTerm = searchInput.value.toLowerCase().trim();

    listItems.forEach(item => {
        // Obtém o texto do item em minúsculas
        const itemText = item.textContent.toLowerCase();
        
        // Verifica se o texto do item contém o termo de pesquisa
        if (itemText.includes(searchTerm)) {
            // Se o item corresponder, ele é exibido
            item.style.display = 'block';

            // Lógica para destacar a correspondência
            if (searchTerm.length > 0) {
                // Encontra o índice da primeira ocorrência
                const index = itemText.indexOf(searchTerm);
                
                // Constrói o HTML com a parte que corresponde envolvida por <span>
                const highlightedHtml = item.textContent.substring(0, index) +
                                        `<span class="highlight">${item.textContent.substring(index, index + searchTerm.length)}</span>` +
                                        item.textContent.substring(index + searchTerm.length);

                item.innerHTML = highlightedHtml;
            } else {
                // Se a busca estiver vazia, remove qualquer destaque, voltando ao texto original
                item.innerHTML = item.textContent; 
            }
        } else {
            // Se o item não corresponder, ele é escondido
            item.style.display = 'none';
        }
    });
});

// 2. Lógica de Seleção de Item (clicar no LI)
listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Atualiza o texto principal com o item selecionado
        selectText.textContent = item.textContent;
        
        // Fecha a caixa (desmarca o checkbox)
        checkbox.checked = false;
        
        // Limpa a barra de pesquisa
        searchInput.value = '';
        
        // Restaura a exibição e texto de todos os itens (como se tivesse apagado a busca)
        listItems.forEach(li => {
            li.style.display = 'block';
            li.innerHTML = li.textContent; // Garante que o destaque seja removido
        });
    });
});