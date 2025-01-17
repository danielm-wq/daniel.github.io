// Smooth Scroll for CTA Buttons
document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = "↑";
scrollToTopBtn.id = "scroll-to-top";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "20px";
scrollToTopBtn.style.background = "var(--primary-color)";
scrollToTopBtn.style.color = "var(--light-color)";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.padding = "10px 15px";
scrollToTopBtn.style.borderRadius = "50%";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.fontSize = "20px";
scrollToTopBtn.style.opacity = "0";
scrollToTopBtn.style.visibility = "hidden";
scrollToTopBtn.style.transition = "opacity 0.3s, visibility 0.3s";
document.body.appendChild(scrollToTopBtn);

// Show/Hide Scroll-to-Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = "1";
        scrollToTopBtn.style.visibility = "visible";
    } else {
        scrollToTopBtn.style.opacity = "0";
        scrollToTopBtn.style.visibility = "hidden";
    }
});

// Scroll-to-Top Button Click Event
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150; // Adjust reveal trigger point
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add interactivity or animations if needed for future use
// Example: Smooth scrolling for anchor links

document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetUrl = this.getAttribute('href');
        window.open(targetUrl, '_blank'); // Open the demo or case study in a new tab
    });
});
// Add interactivity or animations if needed for future use
// Example: Smooth scrolling for anchor links

document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetUrl = this.getAttribute('href');
        window.open(targetUrl, '_blank'); // Open the demo or case study in a new tab
    });
});
// Optional JS functionality can be added here
// For example, form validation or sending data via AJAX (optional)

/* Example of simple form validation */
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields before submitting.');
    }
});
