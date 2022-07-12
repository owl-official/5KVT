$(document).ready(function () {
    $(".slider__content").slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: $('.slick__prev'),
        nextArrow: $('.slick__next'),
    });
});
