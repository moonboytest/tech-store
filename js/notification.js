function showNotification(message) {
  let notif = document.createElement("div");
  notif.className = "notification";
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.classList.add("show"), 100);
  setTimeout(() => {
    notif.classList.remove("show");
    notif.addEventListener("transitionend", () => notif.remove());
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".button");

  buyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      let name, price, img, link;

      // 1️⃣ Для каталога — ищем внутри product-card
      const card = button.closest(".product-card");
      if (card) {
        name = card.querySelector("h3").innerText;
        price = parseInt(
          card.querySelector("p").innerText.replace(/\D/g, ""),
          10
        );
        img = card.querySelector("img").getAttribute("src");
        link = card.querySelector("a").getAttribute("href");
      } else {
        // 2️⃣ Для страницы товара — используем глобальные селекторы
        name = document.querySelector("h1").innerText;
        price = parseInt(
          document.querySelector(".product-price").innerText.replace(/\D/g, ""),
          10
        );
        img = document.querySelector(".product-detail img").getAttribute("src");
        link = window.location.pathname;
      }

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find((item) => item.name === name);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1, img, link });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      showNotification(`«${name}» добавлен в корзину!`);
    });
  });
});
