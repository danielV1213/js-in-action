// Declaración y asignación de variables
// Variables para manejar el menú móvil
const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".navbar .menu");
const menuBtnIcon = document.querySelector(".menu-btn i");

// Funciones
// Función para poner o quitar la clase active del menú y de su respectivo icono
function toggleActiveMenu() {
  navbarMenu.classList.toggle("active");
  menuBtnIcon.classList.toggle("active");
}

// Uso del método de JavaScript "addEventListener" que permite ejecutar una función cuando ocurra el evento especificado en el elemento HTML obtenido

// El primer argumento que se le entrega a la función es el evento y el segundo es la función que será ejecutada cuando ocurra di   cho evento
menuBtn.addEventListener("click", toggleActiveMenu);
