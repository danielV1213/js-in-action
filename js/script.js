// Variables y Tipos de datos primitivos (Number, String, Undefined, Null y Boolean)
// let
let number = 8;
let anotherNumber = 8.5;
let str = "JavaScript en Acción";
let und;
let nulo = null;
let booleano = false;

// Reasignación
// str = 'JavaScript'
// console.log(typeof number);

// const
const nombre = "Daniel";

// No reasignación
// nombre = 'José'
// console.log(nombre);

// Funciones básicas (declarativas)
// Estructura: palabra reservada function + nombre de la función + parámetros + retorno
function saludar() {
  const saludo = "Buenas noches";
  return saludo + " " + nombre;
}

// console.log(saludar());

// Estructuras de datos básicas (Array, Object)
// Arreglos
const arregloProductos = ["zapatos", "camiseta", "reloj"];
// Objetos
const zapatos = {
  marca: "Shoes",
  talla: 40,
  color: "#000",
};

const camiseta = {
  marca: "T-Shirt",
  talla: "M",
  color: "#FFF",
};

const reloj = {
  marca: "Watch",
  talla: 18,
  color: "#FFD700",
};

// arregloProductos = [zapatos, camiseta, reloj];

// console.log(arregloProductos);

// Manipulación del DOM

// Declaración y asignación de variables
// Constantes para manejar el menú móvil
const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".menu");
const menuBtnIcon = document.querySelector("#menu-btn-icon");

// Constantes para manejar el carrito de compras
const cartOpenBtn = document.querySelector(".shopping-cart-open-btn");
const cartCloseBtn = document.querySelector(".shopping-cart-close-btn");
const cartOverlay = document.querySelector(".overlay");
const cart = document.querySelector(".shopping-cart");

// Funciones

// Función para poner o quitar la clase active del menú y de su respectivo icono
function toggleActiveMenu() {
  navbarMenu.classList.toggle("active");
  menuBtnIcon.classList.toggle("active");
}

// Función para mostrar o quitar el carrito de compras y su fondo (overlay)
function toggleCart() {
  cartOverlay.classList.toggle("show-cart");
  cart.classList.toggle("show-cart");
}

// Uso del método de JavaScript "addEventListener" que permite ejecutar una función cuando ocurra el evento especificado en el elemento HTML obtenido
// El primer argumento que se le entrega a la función es el evento y el segundo es la función que será ejecutada cuando ocurra di   cho evento

// addEventListener para abrir o cerrar el menú responsive
menuBtn.addEventListener("click", toggleActiveMenu);

// addEventListener para abrir o cerrar el carrito de compras
cartOpenBtn.addEventListener("click", toggleCart);
cartCloseBtn.addEventListener("click", toggleCart);
