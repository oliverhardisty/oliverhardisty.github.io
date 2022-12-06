

function showHamburger() {
  document.getElementByClassName("navigation_hamburger").style.display = "block";
}

function hideHamburger() {
  document.getElementClassName("navigation_hamburger").style.display = "none";
}


$('a').on('click', function() {
  $(this).addClass('no-hover');
});


$(function(){
      $(".navbar_content").load("navbar.html"); 
    });








