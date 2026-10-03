async function loadCaseStudy() {
  try {
    const response = await fetch("../assets/case-studies/world-cities.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const caseStudy = await response.json();

    renderGrid("backend", caseStudy.backEndTech, createCaseListItemsHTML);
    renderGrid("frontend", caseStudy.frontEndTech, createCaseListItemsHTML);
    renderGrid("slides", caseStudy.images, createCaseImageSlidesHTML);
    initSlideshow();
    renderGrid("layers", caseStudy.layers, createCaseLayerGridHTML);
    renderGrid("cards", caseStudy.features, createCaseFeaturesHTML);
  } catch (error) {
    console.error("Could not load case study:", error);
  }
}

loadCaseStudy();

const createCaseImageSlidesHTML = (image) => `
  <figure class="slide">
    <img src="${image.src}" alt="${image.alt}">
    <figcaption>${image.caption}</figcaption>
  </figure>
`;
const createCaseFeaturesHTML = (feature) => `
  <div id="card" class="card">
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  </div>
`;
const createCaseHeroHTML = (hero) => `
  <h1>${hero.title}</h1>
  <h2 class="hero__subtitle">${hero.subtitle}</h2>
  <p class="hero__para">${hero.description}</p>
`;
const createCaseListItemsHTML = (item) => `
  <li>${item}</li>
`;
const createCaseLayerGridHTML = (layer) => `
  <div>
    <div id="layer-title">${layer.title}</div>
    <div id="layer-list">
      <ul>${layer.items.map(createCaseListItemsHTML).join("")}</ul>
    </div>
  </div>
`;

let currentSlideIndex = 0;
let slides = [];

// run after the slides are rendered from the case study data
function initSlideshow() {
  slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  slides[currentSlideIndex].classList.add("active");
  updateSlideButtons();
}

function showSlide(index) {
  if (!slides.length || index < 0 || index >= slides.length) return;

  slides[currentSlideIndex].classList.remove("active");

  currentSlideIndex = index;

  slides[currentSlideIndex].classList.add("active");
  updateSlideButtons();
}

function updateSlideButtons() {
  document.querySelector(".prev-btn").disabled = currentSlideIndex === 0;
  document.querySelector(".next-btn").disabled =
    currentSlideIndex === slides.length - 1;
}

function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);
}
