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

Type.registerNamespace("MySpace");
Type.registerNamespace("MySpace.UI");

Date.prototype.addMilliseconds = function(value){
	/// <param name="value" type="Number" integer="true"></param>
	this.setTime(this.getTime() + value);return this;
}
Date.prototype.addSeconds = function(value){
	/// <param name="value" type="Number" integer="true"></param>
	this.addMilliseconds(value*1000);return this;
}
Date.prototype.addMinutes = function(value){
	/// <param name="value" type="Number" integer="true"></param>
	this.addMilliseconds(value*60000);return this;
}
Date.prototype.addHours = function(value){
	/// <param name="value" type="Number" integer="true"></param>
	this.addMilliseconds(value*3600000);return this;
}
Date.prototype.addDays = function(value){
	/// <param name="value" type="Number" integer="true"></param>
	this.setDate(this.getDate()+value);return this;
}
Date.prototype.addMonths = function(value){
	/// <param name="value" type="Number" integer="true"></param>
	this.setMonth(this.getMonth()+value);return this;
}
Date.prototype.addYears = function(value){
	/// <param name="value" type="Number" integer="true"></param>
	this.setFullYear(this.getFullYear()+value);return this;
}

//
MySpace.UI.hideElements = function(tagNames, TorF){
	/// <param name="value" type="Array" elementType="String"></param>
	/// <param name="TorF" type="Boolean"></param>
	for(var j=0;j<tagNames.length;j++){
		var t = document.getElementsByTagName(tagNames[j]);
		for(var i=0;i<t.length;i++){t[i].style.visibility = TorF? "hidden" : "";}
	}
}
//Generic window overlay
MySpace.UI._overlay = function(element){
	/// <param name="element" domElement="true"></param>
	document.body.appendChild(element);
	MySpace.UI._overlay.initializeBase(this,[element]);
}
MySpace.UI._overlay.prototype = {
	_interval: null,_fadeIn: false,_opacity: 0,_max: 80,_fadeDelegate:null,_resizeHandler:null,
	show: function(){MySpace.UI.hideElements(["iframe","object","embed"],true);this._fade(true);},
	hide: function(){MySpace.UI.hideElements(["iframe","object","embed"],false);this._fade(false);},
	initialize:function(){
		var element = this.get_element();
		element.id = "window_overlay";
		element.style.zIndex = "100000";
		element.style.width = "100%";
		this.set_opacity(0);
		Sys.UI.DomElement.setLocation(element,0,0);
		this._setHeight();
		this._resizeHandler = Function.createDelegate(this, this._setHeight);
		$addHandler(window, "resize", this._resizeHandler);
	},
	_setHeight: function(){
		var a=document.body.scrollHeight;//scrolled content
		var b=document.documentElement.clientHeight;//no scroll
		this.get_element().style.height=((a>b)?a:b)+"px";
	},
	_fade: function(fadeIn){
		/// <param name="fadeIn" type="Boolean"></param>
		this._fadeIn = fadeIn;
		if(fadeIn) this.set_visible(true);
		if(!this._fadeDelegate)this._fadeDelegate = Function.createDelegate(this,this._tick);
		this._interval = window.setInterval(this._fadeDelegate, 100);
	},
	_tick: function(){
		if(!this._interval) return;
		var increase = 20;
		if(!this._fadeIn) increase*=-1;
		var newOpacity = this._opacity + increase;
		if(newOpacity<0) newOpacity = 0;
		else if(newOpacity>this._max) newOpacity = this._max;
		if(newOpacity<=0 || newOpacity>=this._max)
			window.clearInterval(this._interval);
		this.set_opacity(newOpacity);
	},
	set_opacity: function(value){
		/// <param name="value" type="Number" integer="true"></param>
		this._opacity = value;
		var s = this.get_element().style;
		s.opacity = value*.01;
		s.filter = "alpha(opacity="+value+")";
		if(value===0) this.set_visible(false);
	},
	dispose:function(){
		$removeHandler(window, "resize", this._resizeHandler);
		this._fadeDelegate=null;
		MySpace.UI._overlay.callBaseMethod(this, 'dispose');
	}
}
MySpace.UI._overlay.registerClass('MySpace.UI._overlay', Sys.UI.Control);
window.get_overlay = function(){if(!window._overlay)window._overlay=$create(MySpace.UI._overlay,null,null,null,document.createElement("div"));return window._overlay;};



MySpace.UI._Popup = function(element){
	/// <param name="element" domElement="true"></param>
	this._box = element.firstChild;
	MySpace.UI._Popup.initializeBase(this,[element]);
}
MySpace.UI._Popup.prototype = {
	_box:null,
	_state:null,
	_defaultButton:null,
	_callback:null,

	get_state: function(){return this._state;},
	set_state: function(value){this._state = value;},

	get_title: function(){return this._box.childNodes[1].innerHTML;},
	set_title: function(value){this._box.childNodes[1].innerHTML = value;},

	get_content: function(){return this._box.childNodes[2].innerHTML;},
	set_content: function(value){this._box.childNodes[2].innerHTML = value;},

	get_callback: function(){return this._callback;},
	set_callback: function(value){this._callback = value;},

	add_button: function(text, isDefault){
		var b=document.createElement("input");
		b.type="button";
		b.value=text;
		if(isDefault)
			this._defaultButton = b;
		$addHandlers(b,{click:this._buttonClick},this);
		this._box.lastChild.appendChild(b);
		return b;
	},

	show: function(callBack){
		if(MySpace.UI._Popup._activePopup)throw "A Popup is already active.";
		if(callBack)this._callBack = callBack;
		window.get_overlay().show();
		this.set_visible(true);
		if(this._defaultButton)this._defaultButton.focus();
		MySpace.UI._Popup._activePopup = this;
	},
	_hide: function(){
		window.get_overlay().hide();
		this.set_visible(false);
		MySpace.UI._Popup._activePopup=null;
	},
	_buttonClick: function(e){
		this._hide();
		var cb=this._callBack;
		if(cb)cb(this, e);
	},
	initialize: function(){
		var element = this.get_element();
		//element should always have a parent becuase it should have been created by a template
		element.parentNode.removeChild(element);
		document.body.appendChild(element);
		this._box.firstChild.isCancel=true; //red-x
		$addHandlers(this._box.firstChild,{click:this._buttonClick},this);
		MySpace.UI._Popup.callBaseMethod(this, 'initialize');
	},
	dispose: function(){
		var buttons = this._box.lastChild.childNodes;
		for(var i=0;i<buttons.length;i++)
			$clearHandlers(buttons[i]);
		MySpace.UI._Popup.callBaseMethod(this, 'dispose');
	}
}
MySpace.UI._Popup.registerClass('MySpace.UI._Popup', Sys.UI.Control);
MySpace.UI._Popup._activePopup=null;



MySpace.UI.Popup=function(){throw "Cannot instantiate static class.";}
MySpace.UI.Popup.create=function(content, title, callback){
	/// <param name="content" type="String"></param>
	/// <param name="title" type="String"></param>
	/// <param name="callback" type="Function" mayBeNull="true" optional="true"></param>
	/// <returns type="MySpace.UI.Popup"></returns>
	var temp=document.createElement("div");
	temp.innerHTML="<div class='popup_wrapper' style='z-index:1000001;left:0px;width:100%;display:none;visibility:hidden;'><div class='popup_box'><a class='popup_x'></a><div class='popup_title'></div><div class='popup_content'></div><div class='popup_buttons'></div></div></div>";
	return $create(MySpace.UI._Popup,{title:title, content:content, callback:callback},null,null,temp.firstChild);
}

MySpace.UI.Popup.generic = function(message, buttonText, callback){
	/// <param name="message" type="String"></param>
	/// <param name="buttonText" type="String"></param>
	/// <param name="callback" type="Function" mayBeNull="true" optional="true"></param>
	/// <returns type="MySpace.UI.Popup"></returns>
	var template = document.createElement("div");
	var p = MySpace.UI.Popup.create(message,MySpaceRes.Common.Attention);
	p.add_button(buttonText);
	template.innerHTML=message;
	p.show(callback);
	return p;
}
MySpace.UI.Popup.alert = function(message, callback){
	/// <param name="message" type="String"></param>
	/// <param name="callback" type="Function" mayBeNull="true" optional="true"></param>
	new MySpace.UI.Popup.generic(message,callback,MySpaceRes.Common.Ok);
}
MySpace.UI.Popup.confirm = function(message, callback){
	/// <param name="message" type="String"></param>
	/// <param name="callback" type="Function" mayBeNull="true" optional="true"></param>
	var p=new MySpace.UI.Popup.generic(message,callback,MySpaceRes.Common.Yes);
	p.add_button(MySpaceRes.Common.No);
}
MySpace.UI.Popup.registerClass('MySpace.UI.Popup');



MySpace.WebRequest=function(){throw "Cannot instantiate static class.";}
MySpace.WebRequest.invoke = function(path, useGet, params, onSuccess, onFailure, userContext, timeout) {
	/// <param name="path" type="String"></param>
	/// <param name="useGet" type="Boolean"></param>
	/// <param name="params"></param>
	/// <param name="onSuccess" type="Function" mayBeNull="true" optional="true"></param>
	/// <param name="onFailure" type="Function" mayBeNull="true" optional="true"></param>
	/// <param name="userContext" mayBeNull="true" optional="true"></param>
	/// <returns type="Sys.Net.WebRequest"></returns>
	if (!params) params = {};
	var request = new Sys.Net.WebRequest();
	if (!useGet) {
		if(typeof params==="string")
		var body = (typeof params!=="string")? Sys.Serialization.JavaScriptSerializer.serialize(params) : params;
		if (body === "{}") body = "";
		request.set_body(body);
	}
	request.set_url(Sys.Net.WebRequest._createUrl(path, (useGet)?params:{}));

	request.add_completed(onComplete);
	if (timeout && timeout > 0) request.set_timeout(timeout);
	request.invoke();

	function onComplete(response, eventArgs) {
		if (response.get_responseAvailable()) {
			var statusCode = response.get_statusCode();

			var result = null;
			try {
				var contentType = response.getResponseHeader("Content-Type");
				if (contentType.startsWith("application/json"))
					result = response.get_object();
				else if (contentType.startsWith("text/xml"))
					result = response.get_xml();
				else result = response.get_responseData();
			} catch (ex) {}

			//handle errors
			if ((statusCode < 200) || (statusCode >= 300)) {
				if (onFailure) {
					if (!result) {
						result = new Sys.Net.WebServiceError(false , "WebRequest failed for an unknown reason.", "", "");
					}
					result._statusCode = statusCode;
					onFailure(result, userContext);
				}
				else {//dev doesn't want to handle the error, just alert it
					var error;
					if (result)
						error = result.get_exceptionType() + "-- " + result.get_message();
					else error = response.get_responseData();
					window.alert("WebRequest Failed: "+error);
				}
			}
			else if (onSuccess) {
				onSuccess(result, userContext);
			}
		}
		else {
			var msg;
			if (response.get_timedOut()) msg = "WebRequest timed out.";
			else msg = "WebRequest failed for an unknown reason.";

			if (onFailure) onFailure(new Sys.Net.WebServiceError(response.get_timedOut(), msg, "", ""), userContext);
			else alert(msg);
		}
	}
	return request;
}
MySpace.WebRequest.registerClass('MySpace.WebRequest');



MySpace.CMS=function(){throw "Cannot instantiate static class.";}
MySpace.CMS.cache={};
MySpace.CMS.getContent=function(placementId, callback, context){
	/// <param name="placementId" type="Number"></param>
	/// <param name="callback" type="Function" mayBeNull="true" optional="true"></param>
	/// <param name="context" type="Object" mayBeNull="true" optional="true"></param>
	var cacheItem=MySpace.CMS.cache[placementId];
	if(cacheItem && new Date() < cacheItem.expire) {
		callback(cacheItem.response);
		return null;
	}

	MySpace.WebRequest.invoke("/Modules/Common/HttpHandlers/CMS.ashx", false, "placementId="+placementId, _onComplete, null, context, 0);
	
	function _onComplete(response, eventArgs) {
		var expire = new Date();
		expire.setTime(expire.getTime()+120000);//2 minute cache
		MySpace.CMS.cache[placementId] = {response:response,expire:expire};
		if(callback) callback(response, eventArgs);
	}
	return null;
}
MySpace.CMS.track=function(id){
	/// <param name="id" type="String"></param>
	MySpace.WebRequest.invoke("/index.cfm?fuseaction=cms.goto&_i="+id, true, null, null, Function.emptyFunction, null, 0);
}
MySpace.CMS.registerClass('MySpace.CMS');



MySpace.Util=function(){throw "Cannot instantiate static class.";}
MySpace.Util.parseNameValuePair=function(nameValuePair, delimiter, modifier){
	/// <param name="nameValuePair" type="String"></param>
	/// <param name="delimiter" type="Regex"></param>
	/// <param name="modifier" type="Function" mayBeNull="true" optional="true"></param>
	/// <returns type="Object"></returns>
	if(!delimiter) delimiter="=";
	if(!nameValuePair || nameValuePair[0]===delimiter) return null;
	var nameValueObject;
	var pos=nameValuePair.search(delimiter);
	if(pos>0){
		nameValueObject={
			name:nameValuePair.substring(0,pos),
			value:nameValuePair.substring(pos+1)
		}
	}
	else nameValueObject={name:nameValuePair,value:""};

	if(modifier) nameValueObject=modifier(nameValueObject);
	return nameValueObject;
}
MySpace.Util.parseNameValuePairs=function(nameValuePairs, pairDelimiter, nameValueDelimiter, nameValueModifier){
	/// <param name="nameValuePairs" type="String"></param>
	/// <param name="pairDelimiter" type="Regex"></param>
	/// <param name="nameValueDelimiter" type="Regex"></param>
	/// <param name="modifier" type="Function" mayBeNull="true" optional="true"></param>
	/// <returns type="Object"></returns>
	var _collection=null,nameValuePair=null;
	var _pairs = nameValuePairs.split(pairDelimiter);
	for(var i=0;i<_pairs.length;i++){
		nameValuePair=MySpace.Util.parseNameValuePair(_pairs[i],nameValueDelimiter,nameValueModifier);
		if(!nameValuePair) continue;
		if(!_collection) _collection={};
		_collection[nameValuePair.name]=nameValuePair.value;
	}
	return _collection;
}
MySpace.Util.registerClass('MySpace.Util');




MySpace.Cookie=function(name, rawValue){
	/// <param name="name" type="String"></param>
	/// <param name="rawValue" type="String"></param>
	this._name = name;
	this._rawValue = rawValue;
	if(!rawValue) return;
	this._value = unescape(rawValue);
	this._values = MySpace.Util.parseNameValuePairs(rawValue,"&",null,this._modifier);
}
MySpace.Cookie.prototype={
	get_name:function(){return this._name;},
	get_value:function(){return this._value;},
	get_values:function(){return this._values;},

	_modifier:function(nameValueObject){
		if(!nameValueObject.value) return null;
		nameValueObject.value=unescape(nameValueObject.value);
		return nameValueObject;
	},
	toString:function(){
		/// <returns type="String"></returns>
		var valuesArray=[];
		var values=this.get_values();
		if(!values) return this.get_value();
		for(var i in values)
			valuesArray[valuesArray.length] = i+"="+escape(values[i]);
		return valuesArray.join("&");
	}
}
MySpace.Cookie.registerClass('MySpace.Cookie');



MySpace._Cookies=function(){
	var nvc = MySpace.Util.parseNameValuePairs(document.cookie,/\s?;\s?/,null);
	for(var name in nvc)
		this[name] = new MySpace.Cookie(name, nvc[name]);
}
MySpace._Cookies.prototype={
	save:function(cookie,domain,expires){
		/// <param name="cookie" type="MySpace.Cookie"></param>
		/// <param name="domain" type="String"></param>
		/// <param name="expires" type="Date"></param>
		var value=cookie.toString();
		var parts=[cookie.get_name()+"="+value];
		if(domain){
			if(domain!=="localhost" && domain[0]!==".")
				throw Error.invalidOperation("domain must start with '.'");
			parts[1]="domain="+domain;
		}
		if(expires)parts[parts.length]="expires="+expires.toGMTString();
		parts[parts.length]="path=/";
		document.cookie = parts.join("; "); 
		MySpace.Cookies=new MySpace._Cookies();
	},
	remove:function(cookieName){
		/// <param name="cookieName" type="String"></param>
		this.save(new MySpace.Cookie(cookieName,null),null,new Date().addDays(-1));
	}
}
MySpace._Cookies.registerClass('MySpace._Cookies');
MySpace.Cookies=new MySpace._Cookies();
MySpace.Cookies.setTimezone=function(){
	if(typeof MySpace.Cookies.MSCulture !=='undefined'){
		var timezone = MySpace.Cookies.MSCulture.get_values().timeZone;
		if(typeof timezone !=='undefined'){
			var d = new Date();
			d.setMonth(0);
			var clientTimezone = (d.getTimezoneOffset()/-60)+8;
			if(clientTimezone!==timezone){
				MySpace.Cookies.MSCulture.get_values().timeZone=clientTimezone;
				MySpace.Cookies.save(MySpace.Cookies.MSCulture,null,new Date().addDays(7));
			}
		}
	}
}



//Sitewide implimentations of global controls
MySpace.UI.Header=function(){throw "Cannot instantiate static class.";}
MySpace.UI.Header.languageLinkClick=function(culture, domain, index){
	/// <param name="culture" type="String"></param>
	/// <param name="domain" type="String"></param>
	/// <param name="index" type="Number"></param>
	MySpace.CMS.getContent("language_toggle"+index,_contentRetrieved);
	function _contentRetrieved(content){
		var p = MySpace.UI.Popup.create(content,MySpaceRes.Common.Attention);
		p.add_button(MySpaceRes.Header.Continue);
		p.add_button(MySpaceRes.Header.Cancel, true).isCancel=true;
		p.set_state({culture:culture, domain:domain});
		p.addCssClass("popupChangeLanguage");
		p.show(_popupCallback);
	}
	function _popupCallback(sender, args){
		if(args.target.isCancel) return;//clicked cancel
		var state=sender.get_state();
		//if they are logged in,there **SHOULD** be a checkbox
		var c=sender._box.childNodes[2].getElementsByTagName("input");
		if(c.length>0 && c[0].checked){//Persist user's language
			Sys.Net.WebServiceProxy.invoke("/Services/GeoLocation.asmx", "SavePreferredCulture", false, {culture:state.culture}, _goToDomain, null, null, 0);
			return;
		}
		_goToDomain();
	}
	function _goToDomain(){//needed for callback
		var t = window.location;
		window.location = "http://" + domain + (t.pathname||"") + (t.search||"");
	}
}
MySpace.UI.Header.registerClass('MySpace.UI.Header');




if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();


}
/*
     FILE ARCHIVED ON 19:35:12 Oct 03, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:51:32 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.66
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.016
  esindex: 0.02
  cdx.remote: 8.951
  LoadShardBlock: 421.022 (3)
  PetaboxLoader3.datanode: 397.995 (4)
  load_resource: 186.094
*/