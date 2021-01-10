
$(document).ready(function(){

  // toggle job descriptions on click
  $('#toggleJobListingChatsworth').click(function(){
    if ($('#toggleJobListingChatsworth').hasClass('collapseJobListing')) {
      $('#jobDescriptionChatsworth').slideUp();
      $('#toggleJobListingChatsworth').removeClass('collapseJobListing');
      $('#toggleJobListingChatsworth').addClass('expandJobListing');
      document.getElementById('toggleJobListingChatsworth').innerHTML = '+';
      document.getElementById('JobListChatsworth').querySelector('.jobListing').querySelector('.employmentLength').innerHTML = 'NOV 2017 - PRESENT';
    } else {
      $('#jobDescriptionChatsworth').slideDown();
      $('#toggleJobListingChatsworth').removeClass('expandJobListing');
      $('#toggleJobListingChatsworth').addClass('collapseJobListing');
      document.getElementById('toggleJobListingChatsworth').innerHTML = '-';
      document.getElementById('JobListChatsworth').querySelector('.jobListing').querySelector('.employmentLength').innerHTML = 'JUN 2018 - PRESENT';
    };
  });


  $('#toggleJobListingPurered').click(function(){
    if ($('#toggleJobListingPurered').hasClass('collapseJobListing')) {
      $('#jobDescriptionPurered').slideUp();
      $('#toggleJobListingPurered').removeClass('collapseJobListing');
      $('#toggleJobListingPurered').addClass('expandJobListing');
      document.getElementById('toggleJobListingPurered').innerHTML = '+';
      document.getElementById('JobListPurered').querySelector('.jobListing').querySelector('.employmentLength').innerHTML = 'MAY 2016 - JUN 2018';
    } else {
      $('#jobDescriptionPurered').slideDown();
      $('#toggleJobListingPurered').removeClass('expandJobListing');
      $('#toggleJobListingPurered').addClass('collapseJobListing');
      document.getElementById('toggleJobListingPurered').innerHTML = '-';
      document.getElementById('JobListPurered').querySelector('.jobListing').querySelector('.employmentLength').innerHTML = 'MAR 2017 - JUN 2018';
    };
  });


  $('#toggleJobListingCorning').click(function(){
    if ($('#toggleJobListingCorning').hasClass('collapseJobListing')) {
      $('#jobDescriptionCorning').slideUp();
      $('#toggleJobListingCorning').removeClass('collapseJobListing');
      $('#toggleJobListingCorning').addClass('expandJobListing');
      document.getElementById('toggleJobListingCorning').innerHTML = '+';
    } else {
      $('#jobDescriptionCorning').slideDown();
      $('#toggleJobListingCorning').removeClass('expandJobListing');
      $('#toggleJobListingCorning').addClass('collapseJobListing');
      document.getElementById('toggleJobListingCorning').innerHTML = '-';
    };
  });


  $('#toggleJobListingElectrolux').click(function(){
    if ($('#toggleJobListingElectrolux').hasClass('collapseJobListing')) {
      $('#jobDescriptionElectrolux').slideUp();
      $('#toggleJobListingElectrolux').removeClass('collapseJobListing');
      $('#toggleJobListingElectrolux').addClass('expandJobListing');
      document.getElementById('toggleJobListingElectrolux').innerHTML = '+';
    } else {
      $('#jobDescriptionElectrolux').slideDown();
      $('#toggleJobListingElectrolux').removeClass('expandJobListing');
      $('#toggleJobListingElectrolux').addClass('collapseJobListing');
      document.getElementById('toggleJobListingElectrolux').innerHTML = '-';
    };
  });

  // collapse all job descriptions
  $('#toggleJobListingChatsworth').trigger('click');
  $('#toggleJobListingPurered').trigger('click');
  $('#toggleJobListingCorning').trigger('click');
  $('#toggleJobListingElectrolux').trigger('click');

  // navMenu toggle
  $('#navMenuIcon').on('click', function () {
    $('#navMenu').slideToggle('2000','swing');
  });

  // navMenu hide on click
  $('#navMenu').on('click', function () {
    if ($(window).width() <= '738') {
      $('#navMenu').hide();
    }
  });

  // show navMenu if browser is tablet size or above
  $(window).resize(function() {
    var browserWidth = $(window).width();
    if (browserWidth >= '738') {
      $('#navMenu').show();
    } else {
      $('#navMenu').hide();
    }
  });

  // make sure copyright in footer is current year
  var currentYear = new Date().getFullYear();
  $('#copyright').text('\u00A9 ' + currentYear + ' Chelsea Pike');


});
