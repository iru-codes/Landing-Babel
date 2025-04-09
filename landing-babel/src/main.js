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
  

  