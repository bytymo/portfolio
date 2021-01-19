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