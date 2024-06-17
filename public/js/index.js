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


// Image Viewer
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.portfolio-item img');
  const viewer = document.getElementById('imageViewer');
  const viewerImage = document.querySelector('.viewer-image');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.querySelector('.nav.right');
  const prevBtn = document.querySelector('.nav.left');
  let currentIndex = 0;

  function openViewer(index) {
    viewer.style.display = 'flex';
    viewerImage.src = images[index].src;
    currentIndex = index;
  }

  function closeViewer() {
    viewer.style.display = 'none';
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    viewerImage.src = images[currentIndex].src;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    viewerImage.src = images[currentIndex].src;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => openViewer(index));
  });

  closeBtn.addEventListener('click', closeViewer);
  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  viewer.addEventListener('click', (e) => {
    if (e.target === viewer) {
      closeViewer();
    }
  });
});