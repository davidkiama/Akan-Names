"use strict";

const banner = document.querySelector(".banner");
const date = document.querySelector(".date");
const gender = document.querySelector(".gender");
const form = document.querySelector(".form");

const displayBanner = function (msg) {
  banner.classList.remove("hidden");
  banner.classList.add(msg);
};

const closeBanner = function () {
  banner.classList.remove("succ");
  banner.classList.remove("warn");
  banner.classList.add("hidden");
};

const arrMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const arrFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let output = "";
  let arr = [];
  const dateVal = date.value;
  const genderVal = gender.value;

  const day = new Date(dateVal);
  const dateIndex = day.getDay(); //generate the day of the week (0-6)

  //changing the names array depending on the gender
  genderVal === "male" ? (arr = arrMale) : (arr = arrFemale);

  output = `Your Akan name is ${arr[dateIndex]} `;

  if (dateVal) {
    closeBanner();
    displayBanner("succ");
  } else {
    closeBanner();
    displayBanner("warn");
  }

  banner.innerHTML = output + `<span class="times"> &times;</span>`;

  // clears input
  gender.value = "";
  date.value = "";
});

// On load
closeBanner();
