document.addEventListener("DOMContentLoaded", () => {
  const countEl = document.getElementById("cart-count");
  if (countEl) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEl.textContent = totalItems > 0 ? totalItems : 0;
  }
});
