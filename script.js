// ===== Day / Night Toggle =====
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("night");
});

// ===== Typed.js =====
new Typed("#text", {
  strings: ["Aman Kumar", "Web Developer", "Frontend Developer", "Java Full Stack Developer"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 1500,
});

// ===== Hamburger Menu =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ===== Scroll Animations (IntersectionObserver) =====
const animatedSections = document.querySelectorAll(".animate-section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);
animatedSections.forEach((el) => observer.observe(el));

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function setActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navItems.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${id}`) {
          a.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", setActiveNav);
setActiveNav();