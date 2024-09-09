const btn = document.getElementById("btn");
const menu = document.getElementById("menu");

const dropdown = () => {
  menu.classList.toggle("hidden");
};

btn.addEventListener("click", dropdown);