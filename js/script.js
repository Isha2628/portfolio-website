

console.log("Portfolio Loaded Successfully");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            const offsetTop = target.getBoundingClientRect().top + window.scrollY - 90;

            window.scrollTo({

                top: offsetTop,

                behavior: "smooth"

            });

        }

    });

});

const sections = document.querySelectorAll("section[id], header[id]");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        if (name === "") {

            alert("Please enter your name.");

            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email.");

            return;

        }

        if (message.length < 10) {

            alert("Message must contain at least 10 characters.");

            return;

        }

        alert("Thank you " + name + "! Your message has been sent successfully.");

        contactForm.reset();

    });

}

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =

        `© ${new Date().getFullYear()} Isha Kumari | Frontend Developer`;

}

const typingText = document.querySelector(".terminal-line");

const words = [
    "whoami",
    "Frontend Developer",
    "React.js Developer",
    "Web Designer",
    "JavaScript Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.innerHTML =
            `<span class="prompt">$</span> ${currentWord.substring(0, charIndex++)}`;

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeWriter, 1200);

            return;
        }

    } else {

        typingText.innerHTML =
            `<span class="prompt">$</span> ${currentWord.substring(0, charIndex--)}`;

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeWriter, isDeleting ? 50 : 100);

}

typeWriter();

const revealElements = document.querySelectorAll(

    ".about, .skills, .education, .projects, .experience, .contact"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

const skills = document.querySelectorAll(".skills-list div");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "translateY(-8px) scale(1.05)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "translateY(0) scale(1)";

    });

});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

console.log("All JavaScript Loaded Successfully ✅");