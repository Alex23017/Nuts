import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// window.addEventListener("load", () => {
//   const preload = document.querySelector(".preload");
//   const preloadText = document.querySelector(".preload__text");

//   const texts = ["Собираем орехи...", "Подготовка завершена!"];

//   let index = 0;

//   const textInterval = setInterval(() => {
//     preloadText.textContent = texts[index];

//     index++;
//     if (index >= texts.length) {
//       clearInterval(textInterval);

//       setTimeout(() => {
//         preload.classList.add("loaded");
//         document.body.classList.remove("loading");
//       }, 300);
//     }
//   }, 600);
// });

document.addEventListener("DOMContentLoaded", () => {
  const productSwipers = document.querySelectorAll(".product__swiper");

  productSwipers.forEach((swiperEl) => {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      loop: false,
      navigation: {
        nextEl: swiperEl.querySelector(".swiper-button-next"),
        prevEl: swiperEl.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: swiperEl.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });

    const prevBtn = swiperEl.querySelector(".swiper-button-prev");
    prevBtn.addEventListener("click", () => {
      swiper.slidePrev();
    });
    const nextBtn = swiperEl.querySelector(".swiper-button-next");
    nextBtn.addEventListener("click", () => {
      swiper.slideNext();
    });

    swiper.on("slideChange", () => {
      const prevArrow = swiperEl.querySelector(".swiper-button-prev");
      const nextArrow = swiperEl.querySelector(".swiper-button-next");

      if (swiper.activeIndex >= 1) {
        prevArrow.classList.add("active");
      } else {
        prevArrow.classList.remove("active");
      }
      if (swiper.activeIndex === swiper.slides.length - 1) {
        nextArrow.classList.add("active");
      } else {
        nextArrow.classList.remove("active");
      }
    });
  });

  //LANGUAGE
  const dropdownBtn = document.getElementById("dropdownMenuButton1");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const selectedLang = item.textContent;
      dropdownBtn.textContent = selectedLang;
    });
  });

  //BURGER MENU
  const burger = document.querySelector(".burger");
  const menuMob = document.querySelector(".menu__mob");
  const menuClose = document.querySelector(".mob__close");
  burger.addEventListener("click", () => {
    menuMob.classList.add("open");
    document.body.classList.add("open");
  });
  menuClose.addEventListener("click", () => {
    menuMob.classList.remove("open");
    document.body.classList.remove("open");
  });
});
