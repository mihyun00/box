var swiper = new Swiper(".sect1_swiper-container", {
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


  if(scrl < 350) {
    $('.sect2_logo img').animate({'opacity':'1','top':'40%'})
    $('.sect2_txt p').delay(200).animate({'opacity':'1','top':'40%'})
    $('.sect2 button').delay(400).animate({'opacity':'1','top':'40%'})
  }
  else if(scrl < 350){
    $('.sect2_logo img').animate({'opacity':'0','top':'70%'})
    $('.sect2_txt p').animate({'opacity':'0','top':'70%'})
    $('.sect2 button').delay(400).animate({'opacity':'0','top':'70%'})
  }    
})
  



