$('.main-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
});

$('.special-slider').slick({
    slidesToShow: 3,
    appendArrows: '.special-slider__nav'
});

$('.new-products-slider').slick({
    slidesToShow: 3,
    appendArrows: '.new-products-slider__nav'
});

$('.menu-category__item').click(function () {
   $(this).find('.menu-category-submenu').slideToggle();
});