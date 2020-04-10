//sect2

var swiper = new Swiper(".new", {
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    10: {
      slidesPerView: 2,
    },
    760: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
})

var swiper = new Swiper(".best", {
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    10: {
      slidesPerView: 2,
    },
    760: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
})

var swiper = new Swiper(".chu", {
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    10: {
      slidesPerView: 2,
    },
    760: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
})

var swiper = new Swiper(".prime", {
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    10: {
      slidesPerView: 2,
    },
    760: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
})

var swiper = new Swiper(".ebook", {
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   10: {
      slidesPerView: 2,
    },
    760: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
})
//도서 탭 클릭하면 글씨 클래스 on + 도서 슬라이드 변경
$(".sect2-tap ul li a").click(function (e) {
  e.preventDefault()
  $(".sect2-tap ul li a").removeClass("on")
  $(this).addClass("on")
  var href = $(this).attr("href")
  $(".sect2-bookslide>div").hide().css({ opacity: "0" })
  $(href).show().css({ opacity: "1" })
})

// //sect2 도서 클릭하면 해당되는 내용 표출
$(".sect2-swiper-container .swiper-slide a").click(function (e) {
  e.preventDefault()
  var href = $(this).attr("href")
  // alert(href)

  $(".sect2-book-txt ul li")
    .stop()
    .css({ display: "none" }, 500)
    .animate({ marginTop: "16%", opacity: "0" })
  $(href).stop().css({ display: "block" }).animate({ marginTop: "14%", opacity: "1" })
})
// sect3

setInterval(function () {
  $(".sect3-wraper01").animate({ marginLeft: '-80%' }, function () {
    $(".sect3-wraper01 div").first().appendTo(".sect3-wraper01")
    $(".sect3-wraper01").css({ marginLeft: '-40%' })
  })
  $(".sect3-wraper02").animate({ marginLeft: '-80%' }, function () {
    $(".sect3-wraper02 div").first().appendTo(".sect3-wraper02")
    $(".sect3-wraper02").css({ marginLeft: '-40%' })
  })
  $(".sect3-wraper01 div").removeClass("on")
  $(".sect3-wraper01 div")
    .eq(1 + 2)
    .addClass("on")
  $(".sect3-wraper02 div").removeClass("on")
  $(".sect3-wraper02 div")
    .eq(1 + 2)
    .addClass("on")
}, 3800)
///////////////////////////////////////////
$(window).resize(function(){
  console.log()

})
//////////////////////////////////////////////////
var SNT = 0
$(".sect3-next-btn").click(function () {
  SNT = !SNT
  if (SNT) {
    $(".sect3-next-btn p").text("1966~1999")
    $(".sect3-wraper01").css({ display: "none" })
    $(".sect3-wraper02").css({ display: "flex" })
  } else {
    $(".sect3-next-btn p").text("2000~2020")
    $(".sect3-wraper02").css({ display: "none" })
    $(".sect3-wraper01").css({ display: "flex" })
  }
})
////////////////////////////////////////////////////

