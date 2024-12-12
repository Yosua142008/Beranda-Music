const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

navToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});
