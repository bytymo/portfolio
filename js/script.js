const navbar = document.getElementById('navbar')

window.onscroll = function() {
  window.pageYOffset > 600 ? navbar.classList.remove('top') : navbar.classList.add('top')
}