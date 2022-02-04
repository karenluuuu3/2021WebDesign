// JavaScript Document

$(document).ready(function(){
	$(".box").eq(0).addClass("ch_bg");
	$(".content").each(function(index){ 
		$(".content").eq(index).css({"left":480*index, "top":-480*index}); 
	})
	
	$(".box").click(function(){
		var _index = $(this).index();
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		
		// CSS要加position才會work
		// 水平移動 方法二
		$(".content").each(function(index){
			$(".content").eq(index).animate({left:480*index-(480*_index)}, 1000);
		})
	});
});
	
	