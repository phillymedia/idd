$(document).ready(function() {


  $(window).scroll(function() {
    $(".text-section").each(function() {


      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

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



  // $(".scroll-img").each(function() {
  //   var $this = $(this);
  //   if ($this.attr("class").includes("firstimg")) {
  //     $(this).addClass("inview");
  //     var findsrc = $this.find("img").attr("data-src");
  //     $this.find("img").attr("src", findsrc);
  //   }
  //
  // })
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
