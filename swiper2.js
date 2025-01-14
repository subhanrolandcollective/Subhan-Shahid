import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1, // Display only one slide at a time
    spaceBetween: 30,
    loop: true, // Enable infinite loop
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000, // Optional autoplay delay
      disableOnInteraction: false, // Allow interaction without stopping autoplay
    },
    // Responsive breakpoints (optional, but good for fine-tuning)
    breakpoints: {
      640: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 40,
      },
    },
  });
});
