const navbar = document.getElementById('navbar');

window.onscroll = function() {
  window.pageYOffset > 600 ? navbar.classList.remove('top') : navbar.classList.add('top');
}

const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
})

function removeActive() {
  menuToggle.classList.remove('active');
  menu.classList.remove('active');
}