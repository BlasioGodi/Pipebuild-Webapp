
//Owl Carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        startPosition: 3,
        loop: false, 
        rewind:true,
        margin: 10,
        responsiveClass: true,
        center: true,
        nav: true,
        dots: true,
        dotsEach: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
});


