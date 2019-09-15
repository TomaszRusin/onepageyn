
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });   

  var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 1000,
    autoplayHoverPause:true
});