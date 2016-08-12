$(document).ready(function(){
	
	// $(".headshot").click(function(){
	// 	$(".para").hide();
	// });

	// $(".headshot").hide();

	// $(".para").hide();

    $(".showsite").hide();
    $(".header").click(function(){
    	$(".showsite").show();
    });
	$(".project").hide();
	$(".projectlogo").click(function(){
		$(".project").show();
	});

	$(".contact").hide();
	$(".contactlogo").click(function(){
		$(".contact").show();
	});

	$(".skills").hide();
	$(".skillslogo").click(function(){
		$(".skills").show();
	});

});