var swiper = new Swiper(".sect5_swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    effect:'fade',
    fadeEffect: {
      crossFade: true,
    },
  })
$('.sect5_tab li').click(function(){
  $('.sect5_tab li').find('span').removeClass('on')
  $(this).find('span').addClass('on')
  $('.sect5_swiper-container').hide()
  var idx = $(this).index()
  $('.sect5_swiper-container').eq(idx).show()
})
$('.sect6 .more_btn').mouseenter(function(){
  $('.sect6 .more_btn span').animate({width:'190'},300)
  $('.sect6 .more_btn b').animate({color:'#fff'},200)
})
$('.sect6 .more_btn').mouseleave(function(){
  $('.sect6 .more_btn span').animate({width:'0'},300)
  $('.sect6 .more_btn b').animate({color:'#365445'},200)
})
