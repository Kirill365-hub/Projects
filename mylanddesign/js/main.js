$(document).ready(function(){
  $('.slider_wrapper').slick({
    infinite: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
    ]
  });

  $('.slide_works').slick({
    infinite: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
    ],
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
    ]
    
  });

  $(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
    $('#accordeon .questions_item_header').on('click', f_acc);
  });
  
  function f_acc(){
  //скрываем все кроме того, что должны открыть
    $('#accordeon .questions_content').not($(this).next()).slideUp(500);
    $('#accordeon .questions_item_header').not($(this)).removeClass("is_opened");
  // открываем или скрываем блок под заголовком, по которому кликнули
      $(this).next().slideToggle(500);
      $(this).toggleClass("is_opened");
  }

 // Smooth scroll
 $("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $(this).data("scroll"),
    blockOffset = $(blockId).offset().top;

  $("nav, a").removeClass("active");
  $this.addClass("active");

  $("html, body").animate(
    {
      scrollTop: blockOffset,
    },
    500
  );
  });

  //Menu nav toggle
  $("#m_menu_inner").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  //Menu nav toggle
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("is_opened");
    menu = document.getElementsByClassName('menu_2');
    intro = document.getElementsByClassName('intro');
    wrapper = document.getElementsByClassName('mobile_header_wrapper');
    $(wrapper).toggleClass("is_opened");
    $(menu).toggleClass("is_opened");
    $(intro).toggleClass("disactive")
  });

  

  var header = $("header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();
  // Fixed header
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });
  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
});

