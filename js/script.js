$(function(){
	// Init Scroll Magic 
	var controller = new ScrollMagic.Controller(); 
	// Opening Animation 
	var tweenTitle = TweenMax.to(".title-text", 1, 
					{
						'-webkit-filter':'blur(3px)'
					});

	//Build Title Scene 
	var scene = new ScrollMagic.Scene({
		triggerElement: "#title-trigger", 
		triggerHook: 1,
		duration: 200
	})
	.setClassToggle("div#background", "title")
	.setTween(tweenTitle)
	.addIndicators({name :"1 {duration:0}"})
	.addTo(controller); 

	//Build Scene1 
	var scene = new ScrollMagic.Scene({
		triggerElement: "#scene1-trigger"
	})
	.setClassToggle("div#background", "scene1")
	.addIndicators({name :"2 {duration:500}"})
	.addTo(controller); 

	//Build Scene 2
	var scene = new ScrollMagic.Scene({
		triggerElement: "#scene2-trigger"
	})
	.setClassToggle("div#background", "scene2")
	.addIndicators({name :"3 {duration:500}"})
	.addTo(controller); 
});
