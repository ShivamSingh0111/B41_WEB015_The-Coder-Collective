

const cartBtn = document.getElementById('cartBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Show sidebar
cartBtn.addEventListener('click', () => {
  sidebar.style.right = '0';
  overlay.style.display = 'block';
});

// Hide sidebar
closeBtn.addEventListener('click', () => {
  sidebar.style.right = '-300px';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  sidebar.style.right = '-300px';
  overlay.style.display = 'none';
});

// Toggle nav links (hamburger menu)
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});











  



