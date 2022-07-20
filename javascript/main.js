$(document).ready(function () {
    $(".slider__content").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $(".slide-arrow-prev"),
        nextArrow: $(".slide-arrow-next"),
    });
});

$(document).ready(function () {
    $(".carousel__box").slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $(".advantage__box").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $(".reviews__slider").slick({
        adaptiveWidth: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        prevArrow: $(".slide_arrow_prev"),
        nextArrow: $(".slide_arrow_next"),
    });
});
