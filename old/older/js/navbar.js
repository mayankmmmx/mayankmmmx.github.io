/*This site is completed with help and inspiration from zacksears.com. All design and most code is accredited to zacksears.com*/
$(document).ready(function () {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var s = skrollr.init({forceHeight: false});
  }

  $('.navbar-header-container').hover(
    function () {
      $(this).css({
        'width': '240px'
      });
    },
    function () {
      $(this).css({
        'width': '60px'
      });
    }
  );

  $('.header').on('click', function () {
    var href = $(this).attr('href');
    $('body, HTML').animate({
      scrollTop: $(href).offset().top
    }, 500);
  });

});
