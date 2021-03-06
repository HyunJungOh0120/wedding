"use strict";

const nameContainer = document.querySelector(".js-name-container"),
  nameForm = nameContainer.querySelector(".js-form"),
  nameInput = nameForm.querySelector("input"),
  nameBox = nameContainer.querySelector(".js-name"),
  nameWritten = nameBox.querySelector("span"),
  submitBtn = nameBox.querySelector("button"),
  inviteBox = document.querySelector(".js-invitation"),
  inviteSpan = inviteBox.querySelector("span"),
  btnChange = document.querySelector(".btnChange"),
  main = document.querySelector(".main");

const USER_LS = "username",
  SHOWING = "showing",
  NOT_SHOWING = "not-showing";

function paintInvite() {
  inviteBox.classList.remove(NOT_SHOWING);
}

function paintName(name) {
  nameBox.classList.add(SHOWING);
  nameForm.classList.add(NOT_SHOWING);
  nameWritten.innerText = `${name}`;
  btnChange.classList.remove(NOT_SHOWING);

  paintInvite();

  if (nameWritten.style.width > main.style.width) {
    nameWritten.style.fontSize = "2rem";
  } else {
    nameWritten.style.fontSize = "3rem";
  }
}

function handleSubmit(event) {
  // event.preventDefault();
  const currentValue = nameInput.value;

  localStorage.setItem(USER_LS, currentValue);
  paintName(currentValue);
}

function askForName() {
  nameForm.addEventListener("submit", handleSubmit);
  submitBtn.addEventListener("click", handleSubmit);
}

function handleName() {
  localStorage.removeItem(USER_LS);
  // nameWritten.innerText = "";
  nameBox.innerText = "";
  nameForm.classList.remove(NOT_SHOWING);
  askForName();
  btnChange.classList.add(NOT_SHOWING);
}

function changeName() {
  btnChange.addEventListener("click", handleName);
}

function loadName() {
  const name = localStorage.getItem(USER_LS);

  if (name === null) {
    askForName();
  } else {
    paintName(name);
  }
}

function init() {
  loadName();
  changeName();
}

init();
