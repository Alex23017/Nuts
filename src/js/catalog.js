import SimpleBar from "simplebar";
import "simplebar-core/dist/simplebar.css";

document.addEventListener("DOMContentLoaded", () => {
  const elseProduct = document.querySelector(".shop__item-link--catalog");
  const elseDownload = document.querySelectorAll(".product__card--download");
  elseProduct.addEventListener("click", (e) => {
    e.preventDefault();
    elseDownload.forEach((el) => {
      el.classList.toggle("open");
      elseProduct.textContent = el.classList.contains("open") ? "Скрыть товар" : "Загрузить еще";
    });
  });

  //FILTER
  const selectTaste = document.getElementById("dropdownMenuButton3");
  const tasteItems = document.querySelectorAll(".dropdown-taste");
  tasteItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectTaste.textContent = item.textContent;
    });
  });
  const selectMass = document.getElementById("dropdownMenuButton4");
  const massItems = document.querySelectorAll(".dropdown-mass");
  massItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectMass.textContent = item.textContent;
    });
  });

  // COST
  const cost = document.querySelector(".filter__cost");
  const costItems = document.querySelectorAll(".filter__cost-img--down, .filter__cost-img--top");
  cost.addEventListener("click", () => {
    costItems.forEach((el) => {
      el.classList.toggle("active");
    });
  });

  new SimpleBar(document.querySelector(".about__scroll"), {
    autoHide: false,
    scrollbarMaxSize: 35,
  });
});
