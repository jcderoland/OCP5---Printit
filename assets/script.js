const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", () => {
  console.log("J'ai cliqué sur le bouton gauche");
});

let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", () => {
  console.log("J'ai cliqué sur le bouton droit");
});

let dotSpan = `
<span class="dot"></span>
`;

let dots = document.querySelector(".dots");

for (i = 0; i < slides.length; i++) {
  dots.innerHTML += dotSpan;
}

let dot_selected = document.querySelector(".dot");
dot_selected.classList.add("dot_selected");
