window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
    document.getElementById("navbar_fixed").style.top = "0";
  } else {
    document.getElementById("navbar_fixed").style.top = "-56px";
  }
}
