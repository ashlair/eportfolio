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
    src: "./assets/typescript.svg",
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
    src: "./assets/nodejs.png",
  },
  {
    id: "csharp",
    alt: "C Sharp Logo",
    name: "C#",
    src: "./assets/csharp.png",
  },
  {
    id: "aspnet",
    alt: "Dot Net Logo",
    name: "ASP.NET",
    src: "./assets/netlogo.png",
  },
  {
    id: "java",
    alt: "Java Logo",
    name: "Java",
    src: "./assets/java.png",
  },
  {
    id: "python",
    alt: "Python Logo",
    name: "Python",
    src: "./assets/python.png",
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
    description:
      "Developed and enhanced front-end applications in collaboration with cross-functional teams, delivering maintainable code, technical documentation, and process improvements. Supported team onboarding and leveraged AI-assisted development tools to streamline implementation, refactoring, and code review.",
  },
  {
    date: "2022 - 2024",
    title: "Product Software Engineer",
    employer: "Impartner Software",
    description:
      "Developed and led customer-facing Angular features with a focus on maintainable code, testing, code quality, and front-end best practices. Collaborated within an Agile team to review code and build and deploy features through GitLab CI/CD pipelines.",
  },
  {
    date: "2020 - 2022",
    title: "Implementation Software Engineer",
    employer: "Impartner Software",
    description:
      "Developed responsive, user-friendly web interfaces using JavaScript and CSS while collaborating with cross-functional teams on feature implementation. Provided technical expertise for customer solutions and improved development processes to optimize resources and project timelines.",
  },
  {
    date: "2018 - 2020",
    title: "Solutions Architect",
    employer: "Impartner Software",
    description:
      "Translated client requirements into tailored software solutions while collaborating with project and development teams to guide design, implementation, and delivery. Provided technical demonstrations to clients and contributed to development using C# and JavaScript.",
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
        icon: "fab fa-github",
      },
      {
        url: "https://ng-fitness-tracker-92603.web.app/",
        icon: "fas fa-link",
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
        icon: "fab fa-github",
      },
      {
        url: "https://ashlair.github.io/recipe-book/",
        icon: "fas fa-link",
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
        icon: "fab fa-figma",
      },
    ],
  },
];

// template functions (templateFunction)
const createTechStackHTML = (tech) => `
  <figure class="language">
    <img id="${tech.id}" src="${tech.src}" alt="${tech.alt}" />
    <span class="tech">${tech.name}</span>
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
const createProjectLinkHTML = (link) => `
  <a class="project__description--link" href="${link.url}" target="_blank" rel="noopener noreferrer">
    <i class="${link.icon}"></i>
  </a>
`;
const createProjectHTML = (proj) => `
  <div class="project">
    <div class="project__wrapper">
      <img class="project__img" src="${proj.img.src}" alt="${proj.img.alt}" />
      <div class="project__description">
        <h4 class="project__description--title">${proj.title}</h4>
        <p class="project__description--para">${proj.description}</p>
        <div class="project__description--links">
          ${proj.weblinks.map(createProjectLinkHTML).join("")}
        </div>
      </div>
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
}

// calendar years of experience
function getTimeSince(startDate) {
  const years = new Date().getFullYear() - startDate.getFullYear();
  return `${years} year${years === 1 ? "" : "s"}`;
}

const yearsExperience = document.getElementById("years-experience");
if (yearsExperience) {
  yearsExperience.textContent = getTimeSince(new Date(2018, 9, 1));
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

// back to top: show the button once the landing page is scrolled past
const backToTop = document.getElementById("back-to-top");
const landingPage = document.getElementById("landing-page");

if (backToTop && landingPage) {
  new IntersectionObserver(([entry]) => {
    backToTop.classList.toggle("back-to-top--visible", !entry.isIntersecting);
  }).observe(landingPage);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// mobile nav: hamburger menu shown at small widths
const nav = document.querySelector("nav");
const navToggle = document.querySelector(".nav__toggle");

function toggleNav(open = !nav.classList.contains("nav--open")) {
  nav.classList.toggle("nav--open", open);
  navToggle.setAttribute("aria-expanded", open);
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  navToggle.querySelector("i").className = open
    ? "fas fa-times"
    : "fas fa-bars";
}

document
  .querySelectorAll(".nav__link--anchor")
  .forEach((link) => link.addEventListener("click", () => toggleNav(false)));

document.addEventListener("click", (event) => {
  if (nav.classList.contains("nav--open") && !nav.contains(event.target)) {
    toggleNav(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("nav--open")) {
    toggleNav(false);
    navToggle.focus();
  }
});

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList.add("modal--open");
}
