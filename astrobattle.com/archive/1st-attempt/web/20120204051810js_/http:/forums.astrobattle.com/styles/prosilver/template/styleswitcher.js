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


function fontsizeup()
{
	var active = getActiveStyleSheet();

	switch (active)
	{
		case 'A--':
			setActiveStyleSheet('A-');
		break;

		case 'A-':
			setActiveStyleSheet('A');
		break;

		case 'A':
			setActiveStyleSheet('A+');
		break;

		case 'A+':
			setActiveStyleSheet('A++');
		break;

		case 'A++':
			setActiveStyleSheet('A');
		break;

		default:
			setActiveStyleSheet('A');
		break;
	}
}

function fontsizedown()
{
	active = getActiveStyleSheet();

	switch (active)
	{
		case 'A++' : 
			setActiveStyleSheet('A+');
		break;

		case 'A+' : 
			setActiveStyleSheet('A');
		break;

		case 'A' : 
			setActiveStyleSheet('A-');
		break;

		case 'A-' : 
			setActiveStyleSheet('A--');
		break;

		case 'A--' : 
		break;

		default :
			setActiveStyleSheet('A--');
		break;
	}
}

function setActiveStyleSheet(title)
{
	var i, a, main;

	for (i = 0; (a = document.getElementsByTagName('link')[i]); i++)
	{
		if (a.getAttribute('rel').indexOf('style') != -1 && a.getAttribute('title'))
		{
			a.disabled = true;
			if (a.getAttribute('title') == title)
			{
				a.disabled = false;
			}
		}
	}
}

function getActiveStyleSheet()
{
	var i, a;

	for (i = 0; (a = document.getElementsByTagName('link')[i]); i++)
	{
		if (a.getAttribute('rel').indexOf('style') != -1 && a.getAttribute('title') && !a.disabled)
		{
			return a.getAttribute('title');
		}
	}

	return null;
}

function getPreferredStyleSheet()
{
	return ('A-');
}

function createCookie(name, value, days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		var expires = '; expires=' + date.toGMTString();
	}
	else
	{
		expires = '';
	}

	document.cookie = name + '=' + value + expires + style_cookie_settings;
}

function readCookie(name)
{
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');

	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];

		while (c.charAt(0) == ' ')
		{
			c = c.substring(1, c.length);
		}

		if (c.indexOf(nameEQ) == 0)
		{
			return c.substring(nameEQ.length, c.length);
		}
	}

	return null;
}

function load_cookie()
{
	var cookie = readCookie('style_cookie');
	var title = cookie ? cookie : getPreferredStyleSheet();
	setActiveStyleSheet(title);
}

function unload_cookie()
{
	var title = getActiveStyleSheet();
	createCookie('style_cookie', title, 365);
}

onload_functions.push('load_cookie()');
onunload_functions.push('unload_cookie()');

/*
var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
*/


}
/*
     FILE ARCHIVED ON 14:25:36 Feb 26, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:11:25 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.33
  exclusion.robots: 0.01
  exclusion.robots.policy: 0.005
  esindex: 0.006
  cdx.remote: 93.385
  LoadShardBlock: 127.703 (3)
  PetaboxLoader3.datanode: 153.954 (4)
  load_resource: 139.845
  PetaboxLoader3.resolve: 60.77
*/