$(function () {

  // header scroll fix
  let section2 = $('.section_2')
  let header = $('header')
  let spot = section2.offset().top;
  console.log(spot)
  let win = $(window)

  win.scroll(function () {

    if (win.scrollTop() > spot) {
      header.addClass('fix')
    } else {
      header.removeClass('fix')
    }
  });




  // 햄버거바 ; 공통 effect  
  $('header .headeri .menu').click(function () {
    $('.mo_menu').stop(true).animate({ right: '0' }, 600);


  })


  $('.x').click(function () {
    $('.mo_menu').stop(true).animate({ right: '-100%' }, 600);

  })



  //index파일
  // section2 마우스오버
  $('#wrap .section_2 .itemBox .item').on({
    mouseover: function () {
      $(this).find('.imgBox').css({
        opacity: '0'
      });
    },
    mouseout: function () {
      $(this).find(".imgBox").css({
        opacity: '1'
      });
    }
  });



  //   $('#wrap .section_2 .itemBox .i1 .imgBox').on({

  //     mouseover: function () {
  //       $('.m2-1').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-1.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     },
  //     mouseout: function () {
  //       $('.m2-1').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-1.png').animate({ opacity: '1' }, 900, 'easeOutSine')

  //     }
  //   });

  //   $('#wrap .section_2 .itemBox .i2 .imgBox').on({

  //     mouseover: function () {
  //       $('.m2-2').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-2.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     },

  //     mouseout: function () {
  //       $('.m2-2').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-2.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     }
  //   });

  //   $('#wrap .section_2 .itemBox .i3 .imgBox').on({
  //     mouseover: function () {
  //       $('.m2-3').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-3.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     },
  //     mouseout: function () {
  //       $('.m2-3').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-3.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     }
  //   });

  //   $('#wrap .section_2 .itemBox .i4 .imgBox').on({
  //     mouseover: function () {
  //       $('.m2-4').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-4.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     },
  //     mouseout: function () {
  //       $('.m2-4').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-4.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     }
  //   });

  //   $('#wrap .section_2 .itemBox .i5 .imgBox').on({
  //     mouseover: function () {
  //       $('.m2-5').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-5.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     },
  //     mouseout: function () {
  //       $('.m2-5').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-5.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     }
  //   });

  //   $('#wrap .section_2 .itemBox .i6 .imgBox').on({
  //     mouseover: function () {
  //       $('.m2-6').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-6.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     },
  //     mouseout: function () {
  //       $('.m2-6').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-6.png').animate({ opacity: '1' }, 900, 'easeOutSine')
  //     }
  //   });




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