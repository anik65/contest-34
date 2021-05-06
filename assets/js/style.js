
//  sticky nav
// $(window).on("scroll", function () {
//     if ($(window).scrollTop() > 100) {
//         $("nav").addClass("fixed-top");
//     } else {
//         $("nav").removeClass("fixed-top");
//     }
// });
$('body').scrollspy({ target: ".navbar", offset: 50 });
 
 
$('.testo').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed:900,
   
});
new WOW().init();