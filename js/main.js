$(document).ready(function(){
	$("#header .bird img").hover(
		function() {
			$(this).attr("src", $(this).attr("src").replace('-bird','-band') );
		},
		function() {
			$(this).attr("src", $(this).attr("src").replace('-band','-bird') );
		}
	);
	
	$("a.d_link, a.g_link, a.h_link, a.m_link, a.o_link").live("click", function() {
		var type = $(this).attr("class").substr(0,1);
		var target = $(this).attr("href");
		
		$.get(target, function(data) {
			var content = $("#content");
			content.slideUp(function() {
				var bg = $("body").css("background-image");
				bg = bg.replace(/tree-[dghmo]/, "tree-" + type);
				$("body").css("background-image", bg).css("background-color", typeToBgColor(type));
				content.attr("class",type).html(data).slideDown();
			});
		});
		
		return false;
	});

	/* Load in the initial page */
	$("#homelink").click();
});

function typeToBgColor(type) {
	switch(type) {
		case 'd':
		return "#f9fbf8";
		break;
		
		case 'g':
		return "#fdf0f0";
		break;
		
		case 'h':
		return "#fbfaf1";
		break;
		
		case 'm':
		return "#fbf8fd";
		break;
		
		case 'o':
		return "#f8feff";
		break;
		
		default:
		return "#cccccc";
	}
}