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

// Scroll event listener to toggle the icon back to hamburger when scrolling up
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

  // Define different thresholds based on screen size (you can adjust these values as needed)
  if (window.innerWidth >= 768) {
    // Desktop or larger screen
    endThreshold = documentHeight - windowHeight - documentHeight * 0;
  } else {
    // Mobile or smaller screen
    endThreshold = documentHeight - windowHeight - documentHeight * 0.025;
  }

  if (scrollPosition > 300) {
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

  // Function to check if the hiddenDiv should be shown
  function checkScroll() {
    const scrollPosition = window.scrollY;

    // Adjust the value (100 in this case) to control when the section appears
    if (scrollPosition > 40) {
      hiddenDiv.classList.add("show");
    } else {
      hiddenDiv.classList.remove("show");
    }
  }

  // Attach the scroll event listener to the window
  window.addEventListener("scroll", checkScroll);

  // Check the scroll position on page load
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
