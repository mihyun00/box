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
// --------------------------scroll
// $(document).scroll(function(){
//   var scrT = $(this).scrollTop()
//   console.log(scrT)
//   if(scrT>=300){
//       $('.text_area').addClass('on')
//   }else{
//       $('.text_area').removeClass('on')
//   }
// })
$(document).scroll(function(){
  var scrT = $(this).scrollTop()
  console.log(scrT)
  if(scrT>=2390){
    $('.sect5 h2').animate({'opacity':'1'},600)
    $('.comm_content:nth-child(1)').delay(300).animate({'opacity':'1','margin-top':'0'},600)
    $('.comm_content:nth-child(2)').delay(600).animate({'opacity':'1','margin-top':'0'},600)
    $('.comm_content:nth-child(3)').delay(900).animate({'opacity':'1','margin-top':'0'},600)
    $('.comm_content:nth-child(4)').delay(1200).animate({'opacity':'1','margin-top':'0'},600)
    $('.sect5 .more_btn').delay(1700).animate({'opacity':'1'},200)
  }
})