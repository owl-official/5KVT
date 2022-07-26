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
        prevArrow: $(".arrow-perv"),
        nextArrow: $(".arrow-next"),
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
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        prevArrow: $(".slide_arrow_prev"),
        nextArrow: $(".slide_arrow_next"),
    });
});

$(document).ready(function () {
    $(".slider__inner").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $(".slide-prev"),
        nextArrow: $(".slide-next"),

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 871,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 601,
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

function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

//  Modal window
var modal = document.getElementById("myModal");

var btn = document.getElementById("map__button");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
