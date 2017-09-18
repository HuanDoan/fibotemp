$(document).ready(function(){
	$('.sliderCarousel').owlCarousel({
		loop: true,
		nav:false,
		autoplay: true,
		autoplayTimeout:3000,
		autoplayHoverPause: true,
		responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
});

$('.nav-item').each(function(){
	var $this = $(this);
	$this.click(function(){
		$('.grad-active').removeClass('grad-active');
		$(this).addClass('grad-active');
	});
});

$('#toggleSubmenu').click(function(){
	// $('#Submenu').addClass('animated '+'bounceIn');
	$('#Submenu').toggle();
});