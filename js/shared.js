

function showHamburger() {
  document.getElementById("navigation_hamburger").style.display = "block";
}

function hideHamburger() {
  document.getElementById("navigation_hamburger").style.display = "none";
}


$('a').on('click', function() {
  $(this).addClass('no-hover');
});


$(function(){
      $(".navigation_content").load("navigation.html"); 
    });








