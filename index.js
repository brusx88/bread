'use strict'

var menu = document.querySelector('.hamburger');
var hamb = document.querySelector('.menu');

menu.onclick = function(evt) {
  evt.preventDefault();
  hamb.classList.add('menu--active')
}

hamb.onclick = function() {
  hamb.classList.remove('menu--active')
}
