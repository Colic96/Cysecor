`use strict`;

let head = document.querySelector(`head`);
let btn = document.querySelector(`.x`);

btn.addEventListener(`click`, function (event) {
  head.innerHTML = `<link rel="stylesheet" href="style.css" />`;
});

let links = document.querySelectorAll(`.link`);

console.log(links);
