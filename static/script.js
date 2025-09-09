document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
 
    if (menuToggle && navLinks) {
        // Função para fechar o menu
        const closeMenu = () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        };
 
        // Abrir/fechar o menu ao clicar no ícone de hambúrguer
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique se propague e feche o menu
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
 
        // Fechar o menu ao clicar num dos links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
 
        // Fechar o menu ao clicar em qualquer lugar fora dele
        document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                closeMenu();
            }
        });
    }
});