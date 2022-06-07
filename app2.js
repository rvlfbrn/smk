const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");
const navbarToggler = document.querySelector(".navbar-toggler");
const title = document.querySelector(".title");

navbarToggler.addEventListener("click", function () {
  if (navbar.classList.contains("bg-dark") && window.pageYOffset < 20) {
    navbar.classList.remove("bg-dark");
    navLink.forEach(function (link) {
      link.classList.remove("text-white");
      link.classList.add("text-black");
    });
  } else if (!navbar.classList.contains("bg-dark")) {
    navbar.classList.add("bg-dark");
    navLink.forEach(function (link) {
      link.classList.remove("text-black");
      link.classList.add("text-white");
    });
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20 && !navbar.classList.contains("bg-dark")) {
    navbar.classList.add("bg-dark");
    navLink.forEach(function (link) {
      link.classList.remove("text-black");
      link.classList.add("text-white");
      title.classList.remove("text-black");
      title.classList.add("text-white");
    });
  } else if (window.pageYOffset < 20 && navbar.classList.contains("bg-dark")) {
    navbar.classList.remove("bg-dark");
    navLink.forEach(function (link) {
      link.classList.remove("text-white");
      link.classList.add("text-black");
      title.classList.remove("text-white");
      title.classList.add("text-black");
    });
  }
});
