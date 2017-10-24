$('.preview').each(function(){
	var target = $(this).find('p');
	limitCharacterShow(target, 50);
});

$("#MsText").scrollTop($("#MsText")[0].scrollHeight);

$('.dot-status').each(function(){
	var $this 	= $(this);
	var cls		= $this.attr('class');
	if (cls.indexOf("online") != -1) {
		$this.parent().append(' Online');
	}
	if (cls.indexOf("offline") != -1) {
		$this.parent().append(' Offline');
	}
});