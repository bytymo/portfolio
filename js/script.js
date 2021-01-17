const navbar = document.getElementById('navbar');

window.onscroll = function() {scrollfunction}

function scrollfunction(){
  if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
    navbar.classList.removeClass('top')
  }else {
    navbar.classList.addClass('top');
  }
}