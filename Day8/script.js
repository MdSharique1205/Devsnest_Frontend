"use strict";
const outer = document.getElementsByClassName("outer")[0];
for (let i = 0; i < 20 * 20; i++) {
  outer.innerHTML += '<div class = "inner"></div>';
}
const defaultWhite = [
  129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
  190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
  250, 252, 266, 268, 271, 273,
];
const cells = document.querySelectorAll(".inner");
console.log(cells);
cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    if (cell.classList.contains("clicked")) cell.classList.remove("clicked");
    else cell.classList.add("clicked");
  });
});
defaultWhite.forEach((i) => {
  cells[i].classList.add("clicked");
});
