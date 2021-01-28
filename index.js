// window.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('#scrollbar').addEventListener('click', function() {
//         document.querySelector('#header_bottom').classList.toggle('is-active')
//     })
// })


// window.addEventListener('DOMContentLoaded', function() {
//     var mySwiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       hide: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     effect:'coverflow',
//   })
  
// })


// Открытие и закрытие пунктов меню с скроллбаром


// function openbox(id) {
//   display = document.getElementById(id).style.display;

//   if(display=='none'){
//      document.getElementById(id).style.display='block';
//   }else{
//      document.getElementById(id).style.display='none';
//   }

// }

// $(document).click( function(event){
// 	if( $(event.target).closest(".list").length ) 
// 	return;
// 	$(".list").slideUp("slow");
// 	event.stopPropagation();
// });
// $('.header-bottom__link').click( function() {
// 		$(this).siblings(".list").slideToggle("slow");
// 		return false;
//   });
  
//   $(document).click( function(event){
//     if( $(event.target).closest(".header-bottom__list-scrollbar").length ) 
//     return;
//     $(".header-bottom__list-scrollbar").slideUp("slow");
//     event.stopPropagation();
//   });
//   $('.header-bottom__link').click( function() {
//       $(this).siblings(".header-bottom__list-scrollbar").slideToggle("slow");
//       return false;
//     });

document.addEventListener('click', (e) => {
	console.log(e.target)

	if (!e.target.classList.contains('bottom-list__btn') || !e.target.classList.contains('dropdown')) {
		document.querySelectorAll('.bottom-list__item').forEach(el => {el.classList.remove('active');});
	}


	if (e.target.classList.contains('bottom-list__btn')) {
		e.target.closest('.bottom-list__item').classList.add('active');
		let isVisible = e.target.closest('.bottom-list__item').querySelector('.simplebar-vertical').style.visibility;
		if (isVisible == 'visible') {
			e.target.closest('.bottom-list__item').querySelector('.dropdown').style.height = '300px';
		} else {
			e.target.closest('.bottom-list__item').querySelector('.dropdown').style.height = 'auto';
		}
	}

	
});

document.querySelectorAll('.simplebar-content-wrapper').forEach(el => {
	console.log(el.style.height);
});