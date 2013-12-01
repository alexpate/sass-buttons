$( document ).ready(function() {
    $('#thecolours > ul > li').click(function() {

		var cols = new Array("flatpurple", "flatblue", "flataqua", "flatflashblue", "flatgreen", "flatyellow", "flatdarkgreen", "flatpink", "flatred", "flatorange", "flatgrey", "blue", "green", "red", "orange", "purple", "neutral", "yellow", "darkgreen", "black");

		for ( var i = 0; i < cols.length; i++ )
			{
			  if ( $('.demobtn').hasClass( cols[i] ) )
			  {
			    $('.demobtn').removeClass( cols[i] );
			    break;  
			  }
			}
		var colour = $(this).attr("class");
		$('.demobtn').addClass(colour);

	})


	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll >= 250) {
	        $(".colourbar").addClass("fixed");
	    }
	    else {
	    	$(".colourbar").removeClass("fixed");
	    }
	});

}); // End Document Ready