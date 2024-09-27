// Interactive navbar with smooth scrolling
// (Target the sections and the navbar, then create nav bar items, then add content and a class to these created items as well as an event listener to the link for smooth scrolling, then append them to navbar)

const sections = document.querySelectorAll("section");

const navList = document.getElementById("navbar__list");

sections.forEach((section) => {
  const navItem = document.createElement("li");
  const link = document.createElement("a");

  // Get data for link + make scrolling smooth upon clicking
  link.textContent = section.getAttribute("data-nav");
  link.href = `#${section.id}`;
  link.classList.add("menu__link");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  navItem.appendChild(link);
  navList.appendChild(navItem);
});

// Check if DOM element is visible in current viewport
// (return DOMRec Object that represents an element's precise location in relation to its viewport, and checks if an element is within the visible area of the browser window. The next step is to target the monitored elements' class as well as navbar links, and check visibility of each item based on the DOMRec function then log a msg based on position calculated by previous function and add CSS styles to active states)

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkVisibility() {
  sections.forEach((section) => {
    const link = document.querySelector(`a[href="#${section.id}"]`); // Find the corresponding nav link

    if (isElementInViewport(section)) {
      section.classList.add("active");
      link.classList.add("active");
      console.log(`Section ${section.id} and its nav link are active`);
    } else {
      section.classList.remove("active");
      link.classList.remove("active");
      console.log(`Section ${section.id} and its nav link are inactive`);
    }
  });
}

window.addEventListener("scroll", checkVisibility);

// Navbar timeout

let isScrolling;
const navbar = document.querySelector(".page__header");

window.addEventListener("scroll", () => {
  navbar.classList.remove("hidden");

  // need to clear other timeouts first from the variable before introducing a new timeout
  clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    navbar.classList.add("hidden");
  }, 2000);
});

// Scroll back button

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Collapsible sections

document.addEventListener("DOMContentLoaded", () => {
  const collapsibleTrigger = document.querySelectorAll(".collapsible");

  collapsibleTrigger.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      content.classList.toggle("active");

      if (content.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
});

function toggleMenu() {
  const navbarMenu = document.querySelector(".navbar__menu");
  navbarMenu.classList.toggle("active");
}

// Responsive Ham menu
const hamburger = document.querySelector(".hamburger");
const navbarList = document.getElementById("navbar__list");

hamburger.addEventListener("click", () => {
  navbarList.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!hamburger.contains(event.target) && !navbarList.contains(event.target)) {
    navbarList.classList.remove("active");
  }
});
