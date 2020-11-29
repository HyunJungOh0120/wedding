"use strict";

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h3"),
  clockTime = clockContainer.querySelector("h1"),
  guest = document.querySelector(".info__guest"),
  guestName = guest.querySelector("#guestName");

function getTime() {
  const wedding = new Date("December 4, 2020 16:30:00");
  const today = new Date();
  const weddingInSec = wedding.getTime();
  const todayInSec = today.getTime();

  const distance = weddingInSec - todayInSec;
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  clockTime.innerText = `${d}d ${h < 10 ? `0${h}` : `${h}`}h ${
    m < 10 ? `0${m}` : `${m}`
  }m ${s < 10 ? `0${s}` : `${s}`}s`;
}

function getName() {
  const name = localStorage.getItem("username");
  guestName.innerText = name;
}

function init() {
  setInterval(getTime, 1000);
  getName();
}

init();
