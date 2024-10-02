$(function(){

    $('#wrap .section_2 .itemBox').slick({
        centerMode: false,
        centerPadding: '10px',
        slidesToShow: 3,
        slidesToScroll:3,
        responsive: [
          {
            // breakpoint: 769,
            breakpoint: 1025,
            settings: {
              arrows: false,
              centerPadding: '0',
              slidesToShow: 2,
        slidesToScroll:2
            }
          },
          {
            breakpoint: 461,
            settings: {
              arrows: false,
              dots:true,
              slidesToShow: 1,
              slidesToScroll:1
    
            }
          }
        ]
      })
    
    
    
    
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
            breakpoint: 461,
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