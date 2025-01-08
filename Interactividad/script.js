document.addEventListener("DOMContentLoaded", function() {
  // Verifica si el mensaje emergente ya ha sido mostrado en esta sesión
  if (!sessionStorage.getItem('mensajeMostrado')) {
    // Alerta de bienvenida al cargar la página
    alert("¡Bienvenido a mi portafolio!");

    // Marca el mensaje como mostrado para esta sesión
    sessionStorage.setItem('mensajeMostrado', 'true');
  }

  // Función para cambiar el color del fondo cuando se pasa el mouse por el menú
  const menuItems = document.querySelectorAll("nav ul li a");
  menuItems.forEach(item => {
    item.addEventListener("mouseover", function() {
      item.style.backgroundColor = "#575757";
    });
    item.addEventListener("mouseout", function() {
      item.style.backgroundColor = "";
    });
  });

  // Validación de formulario de contacto
  const formularioContacto = document.querySelector("#formulario-contacto");
  if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(event) {
      const nombre = document.querySelector("#nombre");
      const correo = document.querySelector("#correo");
      const mensaje = document.querySelector("#mensaje");

      if (!nombre.value || !correo.value || !mensaje.value) {
        event.preventDefault(); // Evita el envío si falta información
        alert("Por favor, completa todos los campos del formulario.");
      } else {
        alert("¡Formulario enviado con éxito!");
      }
    });
  }

  // Animación en la sección de experiencia al hacer scroll
  const experienciaSection = document.querySelector("#experiencia");
  if (experienciaSection) {
    window.addEventListener("scroll", function() {
      const distanciaTop = experienciaSection.getBoundingClientRect().top;
      if (distanciaTop < window.innerHeight) {
        experienciaSection.classList.add("animado");
      }
    });
  }

  // Función para mostrar el menú en dispositivos móviles
  document.getElementById("icono-nav").addEventListener("click", function() {
    const menu = document.querySelector(".menu-principal");
    menu.classList.toggle("active");
    document.getElementById("icono-nav").style.display = "none";  // Ocultamos el icono de hamburguesa
    document.getElementById("icono-cerrar").style.display = "block";  // Mostramos el icono de "X"
  });

  // Función para cerrar el menú al hacer clic en el icono de cerrar
  document.getElementById("icono-cerrar").addEventListener("click", function() {
    const menu = document.querySelector(".menu-principal");
    menu.classList.remove("active"); // Elimina la clase 'active' para ocultar el menú
    document.getElementById("icono-nav").style.display = "block"; // Volvemos a mostrar el icono de hamburguesa
    document.getElementById("icono-cerrar").style.display = "none"; // Ocultamos el icono de "X"
  });
});
