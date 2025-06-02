var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document
// Used by the CSS layout page to adjust the height and width of columns depending on content.

function adjustHeight() {
	
	// Get the height of nav and content
	var navHeight = document.getElementById('nav').offsetHeight;
	var contentHeight = document.getElementById('content').offsetHeight;
	
	// Set the height of the main container to the same as the tallest column.
	document.getElementById('main').style.height = Math.max(navHeight, contentHeight) + 50;
}


function adjustLayout(n, c) {

	// Get the height of nav and content
	var navHeight = document.getElementById('nav').offsetHeight;
	var contentHeight = document.getElementById('content').offsetHeight;
	
	// Set the height of the main container to the same as the tallest column.
	document.getElementById('main').style.height = Math.max(navHeight, contentHeight);
	
	// This needs to be used when the done when using relative positioning
	// Check if nav height is taller than content height
	//if(navHeight > contentHeight) {
		// sets height of main container to nav height plus 100 for IE
		//document.getElementById('main').style.height = navHeight;
	//}
	
	// Get width of nav, content, and main
	var navWidth = document.getElementById('nav').offsetWidth;
	var contentWidth = document.getElementById('content').offsetWidth;
	var wrapWidth = document.getElementById('wrap').offsetWidth;
	var wrapWidthFlag = false;
			
	if(navWidth > wrapWidth * n) {
		// pushes the content column to the right.
		wrapWidthFlag = true;
	}
	
	if((contentWidth > wrapWidth * c) || wrapWidthFlag == true)
	{
		// expands the width of the wrap.
		if ((navWidth + contentWidth) > 800)
		{
			document.getElementById('wrap').style.width =  (navWidth + contentWidth + (wrapWidth * 0.03)) * 1.03;
			
			if(navigator.appName == 'Microsoft Internet Explorer')
			{
				document.getElementById('content').style.left = navWidth + (0.02 * wrapWidth);
				document.getElementById('nav').style.width = navWidth;
				document.getElementById('content').style.width = contentWidth;
			}
			else
			{	
				document.getElementById('content').style.left = document.getElementById('nav').offsetWidth + (0.02 * wrapWidth);
			}
		}
	}
}


}
/*
     FILE ARCHIVED ON 14:12:37 Aug 31, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:34:29 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.809
  exclusion.robots: 0.035
  exclusion.robots.policy: 0.021
  esindex: 0.022
  cdx.remote: 63.071
  LoadShardBlock: 134.662 (3)
  PetaboxLoader3.datanode: 216.126 (4)
  load_resource: 221.917
  PetaboxLoader3.resolve: 115.477
*/