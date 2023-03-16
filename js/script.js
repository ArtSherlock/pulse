$(document).ready(function () {
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

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
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

  // MODAL WINDOWS
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  $('.catalog-item__btn').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__subtitle').text($('.catalog-item__name').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        },
        messages: {
          name: {
            required: "Пожалуйста, введите своё имя",
            minlength: jQuery.validator.format("Введите минимум {0} символа")
          },
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неверный адрес почты"
          }
        }
      }
    });
  }

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  // Smooth scroll to top of page
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1400) {
      $('.page-up').fadeIn();
    } else {
      $('.page-up').fadeOut();
    }
  });

  $("a[href^='#']").click(function() {
    const _href = $(this).attr('href');
  $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
  return false;
});

});