document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.addEventListener("click", function() {
      document.body.classList.toggle("dark");
      console.log("Dark mode toggled. Body classes:", document.body.className);
    });
    console.log("Toggle button found and event listener added!");
  } else {
    console.error("Toggle button NOT found!");
  }

  // Fade-in Animation
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});
