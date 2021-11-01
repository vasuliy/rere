$(document).ready(() => {
    $('.logo-link, .menu-link').click(function() {
        const id = $(this).attr('href');
        const offset = $(id).offset().top;
        $('html').animate({
            scrollTop: offset
        }, 1000);
    });
});