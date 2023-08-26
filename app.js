/*nav*/
const navigation = document.querySelector("#navigation");
const navToggle = document.querySelector(".hamburger");

navToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");
  if (visibility === "false") {
    navigation.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.classList.remove("fa-bars");
    navToggle.classList.add("fa-times");
    document.body.classList.add("no-scroll");
  } else {
    navigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.classList.remove("fa-times");
    navToggle.classList.add("fa-bars");

    document.body.classList.remove("no-scroll");
  }
});

const navLink = document.querySelectorAll(".navLink");

navLink.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    navigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.classList.remove("fa-times");
    navToggle.classList.add("fa-bars");
  });
});

let lastScrollPosition = window.pageYOffset;
window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition < lastScrollPosition) {
    navToggle.classList.remove("fa-times");
    navToggle.classList.add("fa-bars");
  }
  lastScrollPosition = currentScrollPosition;
});
/*nav*/

/*scrolltop*/
const scrollToTopArrow = document.querySelector(".scrollTop");

function toggleScrollToTopArrow() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  let endThreshold;

  if (window.innerWidth >= 768) {
    endThreshold = documentHeight - windowHeight - documentHeight * 0;
  } else {
    endThreshold = documentHeight - windowHeight - documentHeight * 0.025;
  }

  if (scrollPosition > 100) {
    scrollToTopArrow.classList.add("show");
  } else {
    scrollToTopArrow.classList.remove("show");
  }

  if (scrollPosition > endThreshold) {
    const offset = endThreshold - scrollPosition;
    scrollToTopArrow.style.transform = `translateY(${offset}px)`;
  } else {
    scrollToTopArrow.style.transform = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

scrollToTopArrow.addEventListener("click", scrollToTop);

scrollToTopArrow.addEventListener("mouseenter", function () {
  this.classList.add("no-transition");
});

scrollToTopArrow.addEventListener("mouseleave", function () {
  this.classList.remove("no-transition");
});

window.addEventListener("scroll", toggleScrollToTopArrow);

window.onload = () => {
  scrollToTop();
};
/*scrolltop*/

/*animation*/
document.addEventListener("DOMContentLoaded", function () {
  const hiddenDiv = document.getElementById("hiddenDiv");
  function checkScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 10) {
      hiddenDiv.classList.add("show");
    } else {
      hiddenDiv.classList.remove("show");
    }
  }
  window.addEventListener("scroll", checkScroll);

  checkScroll();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".hiddenLeft, .hiddenRight, .hiddenBlur, .hiddenUnder"
);
hiddenElements.forEach((el) => observer.observe(el));

/*animation*/
