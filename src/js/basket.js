document.addEventListener("DOMContentLoaded", () => {
  const cartKey = "cart";

  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  const basketCount = document.querySelector(".basket__count");
  if (basketCount) {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = savedCart.reduce((sum, item) => sum + item.quantity, 0);
    basketCount.textContent = totalCount;
  }
  function saveCart() {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }
  const orderBasket = document.querySelector(".order__call-basket");
  const basketOverlay = document.querySelector(".basket__overlay");

  function renderCart() {
    const cartDiv = [
      document.querySelector(".cart__basket"),
      document.querySelector(".cart__bag"),
    ].filter(Boolean);
    const cartBag = document.querySelectorAll(".cart__bag");
    const totalSpan = document.querySelectorAll(".total");
    const countSpan = document.querySelector(".count");
    const basketCount = document.querySelector(".basket__count");
    if (cartDiv) {
      cartDiv.forEach((cartEl) => {
        cartEl.innerHTML = "";
      });
    }

    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      count += item.quantity;
      cartDiv.forEach((cartEl) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
         
      <div class="input__body">
      <p class="input__body-name">${item.name}</p>
     

      <div class="input__count">
            <img src="img/basket/arrowLeft.webp" alt="left" class="input__img--right decrease">
       <input class="input__card" readonly type="text" placeholder=${item.quantity}> 
       <img src="img/basket/arrowRight.webp" alt="right" class="input__img--left increase">

   
      </div>
      <p class="input__price">${item.price} грн.</p>
      <p class="input__price-all">${item.price * item.quantity} грн.</p>
         <button class="remove">x</button>
      </div>
      
    `;

        div.querySelector(".increase").addEventListener("click", () => increase(index));
        div.querySelector(".decrease").addEventListener("click", () => decrease(index));
        div.querySelector(".remove").addEventListener("click", () => removeItem(index));

        cartEl.appendChild(div);
      });
    });

    if (countSpan) countSpan.textContent = count;
    if (basketCount) basketCount.textContent = count;
    if (totalSpan) {
      totalSpan.forEach((totalEl) => {
        totalEl.textContent = total;
      });
    }

    cartBag.forEach((bag) => {
      if (bag.innerHTML === "") {
        basketOverlay.classList.remove("active");
      }
    });
  }

  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productDiv = e.target.closest(".product");
      if (!productDiv) return;
      const name = productDiv.dataset.name;
      const price = parseFloat(productDiv.dataset.price);

      const existing = cart.find((item) => item.name === name && item.price === price);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      saveCart();
      renderCart();
    });
  });

  function increase(index) {
    cart[index].quantity++;
    saveCart();
    renderCart();
  }

  function decrease(index) {
    cart[index].quantity--;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    saveCart();
    renderCart();
  }

  function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  }

  renderCart();

  const orderLink = document.querySelector(".basket__link");
  if (orderLink) {
    orderLink.addEventListener("click", (e) => {
      if (window.location.href.includes("basket.html")) {
        e.preventDefault();
      }
    });
  }

  orderBasket.addEventListener("click", (e) => {
    if (basketOverlay) {
      basketOverlay.classList.toggle("active");
      if (window.location.pathname === "/basket.html") {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (!basketOverlay) return;

    if (
      basketOverlay.contains(e.target) ||
      e.target.closest(".remove, .input__img--left, .input__img--right")
    ) {
      return;
    }

    basketOverlay.classList.remove("active");
  });
  window.addEventListener("scroll", () => {
    if (basketOverlay && window.scrollY > 400) {
      basketOverlay.classList.remove("active");
    }
  });
});
