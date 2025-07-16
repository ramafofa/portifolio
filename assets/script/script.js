document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const container = document.getElementById('projetos-scroll');
const esquerda = document.querySelector('.seta.esquerda');
const direita = document.querySelector('.seta.direita');

esquerda.addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});

direita.addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
});

