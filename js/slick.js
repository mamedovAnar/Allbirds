$ (function() {
    $('.multiple_items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                }
            }
        ]
    });    
})