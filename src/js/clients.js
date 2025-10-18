const clientsArray = [
  `<div class="clients__text">
              <p class="clients__method-text clients__method--bank">
                СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="clients__method-text clients__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="clients__method-text clients__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="clients__method-text clients__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>
              <a class="clients__link" href="">Написать нам</a>
            </div>
            <div class="clients__select__column clients__select__column-img">
              <img src="img/clients/imgSelect.webp" alt="imgHero" class="pay__column-img" />
            </div>`,

  `<div class="clients__text">
              <p class="clients__method-text clients__method--bank">
               2 СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="clients__method-text clients__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="clients__method-text clients__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="clients__method-text clients__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>
              <a class="clients__link" href="">Написать нам</a>
            </div>
            <div class="clients__select__column clients__select__column-img">
              <img src="img/clients/pic2.webp" alt="imgHero" class="pay__column-img" />
            </div>`,
  `<div class="clients__text">
              <p class="clients__method-text clients__method--bank">
               3 СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="clients__method-text clients__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="clients__method-text clients__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="clients__method-text clients__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>
              <a class="clients__link" href="">Написать нам</a>
            </div>
            <div class="clients__select__column clients__select__column-img">
              <img src="img/clients/pic3.webp" alt="imgHero" class="pay__column-img" />
            </div>`,
  `<div class="clients__text">
              <p class="clients__method-text clients__method--bank">
               4 СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="clients__method-text clients__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="clients__method-text clients__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="clients__method-text clients__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>
              <a class="clients__link" href="">Написать нам</a>
            </div>
            <div class="clients__select__column clients__select__column-img">
              <img src="img/clients/pic2.webp" alt="imgHero" class="pay__column-img" />
            </div>`,
  `<div class="clients__text">
              <p class="clients__method-text clients__method--bank">
               5 СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="clients__method-text clients__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="clients__method-text clients__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="clients__method-text clients__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>
              <a class="clients__link" href="">Написать нам</a>
            </div>
            <div class="clients__select__column clients__select__column-img">
              <img src="img/clients/imgSelect.webp" alt="imgHero" class="pay__column-img" />
            </div>`,
];

const clientsBtnSelect = document.querySelectorAll(".clients__select");
const clientsRenderContext = document.querySelector(".clients__body");
const clientsSvgSelect = document.querySelectorAll(".clients__select-img");

if (clientsRenderContext) {
  clientsRenderContext.innerHTML = `          <div class="clients__text">
              <p class="clients__method-text clients__method--bank">
                СОК "Орех Причерноморья" предлагает своим клиентам <br />
                выгодные условия сорудничества.
              </p>

              <p class="clients__method-text clients__method-text--second">
                Мы готовы рассмотреть особые условия для оптовых <br />
                покупателей, с готовностью идем на встречу к любому <br />
                предложению.
              </p>

              <p class="clients__method-text clients__method-text--prelast">
                Особые условия подготовленны для розничных <br />
                магазинов. компаний HoReCa, спорт-клубов.
              </p>
              <p class="clients__method-text clients__method-text--last">
                Если вы заинтересованы в нашей продукции, пишите <br />
                или звоните в наш главный офис, мы всегда пойдем <br />
                вам на встречу.
              </p>
              <a class="clients__link" href="">Написать нам</a>
            </div>
            <div class="clients__select__column clients__select__column-img">
              <img src="img/clients/imgSelect.webp" alt="imgHero" class="pay__column-img" />
            </div>`;
}

clientsBtnSelect.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (clientsRenderContext) {
      clientsRenderContext.innerHTML = clientsArray[index];
    }
    clientsBtnSelect.forEach((b) => b.classList.remove("active"));
    clientsSvgSelect.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const svg = btn.querySelector(".clients__select-img");
    if (svg) {
      svg.classList.add("active");
    }
  });
});
