$(function () {

	$('.blog-slider__items').slick({
		dots: true,
	})

	$('.menu__btn, .menu a').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});

	var mixer = mixitup('.gallery__content');
});

window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu__list'),
		img = document.querySelector('.header__bgover');

	// menu scroll
	menu.addEventListener('click', (event) => {
		event.preventDefault();
		let target = event.target;

		if (target.tagName === 'A') {
			let idItem = target.getAttribute('href');
			stepToBlock(idItem);
		}

		function stepToBlock(item) {
			document.querySelector(item).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}

	});


	// background menu
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 100) {
			img.style.height = '100px';
		} else {
			img.style.height = '';
		}
	})
});