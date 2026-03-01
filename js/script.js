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

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("active"));
    });
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

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectItems.forEach(item => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block";
          item.classList.remove("animate");
          void item.offsetWidth; // Trigger reflow to restart animation
          item.classList.add("animate");
        } else {
          item.style.display = "none";
          item.classList.remove("animate");
        }
      });
    });
  });

  // Typing Animation for Hero Text
  const heroText = document.querySelector(".hero h1");
  if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    setTimeout(typeWriter, 500);
  }

  // Particle Background Effect
  const particlesContainer = document.getElementById("particles");
  if (particlesContainer) {
    const particleCount = 15; // Number of particles

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random size between 10px and 40px
      const size = Math.random() * 30 + 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random horizontal position
      particle.style.left = `${Math.random() * 100}%`;

      // Random animation duration and delay
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // 5-15s
      particle.style.animationDelay = `${Math.random() * 5}s`;

      particlesContainer.appendChild(particle);
    }
  }
});
