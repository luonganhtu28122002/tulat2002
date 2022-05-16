$(document).ready(function(){
    $(".image-slider").slick({
        slidesToShow: 3,
        prevArrow:
            "<button type='button' class='slick-prev slick-arrow'><ion-icon name=\"arrow-back-outline\"></ion-icon></button>",
        nextArrow:
            "<button type='button' class='slick-next slick-arrow'><ion-icon name=\"arrow-forward-outline\"></ion-icon></button>",
        dots: true
    });

});