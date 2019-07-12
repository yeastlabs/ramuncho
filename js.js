var header = $("header"),
    headerHeight = header.height(), // Get height of header
 	 	logo = $(".logo"), // Get the logo
 	 	logoHeight = logo.height(), // Get logo height
 	 	scrollTo = 120; // Animation until scrolled to this point

// Scroll function
$(window).on("scroll", function() {
  // Dynamic variables - That do change while scrolling
  var yPos = $(this).scrollTop(), // Get the scroll Y-position
  	  yPer = (yPos / scrollTo); // Calculate percenage of scroll

  // If percentage is over 100, set to 100
  if (yPer > 1) {
    yPer = 1;
  }
  // Dynamic variables for the elements
  var logoPos = ( -1*(yPer*50)+50), // Calculate position of logo (starting from 50%)
    	logoSize = ((headerHeight*yPer)-(logoHeight*yPer)+logoHeight), // Calculate new size height for logo
    	headerPos = ((yPer * headerHeight) - headerHeight); // Calculate position of header (starting from minus the height of itself)

  // Change the top, left, transform and height of the logo
  logo.css({
    top: logoPos + "%",
    left: logoPos + "%",
    transform: "translate3d(-" + logoPos + "%,-" + logoPos + "%,0)",
    height: logoSize
  });
  // Change the transform and opacity of the header
  $('header').css({
    //transform: "translate3d(0," + headerPos + "px,0)",
		top: headerPos,
    opacity: yPer
  });
});

window.onscroll = function() {scrollFunction()};
