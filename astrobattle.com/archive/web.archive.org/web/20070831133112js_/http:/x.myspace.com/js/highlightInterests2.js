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

function highlightInterests(IDString)
{
	if (document.getElementById)
	{
		var elem = document.getElementById(IDString);
		if (elem == undefined)
			return;
			
		inputString = elem.innerHTML;
		
		
		/*
			Delimiters in hex:
			,	\x2C
			(	\x28
			)	\x29
			-	\x2D
			:	\x3A
			;	\x3B
			*	\x2A
			/	\x2F
			\	\x5C
			.	\x2E
			!	\x21
			?	\x3F
			{	\x7B
			}	\x7D
			[	\x5B
			]	\x5D
			+	\x2B
			Control chars in hex:
			<	\x3C
			>	\x3E
		*/
		var HTML = /([\x3C\x3E])/gi;
		var Items = /([^\s\x2C\x28\x29\x2D\x3A\x3B\x2A\x2F\x5C\x2E\x21\x3F\x7B\x7D\x5B\x5D\x2B]+([\s]+[^\s\x2C\x28\x29\x2D\x3A\x3B\x2A\x2F\x5C\x2E\x21\x3F\x7B\x7D\x5B\x5D\x2B]+)*)/g;
		var outputString = inputString;
		if (!HTML.test(outputString) && outputString.indexOf('<z>') == -1)
		{
			outputString = outputString.replace(Items, "<A HREF=\"#\" CLASS=\"searchlinksmall\" onclick=\"executeSearch(this.innerHTML);return false;\">$1</A>");
			document.getElementById(IDString).innerHTML = outputString;
		}
	}
}

function executeSearch(linkRef)
{
	location.href = "https://web.archive.org/web/20070831141122/http://searchresults.myspace.com/index.cfm?fuseaction=advancedFind.results&websearch=1&spotId=4&SearchType=MySpace&SearchBoxID=ProfileClick&LogID=user.viewProfile&SearchRequest=" + encodeURI(linkRef);
}


}
/*
     FILE ARCHIVED ON 14:11:22 Aug 31, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:40:31 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.721
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.011
  esindex: 0.012
  cdx.remote: 128.162
  LoadShardBlock: 109.851 (3)
  PetaboxLoader3.datanode: 106.236 (4)
  PetaboxLoader3.resolve: 75.509 (2)
  load_resource: 104.87
*/