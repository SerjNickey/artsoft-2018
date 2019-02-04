$(document).ready(function(){
  $("#owl-carousel").owlCarousel({
   items: 1,
   nav:true,
   dots: false,
   navText: ["<i class='rewies-slider-prev fa fa-angle-left' aria-hidden='true'></i>","<i class='rewies-slider-next fa fa-angle-right' aria-hidden='true'></i>"],
   loop: true,
   autoplay: false,
   smartSpeed: 800
  });
 

  $("#owl-carousel-two").owlCarousel({
   items: 1,
   nav: false,  
   dots: false,    
   loop: true,
   autoplay: false,
   URLhashListener:true,
   startPosition: "URLHash",
   smartSpeed: 800
  });   
  
  
  $(".footer-zero").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    	top = $(id).offset().top;		
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top -100}, 1600);
  });


  $(".equipment-slider-nav ul li a").click(function(e) {
    //e.preventDefault();
    $(".equipment-slider-nav ul li a").removeClass("active");
    $(this).addClass('active');
  });


  $(".popup-content").magnificPopup({
        type: "inline",
        removalDelay: 300,
        mainClass: "mfp-fade",
        callbacks: {
		  open: function() {
		    $("body").css("padding-right", 0);
		  }
        }
  });
});


