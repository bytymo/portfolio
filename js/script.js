// Fade graphic and nav background

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

// Toggle menu button from hamburger to 'x'

const menuToggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  menu.classList.toggle('active')
})

// Close Hamburger Menu on section click

const selectedSections = document.querySelectorAll('.nav-item')

selectedSections.forEach((section) => {
  section.addEventListener('click', () => {
    menuToggle.classList.remove('active')
    menu.classList.remove('active')
  })
})
