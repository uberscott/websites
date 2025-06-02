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

	document.write (' '+
		'<h3>Latest jobs</h3>'+
            '    <h4>Fresh on the phpBB.com Job Board</h4>'+
		'<ul class="news">');

	for (var JC_i = 1; JC_i <= 5; JC_i++) {

		if(eval("typeof(JC_randomJob" + JC_i + "Link)") != "undefined") {

			document.write (' '+
				'<li><strong><a href="'+eval("JC_randomJob" + JC_i + "Link")+'">'+eval("JC_randomJob" + JC_i + "Title")+'</a></strong><br/>'+eval("JC_randomJob" + JC_i + "Company")+'</li>');

		}
	}

	document.write (' '+
		'<li class="last"><em><a style="background-image: url(/theme/images/favicons/jobcoin.png);" class="ads-favicon" href="'+JC_viewallLink+'">View all jobs</a></em> &bull; <em><a href="'+JC_postLink+'">Hiring? Post your job</a></em></li>'+
		'</ul>'+
		'<div class="mini-panel feed-stats">'+
		'	<div class="inner"><span class="corners-top"><span></span></span>'+
		'	<p><a href="https://web.archive.org/web/20070929004903/http://phpbb.jobcoin.com/jobs/jobs_rss">RSS feed of all jobs</a></p>'+
		'	<span class="corners-bottom"><span></span></span></div>'+
		'</div>');

}
/*
     FILE ARCHIVED ON 00:49:03 Sep 29, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:17:38 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.253
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 17.799
  LoadShardBlock: 307.928 (3)
  PetaboxLoader3.datanode: 186.364 (4)
  PetaboxLoader3.resolve: 379.65 (2)
  load_resource: 277.732
*/