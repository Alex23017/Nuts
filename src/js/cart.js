document.addEventListener("DOMContentLoaded", () => {
  const cartsArray = [
    `<div class="cart__text">
              <p class="cart__method-text ">
                СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="cart__method-text cart__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="cart__method-text cart__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="cart__method-text cart__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>
         
            </div>
            <div class="clients__select__column cart__select__column-img">
                 <img src="img/cart/cart.webp" alt="imgHero" class="cart_column-img" />
            </div>`,

    `<div class="cart__text">
              <p class="cart__method-text ">
               2 СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="cart__method-text cart__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="cart__method-text cart__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="cart__method-text cart__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>

            </div>
            <div class="clients__select__column cart__select__column-img">
                   <img src="img/cart/cart.webp" alt="imgHero" class="cart_column-img" />
            </div>`,
    `<div class="cart__text">
              <p class="cart__method-text ">
               3 СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="cart__method-text cart__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="cart__method-text cart__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="cart__method-text cart__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>

            </div>
            <div class="clients__select__column cart__select__column-img">
                   <img src="img/cart/cart.webp" alt="imgHero" class="cart_column-img" />
            </div>`,
    `<div class="cart__text">
              <p class="cart__method-text ">
               4 СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="cart__method-text cart__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="cart__method-text cart__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="cart__method-text cart__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>
    
            </div>
            <div class="clients__select__column cart__select__column-img">
                   <img src="img/cart/cart.webp" alt="imgHero" class="cart_column-img" />
            </div>`,
    `<div class="cart__text">
              <p class="cart__method-text ">
               5 СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="cart__method-text cart__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="cart__method-text cart__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="cart__method-text cart__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>
   
            </div>
            <div class="clients__select__column cart__select__column-img">
                   <img src="img/cart/cart.webp" alt="imgHero" class="cart_column-img" />
            </div>`,
  ];

  const clientsBtnSelect = document.querySelectorAll(".cart__select-card");
  const cartRenderContext = document.querySelector(".cart__select");
  const clientsSvgSelect = document.querySelectorAll(".cart__select-img");

  if (cartRenderContext) {
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
  }

  clientsBtnSelect.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (cartRenderContext) {
        cartRenderContext.innerHTML = cartsArray[index];
      }
      clientsBtnSelect.forEach((b) => b.classList.remove("active"));
      clientsSvgSelect.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const svg = btn.querySelector(".cart__select-img");
      if (svg) {
        svg.classList.add("active");
      }
    });
  });
  const productData = JSON.parse(localStorage.getItem("selectedProduct"));

  if (productData) {
    const nameEl = document.querySelector(".nuts__header-title");
    const artEl = document.querySelector(".nuts__header-art");
    const titleEl = document.querySelector(".nuts__title");
    const priceEl = document.querySelector(".cart__price-text");
    const priceOldEl = document.querySelector(".cart__price-text--old");

    if (nameEl && productData.name) nameEl.textContent = productData.name;

    if (artEl && productData.art) artEl.textContent = `Арт: ${productData.art}`;

    if (titleEl && productData.description) titleEl.textContent = productData.description;

    if (priceEl && productData.price) priceEl.innerHTML = `${productData.price}<span> грн.</span>`;
    if (priceOldEl && productData.oldPrice) priceOldEl.innerHTML = `${productData.oldPrice}`;
  }

});
