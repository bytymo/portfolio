// Fade graphic and nav background fade in/out

const checkpoint = 500

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint
    navOpacity = 0 + currentScroll / checkpoint
  } else {
    opacity = 0
    navOpacity = 1
  }
  document.querySelector('.glitch').style.opacity = opacity
  document.querySelector('.overlay').style.opacity = navOpacity
})

// Hide mobile menu on click outside of nav

document.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-trigger-icon')) return
  var button = document.getElementById('menu-button')
  var menu = document.getElementById('navbarPortfolio')
  if (button.getAttribute('aria-expanded') === 'true') {
    button.setAttribute('aria-expanded', false)
    button.classList.add('collapsed')
    menu.classList.remove('show')
  }
})
