import { db } from './firebase-config.js';

const toggleBtn = document.querySelector('.menu_toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    menu.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".insight-carousel", {
    slidesPerView: "auto",
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      1200: {
        navigation: false,
        pagination: false,
      },
    },
  });
});

// Seleccionamos el formulario
const form = document.querySelector(".contact_form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // evitar recarga

  // Capturar valores del formulario
  const nombre = form.nombre.value;
  const email = form.email.value;
  const mensaje = form.mensaje.value;

  try {
    await addDoc(collection(db, "mensajes"), {
      nombre,
      email,
      mensaje,
      fecha: new Date(),
    });

    alert("Mensaje enviado con éxito 🎉");
    form.reset(); // Limpiar formulario
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    alert("Hubo un error. Intentalo de nuevo.");
  }
});

console.log("Main.js cargado correctamente");
