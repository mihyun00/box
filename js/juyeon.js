var swiper = new Swiper(".sect1_swiper-container", {
  autoplay: {
    delay: 3000
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
})

//연혁과 어바웃 창비 합침으로 스크롤 이벤트 js 미현js로 복사
// header 부분 이벤트 발생 제외 후 주석처리 

$(document).scroll(function() {

  var scrl = $(this).scrollTop()

  if (scrl > 0) {
    $("header").addClass("on")
  } else if (scrl == 0) {
    $("header").removeClass("on")
  }

  // if(scrl < 350) {
  //   $('.sect4_logo img').animate({'opacity':'1','top':'40%'})
  //   $('.sect4_txt p').delay(200).animate({'opacity':'1','top':'40%'})
  //   $('.sect4 button').delay(400).animate({'opacity':'1','top':'40%'})
  // }
  // else if(scrl < 350){
  //   $('.sect4_logo img').animate({'opacity':'0','top':'70%'})
  //   $('.sect4_txt p').animate({'opacity':'0','top':'70%'})
  //   $('.sect4 button').delay(400).animate({'opacity':'0','top':'70%'})
  // }
})
