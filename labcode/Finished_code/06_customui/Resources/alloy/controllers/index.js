function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.checkbox = Alloy.createWidget("checkbox", "widget", {
        id: "checkbox",
        color: "red",
        message: "Click to check/uncheck"
    });
    $.__views.checkbox.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.checkbox.init(function(state) {
        alert("The box is " + (state ? "checked" : "unchecked"));
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;