(function ($) {
  'use strict';

  $(document).ready(function () {
    
    function blueasyTabs() {
      var $wrapper = $('.tab-wrapper'),
          $menu = $wrapper.find('.tab-menu li'),
          $content = $wrapper.find('.thumbs-row');
      
      $content.not(':first-of-type').hide();
      $content.each(function(i) {
        $(this).attr('data-tab', 'tab-'+i);
      });
      $menu.each(function(i) {
        $(this).attr('data-tab', 'tab-'+i);
      });
      
      $menu.click(function() {
        var $getWrapper = $(this).closest($wrapper),
            dataTab = $(this).attr('data-tab');
        
        $getWrapper.find($menu).find('a').removeClass('active');
        $(this).find('a').addClass('active');
        
        $getWrapper.find($content).hide();
        $getWrapper.find($content).filter('[data-tab='+dataTab+']').show();
      });
    }
    blueasyTabs();
    //end blueasyTabs
    
    function blueasyMenu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });
      
      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $menu.removeAttr('style');
        }
      });
    }
    blueasyMenu();

  }); //end ready

}(jQuery));