var closeView = function() {
    $.overlay.hide();
    // remove the event listener on the window so that we can hit the
    // Back button again to close the app
    // existOnClose:true is required on the window for this to work
    $.win.removeEventListener('androidback', closeView);
};

$.win.addEventListener('androidback', closeView);

$.win.open();
