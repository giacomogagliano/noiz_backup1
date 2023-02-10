function textFadeIn(el) {
  var wh = $(window).height();
  $(el).each(function () {
    var thisPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + wh - 200 > thisPos) {
      $(this).addClass("fadein");
    }
  });
}

$(window).on("scroll resize", function () {
  textFadeIn(".fadeintext");
});
