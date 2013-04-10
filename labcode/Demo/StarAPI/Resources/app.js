(function() {
	var win = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});
	
	var StarRating = require('starrating');
	// need to instantiate Rating, supply the required
	// parameters, and add its view member to win
	win.add(new StarRating(5, 2.5).view);
	
	win.open();
})();
