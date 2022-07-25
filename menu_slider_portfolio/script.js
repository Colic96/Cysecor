`use strict`;
// responsive menu--------

const mobileMenu = () => {
  let menu = document.querySelector(`.header ul`);
  let btn = document.querySelector(`.header button`);

  if (btn.innerText === `MENU`) {
    menu.style.display = `block`;
    btn.innerText = `CLOSE`;
  } else {
    menu.style.display = `none`;
    btn.innerText = `MENU`;
  }
};
document.querySelector(`.header button`).addEventListener(`click`, mobileMenu);
// galerija-----------

let rightBtn = document.querySelector(`#right-btn`);
let leftBtn = document.querySelector(`#left-btn`);
let pictures = document.querySelectorAll(`.slider-images img`);

let imgNumber = 0;

const moveRight = () => {
  displayNone();
  imgNumber++;

  if (imgNumber === pictures.length) {
    imgNumber = 0;
  }
  pictures[imgNumber].style.display = `block`;
};
const moveLeft = () => {
  displayNone();
  imgNumber--;

  if (imgNumber === -1) {
    imgNumber = pictures.length - 1;
  }
  pictures[imgNumber].style.display = `block`;
};

rightBtn.addEventListener(`click`, moveRight);

leftBtn.addEventListener(`click`, moveLeft);

// funkcija za sakrivanja svih slika--------

const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = `none`;
  });
};

// portfolio-----------
let sortBtns = document.querySelectorAll(`.portfolio-categories button`);
sortBtns.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    let category = btn.getAttribute(`data-category`);
    let portfolioItems = document.querySelectorAll(`.portfolio-single-item`);

    portfolioItems.forEach((item) => {
      item.style.display = `none`;
    });

    if (category === `sve`) {
      portfolioItems.forEach((item) => {
        item.style.display = `block`;
      });
    }

    portfolioItems.forEach((item) => {
      if (item.getAttribute(`data-category`).includes(category)) {
        item.style.display = `block`;
      }
    });
  });
});

//otvaramo modal-----------

const openModal = () => {
  let modalWindow = document.querySelector(`.popup-modal`);
  let overlay = document.querySelector(`.overlay`);

  modalWindow.style.display = `block`;
  overlay.style.display = `block`;
};
document.querySelector(`.modal1 button`).addEventListener(`click`, openModal);
const closeModal = () => {
  let modalWindow = document.querySelector(`.popup-modal`);
  let overlay = document.querySelector(`.overlay`);

  modalWindow.style.display = `none`;
  overlay.style.display = `none`;
};
document
  .querySelector(`.popup-modal button`)
  .addEventListener(`click`, closeModal);

const openModal2 = () => {
  let modalWindow = document.querySelector(`.popup-modal2`);
  let overlay = document.querySelector(`.overlay`);

  modalWindow.style.display = `block`;
  overlay.style.display = `block`;
};

document.querySelector(`.modal2 button`).addEventListener(`click`, openModal2);

const closeModal2 = () => {
  let modalWindow = document.querySelector(`.popup-modal2`);
  let overlay = document.querySelector(`.overlay`);

  modalWindow.style.display = `none`;
  overlay.style.display = `none`;
};
document
  .querySelector(`.popup-modal2 button`)
  .addEventListener(`click`, closeModal2);
