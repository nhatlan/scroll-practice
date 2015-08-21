$(function(){
	// Init Scroll Magic 
	var controller = new ScrollMagic.Controller(); 
	// Opening Animation 
	var tweenTitle = TweenMax.to(".title-text", 0.2, 
					{
						'-webkit-filter':'blur(3px)'
					});
	//Build Title Scene 
	var titleScene = new ScrollMagic.Scene({
		triggerElements: "#title",
	})
	.setPin("#pin1")
	.setTween(tweenTitle)
	.addIndicators({name :"1 {duration:0}"})
	.addTo(controller); 

	//Test Scene 1 Animation
	var tweenScene1 = TweenMax.to(".scene1-text", 0.2, {scale: 2});

	//Build Scene1 
	var scene1 = new ScrollMagic.Scence({
		triggerElements: "#scene1",
		duration: 500
	})
	.setTween(tweenScene1)
	.addIndicators({name :"2 {duration:500}"})
	.addTo(controller); 
});
