"use strict";
const btn = document.getElementById("quote");
const display = document.getElementById("display");

btn.addEventListener("click", async () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => (display.innerHTML = data.content));
});
