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

//*****************************************************************************
// Do not remove this notice.
//
// Copyright 2001 by Mike Hall.
// See http://www.brainjar.com for terms of use.
//*****************************************************************************
function Browser() { var ua, s, i; this.isIE = false; this.isNS = false; this.version = null; ua = navigator.userAgent; s = "MSIE"; if ((i = ua.indexOf(s)) >= 0) { this.isIE = true; this.version = parseFloat(ua.substr(i + s.length)); return;}
s = "Netscape6/"; if ((i = ua.indexOf(s)) >= 0) { this.isNS = true; this.version = parseFloat(ua.substr(i + s.length)); return;}
s = "Gecko"; if ((i = ua.indexOf(s)) >= 0) { this.isNS = true; this.version = 6.1; return;}
}
function dragStart(event, id) { var el; var x, y; if (id)
dragObj.elNode = document.getElementById(id); else { if (browser.isIE)
dragObj.elNode = window.event.srcElement; if (browser.isNS)
dragObj.elNode = event.target; if (dragObj.elNode.nodeType == 3)
dragObj.elNode = dragObj.elNode.parentNode;}
if (browser.isIE) { x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft; y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;}
if (browser.isNS) { x = event.clientX + window.scrollX; y = event.clientY + window.scrollY;}
dragObj.cursorStartX = x; dragObj.cursorStartY = y; dragObj.elStartLeft = parseInt(dragObj.elNode.style.left, 10); dragObj.elStartTop = parseInt(dragObj.elNode.style.top, 10); if (isNaN(dragObj.elStartLeft)) dragObj.elStartLeft = 0; if (isNaN(dragObj.elStartTop)) dragObj.elStartTop = 0; dragObj.elNode.style.zIndex = ++dragObj.zIndex; if (browser.isIE) { document.attachEvent("onmousemove", dragGo); document.attachEvent("onmouseup", dragStop); window.event.cancelBubble = true; window.event.returnValue = false;}
if (browser.isNS) { document.addEventListener("mousemove", dragGo, true); document.addEventListener("mouseup", dragStop, true); event.preventDefault();}
}
function dragGo(event) { var x, y; if (browser.isIE) { x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft; y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;}
if (browser.isNS) { x = event.clientX + window.scrollX; y = event.clientY + window.scrollY;}
dragObj.elNode.style.left = (dragObj.elStartLeft + x - dragObj.cursorStartX) + "px"; dragObj.elNode.style.top = (dragObj.elStartTop + y - dragObj.cursorStartY) + "px"; if (browser.isIE) { window.event.cancelBubble = true; window.event.returnValue = false;}
if (browser.isNS)
event.preventDefault();}
function dragStop(event) { if (browser.isIE) { document.detachEvent("onmousemove", dragGo); document.detachEvent("onmouseup", dragStop);}
if (browser.isNS) { document.removeEventListener("mousemove", dragGo, true); document.removeEventListener("mouseup", dragStop, true);}
}
var browser = new Browser(); var dragObj = new Object(); dragObj.zIndex = 0;


}
/*
     FILE ARCHIVED ON 19:15:42 Sep 04, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:09:48 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.502
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 918.59
  LoadShardBlock: 124.849 (3)
  PetaboxLoader3.datanode: 110.871 (4)
  load_resource: 132.932
  PetaboxLoader3.resolve: 92.428
*/