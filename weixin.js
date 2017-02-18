$(function(){
	
   $(".tx").swipeUp(function(){//swipeLeft, swipeRight, swipeUp, swipeDown手指滑动的方向事件
   	
 
   	 if($(this).index() ==0){//如果到达最后一个的时候
   	 	
   	 	$(this).on("webkitAnimationEnd",function(){//动画完成后触发\
   	 		$(this).find(".warp").addClass("hide");
   	 		$(".tx").eq(3).find(".warp").removeClass("hide");
   	 		$(this).off("webkitAnimationEnd");//移除事件
   	 	});
   	 	$(this).addClass("ani").removeClass("arm");
   	 	$(".tx").eq(3).removeClass("ani").addClass("arm");
   	 	
   	 }else{
   	 	$(this).on("webkitAnimationEnd",function(){
   	 		$(this).find(".warp").addClass("hide");
   	 		$(this).prev().find(".warp").removeClass("hide");
   	 		$(this).off("webkitAnimationEnd");
   	 	});
   	 	$(this).removeClass("arm").addClass("ani").prev().addClass("arm");
   	 }
   	  
   })


})
