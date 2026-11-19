// Mobile menu toggle
var toggle = document.querySelector(".menu-toggle");
var nav = document.getElementById("main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// PLACEHOLDER: quote form has no backend yet. Remove data-not-connected once it does.
document.querySelectorAll("form[data-not-connected]").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.querySelector(".form-status").textContent =
      "Online requests aren't hooked up yet. Please call 970-818-1518 or email RocketsRenovations@gmail.com.";
  });
});
