/* javascript -> jQuery generic template file
 * ============================================================================================== */
 
$(document).ready(function(){
  
  $('.example').customFunction();
  
});


(function($) {
  
  jQuery.fn.preventEvent = function( options ) {
    
    $.fn.preventEvent.defaultOptions = {
      class: 'watermark',
      text: 'belgrade',
      name: 'simo'
    }
    
    options = $.extend( {} , $.fn.preventEvent.defaultOptions, options );
    
  };
  
  jQuery.fn.menuanim = function() {

		if( $(this).length ) {
			
			$(this).on('mouseenter', function() {
				$(this).children('ul').slideDown();
			}).on('mouseleave', function() {
				$(this).children('ul').hide();
			});
			
		}//end if exist
		
  };
	
  jQuery.fn.customFunction = function() {
    return this.each(function() {
      var $this = $(this);
      $this.click(function(event) {
        event.preventDefault();
      });
    });
  };
  
})(jQuery);
