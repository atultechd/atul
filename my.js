$(window).on("scroll", function(event) {
  if($(window).scrollTop() >= 101.25) {
    $(".menu-container").css({
      position: 'fixed',
      top: '0px'
    })
    $(".parent .child.left-child").css({
      position: 'fixed',
      top: '42px'
    })
  } else {
    $(".menu-container").css({
      position: 'initial'
    })
    $(".parent .child.left-child").css({
      position: 'initial'
    })
  }
})