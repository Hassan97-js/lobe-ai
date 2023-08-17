import { isDefined } from "./utils";

import "./scss/styles.scss";

const hamburgerButton = document.body.querySelector(".hamburger--open");
const hamburgerCloseButton = document.body.querySelector(".hamburger--close");
const navMenuMobileElement = document.body.querySelector(".nav-menu-mobile");

const mobileNavLinks = document.body.querySelectorAll(".nav-menu-mobile li a");

isDefined(hamburgerButton);
isDefined(hamburgerCloseButton);
isDefined(navMenuMobileElement);
isDefined(mobileNavLinks);

hamburgerButton.addEventListener("click", () => {
  navMenuMobileElement.classList.toggle("active");
});

hamburgerCloseButton.addEventListener("click", () => {
  navMenuMobileElement.classList.toggle("active");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenuMobileElement.classList.remove("active");
  });
});

// Video Overlay
const videoImageElement = document.getElementById("open-video");
const videoBackdropElement = document.getElementById("backdrop");
const backdropInnerElement = document.getElementById("backdrop-inner");
const closeModalIcon = document.getElementById("close-modal");

isDefined(videoImageElement);
isDefined(videoBackdropElement);
isDefined(backdropInnerElement);
isDefined(closeModalIcon);

const img = new Image();
img.alt = "";
img.src = "image/after-click.jpg";

videoImageElement.addEventListener("click", () => {
  videoBackdropElement.style.display = "flex";

  backdropInnerElement.appendChild(img);
});

videoBackdropElement.addEventListener("click", () => {
  videoBackdropElement.style.display = "none";
});

closeModalIcon.addEventListener("click", () => {
  videoBackdropElement.style.display = "none";
});
