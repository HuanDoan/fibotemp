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
	        768:{
	            items:2
	        },
	        991:{
	            items:2
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

$('.dropdown').each(function(){
	var _this = $(this);
	var dest = _this.attr('dest');
	_this.click(function(){
		var $this = $(this);
		$this.find('#'+dest).slideDown();
		$(document).mouseup(function(e) 
		{
		    var container = $('#'+dest);
		    if (!container.is(e.target) && container.has(e.target).length === 0) 
		    {
		        container.slideUp();
		    }
		});
	});
});