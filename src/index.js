"use strict";

const nameContainer = document.querySelector(".js-name-container"),
  nameForm = nameContainer.querySelector(".js-form"),
  nameInput = nameForm.querySelector("input"),
  nameBox = nameContainer.querySelector(".js-name"),
  nameWritten = nameBox.querySelector("span"),
  inviteBox = document.querySelector(".js-invitation"),
  inviteSpan = inviteBox.querySelector("span");

const USER_LS = "username",
  SHOWING = "showing",
  NOT_SHOWING = "not-showing";

function paintInvite(text) {
  inviteBox.classList.remove(NOT_SHOWING);
}

function paintName(name) {
  nameBox.classList.add(SHOWING);
  nameForm.classList.add(NOT_SHOWING);
  nameWritten.innerText = `${name}`;

  paintInvite();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;

  localStorage.setItem(USER_LS, currentValue);
  paintName(currentValue);
}

function askForName() {
  nameForm.addEventListener("submit", handleSubmit);
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
}

init();
