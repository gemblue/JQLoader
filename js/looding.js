/*
|
| Jquery loading plugin - Looding 
| github.com/padiq
|
*/

var loader_content, lood_div, position;
var window_width = $( window ).width();
var window_height = $( window ).height();
var mid =  window_width / 2;
var lood_width = 220;

/*
Standart loading
*/
function standard_lood(config) 
{	
	/*
	Black screen effect
	*/
	
	if (config.with_mask == true)
	{
		lood_mask = "<div id='looding_mask'></div>";
		$('body').append(lood_mask);
		
		$('#looding_mask').css({'width':window_width,'height':window_height});
		$('#looding_mask').fadeIn(500);
	}
		
	/* 
	Load type 
	*/
	
	loader_content = "<img src='img/" + config.type + ".gif' />"; 
	 
	/*
	Create lood_div on body page
	*/
	
	lood_div = "<div id='looding_box'><div id='looding_content'>"+ loader_content + "</div></div>";
	
	$('#looding_box').remove();
	$('body').append(lood_div);
	
	/*
	Position
	*/

    switch (config.position) {
		case "bottom-right":
			$('#looding_box').css("bottom", "10px");
			$('#looding_box').css("right", "10px");
            break;
		case "bottom-left":
			$('#looding_box').css("bottom", "10px");
			$('#looding_box').css("left", "10px");
            break;
		case "center-screen":
			$('#looding_box').css("top", (window_height / 2));
			$('#looding_box').css('left', mid - (lood_width / 2));
            break;
        case "top-center":
			  $('#looding_box').css("top", "10px");
            $('#looding_box').css('left', mid - (lood_width / 2));
            break;
        case "top-right":
            $('#looding_box').css("top", "10px");
			$('#looding_box').css("right", "10px");
            break;
		case "top-left":
            $('#looding_box').css("top", "10px");
			$('#looding_box').css("left", "10px");
            break;
        default:
           
            break;
    }

	$('#looding_box').show();
}

/*
Nyankod.com style loading
*/
function nyan_lood(config)
{
	if (config.type == 'close')
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
	
	/*
	Embed div
	*/
	lood_div = "<div class='loading-nyan-bottom'><div class='loading-text-img'>Loading <img src='img/loading_bottom.gif'/></div></div>";
	$('body').append(lood_div);
	
	/*
	Set style
	*/
	$(".loading-nyan-bottom").css("background", config.color);
	$(".loading-nyan-bottom").css("opacity","1");
	
	/*
	Start loading
	*/
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
	
$('#looding_box').live('click', function() {
	$('#looding_box').hide();
	$('#looding_mask').hide();
});
