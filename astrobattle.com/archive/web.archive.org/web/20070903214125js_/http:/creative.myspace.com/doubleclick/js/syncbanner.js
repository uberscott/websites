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

var show_728x90_default;
var show_300x250_default;
show_728x90_default = true;
show_300x250_default = true;
var defaultTag = ""; 

function syncBanner(tag,which)
{
    if(tag == 'null')
    {
        if(which == "300x250" && show_300x250_default)
        {
        document.getElementById("tkn_medrec").innerHTML = "<br><br><font face=verdana size=1 color=red><b>"+defaultTag+"</b></font>";
        show_300x250_default = false;
        }
        if(which == "728x90" && show_728x90_default)
        {
        document.getElementById("tkn_leaderboard").innerHTML = "<br><br><font face=verdana size=1 color=red><b>"+defaultTag+"</b></font>";
        show_728x90_default = false;
        }
        if(which == "all")
        {
            if(show_300x250_default)
            {
	        document.getElementById("tkn_medrec").innerHTML = "<br><br><font face=verdana size=1 color=red><b>"+defaultTag+"</b></font>";
	        show_300x250_default = false;
	        }
	        if(show_728x90_default)
	        {
	        document.getElementById("tkn_leaderboard").innerHTML = "<br><br><font face=verdana size=1 color=red><b>"+defaultTag+"</b></font>";                                  
	        show_728x90_default = false;
	        }
        }
    }
    else
    {
		if(which == "300x250")
		{
		document.getElementById("tkn_medrec").innerHTML = '<iframe src="' + tag + '" WIDTH=300 HEIGHT=250 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0>' + '</iframe>';
		show_300x250_default = false;
		}
		if(which == "728x90")
		{
		document.getElementById("tkn_leaderboard").innerHTML = '<iframe src="' + tag + '" WIDTH=728 HEIGHT=90 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0>' + '</iframe>';
		show_728x90_default = false;
		}
    }
}


}
/*
     FILE ARCHIVED ON 19:15:46 Sep 04, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:09:53 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.483
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.01
  esindex: 0.01
  cdx.remote: 31.747
  LoadShardBlock: 92.69 (3)
  PetaboxLoader3.datanode: 131.448 (4)
  load_resource: 193.602
  PetaboxLoader3.resolve: 117.637
*/