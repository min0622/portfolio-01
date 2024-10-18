$(function(){

  // section_2
  var swiper = new Swiper("#wrap .section_2 .itemBox", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      462: {
        slidesPerView: 2,
        spaceBetween:20
      },
      500: {
        slidesPerView: 2,
        spaceBetween:40
      },
      1026: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 100
      }
    }
  });
    



  // section_6
  var swiper = new Swiper("#wrap .section_6 .review", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween:16
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 12
      },
      1026: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1201: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });




});