
iniciarAnimacao();

function toggleVisibility() {
  const img1 = document.getElementById('img-piscar1');
  const img2 = document.getElementById('img-piscar2');
  const img3 = document.getElementById('img-piscar3');
  const img4 = document.getElementById('img-piscar4');

  img1.style.opacity = img1.style.opacity === '0' ? '1' : '0';
  img2.style.opacity = img2.style.opacity === '0' ? '1' : '0';
  img3.style.opacity = img3.style.opacity === '0' ? '1' : '0';
  img4.style.opacity = img4.style.opacity === '0' ? '1' : '0';
}

function iniciarAnimacao() {
  setInterval(toggleVisibility, 500);
}

document.addEventListener("mousemove", parallax);

function parallax(event) {
  this.querySelectorAll(".mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    if (shift.alt !== 'esquerda') {
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    } else {
      shift.style.transform = `translateX(${x}px) translateY(${y}px) scaleX(-1)`;
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

$('.scrollbar').on('scroll', function () {
  var topWindow = $(this).scrollTop();
  topWindow = topWindow * 3;
  var containerHeight = $(this).height();
  var contentHeight = $('.force-overflow').height();
  var position = (topWindow / (contentHeight - containerHeight));
  position = 1 - position;

  $('#divScrollArrow').css('opacity', position);
});

$('.scrollbar').on('scroll', function() {
  var home = document.getElementById('home');
  var sobre = document.getElementById('sobre');
  var projetos = document.getElementById('projetos');
  var contatos = document.getElementById('contatos');

  var homeSection = document.getElementById('Home');
  var sobreSection = document.getElementById('Sobre');
  var projetosSection = document.getElementById('sectionProjetos');
  var contatosSection = document.getElementById('divFleareon');

  var homeRect = homeSection.getBoundingClientRect();
  var sobreRect = sobreSection.getBoundingClientRect();
  var projetosRect = projetosSection.getBoundingClientRect();
  var contatosRect = contatosSection.getBoundingClientRect();

  var scrollPosition = $(this).scrollTop();
  var maxScroll = $('.scrollbar')[0].scrollHeight - $('.scrollbar').outerHeight();

  if (scrollPosition >= homeRect.top && scrollPosition < sobreRect.bottom) {
      home.classList.add('selected');
      sobre.classList.remove('selected');
      projetos.classList.remove('selected');
      contatos.classList.remove('selected');
  } else if (scrollPosition >= sobreRect.top && scrollPosition < projetosRect.bottom) {
      home.classList.remove('selected');
      sobre.classList.add('selected');
      projetos.classList.remove('selected');
      contatos.classList.remove('selected');
  } else if (scrollPosition >= projetosRect.top && scrollPosition < contatosRect.bottom) {
      home.classList.remove('selected');
      sobre.classList.remove('selected');
      projetos.classList.add('selected');
      contatos.classList.remove('selected');
  } else if (scrollPosition === maxScroll) {
      home.classList.remove('selected');
      sobre.classList.remove('selected');
      projetos.classList.remove('selected');
      contatos.classList.add('selected');
  }
});