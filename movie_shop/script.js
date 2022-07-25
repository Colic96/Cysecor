"use strict";
let totalPrice = 0;
function watchMovie(element) {
  let movieCard = element.parentElement;
  let moviePrice = movieCard.querySelector(`span`).innerText;
  moviePrice = Number(moviePrice);
  let picture = movieCard.querySelector(`.picture`);

  totalPrice += moviePrice;
  element.setAttribute(`disabled`, `true`);
  movieCard.classList.add(`watched`);
  element.classList.add(`watched`);
  element.innerText = `Watched!`;
  picture.classList.add(`pic-watched`);
  console.log(totalPrice);
  document.querySelector(`footer h2 span`).innerText = totalPrice;
}
