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
  spaceBetween: 10,
  slidesPerView: 8,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  }
})

//a 태그 사용자 선택에 따라 위치 이동
var b = $(".line-a").offset().left

pointFuc(0)
$(".book-navtxt li").click(function() {
  var idx = $(this).index()
  pointFuc(idx)
})

function pointFuc(i) {
  var p = $(".book-navtxt li")
    .eq(i)
    .offset().left //각 li의 위치 값
  var h =
    $(".book-navtxt li")
      .eq(i)
      .width() / 2 //li의 width/2
  $(".line-a").animate({ left: p - b + h - 3 })
}
$(".book-navtxt li").click(function(e) {
  e.preventDefault()
})

//book-navtxt 메뉴 선택시 해당 분야 도서가 첫번째로 이동

//다른 분야로 swiper가 넘어갈 때 book-nevtxt, a 가 함께 이동 




// swiper_sect4.on("slideChange", function() {
//   var activeIdx = swiper.activeIndex
//   console.log(activeIdx)
 
// })

//sect3 모바일 버전 swiper
var swiper = new Swiper('.sect3-swiper-container', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 40,
    shadowScale: 1,
  },
  direction: 
    'vertical',
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // }
});

//스와이퍼 반응형 소스코드
// breakpoints: {
//   640: {
//     slidesPerView: 2,
//     spaceBetween: 20,
//   },
//   768: {
//     slidesPerView: 4,
//     spaceBetween: 40,
//   },
//   1024: {
//     slidesPerView: 5,
//     spaceBetween: 50,
//   },