$(function() {
   
   $(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

   $('.blog-slider__items').slick({
      dots:true,
   })

   $('.menu__btn, .menu a').on('click', function(){ 
      $('.menu__list').toggleClass('menu__list--active');
   });
   
   var mixer = mixitup('.gallery__content');
});