$(function () {


  // 햄버거바 ; 공통 effect  
  $('header .headeri .menu').click(function () {
    $('.mo_menu').stop(true).slideToggle(700);

  })



  $('.x').click(function () {
    $('.mo_menu').stop(true).slideToggle(700);

  })






  // tea파일

  $('.s2_section1 .teaBox').slick({
    centerMode: false,
    centerPadding: '1px',
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          centerPadding: '0',
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 638,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1

        }
      },
      {
        breakpoint: 281,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1

        }
      }
    ]
  })



});