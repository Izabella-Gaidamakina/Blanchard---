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


// Открытие и закрытие пунктов меню с скроллбаром


// function openbox(id) {
//   display = document.getElementById(id).style.display;

//   if(display=='none'){
//      document.getElementById(id).style.display='block';
//   }else{
//      document.getElementById(id).style.display='none';
//   }

// }

$(document).click( function(event){
	if( $(event.target).closest(".list").length ) 
	return;
	$(".list").slideUp("slow");
	event.stopPropagation();
});
$('.header_bottom-link').click( function() {
		$(this).siblings(".list").slideToggle("slow");
		return false;
  });
  
  $(document).click( function(event){
    if( $(event.target).closest(".list_scrollbar").length ) 
    return;
    $(".list_scrollbar").slideUp("slow");
    event.stopPropagation();
  });
  $('.header_bottom-link').click( function() {
      $(this).siblings(".list_scrollbar").slideToggle("slow");
      return false;
    });