$('.main-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
});

$('.special-slider').slick({
    slidesToShow: 3,
    appendArrows: '.special-slider__nav',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.new-products-slider').slick({
    slidesToShow: 3,
    appendArrows: '.new-products-slider__nav',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.menu-category__item').click(function () {
   $(this).find('.menu-category-submenu').slideToggle();
});

$('.btn-burger').click(function () {
   $(this).toggleClass('click');
   $('.mobile-menu').fadeToggle();
});