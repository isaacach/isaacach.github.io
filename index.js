let overlay = document.querySelector('.overlay');
let container = document.querySelector('.container');

setTimeout(() => {
  overlay.style.display = 'none';
}
, 5400);

setTimeout(() => {
  container.style.display = 'flex';
}
, 4000);

const home = `
<div class="intro">
  <p>hi I'm isaac,</p>
  <p>I'm a <span>web developer</span></p>
  </div>
  <div class="wrapper">
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <p>My Projects</p>
</div>
`;

const about = `
<div class="intro">
  <p>hi I'm isaac,</p>
  <p>I'm a <span>web developer</span></p>
</div>
`;

const contact = `
<div class="contact">
<form action="/action_page.php">
    <label for="email">First Name</label>
    <input id="email" name="email" placeholder="Your name..">

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>

`;

const routes = {
  "/": {
    linkLabel: "Home",
    content: home
  },
  "/about": {
    linkLabel: "About",
    content: about
  },
  "/contact": {
    linkLabel: "Contact",
    content: contact
  }
};

const root = document.querySelector("#root");
const nav = document.querySelector("nav");

const renderContent = (route) => (root.innerHTML = routes[route].content);

const navigate = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  window.history.pushState({}, "", href);
  renderContent(href);
  // const route = e.target.pathname;
  // window.history.pushState({}, "", route);
  // renderContent(route);
};

const registerNavLinks = () => {
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navigate(e);
    // e.preventDefault();
    // const { href } = e.target;
    // window.history.pushState({}, "", href);
    // navigate(e);
    }
  });
};

// const registerBrowserBackAndForth = () => {
//   window.onpopstate = function (e) {
//     const route = window.location.pathname;
//     renderContent(route);
//   };
// };

const renderInitialPage = () => {
  const route = window.location.pathname;
  renderContent(route);
};

(function bootup() {
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
})();



