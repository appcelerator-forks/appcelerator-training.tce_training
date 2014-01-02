var args = arguments[0] || {};

$.win1.addEventListener('click', function() {
    $.normal.blur();
    $.numeric.blur();
    $.web.blur();
    $.email.blur();
    $.password.blur();
});
