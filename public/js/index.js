window.addEventListener('scroll', () => {
  // Check if the user is near the bottom of the page
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { // Adjust the 100px offset as needed
    // Add the fade-in class to make the footer visible
    document.querySelector('.footer-content').classList.add('fade-in');
  } else {
    // Remove the fade-in class to fade the footer out
    document.querySelector('.footer-content').classList.remove('fade-in');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust this value based on when you want the fade effect to start
  });

  document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
  });
});