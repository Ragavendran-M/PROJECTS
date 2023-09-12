

AOS.init();

const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
    
    
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      720:{
        slidesPerView: 2,
        spaceBetween: 40
      },
      992:{
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })
const swiper1 = new Swiper('.swiper1', {

    slidesPerView: "auto",
    spaceBetween: 200,
    autoplay:{
        delay:3500,
   
    },


  });
    
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:1,
      loop:true,
      margin:5,
      autoplay:true,
      autoplayTimeout:3000,
      // autoplayHoverPause:true
  });

  $(document).ready(function(){
  $(".counter").counterUp({
  delay:10,  
  time:1200
  })})