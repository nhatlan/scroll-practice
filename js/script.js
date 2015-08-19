jQuery(document).ready(function($) {
	$('article').css("background-color", "yellow");

	// Init Controller
		var scrollMagicController = new ScrollMagic(); 
	// Create Animation 
		var tween = TweenMax.to('#blur', 0.5,{
			backgroundColor: 'rgb(255, 39, 46)',
		});
	//Create Scene 
		var scene = new ScrollScene({
			triggerElement: '#opening', 
			offset: 100
		})
	.setTween(tween)
	.addTo(scrollMagicController); 

	  // Add debug indicators fixed on right side
   	scene.addIndicators();
});