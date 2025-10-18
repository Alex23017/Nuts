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

  //LANGUAGES
  const dropdownBtn = document.getElementById("dropdownMenuButton1");
  const dropdownBtn2 = document.getElementById("dropdownMenuButton2");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach((el) => {
    el.addEventListener("click", () => {
      const selectLang = el.textContent;
      dropdownBtn.textContent = selectLang;
      dropdownBtn2.textContent = selectLang;
      setLanguage(selectLang);
    });
  });

  function setLanguage(language) {
    const element = document.querySelectorAll("[data-lang-ua], [data-lang-ru]");
    element.forEach((lang) => {
      const translation = lang.getAttribute(`data-lang-${language}`);
      if (translation) {
        lang.textContent = translation;
      }
    });
  }

  // PAY

  const payArray = [
    `   <h2 class="pay__column-title">Способы оплаты</h2>
              <div class="pay__method">
                <div class="pay__img pay__img--bank">
                  <img src="img/delivery/bank.webp" alt="" class="pay__method-img" />
                  <h2 class="pay__method-title">Безналичный расчет</h2>
                </div>
                <p class="pay__method-text pay__method--bank">
                  Вы можете выбрать “получить реквизиты” <br />
                  для дальнейшей оплаты на карту, или в терминалах.
                </p>
              </div>
              <div class="pay__method">
                <div class="pay__img pay__img--car">
                  <img src="img/delivery/card.webp" alt="card" class="pay__method-img" />
                  <h2 class="pay__method-title">Оплата с помощью банковской карты</h2>
                </div>
                <p class="pay__method-text">
                  Оплатите Ваш заказ картой любого банка онлайн (LiqPay/Приват24)
                </p>
              </div>
              <div class="pay__method">
                <div class="pay__img pay__img--wallet">
                  <img src="img/delivery/wallet.webp" alt="" class="pay__method-img" />
                  <h2 class="pay__method-title">Наличный расчет</h2>
                </div>
                <p class="pay__method-text">
                  Оплата заказов наложенным платежом в отделении Новой Почты, или наличными
                  курьерами
                </p>
              </div>`,
    `Доставка партии`,
    `Возврат товара`,
  ];

  const btnSelect = document.querySelectorAll(".pay__select");
  const renderContext = document.querySelector(".pay__column-pay");
  const svgSelect = document.querySelectorAll(".pay__select-img");

  if (renderContext) {
    renderContext.innerHTML = `<h2 class="pay__column-title">Способы оплаты</h2>
              <div class="pay__method">
                <div class="pay__img pay__img--bank">
                  <img src="img/delivery/bank.webp" alt="" class="pay__method-img" />
                  <h2 class="pay__method-title">Безналичный расчет</h2>
                </div>
                <p class="pay__method-text pay__method--bank">
                  Вы можете выбрать “получить реквизиты” <br />
                  для дальнейшей оплаты на карту, или в терминалах.
                </p>
              </div>
              <div class="pay__method">
                <div class="pay__img pay__img--car">
                  <img src="img/delivery/card.webp" alt="card" class="pay__method-img" />
                  <h2 class="pay__method-title">Оплата с помощью банковской карты</h2>
                </div>
                <p class="pay__method-text">
                  Оплатите Ваш заказ картой любого банка онлайн (LiqPay/Приват24)
                </p>
              </div>
              <div class="pay__method">
                <div class="pay__img pay__img">
                  <img src="img/delivery/wallet.webp" alt="" class="pay__method-img" />
                  <h2 class="pay__method-title">Наличный расчет</h2>
                </div>
                <p class="pay__method-text">
                  Оплата заказов наложенным платежом в отделении Новой Почты, или наличными
                  курьерами
                </p>
              </div>`;
  }

  btnSelect.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (renderContext) {
        renderContext.innerHTML = payArray[index];
      }
      btnSelect.forEach((b) => b.classList.remove("active"));
      svgSelect.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const svg = btn.querySelector(".pay__select-img");
      if (svg) {
        svg.classList.add("active");
      }
    });
  });

  //LOCATION

  const location = document.querySelector(".location__delivery-page");
  if (window.location.pathname === "/delivery.html") {
    location.textContent = "Оплата и доставка";
  }
  if (window.location.pathname === "/clients.html") {
    location.textContent = "Оптовым и корпоративным клиентам";
  }

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
