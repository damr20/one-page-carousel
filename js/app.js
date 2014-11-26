 $(document).ready(function(){

$('.filtering').slick({
    infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<i class="fa fa-chevron-circle-left "></i>',
  nextArrow: '<i class="fa fa-chevron-circle-right"></i>',
 variableWidth: true
        });



$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
 
        if (scroll >= 400) {
             $(".fixed-header").fadeIn().addClass("show");
            
         } else {
            // $(".fixed-header").removeClass("show").fadeOut();
             $('.fixed-header').fadeOut().removeClass("show");
        }

    });
});



   });

    // $(window).scroll(function(event){
    //     toggleHeader();
    // });

    // function toggleHeader() {
    //     $('.fixed-header').toggle( $(window).scrollTop() > 400 ).fadeIn();
    // }