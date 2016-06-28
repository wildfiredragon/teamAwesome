
/* only apply jQuery after the document is ready */
$(document).ready(function (){

	/* detect window scroll events */
	$(window).scroll(function (){
		/* detect if the user is at the top of the page...  
		
		note: scrollTop() determines the position of the scrollbar, for example:
			$(window).scrollTop()
		returns how many pixels the scroll bar has been scrolled,
			0 would be a scrollbar at the top of the page
			200 would be scrolled down 200 pixels, etc
			
		in this example, we test for when the user has scrolled
		far enough to get past he header, which is 100 px tall
				
		see online notes: https://api.jquery.com/scrollTop/
		*/
		$heightOfHeader = 100;
		if($(window).scrollTop() <= $heightOfHeader) {
			//
			$("span").append("TOP OF PAGE");
			
			/*
			*************************************************
			CHALLENGE 2: (do this one AFTER you do the challenge further below)
				use jquery here to return
				the nav to its initial state
			*************************************************
			*/
			$("nav").css("position","static");
			/*$("nav").css("float","left");*/
			
			
		} else {
		/* ...or if the user has scrolled away from the top */
			$("span").append("Not top of page");
			
			/*
			*************************************************
			CHALLENGE 1:
				use jquery here to fix the position 
				of the nav to the top left of the browser						
			*************************************************
			*/
			$("nav").css("position","fixed");
			$("nav").css("top","0px");
			$("nav").css("left","0px");
		}
	});//end of $(window).scroll()

});//end of $(document).ready() 