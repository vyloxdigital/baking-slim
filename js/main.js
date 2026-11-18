/* BakingSlim — baking-slim.vercel.app */
(function () {
  "use strict";

  /* Masthead menu on small screens */
  var toggle = document.querySelector(".menu-btn");
  var panel = document.getElementById("menu-items");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var shown = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", shown ? "true" : "false");
    });
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("open")) {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Sticky order bar: rises once the hero buttons scroll off,
     retracts across the price table so it never covers it. */
  var bar = document.querySelector(".bar");
  if (bar && "IntersectionObserver" in window) {
    var scrolledPast = false;
    var overTable = false;
    function apply() {
      bar.classList.toggle("on", scrolledPast && !overTable);
    }
    var heroGos = document.getElementById("hero-gos");
    if (heroGos) {
      new IntersectionObserver(
        function (entries) {
          scrolledPast =
            !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
          apply();
        },
        { threshold: 0 }
      ).observe(heroGos);
    }
    var prices = document.getElementById("prices");
    if (prices) {
      new IntersectionObserver(
        function (entries) {
          overTable = entries[0].isIntersecting;
          apply();
        },
        { threshold: 0 }
      ).observe(prices);
    }
  }
})();
