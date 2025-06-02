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

var lycos_ad = Array();
var lycos_search_query = "";
var lycos_onload_timer;
var if_Site_ID = "lycos";
var if_sid=108;
var mep1="&Property=Tripod&tripodUsertype=visitor";

function lycos_load_script(url) {
    document.write('<script type="text/javascript" src="' + url + '"></script>');
}

function lycos_load_style(url) {
    if (document.createStyleSheet) {
        document.createStyleSheet(url);
    } else {
	if (document.createElement && document.getElementsByTagName) {
	    var link = document.createElement("link");
	    link.rel = "stylesheet";
	    link.type = "text/css";
	    link.href = url;
	    link.media = "screen";
	    document.getElementsByTagName('head').item(0).appendChild(link);
	}
    }
}

function lycos_get_cookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
}

function lycos_get_query_variable(varname) {
    var qs = window.location.search.substring(1);
    var pairs = qs.split("&");
    
    for (var i = 0; i < pairs.length; i++) {
	var pos = pairs[i].indexOf('=');
	if (pos == -1) {continue;}
	var argname = pairs[i].substring(0,pos);
	var argvalue = pairs[i].substring(pos+1);
	if (argname == varname) {
            return decodeURIComponent(argvalue.replace("+", " "));
	}
    }
    return null;
}


function lycos_show_bottom_ad() {
    // quit if this function has already been called
    if (arguments.callee.done) return;
    arguments.callee.done = true;
    if (this.lycos_onload_timer) clearInterval(lycos_onload_timer);

    if (document.getElementById && document.getElementsByTagName) {
	var footer_ad = document.getElementById("FooterAd");
	var body_element = document.getElementsByTagName("body").item(0);
	if (footer_ad && body_element) {
	    body_element.appendChild(footer_ad);
	    footer_ad.style.display = "block";
	}
    }
}

function lycos_check_size() {
    var window_width = 0, window_height = 0;
    if (typeof(window.innerWidth) == 'number' ) {
        window_width = window.innerWidth;
        window_height = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        window_width = document.documentElement.clientWidth;
        window_height = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        window_width = document.body.clientWidth;
        window_height = document.body.clientHeight;
    }

    var lycos_track_img = document.createElement('img');
    if( top == self ) {
        return 1;
    } else {
        if ((window_width < 300) || (window_height < 300)) {
            lycos_track_img.src=this.lycos_ad_track_small+"&w="+window_width+"&h="+window_height;
            return 0;
        } else {
            lycos_track_img.src=this.lycos_ad_track_served+"&w="+window_width+"&h="+window_height;
            return 1;
        }
    }


}

function lycos_top100(dir) {
    top.location.href='https://web.archive.org/web/20070630213227/http://lt.tripod.com/tp_toolbar/'+dir+'/_h_/'+this.lycos_ad_www_server+'/bin/top100/top100.pl?a='+dir+"&url="+location.href;
}

function lycos_get_search_referrer() {
    var searchReferrers=[[/^http:\/\/search.msn.com\/.*[\?\&]q=([a-zA-Z0-9_\+%\-\.\: \'\"]+)/i, 1],
                         [/^http:\/\/.*[\?\&]q=cache[^\+]*[\+]([a-zA-Z0-9_\+%\-\.\: \'\"]+)/i, 1],
                         [/^http:\/\/.*looksmart.com\/.*[\?\&]key=([a-zA-Z0-9_\+%\-\.\: \'\"]+)/i, 1],
                         [/^http:\/\/.*[\?\&\/](query|search|MT|q|p|ask|key|qkw|k|qry|K)=([a-zA-Z0-9_\+%\-\.\: \'\"]+)/i, 2]];
    var query;
    for (var i=0; i<searchReferrers.length; i++) {
        var result = document.referrer.match(searchReferrers[i][0]);
        if (result) {
            query = unescape(result[searchReferrers[i][1]].replace("+", " "));
            break;
        }
    }
    return query;
}

function lycos_draw_promo() {
    var promo_html;

    promo_html = '  <div class="sponsorBar">' +
	'   <div>Site Sponsors</div>' +
	'   <a href="https://web.archive.org/web/20070630213227/http://www.lycos.playp.biz/mobringtones/Default.aspx?StoreFrontID=0006-0006-3000-0010" target="_blank"><img src="https://web.archive.org/web/20070630213227/http://af.lygo.com/d/toolbar/sponsors/pphone_ringtones_logo.jpg" width="58" height="20" alt="sponsor logo" title="PlayPhone"/></a>' +
	'   <a href="https://web.archive.org/web/20070630213227/http://www.careerbuilder.com/?lr=cblycos&siteid=lycoshp2" target="_blank"><img src="https://web.archive.org/web/20070630213227/http://af.lygo.com/d/toolbar/sponsors/75x20-lycos_jobs.gif" width="75" height="20" alt="sponsor logo" title="Find the job you&#8217;re looking for today! - Lycos Jobs"/></a>' +
	'   <a href="https://web.archive.org/web/20070630213227/http://www.listen.com/disty/index.jsp?from=lycos" target="_blank"><img src="https://web.archive.org/web/20070630213227/http://af.lygo.com/d/toolbar/sponsors/rhapsody_logo.jpg" width="70" height="20" alt="sponsor logo" title="Rhapsody"/></a>' +
	'   <iframe src="https://web.archive.org/web/20070630213227/http://t.trafficmp.com/b.t/enz8/$$RND$$" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="88" height="20"> </iframe>' +
	'  </div>';

    document.write(promo_html);
}

function lycos_draw_toolbar() {
    lycos_load_style("/adm/ad/toolbar.css");

    var lycos_canada = (this.GeoIP && GeoIP["COUNTRY_CODE"] && 
			(GeoIP["COUNTRY_CODE"] == "CA"));
    var toolbar_html = 
	'  <div id="tb">';
    var search_query_name = "query";
    var search_query_value = "";
    var page_title = encodeURIComponent( document.title );
    var page_url = encodeURIComponent( document.location.href );

    if (this.lycos_search_query) {
	search_query_value = this.lycos_search_query;
    } else if (this.lycos_ad_category && this.lycos_ad_category.find_what) {
        search_query_value = this.lycos_ad_category.find_what;
    }
    search_query_value = search_query_value.replace('"', "");

    if (lycos_canada) {
	search_query_name = "q";

	var lycos_ca_frame_src = "https://web.archive.org/web/20070630213227/http://www.lycos.ca/header-tripod-member/?Site=LycosTripod";
	if (this.lycos_search_query) {
	    lycos_ca_frame_src += "&amp;search_query="+encodeURIComponent(this.lycos_search_query);
	}
	if (this.lycos_ad_category) {
	    if (this.lycos_ad_category.ontarget) {
		lycos_ca_frame_src += "&amp;ontarget="+this.lycos_ad_category.ontarget;
	    }
	    if (this.lycos_ad_category.dmoz) {
		lycos_ca_frame_src += "&amp;dmoz="+encodeURIComponent(this.lycos_ad_category.dmoz);
	    }
	    if (this.lycos_ad_category.find_what) {
		lycos_ca_frame_src += "&amp;find_what="+encodeURIComponent(this.lycos_ad_category.find_what);
	    }
	}
	toolbar_html += 
	    '    <form name="lycos_search" method="get" target="_top" action="https://web.archive.org/web/20070630213227/http://lycos.ca/search.html">' +
            '      <input type="hidden" name="domains" value="https://web.archive.org/web/20070630213227/http://www.lycos.ca" />'+
            '      <input type="hidden" name="client" value="pub-2715680911438820" />'+
            '      <input type="hidden" name="channel" value="7131881753" />'+
            '      <input type="hidden" name="sa" value="Search" />'+
            '      <input type="hidden" name="cof" value="GALT:204A6C;DIV:336699;VLC:663399;ALC:204A6C;LC:204A6C;BGC:ffffff;T:204A6C;GFNT:0000FF;GIMP:0000FF;S:http://www.lycos.ca;FORID:11;" />' +
	    '      <table cellpadding="0" cellspacing="0" border="0" width="100%">' +
	    '        <tr>' +
	    '          <td colspan="12"><iframe scrolling="no" width="100%" height="100" frameborder="0" marginheight="0" marginwidth="0" src="'+lycos_ca_frame_src+'"></iframe></td>' +
	    '        </tr>';
    } else {
	toolbar_html += 
	    '    <form name="lycos_search" method="get" target="_top" action="http://'+this.lycos_ad_www_server+'/bin/search/pursuit">' +
	    '      <table cellpadding="0" cellspacing="0" border="0" width="100%" height="52">';
    }
    
    toolbar_html += 
	'        <tr>' +
	'          <td height="25" colspan="2">' +
	'            <table cellpadding="0" cellspacing="0" border="0">' +
	'              <tr>' +
	'                <td><strong>&nbsp;Search:</strong></td>' +
	'                <td><input type="radio" name="cat" value="lycos" checked="checked"></td>' +
	'                <td nowrap="nowrap">The Web</td>' +
	'                <td><input type="radio" name="cat" value="tripod_member"></td>' +
	'                <td nowrap="nowrap">Tripod</td>';
    if ( lycos_ad["toolbar_text"] ) {
        toolbar_html += '<td style="padding-left: 10px;">' + lycos_ad["toolbar_text"] + '</td>';
    }

    toolbar_html +=
	'              </tr>' +
	'            </table>' +
	'          </td>'+
	'          <td colspan="2" style="border-bottom: 1px solid #dcdcdc;">' +
  '           <img src="https://web.archive.org/web/20070630213227/http://af.lygo.com/d/toolbar/abuse.gif" alt="icon" title="report abuse" height="8" hspace="3" width="8"><a href="https://web.archive.org/web/20070630213227/http://help.lycos.com/newticket.php" target="_top">Report Abuse</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
	'           <span class="raquo">&laquo;</span>' +
	'           <span id="lycos_top100">' +
	'            <a href="javascript:lycos_top100(\'prev\')" target="_top">Previous</a> |' +
	'            <a href="https://web.archive.org/web/20070630213227/http://lt.tripod.com/tp_toolbar/top100/_h_/'+this.lycos_ad_www_server+'/members/top100_1.html" target="_top">Top 100</a> |' +
	'            <a href="javascript:lycos_top100(\'next\')" target="_top">Next</a>' +
	'          </span>' +
	'          <span class="raquo">&raquo;</span>' +
	'          </td>' +
	'          <td rowspan="2" width="150"><a href="http://'+this.lycos_ad_www_server+'" target="_top"><img src="https://web.archive.org/web/20070630213227/http://af.lygo.com/d/toolbar/logo.tripod-toolbar.gif" alt="logo" title="hosted by tripod" border="0" height="50" width="150"></a></td>' +
	'         <td rowspan="2" width="50" style="background-color: #000;">';
    if (this.lycos_ad["smallbox"]) {
	toolbar_html += this.lycos_ad["smallbox"];
    }
    toolbar_html +=
	'         </td>' +
	'        </tr>' +
	'        <tr>' +
	'          <td nowrap="nowrap">&nbsp;<input id="query" type="text" name="'+search_query_name+'" value="'+search_query_value+'"> <input name="submit" class="buttons" type="image" value="image" src="https://web.archive.org/web/20070630213227/http://ly.lygo.com/ly/hp/ggiBut.gif" /></td>' +
	'          <td id="angle"><img src="https://web.archive.org/web/20070630213227/http://af.lygo.com/d/toolbar/angle25x25.gif" width="25" height="25" alt="angle graphic" title=""/></td>';
    if (tripod_ratings_hash) {
        toolbar_html += '<td style="background-color: #fff;"><script type="text/javascript">drawRatingsWidget(300,tripod_member_name,"",tripod_ratings_hash)</script></td>';
    }
    toolbar_html +=
	'         <td style="background-color: #fff; font-size: 9px; padding: 0 0 0 10px;">share: ' +
	'          <a href="https://web.archive.org/web/20070630213227/http://del.icio.us/post?url=' + page_url + ';title=' + page_title + '" title="Submit to del.icio.us" target="_blank">del.icio.us</a> |' +
	'          <a href="https://web.archive.org/web/20070630213227/http://digg.com/submit?phase=2&amp;url=' + page_url + '&amp;title=' + page_title + '" title="Submit to digg" target="_blank">digg</a> |' +
	'          <a href="https://web.archive.org/web/20070630213227/http://reddit.com/submit?url=' + page_url + '&amp;title=' + page_title + '" title="Submit to reddit" target="_blank">reddit</a> |' +
        '          <a href="https://web.archive.org/web/20070630213227/http://furl.net/store?u=' + page_url + '&amp;t=' + page_title + '" title="Submit to furl" target="_blank">furl</a> |' +
        '          <a href="https://web.archive.org/web/20070630213227/http://facebook.com/share.php?u=' + page_url + '" title="Submit to facebook" target="_blank">facebook</a>' +
	'         </td>' +

	'        </tr>' +
	'      </table>' +
	'    </form>' +
	'</div>';
    document.write(toolbar_html);
}

function lycos_insert_ads() {
    this.lycos_search_query = lycos_get_search_referrer();

    var lycos_ad_mgr = new AdManager();

    if (this.lycos_search_query) {
        lycos_ad_mgr.setForcedParam("keyword", this.lycos_search_query);
    } else if (this.lycos_ad_category && this.lycos_ad_category.find_what) {
	lycos_ad_mgr.setForcedParam("keyword", this.lycos_ad_category.find_what);
    }

    if (this.lycos_ad_category && this.lycos_ad_category.dmoz) {
        lycos_ad_mgr.setForcedParam("page", this.lycos_ad_category.dmoz);
	var tax = this.lycos_ad_category.dmoz.split("/");
	if (tax[0]) {
	    this.mep1 += "&tripodSection="+encodeURIComponent(tax[0]);
	    if (tax[1]) {
		this.mep1 += "&tripodSubsection="+encodeURIComponent(tax[1]);
	    }
	}
    } else {
        lycos_ad_mgr.setForcedParam("page", "member");
    }
    if (this.tripod_member_name) {
	this.mep1 += "&tripodPage="+encodeURIComponent(this.tripod_member_name);
    }

    var tripod_source = lycos_get_query_variable("tripodSource");
    if (tripod_source) {
	this.mep1 += "&tripodSource="+encodeURIComponent(tripod_source);
    }

    lycos_load_script("https://web.archive.org/web/20070630213227/http://lycos.247realmedia.com/scripts/lycos_if.js");

    var lycos_prod_set = lycos_ad_mgr.chooseProductSet();
    lycos_ad_mgr.renderHeader();

    var slots = ["leaderboard", "leaderboard2", "toolbar_image", 
		 "toolbar_text", "smallbox" ];
    for (var slot in slots) {
	if (lycos_ad_mgr.isSlotAvailable(slots[slot])) {
	    this.lycos_ad[slots[slot]] = lycos_ad_mgr.getSlot(slots[slot]);
	}
    }

    lycos_ad_mgr.renderFooter();

    if (this.lycos_ad["leaderboard"]) {
        document.write('<div id="tb_container">');
	lycos_draw_toolbar();
	document.write(lycos_ad["leaderboard"]);
    }
}

if (lycos_check_size()) {
    lycos_insert_ads();
}


}
/*
     FILE ARCHIVED ON 21:32:27 Jun 30, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:31:07 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.577
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.012
  esindex: 0.012
  cdx.remote: 140.302
  LoadShardBlock: 373.372 (6)
  PetaboxLoader3.datanode: 322.738 (7)
  PetaboxLoader3.resolve: 217.229 (2)
  load_resource: 226.486
*/