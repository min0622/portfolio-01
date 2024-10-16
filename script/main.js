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
    $('.mo_menu').stop(true).animate({ right: '0' }, 500);
    $('body').css({overflow:'hidden'});

  })


  $('.x').click(function () {
    $('.mo_menu').stop(true).animate({ right: '-100%' }, 500);
    $('body').css({overflow:'visible'});

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