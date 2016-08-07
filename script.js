$(document).ready(function(){
	$(".headshot").click(function(){
		$(".para").hide();
	});


	$(".project").hide();
	$(".projectlogo").click(function(){
		$(".project").show();
	});

	$(".contact").hide();
	$(".contactlogo").click(function(){
		$(".contact").show();
	});

});