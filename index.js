let isModalOpen = false;
const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

// data arrays (dataArray)
const techStack = [
  {
    id: "html",
    alt: "HTML Logo",
    name: "HTML",
    src: "./assets/HTML5.png",
  },
  {
    id: "css",
    alt: "CSS Logo",
    name: "CSS",
    src: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png",
  },
  {
    id: "javascript",
    alt: "Javascript Logo",
    name: "JavaScript",
    src: "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png",
  },
  {
    id: "typescript",
    alt: "TypeScript Logo",
    name: "TypeScript",
    src: "https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png",
  },
  {
    id: "angular",
    alt: "Angular Logo",
    name: "Angular",
    src: "./assets/angular.svg",
  },
  {
    id: "nodeJs",
    alt: "NodeJS Logo",
    name: "NodeJS",
    src: "./assets/nodejs.svg",
  },
  {
    id: "figma",
    alt: "Figma Logo",
    name: "Figma",
    src: "./assets/figma.svg",
  },
];
const experience = [
  {
    date: "2024 - Present",
    title: "Software Engineer",
    employer: "Korn Ferry",
    description: "Software engineering.",
  },
  {
    date: "2022 - 2024",
    title: "Product Software Engineer",
    employer: "Impartner Software",
    description: "Software engineering.",
  },
  {
    date: "2020 - 2022",
    title: "Implementation Software Engineer",
    employer: "Impartner Software",
    description: "Software engineering.",
  },
  {
    date: "2018 - 2020",
    title: "Solutions Architect",
    employer: "Impartner Software",
    description: "Solutions architecting.",
  },
];
const projects = [
  {
    title: "Fitness Tracker",
    description:
      "This personal project application allows users to log in, track exercises, and manage exercise data. Uses Firebase to store authentication and exercise data. Originally built basic Angular Material designs, but redesigned to enhance user experience.",
    img: {
      src: "./assets/fitness.png",
      alt: "Fitness Tracker",
    },
    weblinks: [
      {
        url: "https://github.com/ashlair/portfolio-projects/tree/main/angular/fitness-tracker",
        icon: "fa-github",
      },
      {
        url: "https://ng-fitness-tracker-92603.web.app/",
        icon: "fa-link",
      },
    ],
  },
  {
    title: "Recipe Book",
    description:
      "This personal project application allows users to log in, save recipes, and create shopping lists. Uses Firebase to store authentication and recipe data. Originally built basic Bootstrap design, but will be redesigned to enchance user experience.",
    img: {
      src: "./assets/recipes.png",
      alt: "Recipe Book",
    },
    weblinks: [
      {
        url: "https://github.com/ashlair/portfolio-projects/tree/main/angular/recipe-book",
        icon: "fa-github",
      },
      {
        url: "https://ng-fitness-tracker-92603.web.app/",
        icon: "fa-link",
      },
    ],
  },
  {
    title: "WET",
    description:
      "This freelance website was created as a tool for clients to book appointments for IV treatments and learn more information about the company. Wordpress was the platform with additional scripting to enhance the site. Designed for desktop, but made responsive to mobile.",
    img: {
      src: "./assets/wet.png",
      alt: "WET",
    },
    weblinks: [
      {
        url: "https://www.figma.com/proto/f6sG1QBvMR8ymXWLIThbfQ/WET?node-id=0-1&t=oIA4nGD7BN7FI3FK-1",
        icon: "fa-figma",
      },
      {
        url: "https://www.figma.com/proto/f6sG1QBvMR8ymXWLIThbfQ/WET?node-id=0-1&t=oIA4nGD7BN7FI3FK-1",
        icon: "fa-figma",
      },
    ],
  },
];

// template functions (templateFunction)
const createTechStackHTML = (tech) => `
  <figure class="language">
    <img id="${tech.id}" src="${tech.src}" alt="${tech.alt}" />
    <span>${tech.name}</span>
  </figure>
`;
const createExperienceHTML = (exp) => `
  <div>
    <div id="experience-dates">${exp.date}</div>
    <div id="experience-text">
      <h3>${exp.title}</h3>
      <h4>${exp.employer}</h4>
      <p>${exp.description}</p>
    </div>
  </div>
`;
const createProjectHTML = (proj) => `
  <div>
    <img src="${proj.img.src}" alt="${proj.img.alt}" />
    <div>
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
    </div>
  </div>
`;

// render grid
function renderGrid(containerId, dataArray, templateFunction) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = dataArray
    .map((item) => templateFunction(item))
    .join("");
  console.log(container.innerHTML);
}

// run renderGrid(html id, data array, template)
renderGrid("tech-grid", techStack, createTechStackHTML);
renderGrid("experience-grid", experience, createExperienceHTML);
renderGrid("project-grid", projects, createProjectHTML);

darkTheme.addListener((e) => {
  if (e.matches) {
    // Theme set to dark.
  } else {
    // Theme set to dark.
  }
});

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_6hjua48",
      "template_hn8rv8b",
      event.target,
      "33LRvUt1rwZS7izvI",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on ashleylairson@gmail.com",
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
  this.languageList();
}
