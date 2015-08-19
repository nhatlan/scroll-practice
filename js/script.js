$(function(){

	// Init Controller
		var scrollMagicController = new ScrollMagic.Controller(); 

// 	// Add animation 
// 	var tween = TweenMax.to('#opening', 0.5, {
//     backgroundColor: 'rgb(255, 39, 46)',
//     scale: 1,
//     rotation: 20
// });
	//Create Scene 
		var scene = new ScrollMagic.Scene({
    triggerElement: '#opening',
  })
	.setTween(".blur", {scale: 2})
	.addTo(scrollMagicController)

	  // Add debug indicators fixed on right side
   	scene.addIndicators();
});