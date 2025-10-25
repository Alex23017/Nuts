document.addEventListener("DOMContentLoaded", () => {
  const selectReg = document.querySelectorAll(".reg__select-first, .reg__select-second");
  const renderSelect = document.querySelector(".render__select");
  const renderFormUr = document.querySelector(".render__form-ur");
  const renderFormFop = document.querySelector(".render__form-fop");
  //ACTIVE METHOD PAY
  selectReg.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectReg.forEach((el) => el.classList.remove("active"));
      btn.classList.add("active");
      renderFormUr.classList.remove("active");
      renderFormFop.classList.remove("active");

      if (btn.classList.contains("reg__select-first")) {
        renderSelect.innerHTML = `<label class="form__agree form__select">
                  <input type="checkbox" name="agree" />
                  <p>Являюсь ФОП</p>
                </label>`;
      } else {
        renderSelect.innerHTML = `<label class="form__agree form__select-select">
                  <div class="select__ur">
                  <input class="select__input-ur" type="checkbox" name="agree" />
                  <p>Юр. лицо</p>
                  </label>
                  </div>
                     <div class="select__fop">
                  <input class="select__input-fop" type="checkbox" name="agree" />
                  <p>ФОП</p>
                  </label>
                  </div>
                  `;
      }
    });
  });

  // INPUT COUNTRY

  const itemsCountry = document.querySelectorAll(".dropdown-country");
  const btnCountry = document.getElementById("dropdownMenuButtonCountry");

  const itemsObl = document.querySelectorAll(".dropdown-obl");
  const btnObl = document.getElementById("dropdownMenuButtonObl");

  if (itemsCountry) {
    itemsCountry.forEach((item) => {
      item.addEventListener("click", () => {
        btnCountry.textContent = item.textContent;
      });
    });
  }
  if (itemsObl) {
    itemsObl.forEach((item) => {
      item.addEventListener("click", () => {
        btnObl.textContent = item.textContent;
      });
    });
  }

  const formSelect = document.querySelector(".form__select");
  if (formSelect) {
    formSelect.addEventListener("click", () => {
      formSelect.classList.toggle("active");
    });
  }

  renderSelect.addEventListener("click", (e) => {
    const target = e.target.closest(".select__input-ur, .select__input-fop");
    if (!target) return;

    renderSelect
      .querySelectorAll(".select__input-ur, .select__input-fop")
      .forEach((el) => el.classList.remove("active"));
    target.classList.add("active");
    if (target.classList.contains("select__input-ur")) {
      renderFormUr.classList.add("active");
      renderFormFop.classList.remove("active");
    }
    if (target.classList.contains("select__input-fop")) {
      renderFormFop.classList.add("active");
      renderFormUr.classList.remove("active");
    }
  });

  const selectFirst = document.querySelector(".reg__select-first");
  const selectSecond = document.querySelector(".reg__select-second");
  const linkAgree = document.querySelector(".form__agree-link");
  linkAgree.addEventListener("click", (e) => {
    e.preventDefault();
    if (selectFirst.classList.contains("active")) {
      window.location.href = "index.html";
    } else if (selectSecond.classList.contains("active")) {
      window.location.href = "index.html";
    }
  });
  const avatarInput = document.getElementById("avatarInput");
  const avatarPreview = document.getElementById("avatarPreview");

  avatarInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      avatarPreview.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
});
