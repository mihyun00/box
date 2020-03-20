var swiper = new Swiper('.sect1_swiper-container');

//연혁과 어바웃 창비 합침으로 스크롤 이벤트 js 미현js로 이동
$(document).scroll(function() {
  var scrl = $(this).scrollTop()

  if (scrl > 0) {
    $("header").addClass("on")
  } else if (scrl == 0) {
    $("header").removeClass("on")
  }
})

$('.roll li a').click(function(){
  
})

