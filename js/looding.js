/*
|
| Jquery loading plugin - Looding 
| github.com/padiq
|
*/

(function ( $ ) {
 
	var lood_div;
	var window_width = $( window ).width();
	var window_height = $( window ).height();
	var mid =  window_width / 2;
	var lood_width = 220;
	
    $.fn.looding = function( options ) {
	
        var settings = $.extend({
            theme: "standard",
			mask: true,
			action: "open"
        }, options);
	
		if (settings.theme == 'standard')
		{
			// Action
			if (settings.action == 'close')
			{
				$('#looding_box').hide();
				$('#looding_mask').hide();
				return false;
			}
			
			// Mask option
			if (settings.mask == true)
			{
				// Set element
				lood_mask = "<div id='looding_mask'></div>";
				
				// Append mask element
				$('body').append(lood_mask);
				
				// Call mask
				$('#looding_mask').css({'width':window_width,'height':window_height});
				$('#looding_mask').fadeIn(500);
			}
			
			// Set lood element
			lood_div = "<div id='looding_box'><div id='looding_content'><img src='img/type-2.gif' /></div></div>";
			$('body').append(lood_div);
			
			// Position
			$('#looding_box').css("top", (window_height / 2));
			$('#looding_box').css('left', mid - (lood_width / 2));
					
			// Show lood
			$('#looding_box').show();
		}
		else if (settings.theme == 'nyankod')
		{
			if (settings.action == 'close')
			{
				$(".loading-nyan-bottom").animate(
					{ opacity: 0 }, {
						duration: 500,
						complete: function() { 	
						}
					}
				);
				setTimeout(function() {
					$(".loading-nyan-bottom").animate(
						{ left: -window_width }, {
							duration: 100,
							easing: 'easeInQuad',
							complete: function() { 
								$(".loading-text-img").hide();
							}
						}
					);
				}, 500);
				
				return true;
			}
			else
			{
				// Set element
				lood_div = "<div class='loading-nyan-bottom'><div class='loading-text-img'>Please wait..</div></div>";
				$('body').append(lood_div);
				
				// Set style
				$(".loading-nyan-bottom").css("background", "#444");
				$(".loading-nyan-bottom").css("opacity","1");
				
				// Start
				$(".loading-nyan-bottom").animate(
					{ left: 0 }, {
						duration: 1000,
						easing: 'easeInQuad',
						complete: function() { 
							$(".loading-text-img").fadeIn("slow");
						}
					}
				);	
				
				return false;	
			}
		}
		else
		{
			alert('Theme not found or defined');
		}
    };
	
}( jQuery ));