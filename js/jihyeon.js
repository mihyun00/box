// var swiper = new Swiper(".sect4_swiper-container", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     },
//     effect:'fade',
//     fadeEffect: {
//       crossFade: true,
//     },
//   })

//swiper js는 section이름 겹쳐서 주석처리함 .. 지현이가 엎을 예정인 문학상 부분 스와이퍼로 추정

// $('.sect5_tab li').click(function(){
//   $('.sect5_tab li').find('span').removeClass('on')
//   $(this).find('span').addClass('on')
//   $('.sect5_swiper-container').hide()
//   var idx = $(this).index()
//   $('.sect5_swiper-container').eq(idx).show()
// })

//위와 동일한 이유로 주석처리함

$(".sect5 .more_btn").mouseenter(function() {
  $(".sect5 .more_btn span").animate({ width: "190" }, 300)
  $(".sect5 .more_btn b").animate({ color: "#fff" }, 200)
})
$(".sect5 .more_btn").mouseleave(function() {
  $(".sect5 .more_btn span").animate({ width: "0" }, 300)
  $(".sect5 .more_btn b").animate({ color: "#365445" }, 200)
})
