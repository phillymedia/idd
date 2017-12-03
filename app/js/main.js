require("./scroll-gal.js")


$(document).ready(function() {

  var themeColor = $(".part.selected").css("border-bottom-color");
  console.log(themeColor);
  $(".part.selected").css({
    "background-color": themeColor,
    "color":"white",
    "opacity":1
  });




});
