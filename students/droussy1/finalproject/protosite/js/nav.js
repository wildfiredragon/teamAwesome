$(document).ready(function(){
	
	// accordion side nav
	$("#nav > li > a").on("click", function(e){
		if($(this).parent().has("ul")) {
			e.preventDefault();
		}
	
		if(!$(this).hasClass("open")) {
		// hide any open menus and remove all other classes
			$("#nav li ul").slideUp(350);
			$("#nav li a").removeClass("open");

		// open our new menu and add the open class
			$(this).next("ul").slideDown(350);
			$(this).addClass("open");
		}

		else if($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(this).next("ul").slideUp(350);
		}
	});
  
	// scrolling nav - from CSS Tricks - https://css-tricks.com/scrollfollow-sidebar/
	$(function() {
		var $sidebar   = $("#side-nav"), 
			$window    = $(window),
			offset     = $sidebar.offset(),
			topPadding = 230;
			
		$window.scroll(function() {
			if ($window.scrollTop() > offset.top) {
				$sidebar.stop().animate({
					marginTop: $window.scrollTop() - offset.top + topPadding
				});
			} else {
				$sidebar.stop().animate({
					marginTop: 92
				});
			}
		});
	});
});