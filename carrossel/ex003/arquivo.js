// Seleciona o container que envolve todos os slides
const carrossel = document.querySelector('.header-carrossel');
// Seleciona cada slide individualmente
const slides = document.querySelectorAll('.carrossel');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let index = 0;

function moverCarrossel() {
    // Como seu container tem width: 300vw, cada slide ocupa 1/3 disso.
    // O pulo deve ser de 100vw por slide.
    carrossel.style.transform = `translateX(-${index * 100}vw)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    // Se passar do último slide, volta para o primeiro
    if (index >= slides.length) {
        index = 0;
    }
    moverCarrossel();
});

prevBtn.addEventListener('click', () => {
    index--;
    // Se estiver no primeiro e voltar, vai para o último
    if (index < 0) {
        index = slides.length - 1;
    }
    moverCarrossel();
});