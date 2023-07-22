
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
  // Toggles the 'active' class on the navigation links
  navLinks.classList.toggle('active');
});


const navLinksItems = document.querySelectorAll('.nav-links li a');
navLinksItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


document.addEventListener('click', (event) => {
  const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside) {
    navLinks.classList.remove('active');
  }
});
