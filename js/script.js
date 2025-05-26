$(function(){
//header
	function header_promo(){
		var top = $(document).scrollTop();
		if (top > 5) $('.wr-header_mm').addClass('fixed_mm');
		else $('.wr-header_mm').removeClass('fixed_mm');	
	}
	
	$(window).scroll(function() {
		header_promo();
	});	
	
//menu mobile
	$('.menu-tt_mm a').click(function(){
		$(this).parent().toggleClass('active');
		$('.wr-panel-mob_mm').toggleClass('active')
		$('.header-new_mm').toggleClass('active_mm')
		return false;
	});
	$('.menu-mobile_mm>ul>li.sub-mob_mm>a, .menu-mobile_mm>ul>li.sub-mob_mm>span').click(function(){
		$(this).toggleClass('active').next().toggle()
		return false
	});
	
//ask
	$('.head-item-ask').click(function(){
		$(this).toggleClass('active')
	});
	
//full text main
	$('.show-full a').click(function(){
		$(this).toggleClass('active').parent().prev().toggleClass('active')
		return false
	});
	
//cookie
	$('.but-cookie-mm a').click(function(){
		$(this).parents('.cookie-mm').hide()
		return false
	});

//tabs
	$('.tabs-tb').each(function(){
		$(this).find('.nav-tb div:eq(0), .nav-tb li:eq(0)').addClass('active');
		$(this).find('.nav-tb div, .nav-tb li').click(function () {
			var ind = $(this).index();
			$(this).parents('.tabs-tb').find('.cont-tb').find('.tab-tb:eq(' + ind + ')').show().addClass('active').siblings('.tab-tb:visible').hide().removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.nav-tb div, .nav-tb li').removeClass('active')
			return false;
		});
	});	
	
//reviews
	$('.slider-reviews-new').slick({
		dots: false,
		arrows:true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1220,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});	
	
	$('.slider-outside-reviews').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots:false,
		fade: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 999,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
			},
				{
					breakpoint: 767,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
				{
					breakpoint: 600,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
//states
	$('.slider-state-main').slick({
	  dots: false,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  responsive: [
		{
		  breakpoint: 999,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});
	
//slider clients	
	var swiper = new Swiper(".slider-clients", {
		loop: true,
		autoplay: {
			delay: 1,
			disableOnInteraction: false
		},
		slidesPerView: 10,
		speed: 5000,
		grabCursor: false,
		mousewheelControl: false,
		keyboardControl: false,
		breakpoints: {
			1900: {
				slidesPerView: 10
			},
			1800: {
				slidesPerView: 9
			},
			1600: {
				slidesPerView: 7
			},
			1500: {
				slidesPerView: 6
			},
			1300: {
				slidesPerView: 6
			},
			1100: {
				slidesPerView: 5
			},
			999: {
				slidesPerView: 4
			},
			767: {
				slidesPerView: 4
			},
			600: {
				slidesPerView: 3
			},
			480: {
				slidesPerView: 2
			},
			320: {
				slidesPerView: 2
			},
		},
	});
	
//mobile sliders
	$('.slider-function-main').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	$('.slider-tools-main').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	$('.slider-awards-full').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});	
	

	
	$('.slider-staff').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.slider-nav-tabs',
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	$('.slider-nav-tabs').slick({
		dots: false,
		arrows:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		
		mobileFirst: true,
	  asNavFor: '.slider-staff',
	  focusOnSelect: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			variableWidth: true
		  }
		}
		]
	});


});