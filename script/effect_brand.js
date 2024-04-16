$(function(){

    
  // 햄버거바 ; 공통 effect  
  $('header .headeri .side .hide .menu').click(function () {
    $('.mo_menu').fadeIn();
  });

  $('.mo_menu button').click(function () {
    $('.mo_menu').fadeOut()
  });



    $("#sub1_wrap .s1_section5 .s_btn .s_btnBox").on({

        mouseover:function(){
          $(this).stop(true).animate({backgroundColor:'#000'}),
          $('.c').stop(true).animate({color:'#fff'}),
          $('.a').css({opacitiy:'0'}).stop(true).attr('src','./img/web/sub1/right_w.png').animate({opacity:'1'},300,'easeInOutQuad')

        },
        mouseout:function(){
            $(this).stop(true).animate({backgroundColor:'#fff'}),
          $('.c').stop(true).animate({color:'#000'}),
          $('.a').css({opacity:'0'}).stop(true).attr('src','./img/web/sub1/right.png').animate({opacity:'1'},300,'easeInOutQuad')

        }

      })
   
      






});