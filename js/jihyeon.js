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
  // console.log(scrT)
  if (matchMedia("screen and (min-width: 1025px)").matches) {
    // 1024px 이상에서 사용할 JavaScript
    if(scrT>=4400){
      $('.sect5 .title').animate({opacity:'1'},500)
      $('.sect5 .comm1').delay(500).animate({opacity:'1',top:'0'},700)
      $('.sect5 .comm2').delay(800).animate({opacity:'1',top:'0'},700)
      $('.sect5 .comm3').delay(1100).animate({opacity:'1',top:'0'},700)
      $('.sect5 .comm4').delay(1400).animate({opacity:'1',top:'0'},700)
    }
  } else if(matchMedia("screen and (min-width: 768px) and (max-width: 1024px)").matches) {
    // 1025px 미만, 768px 이상에서 사용할 JavaScript
    if(scrT>=4100){
      $('.sect5 .title').animate({opacity:'1'},500)
      $('.sect5 .comm1').delay(500).animate({opacity:'1',top:'0'},700)
      $('.sect5 .comm2').delay(800).animate({opacity:'1',top:'0'},700)
      $('.sect5 .comm3').delay(1100).animate({opacity:'1',top:'0'},700)
      $('.sect5 .comm4').delay(1400).animate({opacity:'1',top:'0'},700)
    }
  } else if(matchMedia("screen and (max-width: 768px)").matches){
    // 768px 미만에서 사용할 JavaScript
    if(scrT>=4700){
      $('.sect5 .title').animate({opacity:'1'},500)
      $('.sect5 .comm1').delay(500).animate({opacity:'1',top:'0'},700)
      $('.sect5 .comm2').delay(800).animate({opacity:'1',top:'430'},700)
      $('.sect5 .comm3').delay(1100).animate({opacity:'1',top:'860'},700)
      $('.sect5 .comm4').delay(1400).animate({opacity:'1',top:'1290'},700)
    }
  }
})
$('.preview a').click(function(e){
  e.preventDefault()
  var href = $(this).attr('href')
  $('.main .content').removeClass('show').stop().animate({opacity:'0',marginTop:'50px'})
  $(href).addClass('show').stop().animate({opacity:'1',marginTop:'0'},'easeInOutQuad')


  $('.preview a').removeClass('on')
  $(this).addClass('on')
})
$('.sect4 .row1 a').click(function(){
  $('.sect4 .main').removeClass('small')
})
$('.sect4 .row2 a').click(function(){
  $('.sect4 .main').addClass('small')
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