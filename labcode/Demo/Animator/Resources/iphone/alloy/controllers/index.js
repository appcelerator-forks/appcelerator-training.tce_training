function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animator = Ti.UI.iOS.createAnimator({
        referenceView: $.win
    });
    var collision = Ti.UI.iOS.createCollisionBehavior();
    var gravity = Ti.UI.iOS.createGravityBehavior({
        gravityDirection: {
            x: 0,
            y: 1
        }
    });
    var blocks = [];
    for (var i = 0; 20 > i; i++) {
        blocks[i] = Alloy.createController("box").getView();
        $.win.add(blocks[i]);
        collision.addItem(blocks[i]);
        gravity.addItem(blocks[i]);
    }
    animator.addBehavior(collision);
    animator.addBehavior(gravity);
    $.win.addEventListener("open", function() {
        animator.startAnimator();
    });
    $.win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;