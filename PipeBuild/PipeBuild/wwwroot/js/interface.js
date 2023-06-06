(function ($) {
    'use strict';

    /* Projects Gallery  */
    $('.projects-gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 300,
            tLoading: 'Loading image #%curr%...',
            tCounter: '<span class="mfp-counter">%curr% / %total%</span>',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });
    });

/* Affix Desktop */
	navbarDesktop.affix({
		offset: {
			top: 200
		}
	});

	navbarDesktop.on('affix.bs.affix', function () {
		if (!navbarDesktop.hasClass('affix')) {
			navbarDesktop.addClass('animated slideInDown');
		}
	});

	navbarDesktop.on('affix-top.bs.affix', function () {
		navbarDesktop.removeClass('animated slideInDown');
		$('.navbar-collapse').collapse('hide');
	});


/* Affix Mobile  */
	navbarMobile.affix({
		offset: {
			top: 1
		}
	});

	navbarMobile.on('affix.bs.affix', function () {
		if (!navbarMobile.hasClass('affix')) {
			navbarMobile.addClass('animated slideInDown');
		}
	});

	navbarMobile.on('affixed-top.bs.affix', function () {
		navbarMobile.removeClass('animated slideInDown');

	});

	$('.navbar-nav-mobile li a[href="#"]').on('click', function () {
		$(this).closest('li').toggleClass('current');
		$(this).closest('li').find('ul').slideToggle(200);
		return false;
	});
})(jQuery);