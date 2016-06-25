;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
	  return (navigator.platform.indexOf("iPad") != -1);
	}

	var isiPhone = function(){
    return (
      (navigator.platform.indexOf("iPhone") != -1) || 
      (navigator.platform.indexOf("iPod") != -1)
    );
	}

	// Mobile Menu Clone ( Mobiles/Tablets )
	var mobileMenu = function() {
		if ( $(window).width() < 769 ) {
			$('html,body').addClass('overflow');

			if ( $('#mobile-menu').length < 1 ) {
				
				var clone = $('#primary-menu').clone().attr({
					id: 'mobile-menu-ul',
					class: ''
				});
				var cloneLogo = $('#logo').clone().attr({
					id : 'logo-mobile',
					class : ''
				});
				
				$('<div id="logo-mobile-wrap">').append(cloneLogo).insertBefore('#header-section');
				// $('#logo-mobile-wrap').append('<a href="#" id="mobile-menu-btn"><i class="ti-menu"></i></a>')
				$('#logo-mobile-wrap').append('<a href="#" class="js-nav-toggle nav-toggle nav-white " data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>');
				$('<div id="mobile-menu">').append(clone).insertBefore('#header-section');

				$('#header-section').hide();
				$('#logo-mobile-wrap').show();
			} else {
				$('#header-section').hide();
				$('#logo-mobile-wrap').show();
			}

		} else {

			$('#logo-mobile-wrap').hide();
			$('#header-section').show();
			$('html,body').removeClass('overflow');
			$('.js-nav-toggle').removeClass('active');
			if ( $('body').hasClass('mobile-menu-visible')) {
				$('body').removeClass('mobile-menu-visible');
			}
		}
	};


	// ScrollTop 
	var scrlTop =  function() {
		$('.gotop').click(function(event){
			$('html, body').animate({
		        scrollTop: 0
		    }, 500, 'easeInOutExpo');

		    event.preventDefault();
		    return false;
		});
	};

	// SmoothScroll
	var smoothScroll = function() {
		$('.smoothscroll').click(function(){

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 700, 'easeInOutExpo');
	    return false;
		});
	};


	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#mobile-menu, .js-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      $('body').removeClass('mobile-menu-visible');
              $('.js-nav-toggle').removeClass('active');
	    }
		});
	};


	// Mobile Button Click
	var mobileBtnClick = function() {
		$(document).on('click', '.js-nav-toggle', function(e){
			e.preventDefault();
			// mobile-menu-visible
			if ( $('body').hasClass('mobile-menu-visible') ) {
				$('body').removeClass('mobile-menu-visible');	
				$(this).removeClass('active');	
			} else {
				$('body').addClass('mobile-menu-visible');
				$(this).addClass('active');	
			}
			
		});
	};


	// Main Menu Superfish
	var mainMenu = function() {

		$('#primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Superfish Sub Menu Click ( Mobiles/Tablets )
	var mobileClickSubMenus = function() {

		$('body').on('click', '.sub-ddown', function(event) {
			event.preventDefault();
			var $this = $(this),
				li = $this.closest('li');
			li.find('> .sub-menu').slideToggle(200);
		});

	};

	// Window Resize
	var windowResize = function() {
		$(window).resize(function(){
			mobileMenu();
		});

	};

	// Window Scroll
	var windowScroll = function() {
		$(window).scroll(function() {

			var scrollPos = $(this).scrollTop();
			if ( $('body').hasClass('mobile-menu-visible') ) {
				$('body').removeClass('mobile-menu-visible');
				$('.js-nav-toggle').removeClass('active');
			}

		});
	};

	// Fast Click for ( Mobiles/Tablets )
	var mobileFastClick = function() {
		if ( isiPad() && isiPhone()) {
			FastClick.attach(document.body);
		}
	};

	// Easy Repsonsive Tabs
	var responsiveTabs = function(){
		
		$('#tab-feature').easyResponsiveTabs({
      type: 'default',
      width: 'auto', 
      fit: true, 
      inactive_bg: '',
      active_border_color: '',
      active_content_border_color: '',
      closed: 'accordion',
      tabidentify: 'hor_1'
            
    });
    $('#tab-feature-center').easyResponsiveTabs({
      type: 'default',
      width: 'auto',
      fit: true, 
      inactive_bg: '',
      active_border_color: '',
      active_content_border_color: '',
      closed: 'accordion', 
      tabidentify: 'hor_1' 
      
    });
    $('#tab-feature-vertical').easyResponsiveTabs({
      type: 'vertical',
      width: 'auto',
      fit: true,
      inactive_bg: '',
      active_border_color: '',
      active_content_border_color: '',
      closed: 'accordion',
      tabidentify: 'hor_1'
    });
	};


	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    smartSpeed: 500,
		    navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});
	};

	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: false,
		    dots: true,
		    smartSpeed: 500,
		    autoHeight: true
		});
	};
	
	// MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	};


	// Scroll Animations

	// Animate Feature
	var animateFeature = function() {
		if ( $('.feature-box').length > 0 ) {	
			$('.feature-box').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					// el.animate({opacity: 1} , 600 );
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	// Animate Works
	var animateWork = function() {
		if ( $('.work-box').length > 0 ) {
			$('.work-box').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					// el.animate({opacity: 1} , 600 );
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Works
	var animateFooter = function() {
				
		$('.footer-box').each(function( k ) {
			
			var el = $(this);
			
			setTimeout ( function () {
				// el.animate({opacity: 1} , 600 );
				el.addClass('fadeInUp animated');
			},  k * 200, 'easeInOutExpo' );
			
		});
	};

	
	// Waypoints 
	var featureWayPoint = function() {
		if ($('#features').length > 0 ) {
			$('#features').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateFeature , 200);
					
					$(this).addClass('animated');
						
				}
				// 95%
			} , { offset: '70%' } );
		}
	};

	var worksWayPoint = function() {
		if ($('#works').length > 0 ) {
			$('#works').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateWork , 200);
					
					$(this).addClass('animated');
						
				}
				// 95%
			} , { offset: '70%' } );
		}
	};

	var footerWayPoint = function() {
		if ( $('#footer').length > 0 ) {
			$('#footer').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateFooter , 200);
					
					$(this).addClass('animated');
						
				}
				// 95%
			} , { offset: '70%' } );
		}
	};

	var heroWayPoint = function() {
		if ( $('#hero').length > 0 ) {
			$('#hero').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					
					setTimeout(function(){
						$('.hero-animate-1').addClass('fadeInUp animated');
					}, 100);
					setTimeout(function(){
						$('.hero-animate-2').addClass('fadeInUp animated');
					}, 400);
					setTimeout(function(){
						$('.hero-animate-3').addClass('fadeInUp animated');
					}, 600);
					setTimeout(function(){
						$('.hero-animate-4').addClass('fadeInDown animated');
					}, 1000);
					
					$(this).addClass('animated');
						
				}
			} , { offset: '70%' } );
		}
	};

	var contentWayPoint = function() {

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {
				console.log($(this.element).addClass('fadeInUp animated'));
			}

		} , { offset: '70%' } );

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {
				console.log($(this.element).addClass('fadeInUp animated'));
			}

		} , { offset: '70%' } );

	};

	


	
	$(function(){

		mobileFastClick();
		responsiveTabs();
		mobileMenu();
		mainMenu();
		magnifPopup();
		mobileBtnClick();
		mobileClickSubMenus();
		mobileMenuOutsideClick();
		owlCrouselFeatureSlide();
		testimonialCarousel();
		windowResize();
		smoothScroll();
		windowScroll();
		scrlTop();

		heroWayPoint();
		featureWayPoint();
		worksWayPoint();
		footerWayPoint();
		contentWayPoint();


	});


}());