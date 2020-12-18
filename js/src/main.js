new WOW().init();

var   body = $('body'),
        scroll = {
            mousescrollstep: 15,
            cursorcolor: "#3C3F50",
            cursorwidth: "10px",
            cursorborder: "none",
            horizrailenabled: false,
            cursoropacitymin: 1
        };

body.niceScroll(scroll);

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});