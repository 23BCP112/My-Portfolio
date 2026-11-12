// script.js

// Mobile Navigation
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});

// Scroll to top
const scrollButton = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }

});

scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Active Navigation Link
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__link");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active-link",
            link.getAttribute("href") === "#" + current
        );
    });

});

// Contact Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        return;
    }

    const subject = encodeURIComponent("Portfolio Contact from " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:23bcp112@sot.pdpu.ac.in?subject=" + subject + "&body=" + body;

});