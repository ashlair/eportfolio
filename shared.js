// theme: start from the device setting, then the toggle button flips it
const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
document.documentElement.classList.toggle("dark", darkTheme.matches);

darkTheme.addEventListener("change", (e) => {
  document.documentElement.classList.toggle("dark", e.matches);
});

function changeTheme() {
  document.documentElement.classList.toggle("dark");
}

// render grid
function renderGrid(containerId, dataArray, templateFunction) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = dataArray
    .map((item) => templateFunction(item))
    .join("");
}
