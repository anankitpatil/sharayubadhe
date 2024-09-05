jQuery(document).ready(function ($) {
  $(window)
    .scroll(function () {
      $(".one, .two").each(function () {
        $(window).scrollTop() + $(window).height() > $(this).position().top &&
          $(this).addClass("active");
      });
    })
    .scroll();
});
