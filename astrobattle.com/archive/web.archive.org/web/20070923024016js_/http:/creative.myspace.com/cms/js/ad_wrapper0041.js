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

var Advertiser =
{
   "DERDB" :
   { 
      "CookieName" : "DERDB",
      "UpdateBlueLith" : false
   },
   "GADC" :
   { 
      "CookieName" : "GADC",
      "UserInfoKey" : "EUD"
   },
   "Login" :
   {
      "LoginCookieName" : "Login"
   },
   "SDC" :
   {
      "DisplayedFriendEUD" : ""
   },
   "DC" :
   {
      "AdSource" : ""
   },   
   "Util" :
   { 
      "CookieDomain" : ".myspace.com",
      "RandomSeed" : Date.parse(new Date())
   }
}

Advertiser.DC.SyncBanner = function (tag, which)
{
	switch (tag)
	{
		case null:
		case "null":
			if (Advertiser.Util.GetJSVar("defaultTag"))
				Advertiser.DC.AdSource = defaultTag;
			break;
		default:
			Advertiser.DC.AdSource = tag;
			break;			
	}

	switch (which)
	{
		case "300x250": ad_wrapper("tkn_medrec", "", "x14"); break;
		case "728x90": ad_wrapper("tkn_leaderboard", "", "frame1"); break;
	}
}

Advertiser.Util.Encode64 = function (input)
{
   var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
   var output = "";
   var chr1, chr2, chr3, enc1, enc2, enc3, enc4 = "";
   var i = 0;
   
   do
   {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2))
      {
         enc3 = enc4 = 64;
      }
      else if (isNaN(chr3))
      {
         enc4 = 64;
      }
      output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
   }
   while (i < input.length);
   
   return output;
}

Advertiser.Util.Decode64 = function (input)
{
   var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
   var output = "";
   var chr1, chr2, chr3, enc1, enc2, enc3, enc4 = "";
   var i = 0;
   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
   
   do
   {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) output = output + String.fromCharCode(chr2);
      if (enc4 != 64) output = output + String.fromCharCode(chr3);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
   }
   while (i < input.length);
   
   return output;
}

Advertiser.Util.SetCookie = function (cookieName, cookieValue, expirationDate)
{
   if (Advertiser.Util.CookieDomain == "")
      document.cookie = cookieName + "=" + cookieValue + "; path=/; expires=" + expirationDate;
   else
      document.cookie = cookieName + "=" + cookieValue + "; path=/; domain=" + 
         Advertiser.Util.CookieDomain + "; expires=" + expirationDate;
}

Advertiser.Util.RemoveCookie = function (name)
{
   if (Advertiser.Util.CookieDomain == "")
      document.cookie = name + '=; expires=Wed, 19-Jan-2005 08:28:17 GMT; path=/';
   else
      document.cookie = name + '=; domain=' + Advertiser.Util.CookieDomain +
         '; expires=Wed, 19-Jan-2005 08:28:17 GMT; path=/';
}

Advertiser.Util.ReadCookie = function (name)
{
   regEx = new RegExp(name+'=([^;]*)','i');
   if (document.cookie.search(regEx) == -1)
   {
      return null;
   }
   return RegExp.$1;
}

Advertiser.Util.ReadCookieKey = function (cookieName,key)
{
   var cookie = Advertiser.Util.ReadCookie(cookieName);
   if (cookie != null)
   {
      regEx = new RegExp(key+'=([^&]*)','i');
      if (cookie.search(regEx) == -1)
      {
         return null;
      }
      return RegExp.$1;
   }
   return null;
}

Advertiser.Util.ReadQueryStringKey = function (key)
{
   regEx = new RegExp(key+'=([^&]*)','i');
   if (window.location.search(regEx) == -1)
   {
      return null;
   }
   return RegExp.$1;
}

Advertiser.Util.GetJSVar = function (name)
{
   var v = eval("typeof("+name+")");
   if(v == "undefined")
      return null;
   return eval(name);
}

Advertiser.DERDB.Set = function (key,value)
{
   var expirationDate = new Date();
   expirationDate.setYear(expirationDate.getFullYear()+1);

   var derdbPlain = Advertiser.DERDB.DecodedValue();
   
   if (derdbPlain != null)
   {
      if (derdbPlain.indexOf(key+'=') != -1)
      {
         newPair = key + '=' + value;
         regEx = new RegExp(key+'=([^&]*)','i');
         derdbPlain = derdbPlain.replace(regEx, newPair);
      }
      else
      {
         derdbPlain = derdbPlain + '&' + key + '=' + value;
      }
      Advertiser.Util.SetCookie(Advertiser.DERDB.CookieName, Advertiser.Util.Encode64(derdbPlain), expirationDate.toGMTString());
   }
}

Advertiser.DERDB.Get = function (key)
{
   var derdbPlain = Advertiser.DERDB.DecodedValue();
   if (derdbPlain != null)
   {
      if (derdbPlain.indexOf(key+'=') != -1)
      {
         regEx = new RegExp(key+'=([^&]*)','i');
         derdbPlain.search(regEx);
         return RegExp.$1;
      }
   }
   return null;
}

Advertiser.DERDB.EncodedValue = function ()
{
   var derdbBase64 = Advertiser.Util.ReadCookie(Advertiser.DERDB.CookieName);
   if (derdbBase64 != null)
   {
      return derdbBase64;
   }
}

Advertiser.DERDB.DecodedValue = function ()
{
   var derdbBase64 = Advertiser.Util.ReadCookie(Advertiser.DERDB.CookieName);
   if (derdbBase64 != null)
   {
      return Advertiser.Util.Decode64(unescape(derdbBase64));
   }
}

Advertiser.Login.IsLogin = function ()
{
   regEx = new RegExp(Advertiser.Login.LoginCookieName+'[=;]','i');
   cookies = document.cookie.substring(0) + ";";
   if (cookies.search(regEx) == -1)
   {
      return false;
   }
   return true;
}

Advertiser.SDC.DropPixel = function ()
{
   regex = new RegExp("fuseaction=([^&]*)","i");
   
   if (window.location.search.search(regex) != -1 && RegExp.$1 == "ad")	
	return;
   
   if (window.location.search.search(regex) != -1 && RegExp.$1 == "user")
   {
      if (Advertiser.DERDB.UpdateBlueLith)
         Advertiser.DERDB.Set("bl","1");
      else
         Advertiser.DERDB.Set("bl","0");
   }

   if (Advertiser.Login.IsLogin())
   {
      derdbValue = Advertiser.DERDB.EncodedValue();
      googleValue = Advertiser.Util.ReadCookieKey(Advertiser.GADC.CookieName,Advertiser.GADC.UserInfoKey);
      
      if (derdbValue.length == 0 && googleValue.length == 0) return;
      
      fimpixel = '<img src="https://web.archive.org/web/20070923023336/http://seg.fimserve.com/relay?';
      
      if (derdbValue.length != 0)
      {
         fimpixel += 'payload=' + derdbValue;
         
         if (googleValue.length != 0)
            fimpixel += '&';
      }
         
      if (googleValue.length != 0)
         fimpixel += 'eud=' + googleValue;
      
      fimpixel += '" style="position:absolute; left:0px; top:0px; border-width:0px;height:1px;width:1px;"/>';
      
      document.write(fimpixel);
          
      Advertiser.Util.RemoveCookie(Advertiser.Login.LoginCookieName);
   }
}

/* START Let's build the AdHelper Object */
var oas_helper = {
	adCount: 1,
	keys: [], // url name/value pairs arrays
	values: []
}

oas_helper.getID = function(name) {
	var v= this.QueryString(name);
	if (v != null)
		return v;
	else
		return 0;
}
oas_helper.getVar = function(name) {
	var v = eval("typeof("+name+")");
	if(v == "undefined")
		return null;
	return eval(name);
}
oas_helper.getVarOrId = function(varName,queryName) {
	var v = this.getVar(varName);
	if (v == null)
		return null;
	else if (v != 0)
		return v;
	else
		return this.getID(queryName);
}

oas_helper.getDownloadCategory = function () {
	var dcat = "";
	if (this.QueryString('cat') != null)
		dcat =  this.QueryString('cat');
	
	if(dcat=="audiovideo")return 1;
	if(dcat=="business")return 2;
	if(dcat=="camera")return 3;
	if(dcat=="desktopenhancements")return 4;
	if(dcat=="devtools")return 5;
	if(dcat=="homeanded")return 6;
	if(dcat=="internet")return 7;
	if(dcat=="isit")return 8;
	if(dcat=="utilities")return 9;
	if(dcat=="spywarecenter")return 10;
	if(dcat=="powerdownloader")return 11;
	if(dcat=="mobile")return 12;
	if(dcat=="mac")return 13;
	return 0;		
}

oas_helper.isPremiumVideoContent = function (tvcatmaster_id,page){
    if(page != 21003206 && page != 91000017)return false;
    if(tvcatmaster_id != 400)return false; 
    var vp = document.getElementById("vplayer");
	if(vp == null)return false;
    return true;
}

oas_helper.getURL = function() { //el=str, case_sensitive=bool
	var urls = document.URL;
	urls = urls.replace( /'/g, "" ); // stripTicks
	// look for friend, channel, or group id
	var re = new RegExp( "\\?[\\w\\W]*(friendid|channelid|groupid)=([^\\&\\?#]*)", "i" );
	var arr = re.exec(urls);
	if(arr && arr.length>1){	
		return arr[2];
	}else{ 
		// try vanity url
		var expr = /\/([\w]*)$/i;
		arr = expr.exec(urls);
		if(arr && arr.length>1)
			return arr[1].toLowerCase();
		else
			return '';
	}
} // oas_helper.getURL

var ad_randomseed = Date.parse(new Date()); 

oas_helper.random = function(){
	var randomm = 714025;
	var randoma = 4096;
	var randomc = 150889;
	ad_randomseed = (ad_randomseed * randoma + randomc) % randomm;
	return ad_randomseed / randomm;
} //  random

oas_helper.randomNumber = oas_helper.random() + "";

oas_helper.ParseQueryString = function() {
	var query = window.location.search.substring(1);
	var pairs = query.split("&");
	for (var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		if (pos >= 0) {
			var argname = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos+1);
			this.keys[this.keys.length] = argname;
			this.values[this.values.length] = value;
		}
	}
} // ParseQueryString

oas_helper.QueryString = function(key) {
	if (this.keys.length < 1) this.ParseQueryString();
	var value = null;
	for (var i = 0; i < this.keys.length; i++) {
		if (this.keys[i] == key) {
			value = escape(this.values[i].toLowerCase());
			break;
		}
	}
	return value;
} // QueryString

oas_helper.readCookie = function(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {c = c.substring(1,c.length);}
		if (c.indexOf(nameEQ) === 0) {return c.substring(nameEQ.length,c.length);}
	}
	return "Unknown";
} // readCookie

/* End AdHelper */


function sdc_wrapper()
{
    var argv    = sdc_wrapper.arguments;
    var tokenID = argv[0];
    var page    = argv[1];
    var pos     = argv[2].toLowerCase();
   
    var subd    = 'deLB';
     
    var adWidth  = 728;
    var adHeight = 90;

    var frameURL = "";
    var friendID = 0;     
    var SchoolID = "";

    var rand = oas_helper.randomNumber.substring(2,11);
    var AdTopicID = oas_helper.getVar( "ad_Topic_ID" );
    var videoID = oas_helper.getID('videoid');
    var downloadCat = oas_helper.getDownloadCategory();
    
    var tvcatmaster_id = oas_helper.getVar( "tvcatmasterid" );
    var tvvideo_id = oas_helper.getVar( "videoid" );
    var tvcat_id = oas_helper.getVar( "tvcat" );
    var tvchan_id = oas_helper.getVar( "tvchanid" );
    
    if(tvcatmaster_id == 1 || tvcatmaster_id == 2)tvcatmaster_id=0;
    if(tvcatmaster_id == 7)tvcatmaster_id=300;
    if(tvcatmaster_id == 9)tvcatmaster_id=100;
    if(tvcatmaster_id == 15)tvcatmaster_id=200;
    if(tvcatmaster_id == 8)tvcatmaster_id=1001;
    
    var bg1 = "";
    var bg2 = "";
    var bg3 = "";

    re_ex = /,/;

    if(re_ex.test(page)){
	site_arr = page.split(",");
	page = site_arr[1];
    }
     
    switch (pos)
    {
    case 'top':
	 friendID = oas_helper.getURL();
	 adWidth=468;
	 adHeight=60;
	 pos = 'banner';
	 subd = 'deBR';
	 break; 
    case 'x08':
	 friendID = oas_helper.getURL();
	 adWidth=430;
	 adHeight=600;
         subd = 'deHP';
	 pos = 'halfpage&params.styles=halfpage';
  	 break;
    case 'x14':
	 adWidth=300;
	 adHeight=250;
	 pos = 'mrec';
         subd = 'deMR';
	 friendID = oas_helper.getURL();
	 break;
    case 'x15':
	 friendID = oas_helper.getURL();
	 adWidth=160;
	 adHeight=600;
         subd = 'deSK';
	 pos = 'skyscraper';
	 break;
    case 'east':
	 friendID = oas_helper.getURL();
	 adWidth=300;
	 adHeight=100;
	 pos = 'east';
	 subd = 'deEB';
	 break;	 
	case 'x54': //feature profile
     adWidth=225;
     adHeight=170;
     pos = 'profile';
     subd = 'deFP';
     break;
    case 'x54-1': //feature profile small
     adWidth=200;
     adHeight=170;
     pos = 'profile';
     subd = 'uhpfp';
     break;
    case 'x55': //feature group
     adWidth=640;
     adHeight=280;
     pos = 'group';
     subd = 'deFG';
     break;
    case 'x56':
     adWidth=460;
     adHeight=140;
     break;
    case 'x69': // This was added for the anchor man inbox add.
     adWidth=628;
     adHeight=288;
     break;
    case 'x77':
     adWidth=1;
     adHeight=1;
     pos = '1x1';
     subd = 'deSB';
     break;
    case 'x78': // login page
     adWidth=750;
     adHeight=600;
     pos = 'interstitial&params.styles=halfpage';
     subd = 'deSB';
     break;
    case 'x85':
     adWidth=300;
     adHeight=300;
     break;
    case 'x86':
     adWidth=465;
     adHeight=360;
     break;
    case 'x87':
     adWidth=463;
     adHeight=400;
     break;
    case 'x88':
     adWidth=440;
     adHeight=140;
     pos = 'featuredband';
     subd = 'deFB';
     break;
    case 'fspecial':
     adWidth=440;
     adHeight=140;
     pos = 'fspecial';
     subd = 'deSB';
     break;
    case 'featblg':
     adWidth=500;
     adHeight=100;
     pos = 'featblg';
     subd = 'deSB';
     break;
    case 'uhpfp': //uhp feature profile
     adWidth=200;
     adHeight=170;
     pos = 'uhpfp';
     subd = 'deFP';
     break;
    case 'west':
     adWidth=440;
     adHeight=160;
     pos = 'west';
     subd = 'deWB';
     break;
    case 'featvid':
     adWidth=300;
     adHeight=170;
     pos = 'featvid';
     subd = 'deFV';
     break;
    case 'movpro':
     adWidth=300;
     adHeight=250;
     pos = 'movpro';
     subd = 'deMP';
     break;
    case 'fmovl':
     adWidth=229;
     adHeight=216;
     pos = 'fmovl';
     subd = 'deFML';
     break;
    case 'fmovr':
     adWidth=229;
     adHeight=216;
     pos = 'fmovr';
     subd = 'deFMR';
     break;
    case 'vrec':
     adWidth=240;
     adHeight=400;
     pos = 'vrec';
     subd = 'deVR';
     break;
    default:
         adWidth  = 728;
         adHeight = 90;
         subd    = 'deLB';
         pos     ='leaderboard&params.styles=leaderboard';
         friendID = oas_helper.getURL();
         break;
    }
    
    var runBandGenreAd=false;
    if(document.getElementById("bandgenre1"))
    {
        if(document.getElementById("bandgenre1").value)bg1 = "&bg1=" + document.getElementById("bandgenre1").value;
        if(document.getElementById("bandgenre2").value)bg2 = "&bg2=" + document.getElementById("bandgenre2").value;
        if(document.getElementById("bandgenre3").value)bg3 = "&bg3=" + document.getElementById("bandgenre3").value;
    
		runBandGenreAd= (document.getElementById("bandgenre1").parentNode.childNodes.length==3);
    }
     
    if(videoID)
	videoID = "&vid="+videoID;
    else
	videoID = "";
    
     if(AdTopicID)
	AdTopicID = "&cat="+AdTopicID;
     else
	AdTopicID = "";


    if (friendID && friendID != '')
	friendID = "&fid="+friendID;
	
	if(downloadCat)
		downloadCat = "&dwcat="+downloadCat;
	else
		downloadCat = "";
		
	if(tvcatmaster_id==null)tvcatmaster_id = "";
	else
		tvcatmaster_id = "&tvmcat="+tvcatmaster_id;
		 
    if(tvvideo_id)
		tvvideo_id  = "&tvvid="+tvvideo_id;
	else
		tvvideo_id = "";
		 
	if(tvcat_id)
		tvcat_id = "&tvcat="+tvcat_id;
	else
		tvcat_id = "";
		 
	if(tvchan_id)
		tvchan_id = "&tvch="+tvchan_id;
	else
		tvchan_id = "";

    var special = "";
    var testmode = false;
    if (oas_helper.QueryString('special') != null)
    {
	testmode = true;
	special = oas_helper.QueryString('special');
    }
    
    if (oas_helper.QueryString('schoolID') != null)
       SchoolID = "&sp=" + oas_helper.QueryString('schoolID');
   
    var ctr = document.getElementById(tokenID);
    if (ctr == null) return;
     
   try
   {
		//parse the cookie for JP
		var cultureCookie = oas_helper.readCookie('MSCulture');
		var cookieKey = '&IPCulture=';
		var keyindex = cultureCookie.indexOf(cookieKey);
		var culture = cultureCookie.substring(keyindex + cookieKey.length,cultureCookie.length);
		if (culture.indexOf('&') >= 0) 
			culture = culture.substring(0, culture.indexOf('&'));
		if (culture.indexOf('ja-JP') >= 0) 
			subd = 'adjp01';
   }
   catch(e)
   {}

   if (subd == 'adjp01')
   {
      ad_wrapper(argv[0], argv[1], argv[2]);
   }
   else
   { 

      var ged = Advertiser.Util.ReadCookieKey(Advertiser.GADC.CookieName,Advertiser.GADC.UserInfoKey);
      
      if (ged == null)
      {
         ged = "";
      }

      ged += Advertiser.SDC.DisplayedFriendEUD;

      var testvalue = "";
      if (testmode)
      {
        testvalue = "&s=" + special;

      }

      if (runBandGenreAd)
      {
         frameURL = "http://"+subd+".opt.fimserve.com/adopt/?l="+page+"&pos=" + pos + "&r=h&rnd="+rand + friendID + SchoolID + AdTopicID + videoID + bg1 + bg2 + bg3 + downloadCat + tvcatmaster_id + tvvideo_id + tvcat_id + tvchan_id + testvalue + "&ged=" + ged;
      }
      else
      {
         frameURL = "http://"+subd+".opt.fimserve.com/adopt/?l="+page+"&pos=" + pos + "&r=h&rnd="+rand + friendID + SchoolID + AdTopicID  + videoID+ downloadCat + tvcatmaster_id + tvvideo_id + tvcat_id + tvchan_id + testvalue + "&ged=" + ged;
      }

      ctr.innerHTML = "<IFRAME width=\""+adWidth+"\" height=\""+adHeight+"\" style=\"position:relative;z-index:10000\" MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no src='"+frameURL+"'></iframe>";
   }
}

function sdc_wrapper_medrec_delay()
{
	var args = sdc_wrapper_medrec_delay.arguments;
	var token = document.getElementById("tkn_medrec");
	if (token == null || args.length != 3) return;
	token.style.height = 250;
	var func = "sdc_wrapper('" + args[0] + "','" + args[1] + "','" + args[2] + "')";
	setTimeout(func, 1000);
}

function ad_wrapper_medrec_delay()
{
	var args = ad_wrapper_medrec_delay.arguments;
	var token = document.getElementById("tkn_medrec");
	if (token == null || args.length != 3) return;
	token.style.height = 250;
	var func = "ad_wrapper('" + args[0] + "','" + args[1] + "','" + args[2] + "')";
	setTimeout(func, 1000);
}

function ad_wrapper()
{
	var argv = ad_wrapper.arguments;
	var tokenID = argv[0];
	var page = argv[1];
	var pos = argv[2].toLowerCase();

	var ctr = document.getElementById(tokenID);
	if (ctr == null) return;

	var friendID = 0;
	var AdTopicID = oas_helper.getVar( "ad_Topic_ID" );
	var videoID = oas_helper.getID('videoid');
	var videoChannel = oas_helper.getVarOrId( "ad_Video_CID", "channelid" );
	var videoUserCat = oas_helper.getVarOrId( "ad_Video_RID", "rid" );
	var downloadCat = oas_helper.getDownloadCategory();
	var groupCatID = oas_helper.getVar( "ad_Group_CID" );

    var tvcatmaster_id = oas_helper.getVar( "tvcatmasterid" );
    var tvvideo_id = oas_helper.getVar( "videoid" );
    var tvcat_id = oas_helper.getVar( "tvcat" );
    var tvchan_id = oas_helper.getVar( "tvchanid" );
    
    if(tvcatmaster_id == 1 || tvcatmaster_id == 2)tvcatmaster_id=0;
    if(tvcatmaster_id == 7)tvcatmaster_id=300;
    if(tvcatmaster_id == 9)tvcatmaster_id=100;
    if(tvcatmaster_id == 15)tvcatmaster_id=200;
    if(tvcatmaster_id == 8)tvcatmaster_id=1001;

    var bg1 = "";
    var bg2 = "";
    var bg3 = "";

	var adWidth=0;
	var adHeight=0;

	subd = 'deSB';

	re_ex = /,/;

	temp_flag = 0;
	if(re_ex.test(page)){
		site_arr = page.split(",");
		page = site_arr[1];
	}

	switch (pos)
	{
		case 'frame1':
			friendID = oas_helper.getURL();
			adWidth=728;
			adHeight=90;
			pos = 'leaderboard&params.styles=leaderboard';
			subd = 'deLB';
			break;
		case 'top':
			friendID = oas_helper.getURL();
			adWidth=468;
			adHeight=60;
			pos = 'banner';
			subd = 'deBR';
			break;
		case 'x08':
			friendID = oas_helper.getURL();
			adWidth=430;
			adHeight=600;
			pos = 'halfpage&params.styles=halfpage';
			subd = 'deHP';
			break;
		case 'x14':
			adWidth=300;
			adHeight=250;
			pos = 'mrec';
			subd = 'deMR';
			friendID = oas_helper.getURL();
			break;
		case 'x15':
			friendID = oas_helper.getURL();
			adWidth=160;
			adHeight=600;
			pos = 'skyscraper';
			subd = 'deSK';
			break;
		case 'x54': //feature profile
			adWidth=225;
			adHeight=170;
			pos = 'profile';
			subd = 'deFP';
			break;
		case 'x54-1': //feature profile small
			adWidth=200;
			adHeight=170;
			pos = 'profile';
			subd = 'uhpfp';
			break;
		case 'x55': //feature group
			adWidth=640;
			adHeight=280;
			pos = 'group';
			subd = 'deFG';
			break;
		case 'x56':
			adWidth=460;
			adHeight=140;
			break;
		case 'x69': // This was added for the anchor man inbox add.
			adWidth=628;
			adHeight=288;
			break;
		case 'x77':
			adWidth=1;
			adHeight=1;
			pos = '1x1';
			subd = 'deSB';
			break;
		case 'x78': // login page
			adWidth=750;
			adHeight=600;
			pos = 'interstitial&params.styles=halfpage';
			subd = 'deSB';
			break;
		case 'x85':
			adWidth=300;
			adHeight=300;
			break;
		case 'x86':
			adWidth=465;
			adHeight=360;
			break;
		case 'x87':
			adWidth=463;
			adHeight=400;
			break;
		case 'x88':
			adWidth=440;
			adHeight=140;
			pos = 'featuredband';
			subd = 'deFB';
			break;
		case 'fspecial':
			adWidth=440;
			adHeight=140;
			pos = 'fspecial';
			subd = 'deSB';
			break;
		case 'featblg':
			adWidth=500;
			adHeight=100;
			pos = 'featblg';
			subd = 'deSB';
			break;
		case 'uhpfp': //uhp feature profile
			adWidth=200;
			adHeight=170;
			pos = 'uhpfp';
			subd = 'deFP';
			break;
		case 'west':
			adWidth=440;
			adHeight=160;
			pos = 'west';
			subd = 'deWB';
			break;
		case 'east':
			friendID = oas_helper.getURL();
			adWidth=300;
			adHeight=100;
			pos = 'east';
			subd = 'deEB';
			break;
		case 'featvid':
			adWidth=300;
			adHeight=170;
			pos = 'featvid';
			subd = 'deFV';
			break;
		case 'movpro':
			adWidth=300;
			adHeight=250;
			pos = 'movpro';
			subd = 'deMP';
			break;
		case 'fmovl':
			adWidth=229;
			adHeight=216;
			pos = 'fmovl';
			subd = 'deFML';
			break;
		case 'fmovr':
			adWidth=229;
			adHeight=216;
			pos = 'fmovr';
			subd = 'deFMR';
			break;
		case 'vrec':
			adWidth=240;
			adHeight=400;
			pos = 'vrec';
			subd = 'deVR';
			break;
		case 'leaderboard2':
			friendID = oas_helper.getURL();
			adWidth=728;
			adHeight=90;
			pos = 'leaderboard2&params.styles=leaderboard';
			subd = 'deLB2';
			break;
		default:
			adWidth=468;
			adHeight=60;
			pos = 'test';
			break;
	}
	
	try
	{
		//parse the cookie for JP
		var cultureCookie = oas_helper.readCookie('MSCulture');
		var cookieKey = '&IPCulture=';
		var keyindex = cultureCookie.indexOf(cookieKey);
		var culture = cultureCookie.substring(keyindex + cookieKey.length,cultureCookie.length);
		if (culture.indexOf('&') >= 0) 
			culture = culture.substring(0, culture.indexOf('&'));
		if (culture.indexOf('ja-JP') >= 0) 
			subd = 'adjp01';
	}
	catch(e)
	{}
	
	var rand = oas_helper.randomNumber.substring(2,11);
	var testmode = false;
	var special = '';
	
	if(friendID)
		friendID = "&friendid="+friendID;
	
	if(AdTopicID)
		AdTopicID = "&category="+AdTopicID;
	else
		AdTopicID = "";
	
	if(videoID)
		videoID = "&videoID="+videoID;
	else
		videoID = "";
	
	if(videoUserCat)
		videoUserCat = "&rid="+videoUserCat;
	else
		{
		if(videoID!="")videoUserCat = "&rid=0"; else videoUserCat = "";
		}
	
	if(videoChannel)
		videoChannel = "&channelid="+videoChannel;
	else
		videoChannel = "";
	
	if(downloadCat)
		downloadCat = "&downcat="+downloadCat;
	else
		downloadCat = "";
		
	if(tvcatmaster_id==null)tvcatmaster_id = "";
	else
		tvcatmaster_id = "&tvmastercategory="+tvcatmaster_id;
		 
    if(tvvideo_id)
		tvvideo_id  = "&tvvideoid="+tvvideo_id;
	else
		tvvideo_id = "";
		 
	if(tvcat_id)
		tvcat_id = "&tvcategoryid="+tvcat_id;
	else
		tvcat_id = "";
		 
	if(tvchan_id)
		tvchan_id = "&tvchannelid="+tvchan_id;
	else
		tvchan_id = "";
		
		
	
	if (oas_helper.QueryString('schoolID') != null)
		var SchoolID = oas_helper.QueryString('schoolID');
	else
		var SchoolID = 0;
	
	if (oas_helper.QueryString('special') != null)
	{
		testmode = true;
		special = oas_helper.QueryString('special');
	}
	
	var runBandGenreAd=false;
	if(document.getElementById("bandgenre1"))
	{
	    if(document.getElementById("bandgenre1").value)bg1 = "&bg1=" + document.getElementById("bandgenre1").value + "&bandgenre=" + document.getElementById("bandgenre1").value;
        if(document.getElementById("bandgenre2").value)bg2 = "&bg2=" + document.getElementById("bandgenre2").value + "&bandgenre=" + document.getElementById("bandgenre2").value;
        if(document.getElementById("bandgenre3").value)bg3 = "&bg3=" + document.getElementById("bandgenre3").value + "&bandgenre=" + document.getElementById("bandgenre3").value;
	
		runBandGenreAd= (document.getElementById("bandgenre1").parentNode.childNodes.length==3);
	}
	
	var frameURL = "";

	if(runBandGenreAd)
	{
		if(testmode)
			frameURL = "https://web.archive.org/web/20070923023336/http://detst.myspace.com/html.ng/site=myspace&position="+pos+"&page="+page+"&rand="+rand+friendID+AdTopicID+"&acnt="+oas_helper.adCount+"&schoolpage="+SchoolID+bg1+bg2+bg3+"&special="+special+videoID+videoUserCat+videoChannel+downloadCat+tvcatmaster_id+tvvideo_id+tvcat_id+tvchan_id;
		else
			frameURL = "http://"+subd+".myspace.com/html.ng/site=myspace&position="+pos+"&page="+page+"&rand="+rand+friendID+AdTopicID+"&acnt="+oas_helper.adCount+"&schoolpage="+SchoolID+bg1+bg2+bg3+videoID+videoUserCat+videoChannel+downloadCat+tvcatmaster_id+tvvideo_id+tvcat_id+tvchan_id;
	}

	else if(Advertiser.DC.AdSource)
	{
		frameURL = Advertiser.DC.AdSource;
	}	
	else
	{
		if (testmode)
			frameURL = "https://web.archive.org/web/20070923023336/http://detst.myspace.com/html.ng/site=myspace&position="+pos+"&page="+page+"&rand="+rand+friendID+AdTopicID+"&acnt="+oas_helper.adCount+"&schoolpage="+SchoolID+"&special="+special+videoID+videoUserCat+videoChannel+downloadCat+tvcatmaster_id+tvvideo_id+tvcat_id+tvchan_id;
		else 
			frameURL = "http://"+subd+".myspace.com/html.ng/site=myspace&position="+pos+"&page="+page+"&rand="+rand+friendID+AdTopicID+"&acnt="+oas_helper.adCount+"&schoolpage="+SchoolID+videoID+videoUserCat+videoChannel+downloadCat+tvcatmaster_id+tvvideo_id+tvcat_id+tvchan_id;
	}

	ctr.innerHTML = "<IFRAME width=\""+adWidth+"\" height=\""+adHeight+"\" style=\"position:relative;z-index:10000\" MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no src='"+frameURL+"'></iframe>";
	oas_helper.adCount++;
}

}
/*
     FILE ARCHIVED ON 02:33:36 Sep 23, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:27 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.446
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.009
  esindex: 0.03
  cdx.remote: 45.43
  LoadShardBlock: 180.303 (3)
  PetaboxLoader3.datanode: 119.196 (4)
  PetaboxLoader3.resolve: 173.431 (2)
  load_resource: 142.562
*/