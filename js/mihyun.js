//sect3 커스텀 스크롤
$(".sect3-slide").mCustomScrollbar({
  axis: "x", // vertical and horizontal scrollbar
  theme: "dark-thin"
})

//sect3 buootn 클릭하면 연도별 슬라이드 표출되며 버튼 색 변경
$(".2000year").hide()
$(".year-btn button").click(function() {
  $(".year-btn button").removeClass("on")
  $(this).addClass("on")

  var Ye = $(this).index()
  $(".sect3-slide ul").hide()
  $(".sect3-slide ul")
    .eq(Ye)
    .show()
})

//sect4 swiper
var swiper_sect4 = new Swiper(".sect4-swiper-container", {
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 30
    }
  }
})

//a 태그 사용자 선택에 따라 위치 이동
var b = $(".line-a").offset().left

pointFuc(0)
$(".book-navtxt li").click(function() {
  var idx = $(this).index()
  console.log(idx)
  pointFuc(idx)
})

function pointFuc(i) {
  var p = $(".book-navtxt li")
    .eq(i)
    .offset().left
  var h =
    $(".book-navtxt li")
      .eq(i)
      .width() / 2
  $(".line-a").animate({ left: p - b + h - 3 })
  // $(window).resize(function() {
  //   var p = $(".book-navtxt li")
  //     .eq(i)
  //     .offset().left
  //   // console.log(p)
  //   var h =
  //     $(".book-navtxt li")
  //       .eq(i)
  //       .width() / 2
  //   $(".line-a").animate({ left: p - b + h - 3 })
  // })
}
$(".book-navtxt li").click(function(e) {
  e.preventDefault()
})












// swiper_sect4.on("slideChange", function() {
// var activeIdx = swiper_sect4.activeIndex
// // console.log(activeIdx)
// })

// $(".book-navtxt li a").click(function() {

  


// })



//book-navtxt 메뉴 선택시 해당 분야 도서가 첫번째로 이동

//다른 분야로 swiper가 넘어갈 때 book-nevtxt, a 가 함께 이동

// 무엇의.on("slideChange", function() {
//   var activeIdx = swiper.activeIndex
//   console.log(activeIdx)

// })
