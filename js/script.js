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
  threshold: 0.2,
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

// Making year updated
const footering = document.querySelector(".copy");
const currentYear = new Date().getFullYear();

footering.innerHTML = `© Copyright ${currentYear}. Made by Peter Żerdziński`;
