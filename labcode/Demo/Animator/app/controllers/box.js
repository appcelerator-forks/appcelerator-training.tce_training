var args = arguments[0] || {};

var r = Math.round(Math.random() * 255);
var g = Math.round(Math.random() * 255);
var b = Math.round(Math.random() * 255);
var rgb = 'rgb(' + r +"," + g + "," + b + ")";
var WIDTH = Ti.Platform.displayCaps.platformWidth;
var HEIGHT = Ti.Platform.displayCaps.platformHeight;

$.box.backgroundColor = rgb;
$.box.top = Math.round(Math.random() * (HEIGHT - 25) + 25);
$.box.left = Math.round(Math.random() * (WIDTH - 25) + 25);
