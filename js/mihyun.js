//sect2

var swiper = new Swiper(".new", {
  slidesPerView: 5,
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
})

var swiper = new Swiper(".best", {
  slidesPerView: 5,
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
})

var swiper = new Swiper(".chu", {
  slidesPerView: 5,
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
})

var swiper = new Swiper(".prime", {
  slidesPerView: 5,
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
})

var swiper = new Swiper(".ebook", {
  slidesPerView: 5,
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
})
//도서 탭 클릭하면 글씨 클래스 on + 도서 슬라이드 변경
$(".sect2-tap ul li a").click(function (e) {
  e.preventDefault()
  $(".sect2-tap ul li a").removeClass("on")
  $(this).addClass("on")
  var href = $(this).attr("href")
  $(".sect2-bookslide>div").hide().css({opacity:'0'})
  $(href).show().css({opacity:'1'})
})

// //sect2 도서 클릭하면 해당되는 내용 표출
$(".sect2-swiper-container .swiper-slide a").click(function (e) {
  e.preventDefault()
  var href = $(this).attr("href")
  // alert(href)

  $(".sect2-book-txt ul li").stop().css({ display: "none"}, 500).animate({ marginTop: "16%",opacity:'0'  })
  $(href).stop().css({ display: "block"}).animate({ marginTop: "14%" ,opacity:'1' })
})

//sect3 buootn 클릭하면 연도별 슬라이드 표출되며 버튼 색 변경
$(".year-btn button").click(function () {
  $(".year-btn button").removeClass("on")
  $(this).addClass("on")

  var Ye = $(this).index()
  $(".sect3-swiper-container").hide()
  $(".sect3-swiper-container").eq(Ye).show()
})

//sect3 swiper

var swiper = new Swiper(".sect3-01", {
  slidesPerView: 5,
  mousewheel: true,
  slidesPerView: "auto",
  freeMode: true,
  breakpoints: {
    200: {
      slidesPerView: 4,
      direction: "vertical",
      spaceBetween: 20,
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
  freeMode: true,
  breakpoints: {
    200: {
      slidesPerView: 4,
      direction: "vertical",
      spaceBetween: 20,
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
