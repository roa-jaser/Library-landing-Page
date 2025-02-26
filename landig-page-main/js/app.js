/**
 * Landing Page Project - JavaScript
 * - Builds navigation dynamically
 * - Highlights sections on scroll
 * - Smooth scrolls to sections
 * - Shows/hides navigation on scroll
 * - Adds "Back to Top" button
 */
 // Global Variables
const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#navbar__list');

hamburger.addEventListener('click', () => {
navMenu.classList.toggle('active');
});

function toggleMenu() {
    const menu = document.querySelector('.navbar__menu');
    menu.classList.toggle('active');
  }



// Build the navigation menu dynamically
function buildNav() {
    sections.forEach(section => {
        let navItem = document.createElement("li");
        let navLink = document.createElement("a");

        navLink.textContent = section.getAttribute("data-nav");
        navLink.href = `#${section.id}`;
        navLink.classList.add("menu__link");
        navLink.setAttribute("id", `link-${section.id}`);

        navItem.appendChild(navLink);
        navBar.appendChild(navItem);

        navLink.addEventListener("click", function (event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: "smooth" });

            document.querySelectorAll(".menu__link").forEach(link => {
                link.classList.remove("active-link");
            });
            navLink.classList.add("active-link");
        });
    });
}

// Highlight the active section
function setActiveSection() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -50 && rect.top <= 250) {
            sections.forEach(sec => sec.classList.remove("your-active-class"));
            section.classList.add("your-active-class");

            document.querySelectorAll(".menu__link").forEach(link => {
                link.classList.remove("active-link");
            });
            document.querySelector(`#link-${section.id}`).classList.add("active-link");
        }
    });
}

// Back to Top button functionality
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show Back to Top button
window.addEventListener("scroll", () => {
    setActiveSection();
    if (window.scrollY > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Run functions when the page loads
document.addEventListener("DOMContentLoaded", buildNav);
