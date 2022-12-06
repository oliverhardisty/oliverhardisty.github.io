

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
      $(".navigation_content").load("html/shared/navigation.html"); 
    });

$(function(){
  $(".project-picker").load("html/shared/navigation.html"); 
});








