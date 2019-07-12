var header = $("header"),
    headerHeight = header.height(), 
 	 	logo = $(".logo"), 
 	 	logoHeight = logo.height(), 
 	 	scrollTo = 120; 

$(window).on("scroll", function() {
  var yPos = $(this).scrollTop(), 
  	  yPer = (yPos / scrollTo); 

  if (yPer > 1) {
    yPer = 1;
  }

  var logoPos = ( -1*(yPer*50)+50), 
    	logoSize = ((headerHeight*yPer)-(logoHeight*yPer)+logoHeight), 
    	headerPos = ((yPer * headerHeight) - headerHeight); 
	

  logo.css({
    top: logoPos + "%",
    left: logoPos + "%",
    transform: "translate3d(-" + logoPos + "%,-" + logoPos + "%,0)",
    height: logoSize
  });

  $('header').css({

		top: headerPos,
    opacity: yPer
  });
});
