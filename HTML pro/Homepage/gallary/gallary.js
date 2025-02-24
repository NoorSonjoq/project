document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const menu = document.querySelector(".menu");

  toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

