$(function () {
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
    if (scrollOffset >= introH + 130) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }


  //scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $(this).data("scroll"),
      blockOffset = $(blockId).offset().top;

    // $("#m_menu_inner").removeClass("active");
    // $("#nav").removeClass("active");
    // $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset-130,
      },
      700
    );
  });


   // Collapse
   $("[data-collapse]").on("click", function (event) {
    event.preventDefault();
  
    var $this = $(this),
      blockId = $this.data("collapse"),
      id = document.getElementsByClassName('item_hidden');
  
      // $this.removeClass("item_hidden");
      $(id).fadeToggle();//либо slide
    });
  // Menu nav toggle
  $("#m_menu_inner").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });
});