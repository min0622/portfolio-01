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
    $('.mo_menu').stop(true).animate({right:'0'},500);
    $('body').css({overflow:'hidden'});
  })



  $('.x').click(function () {
    $('.mo_menu').stop(true).animate({right:'-100%'},500);
    $('body').css({overflow:'visible'});
  })


  // section1 
  $('.s2_section1 .teaBox .box a').on({

    mouseover: function () {
      $(this).find('figure').css({ transform: 'scale(1.1)', transitionDuration: '.7s' });
    },
    mouseout: function () {
      $(this).find('figure').css({ transform: 'scale(1)', transitionDuration: '.7s' });
    }

  })





  // tea파일

  var swiper = new Swiper(".s2_section1 .teaBox", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween:20
      },
      1201: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });




  });



  document.addEventListener('DOMContentLoaded', () => {

    // footer 
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
    });



    // 객체
    const list = [
      { 이미지: 'main2-1.png', 종류: 'Herbal', 이름: 'Black Tea with LEMON', 가격: '12,900', 설명: '상큼한 레몬향이 은은하게 어우러진 홍차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-2.png', 종류: 'Black Tea', 이름: 'Prince Of Whales Tea', 가격: '12,900', 설명: '강렬한 바디감으로 풍부함을 느낄 수 있는 홍차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-3.png', 종류: 'Black Tea', 이름: 'Pure Darjeeling Tea', 가격: '12,900', 설명: '은은한 향과 함께 가볍게 즐길 수 있는 홍차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-4.png', 종류: 'Herbal', 이름: 'Pure Ceylon Tea', 가격: '12,900', 설명: '하루의 시작을 상쾌하게 하는 스리랑카산 홍차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-5.png', 종류: 'Black Tea', 이름: 'Lady Grey Tea', 가격: '12,900', 설명: '얼그레이에 베르가못 향, 오렌지와 레몬 껍질이 블렌딩된 홍차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-6.png', 종류: 'Pu-Erh Tea', 이름: 'LEMON Pu-Erh Tea', 가격: '12,900', 설명: '가볍고 부드러운 레몬향이 나는 보이차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-7.png', 종류: 'Black Tea', 이름: 'Earl Grey Tea', 가격: '12,900', 설명: '가볍고 부드러운 레몬향이 나는 보이차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-8.png', 종류: 'Black Tea', 이름: 'Pure Darjeeling Tea', 가격: '12,900원', 설명: '은은한 향과 함께 가볍게 즐길 수 있는 홍차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-9.png', 종류: 'Black Tea', 이름: 'Lady Grey Tea', 가격: '12,900', 설명: '얼그레이에  베르가못 향, 오렌지와 레몬 껍질이 블렌딩된 홍차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-10.png', 종류: 'Black Tea', 이름: 'Prince Of Whales Tea', 가격: '12,900', 설명: '특유의 훈영향과 부드러운 풍미가 매력있는 홍차', 개수: '티백(2g × 25EA)' },
      { 이미지: 'main2-11.png', 종류: 'Black Tea', 이름: 'English Breakfast Tea', 가격: '12,900', 설명: '강렬한 바디감으로 풍부함을 느낄 수 있는 홍차', 개수: 'TIN 1개(100g)' },
      { 이미지: 'main2-12.png', 종류: 'Classic Teas Collection', 이름: 'Classic Teas Collection', 가격: '12,900', 설명: '트와이닝의 다양한 홍차(Black Tea)를 경험해 보세요', 개수: 'TIN 1개(100g)' }


    ]

    list.forEach((lists) => {

      // console.log(lists)



      // 이미지
      let imgBox = document.createElement('figure')
      imgBox.className = 'imgBox'

      imgBox.innerHTML =
        `<img src="./img/web/sub2/${lists.이미지}" alt="${lists.이미지}">`

      //itemInfo박스_1
      let itemInfo = document.createElement('div')
      itemInfo.className = 'itemInfo'

      itemInfo.innerHTML =
        `<span>${lists.종류}</span>`

      //itemInfo박스_2 : underline
      let underline = document.createElement('div')
      underline.className = 'underline'

      underline.innerHTML =
        `<p>${lists.이름}</p>
        <p>${lists.가격} 원</p>
        `

      // itemInfo박스_3: btm_box
      let btm_box = document.createElement('div')
      btm_box.className = 'btm_box'

      btm_box.innerHTML =
        `<p>${lists.설명}</p>
        <p>${lists.개수}</p>
          `

      //감싸기
      itemInfo.appendChild(underline)
      itemInfo.appendChild(btm_box)

      let item = document.createElement('div')
      item.className = 'item'

      let aBox = document.createElement('a')
      aBox.className = 'aBox'

      aBox.appendChild(imgBox)
      aBox.appendChild(itemInfo)

      item.appendChild(aBox)

      let itemBox = document.querySelector('.itemBox')
      itemBox.appendChild(item)

    });







  });