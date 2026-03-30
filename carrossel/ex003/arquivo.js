const container = document.querySelector('.header-carrossel');
const slides = document.querySelectorAll('.carrossel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
let autoSlide;

function atualizarCarrossel() {
    // Lógica de loop
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    // Move o container. 
    // Como cada slide tem 100% da largura do container, 
    // deslocamos 100% * o número do índice.
    container.style.transform = `translateX(-${index * 100}%)`;
}

// Funções para os botões
nextBtn.addEventListener('click', () => {
    index++;
    atualizarCarrossel();
    reiniciarAutoPlay(); // Opcional: reseta o timer quando o usuário clica
});

prevBtn.addEventListener('click', () => {
    index--;
    atualizarCarrossel();
    reiniciarAutoPlay();
});

// Timer Automático
function iniciarAutoPlay() {
    autoSlide = setInterval(() => {
        index++;
        atualizarCarrossel();
    }, 5000);
}

function reiniciarAutoPlay() {
    clearInterval(autoSlide);
    iniciarAutoPlay();
}

iniciarAutoPlay();