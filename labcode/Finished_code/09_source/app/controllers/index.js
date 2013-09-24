function doClick(e) {  
	var action = e.source.action || '';
	if(OS_IOS) {
		if(Ti.Platform.canOpenURL('Urlschemes://')) {
			Ti.Platform.openURL('Urlschemes://?'+action);
		} else {
			alert('You must install the Target app first');
		}
	} else {
		var didItWork = Ti.Platform.openURL('urlschemes://?'+action);
		if(!didItWork) {
			alert('You need to install the Target app');
			// in a live app, you'd want to provide a link to or open the Market
			// such as Ti.Platform.openURL('market://details?id=com.company.yourapp');
		}
	}
}

$.index.open();
