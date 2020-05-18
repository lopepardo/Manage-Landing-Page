const btnNav = document.querySelector(".header__hamburger");
const headerNav = document.querySelector(".header__nav");

load = () => {
  btnNav.addEventListener("click", () => {
    headerNav.classList.toggle("header__nav--show");
  });
};

document.addEventListener("DOMContentLoader", load());
