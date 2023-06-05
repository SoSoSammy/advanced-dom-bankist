"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "Height/width of viewport",
    document.documentElement.clientHeight, // not counting scroll bars, just content
    document.documentElement.clientWidth
  );

  // Modern way
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Page navigation

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href"); // relative URL
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href"); // relative URL
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

// // Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// document.getElementsByClassName("btn");

// // Creating and inserting elements
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = "We use cookies for improved functionality and analytics.";
// message.innerHTML = `We use cookies for improved functionality and analytics.
// <button class="btn btn--close-cookie">Got it!</button>`;

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     // NEW WAY
//     // message.remove();
//     // OLD WAY
//     message.parentElement.removeChild(message);
//   });

///////////////////////////////////////
// Styles, Attributes, and Classes

// // Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.color); // only works for inline styles
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color); // works for all styles
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// // Used to access and change CSS custom properties (CSS variables)
// document.documentElement.style.setProperty("--color-primary", "orangered"); // Can use for all properties

// // Attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = "Beautiful minimalist logo";

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("company", "Bankist");

// // Absolute path
// console.log(logo.src);
// // Relative path
// console.log(logo.getAttribute("src"));

// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// // Data attributes
// console.log(logo.dataset.versionNumber); // use camelCase while in HTML is dash-separated

// // Classes
// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c");
// logo.classList.contains("c"); // not includes
// // Don't use because it will overwrite all existing classes
// // logo.className = "jonas";

///////////////////////////////////////
// Implementing Smooth Scrolling

// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   // The boundingClientRect of the button that we clicked
//   // console.log(e.target.getBoundingClientRect()); // boundingClientRect relative to visible viewport

//   console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

//   console.log(
//     "Height/width of viewport",
//     document.documentElement.clientHeight, // not counting scroll bars, just content
//     document.documentElement.clientWidth
//   );

//   // Scrollling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffSet,
//   //   s1coords.top + window.pageYOffset
//   // ); // .top always relative to viewport, not the document

//   // Old school way
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffSet,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: "smooth",
//   // });

//   // Modern way
//   section1.scrollIntoView({ behavior: "smooth" });
// });

///////////////////////////////////////
// Types of Events and Event Handlers

// const h1 = document.querySelector("h1");

// // To listen to an event only once
// const alertH1 = function (e) {
//   alert("addEventListener: Great! You are reading the heading :D");
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert("onmouseenter: Great! You are reading the heading :D");
// };

///////////////////////////////////////
// Event Propagation in Practice

// rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget); // the target is the same for all 3 handlers. they are handling the same event
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// // It's as if the click event that happened on the nav link also happened on the parent
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("CONTAINER", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("NAV", e.target, e.currentTarget);
// });
