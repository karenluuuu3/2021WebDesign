// JavaScript Document

$(document).ready(function(){
	$(".box").eq(0).addClass("ch_bg");
	$(".content").eq(0).show();
	
	$(".box").click(function(){
		var _index = $(this).index();
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		
		// CSS要加position才會work
		// 水平移動 方法一
		var left_s = 480 * _index * (-1);
		$(".content").animate({left:left_s}, 1000);
	});
});