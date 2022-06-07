const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
  if (navbar.classList.contains("bg-dark") && window.pageYOffset < 20) {
    navbar.classList.remove("bg-dark");
  } else if (!navbar.classList.contains("bg-dark")) {
    navbar.classList.add("bg-dark");
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20 && !navbar.classList.contains("bg-dark")) {
    navbar.classList.add("bg-dark");
  } else if (window.pageYOffset < 20 && navbar.classList.contains("bg-dark")) {
    navbar.classList.remove("bg-dark");
  }
});
