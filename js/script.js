"use strict";
// Variables
const burger = document.querySelector(".burger");
const list = document.querySelector("ul");
// Events

burger.addEventListener("click", (e) => {
  list.classList.toggle("active");
  e.preventDefault();
});
