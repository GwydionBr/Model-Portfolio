// Event listener for scroll events to handle footer visibility
window.addEventListener('scroll', () => {
  // Check if the user is near the bottom of the page
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { // Adjust the 100px offset as needed
    // If near the bottom, add the fade-in class to make the footer visible
    document.querySelector('.footer-content').classList.add('fade-in');
  } else {
    // Otherwise, remove the fade-in class to fade the footer out
    document.querySelector('.footer-content').classList.remove('fade-in');
  }
});


document.addEventListener("DOMContentLoaded", function() {

  // Initialize IntersectionObserver to add 'visible' class to elements in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the element is in view, add 'visible' class
        entry.target.classList.add('visible');
      } else {
        // Otherwise, remove 'visible' class
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1 // Threshold for when the fade effect starts
  });

  // Observe all elements with class 'portfolio-item'
  document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
  });

  // Image Viewer Setup
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

  // Function to close the image viewer
  function closeViewer() {
    viewer.style.display = 'none';
  }
  // Function to display the next image in the viewer
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    viewerImage.src = images[currentIndex].src;
  }

  // Function to display the previous image in the viewer
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    viewerImage.src = images[currentIndex].src;
  }

  // Add click event listeners to images for opening the viewer
  images.forEach((img, index) => {
    img.addEventListener('click', () => openViewer(index));
  });

  // Add click event listeners for closing the viewer and navigating images
  closeBtn.addEventListener('click', closeViewer);
  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  // Close the viewer if the background is clicked
  viewer.addEventListener('click', (e) => {
    if (e.target === viewer) {
      closeViewer();
    }
  });
});