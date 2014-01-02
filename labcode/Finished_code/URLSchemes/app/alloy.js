// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Globals.urlParser = function(url) {
    url = url.replace(/[Uu]rlschemes:\/\/\?/,"");
    return url.split('&');
};


if(OS_ANDROID) {
    Alloy.Globals.action = '';    
    var activity = Ti.Android.currentActivity;
    function doIt(e) {
        var args = activity.getIntent().getData();
        if(args && args != 'urlschemes://') {
            // parse the url string and arguments
            var parsedArgs = Alloy.Globals.urlParser(args);
            switch(parsedArgs[0]) {
                case 'maps':
                    Alloy.Globals.action = 'maps';
                break;
                case 'youtube':
                    Alloy.Globals.action = 'youtube';
                break;
            }
        }
    }           
    activity.addEventListener("start", doIt);
}
