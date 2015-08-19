$(function() {
	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({
		triggerElement: "#opening"
	})
	.setTween("#opening", 0.3, {scale: 2.5})
	.addIndicators({name: "1 (duration: 0)"})
	.addTo(controller);
});