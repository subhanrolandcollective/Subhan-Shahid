import "/bootstrap.min.css";
import "/style.css";
import "/main.css";
import "./styles.css/Home.css";

import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

const button = document.querySelector("#Home");

button.addEventListener("click", () => {
  setTimeout(() => {
    window.location.reload();
  }, 1000); // 1000 milliseconds = 1 second
});

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      text: "Subhan has been a real pleasure to deal with. He works quickly, is open to all sorts of feedback, and he's always got interesting suggestions that I otherwise wouldn't have considered. To top it all off, he's a genuinely good man who won't rest until you are completely satisfied with the final product. I highly recommend this freelancer.",
      author: "Avi Cohen",
      role: "PhotoShop Artist",
      image: "https://placehold.co/100x100/gray/white?text=AS",
    },
    {
      text: "Subhan does great work and is a great professional. He is constantly trying to find ways to improve and grow my project",
      author: "Dave",
      role: "Vfx & CGI",
      image: "https://placehold.co/100x100/gray/white?text=BJ",
    },
    {
        text: "Good helpful resource. Will work with him again",
        author: "Prasad",
        role: "Thumbnail Designing",
        image: "https://placehold.co/100x100/gray/white?text=BJ",
      },
    {
        text: "Love working with Subhan he always does a great job.",
        author: "Roddy Hanson",
        role: "Script & ScreenPlay",
        image: "https://placehold.co/100x100/gray/white?text=BJ",
      },
    {
        text: "Subhan was pleasure to work with. His attention to details is great, his commutation is amazing, and he is the ultimate professional. I will be working with Subhan again in the future!",
        author: "Dave",
        role: "Vfx & CGI",
        image: "https://placehold.co/100x100/gray/white?text=BJ",
      },


  ];
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  testimonials.forEach((testimonial) => {
    const slide = document.createElement("div");
    slide.classList.add(
      "swiper-slide",
      "p-6",
      "rounded-lg",
      "bg-zinc-900",
      "shadow-md",
      "shadow-gray-900/50",
      "flex",
      "flex-col",
      "items-center",
      "text-center"
    ); // Updated background and shadow classes

    slide.innerHTML = `
      <div class="mb-4 flex flex-col gap-4">
      <div>
        <h4 class="text-2xl font-semibold text-yellow-400">${testimonial.author}</h4> <!-- Adjusted text color -->
        <p class="text-sm text-gray-400">${testimonial.role}</p> <!-- Adjusted text color -->
      </div>
        <p class="text-xl italic text-gray-300 mb-4">"${testimonial.text}"</p> <!-- Adjusted text color -->
      </div>
    `;
    swiperWrapper.appendChild(slide);
  });

  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        // Added a breakpoint for very small screens
        slidesPerView: 1,
        spaceBetween: 10, // Reduced spacing for smaller screens
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20, // Slightly reduced spacing for medium screens
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
