document.addEventListener("DOMContentLoaded", () => {
  const selectInputNp = document.querySelectorAll(".select__input-fop");
  const selectInputPay = document.querySelectorAll(".select__input-pay");
  const renderNp = document.querySelector(".render__np-np");
  const renderNpAddress = document.querySelector(".render__np-address");
  const selectNp = document.querySelector(".select__np");
  const selectNpAddress = document.querySelector(".select__np-address");

  selectInputPay.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectInputPay.forEach((el) => el.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  selectInputNp.forEach((select) => {
    select.addEventListener("click", () => {
      selectInputNp.forEach((el) => el.classList.remove("active"));
      select.classList.add("active");
      renderNp.classList.remove("active");
      renderNpAddress.classList.remove("active");

      if (selectNp.classList.contains("active")) {
        renderNp.classList.add("active");
      }
      if (selectNpAddress.classList.contains("active")) {
        renderNpAddress.classList.add("active");
      }
    });
  });
});
