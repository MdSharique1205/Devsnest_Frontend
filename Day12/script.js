"use strict";
const addbtn = document.getElementById("add");
const inputFld = document.getElementById("input");
const todolist = document.getElementById("todolist");

// localStorage.setItem("todos", "");

let todos = "";
todos = localStorage.getItem("todos");
if (todos) todolist.innerHTML = todos;
else todos = "";

addbtn.addEventListener("click", function (e) {
  //   console.log(e.target);
  const newtodo = document.createElement("div");
  newtodo.classList.add("todo");
  newtodo.innerHTML = inputFld.value;
  todolist.appendChild(newtodo);
  todos = todolist.innerHTML;
  localStorage.setItem("todos", todos);
  inputFld.innerHTML = "";
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("todo")) {
    e.target.remove();
    localStorage.setItem("todos", todolist.innerHTML);
  }
});

// function add() {}
