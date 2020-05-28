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

    // Smooth scroll and page up

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600){
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });
  
      $("a[href='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });

      // Phone masked

      $('input[name=phone]').mask("+7 (999) 99-99-999");

  });

  