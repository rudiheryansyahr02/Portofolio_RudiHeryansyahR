let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

  // Tambahkan sedikit animasi saat toggle
  if (navbar.classList.contains('active')) {
    navbar.style.animation = 'slideDown 0.4s ease forwards';
  } else {
    navbar.style.animation = 'slideUp 0.4s ease forwards';
  }
};
