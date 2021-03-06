/* hide navbar on scroll down, show on scroll up */
let navbar = document.getElementById('navigation');
let scrollval = 0;
window.addEventListener('scroll', () => {
  if (scrollval > window.scrollY) {
    navbar.classList.remove('hide');
    navbar.classList.add('unhide');

  } else {
    navbar.classList.remove('unhide');
    navbar.classList.add('hide');
  }
  scrollval = window.scrollY;


});


/* borrowed code from https://tobiasahlin.com/moving-letters/#10 to animate letters on home page */

if (document.querySelector('.ml10 .letters')) {
  var textWrapper = document.querySelector('.ml10 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({
      loop: true
    })
    .add({
      targets: '.ml10 .letter',
      rotateY: [-90, 0],
      duration: 1800,
      delay: (el, i) => 85 * i
    }).add({
      targets: '.ml10',
      opacity: 0,
      duration: 1800,
      easing: "easeOutExpo",
      delay: 1000
    });

}

/* Enable tooltips  */
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


