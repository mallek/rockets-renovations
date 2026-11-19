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

// Quote form: send to Web3Forms without leaving the page.
document.querySelectorAll("form[data-web3form]").forEach(function (form) {
  var status = form.querySelector(".form-status");
  var button = form.querySelector("button[type=submit]");
  var fallback = "Something went wrong sending your request. Please call 970-818-1518 or email RocketsRenovations@gmail.com.";
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    button.disabled = true;
    status.textContent = "Sending...";
    fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form)
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success) {
          form.reset();
          status.textContent = "Thanks! We got your request and will be in touch soon.";
        } else {
          status.textContent = fallback;
        }
      })
      .catch(function () { status.textContent = fallback; })
      .then(function () { button.disabled = false; });
  });
});
