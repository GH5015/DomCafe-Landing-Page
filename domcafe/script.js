const link1 = document.getElementById('inicio');

link1.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
  });
});
const link2 = document.getElementById('about');

link2.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
  });
});
const link3 = document.getElementById('products');

link3.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
  });
});

const link4 = document.getElementById('contact');

link4.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
  });
});

const link5 = document.getElementById('inicio2');

link5.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
  });
});
const link6 = document.getElementById('about2');

link6.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
  });
});
const link7 = document.getElementById('products2');

link7.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
  });
});

const link8 = document.getElementById('contact2');

link8.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
  });
});

const send = document.getElementById('send');

send.addEventListener('click', function() {
    window.alert("Pergunta Enviada!")
});

const firstbutton = document.getElementById('button1');
const firstdiv = document.querySelector(".produto.f");
const firstp = document.querySelector(".descrição.f");

firstbutton.addEventListener('click', () => {
    if (firstp.style.display === 'none') {
        firstp.style.display = 'block';
        firstp.classList.add("animation");
        firstdiv.style.border = "2px solid";
        firstbutton.textContent = "Ocultar Descrição";
    } else {
        firstp.style.display = 'none';
        firstdiv.style.border = "none";
        firstbutton.textContent = "Ver Descrição";
}});

const secondbutton = document.getElementById('button2');
const seconddiv = document.querySelector(".produto.s");
const secondp = document.querySelector(".descrição.s");

secondbutton.addEventListener('click', () => {
    if (secondp.style.display === 'none') {
        secondp.style.display = 'block';
        secondp.classList.add("animation");
        seconddiv.style.border = "2px solid";
        secondbutton.textContent = "Ocultar Descrição";
    } else {
        secondp.style.display = 'none';
        seconddiv.style.border = "none";
        secondbutton.textContent = "Ver Descrição";
}});

const thirdbutton = document.getElementById('button3');
const thirddiv = document.querySelector(".produto.t");
const thirdp = document.querySelector(".descrição.t");

thirdbutton.addEventListener('click', () => {
    if (thirdp.style.display === 'none') {
        thirdp.style.display = 'block';
        thirdp.classList.add("animation");
        thirddiv.style.border = "2px solid";
        thirdbutton.textContent = "Ocultar Descrição";
    } else {
        thirdp.style.display = 'none';
        thirddiv.style.border = "none";
        thirdbutton.textContent = "Ver Descrição";
}});