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

// Add Event Listener on Arrows

const arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", () => {
  console.log("J'ai cliqué sur le bouton gauche");
});

const arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", () => {
  console.log("J'ai cliqué sur le bouton droit");
});

// Add 1 bullet point per slide (total of 4)

const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.classList.add(`dot-${i}`);
  dots.appendChild(dot);
}

// Differentiate currently viewed slide dot
// (It is the 1st one)

let dot_selected = document.querySelector(".dot-0");
dot_selected.classList.add("dot_selected");

// Modify image, tagline and dot selected when clicking on right arrow

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

// Modify image, tagline and dot selected when clicking on left arrow

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
