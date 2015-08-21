$(function(){
	// Init Scroll Magic 
	var controller = new ScrollMagic.Controller(); 
	// Opening Animation 
	var tween = TweenMax.to(".opening-text", 0.2, 
					{
						'-webkit-filter':'blur(3px)'
					});
	//Build Open Scene 
	var titleScene = new ScrollMagic.Scene({
		triggerElements: "#title",
		duration: 500
	})
	.setPin("#pin1")
	.setClassToggle("#title", "title")
	.setTween(tween)
	.addIndicators({name :"1 {duration:0}"})
	.addTo(controller); 

	var scene1 = new ScrollMagic.Scence({
		triggerElements: "#scene1",
		duration: 500
	})
	.setClassToggle("#scene1", "scene1")
	.addIndicators({name :"2 {duration:500}"})
	.addTo(controller); 
});
