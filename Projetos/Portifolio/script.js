
iniciarAnimacao();

function toggleVisibility() {
  
let imgPiscar = document.getElementById('img-piscar');
imgPiscar.style.visibility = imgPiscar.style.visibility === 'hidden' ? 'visible' : 'hidden';
}

function iniciarAnimacao() {
  
  setInterval(toggleVisibility, 200);
}

$(document).ready(function() {
  var previousScroll = 0;
  var d = 0;
  var s = 0;

  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > previousScroll) {
      d = s - 1;
    } else {
      d = s + 1;
    }

    $(".parallax").css("background-position-y", d);
    previousScroll = currentScroll;
    s = d;
  });
});