$(document).ready(function() {  
//opacity = 1 - completely opaque  
//opacity = 0 - invisible  
  
$('#gitNavBar').css('opacity', 0);  
$('#hackNightNavBar').css('opacity', 0);  
$('#techRadarNavBar').css('opacity', 0);  
$('#logoNavBar').css('opacity', 0);  

// when hover over git button and show the git nav bar
$('.gitButton').hover(  
   function(){  
      $('#gitNavBar').stop().fadeTo('fast', 1);  
   },  
   function(){  
      $('#gitNavBar').stop().fadeTo('fast', 0);
   });  
$('.gitButton').click(  
   function(){  
      if ($('#mobileGitBar').css('float') == 'none')
      {
         $('#gitNavBar').delay(3000).hide();
      }
   });  
  
// when hover over tech radar button and show the tech radar nav bar
$('.techRadarButton').hover(  
   function(){  
      $('#techRadarNavBar').stop().fadeTo('fast', 1);  
   },  
   function(){  
      $('#techRadarNavBar').stop().fadeTo('fast', 0); 
   });  
$('.techRadarButton').click(  
   function(){  
      if ($('#mobileTechBar').css('float') == 'none')
      {
         $('#techRadarNavBar').delay(3000).hide();
      }  
   });  
  
// when hover over hack night button and show the hack night nav bar
$('.hackNightButton').hover(  
   function(){  
      $('#hackNightNavBar').stop().fadeTo('fast', 1);  
   },  
   function(){  
      $('#hackNightNavBar').stop().fadeTo('fast', 0);
   });
$('.hackNightButton').click(   
   function(){  
      if ($('#mobileHackBar').css('float') == 'none')
      {
         $('#hackNightNavBar').delay(3000).hide();
      }
   });


// when hover over logo text and show the logo nav bar
$(".logo").hover(  
   function(){  
      $('#logoNavBar').stop().fadeTo('fast', 1);  
   },  
   function(){  
      $('#logoNavBar').stop().fadeTo('fast', 0);
   });
$(".logo").click(    
   function(){  
      if ($('#mobileLogoBar').css('float') == 'none')
      {
         $('#logoNavBar').delay(3000).hide();
      } 
   });

});  