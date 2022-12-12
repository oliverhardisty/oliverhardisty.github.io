function imagezoomed(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}



    
    $("#infobutton1").click(function(){
        $("#infodrawer1").show();
        $("#infobutton1").hide();
    });
  
  $("#closebutton1.behind-infodrawer").click(function(){
        $("#infodrawer1").hide();
        $("#infobutton1").show();
    
    });

  $("#infobutton2").click(function(){
        $("#infodrawer2").show();
        $("#infobutton2").hide();
    });
  
  $("#closebutton2").click(function(){
        $("#infodrawer2").hide();
        $("#infobutton2").show();
    });

$("#infobutton3").click(function(){
        $("#infodrawer3").show();
        $("#infobutton3").hide();
    });
  
  $("#closebutton3").click(function(){
        $("#infodrawer3").hide();
        $("#infobutton3").show();
    });

$("#infobutton4").click(function(){
        $("#infodrawer4").show();
        $("#infobutton4").hide();
    });
  
  $("#closebutton4").click(function(){
        $("#infodrawer4").hide();
        $("#infobutton4").show();
    
    });

  $("#infobutton5").click(function(){
        $("#infodrawer5").show();
        $("#infobutton5").hide();
    });
  
  $("#closebutton5").click(function(){
        $("#infodrawer5").hide();
        $("#infobutton5").show();
    });

$("#infobutton6").click(function(){
        $("#infodrawer6").show();
        $("#infobutton6").hide();
    });
  
  $("#closebutton6").click(function(){
        $("#infodrawer6").hide();
        $("#infobutton6").show();
    });
 
   

  
  
  
 







    
