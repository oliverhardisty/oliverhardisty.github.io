$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $intro = $('.intro-container'),
      $panel = $('.panel');

  
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + 600;
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {


      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });      
}).scroll();



$(window).scroll(function () {
    $('.gradient-top').each(function () {
          if (($(this).offset().top - $(window).scrollTop()) < -250) {
              $(this).stop().fadeTo(100, 0);
          } else {
              $(this).stop().fadeTo('fast', 1);
          }
    });
    $('.arrow').each(function () {
          if (($(this).offset().top - $(window).scrollTop()) < 500) {
              $(this).stop().fadeTo(100, 0);
          } else {
              $(this).stop().fadeTo('fast', 1);
          }
    });
    $('.intro-container').each(function () {
        if (($(this).offset().top - $(window).scrollTop()) < -100) {
            $(this).stop().fadeTo(100, 0);
        } else {
            $(this).stop().fadeTo('fast', 1);
        }
    });
     
    $('.gradient-bottom').each(function () {
        if (($(this).offset().top - $(window).scrollTop()) < - 400) {
            $(this).stop().fadeTo(0, 100);
        } else {
            $(this).stop().fadeTo('fast', 0);
        }
    });
});

