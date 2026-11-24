const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const progress = document.getElementById("scroll-progress");

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = amount + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const roles = [
  "A student with a curious mind.",
  "A learner who loves public speaking.",
  "A student leader who believes in teamwork.",
  "An explorer of technology and new ideas."
];
const roleText = document.getElementById("role-text");
let roleIndex = 0;
window.setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.classList.add("changing");
  window.setTimeout(() => {
    roleText.textContent = roles[roleIndex];
    roleText.classList.remove("changing");
  }, 220);
}, 3200);

const revealTargets = document.querySelectorAll(
  ".section-label, .section-content, .journey-card, .skill-card, .project-card, .vision-content, .closing-inner"
);
revealTargets.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();
