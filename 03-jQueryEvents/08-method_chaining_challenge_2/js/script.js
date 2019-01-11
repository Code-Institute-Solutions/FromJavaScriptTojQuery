$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	// removes class makeRed, adds class makeBorder on mouseenter
	$("button").mouseenter(function() {
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$("button").mouseleave(function() {
		$("button").removeClass("makeBorder").addClass("makeRed");
	});

	$("button").click(function() {
		$("p").slideToggle(2000);
	});
  
	// hides/shows paragraphs when either button is clicked
	$("button").click(function() {
		$("p").hide(2000).show(2000);
	});
}); 
