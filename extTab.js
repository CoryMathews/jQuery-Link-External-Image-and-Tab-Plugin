/*!
 * jQuery External Image and Tab Plugin
 * Examples and documentation at: http://corymathews.com/719/jquery-external-image-and-tab-plugin/
 * By: Cory Mathews (corymathews.com)
 * Version: 1 (20110914)
 * License: WTFPL (http://en.wikipedia.org/wiki/WTFPL)
 */
(function($){
	$.fn.extTab = function(params) {
        var defaults = { 
            blank:true,
            path:'',
            ignore:''
        };
        params = $.extend(defaults, params);

        var t = $(this).find("a[href^='http:']").not("[href*='" + document.location.host + "']");
        if(params.ignore != '') {
        	t = t.not("[class*='" + params.ignore + "']");
        }
    	if(params.blank) {
    		t.attr( "target", "_blank" );
    	}
    	if(params.path != '') {
    		t.append(' <img src="http://' + document.location.host + params.path + '">'); 
    	}
    };
})(jQuery);