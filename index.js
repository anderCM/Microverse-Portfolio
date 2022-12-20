const hamburger = document.querySelector(".humburger-container");

let controller = false;
hamburger.addEventListener("click", function ham() {
  const navbar = document.querySelector(".menu-container");
  const links = navbar.querySelectorAll("a");
  const slice1 = document.querySelector(".slice-1");
  const slice2 = document.querySelector(".slice-2");
  const meat = document.querySelector(".meat");
  const navbarContainer = document.getElementById("navbar-container");
  const welcomeSection = document.getElementById("welcome-section");
  const myLogo = document.querySelector(".logo");

  if (!controller) {
    navbar.classList.add("full-screen-menu");
    this.classList.add("full-screen-hamburger");
    navbarContainer.classList.add("full-screen-navbar-container");
    links.forEach((link) => {
      link.classList.add("full-screen-menu-links");
      link.addEventListener("click", function clickA() {
        
        navbar.classList.remove("full-screen-menu");
        hamburger.classList.remove("full-screen-hamburger");
        navbarContainer.classList.remove("full-screen-navbar-container");
        links.forEach((link) => {
          link.classList.remove("full-screen-menu-links");
        });
        slice1.classList.remove("full-screen-slice1");
        slice2.classList.remove("full-screen-slice2");
        meat.classList.remove("full-screen-meat");
        welcomeSection.classList.remove("full-screen-blur");
        myLogo.classList.remove("full-screen-blur");
      });
    });
    slice1.classList.add("full-screen-slice1");
    slice2.classList.add("full-screen-slice2");
    meat.classList.add("full-screen-meat");
    welcomeSection.classList.add("full-screen-blur");
    myLogo.classList.add("full-screen-blur");

    controller = true;
    return;
  }
  navbar.classList.remove("full-screen-menu");
  this.classList.remove("full-screen-hamburger");
  navbarContainer.classList.remove("full-screen-navbar-container");
  links.forEach((link) => {
    link.classList.remove("full-screen-menu-links");
  });
  slice1.classList.remove("full-screen-slice1");
  slice2.classList.remove("full-screen-slice2");
  meat.classList.remove("full-screen-meat");
  welcomeSection.classList.remove("full-screen-blur");
  myLogo.classList.remove("full-screen-blur");

  controller = false;
});
