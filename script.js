document.addEventListener('DOMContentLoaded', function() {
  // Dark Mode Toggle
  const toggleBtn = document.getElementById('toggle-mode');
  const images = document.querySelectorAll('.gallery-img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-content');
  const closeBtn = document.querySelector('.close-btn');
  
  // Load saved theme
  const isDarkMode = localStorage.getItem('theme') === 'dark-mode';
  document.body.classList.toggle('dark-mode', isDarkMode);
  toggleBtn.textContent = isDarkMode ? '☀️' : '🌙';

  // Toggle handler
  toggleBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark-mode' : 'light-mode');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
  });

  // Active link highlighting
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === currentPage);
  });
   // Open lightbox
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Close when clicking outside
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

});