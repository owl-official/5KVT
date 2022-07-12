$(document).ready(function () {
    $(".slider__content").slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: $('.slick__prev'),
        nextArrow: $('.slick__next'),
    });
});

// $(document).ready(function () {
//     $(".product__box").slick({
//         arrows: true,
//         infinite: true,
//         slidesToShow: 4,
//         slidesToSscroll: 4,
//     });
// });
