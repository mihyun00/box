
      var swiper = new Swiper(".sect1_swiper-container", {
        spaceBetween: 30,
        autoplay: {
          delay: 3000
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      })