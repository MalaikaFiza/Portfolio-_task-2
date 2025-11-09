// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle menu for mobile
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
