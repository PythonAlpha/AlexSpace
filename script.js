// ================================
// Mobile Menu Toggle
// ================================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ================================
// Typewriter Effect
// ================================
const roles = ["Web Developer", "UI Designer", "Problem Solver", "Freelancer"];
const typeText = document.getElementById("typeText");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {
  const currentRole = roles[roleIndex];

if (deleting) {
    typeText.textContent = currentRole.substring(0, --charIndex);
  } else {
    typeText.textContent = currentRole.substring(0, ++charIndex);
  }

let speed = deleting ? 50 : 100;

if (!deleting && charIndex === currentRole.length) {
    deleting = true;
    speed = 1500; // Pause at full word
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

setTimeout(typeWriter, speed);
}
typeWriter();

// ================================
// Skills Bar Animation (on scroll)
// ================================
const skillsSection = document.getElementById("skills");
const skillBars = document.querySelectorAll(".skill .bar span");
let skillsAnimated = false;

function animateSkills() {
  if (skillsAnimated) return;
  skillBars.forEach((bar) => {
    const skill =
