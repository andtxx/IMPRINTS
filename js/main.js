$(function() {

	"use strict"

	// Прогресс скролла

	let windowHeight = $(window).height()

	let docHeight = $(document).height()

	let currentScroll = $(document).scrollTop()

	$(window).scroll(function() {
		currentScroll = $('html').scrollTop()
		let progress = (currentScroll / (docHeight - windowHeight)) * 100
		$('.progress').css('width', progress + '%')
	})



	// Меню

	$('.burger-btn').click(function () {
		$('.burger-btn').toggleClass('burger-btn__active')
		$('.menu').toggleClass('menu__show')
		$('body').toggleClass('hidescroll')
	})



	// Окно зписи

	// Окно

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	})

	// Выбор мастера

	$('.select__btn').click(function () {
		$('.options').toggleClass('options__show')
	})
	$('.options__ivan').click(function () {
		$('.select__btn span:nth-child(1)').css('opacity', '0')
		$('.select__btn span:nth-child(3)').css('opacity', '0')
		$('.select__btn span:nth-child(4)').css('opacity', '0')
		$('.select__btn span:nth-child(2)').css('opacity', '1')
	})
	$('.options__ana').click(function () {
		$('.select__btn span:nth-child(1)').css('opacity', '0')
		$('.select__btn span:nth-child(2)').css('opacity', '0')
		$('.select__btn span:nth-child(4)').css('opacity', '0')
		$('.select__btn span:nth-child(3)').css('opacity', '1')
	})
	$('.options__maria').click(function () {
		$('.select__btn span:nth-child(1)').css('opacity', '0')
		$('.select__btn span:nth-child(2)').css('opacity', '0')
		$('.select__btn span:nth-child(3)').css('opacity', '0')
		$('.select__btn span:nth-child(4)').css('opacity', '1')
	})



	// Слайдеры

	$('.slider').slick({
		dots: true,
		vertical: true,
		verticalSwiping: true,
		infinite: false
	})



	// Калькулятор

	// Выбор стиля

	$('.chooseStyle').click(function () {
		$('.chooseStyle__styles').toggleClass('chooseStyle__styles__show')
	})
	$('.chooseStyle label').click(function () {
		$('.chooseStyle__styles').removeClass('chooseStyle__styles__show')
	})
	$('.chooseStyle__styles__graphics').click(function () {
		$('.chooseStyle span:nth-child(1)').css('opacity', '0')
		$('.chooseStyle span:nth-child(3)').css('opacity', '0')
		$('.chooseStyle span:nth-child(4)').css('opacity', '0')
		$('.chooseStyle span:nth-child(2)').css('opacity', '1')
	})
	$('.chooseStyle__styles__realism').click(function () {
		$('.chooseStyle span:nth-child(1)').css('opacity', '0')
		$('.chooseStyle span:nth-child(2)').css('opacity', '0')
		$('.chooseStyle span:nth-child(4)').css('opacity', '0')
		$('.chooseStyle span:nth-child(3)').css('opacity', '1')
	})
	$('.chooseStyle__styles__minimalism').click(function () {
		$('.chooseStyle span:nth-child(1)').css('opacity', '0')
		$('.chooseStyle span:nth-child(2)').css('opacity', '0')
		$('.chooseStyle span:nth-child(3)').css('opacity', '0')
		$('.chooseStyle span:nth-child(4)').css('opacity', '1')
	})

	// Расчёт

	$('.calculate').click(function(){
		let style = $('input[name="styles"]:checked').val()
		let width = $('#enter-width').val()
		let length = $('#enter-length').val()
		let price = style * 50 * width * length
		if (price > 3000) {
			$('.tattooPrice').text(price + 'р')
		}
		else {
			$('.tattooPrice').text(3000 + 'р')
		}
	})



	// Плавная прокрутка наверх

	$('.up').click(function (){
		$('html').animate({scrollTop: 0}, {easing: "swing"}, 2000)
	})



	// Анимация при скролле

	let wow = new WOW(
		{
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 150,
			mobile: true,
			live: true,
			callback: function(box){},
			scrollContainer: null	
		}
	)
	wow.init()
	
	if (windowHeight < 500) {
		$('.wow').attr('data-wow-offset', '50')
	}



	// Адаптивность

	if ($(window).width() < 1400) {
		$('.wow').attr('data-wow-offset', '200')
		$('.footer__info, .footer__cross, .footer__contacts').attr('data-wow-offset', '50')
	}
	if ($(window).width() < 1100) {
		$('.wow').attr('data-wow-offset', '100')
		$('.footer__info, .footer__cross, .footer__contacts').attr('data-wow-offset', '40')
	}



	// Ввод телефона

	$('#phone').on('input', function() {
		$(this).val($(this).val().replace(/[A-Za-zA-Яа-я-Ёе]/, ''))
	}) 

})