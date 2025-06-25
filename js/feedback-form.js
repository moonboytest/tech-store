document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const phone = form.elements["phone"].value.trim();
    const message = form.elements["message"].value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+7\d{10}$/;

    if (!name) {
      showNotification("Введите ваше имя.");
      form.elements["name"].focus();
      return;
    }

    if (!email) {
      showNotification("Введите ваш email.");
      form.elements["email"].focus();
      return;
    }

    if (!emailRegex.test(email)) {
      showNotification("Неверный формат email.");
      form.elements["email"].focus();
      return;
    }

    if (!phone) {
      showNotification("Введите номер телефона.");
      form.elements["phone"].focus();
      return;
    }

    if (!phoneRegex.test(phone)) {
      showNotification("Телефон должен быть в формате +79991234567.");
      form.elements["phone"].focus();
      return;
    }

    if (!message) {
      showNotification("Напишите сообщение.");
      form.elements["message"].focus();
      return;
    }

    showNotification("Спасибо! Форма успешно отправлена.");
    form.reset();
  });
});
