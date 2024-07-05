// Navbar
let navbar = document.querySelector('nav'),
  navMenu = document.getElementById('menu');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.querySelector('.myContainer').classList.add('scrolled', 'boxShadow');
  } else {
    if (!navbar.querySelector('menu').classList.contains('active')) {
      navbar.querySelector('.myContainer').classList.remove('scrolled', 'boxShadow');
    }
  }
});

navMenu.addEventListener('click', () => {
  navbar.querySelector('menu').classList.toggle('active');
  if (!navbar.querySelector('.myContainer').classList.contains('scrolled') && navbar.querySelector('menu').classList.contains('active')) {
    navbar.querySelector('.myContainer').classList.add('scrolled', 'boxShadow');
  }
  if (!navbar.querySelector('.myContainer').classList.contains('scrolled') && !navbar.querySelector('menu').classList.contains('active')) {
    navbar.querySelector('.myContainer').classList.remove('scrolled', 'boxShadow');
  }
});

// Copyright current year
let currentYear = new Date().getFullYear();
document.querySelector('.copyright').querySelector('span').innerText = currentYear;