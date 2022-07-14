$(document).ready(function () {
    $(".slider__content").slick({
        arrows: true,
        infinite: true,
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
    });
});

$(document).ready(function () {
    $(".advantage__box").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 4000,
                settings: "unslick",
            },

            {
                breakpoint: 601,
                settings: "unslick",
            },

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
