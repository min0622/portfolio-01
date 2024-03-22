$(function(){

    $('header .headeri .side .hide .menu').click(function(){
      // $('.mo_menu').toggleClass('add');

      // if($('.mo_menu').hasClass('add')){
      //   $('.mo_menu').fadeIn()
      // } else{
      //   $('.mo_menu').fadeOut()

      // }
      $('.mo_menu').fadeIn();


    })
    
    $('.mo_menu button').click(function(){
      $('.mo_menu').fadeOut()
    })



    $('#wrap .section_2 .itemBox').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
    
]
});



$('#wrap .section_3').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      
      {
        breakpoint: 576,
        settings: "unslick"
      }
      
    ]
  });



  $('#wrap .section_6 .review').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
      }
      },
      {
        breakpoint: 969,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
      }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
      }
      },








      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });











});