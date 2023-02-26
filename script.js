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

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });
