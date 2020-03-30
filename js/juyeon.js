
        //header animation
        $('header nav li a').click(function(e){
          e.preventDefault()
          var href=$(this).attr('href')
          var scrl=$(href).offset().top
          $('html,body').animate({'scrollTop':scrl})
      })

      var sw = 0 //sw=스위치(이름맘대로 정해도 됨)0=거짓 1=참 / =할당, ==조건연산자
      $("#nav_m").click(function() {
        if (sw == 0) {
          $("#modal").fadeIn(300) //1000=1s
          $("#nav_m p").addClass("on")

          sw = 1 
        } else {
          $("#modal").fadeOut(300)
          $("#nav_m p").removeClass("on")
          sw = 0
        }

        //if(조건){참이면 실행}else{거짓이면 실행}
      })

      //section1 swiper mobile ver
      var swiper = new Swiper('.sect1_swiper-container', {
        pagination: {
          el: '.sect1_swiper-pagination',
        },
      });

//section1 multislide
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


//footer banner slide 이거 해야함...ㅠ

//var mleft=0
//var timer=setInterval(move,10)
//
//$('.flow_container').on({
//  mouseenter:function(){
//    clearInterval(timer)
//  },
//  mouseleave:function(){
//    timer=setInterval(move,10)
//  }
//})
//
//function move(){
//  mleft-=2
//  console.log(mleft)
//    $('.flowwrap').css({'marginLeft':mleft},1000)
//}