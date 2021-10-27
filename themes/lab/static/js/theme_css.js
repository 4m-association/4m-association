function createCookie(name, value, days) {
    "use strict";
    if (days) {
        var date = new Date();
        if (days === "infinity") {
            date.setTime(2147483647000);
        }
        else {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        }
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    "use strict";
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    "use strict";
    createCookie(name, "", -1);
}

var cookie_name = location.origin + '.css_theme';

$(function() {
    "use strict";
    var css_path = $($('#choose-css-theme .default')[0]).attr('href');
    if (readCookie(cookie_name)) {
        css_path = readCookie(cookie_name);
    }
    $('#choose-css-theme li a').removeClass('selected');
    $('#choose-css-theme li a[href="' + css_path + '"]').addClass('selected');
    $('head #selected-css').attr("href", css_path);

    $('#choose-css-theme li a').on('click', function(e) {
        e.preventDefault();
        $('#choose-css-theme li a').removeClass('selected');
        $(this).addClass('selected');
        css_path = $(this).attr('href');
        createCookie(cookie_name, css_path, 'infinity');
        $('head #selected-css').attr("href", css_path);
    });
});
