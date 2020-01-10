$(document).ready(function() {
 //
 // add your jQuery code here
	// hides/shows paragraphs when either button is clicked
	$("button").click(function() {
		$("p").hide(2000).show(2000);
	});

	$("button").click(function(){
		$("p").fadeIn().fadeOut();
	});

}); 
