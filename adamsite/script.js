// Toggle Click Event
const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-links");
const navbarList = document.getElementById("navbarList");
toggleButton.addEventListener("click", function () {
  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle("active");
  }
  toggleButton.classList.toggle("active");
  navbarList.classList.toggle("active");
});

/* Link Click Events */

// About Click
const aboutLink = document.getElementById("about-link");
aboutLink.addEventListener("click", function () {
  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle("active");
  }
  toggleButton.classList.toggle("active");
  navbarList.classList.toggle("active");
});

// Projects Click
const projectsLink = document.getElementById("projects-link");
projectsLink.addEventListener("click", function () {
  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle("active");
  }
  toggleButton.classList.toggle("active");
  navbarList.classList.toggle("active");
});

// Resume Click
const resumeLink = document.getElementById("resume-link");
resumeLink.addEventListener("click", function () {
  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle("active");
  }
  toggleButton.classList.toggle("active");
  navbarList.classList.toggle("active");
});

//this does not work without messing up how containers interact with the background
const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
