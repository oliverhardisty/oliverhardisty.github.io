function imagezoomed(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}



    
    $("#infobutton1").click(function(){
        $("#infodrawer-container1").show();
        $("#infobutton1").hide();
    });
  
  $("#closebutton1, #behind-infodrawer1").click(function(){
        $("#infodrawer-container1").hide();
        $("#infobutton1").show();
    
    });

  $("#infobutton2").click(function(){
        $("#infodrawer-container2").show();
        $("#infobutton2").hide();
    });
  
  $("#closebutton2, #behind-infodrawer2").click(function(){
        $("#infodrawer-container2").hide();
        $("#infobutton2").show();
    });

$("#infobutton3").click(function(){
        $("#infodrawer-container3").show();
        $("#infobutton3").hide();
    });
  
  $("#closebutton3, #behind-infodrawer3").click(function(){
        $("#infodrawer-container3").hide();
        $("#infobutton3").show();
    });

$("#infobutton4").click(function(){
        $("#infodrawer-container4").show();
        $("#infobutton4").hide();
    });
  
  $("#closebutton4, #behind-infodrawer4").click(function(){
        $("#infodrawer-container4").hide();
        $("#infobutton4").show();
    
    });

  $("#infobutton5").click(function(){
        $("#infodrawer-container5").show();
        $("#infobutton5").hide();
    });
  
  $("#closebutton5, #behind-infodrawer5").click(function(){
        $("#infodrawer-container5").hide();
        $("#infobutton5").show();
    });

$("#infobutton6").click(function(){
        $("#infodrawer-container6").show();
        $("#infobutton6").hide();
    });
  
  $("#closebutton6, #behind-infodrawer6").click(function(){
        $("#infodrawer-container6").hide();
        $("#infobutton6").show();
    });
 
   
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
    document.getElementById("navbar_fixed").style.top = "0";
  } else {
    document.getElementById("navbar_fixed").style.top = "-56px";
  }
} 
 







    
