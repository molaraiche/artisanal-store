"use strict";
// Variables
const burger = document.querySelector(".burger");
const list = document.querySelector("ul");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const addToCard = document.querySelector(".addtopanel");
const card = document.querySelector(".card");
const prdOne = document.querySelector(".prd-1-img");
const prdTwo = document.querySelector(".prd-2-img");
const prdThree = document.querySelector(".prd-3-img");
const quantityField = document.querySelector("#number-field");
const PrnPro = document.querySelector("#principe");
let allSigne = document.querySelectorAll(".calc");

let Counter = 0;

// Events
burger.addEventListener("click", (e) => {
  list.classList.toggle("active");
  e.preventDefault();
});
plus.addEventListener("click", (e) => {
  if (quantityField.value < 15) {
    Counter++;
    quantityField.value = Counter;
  }
});
minus.addEventListener("click", (e) => {
  if (quantityField.value > 0) {
    Counter--;
    quantityField.value = Counter;
  } else {
    quantityField.value = 0;
  }
});

prdOne.addEventListener("click", (e) => {
  prdOne.classList.remove("filter");
  prdTwo.classList.add("filter");
  prdThree.classList.add("filter");
  PrnPro.src = "../images/lamp.jpg";
});
prdTwo.addEventListener("click", (e) => {
  prdOne.classList.add("filter");
  prdTwo.classList.remove("filter");
  prdThree.classList.add("filter");
  PrnPro.src = "../images/dishes.jpg";
});
prdThree.addEventListener("click", (e) => {
  prdOne.classList.add("filter");
  prdTwo.classList.add("filter");
  prdThree.classList.remove("filter");
  PrnPro.src = "../images/tapis.jpg";
});
