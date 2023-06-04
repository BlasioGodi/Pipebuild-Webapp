(function ($) {
    'use strict';

    /* Projects Gallery  */
    $('.projects-gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 300,
            tLoading: 'Loading image #%curr%...',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }

        });
    });

})(jQuery);