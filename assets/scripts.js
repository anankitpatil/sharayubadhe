jQuery(document).ready(function ($) {
  $(window)
    .scroll(function () {
      $(".one, .two").each(function () {
        $(this).position().top < $(window).scrollTop() + $(window).height() &&
          $(this).addClass("active");
      });
    })
    .scroll();
});
