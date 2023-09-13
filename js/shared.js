

function showHamburger() {
  document.getElementById("hamburger-container").style.display = "block";
}

function hideHamburger() {
  document.getElementById("hamburger-container").style.display = "none";
}


$('a').on('click', function() {
  $(this).addClass('no-hover');
});


$(function(){
      $(".navigation-html").load("html/components/navigation.html"); 
    });

$(function(){
      $(".navigation-html").load("components/navigation.html"); 
    });

$(function(){
      $(".navigation-html").load("../components/navigation.html"); 
    });

$(function(){
      $(".navigation-html").load("../../components/navigation.html"); 
    });


$(function(){
  $(".project-picker-html").load("html/components/project-picker.html"); 
});

$(function(){
  $(".project-picker-html").load("components/project-picker.html"); 
});

$(function(){
  $(".project-picker-html").load("../components/project-picker.html"); 
});

$(function(){
  $(".project-picker-html").load("../../components/project-picker.html"); 
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementByClassName("navbar_fixed").style.top = "0";
  } else {
    document.getElementByClassName("navbar_fixed").style.top = "-50px";
  }
}








