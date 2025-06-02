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

rsi_secure = (location.protocol=='https:') ? 1 : 0;
rsi_ju  = "http" + (rsi_secure ? "s" : "") + "://ads.revsci.net/adserver/ako?rsi_check=1&rsi_noads=1&rsi_random=" + ("" + Math.random()).substring(2,11);
function rsi_ap(n,v) { if (typeof(v) != "undefined") { rsi_ju += "&" + n + "=" + escape(v); } }
var w = window;
rsi_ap("rsi_pub", w.rsi_pub);
rsi_ap("rsi_site", w.rsi_site);
rsi_ap("rsi_width",w.rsi_width);
rsi_ap("rsi_height",w.rsi_height);
document.write("<script type=\"text/javascript\" src=\"" + rsi_ju + "\"><" + "/script>");


}
/*
     FILE ARCHIVED ON 13:41:17 Dec 10, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:12:41 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.896
  exclusion.robots: 0.042
  exclusion.robots.policy: 0.02
  esindex: 0.02
  cdx.remote: 56.059
  LoadShardBlock: 172.911 (3)
  PetaboxLoader3.datanode: 202.507 (4)
  load_resource: 214.445
  PetaboxLoader3.resolve: 123.939
*/