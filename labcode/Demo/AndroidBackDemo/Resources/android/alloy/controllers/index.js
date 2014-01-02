function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "red",
        title: "AndroidBackDemo",
        exitOnClose: true,
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.winlabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Tap the Android Back button to close app",
        font: {
            fontWeight: "bold",
            fontSize: 20
        },
        left: 10,
        right: 10,
        id: "winlabel"
    });
    $.__views.win.add($.__views.winlabel);
    $.__views.overlay = Ti.UI.createView({
        width: "90%",
        height: "90%",
        backgroundColor: "white",
        id: "overlay"
    });
    $.__views.win.add($.__views.overlay);
    $.__views.viewlabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Tap the Android Back button to close this white View and show the underlying red Window",
        font: {
            fontWeight: "bold",
            fontSize: 20
        },
        left: 10,
        right: 10,
        id: "viewlabel"
    });
    $.__views.overlay.add($.__views.viewlabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var closeView = function() {
        $.overlay.hide();
        $.win.removeEventListener("androidback", closeView);
    };
    $.win.addEventListener("androidback", closeView);
    $.win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;