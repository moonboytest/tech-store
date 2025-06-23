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
