var myEarthElement = document.getElementById('my-earth'),
	updateLocation,
	radius,
	speed,
	radian;

radius = 200;
speed = 1;
radian = 0;
updateLocation = function() {
	radian = radian - speed*0.1;
	myEarthElement.style.left = "-webkit-calc(50% + " + radius*Math.cos(radian) + "px - 25px)";
	myEarthElement.style.top = "-webkit-calc(50% + " + radius*Math.sin(radian) + "px - 25px)";
	myEarthElement.style.transform = "rotate(" + radian*100 + "deg)";
};

setInterval(updateLocation, 50);