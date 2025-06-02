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

///////////////////////////////////////////////////////////////////////////
//  Comments for this code can be found in source control
//////////////////////////////////////////////////////////////////////////
_queryString=function(){
	var __pairs = window.location.search.substring(1).split("&");
	for(var i=0;i<__pairs.length;i++){
		var pos=__pairs[i].indexOf('=');
		if(pos>=0){
			var name=__pairs[i].substring(0,pos).toLowerCase();
			var value=escape(__pairs[i].substring(pos+1));
			this[name]=value;
		}
	}
}
var queryString=new _queryString();
var fuseaction = queryString['fuseaction'];
function QueryString(key){return queryString[key.toLowerCase()];}//only here for backward compatibility, use construct above
function GetCaseInSensitive(key){return queryString[key.toLowerCase()];}//only left here just in case someone referenced it outside this file

function generalizeDomain(){
	var domain = document.domain;
	if(domain[domain.length-1]===".")return;
	var domains = domain.split(".");
	var domainsLength = domains.length;
	if (domainsLength >= 2){document.domain = domains[domainsLength - 2] + "." + domains[domainsLength - 1];}
}
var supressFuseactions = {"blog.create":0,"blog.edit":1,"blog.commentreply":2,"blog.comment":3,"forums.post":4};
if(typeof supressGeneralizeDomain==="undefined" && typeof supressFuseactions[fuseaction]==="undefined") generalizeDomain();






function full(vid){
	var fs = window.open( "https://web.archive.org/web/20070831085951/http://vids.myspace.com/index.cfm?fuseaction=vids.fullscreen&videoid=" + vid,
		"fsv", "toolbar=no,width=" + screen.availWidth  + ",height=" + screen.availHeight
		 + ",status=no,resizable=yes,fullscreen=yes,scrollbars=no");
	fs.focus();
}
function deleteUser(friendid, name, url){
	if(confirm('Are you sure you want to delete '+name+' from your list of friends?'))
		location.href = url;
}
var checkflag = "false";
function checkUncheckAll(f){
	if (checkflag == "false"){
		for (var i=0;i<f.length;i++)
			f[i].checked = true;
		f.checked = true;
		checkflag = "true";
	}else {
		for (var i=0; i < f.length; i++)
			f[i].checked = false;
		f.checked = false;
		checkflag = "false";
	}
}

function checkCountry(form){
	if(form.f_country.value != 'US'){
		form.f_region.disabled = true;
		form.f_region_other.disabled = false;
		form.f_region_other.value = '';
		form.f_region_other.focus();
	}else{
		form.f_region.disabled = false;
		form.f_postal_code.disabled = false;
		form.f_region_other.disabled = true;
		form.f_region_other.value = '(NA)';
	}
}

function registerEvent(object, event, cmd, append){
	if(arguments.length < 3) { return alert("Invalid arguments. Please use the format \nregisterEvent(object, event, command, [append])."); }
	if (typeof append != "boolean") {append = true; }

	event = object + "." + event.toLowerCase();
	var objEvent = eval(event);

	var strEvent = (objEvent) ? objEvent.toString() : "";
	strEvent = strEvent.substring(strEvent.indexOf("{")+1, strEvent.lastIndexOf("}"));
	strEvent = (append) ? (strEvent + cmd) : (cmd + strEvent);
	strEvent += "\n";
	eval(event + " = new Function(strEvent)");
	return true;
}

function countCharacters(formName, elementName){
	var formElementString = "document." + formName + "." + elementName;
	var ID = formElementString + ".CharacterCount";

	if (!document.getElementById(ID)) {document.write("<INPUT ID='" + ID + "' TYPE='TEXT' SIZE='4' onfocus='blur();'>");}

	var functionString = "updateCountCharacters('" + formElementString + "');";

	registerEvent("window", "onload", "registerEvent(\"" + formElementString + "\", \"onkeydown\", \"" + functionString + "\", false);", false);
	registerEvent("window", "onload", "registerEvent(\"" + formElementString + "\", \"onkeyup\", \"" + functionString + "\", false);", false);
	registerEvent("window", "onload", functionString, false);
	setInterval(functionString, 1000);
}

function updateCountCharacters(formElementString){
	var formElement = eval(formElementString);
	var ID = formElementString + ".CharacterCount";
	var formElementValue = formElement.value.replace(/\n/g, '\r\n').replace(/\r\r/g, '\r');
	document.getElementById(ID).value = parseInt(formElementValue.length, 10);
}


function openWin( windowURL, windowName, windowFeatures ) {
	return window.open( windowURL, windowName, windowFeatures ) ;
}



function wrapFF(which, atlen){
	if(navigator.userAgent.toLowerCase().indexOf("firefox") != -1){
		var start = which.innerHTML;
		var finish = start.substr(0,1);
		var mini = "";
		var inTag = 0;
		var current = 0;
		var next = "";
		while(start.length){
			mini = start.substr(1,1);
			finish = finish + mini;
			start = start.substring(1, start.length);
			switch(mini){
				case " ":
					current = 0;
				break;
				case "<":
					inTag = 1;
					current = 0;
				break;
				case ">":
					inTag = 0;
					current = 0;
				break;
				default:
					if (!inTag){
						current = current + 1;
						next = start.substring(0,Math.min(3,start.length));
						if (current == atlen && (next.indexOf("<") == -1) && (next.indexOf(">") == -1) && (next.indexOf(" ") == -1) ) {
							finish = finish + " ";
							current = 0;
						}
					}
			}
		}
		which.innerHTML = finish;
	}
}

function stripTicks(str){
	return str.replace(/'/g,"");
}

function get_url() { //el=str, case_sensitive=bool
	var rs="i";
	var urls = document.URL;
	urls = urls.replace(/'/g,"");

	var el = "friendID";
	var re = new RegExp( "\\?[\\w\\W]*"+ el +"=([^\\&\\?#]*)", rs);
	var arr = re.exec(urls);
	if(!arr){
		elg = "groupID";
		var red = new RegExp( "\\?[\\w\\W]*"+ elg +"=([^\\&\\?#]*)", rs);
		arr = red.exec(urls);
	}
	if(arr && arr.length>1)return arr[1];
	else{
		var expr = /\/([\w]*)$/i;
		arr = expr.exec(urls);
			if(arr && arr.length>1) {
				return arr[1].toLowerCase(); }
			else {
				return ''; }
	}
}

var serverPath = "";

function up_launchChat(userID,roomID)
{
	window.open( "https://web.archive.org/web/20070831085951/http://chat.myspace.com/index.cfm?fuseaction=messenger.chatroom&roomID="+roomID, "ICWindow_ChatRoom"+userID+roomID, "status=1,toolbar=0,directories=0,menubar=0,location=0,scrollbars=0,resizable=1,width=800,height=600" );
}

function up_launchChatWithRoom(userID,roomID, subroomID)
{
	window.open( "https://web.archive.org/web/20070831085951/http://chat.myspace.com/index.cfm?fuseaction=messenger.chatroom&roomID="+roomID+"&subroomID="+subroomID, "ICWindow_ChatRoom"+userID+roomID, "status=1,toolbar=0,directories=0,menubar=0,location=0,scrollbars=0,resizable=1,width=800,height=600" );
}

function up_launchIC( userID, destinationUserID, destinationName, sender, profile, gender, age, loc, image )
{		
	up_localUserID = userID;
	var popupWindowTest = null;
	userProfile = profile;
	userGender = gender;
	userAge = age;
	userLocation = loc;
	userImage = image;
	if (sender != 1) {
		popupWindowTest = window.open( "https://web.archive.org/web/20070831085951/http://chat.myspace.com/index.cfm?fuseaction=messenger&strDestinationUserID=" + destinationUserID + "&sendType=" + sender, "ICWindow_" + destinationUserID, "status=1,toolbar=0,directories=0,menubar=0,location=0,scrollbars=0,resizable=1,width=500,height=475" );
		popupWindowTest.status = "Myspace.com";
	}
}

function reverse(inputString){
	var outputString = "";
	for(var i = inputString.length - 1; i >= 0; i--) outputString += inputString.charAt(i);
	return outputString;
}

function left(inputString, n){
	if (inputString.length > n)return inputString.substring(0, n);
	else return inputString;
}

function right(inputString, n){
	if (inputString.length > n)return inputString.substring(inputString.length - n);
	else return inputString;
}

function padLeft (inputString, stringLength, padCharacter){
	var outputString = inputString;
	var c = padCharacter.substring(0, 1);
	while(outputString.length < stringLength)outputString = c + outputString;
	return outputString;
}

function padRight(inputString, stringLength, padCharacter){
	var outputString = inputString;
	var c = padCharacter.substring(0, 1);
	while (outputString.length < stringLength)outputString = outputString + c;
	return outputString;
}

function BrowserDetect() {
	var ua = navigator.userAgent.toLowerCase();

	this.isGecko	   = (ua.indexOf('gecko') != -1 && ua.indexOf('safari') == -1);
	this.isAppleWebKit = (ua.indexOf('applewebkit') != -1);

	this.isKonqueror   = (ua.indexOf('konqueror') != -1);
	this.isSafari	  = (ua.indexOf('safari') != - 1);
	this.isOmniweb	 = (ua.indexOf('omniweb') != - 1);
	this.isOpera	   = (ua.indexOf('opera') != -1);
	this.isIcab		= (ua.indexOf('icab') != -1);
	this.isAol		 = (ua.indexOf('aol') != -1);
	this.isIE		  = (ua.indexOf('msie') != -1 && !this.isOpera && (ua.indexOf('webtv') == -1) );
	this.isMozilla	 = (this.isGecko && ua.indexOf('gecko/') + 14 == ua.length);
	this.isFirebird	= (ua.indexOf('firebird/') != -1);
	this.isNS		  = ( (this.isGecko) ? (ua.indexOf('netscape') != -1) : ( (ua.indexOf('mozilla') != -1) && !this.isOpera && !this.isSafari && (ua.indexOf('spoofer') == -1) && (ua.indexOf('compatible') == -1) && (ua.indexOf('webtv') == -1) && (ua.indexOf('hotjava') == -1) ) );

	this.isIECompatible = ( (ua.indexOf('msie') != -1) && !this.isIE);
	this.isNSCompatible = ( (ua.indexOf('mozilla') != -1) && !this.isNS && !this.isMozilla);

	this.geckoVersion = ( (this.isGecko) ? ua.substring( (ua.lastIndexOf('gecko/') + 6), (ua.lastIndexOf('gecko/') + 14) ) : -1 );
	this.equivalentMozilla = ( (this.isGecko) ? parseFloat( ua.substring( ua.indexOf('rv:') + 3 ) ) : -1 );
	this.appleWebKitVersion = ( (this.isAppleWebKit) ? parseFloat( ua.substring( ua.indexOf('applewebkit/') + 12) ) : -1 );

	this.versionMinor = parseFloat(navigator.appVersion);

	if (this.isGecko && !this.isMozilla) {
		this.versionMinor = parseFloat( ua.substring( ua.indexOf('/', ua.indexOf('gecko/') + 6) + 1 ) );
	}
	else if (this.isMozilla) {
		this.versionMinor = parseFloat( ua.substring( ua.indexOf('rv:') + 3 ) );
	}
	else if (this.isIE && this.versionMinor >= 4) {
		this.versionMinor = parseFloat( ua.substring( ua.indexOf('msie ') + 5 ) );
	}
	else if (this.isKonqueror) {
		this.versionMinor = parseFloat( ua.substring( ua.indexOf('konqueror/') + 10 ) );
	}
	else if (this.isSafari) {
		this.versionMinor = parseFloat( ua.substring( ua.lastIndexOf('safari/') + 7 ) );
	}
	else if (this.isOmniweb) {
		this.versionMinor = parseFloat( ua.substring( ua.lastIndexOf('omniweb/') + 8 ) );
	}
	else if (this.isOpera) {
		this.versionMinor = parseFloat( ua.substring( ua.indexOf('opera') + 6 ) );
	}
	else if (this.isIcab) {
		this.versionMinor = parseFloat( ua.substring( ua.indexOf('icab') + 5 ) );
	}

	this.versionMajor = parseInt(this.versionMinor, 10);

	this.isDOM1 = (document.getElementById);
	this.isDOM2Event = (document.addEventListener && document.removeEventListener);

	this.mode = document.compatMode ? document.compatMode : 'BackCompat';

	this.isWin	= (ua.indexOf('win') != -1);
	this.isWin32  = (this.isWin && ( ua.indexOf('95') != -1 || ua.indexOf('98') != -1 || ua.indexOf('nt') != -1 || ua.indexOf('win32') != -1 || ua.indexOf('32bit') != -1 || ua.indexOf('xp') != -1) );
	this.isMac	= (ua.indexOf('mac') != -1);
	this.isUnix   = (ua.indexOf('unix') != -1 || ua.indexOf('sunos') != -1 || ua.indexOf('bsd') != -1 || ua.indexOf('x11') != -1);
	this.isLinux  = (ua.indexOf('linux') != -1);

	this.isNS4x = (this.isNS && this.versionMajor == 4);
	this.isNS40x = (this.isNS4x && this.versionMinor < 4.5);
	this.isNS47x = (this.isNS4x && this.versionMinor >= 4.7);
	this.isNS4up = (this.isNS && this.versionMinor >= 4);
	this.isNS6x = (this.isNS && this.versionMajor == 6);
	this.isNS6up = (this.isNS && this.versionMajor >= 6);
	this.isNS7x = (this.isNS && this.versionMajor == 7);
	this.isNS7up = (this.isNS && this.versionMajor >= 7);

	this.isIE4x = (this.isIE && this.versionMajor == 4);
	this.isIE4up = (this.isIE && this.versionMajor >= 4);
	this.isIE5x = (this.isIE && this.versionMajor == 5);
	this.isIE55 = (this.isIE && this.versionMinor == 5.5);
	this.isIE5up = (this.isIE && this.versionMajor >= 5);
	this.isIE6x = (this.isIE && this.versionMajor == 6);
	this.isIE6up = (this.isIE && this.versionMajor >= 6);
	this.isIE4xMac = (this.isIE4x && this.isMac);
}
var browser = new BrowserDetect();

function adjustIFrameSize(iframeWindow) {
	if (iframeWindow.document.height) {
		var iframeElement = document.getElementById(iframeWindow.name);
		iframeElement.style.height = iframeWindow.document.height + 'px';
	} else if (document.all) {
		var iframeElement = document.all[iframeWindow.name];
		if (iframeWindow.document.compatMode && iframeWindow.document.compatMode != 'BackCompat') {
			iframeElement.style.height = iframeWindow.document.documentElement.scrollHeight + 5 + 'px';
		} else {
			iframeElement.style.height = iframeWindow.document.body.scrollHeight + 5 + 'px';
		}
	}
}

function encode64(input) {
	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var output = "";
	var chr1, chr2, chr3, enc1, enc2, enc3, enc4 = "";
	var i = 0;
	do {
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);
		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;
		if (isNaN(chr2)) enc3 = enc4 = 64;
		else if (isNaN(chr3)) enc4 = 64;
		output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
		chr1 = chr2 = chr3 = "";
		enc1 = enc2 = enc3 = enc4 = "";
	} while (i < input.length);
	return output;
}

function decode64(input) {
	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var output = "";
	var chr1, chr2, chr3, enc1, enc2, enc3, enc4 = "";
	var i = 0;
	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	do {
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
	} while (i < input.length);
	return output;
}

function rsiCheck() {
	rsi_account = '05C63E675C06B32B95D2EB5B05584CF4';
	rsi_site = 'D0A4162C9E7B7CD278E3DFBA81C09652';

	document.write('<sc'+'ript');
	document.write(' type="text/javascript"');
	document.write(' language="JavaScript"');
	document.write(' src="https://web.archive.org/web/20070831085951/http://ads.revsci.net/adserver/rsi_check.js');
	document.write('">');
	document.write('</sc'+'ript>');
}

function rsiWriteCookie() {
	var expirationDate = new Date();
	var derdbBase64 = readCookie('DERDB');
	if (derdbBase64 != null) {
		derdbPlain = decode64(unescape(derdbBase64));
		if (derdbPlain.indexOf('rsi_want=') != -1) {
			newPair = 'rsi_want=' + rsi_want;
			regEx = /rsi_want=\d*/gi;
			derdbPlain = derdbPlain.replace(regEx, newPair);
		} else {
			derdbPlain = derdbPlain + '&rsi_want=' + rsi_want;
		}
		expirationDate.setYear(expirationDate.getFullYear()+1);
		document.cookie = "DERDB=" + encode64(derdbPlain) + "; path=/; domain=" + document.domain + "; expires=" + expirationDate.toGMTString();
	}
}


// begin MySpace header code
var rows = ["row0","row1","row2"];
var searchItems= ["tweb","tms","tpeople","tmusic","tblog","tvid","tfilm","tbooks","tclass","tcomedy","tevents","tgroups"];
//searchLabels array is localized and embedded in the page

	function csrch(){
		var fs=document.srch.q;
		fs.value=fs.value.replace(/^([ \t])+/gi,"").replace(/([ \t])+$/gi,"");
		if (fs.value.length < 2){
			alert("This search term is too short or blank.");
			fs.focus();
			return false;
		}
		return true;
	}

	function getCurrentSearch(){
		var item;
		for (i=0;i<searchItems.length; i++){		 
			item = document.getElementById(searchItems[i]);
			if (item != null && item.className=="active")
				return i;
		}
	}

	function setSearchTarget(p_t){
		var item;
		var menuIndex;
		for (x=0; x<searchItems.length-1; x++){
			item = document.getElementById(searchItems[x]);
			if (item != null)
				item.className="inactive";
		}
		item = document.getElementById(p_t);
		if (item != null)
			document.getElementById(p_t).className="active";
		var currSearch = getCurrentSearch();
		if (currSearch != undefined)
			document.srch.submitBtn.value=searchLabels[currSearch];
		document.srch.t.value=p_t;
		return true;
	}


	function getCurrentRow(){
		for (i=0;i<rows.length; i++)
			if (document.getElementById(rows[i]).className=="show") return i;
	}

	function showRow(row){
		var item;
		for (i=0;i<rows.length; i++){
			item = document.getElementById(rows[i]);
			if (item != null)item.className="hide";
		}

		document.getElementById(rows[row]).className="show";
		//turn on the first item in each row

		if (getCurrentRow()==0) setSearchTarget("tweb");
		if (getCurrentRow()==1) setSearchTarget("tfilm");
		if (getCurrentRow()==2) setSearchTarget("tgroups");
	}

	function displayPrevRow(){
		cr=getCurrentRow();
		if (cr == 0) pr=rows.length-1;
		else pr=(cr-1);
		showRow(pr);
	}

	function displayNextRow(){
		cr=getCurrentRow();
		if (cr == rows.length-1) pr=0;
		else pr=(cr+1);
		showRow(pr);
	}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {c = c.substring(1,c.length);}
		if (c.indexOf(nameEQ) === 0) {return c.substring(nameEQ.length,c.length);}
	}
	return "Unknown";
}
function readFuse(path) {
	var re = new RegExp("fuseaction=([^&]*)");
	var m = re.exec(document.location.href);
	if (m === null){
		var n = document.location.href;
		var nm = n.split("/");
		var mn = nm[Math.max(nm.length-1,0)].split(".");
		if(mn[0].length > 0)return mn[0];
		else return nm[0].split(".")[0];
	}
	else return m[1].split('.').join("/");
}
// end MySpace header code

// start MySpace IM code
function getIMwin(h,w) {
	var getIMurl = "https://web.archive.org/web/20070831085951/http://www.myspace.com/Modules/IM/Pages/GetIM.aspx";
	var getIMh = h;
	var getIMw = w;
	var getIMleft = (screen.availwidth-w)/2;
	var getIMtop =(screen.availheight-h)/2;
	window.open(getIMurl,null,'height='+getIMh+',width='+getIMw+',left='+getIMleft+',top='+getIMtop+',status=no,toolbar=no,menubar=no,location=no');
}

function gotIM(){
	try{if (document.cookie && document.cookie.indexOf('imyspaceim') != -1)return true;}catch(err){}
	try{new ActiveXObject("MySpaceIMX.MySpaceIMPlugin.1");return true;}catch(err){}
	try{if(navigator.mimeTypes && navigator.mimeTypes.length>0)if(navigator.mimeTypes["application/myspaceim"])return true;}catch(err){}
	return false
}

function IsMySpaceIMInstalled(){IsMySpaceIMInstalledById(get_url());}
function IsMySpaceIMInstalledById(fid){
	if(gotIM())window.location.href='myim:sendIM?uID=0&cID='+fid;
	else getIMwin(475,600);
}
// end MySpace IM code

// Hover Tool Tip 
// declare main ToolTip variable
var msToolTip = {
	// ToolTip properties
	xOffset	  : 0,
	yOffset	  : 0,
	ID		   : "msToolTip",
	arrowID	  : "msToolTipArrow",
	showDelay	: 150,
	hideDelay	: 450,
	created	  : false,
	timerMsgDiv  : null,
	timerArrowDiv: null,
	msgDiv	   : null,
	arrowShow	: 0,
	arrowDiv	 : null,
	arrowImgUp   : "https://web.archive.org/web/20070831085951/http://x.myspace.com/images/arrowUp.jpg",
	arrowImgDown : "https://web.archive.org/web/20070831085951/http://x.myspace.com/images/arrowDown.jpg",
	arrowImgLeft : "https://web.archive.org/web/20070831085951/http://x.myspace.com/images/arrowLeft.jpg",
	arrowImgRight: "https://web.archive.org/web/20070831085951/http://x.myspace.com/images/arrowRight.jpg",
	arrowDir	 : 0,  // 0 - Up, 1- Down, 2- Left, 3 - Right

		// define Dimension
	 getLeft : function(){
		this.left = 0;
		if (typeof window.pageXOffset == "number") this.left = window.pageXOffset;
		else if (document.documentElement && document.documentElement.scrollLeft)
			this.left = document.documentElement.scrollLeft;
		else if (document.body && document.body.scrollLeft)
			this.left = document.body.scrollLeft;
		else if (window.scrollX) this.left = window.scrollX;
	},
	getTop : function(){
		this.top = 0;
		if (typeof window.pageYOffset == "number") this.top = window.pageYOffset;
		else if (document.documentElement && document.documentElement.scrollTop)
			this.top = document.documentElement.scrollTop;
		else if (document.body && document.body.scrollTop)
			this.top = document.body.scrollTop;
		else if (window.scrollY) this.top = window.scrollY;
	},

	getClientWidth : function(){
		this.width = 0;
		if (window.innerWidth) this.width = window.innerWidth - 20;
		else if (document.documentElement && document.documentElement.clientWidth)
			this.width = document.documentElement.clientWidth;
		else if (document.body && document.body.clientWidth)
		this.width = document.body.clientWidth;
	},

	getClientHeight : function(){
		this.height = 0;
		if (window.innerHeight) this.height = window.innerHeight - 20;
		else if (document.documentElement && document.documentElement.clientHeight)
			this.height = document.documentElement.clientHeight;
		else if (document.body && document.body.clientHeight)
		this.height = document.body.clientHeight;
	},
	// declare setup Event
	setUpExtraEvents : function(e){
		e=e?e:window.event;
		e.tgt = e.srcElement ? e.srcElement : e.target;
		if (!e.stopPropagation)
			e.stopPropagation = function() { if (window.event) window.event.cancelBubble = true; }
		if (!e.preventDefault)
			e.preventDefault  = function() { return false; }
		return e;
	},

	// create div's object that are containers of HTML msgs
	createDivElement : function(ID){
		if (document.createElement && document.body && typeof document.body.appendChild != "undefined"){
			 if(!document.getElementById(ID)){
				var e=document.createElement("div");
				e.id=ID;
				document.body.appendChild(e);
			 }
			 this.created=true;
		}
	},
	// setup timers for the visibility of the div's objects
	setupTimerMsgDiv : function(vis,delay)
	{
		if (this.timerMsgDiv)
		{
			clearTimeout(this.timerMsgDiv);
			this.timerMsgDiv=0;
		}
		this.timerMsgDiv = setTimeout("msToolTip.setVisibility('"+this.ID+"', '" + vis + "')",delay);
	},
	setupTimerArrowDiv : function(vis,delay)
	{
		if (this.timerArrowDiv)
		{
			clearTimeout(this.timerArrowDiv);
			this.timerArrowDiv=0;
		}
		this.timerArrowDiv = setTimeout ("msToolTip.setVisibility('"+this.arrowID+"', '" + vis + "')",delay);
	},
	// init ToolTip
	initToolTip : function()
	{
		this.createDivElement(this.ID);
		if (this.arrowShow)
		{
			this.arrowID = this.ID + "Arrow";
			this.createDivElement(this.arrowID);
		}
	},
	// show ToolTip
	showToolTip : function(e,msg)
	{
		this.setupTimerMsgDiv('visible',this.showDelay);
		this.setupTimerArrowDiv('visible',this.showDelay);

		this.msgDiv=document.getElementById(this.ID);
		this.arrowDiv=document.getElementById(this.arrowID);

		this.getClientWidth();
		this.getClientHeight();
		this.getLeft();
		this.getTop();

		this.writeToolTipHTMLMsg(this.msgDiv,msg);
		this.positionToolTip(e);
		if (this.arrowShow) {
			var i=[this.arrowImgUp,this.arrowImgDown,this.arrowImgLeft,this.arrowImgRight]
			this.writeToolTipHTMLMsg(this.arrowDiv,"<img src='" + i[this.arrowDir] + "'>");
		}
		this.positionToolTip(e);
	},
	// hide ToolTip
	hideToolTip : function()
	{
		this.setupTimerMsgDiv('hidden',this.hideDelay);
		this.setupTimerArrowDiv('hidden',this.hideDelay);
		this.msgDiv=null;
		this.arrowDiv=null;
	},
	// write HTML message in innerHTML of the div
	writeToolTipHTMLMsg : function(msgDiv, msg)
	{
		if (msgDiv != null && typeof msgDiv.innerHTML != "undefined")
				msgDiv.innerHTML=msg;
	},
	// set position of msgs where will be on the screen
	positionToolTip : function(e)
	{
		var msgDiv=this.msgDiv;
		var arrowDiv=this.arrowDiv;
		var xOffset=this.xOffset;
		var yOffset=this.yOffset;
		var xMsg=0,yMsg=0;
		var xArrow=0,yArrow=0;

		if(msgDiv && msgDiv.style)
		{
			 xMsg=(typeof e.clientX != "undefined" ? e.clientX:e.pageX)+this.left;
			 yMsg=(typeof e.clientY != "undefined" ? e.clientY:e.pageY)+this.top;
			 xArrow=xMsg;yArrow=yMsg;

			 xMsg = ( xMsg + this.msgDiv.offsetWidth + this.xOffset > this.width  + this.left ?xMsg - this.msgDiv.offsetWidth - this.xOffset:xMsg + xOffset);

			 if (yMsg + this.msgDiv.offsetHeight + this.yOffset > this.height + this.top ){
				 yMsg = yMsg - this.msgDiv.offsetHeight - this.yOffset;
				 if ( yMsg < this.top) yMsg = this.height + this.top - this.msgDiv.offsetHeight;
			 }
			 else yMsg = yMsg + yOffset;

			if (xMsg < 0) xMsg=0;
			 if (yMsg < 0) yMsg=0;
			 msgDiv.style.left = xMsg + "px" ;
			 msgDiv.style.top  = yMsg + "px" ;

			 if(arrowDiv && arrowDiv.style){
				if ((yMsg<=yArrow && yArrow+2<yMsg+this.msgDiv.offsetHeight && xMsg<=xArrow && xArrow+2<xMsg+this.msgDiv.offsetWidth) ||
					 xArrow-2<xMsg || xArrow>xMsg+this.msgDiv.offsetWidth+this.arrowDiv.offsetWidth+2)
				{
					this.setupTimerArrowDiv('hidden',this.hideDelay);
				}
				else{
					if (yArrow<=yMsg) this.arrowDir = 0;
					else if (yArrow>yMsg && yArrow<=yMsg+this.msgDiv.offsetHeight){
						 if (xArrow <= xMsg) this.arrowDir = 2;
						 else if (xArrow > xMsg)  this.arrowDir = 3;
					}
					else this.arrowDir = 1;

					this.arrowDiv.style.left =
						(this.arrowDir == 2 ? xMsg - this.arrowDiv.offsetWidth + 1:
								(this.arrowDir == 3 ? xMsg + this.msgDiv.offsetWidth - 1:
										xArrow)) + "px";
					this.arrowDiv.style.top  =
						((this.arrowDir == 0 ? yMsg - this.arrowDiv.offsetHeight + 2:
								(this.arrowDir == 1 ? yMsg + this.msgDiv.offsetHeight:
										yArrow)) - 1) + "px";
				}
			 }
		}

	},
	// set visibility property of div object
	setVisibility: function(id,vis){
		var el = document.getElementById(id);
		if (el) el.style.visibility=vis;
	},
	// check the mouse position where is it , Is it still on the object
	divMouseOut: function(e){
		e = msToolTip.setUpExtraEvents(e);
		var toElm = e.relatedTarget != null ? e.relatedTarget : e.toElement;
		if(this!=toElm && !msToolTip.containedBy(toElm, this)) msToolTip.hideToolTip();
	},
	// returns true of oNd is contained by oCnt (container)
	containedBy: function (oNd, oCnt){
		if (!oNd) return false;
		for(oNd = oNd.parentNode ; oNd != null; oNd = oNd.parentNode )
			if (oNd == oCnt) return true;
		return false;
	},
	// Clear time that is responsable for HoverTip option
	clearTimerHover: function(){
		if (msToolTip.tmrIdHover){
				clearTimeout(msToolTip.tmrIdHover);
				msToolTip.tmrIdHover = 0;
		}
	},
	// Detach event onmouse out and over
	detachToolTip: function(){
		if (this.msgDiv != null){
				this.msgDiv.onmouseout = null;
				this.msgDiv.onmouseover = null;
				this.msgDiv = null;
		}
		if (this.arrowDiv != null)
				this.arrowDiv = null;
	}
};
// public function for different behavior
// Hover Tip behavior
var msPublicToolTip = {
	initMsHoverTip: function(){
		msToolTip.tmrIdHover = 0;
		registerEvent("window", "unload", "msToolTip.detachToolTip", true);
		msToolTip.initToolTip();
	},
	showMsHoverTip: function(e, msg){
		 if ( typeof msToolTip == "undefined" || !msToolTip.created ) return;
		 msToolTip.clearTimerHover();
		 msToolTip.showToolTip(e, msg);
		 if ( msToolTip.msgDiv != null && msToolTip.msgDiv.onmouseout == null ) {
			msToolTip.msgDiv.onmouseout  = msToolTip.divMouseOut;
			msToolTip.msgDiv.onmouseover = msToolTip.clearTimerHover;
		 }
	},
	hideMsHoverTip : function (){
		 if(typeof msToolTip == "undefined" || !msToolTip.created) return;
		 msToolTip.tmrIdHover = setTimeout("msToolTip.hideToolTip()", 200);
	}
};


}
/*
     FILE ARCHIVED ON 08:59:51 Aug 31, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:34:28 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.483
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.015
  esindex: 0.011
  cdx.remote: 12.947
  LoadShardBlock: 666.467 (3)
  PetaboxLoader3.datanode: 97.62 (4)
  PetaboxLoader3.resolve: 658.107 (2)
  load_resource: 101.497
*/