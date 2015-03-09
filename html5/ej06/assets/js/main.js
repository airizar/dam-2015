(function(){
	console.log("Geolocation");
	console.log(navigator);
	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);
	});
})();