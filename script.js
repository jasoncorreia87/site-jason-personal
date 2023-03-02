function clickMenu() {
    if (itens.style.display == 'block')
    {itens.style.display = 'none'
 } else { itens.style.display = 'block'}

}
  
function clickTag() {
 if (beneficios.style.display == 'block')
    {beneficios.style.display = 'none'
 } else { beneficios.style.display = 'block'}
}

function clickAjuda() {
 if (beneficios02.style.display == 'block')
    {beneficios02.style.display = 'none'
 } else { beneficios02.style.display = 'block'} 
}

function clickFisica() {
    if (textoav.style.display == 'block')
       {textoav.style.display = 'none'
    } else { textoav.style.display = 'block'} 
   }



var slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  var slides = document.getElementsByClassName("slider-wrapper")[0].getElementsByTagName("img");
  var dots = document.getElementsByClassName("slider-dot");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

var prevBtn = document.getElementsByClassName("slider-control-prev")[0];
var nextBtn = document.getElementsByClassName("slider-control-next")[0];

prevBtn.addEventListener("click", function() {
  showSlides(slideIndex - 1);
});

nextBtn.addEventListener("click", function() {
  showSlides(slideIndex + 1);
});


const calcularBtn = document.getElementById('calcular');
calcularBtn.addEventListener('click', calcularIMC);

function calcularIMC() {
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  
  if (peso === '' || altura === '') {
    alert('Por favor, preencha todos os campos');
    return;
  }
  
  const imc = peso / (altura * altura);
  const resultado = document.getElementById('resultado');
  
  if (imc < 18.5) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Isso indica que você está abaixo do peso.`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Isso indica que você está com um peso saudável.`;
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Isso indica que você está com sobrepeso.`;
  } else {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Isso indica que você está com obesidade.`;
  }
}
