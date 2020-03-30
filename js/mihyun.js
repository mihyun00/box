// $('a').click(function(e) {
//   e.preventDefault()
// })

//sect2
var swiper = new Swiper('.sect2-swiper-container', {
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//sect2 도서 클릭하면 해당되는 내용 표출
$(".sect2-swiper-container .swiper-slide .bookIMG a").click(function() {
  var href = $(this).attr("href")

  $(".sect2-slide-txtBOX-inner ul li").css({'opacity':0})
  $(href).css({'opacity':1})
})
$('.bookIMG a').click(function(e) {
  e.preventDefault()
})
//sect3 buootn 클릭하면 연도별 슬라이드 표출되며 버튼 색 변경
$(".year-btn button").click(function() {
  $(".year-btn button").removeClass("on")
  $(this).addClass("on")

  var Ye = $(this).index()
  $(".sect3-swiper-container").hide()
  $(".sect3-swiper-container")
    .eq(Ye)
    .show()
})

//sect3 swiper

var swiper = new Swiper(".sect3-01", {
  mousewheel: true,
  breakpoints: {
    200: {
      slidesPerView: 4,
      direction: "vertical",
      spaceBetween: 20
    },
    760: {
      slidesPerView: 4,
      direction: "horizontal"
    },
    1024: {
      slidesPerView: 5,
      direction: "horizontal"
    }
  }
})

var swiper = new Swiper(".sect3-02", {
  slidesPerView: 5,
  mousewheel: true,
  breakpoints: {
    200: {
      slidesPerView: 4,
      direction: "vertical",
      spaceBetween: 20
    },
    760: {
      slidesPerView: 4,
      direction: "horizontal"
    },
    1024: {
      slidesPerView: 5,
      direction: "horizontal"
    }
  }
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

