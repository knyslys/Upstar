const whyMenu = document.querySelector(".why__menu");
const resourcesMenu = document.querySelector(".resources__menu");
const whyLink = document
  .querySelector(".top-navigation__navbar__item--whyupstar")
  .querySelector(".nav-link");

const resourcesLink = document
  .querySelector(".top-navigation__navbar__item--resources")
  .querySelector(".nav-link");

const dropMenu = (menu) => {
  menu.classList.remove("hidden");
};
const hideMenu = (menu) => {
  menu.classList.add("hidden");
};

whyLink.addEventListener("mouseover", () => {
  dropMenu(whyMenu);
  hideMenu(resourcesMenu);
});
whyMenu.addEventListener("mouseleave", () => {
  hideMenu(whyMenu);
});
resourcesLink.addEventListener("mouseover", () => {
  dropMenu(resourcesMenu);
  hideMenu(whyMenu);
});
resourcesMenu.addEventListener("mouseleave", () => {
  hideMenu(resourcesMenu);
});

//drop down list

const displayList = (list) => {
  const listUl = list.currentTarget.querySelector(".list__items");
  const iconEl = list.currentTarget.querySelector(".icon2");

  //change icons
  if (iconEl.classList.contains("ph-caret-down")) {
    iconEl.classList.remove("ph-caret-down");
    iconEl.classList.add("ph-caret-up");
  } else {
    iconEl.classList.remove("ph-caret-up");
    iconEl.classList.add("ph-caret-down");
  }

  listUl.classList.toggle("closed");
};
const listEl = document.querySelectorAll(".list");
listEl.forEach((e) => {
  e.addEventListener("click", displayList);
});

//testimonials

const leftArrow = document.querySelector(".switch--left-arrow");
const rightArrow = document.querySelector(".switch--right-arrow");
const testimonialEl = document.querySelectorAll(
  ".testimonial-container__flex-container"
);
const testimonialWidth = testimonialEl[0].clientWidth;
const testimonialWidth2 = document.querySelector(
  ".testimonial-container"
).clientWidth;
let currentSlide = 0;

const slide = (translateX) => {
  currentSlide += translateX;

  if (currentSlide > testimonialEl.length - 1) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = testimonialEl.length - 1;
  }
  console.log(currentSlide);

  testimonialEl.forEach((e) => {
    e.style.transform =
      "translateX(" + -currentSlide * testimonialWidth + "px)";
    console.log("hi");
  });
};

leftArrow.addEventListener("click", () => {
  slide(-1);
});

rightArrow.addEventListener("click", () => {
  slide(1);
});

//sticky navigation
const topNavigation = document.querySelector(".nav-container");
const stickyNav = () => {
  if (window.scrollY > 50) {
    topNavigation.classList.add("fixedNav");
  } else {
    topNavigation.classList.remove("fixedNav");
  }
};

window.addEventListener("scroll", stickyNav);

//mobile nav

const showMobileNav = () => {
  mobileNav.classList.toggle("top-navigation__mobilenav--off");
};
const mobileNav = document.querySelector(".top-navigation__mobilenav");
mobileNav.addEventListener("click", showMobileNav);

//display hidden all section

const displaySections = (section) => {
  const [e] = section;
  //  if (section.is)
  console.log(section);
  console.log(e);
  if (e.isIntersecting) {
    console.log(e.target);
    e.target.classList.remove("section-hidden");
  }
};

const sectionEl = document.querySelectorAll("section");
const options = {
  threshold: 1,
  root: null,
  rootMargin: "300px",
};

const obs = new IntersectionObserver(displaySections, options);
// console.log(sectionEl);
sectionEl.forEach((e) => {
  obs.observe(e);
});

//scrooling though page

const logoImg = document.querySelector(".logo-img");
logoImg.addEventListener("click", (e) => {
  window.scrollTo(document.querySelector(".header"), 200);
});
