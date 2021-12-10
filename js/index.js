"use strict";

const banner = document.querySelector(".banner");
const date = document.querySelector(".form__input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  banner.textContent = date.value;
});
