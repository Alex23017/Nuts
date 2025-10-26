document.addEventListener("DOMContentLoaded", () => {
  const selectProfile = document.querySelectorAll(".profile__main-text");
  const renderOrder = document.querySelector(".profile__order");
  const renderHistory = document.querySelector(".profile__pay");
  const locationOrder = document.querySelector(".location__else-order");
  const locationHistory = document.querySelector(".location__else-history");

  if (!selectProfile.length) return;

  renderOrder.classList.remove("active");
  locationOrder.classList.remove("active");
  renderHistory.classList.remove("active");
  locationHistory.classList.remove("active");

  selectProfile.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectProfile.forEach((el) => el.classList.remove("active"));
      renderOrder.classList.remove("active");
      renderHistory.classList.remove("active");
      locationOrder.classList.remove("active");
      locationHistory.classList.remove("active");

      btn.classList.add("active");

      if (btn.classList.contains("profile__main-text--order")) {
        renderOrder.classList.add("active");
        locationOrder.classList.add("active");
      } else if (btn.classList.contains("profile__main-text--second")) {
        renderHistory.classList.add("active");
        locationHistory.classList.add("active");
      }
    });
  });
});
