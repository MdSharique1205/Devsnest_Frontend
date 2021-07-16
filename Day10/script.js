"use strict";
const deck = document.getElementById("deck");
const pairs = [];
let clicked;
let waiting = false;

function shuffle(arr) {
  let curIndex = arr.length - 1;
  while (curIndex !== 0) {
    const randIndex = Math.floor(Math.random() * curIndex);

    const temp = arr[randIndex];
    arr[randIndex] = arr[curIndex];
    arr[curIndex] = temp;

    curIndex--;
  }
}
async function double(obj) {
  await setTimeout(function () {
    if (obj.innerText == clicked.innerText) {
      obj.classList.add("hide");
      clicked.classList.add("hide");
    } else {
      obj.classList.toggle("clicked");
      clicked.classList.toggle("clicked");
    }
    clicked = null;
    waiting = false;
  }, 2000);
}

let words = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
words = [...words, ...words];
shuffle(words);

for (let i = 0; i < 16; i++) {
  pairs.push(i);
  deck.innerHTML += `<div class = "card"><div class = "card-front"></div><div class = "card-back">${words[i]}</div></div>`;
}
const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", async function () {
    if (!waiting) {
      cards[i].classList.toggle("clicked");
      if (!clicked) clicked = cards[i];
      else {
        waiting = true;
        await double(cards[i]);
      }
    }
  });
}
shuffle(pairs);
console.log(pairs);
