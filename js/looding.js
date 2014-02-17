/*
|
| Jquery loading plugin - Looding 
| github.com/padiq
|
*/

(function ( $ ) {
 
    $.fn.looding = function( options ) {
	
        var settings = $.extend({
            theme: "standard",
			mask: true,
			background: "#444",
			color: "#fff",
			action: "open"
        }, options);
			
		if (settings.theme == 'standard')
		{
			// Action
			if (settings.action == 'close')
			{
				$('.looding_box').hide();
				$('.looding_mask').hide();
				return false;
			}
			
			// Mask option
			if (settings.mask == true)
			{
				var overlay = $('<div class="looding_mask"></div>').css({
				'background-color': "#444",
				'opacity': 0.7,
				'width':this.width(),
				'height':this.height(),
				'position':'absolute',
				'top':'0px',
				'left':'0px',
				'overflow': "hidden",
				'z-index':88888
				});
			
				// Append and call mask element
				this.append(overlay);
				$('.looding_mask').fadeIn(500);
			}
			
			// Set lood element
			this.append("<div class='looding_box'>Please wait..</div>");
			
			// Style set
			$('.looding_box').css({
				'position':'absolute',
				'top':this.height() / 2,
				'left': (this.width() / 2) - ( 100 / 2),
				'cursor': "pointer",
				'overflow': "hidden",
				'z-index':99999,
				'width':100,
				'color': "#fff"
			});
			
			// Show lood
			$('.looding_box').show();
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