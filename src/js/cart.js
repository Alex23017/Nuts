document.addEventListener("DOMContentLoaded", () => {
  const cartRenderContext = document.querySelector(".cart__select");
  const clientsBtnSelect = document.querySelectorAll(".cart__select-card");
  const clientsSvgSelect = document.querySelectorAll(".cart__select-img");
  const cartsArray = [
    `1 СОК "Орех Причерноморья" предлагает своим клиентам выгодные условия сотрудничества.`,
    `2 СОК "Орех Причерноморья" предлагает своим клиентам выгодные условия сотрудничества.`,
    `3 СОК "Орех Причерноморья" предлагает своим клиентам выгодные условия сотрудничества.`,
    `4 СОК "Орех Причерноморья" предлагает своим клиентам выгодные условия сотрудничества.`,
  ];
  cartRenderContext.innerHTML = `<div class="cart__text">
              <p class="cart__method-text cart__method-text--4000">
           Уже 4000 лет люди питаются ценными <span>грецкими орехами.</span>  Они особенно полезны послеоперационным больным,
детям, кормящим, беременным женщинам. Чтобы вернуть <br> силы, укрепить иммунитет, одолеть туберкулез, кашель;
грецкий орех очищенный, отборный нужно истолочь, смешать с медом (2:1) и чайную ложку целебной смеси
употреблять перед едой.

              </p>

              <p class="cart__method-text cart__method-text--second">
             В белке грецких орехов много (15 %) аргинина. Он особенно нужен детям, больным, пожилым людям, 
в организме
которых аминокислота плохо синтезируется. Аргинин помогает сосудам регенерировать, 
а всему организму –
победить воспаления.
              </p>
          <h3 class="cart__usefull-title">Другие полезные вещества грецких орехов:</h3>
          <p class="cart__usefull-text">Антиоксиданты защищают печень от повреждений</p>
          <p class="cart__usefull-text">Полифенолы не дают образоваться сосудистым тромбам</p>
          <p class="cart__usefull-text">Нейропротекторы улучшают работу мозга, отодвигают старость</p>
        
          <h3 class="cart__usefull-title cart__usefull-title--second">Нужно систематически есть грецкие орехи, чтобы:</h3>
          <p class="cart__usefull-text">На 30–40 % снизить риск заболевания раком простаты</p>
          <p class="cart__usefull-text">На 50 % – раком молочной железы</p>
          <p class="cart__usefull-text">Предотвратить дегенерацию глазной макулы, а значит, улучшить зрение</p>
          <p class="cart__usefull-text">Отрегулировать обмен веществ, выработку инсулина; понизить количество сахара в крови</p>

            </div>
            <div class="cart__select_column">
              <img src="img/cart/cart.webp" alt="imgHero" class="cart_column-img" />
            </div>`;

  clientsBtnSelect.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      cartRenderContext.innerHTML = cartsArray[index];

      clientsBtnSelect.forEach((b) => b.classList.remove("active"));
      clientsSvgSelect.forEach((s) => s.classList.remove("active"));

      btn.classList.add("active");
      const svg = btn.querySelector(".cart__select-img");
      if (svg) svg.classList.add("active");
    });
  });

  const productData = JSON.parse(localStorage.getItem("selectedProduct"));
  if (productData) {
    const nameEl = document.querySelector(".nuts__header-title");
    const artEl = document.querySelector(".nuts__header-art");
    const titleEl = document.querySelector(".nuts__title");
    const priceEl = document.querySelector(".cart__price-text");
    const priceOldEl = document.querySelector(".cart__price-text--old");

    if (nameEl) nameEl.textContent = productData.name;
    if (artEl) artEl.textContent = `Арт: ${productData.art}`;
    if (titleEl) titleEl.textContent = productData.description || "";
    if (priceEl) priceEl.innerHTML = `${productData.price}<span> грн.</span>`;
    if (priceOldEl) priceOldEl.innerHTML = productData.oldPrice || "";
  }

  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const productData = JSON.parse(localStorage.getItem("selectedProduct"));

      const existingProduct = cart.find((item) => item.art === productData.art);
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        cart.push({ ...productData, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
  const cartPriceLink = document.querySelector(".cart__price-link");
  cartPriceLink.addEventListener("click", () => {
    window.location.pathname = "basket.html";
  });
});
