// Inicialize a biblioteca AOS (Animate On Scroll)
AOS.init();

// Função para rolar para o topo da página
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Adiciona eventos aos botões das redes sociais para abrir os links
document.querySelectorAll('.social-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const href = button.getAttribute('href');
        if (href) {
            window.open(href, '_blank'); // Abre o link em uma nova aba
        }
    });
});

// Alternar entre o modo claro e escuro ao pressionar a tecla 'T'
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyT') { // Verifica se a tecla pressionada é 'T'
        document.body.classList.toggle('dark-mode'); // Alterna a classe 'dark-mode'
    }
});

// Menu responsivo
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});
