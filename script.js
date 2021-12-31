const $hamburger = document.querySelector('#hamburger');
const $close = document.querySelector("#close");
const $body = document.querySelector('#body');
const $header = document.querySelector('.header');
const $overlay = document.querySelector('.overlay');
const $menu = document.querySelector('#menu');

$hamburger.addEventListener('click', function() {
  if($header.classList.contains('open')) {
    $body.classList.remove("noscroll");
    $header.classList.remove('open')
    $overlay.classList.add("unseen");
    $overlay.classList.remove("seen");
    $close.classList.remove("unseen")
    $close.classList.add('seen');
  }
  else {
    $body.classList.add("noscroll");
    $header.classList.add('open')
    $overlay.classList.remove("unseen");
    $overlay.classList.add("seen");
    $close.classList.remove('unseen')
    $hamburger.classList.add("unseen");
    $menu.classList.remove("unseen");
    $menu.classList.add("seen");
  }
});

$close.addEventListener('click', function() {
  $close.classList.add('unseen');
  $close.classList.remove('seen');
  $hamburger.classList.remove('unseen')
  $hamburger.classList.add('seen');
  $overlay.classList.remove('seen');
  $overlay.classList.add('unseen');
  $header.classList.remove('open')
  $menu.classList.remove("seen");
  $menu.classList.add("unseen");
})
