//header animation
$("header nav li a").click(function(e) {
  e.preventDefault()
  var href = $(this).attr("href")
  var scrl = $(href).offset().top
  $("html,body").animate({ scrollTop: scrl })
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
$(".sect1_button a.next").click(function() {
  $(".sect1_slidewrap1").animate({ marginLeft: "-200%" }, function() {
    $(".slide1")
      .first()
      .appendTo(".sect1_slidewrap1")
    $(".sect1_slidewrap1").css({ marginLeft: "-100%" })
  })

  $(".sect1_slidewrap2").animate({ marginTop: "-158%" }, function() {
    $(".sect1_slidewrap2 div")
      .first()
      .appendTo(".sect1_slidewrap2")
    $(".sect1_slidewrap2").css({ marginTop: "-79%" })
  })
})

$(".sect1_button a.prev").click(function() {
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
    $(".sect1_slidewrap2").css({ marginTop: "-79%" })
  })
})

var mleft = 0
var timer = setInterval(move, 10)

$(".flow_container").on({
  mouseenter: function() {
    clearInterval(timer)
  },
  mouseleave: function() {
    timer = setInterval(move, 10)
  }
})

function move() {
  mleft -= 2
  console.log(mleft)

  $(".flowwrap").css({ marginLeft: mleft }, 20)

  $(".flowwrap").animate({ marginLeft: mleft })
    
}
