// Typing text animation

const typed = new Typed(".auto-type", {
  strings: ["Programmer.", "Designer.", "Student.", "Frontend Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  looped: true,
});

const allSections = document.querySelectorAll(".reveal");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");

  entry.target.classList.remove(".moving");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const HeaderEl = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".navigation__link");
btnNavEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    HeaderEl.classList.toggle("nav-open");
  });
});

console.log(navLink.length);

// navLink.forEach((link) => {
//   link.addEventListener("mouseenter", (e) => {
//     console.log("chuj");
//     e.target.style.color = "red";

//     console.log(notTarget);
//   });
//   link.addEventListener("mouseleave", (e) => {
//     console.log("chuj");
//     e.target.style.color = "#fff";
//   });
// });
// let current;

// for (let i = 0; i < navLink.length; i++) {
//   navLink[i].addEventListener("mouseenter", (e) => {
//     navLink[i].style.color = "red";

//     let nextSibling = navLink[i].nextElementSibling.textContent;
//     console.log(nextSibling);
//   });
// }

// for (let i = 0; i < navLink.length; i++) {
//   navLink[i].addEventListener("mouseleave", (e) => {
//     if (navLink[i]) {
//     } else {
//     }
//   });
// }

// Making year updated
const footering = document.querySelector(".copy");
const currentYear = new Date().getFullYear();

footering.innerHTML = `© Copyright ${currentYear}. Made by Peter Żerdziński`;

// Switching images

const backgroundImage = document.querySelector(".hihi");
const items = document.querySelectorAll(".project__item");
const images = document.querySelectorAll(".project__img");

const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentItemIndex = 0;

prevButton.addEventListener("click", () => {
  items[currentItemIndex].classList.remove("active");
  currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
  items[currentItemIndex].classList.add("active");
  backgroundImage.setAttribute(
    "src",
    images[currentItemIndex].getAttribute("src")
  );
});

nextButton.addEventListener("click", () => {
  items[currentItemIndex].classList.remove("active");
  currentItemIndex = (currentItemIndex + 1) % items.length;
  items[currentItemIndex].classList.add("active");
  backgroundImage.setAttribute(
    "src",
    images[currentItemIndex].getAttribute("src")
  );
});
