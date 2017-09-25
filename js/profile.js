$(document).ready(function(){
	$('.tab-title').each(function(){
		var $this = $(this);
		$this.click(function(){
			var _this = $(this);
			var target = _this.attr('data-value');
			$('.profile-content .active').removeClass('active');
			$('#'+target).addClass('active');
		});
	});
});