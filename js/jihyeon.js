var swiper = new Swiper('.sect4_swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$(document).scroll(function(){
  var scrT = $(this).scrollTop()
  console.log(scrT)
  // 1024px 이상에서 사용할 JavaScript
  if (matchMedia("screen and (min-width: 1025px)"). matches) {
    if (scrT>3100){
      $('.fillBg').stop().animate({opacity:'0',top:'98%'},1000)
    }
    if (scrT>=3200) {
      $('.fillBg').stop().animate({opacity:'1',top:'0'},1000)
    } 
    if(scrT>=8300){
    $('.sect5 .title').animate({opacity:'1'},500)
    $('.sect5 .comm1').delay(500).animate({opacity:'1',top:'0'},700)
    $('.sect5 .comm2').delay(800).animate({opacity:'1',top:'0'},700)
    $('.sect5 .comm3').delay(1100).animate({opacity:'1',top:'0'},700)
    $('.sect5 .comm4').delay(1400).animate({opacity:'1',top:'0'},700)
  }
} else if(matchMedia("screen and (min-width: 768px) and (max-width: 1024px)").matches) {
  // 1025px 미만, 768px 이상에서 사용할 JavaScript
  if (scrT>3150){
    $('.fillBg').stop().animate({opacity:'0',top:'98%'},1000)
  }
  if (scrT>=3250) {
    $('.fillBg').stop().animate({opacity:'1',top:'0'},1000)
  } 
  if(scrT>=7740){
    $('.sect5 .title').animate({opacity:'1'},500)
    $('.sect5 .comm1').delay(500).animate({opacity:'1',top:'0'},700)
    $('.sect5 .comm2').delay(800).animate({opacity:'1',top:'0'},700)
    $('.sect5 .comm3').delay(1100).animate({opacity:'1',top:'0'},700)
    $('.sect5 .comm4').delay(1400).animate({opacity:'1',top:'0'},700)
  }
} else if(matchMedia("screen and (max-width: 768px)").matches){
  // 768px 미만에서 사용할 JavaScript
  if (scrT>3350){
    $('.fillBg').stop().animate({opacity:'0',top:'98%'},1000)
  }
  if (scrT>=3450) {
    $('.fillBg').stop().animate({opacity:'1',top:'0'},1000)
  } 
  if(scrT>=4700){
    $('.sect5 .title').animate({opacity:'1'},500)
    $('.sect5 .comm1').delay(500).animate({opacity:'1',top:'0'},700)
    $('.sect5 .comm2').delay(800).animate({opacity:'1',top:'430'},700)
    $('.sect5 .comm3').delay(1100).animate({opacity:'1',top:'860'},700)
    $('.sect5 .comm4').delay(1400).animate({opacity:'1',top:'1290'},700)
  }
}
})



// $('.wave_text').on({
//   mouseenter:function(){
//     clearInterval(timer)
//   },
//   mouseleave:function(){
//     timer=setInterval(moveT,40)
//   }
// })// 상동
// function moveT(){
//   mleft -= 1
//   $('.wave_text').css({'marginLeft':mleft})

//   if(mleft == -2453){
//     $('.wave_text>span').first().appendTo('.wave_text')
//   }else if(mleft <= -4904){
//     mleft = 2452
//   }
// }