// Obtén todos los enlaces del menú
const menuLinks = document.querySelectorAll('.navigation a');

// Añade un controlador de eventos de clic a cada enlace
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        // Obtén el menú hamburguesa
        const menu = document.querySelector('.navigation');

        // Cambia la clase del menú para ocultarlo
        menu.classList.remove('show');

        // Obtén el botón del menú hamburguesa
        const menuBtn = document.querySelector('.menu-btn');

        // Cambia la clase del botón del menú para volver a su estado original
        menuBtn.classList.remove('open');
    });
}