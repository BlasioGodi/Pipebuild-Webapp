
//Owl Carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        initialSlide: 3,
        loop: true,
        margin: 10,
        responsiveClass: true,
        center: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
});


