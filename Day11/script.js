"use strict";

const quesDiv = document.getElementById("question");
const ansDiv = document.getElementById("options");
let wrong = 0;
let right = 0;
const wrongSpan = document.getElementById("wrong");
const rightSpan = document.getElementById("right");

function ques() {
  this.question = "Enter question here";
  this.options = ["choice1", "choice2", "choic3", "choice4"];
  this.answer = 3;
}

function wrongfun() {
  wrong++;
  wrongSpan.innerText = wrong;
}
function rightfun() {
  right++;
  rightSpan.innerText = right;
}

let list = [];
list = new ques();
list.question = "What is my name ?";
list.options = ["A. Sharique", "B. Suresh", "C. Akhil", "D. Bharat"];
list.answer = 0;

{
  quesDiv.innerHTML = `<h1>${list.question}</h1>`;
  ansDiv.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    if (i != list.answer) {
      ansDiv.innerHTML += `${list.options[i]} <button class = "option">Choose Answer</button><br>`;
    } else {
      ansDiv.innerHTML += `${list.options[i]} <button class = "option answer">Choose Answer</button><br>`;
    }
    const buttons = document.getElementsByClassName("option");
    for (let i = 0; i < buttons.length; i++) {
      if (!buttons[i].classList.contains("answer")) {
        buttons[i].addEventListener("click", wrongfun);
      } else {
        buttons[i].addEventListener("click", rightfun);
      }
    }
  }
}
