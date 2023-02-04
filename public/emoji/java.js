$(function () {
		
  var filterList = {
  
    init: function () {
    
      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'	
        },
        load: {
          filter: '.happy, .sad, .angry, .neutral, .idk'  
        }     
      });								
    
    }

  };
  
  // Run the show!
  filterList.init();
   
});		