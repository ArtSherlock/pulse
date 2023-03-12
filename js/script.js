$(document).ready(function(){
  $('.slider__goods').slick({
    // dots: true,
    speed: 500,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev-arrow.png" alt="previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/next-arrow.png" alt="next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});