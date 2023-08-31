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
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })
const swiper1 = new Swiper('.swiper1', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 100,
    autoplay:{
        delay:3500,
   
    },

    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
    


  $(document).ready(function(){
  $(".counter").counterUp({
  delay:10,  
  time:1200
  })})