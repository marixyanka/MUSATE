$(document).ready(function() {
    var RBStickyNav = $('#nav').offset().top;
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > RBStickyNav) {
            $('#nav').css("top","0");
            $('#nav').addClass('RBSticky');
        } else {
            $('#nav').removeClass('RBSticky');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});