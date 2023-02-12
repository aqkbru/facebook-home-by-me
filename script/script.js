$(function(){


    $("#btn").click(function(){
      $(".modal-container").css("visibility","visible");
    });
    
    $("#close").click(function(){
      $(".modal-container").css("visibility","hidden");
    });

    $(".diretta").click(function(){
      $(".diretta-js").toggleClass("diretta-js-on");
    });

    $(".fotovideo").click(function(){
      $(".fotovideo-js").toggleClass("fotovideo-js-on");
    });

    $(".attività").click(function(){
      $(".attività-js").toggleClass("emoticon-on");
    });

    $(".trigger1").click(function(){
      $(".like").toggleClass("like-blu");
    });

    $(".trigger2").click(function(){
      $(".like2").toggleClass("like-blu");
    });

    $(".trigger3").click(function(){
      $(".like3").toggleClass("like-blu");
    });

    $(".trigger4").click(function(){
      $(".popup").toggleClass("popup-on");
    });

    $(".trigger5").click(function(){
      $(".popup5").toggleClass("popup-on");
    });
  
    $(".trigger6").click(function(){
      $(".popup6").toggleClass("popup-on");
    });

    $(".trigger7").click(function(){
      $(".share7").toggleClass("share-on");
    });

    $(".trigger8").click(function(){
      $(".share8").toggleClass("share-on");
    });

    $(".trigger9").click(function(){
      $(".share9").toggleClass("share-on");
    });


    /* variabili */

    var nav = $(".leaderboard-cx");
    var line = $(".line-menu");

    nav.find("ul li").click(function () {
        
      var this_nav = $(this);
        
      line.animate({
        left: this_nav.position().left
      })

      
      

      
      });
    

    




});

