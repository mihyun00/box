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
    200: {
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
    200: {
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
    200: {
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
    200: {
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
    200: {
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

var btn = 0 // 버튼 체크
$(".year-btn button").click(function () {
  btn = !btn //버튼을 누를 때 반대로 변경한다.
  if (btn) {
    $(".sect3-02").css({opacity:'0'}).hide()
    $(".sect3-01").css({opacity:'1'}).show()
    $("button").text("1960~1990")
  } else {
    $(".sect3-01").css({opacity:'0'}).hide()
    $(".sect3-02").css({opacity:'1'}).show()
    $("button").text("2000~2020")
  }
})

//sect3 swiper

var swiper = new Swiper(".sect3-01", {
  slidesPerView: 5,
  mousewheel: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  breakpoints: {
    200: {
      slidesPerView: 4,
      direction: "vertical",
    },
    760: {
      slidesPerView: 4,
      direction: "horizontal",
    },
    1024: {
      slidesPerView: 5,
      direction: "horizontal",
    },
  },
})

var swiper = new Swiper(".sect3-02", {
  slidesPerView: 5,
  mousewheel: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  breakpoints: {
    200: {
      slidesPerView: 4,
      direction: "vertical",
    },
    760: {
      slidesPerView: 4,
      direction: "horizontal",
    },
    1024: {
      slidesPerView: 5,
      direction: "horizontal",
    },
  },
})

//스크롤 이벤트

// $(document).scroll(function() {

//   var scrl = $(this).scrollTop()

//   if (scrl > 0) {
//     $("header").addClass("on")
//   } else if (scrl == 0) {
//     $("header").removeClass("on")
//   }

//   if(scrl < 350) {
//     $('.sect4_logo img').animate({'opacity':'1','top':'40%'})
//     $('.sect4_txt p').delay(200).animate({'opacity':'1','top':'40%'})
//     $('.sect4 button').delay(400).animate({'opacity':'1','top':'40%'})
//   }
//   else if(scrl < 350){
//     $('.sect4_logo img').animate({'opacity':'0','top':'70%'})
//     $('.sect4_txt p').animate({'opacity':'0','top':'70%'})
//     $('.sect4 button').delay(400).animate({'opacity':'0','top':'70%'})
//   }
// })
