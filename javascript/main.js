$(document).ready(function () {
    $(".slider__content").slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.slide-arrow-prev'),
        nextArrow: $('.slide-arrow-next'),
    });
});

$(document).ready(function () {
    $(".carousel__box").slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
});
