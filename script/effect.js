$(function () {

  // 햄버거바 ; 공통 effect  
$('header .headeri .menu').click(function(){
  $('.mo_menu').stop(true).slideToggle(700);

})



$('.x').click(function(){



  $('.mo_menu').stop(true).slideToggle(700);

})

  

//index파일
  // section2 마우스오버
  $('#wrap .section_2 .itemBox .i1 .imgBox').on({

    mouseover: function () {
      $('.m2-1').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-1.png').animate({ opacity: '1' }, 1600, 'easeOutQuint')
    },
    mouseout: function () {
      $('.m2-1').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-1.png').animate({ opacity: '1'}, 1600, 'easeOutQuint')

    }
  });

  $('#wrap .section_2 .itemBox .i2 .imgBox').on({

    mouseover: function () {
      $('.m2-2').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/hmain2-2.png').animate({ opacity: '1' }, 1600, 'easeOutQuint')
    },

    mouseout: function () {
      $('.m2-2').css({ opacity: '0' }).stop(true).attr('src', 'img/web/main/main2-2.png').animate({ opacity: '1' }, 1600, 'easeOutQuint')
    }
  });

  $('#wrap .section_2 .itemBox .i3 .imgBox').on({
    mouseover:function(){
      $('.m2-3').css({opacity:'0'}).stop(true).attr('src','img/web/main/hmain2-3.png').animate({opacity:'1'},1600, 'easeOutQuint')
    },
    mouseout:function(){
      $('.m2-3').css({opacity:'0'}).stop(true).attr('src','img/web/main/main2-3.png').animate({opacity:'1'},1600, 'easeOutQuint')
    }
  });

  $('#wrap .section_2 .itemBox .i4 .imgBox').on({
    mouseover:function(){
      $('.m2-4').css({opacity:'0'}).stop(true).attr('src','img/web/main/hmain2-4.png').animate({opacity:'1'},1600, 'easeOutQuint')
    },
    mouseout:function(){
      $('.m2-4').css({opacity:'0'}).stop(true).attr('src','img/web/main/main2-4.png').animate({opacity:'1'},1600, 'easeOutQuint')
    }
  });

  $('#wrap .section_2 .itemBox .i5 .imgBox').on({
    mouseover:function(){
      $('.m2-5').css({opacity:'0'}).stop(true).attr('src','img/web/main/hmain2-5.png').animate({opacity:'1'},1600, 'easeOutQuint')
    },
    mouseout:function(){
      $('.m2-5').css({opacity:'0'}).stop(true).attr('src','img/web/main/main2-5.png').animate({opacity:'1'},1600, 'easeOutQuint')
    }
  });

  $('#wrap .section_2 .itemBox .i6 .imgBox').on({
    mouseover:function(){
      $('.m2-6').css({opacity:'0'}).stop(true).attr('src','img/web/main/hmain2-6.png').animate({opacity:'1'},1600, 'easeOutQuint')
    },
    mouseout:function(){
      $('.m2-6').css({opacity:'0'}).stop(true).attr('src','img/web/main/main2-6.png').animate({opacity:'1'},1600, 'easeOutQuint')
    }
  });



// section3 mouseover 효과

$('.section_3>.slide>a>img').on({
  mouseover:function(){
    $(this).css({transform:'scale(1.1)',transitionDuration:'.5s'},)
  
  },
  mouseout:function(){
    $(this).css({transform:'scale(1)',transitionDuration:'.5s'})
  
  }
})



  $('#wrap .section_2 .itemBox').slick({
    centerMode: false,
    centerPadding: '10px',
    slidesToShow: 3,
    slidesToScroll:3,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerPadding: '0',
          slidesToShow: 2,
    slidesToScroll:2
        }
      },
      {
        breakpoint: 451,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 1,
          slidesToScroll:1

        }
      }
    ]
  })



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


  $('#wrap .section_6 .review').slick({
    centerMode: false,
    centerPadding: '0',
    // centerPadding: '10px',
    slidesToShow: 4,
    slidesToScroll:2,
    responsive: [
      {
        breakpoint: 1681,
        settings: {
          arrows: false,
          centerPadding: '0',
          slidesToShow: 3,
    slidesToScroll:2
        }
      },
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 3,
          slidesToScroll:2

        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 2,
          slidesToScroll:2

        }
      },
      {
        breakpoint: 451,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 1,
          slidesToScroll:1

        }
      }
    ]
  });


  
  
  
  
  
  
});


// footer 

// document.addEventListener('DOMContentLoaded',()=>{
  
//   let btn = document.querySelector('.btn')
//   let text = document.querySelector('.underLeft')
  
  
//   function show(){
  
//     if(text.style.display=='none'){
//       text.style.display='block';
//       btn.textContent='CLOSE ▼'
//     } else{
//         text.style.display='none';
//         btn.textContent='OPEN ▼'
//       }
//     }
  
// })