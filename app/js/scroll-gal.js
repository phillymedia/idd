$(document).ready(function() {

$(".scroll-img-meta").mouseenter(function(){
  $(this).find('.scroll-img-caption').slideDown();
});

$(".scroll-img-meta").mouseleave(function(){
  $(this).find('.scroll-img-caption').slideUp();
});

  $(window).scroll(function() {
    $(".text-section").each(function() {


      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height() / 2;

      var elemTop = $(this).offset().top;
      var elemBottom = elemTop + $(this).height();

      if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {

            var getindex = $(this).index();
            console.log(getindex)
            $(".scroll-img").removeClass("fadeIn");


            $(".scroll-img").eq(getindex).addClass("fadeIn");
      }

    })
  })



  $(window).scroll(function() {

    if ($(".scroll-gal").offset().top > $(window).scrollTop()) {
      $('.image-scroll').removeClass('fixedimg');
    }

    if ($(".scroll-gal").offset().top <= $(window).scrollTop()) {
      $('.image-scroll').addClass('fixedimg');
      $('.scroll-img.last img').removeClass('last-fix');
    }

    if ($(".scroll-gal").offset().top + $(".scroll-gal").height() <= $(window).scrollTop() + $(window).height()) {
      console.log("end")
      $('.image-scroll').removeClass('fixedimg').css("bottom", "0");
      $('.scroll-img.last img').addClass('last-fix');
    }
  })
});
