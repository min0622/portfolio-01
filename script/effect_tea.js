$(function () {

  // header scroll fix
  let win = $(window)
  let header = $('header')
  let section2 = $('.s2_section2')
  let spot = section2.offset().top;

  win.scroll(function () {

    if (win.scrollTop() > spot) {
      header.addClass('fix')
    } else {
      header.removeClass('fix')
    }
  });



  // 햄버거바 ; 공통 effect  
  $('header .headeri .menu').click(function () {
    $('.mo_menu').stop(true).slideToggle(700);

  })



  $('.x').click(function () {
    $('.mo_menu').stop(true).slideToggle(700);

  })


  $('.s2_section1 .teaBox .box a').on({

    mouseover: function () {
      $(this).find('figure').css({ transform: 'scale(1.1)', transitionDuration: '.7s' });
    },
    mouseout: function () {
      $(this).find('figure').css({ transform: 'scale(1)', transitionDuration: '.7s' });
    }

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
        breakpoint: 321,
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


// footer 

document.addEventListener('DOMContentLoaded', () => {

  let btn = document.querySelector('.btn')
  let text = document.querySelector('.underLeft')



  btn.addEventListener('click', () => {


    if (text.style.display == 'none') {
      text.style.display = 'block';
      btn.textContent = 'CLOSE ▼'
    } else {
      text.style.display = 'none';
      btn.textContent = 'OPEN ▼'
    }
  })

});