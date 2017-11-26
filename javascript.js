$(document).ready(smoothScroll(300));
function smoothScroll(duration) {
	//console.error('newTop');
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        var newTop = target.offset().top;
        if ($(".mobile-nav-toggle").css('display') != 'none') {
            $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
            newTop = newTop - 90;
        }
		console.log(newTop);
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: (newTop + 90)
            }, duration);
        }
    });
}