let carrito = [];
let contador = 0;

function actualizarContador() {
  const contadorElemento = document.querySelector("nav li:nth-child(3)");
  contadorElemento.textContent = `Carrito (${contador})`;
}

function mostrarCarrito() {
  const carritoElemento = document.querySelector(".carrito");
  if (carrito.length === 0) {
    carritoElemento.innerHTML = `
      <h3>Carrito</h3>
      <p>Su carrito está vacío</p>
      <button onclick="mostrarCarrito()">Ver carrito</button>
    `;
  } else {
    carritoElemento.innerHTML = `
      <h3>Carrito</h3>
      <ul>
        ${carrito.map(item => `<li>${item}</li>`).join("")}
      </ul>
      <button onclick="mostrarCarrito()">Ver carrito</button>
    `;
  }
}

function agregarAlCarrito(nombreProducto) {
  carrito.push(nombreProducto);
  contador++;
  actualizarContador();
  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".productos .item button");
  const nombres = [
    "Camiseta Street Basic",
    "Jeans Urbanos",
    "Hoodie Urbano",
    "Camiseta Grafiti"
  ];

  botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      agregarAlCarrito(nombres[index]);
    });
  });

  mostrarCarrito();
});
