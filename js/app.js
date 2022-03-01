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
// create three variable
// catch-all sections by variable => sections
const sections = document.querySelectorAll(`section`);
// catch navigation bar list by variable => allLink
const allLink = document.getElementById(`navbar__list`);
// Creating a dummy variable
const fragment = document.createDocumentFragment();


//create loop on all sections and build the navbar list item 
sections.forEach((element) => {
  // Create a link and place it in a variable
  let link = document.createElement(`a`);

  // Create listitem element  and place it in a variable
  let newLi = document.createElement(`li`);

  //get attribute data-nav  from sections because I will use it in the next steps
  let text = element.getAttribute(`data-nav`);

  let textNode = document.createTextNode(text);
  link.appendChild(textNode);
  newLi.appendChild(link);
  newLi.className = `menu__link`;
  fragment.appendChild(newLi);
  //Begin Events on click link .. by arrow function 
  link.addEventListener(`click`, () => {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

allLink.appendChild(fragment);


// Add class 'active' to section when near top of viewport
// create loop on all section and create function 

window.onscroll = function () {
  document.querySelectorAll(`section`).forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -350 &&
      active.getBoundingClientRect().top <= 200
    ) {
      active.classList.add(`your-active-class`);
    } else {
      active.classList.remove(`your-active-class`);
    }
  });
};

// Create a page scroll up button that is visible only
// when the user scrolls down above the fold.

// const btn = document.getElementById(`btn`);
// const header = document.getElementsByClassName(`page__header`)
//  // console.log(btn)
// btn.addEventListener(`click`, ()=>{
//   document.documentElement.scrollTo({ top : 0 ,  behavior : `smooth`})
// })








