window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#scrollbar').addEventListener('click', function() {
        document.querySelector('#header_bottom').classList.toggle('is-active')
    })
})


window.addEventListener('DOMContentLoaded', function() {
    var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      hide: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    effect:'coverflow',
  })
  
})