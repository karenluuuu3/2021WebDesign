// JavaScript Document

$(document).ready(function(){
	$(".box").click(function(){
		// 要控制的元素
		// 1000 : 速度，一秒
		// $(".content").fadeIn(1000);
		
		// 漸入效果切換
		$(".content").fadeToggle();
		// 其他效果 : fast, slow, show, hide, fadeTo(指定特定透明度), slideUp, slideDown, slideToggle
		
		// this : 事件的主要元素
		if($(this).hasClass("ch_bg")){
			$(this).removeClass("ch_bg");
		}
		else{
			$(this).addClass("ch_bg");
		}
	});
});