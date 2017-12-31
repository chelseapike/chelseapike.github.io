////////////////////////////////////////////////////////
//NAV Styles
////////////////////////////////////////////////////////

// menu slide in and out on click
$("#icon-menu").click(function() {
  $("#dropdown").slideToggle();
});

// hide menu after link click on mobile
if (screen.width < 768) {
  $(".menu-item").click(function() {
    $("#dropdown").hide();
  });
}

// apply name to nav once user scrolls past header
var navName = "<h1 class='nav-name'>Chelsea Clay</h1>";
$("nav > .wrapper").append(navName);
$(".nav-name").hide();

$(window).scroll(navScroll);

function navScroll(){
  var topofDiv = $("header").offset().top; //gets offset of header
  var height = $("header").outerHeight(); //gets height of header
  var topofDivSkills = $("#skills").offset().top;
  var heightSkills = $("#skills").outerHeight();

  if($(window).scrollTop() > (topofDiv + height * 0.5)){
     $(".nav-name").fadeIn();
  } else{
     $(".nav-name").fadeOut();
  }
}

////////////////////////////////////////////////////////
//RESUME Styles
////////////////////////////////////////////////////////

$(".plus").click(function() {
  $(this).siblings(".employment-details").slideToggle();
  var plusBTN = $(this);
  if (plusBTN.text() === "+") {
    plusBTN.html("--");
  } else {
    plusBTN.html("+");
  }
});

////////////////////////////////////////////////////////
//CONTACT Styles
////////////////////////////////////////////////////////

// make social icons roll in when users scroll to point
$(window).scroll(contactScroll);

function contactScroll() {
  var topofDivContact = $("#contact").offset().top;
  var heightContact = $("#contact").outerHeight();

  if (screen.width < 768) {
    if($(window).scrollTop() > (topofDivContact - heightContact * 1.1)){
      $("#githubProfile").animate({"margin-left": "0"}, 1500);
      $("#linkedinProfile").animate({"margin-left": "0"}, 1200);
    }
  } else if (screen.width >= 1024) {
    if($(window).scrollTop() > (topofDivContact - heightContact * 6)){
      $("#githubProfile").animate({"margin-left": "0"}, 1500);
      $("#linkedinProfile").animate({"margin-left": "0"}, 1200);
    }
  } else if (screen.width >= 768) {
    if($(window).scrollTop() > (topofDivContact - heightContact * 4)){
      $("#githubProfile").animate({"margin-left": "0"}, 1500);
      $("#linkedinProfile").animate({"margin-left": "0"}, 1200);
    }
  }
}
