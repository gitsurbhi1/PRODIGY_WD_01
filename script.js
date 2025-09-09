// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Section fade-in animation
const sections = document.querySelectorAll(".fade-in");
const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });
sections.forEach(sec => appearOnScroll.observe(sec));

// Background theme change on scroll
const colors = [
  "linear-gradient(135deg, #4facfe, #7366ff)",
  "linear-gradient(135deg, #7366ff, #ff6ec7)",
  "linear-gradient(135deg, #ff6ec7, #fcb045)"
];
window.addEventListener("scroll", () => {
  let y = window.scrollY;
  document.body.style.background =
    y < 500 ? colors[0] : y < 1200 ? colors[1] : colors[2];
});

// Cursor particle animation
const cursorContainer = document.getElementById("cursor-container");
const particleColors = ["#4facfe", "#7366ff", "#ff6ec7"];

document.addEventListener("mousemove", e => {
  const dot = document.createElement("div");
  dot.classList.add("cursor-dot");
  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";
  dot.style.background =
    particleColors[Math.floor(Math.random() * particleColors.length)];

  cursorContainer.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 1000); // remove after animation
});
