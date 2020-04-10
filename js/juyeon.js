//header scroll animation

$('section').on('mousewheel',function(event,delta){
  if(delta>0){
      //alert('up')
      var prev=$(this).prev().offset().top
      $('header').slideDown(700,'easeOutExpo')
  }
  else if(delta<0){
      //alert('down')
      var next=$(this).next().offset().top
      $('header').slideUp(700,'easeOutExpo')
  }
  
})

// nav li click scrl effect

$('header nav li a, .top_button').click(function(e) {
  e.preventDefault()
  var href = $(this).attr("href")
  var scrl = $(href).offset().top
  $("html,body").animate({ scrollTop: scrl })
})



//header li hover animation
$('.h_nav li a').click(function(){
  $('.h_nav li span').removeClass('line')
  $(this).next('span').addClass('line')
})



//section1 header menu mobile ver
var sw = 1
$("#nav_m").click(function() {
  $(".h_menu li a").click(function() {
    $("#modal").fadeOut(300)
    $("#nav_m p").removeClass("on")
    sw = 1
  })
  sw = !sw
  if (sw == 0) {
    $("#modal").fadeIn(300) //1000=1s
    $("#nav_m p").addClass("on")
  } else {
    $("#modal").fadeOut(300)
    $("#nav_m p").removeClass("on")
  }
})

//section1 swiper mobile ver

var swiper = new Swiper(".sect1-swiper-container", {
  spaceBetween: 0,
  loop: true,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000
  },

  pagination: {
    el: ".sect1-swiper-pagination",
    clickable: true
  }
})

//section1 multislide
 $(".roll a.next").click(function() {
   $(".sect1_slidewrap1").animate({ marginLeft: "-200%" }, function() {
     $(".slide1").first().appendTo(".sect1_slidewrap1")
     $(".sect1_slidewrap1").css({ marginLeft: "-100%" })
   })
 
   $(".sect1_slidewrap2").animate({ marginTop: "-132%" }, function() {
     $(".sect1_slidewrap2 div")
       .first()
       .appendTo(".sect1_slidewrap2")
     $(".sect1_slidewrap2").css({ marginTop: "-66%" })
   })
 })
 
 $(".roll a.prev").click(function() {
   $(".sect1_slidewrap1").animate({ marginLeft: "0px" }, function() {
     $(".slide1")
       .last()
       .prependTo(".sect1_slidewrap1")
     $(".sect1_slidewrap1").css({ marginLeft: "-100%" })
   })
 
   $(".sect1_slidewrap2").animate({ marginTop: "0px" }, function() {
     $(".slide2")
       .last()
       .prependTo(".sect1_slidewrap2")
     $(".sect1_slidewrap2").css({ marginTop: "-66%" })
   })
 })

//foooter banner

var mleft = -120
var timer = setInterval(f_move, 70)

$('.flowwrap').mouseenter(function(){
  clearInterval(timer)
})
$('.flowwrap').mouseleave(function(){
 
  timer = setInterval(f_move, 70)

})

function f_move(){

  mleft -= 1
  $('.flowwrap').css({'marginLeft':mleft})
  if (mleft == -121) {
   $('.flowwrap li').first().appendTo('.flowwrap')
} 
  else if (mleft <= -240){
 
    // console.log(mleft)
    mleft = -120
  }
}

//top button fadeout

$(document).scroll(function(){

  var scrlBtn = $('.top_button').offset().top
  //alert(scrlBtn)

  if (scrlBtn > 5872) {
    $('.top_button').stop().fadeOut()
  } else if (scrlBtn < 5872) {
    $('.top_button').stop().fadeIn()
  }
})