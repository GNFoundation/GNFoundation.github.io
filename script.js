// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll to work
document.getElementById("heroBtn").addEventListener("click", () => {
  document.getElementById("work").scrollIntoView({
    behavior: "smooth"
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(section => observer.observe(section));

// Contact
document.getElementById("contactBtn").addEventListener("click", () => {
  window.location.href = "mailto:hello@gnfoundation.com";
});
