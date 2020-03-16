//sect3 slide 
$(".sect3-slide").mCustomScrollbar({
    axis: "x", // vertical and horizontal scrollbar
    theme: "dark-thin"
  })
  //sect3 buootn
  $(".year-button").click(function(){
      //button 부분 . 클릭하는 버튼만 배경, 글자색 변경
      $(".year-button").removeClass('on')
      $(this).addClass('on')
      //slide 부분 . 클릭하는 연도의 slide 표출
  
  })