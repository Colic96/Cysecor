"use strict";

let input = document.querySelector(`.input`);
let btnConfirm = document.querySelector(`.confirm`);
let container = document.querySelector(`.container`);

let btnRemove;
btnConfirm.addEventListener(`click`, function () {
  let newSec = document.createElement(`section`);
  newSec.classList = `new-task`;
  let newEl = document.createElement(`p`);
  btnRemove = document.createElement(`button`);
  newEl.textContent = input.value;
  btnRemove.classList = `remove`;
  btnRemove.textContent = `-`;
  container.appendChild(newSec);
  newSec.appendChild(newEl);
  newSec.appendChild(btnRemove);
  input.value = ``;
  btnRemove.addEventListener(`click`, function () {
    newSec.remove();
  });
  newSec.addEventListener(`click`, function () {
    newSec.classList.toggle(`done`);
  });
});
