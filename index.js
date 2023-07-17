let overlay = document.querySelector('.overlay');
let container = document.querySelector('.container');
let home = document.querySelector('.home');
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


home.addEventListener('click', () => {
  cnv.scrollIntoView({
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
  
const opt = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
      entry.target.classList.add("animated");
    }
  })
}

const observer = new IntersectionObserver(callback, opt);

const animatedElements = document.querySelectorAll(".animate");

animatedElements.forEach(element => observer.observe(element));

