var swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 3000
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
})

$(document).scroll(function() {
  var scrl = $(this).scrollTop()
  if (scrl > 0) {
    $("header").addClass("on")
  } else if (scrl == 0) {
    $("header").removeClass("on")
  }
})
