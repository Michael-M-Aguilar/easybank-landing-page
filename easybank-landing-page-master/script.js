const $hamburger = document.querySelector('#hamburger');
const $body = document.querySelector('#body');
const $header = document.querySelector('.header');
const $overlay = document.querySelector('.overlay');

$hamburger.addEventListener('click', function() {
  // console.log("Hamburger is clicked");
  if($header.classList.contains('open')) {
    $body.classList.remove("noscroll");
    $header.classList.remove('open')
    $overlay.classList.add("unseen");
    $overlay.classList.remove("seen");
  }
  else {
    $body.classList.add("noscroll");
    $header.classList.add('open')
    $overlay.classList.remove("unseen");
    $overlay.classList.add("seen");
  }
});
