$(document).ready(function() 
{  
  
  $('a#introSection').on('click', function()
    {
      $('html, body').animate(
      {
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
      return false;
  });
    $('a#gitSection').on('click', function()
    {
	    $('html, body').animate(
	    {
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1000);
	    return false;
	});
    $('a#techRadarSection').on('click', function()
    {
      $('html, body').animate(
      {
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
      return false;
  });
    $('a#hackNightSection').on('click', function()
    {
      $('html, body').animate(
      {
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
      return false;
  });
    $(window).scroll(function()
    {
      if ($(this).scrollTop() > 200) 
      {  
          $('#header-container').stop().fadeTo('medium', 1);
          $('#header-container').css('pointer-events', 'all');
      } 
      else 
      {
          $('#header-container').stop().fadeTo('medium', 0); 
          $('#header-container').css('pointer-events', 'none');
      }
    });
});