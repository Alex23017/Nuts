import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", () => {
  const aboutSwipers = document.querySelectorAll(".about__swiper");

  aboutSwipers.forEach((swiperEl) => {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 0,
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

  const basketLink = document.querySelector(".basket__link");
  basketLink.addEventListener("click", (e) => {
    if (window.location.href.includes("basket.html")) {
      e.preventDefault();
    }
  });
});
