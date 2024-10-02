$(function () {

  // header scroll fix
  let section2 = $('.s1_section2')
  let header = $('header')
  let spot = section2.offset().top;

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
    $('.mo_menu').stop(true).animate({right:'0'},600);
    
  })



  $('.x').click(function () {
    $('.mo_menu').stop(true).animate({right:'-100%'},600);

  })

  //section5


  $("#sub1_wrap .s1_section5 .s_btn .b1").on({

    mouseover: function () {
      $(this).stop(true).animate({ backgroundColor: '#000' }),
        $('.c1').stop(true).animate({ color: '#fff' }),
        $('.a1').css({ opacitiy: '0' }).stop(true).attr('src', './img/web/sub1/right_w.png').animate({ opacity: '1' }, 300, 'easeInOutQuad')

    },
    mouseout: function () {
      $(this).stop(true).animate({ backgroundColor: '#fff' }),
        $('.c1').stop(true).animate({ color: '#000' }),
        $('.a1').css({ opacity: '0' }).stop(true).attr('src', './img/web/sub1/right.png').animate({ opacity: '1' }, 300, 'easeInOutQuad')

    }
  })

  $("#sub1_wrap .s1_section5 .s_btn .b2").on({

    mouseover: function () {
      $(this).stop(true).animate({ backgroundColor: '#000' }),
        $('.c2').stop(true).animate({ color: '#fff' }),
        $('.a2').css({ opacitiy: '0' }).stop(true).attr('src', './img/web/sub1/right_w.png').animate({ opacity: '1' }, 300, 'easeInOutQuad')

    },
    mouseout: function () {
      $(this).stop(true).animate({ backgroundColor: '#fff' }),
        $('.c2').stop(true).animate({ color: '#000' }),
        $('.a2').css({ opacity: '0' }).stop(true).attr('src', './img/web/sub1/right.png').animate({ opacity: '1' }, 300, 'easeInOutQuad')

    }
  })

  $("#sub1_wrap .s1_section5 .s_btn .b3").on({

    mouseover: function () {
      $(this).stop(true).animate({ backgroundColor: '#000' }),
        $('.c3').stop(true).animate({ color: '#fff' }),
        $('.a3').css({ opacitiy: '0' }).stop(true).attr('src', './img/web/sub1/right_w.png').animate({ opacity: '1' }, 300, 'easeInOutQuad')

    },
    mouseout: function () {
      $(this).stop(true).animate({ backgroundColor: '#fff' }),
        $('.c3').stop(true).animate({ color: '#000' }),
        $('.a3').css({ opacity: '0' }).stop(true).attr('src', './img/web/sub1/right.png').animate({ opacity: '1' }, 300, 'easeInOutQuad')

    }
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