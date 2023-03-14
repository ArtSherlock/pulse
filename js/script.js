$(document).ready(function(){
  $('.slider__goods').slick({
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

  $('.feedback__slider').slick({
    speed: 500,
    adaptiveHeight: true,
    dots: true,
    arrows: false
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
  $(this)
    .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
    .closest('div.container').find('ul.catalog-list').removeClass('catalog-list--active').eq($(this).index()).addClass('catalog-list--active');
  });

  function toggleSlide(item) {
    $('.item').each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('.catalog-item__content--active');
        $('.catalog-item__backside').eq(i).toggleClass('.catalog-item__backside--active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

});