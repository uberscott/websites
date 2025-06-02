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
MySpace.UI.hideElements = function(tagNames, TorF){//tagNames needs to be an array.
	for(var j=0;j<tagNames.length;j++){
		var t = document.getElementsByTagName(tagNames[j]);
		for(var i=0;i<t.length;i++){t[i].style.visibility = TorF? "hidden" : "";}
	}
}
//Generic window overlay
MySpace.UI._overlay = function(element){
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



//popup
MySpace.UI._Popup = function(element){
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




//
Type.registerNamespace("MySpace.UI.Popup");
MySpace.UI.Popup.create=function(content, title, callback){
	var temp=document.createElement("div");
	temp.innerHTML="<div class='popup_wrapper' style='z-index:1000001;left:0px;width:100%;display:none;visibility:hidden;'><div class='popup_box'><a class='popup_x'></a><div class='popup_title'></div><div class='popup_content'></div><div class='popup_buttons'></div></div></div>";
	return $create(MySpace.UI._Popup,{title:title, content:content, callback:callback},null,null,temp.firstChild);
}

MySpace.UI.Popup.generic = function(message, callback, buttonText){
	var template = document.createElement("div");
	var p = MySpace.UI.Popup.create(message,MySpaceRes.Common.Attention);
	p.add_button(buttonText);
	template.innerHTML=message;
	p.show(callback);
	return p;
}
MySpace.UI.Popup.alert = function(message, callback){new MySpace.UI.Popup.generic(message,callback,MySpaceRes.Common.Ok);}
MySpace.UI.Popup.confirm = function(message, callback){
	var p=new MySpace.UI.Popup.generic(message,callback,MySpaceRes.Common.Yes);
	p.add_button(MySpaceRes.Common.No);
}



//
Type.registerNamespace("MySpace.WebRequest");
MySpace.WebRequest.invoke = function(path, useGet, params, onSuccess, onFailure, userContext, timeout) {
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



//
Type.registerNamespace("MySpace.CMS");
MySpace.CMS.cache={};
MySpace.CMS.getContent=function(placementId, callback, context){
	//only placementId is required
	var cacheItem=MySpace.CMS.cache[placementId];
	if(cacheItem && new Date() < cacheItem.expire) {
		callback(cacheItem.response);
		return;
	}

	MySpace.WebRequest.invoke("/Modules/Common/HttpHandlers/CMS.ashx", false, "placementId="+placementId, onComplete, null, context, 0);
	
	function onComplete(response, eventArgs) {
		var expire = new Date();
		expire.setTime(expire.getTime()+120000);//2 minute cache
		MySpace.CMS.cache[placementId] = {response:response,expire:expire};
		callback(response, eventArgs);
	}
}
MySpace.CMS.track=function(id){
	MySpace.WebRequest.invoke("/index.cfm?fuseaction=cms.goto&_i="+id, true, null, null, Function.emptyFunction, null, 0);
}

//
//Sitewide implimentations of global controls
Type.registerNamespace("MySpace.UI.Header");
MySpace.UI.Header.languageLinkClick=function(culture, domain, index){
	MySpace.CMS.getContent("language_toggle"+index,contentRetrieved);
	function contentRetrieved(content){
		var p = MySpace.UI.Popup.create(content,MySpaceRes.Common.Attention);
		p.add_button(MySpaceRes.Header.Continue);
		p.add_button(MySpaceRes.Header.Cancel, true).isCancel=true;
		p.set_state({culture:culture, domain:domain});
		p.addCssClass("popupChangeLanguage");
		p.show(popupCallback);
	}
	function popupCallback(sender, args){
		if(args.target.isCancel) return;//clicked cancel
		var state=sender.get_state();
		//if they are logged in,there **SHOULD** be a checkbox
		var c=sender._box.childNodes[2].getElementsByTagName("input");
		if(c.length>0 && c[0].checked){//Persist user's language
			Sys.Net.WebServiceProxy.invoke("/Services/GeoLocation.asmx", "SavePreferredCulture", false, {culture:state.culture}, goToDomain, null, null, 0);
			return;
		}
		goToDomain();
	}
	function goToDomain(){//needed for callback
		var t = window.location;
		window.location = "http://" + domain + (t.pathname||"") + (t.search||"");
	}
}

//expected input: [{"culture":"fr-CH","text":"MySpace Suisse","domain":"suisse.myspace.com"},{"culture":"it-CH","text":"MySpace Svizzera","domain":"svizzera.myspace.com"}]
MySpace.UI.Header.addLanguageLinks=function(linkinfos){
	if(!linkinfos || linkinfos.length===0) return;
	var template = "<a class=\"languageLink\" onclick=\"MySpace.UI.Header.languageLinkClick('{0}','{1}',{2})\">{3}</a> | ";
	var html = "";
	for(var i=0;i<linkinfos.length;i++){
		linkinfo = linkinfos[i];
		if(!linkinfo) continue;
		html += String.format(template,linkinfo.culture,linkinfo.domain,i+1,linkinfo.text);
	}
	$get("languageLinks").innerHTML = html;
}


if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();


}
/*
     FILE ARCHIVED ON 19:39:49 Oct 03, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:05:48 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.224
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 1325.922
  LoadShardBlock: 65.448 (3)
  PetaboxLoader3.datanode: 125.695 (4)
  load_resource: 110.543
  PetaboxLoader3.resolve: 32.395
*/