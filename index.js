let overlay = document.querySelector('.overlay');
let container = document.querySelector('.container');
let about = document.querySelector('.about');
let aboutEl = document.querySelector('.container-about');
let contact = document.querySelector('.contact');
let contactEl = document.querySelector('.container-contact');
let skills = document.querySelector('.skills');
let skillsEl = document.querySelector('.container-skills');
let projects = document.querySelector('.projects');
let projectsEl = document.querySelector('.container-projects');
let toTop = document.querySelector('.footer-icon-wrapper');
let meBtn = document.querySelector('.me p span');
let cnv = document.querySelector('#canvas');
let logo = document.querySelector('.logo');

let friesMenu = document.querySelector('.fries-menu');
let fryOne = document.querySelector('.fries-menu-line:nth-child(1)');
let fryTwo = document.querySelector('.fries-menu-line:nth-child(2)');
let fryThree = document.querySelector('.fries-menu-line:nth-child(3)');
let navMenu = document.querySelector('nav ul:last-child');

friesMenu.addEventListener('click', () => {
  fryOne.classList.toggle('rotate-1');
  fryTwo.classList.toggle('disappear');
  fryThree.classList.toggle('rotate-2');
  navMenu.classList.toggle('show');
});

logo.addEventListener('click', () => {
  cnv.scrollIntoView({
    behavior: "smooth"
  });
});

meBtn.addEventListener('click', () => {
  contactEl.scrollIntoView({
    behavior: "smooth"
  });
});

about.addEventListener('click', () => {
  aboutEl.scrollIntoView({
    behavior: "smooth"
  });
});

toTop.addEventListener('click', () => {
  cnv.scrollIntoView({
    behavior: "smooth"
  });
});

contact.addEventListener('click', () => {
  contactEl.scrollIntoView({
    behavior: "smooth"
  });
});

skills.addEventListener('click', () => {
  skillsEl.scrollIntoView({
    behavior: "smooth"
  });
});

projects.addEventListener('click', () => {
  projectsEl.scrollIntoView({
    behavior: "smooth"
  });
});
  
const optionsOne = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const highlightCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("container-about")) {
        contact.classList.remove("highlight");
        projects.classList.remove("highlight");
        about.classList.add("highlight");
      } else if (entry.target.classList.contains("container-projects")) {
        about.classList.remove("highlight");
        contact.classList.remove("highlight");
        projects.classList.add("highlight");
      } else if (entry.target.classList.contains("container-contact")) {
        about.classList.remove("highlight");
        projects.classList.remove("highlight");
        contact.classList.add("highlight");
      } else if (entry.target.classList.contains("container-home")) {
        about.classList.remove("highlight");
        projects.classList.remove("highlight");
        contact.classList.remove("highlight");
      }
    }
  })
}

const observerOne = new IntersectionObserver(highlightCallback, optionsOne);
const highlightContainers =  document.querySelectorAll(".hl");
highlightContainers.forEach(element => observerOne.observe(element));

const slideRightCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-right");
    }
  })
}

const observerTwo = new IntersectionObserver(slideRightCallback, optionsOne);
const slideRightContainers =  document.querySelectorAll(".sr");
slideRightContainers.forEach(element => observerTwo.observe(element));

const slideLeftCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-left");
    }
  })
}

const observerThree = new IntersectionObserver(slideLeftCallback, optionsOne);
const slideLeftContainers =  document.querySelectorAll(".sl");
slideLeftContainers.forEach(element => observerThree.observe(element));





