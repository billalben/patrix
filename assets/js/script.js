"use strict";

import GLightbox from "glightbox";

const lightbox = GLightbox({
  touchNavigation: true,
  href: "https://youtu.be/_QLF3B_fSJA?si=MAI3snuWnQ9u9w1c",
  type: "video",
  source: "youtube", //vimeo, youtube or local
  width: 900,
  autoPlayVideos: "true",
});

// BACK TO TOP BUTTON
document.addEventListener("DOMContentLoaded", () => {
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  backToTop.classList[window.scrollY > 200 ? "add" : "remove"]("active");
});
});

// Active nav link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  let lastActiveNavLink = navLinks[0];

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      lastActiveNavLink.classList.remove("active");
      navLink.classList.add("active");
      lastActiveNavLink = navLink;
    });
  });
});

// Dynamic copyright year
document.addEventListener("DOMContentLoaded", () => {
  const copyrightYear = document.querySelector("span.copyright-yr");
  copyrightYear.textContent = new Date().getFullYear();
});

// Filters for portfolio
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll("[data-category]");

  let lastActiveButton = buttons[0];
  lastActiveButton.classList.add("active");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      lastActiveButton.classList.remove("active");
      lastActiveButton = button;
      lastActiveButton.classList.add("active");

      const category = this.getAttribute("data-filter");
      filterItems(category);
    });
  });

  function filterItems(category) {
    items.forEach(function (item) {
      const itemCategory = item.getAttribute("data-category");
      item.style.display =
        category === "all" || category === itemCategory ? "block" : "none";
    });
  }
});
