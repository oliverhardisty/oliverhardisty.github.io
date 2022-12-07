

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
      $(".navigation-html").load("html/shared/navigation.html"); 
    });

$(function(){
      $(".navigation-html").load("shared/navigation.html"); 
    });

$(function(){
  $(".project-picker-html").load("html/shared/project-picker.html"); 
});

$(function(){
  $(".project-picker-html").load("shared/project-picker.html"); 
});

$(document).ready(function () {
                $(".navigation > h2 > a").click(function (e) {
                    $(".navigation > h2").removeClass("active");
                    $(".navigation > h2 > a").css("color", "");
 
                    $(this).addClass("active");
                    $(this).css("color", "red");
                });
            });










