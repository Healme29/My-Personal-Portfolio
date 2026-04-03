// Add current year to footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIconLight = document.getElementById('theme-icon-light');
const themeIconDark = document.getElementById('theme-icon-dark');

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));

  themeIconLight.classList.toggle('hidden');
  themeIconDark.classList.toggle('hidden');
});

// Check saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark');
  themeIconLight.classList.add('hidden');
  themeIconDark.classList.remove('hidden');
} else {
  document.documentElement.classList.remove('dark');
  themeIconLight.classList.remove('hidden');
  themeIconDark.classList.add('hidden');
}

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// Intersection Observer for section animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.section').forEach((section) => {
  observer.observe(section);
});

// Form submission - Allow Formspree to handle the submission
const form = document.querySelector('form');
