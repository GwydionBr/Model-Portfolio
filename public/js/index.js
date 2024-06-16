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