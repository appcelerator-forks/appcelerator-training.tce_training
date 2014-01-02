function setLayout() {
	if(Ti.App.Properties.getBool('rtl_preference')===true) {
		$.fugitiveImage.right = 10;
		$.fugitiveImage.left = null;
		$.vitalsview.right = 110;
		$.vitalsview.left = 10;
	} else {
		$.fugitiveImage.left = 10;
		$.fugitiveImage.right = null;
		$.vitalsview.left = 110;
		$.vitalsview.right = 10;
	}
    $.fuginame.font = { textStyle: Ti.UI.TEXT_STYLE_HEADLINE };
    $.fugidetails.font = { textStyle: Ti.UI.TEXT_STYLE_BODY };
}

Ti.App.addEventListener('resume', function() {
	setLayout();
});

setLayout();

$.index.open();
