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
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  backToTop.classList[window.scrollY > 200 ? "add" : "remove"]("active");
});

// Active nav link
const navLinks = document.querySelectorAll(".nav-link");
let lastActiveNavLink = navLinks[0];

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    lastActiveNavLink.classList.remove("active");
    navLink.classList.add("active");
    lastActiveNavLink = navLink;
  });
});

// Dynamic copyright year
const copyrightYear = document.querySelector("span.copyright-yr");
copyrightYear.textContent = new Date().getFullYear();
