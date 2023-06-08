const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Ajout Event Listener sur Arrows

const arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", () => {
  console.log("J'ai cliqué sur le bouton gauche");
});

const arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", () => {
  console.log("J'ai cliqué sur le bouton droit");
});

// Ajout 1 bullet points par slide (4 au total)

const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.classList.add(`dot-${i}`);
  dots.appendChild(dot);
}

// Différencier point de slide en cours de visionnage
// (C'est la 1ère)

let dot_selected = document.querySelector(".dot-0");
dot_selected.classList.add("dot_selected");

// Modifiez image au clic sur flèche droite

const bannerImg = document.querySelector(".banner-img");
const bannerTag = document.querySelector(".banner-tag");
let currentSlide = 0;

arrow_right.addEventListener("click", () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  bannerImg.setAttribute("src", slides[currentSlide].image);
  bannerTag.innerHTML = slides[currentSlide].tagLine;

  dot_selected = document.querySelector(".dot_selected");
  dot_selected.classList.remove("dot_selected");

  dot_selected = document.querySelector(`.dot-${currentSlide}`);
  dot_selected.classList.add("dot_selected");
});

// Modifiez image au clic sur flèche gauche

arrow_left.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  bannerImg.setAttribute("src", slides[currentSlide].image);
  bannerTag.innerHTML = slides[currentSlide].tagLine;

  dot_selected = document.querySelector(".dot_selected");
  dot_selected.classList.remove("dot_selected");

  dot_selected = document.querySelector(`.dot-${currentSlide}`);
  dot_selected.classList.add("dot_selected");
});
