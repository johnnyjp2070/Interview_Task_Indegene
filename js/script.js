(function ($) {
  $(function () {
    header();
    // footerselect()
    $(document).on("scroll", function () {
      header();
    });

    function header() {
      if ($(document).scrollTop() > 100) {
        $("header").addClass("fixed");
      } else {
        $("header").removeClass("fixed");
      }
    }

    if ($(".testimonial-slider").length > 0) {
      $(".testimonial-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        dots: true,
        infinite: true,
        fade: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      });
    }

    if ($("#menu-toggle").length > 0) {
      $("#menu-toggle").on("click", function (e) {
        e.preventDefault();

        if ($(this).hasClass("opened")) {
          $(this).removeClass("opened");
          $(".header-bottom").slideUp(200);
        } else {
          $(this).addClass("opened");
          $(".header-bottom").slideDown(200);
        }
      });
    }
  });
})(jQuery);
