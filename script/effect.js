$(function () {

  // 햄버거바 ; 공통 effect  
  $('header .headeri .side .hide .menu').click(function () {
    $('.mo_menu').fadeIn();
  });

  $('.mo_menu button').click(function () {
    $('.mo_menu').fadeOut()
  });

//index파일
  // section2 마우스오버
  $('#wrap .section_2 .itemBox .i1 .imgBox').on({

    mouseover: function () {
      $('.m2-1').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-1.png').animate({ opacity: '1' }, 400, 'easeInOutQuad')
    },
    mouseout: function () {
      $('.m2-1').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-1.png').animate({ opacity: '1'}, 400, 'easeInOutQuad')

    }
  });

  $('#wrap .section_2 .itemBox .i2 .imgBox').on({

    mouseover: function () {
      $('.m2-2').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-2.png').animate({ opacity: '1' }, 400, 'easeInOutQuad')
    },

    mouseout: function () {
      $('.m2-2').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-2.png').animate({ opacity: '1' }, 400, 'easeInOutQuad')
    }
  });

  $('#wrap .section_2 .itemBox .i3 .imgBox').on({
    mouseover:function(){
      $('.m2-3').css({opacity:'0'}).stop(true).attr('src','img/web/main/hmain2-3.png').animate({opacity:'1'},400,'easeInOutQuad')
    },
    mouseout:function(){
      $('.m2-3').css({opacity:'0'}).stop(true).attr('src','img/web/main/main2-3.png').animate({opacity:'1'},400,'easeInOutQuad')
    }
  });

  $('#wrap .section_2 .itemBox .i4 .imgBox').on({
    mouseover:function(){
      $('.m2-4').css({opacity:'0'}).stop(true).attr('src','img/web/main/hmain2-4.png').animate({opacity:'1'},400,'easeInOutQuad')
    },
    mouseout:function(){
      $('.m2-4').css({opacity:'0'}).stop(true).attr('src','img/web/main/main2-4.png').animate({opacity:'1'},400,'easeInOutQuad')
    }
  });

  $('#wrap .section_2 .itemBox .i5 .imgBox').on({
    mouseover:function(){
      $('.m2-5').css({opacity:'0'}).stop(true).attr('src','img/web/main/hmain2-5.png').animate({opacity:'1'},400,'easeInOutQuad')
    },
    mouseout:function(){
      $('.m2-5').css({opacity:'0'}).stop(true).attr('src','img/web/main/main2-5.png').animate({opacity:'1'},400,'easeInOutQuad')
    }
  });

  $('#wrap .section_2 .itemBox .i6 .imgBox').on({
    mouseover:function(){
      $('.m2-6').css({opacity:'0'}).stop(true).attr('src','img/web/main/hmain2-6.png').animate({opacity:'1'},400,'easeInOutQuad')
    },
    mouseout:function(){
      $('.m2-6').css({opacity:'0'}).stop(true).attr('src','img/web/main/main2-6.png').animate({opacity:'1'},400,'easeInOutQuad')
    }
  });



// section3 mouseover 효과

$('.section_3>.slide>a>img').on({
  mouseover:function(){
    $(this).css({transform:'scale(1.1)'}),
    $(this).css({transition:'all .7s'})
  },
  mouseout:function(){
    $(this).css({transform:'scale(1)'}),
    $(this).css({transition:'all .7s'})
  }
})


  // section2 슬라이드
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
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });


  // section3 슬라이드
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


  // section6 리뷰 슬라이드
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



    ]
  });







// tea파일
$('.s2_section1 .teaBox').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				



});