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

// Gallery: tap a photo to see it larger. Without JS the link just opens the photo.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".gallery-grid a.zoom"));
  if (!links.length || !window.HTMLDialogElement) { return; }
  var box = document.createElement("dialog");
  box.className = "lightbox";
  box.setAttribute("aria-label", "Photo viewer");
  box.innerHTML =
    '<button type="button" class="lb-close" aria-label="Close">&times;</button>' +
    '<button type="button" class="lb-prev" aria-label="Previous photo">&#8249;</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button type="button" class="lb-next" aria-label="Next photo">&#8250;</button>';
  document.body.appendChild(box);
  var img = box.querySelector("img");
  var cap = box.querySelector("figcaption");
  var current = 0;
  function show(i) {
    current = (i + links.length) % links.length;
    var thumb = links[current].querySelector("img");
    img.src = links[current].href;
    img.alt = thumb.alt;
    cap.textContent = thumb.alt + " (" + (current + 1) + " of " + links.length + ")";
  }
  links.forEach(function (link, i) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      show(i);
      box.showModal();
    });
  });
  box.querySelector(".lb-close").addEventListener("click", function () { box.close(); });
  box.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
  box.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
  box.addEventListener("click", function (e) { if (e.target === box) { box.close(); } });
  box.addEventListener("close", function () { img.removeAttribute("src"); });
  box.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { show(current - 1); }
    if (e.key === "ArrowRight") { show(current + 1); }
  });
  var startX = null;
  box.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", function (e) {
    if (startX === null) { return; }
    var dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) { show(current + (dx < 0 ? 1 : -1)); }
  });
})();
