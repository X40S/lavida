$(function(){


    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
            {
              breakpoint: 1106,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    });
    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
    });

});