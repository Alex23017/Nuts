import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", () => {
  const newsSwipers = document.querySelectorAll(".swiper__news");
  const newsArray = [
    {
      img: "img/news/news_1.webp",
      data: "12.04.2019",
      tittle: "Центр поддержки экспорта, в студии Павел Тулба",
      text: "Как уже упоминал Павел Тулба, шиповник цветёт. Эта культура очень недооценена среди наших садоводов, не смотря на большой спрос в Европе и отличную...",
    },
    {
      img: "img/news/news_2.webp",
      data: "12.04.2019",
      tittle: "В Одесской области состоялся масштабный торгово - экспортный форум",
      text: "Как уже упоминал Павел Тулба, шиповник цветёт. Эта культура очень недооценена среди наших садоводов, не смотря на большой спрос в Европе и отличную...",
    },
    {
      img: "img/news/news_3.webp",
      data: "12.04.2019",
      tittle: "Сертификация органического производителя",
      text: "Как уже упоминал Павел Тулба, шиповник цветёт. Эта культура очень недооценена среди наших садоводов, не смотря на большой спрос в Европе и отличную...",
    },
    {
      img: "img/news/news_1.webp",
      data: "12.04.2019",
      tittle: "Центр поддержки экспорта, в студии Павел Тулба",
      text: "Как уже упоминал Павел Тулба, шиповник цветёт. Эта культура очень недооценена среди наших садоводов, не смотря на большой спрос в Европе и отличную...",
    },
    {
      img: "img/news/news_2.webp",
      data: "12.04.2019",
      tittle: "Центр поддержки экспорта, в студии Павел Тулба",
      text: "Как уже упоминал Павел Тулба, шиповник цветёт. Эта культура очень недооценена среди наших садоводов, не смотря на большой спрос в Европе и отличную...",
    },
    {
      img: "img/news/news_3.webp",
      data: "12.04.2019",
      tittle: "Центр поддержки экспорта, в студии Павел Тулба",
      text: "Как уже упоминал Павел Тулба, шиповник цветёт. Эта культура очень недооценена среди наших садоводов, не смотря на большой спрос в Европе и отличную...",
    },
  ];
  const containerRenderNews = document.querySelector(".cards__news");
  containerRenderNews.innerHTML = newsArray
    .map(
      (card, index) => ` <div class="swiper-slide swiper__card-news" data-index="${index}">
                <article class="card__news">
                  <img src=${card.img} alt="imgNews" class="card__news-img" />
                  <div class="news__card-info">
                    <p class="card__news-data">${card.data}</p>
                    <h2 class="card__news-title">${card.tittle}</h2>
                    <p class="card__news-text">
                     ${card.text}
                    </p>
                    <a href="" class="card__news-link"
                      >Читать
                      <img class="card__arrow-img" src="img/news/rightArrowLink.webp" alt="arrow" />
                    </a>
                  </div>
                </article>
              </div>`,
    )
    .join("");

  newsSwipers.forEach((swiperEl) => {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 3,
      loop: false,
      spaceBetween: 31,
      navigation: {
        nextEl: swiperEl.querySelector(".swiper-button-next"),
        prevEl: swiperEl.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: swiperEl.querySelector(".swiper-pagination"),
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 31,
        },
      },
    });

    const prevBtn = swiperEl.querySelector(".swiper-button-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        swiper.slidePrev();
      });
    }

    const nextBtn = swiperEl.querySelector(".swiper-button-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        swiper.slideNext();
      });
    }

    swiper.on("slideChange", () => {
      const prevArrow = swiperEl.querySelector(".swiper-button-prev");
      const nextArrow = swiperEl.querySelector(".swiper-button-next");

      if (prevArrow) {
        if (swiper.activeIndex >= 1) {
          prevArrow.classList.add("active");
        } else {
          prevArrow.classList.remove("active");
        }
      }

      if (nextArrow) {
        if (swiper.activeIndex + swiper.params.slidesPerView >= swiper.slides.length) {
          nextArrow.classList.add("active");
        } else {
          nextArrow.classList.remove("active");
        }
      }
    });
  });
});
