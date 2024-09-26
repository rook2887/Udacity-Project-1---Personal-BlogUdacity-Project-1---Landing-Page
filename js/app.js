/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Interactive navbar
// (Target the sections and the navbar, then create nav bar items, then add content and a class to these created items, then append them to navbar)
const sections = document.querySelectorAll("section");

const navList = document.getElementById("navbar__list");

sections.forEach((section) => {
  const navItem = document.createElement("li");
  const link = document.createElement("a");

  link.textContent = section.getAttribute("data-nav");
  link.href = `#${section.id}`;
  link.classList.add("menu__link");

  navItem.appendChild(link);
  navList.appendChild(navItem);
});

// Check if DOM element is visible in current viewport
// (return DOMRec Object that represents an element's location in relation to its viewport, and checks if an element is within the visible area of the browser window. The next step is to target the monitored elements' class, and check visibility of each item based on the DOMRec function then log a msg based on position calculated by previous function)
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

const elementsToCheck = document.querySelectorAll(".your-active-class"); // class I want to monitor

function checkVisibility() {
  elementsToCheck.forEach((element) => {
    if (isElementInViewport(element)) {
      console.log(`Element ${element.id} is visible in viewport`);
      // Optionally, add an active class for styling
      element.classList.add("active");
    } else {
      console.log(`Element ${element.id} is not visible in viewport`);
      // Optionally, remove the active class if not visible
      element.classList.remove("active");
    }
  });
}

// Attach the debounced scroll event listener
window.addEventListener("scroll", checkVisibility);
