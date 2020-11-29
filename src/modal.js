"use strict";

const btnContainer = document.querySelector(".more-info");
const openBtns = btnContainer.querySelectorAll(".show-modal");
const btnOpenArray = Array.from(openBtns).entries();
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close-modal");
const overlay = document.querySelector(".overlay");
console.log(openBtns, btnOpenArray);
console.log(modals);

const HIDDEN = "hidden";

function showModal() {
  for (let [index, button] of btnOpenArray) {
    console.log(index, button);

    function openModal() {
      modals[index].classList.remove(HIDDEN);
      overlay.classList.remove(HIDDEN);
      console.log(modals[index]);
    }
    function closeModal() {
      modals[index].classList.add(HIDDEN);
      overlay.classList.add(HIDDEN);
    }

    ///// Open modals /////
    button.addEventListener("click", openModal);

    /// Close modals ////
    closeBtns[index].addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", closeModal);
  }
}

function init() {
  showModal();
}
init();
