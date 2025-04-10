import { db } from './firebase-config.js';
import { collection, addDoc } from "firebase/firestore";

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
const contactForm = document.querySelector(".contact_form");
const status = document.getElementById("formStatus");

// Función auxiliar para mostrar mensajes temporales
function mostrarEstado(mensaje, color = "black", duracion = 5000) {
  status.textContent = mensaje;
  status.style.color = color;

  // Limpiar el mensaje después del tiempo indicado
  setTimeout(() => {
    status.textContent = "";
  }, duracion);
}

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = contactForm.nombre.value.trim();
  const email = contactForm.email.value.trim();
  const mensaje = contactForm.mensaje.value.trim();

  // Validación básica
  if (!nombre || !email || !mensaje) {
    mostrarEstado("Todos los campos son obligatorios.", "red");
    return;
  }

  try {
    await addDoc(collection(db, "usuarios"), {
      nombre,
      email,
      mensaje,
    });

    mostrarEstado("Mensaje enviado con éxito.", "green");
    contactForm.reset();
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    mostrarEstado("Hubo un error al enviar el mensaje. Intenta de nuevo.", "red");
  }
});

console.log("Main.js cargado correctamente");
console.log("Firestore está conectado:", db);
