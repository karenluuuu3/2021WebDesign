// Java Script
//$(document).ready(function(){
//	
//});

$(document).ready(function(){
		$(".thevideo").hoverPlay();
	});
	
	$(".thevideo").hoverPlay({
		// defaults
		playDelay:350,
		pauseDelay:0
	});

	$(".thevideo").hoverPlay({
		callbacks: {
			play:function(el, video){
				video.play();
				el.addClass('hoverPlay');
			},
			pause:function(el, video) {
				video.pause();
				el.removeClass('hoverPlay');
			},
			click:function(el, video, e){
				e.preventDefault();
			},
		}
	});

