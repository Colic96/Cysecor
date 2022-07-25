`use strict`;

let textTag = document.querySelector(`.section1 h1`);

let text = textTag.textContent;

let splittedText = text.split(``);

textTag.innerHTML = ``;

for (let i = 0; i < splittedText.length; i++) {
  if (splittedText[i] == ` `) {
    splittedText[i] = "&nbsp;";
  }
  textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let startBtn = document.querySelector(`.start`);

startBtn.addEventListener(`click`, function () {
  let k = 0;
  let interval = setInterval(() => {
    let spans = textTag.querySelectorAll(`span`);
    let singleSpan = spans[k];
    singleSpan.className = `fadeMove`;
    k++;

    if (k === spans.length) {
      clearInterval(interval);
    }
  }, 80);
});

let border = document.querySelector(`.border-line`);
let animationWidth = 0;

window.onscroll = () => {
  // animacija za liniju
  if (this.oldScroll > this.scrollY) {
    animationWidth -= 1.5;
  } else {
    animationWidth += 1.5;
  }

  if (animationWidth >= 100) {
    animationWidth = 100;
  } else if (animationWidth <= 0) {
    animationWidth = 0;
  }

  border.style.width = animationWidth + `%`;

  this.oldScroll = this.scrollY;

  imageAnimation();
};

const imageAnimation = () => {
  //animacija za slike

  let sectionForAnimation = document.querySelector(`.section2 .images`);
  let sectionPostition = sectionForAnimation.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.3;

  let leftImage = document.querySelector(`.slideFromLeft`);
  let rightImage = document.querySelector(`.slideFromRight`);

  if (sectionPostition < screenPosition) {
    leftImage.classList.add(`animated`);
    rightImage.classList.add(`animated`);
  }
};

let linija = document.querySelector(`.linija2`);

let plusBtn = document.querySelector(`.plus`);
let minusBtn = document.querySelector(`.minus`);
let change = 0;

function plusFunc(event) {
  if (change > 99) {
    change = 100;
  } else {
    change += 5;
  }
  linija.style.width = `${change}%`;
  console.log(change);
}
function minusFunc(event) {
  if (change < 1) {
    change = 0;
  } else {
    change -= 5;
  }
  linija.style.width = `${change}%`;
  console.log(change);
}
plusBtn.addEventListener(`click`, plusFunc);
minusBtn.addEventListener(`click`, minusFunc);
