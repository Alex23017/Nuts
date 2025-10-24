import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// PRELOAD + BACKGROUND TEXT
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  const preloadText = document.querySelector(".preload__text");

  const texts = ["Собираем орехи...", "Подготовка завершена!"];
  let textMaxWidth = 50;
  let index = 0;
  if (preloadText) {
    preloadText.style.width = textMaxWidth + "px";

    const textInterval = setInterval(() => {
      preloadText.textContent = texts[index];
      textMaxWidth += 120;
      preloadText.style.width = textMaxWidth + "px";
      index++;
      if (index >= texts.length) {
        clearInterval(textInterval);

        setTimeout(() => {
          preload.classList.add("loaded");
          document.body.classList.remove("loading");
        }, 300);
      }
    }, 600);
  }
});

// LANGUAGES
document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.getElementById("dropdownMenuButton1");
  const dropdownBtn2 = document.getElementById("dropdownMenuButton2");
  const savedLanguage = localStorage.getItem("selectedLanguage");

  if (savedLanguage) {
    setLanguage(savedLanguage);
    dropdownBtn.textContent = savedLanguage;
    dropdownBtn2.textContent = savedLanguage;

    setLanguage(savedLanguage);
  }

  const productSwipers = document.querySelectorAll(".product__swiper");
  // SWIPPER

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
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      swiper.slidePrev();
    });
    const nextBtn = swiperEl.querySelector(".swiper-button-next");
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
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

  const productCards = document.querySelectorAll(".product__card");

  productCards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card__buy")) return;

      const productData = {
        name: card.dataset.name,
        price: card.dataset.price,
        oldPrice: card.dataset.oldPrice,
        art: card.dataset.art,
        img: card.querySelector(".card__img-img"),
        index: index,
        description: card.dataset.description,
        nameUa: card.dataset.langUa,
      };
      localStorage.setItem("selectedProduct", JSON.stringify(productData));
      window.location.href = "cart.html";
    });
  });

  //LANGUAGES

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
    localStorage.setItem("selectedLanguage", language);

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

  //ZOOM PROPOGATION + CARD ZOOM

  const cardZoom = document.querySelectorAll(".card__zoom, .cart__zoom");
  cardZoom.forEach((img) => {
    const zoom = img
      .closest(".product__swiper")
      .querySelectorAll(".card__img-img, .cart__img-img--count");

    img.addEventListener("mouseenter", () => {
      zoom.forEach((el) => {
        el.style.transform = "scale(1.15)";
      });
    });
    img.addEventListener("mouseleave", () => {
      zoom.forEach((el) => {
        el.style.transform = "scale(1)";
      });
    });
  });

  // const cardZoom = document.querySelectorAll(".card__zoom, .cart__zoom");

  // cardZoom.forEach((zoom) => {
  //   const imgs = zoom
  //     .closest(".product__swiper")
  //     .querySelectorAll(".card__img-img, .cart__img-img--count");

  //   zoom.addEventListener("mouseenter", () => {
  //     imgs.forEach((img) => {
  //       img.style.transform = "scale(1.15)";
  //     });
  //   });

  //   zoom.addEventListener("mouseleave", () => {
  //     imgs.forEach((img) => {
  //       img.style.transform = "scale(1)";
  //     });
  //   });
  // });
  //LOCATION
  const locationMain = document.querySelector(".location__delivery");
  if (locationMain) {
    locationMain.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  const location = document.querySelector(".location__delivery-page");

  function isPage(host) {
    return window.location.pathname.includes(host);
  }
  if (isPage("delivery.html")) {
    location.textContent = "Оплата и доставка";
  }
  if (isPage("clients.html")) {
    location.textContent = "Оптовым и корпоративным клиентам";
  }
  if (isPage("basket.html")) {
    location.textContent = "Корзина";
  }
  if (isPage("cart.html")) {
    location.textContent = "Карточка товара";
  }
  if (isPage("catalog.html")) {
    location.textContent = "Магазин";
  }
  if (isPage("news.html")) {
    location.textContent = "Новости и статьи";
  }
  if (isPage("selectNews.html")) {
    location.textContent = "Новости и статьи";
  }

  //BURGER MENU
  const burger = document.querySelector(".burger");
  const menuMob = document.querySelector(".menu__mob");
  const menuClose = document.querySelector(".mob__close");
  burger.addEventListener("click", (e) => {
    menuMob.classList.add("open");
    document.body.classList.add("open");
    e.stopPropagation();
  });
  menuClose.addEventListener("click", () => {
    menuMob.classList.remove("open");
    document.body.classList.remove("open");
  });

  document.addEventListener("click", (e) => {
    if (!menuMob.contains(e.target)) {
      menuMob.classList.remove("open");
      document.body.classList.remove("open");
    }
  });

  //ARROWUP
  const constarrowUp = document.querySelector(".arrowup");
  if (constarrowUp) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        constarrowUp.classList.add("active");
      } else {
        constarrowUp.classList.remove("active");
      }
    });
  }

  constarrowUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  const addProduct = document.querySelector(".add");
  const cardBuy = document.querySelectorAll(".card__buy");
  cardBuy.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      addProduct.classList.add("active");
      setTimeout(() => {
        addProduct.classList.remove("active");
      }, 2000);
    });
  });

  if (addProduct) {
    addProduct.addEventListener("click", () => {
      window.location.href = "basket.html";
    });
  }

  const playBtnAbout = document.querySelector(".about__player");
  const stopBtnSmall = document.querySelector(".about__stop");
  const imgHideSmall = document.querySelector(".about__img-wrapper--img");
  const videoOpenSmall = document.querySelector(".about__video-wrapper");
  const paginationHiddenSmall = document.querySelector(".background__about--none");

  const aboutSwipers = document.querySelectorAll(".about__swiper");

  aboutSwipers.forEach((swiperEl) => {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      navigation: {
        nextEl: swiperEl.querySelector(".swiper-button-next"),
        prevEl: swiperEl.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: swiperEl.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });

    swiperEl.swiperInstance = swiper;
  });

  if (playBtnAbout) {
    playBtnAbout.addEventListener("click", () => {
      imgHideSmall.classList.add("hidden");
      playBtnAbout.classList.add("hidden");
      paginationHiddenSmall.classList.add("hidden");
      stopBtnSmall.classList.add("open");
      videoOpenSmall.classList.add("open");
      videoOpenSmall.src = "https://www.youtube.com/embed/zo7i8VTpfNM?autoplay=1&mute=0&controls=1";

      aboutSwipers.forEach((el) => {
        el.swiperInstance.allowSlideNext = false;
        el.swiperInstance.allowSlidePrev = false;
      });
    });
  }

  if (stopBtnSmall) {
    stopBtnSmall.addEventListener("click", () => {
      imgHideSmall.classList.remove("hidden");
      playBtnAbout.classList.remove("hidden");
      paginationHiddenSmall.classList.remove("hidden");
      stopBtnSmall.classList.remove("open");
      videoOpenSmall.classList.remove("open");
      videoOpenSmall.src = "";

  
      aboutSwipers.forEach((el) => {
        el.swiperInstance.allowSlideNext = true;
        el.swiperInstance.allowSlidePrev = true;
      });
    });
  }

  const playBtn = document.querySelector(".play__img");
  const stopBtn = document.querySelector(".stop__img");
  const imgHide = document.querySelector(".hero__img-wrapper--img");
  const videoOpen = document.querySelector(".hero__video-wrapper");
  const heroTittle = document.querySelector(".hero__tittle");
  const heroText = document.querySelector(".hero__text");
  const overlayWrapper = document.querySelector(".overlay__clients-img");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      imgHide.classList.add("hidden");
      playBtn.classList.add("hidden");
      heroTittle.classList.add("hidden");
      heroText.classList.add("hidden");
      overlayWrapper.classList.add("hidden");
      videoOpen.classList.add("open");
      stopBtn.classList.add("open");
      videoOpen.src = "https://www.youtube.com/embed/zo7i8VTpfNM?autoplay=1&mute=0&controls=1";
    });
  }
  if (stopBtn) {
    stopBtn.addEventListener("click", () => {
      imgHide.classList.remove("hidden");
      playBtn.classList.remove("hidden");
      heroTittle.classList.remove("hidden");
      heroText.classList.remove("hidden");
      overlayWrapper.classList.remove("hidden");
      videoOpen.classList.remove("open");
      stopBtn.classList.remove("open");
      videoOpen.src = "";
    });
  }
});
