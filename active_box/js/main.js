$(function(){
// header
 let header = $("#header");
 let intro = $ ("#intro");
 let introH = intro.innerHeight();
 let scrollPos = $(window).scrollTop();

 $(window).on("scroll load resize", function () {  
  introH = intro.innerHeight();
  scrollPos =$ (this).scrollTop();
  if(scrollPos>introH){
    header.addClass("fixed");
  }
  else{
    header.removeClass("fixed");
  }
 });

//  smooth scroll

$("[data-scroll]").on("click", function (event) {
event.preventDefault();

let elementID=$(this).data("scroll");
let elementOffset =$(elementID).offset().top;

console.log(elementOffset); 
header.removeClass("header_active");
  nav.removeClass("nav_active");
  burger.removeClass("active"); 

$("html, body").animate({
  scrollTop: elementOffset -70
},700)
});


let burger =$("#burger");
let nav =$("#nav");
burger.on("click", function (event) {
  event.preventDefault();
  burger.toggleClass("active");
  header.toggleClass("header_active");
  nav.toggleClass("nav_active");
});



});