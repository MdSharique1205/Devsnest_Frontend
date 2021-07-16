"use strict";
const clickme = document.getElementById("clickme");
const hoverme = document.getElementById("hoverme");
const mousedown = document.getElementById("mousedown");

clickme.addEventListener("click", function () {
  clickme.style.backgroundColor = "purple";
});

hoverme.addEventListener(
  "mouseover",
  () => (hoverme.style.backgroundColor = "green")
);
hoverme.addEventListener(
  "mouseout",
  () => (hoverme.style.backgroundColor = "red")
);
mousedown.addEventListener(
  "mousedown",
  () => (mousedown.style.backgroundColor = "green")
);

document.addEventListener(
  "mouseup",
  () => (mousedown.style.backgroundColor = "red")
);
