$(function(){

    
  // 햄버거바 ; 공통 effect  
  $('header .headeri .side .hide .menu').click(function () {
    $('.mo_menu').fadeIn();
  });

  $('.mo_menu button').click(function () {
    $('.mo_menu').fadeOut()
  });


//section5

    $("#sub1_wrap .s1_section5 .s_btn .b1").on({

        mouseover:function(){
          $(this).stop(true).animate({backgroundColor:'#000'}),
          $('.c1').stop(true).animate({color:'#fff'}),
          $('.a1').css({opacitiy:'0'}).stop(true).attr('src','./img/web/sub1/right_w.png').animate({opacity:'1'},300,'easeInOutQuad')

        },
        mouseout:function(){
            $(this).stop(true).animate({backgroundColor:'#fff'}),
          $('.c1').stop(true).animate({color:'#000'}),
          $('.a1').css({opacity:'0'}).stop(true).attr('src','./img/web/sub1/right.png').animate({opacity:'1'},300,'easeInOutQuad')

        }
      })

    $("#sub1_wrap .s1_section5 .s_btn .b2").on({

        mouseover:function(){
          $(this).stop(true).animate({backgroundColor:'#000'}),
          $('.c2').stop(true).animate({color:'#fff'}),
          $('.a2').css({opacitiy:'0'}).stop(true).attr('src','./img/web/sub1/right_w.png').animate({opacity:'1'},300,'easeInOutQuad')

        },
        mouseout:function(){
            $(this).stop(true).animate({backgroundColor:'#fff'}),
          $('.c2').stop(true).animate({color:'#000'}),
          $('.a2').css({opacity:'0'}).stop(true).attr('src','./img/web/sub1/right.png').animate({opacity:'1'},300,'easeInOutQuad')

        }
      })
   
    $("#sub1_wrap .s1_section5 .s_btn .b3").on({

        mouseover:function(){
          $(this).stop(true).animate({backgroundColor:'#000'}),
          $('.c3').stop(true).animate({color:'#fff'}),
          $('.a3').css({opacitiy:'0'}).stop(true).attr('src','./img/web/sub1/right_w.png').animate({opacity:'1'},300,'easeInOutQuad')

        },
        mouseout:function(){
            $(this).stop(true).animate({backgroundColor:'#fff'}),
          $('.c3').stop(true).animate({color:'#000'}),
          $('.a3').css({opacity:'0'}).stop(true).attr('src','./img/web/sub1/right.png').animate({opacity:'1'},300,'easeInOutQuad')

        }
      })
   
      






});

