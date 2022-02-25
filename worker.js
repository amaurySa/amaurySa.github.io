onmessage = function() {
	for i in range(10){
		x = Math.random()*1000;
		y = Math.random()*1000;
		postMessage(x,y);
	}
}