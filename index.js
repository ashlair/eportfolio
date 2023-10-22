let isModalOpen = false;
const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

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
      "33LRvUt1rwZS7izvI"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email@gmail.com"
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
}
