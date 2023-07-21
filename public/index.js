// script.js
const toggleMenu = () => {
  const navbar = document.querySelector('nav ul');
  navbar.classList.toggle('show');
};

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Function to check screen size and display/hide hamburger icon and menu
const checkScreenSize = () => {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('nav ul');

  if (window.innerWidth <= 768) {
    hamburger.style.display = 'block';
    navbar.classList.add('show'); // Hide the menu on smaller screens initially
  } else {
    hamburger.style.display = 'none';
    navbar.classList.remove('show'); // Show the menu on larger screens
  }
};


document.addEventListener('DOMContentLoaded', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

