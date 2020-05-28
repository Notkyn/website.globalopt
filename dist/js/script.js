$(document).ready(function(){
    
    // Slider

    $('.slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/arrow.svg" alt="preious"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/arrow.svg" alt="next"></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
  });