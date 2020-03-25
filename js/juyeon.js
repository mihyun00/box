var swiper = new Swiper('.sect1_swiper-container');

//연혁과 어바웃 창비 합침으로 스크롤 이벤트 js 미현js로 이동



$('.sect1_button a.next').click(function(){
  $('.sect1_slidewrap1').animate({'marginLeft':'-200%'},function(){
    $('.slide1').first().appendTo('.sect1_slidewrap1')
    $('.sect1_slidewrap1').css({'marginLeft':'-100%'})
  })

$('.sect1_slidewrap2').animate({'marginTop':'-100%'},function(){
  $('.sect1_slidewrap2 div').first().appendTo('.sect1_slidewrap2')
  $('.sect1_slidewrap2').css({'marginTop':'-50%'})
})
})

$('.sect1_button a.prev').click(function(){
  $('.sect1_slidewrap1').animate({'marginLeft':'0px'},function(){
    $('.slide1').last().prependTo('.sect1_slidewrap1')
    $('.sect1_slidewrap1').css({'marginLeft':'-100%'})
  })

  $('.sect1_slidewrap2').animate({'marginTop':'0px'},function(){
    $('.slide2').last().prependTo('.sect1_slidewrap2')
    $('.sect1_slidewrap2').css({'marginTop':'-50%'})
  })
})



