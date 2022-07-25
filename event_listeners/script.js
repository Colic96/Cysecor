`use strict`;

const body = document.querySelector(`body`);
const colorBtns = document.querySelectorAll(`.btn-color`);
const box = document.querySelector(`.box`);
const form = document.querySelector(`form`);
const input = document.querySelector(`input`);
const tekst = document.querySelector(`.tekst`);
const keyPressed = document.querySelector(`.btn--pressed`);
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  tekst.innerText = input.value;
});

colorBtns.forEach(function (btn) {
  btn.addEventListener(`click`, function (event) {
    let clicked_btn = event.target;
    if (clicked_btn.innerText === `Blue box`) {
      console.log(`plavo dugme`);
      box.classList.add(`blue`);
      box.classList.remove(`yellow`);
      box.classList.remove(`red`);
    } else if (clicked_btn.innerText === `Yellow box`) {
      box.classList.add(`yellow`);
      box.classList.remove(`blue`);
      box.classList.remove(`red`);
    } else if (clicked_btn.innerText === `Red box`) {
      box.classList.add(`red`);
      box.classList.remove(`yellow`);
      box.classList.remove(`blue`);
    }
  });
});

window.addEventListener(`resize`, () => {
  if (window.innerWidth > 1200) {
    body.classList.add(`yellow`);
    body.classList.remove(`blue`);
    body.classList.remove(`red`);
  } else if (window.innerWidth > 1000) {
    body.classList.add(`blue`);
    body.classList.remove(`red`);
    body.classList.remove(`yellow`);
  } else if (window.innerWidth > 500) {
    body.classList.add(`red`);
    body.classList.remove(`blue`);
    body.classList.remove(`yellow`);
  }
});
console.log(keyPressed);
input.addEventListener(`keydown`, (event) => {
  keyPressed.innerText = event.key;
});
