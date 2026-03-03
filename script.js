const pieces = document.querySelectorAll('.piece');

pieces.forEach(piece => {
    piece.addEventListener('click', () => {
        piece.classList.toggle('flipped');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("changing-text");

    const phrases = [
        "Strategy Meets Creativity",
        "Design With Purpose",
        "Building Digital Experiences",
        "Turning Ideas Into Reality"
    ];

    let index = 0;
    let opacity = 1;
    let fadingOut = true;

    function animateText() {
        if (fadingOut) {
            opacity -= 0.02;
            if (opacity <= 0) {
                opacity = 0;
                fadingOut = false;
                index = (index + 1) % phrases.length;
                text.textContent = phrases[index];
            }
        } else {
            opacity += 0.02;
            if (opacity >= 1) {
                opacity = 1;
                fadingOut = true;
            }
        }

        text.style.opacity = opacity;
        requestAnimationFrame(animateText);
    }

    animateText();
});

const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".navbar ul");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
});

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".contact-left, .contact-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

});