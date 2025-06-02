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

//Remove if ASP.NET AJAX is implimented
if(typeof(MySpace)==="undefined" && typeof(Type)==="undefined"){
	MySpace = {};
	Function.createDelegate=function(a,b){return function(){return b.apply(a,arguments)}};
}
else Type.registerNamespace("MySpace");


MySpace.hideElements = function(tagNames, TorF){//tagNames needs to be an array.
	for(var j=0;j<tagNames.length;j++){
		var t = document.getElementsByTagName(tagNames[j]);
		for(var i=0;i<t.length;i++){t[i].style.visibility = TorF? "hidden" : "";}
	}
}

MySpace._overlay = function(){
	this._overlay = document.createElement("div");
	this._overlay.id = "window_overlay";
	this.set_opacity(0);
	var s = this._overlay.style;
	s.top = "0px";s.left = "0px";s.position = "absolute";s.zIndex = "100000";s.width = "100%";
	document.body.appendChild(this._overlay);
	this._resizeHandler = Function.createDelegate(this,this._setHeight);
	if (window.addEventListener) window.addEventListener("resize", this._resizeHandler, false);
	else window.attachEvent('onresize', this._resizeHandler);
	this._setHeight();
}
MySpace._overlay.prototype = {
	_overlay: null,_interval: null,_fadeIn: false,_opacity: 0,_max: 80,_resizeHandler:null,
	show: function(){MySpace.hideElements(["iframe","object","embed"],true);this._fade(true);},
	hide: function(){MySpace.hideElements(["iframe","object","embed"],false);this._fade(false);},
	_setHeight: function(){
		var a=document.body.scrollHeight;//scrolled content
		var b=document.documentElement.clientHeight;//no scroll
		this._overlay.style.height=((a>b)?a:b)+"px";
	},
	_fade: function(fadeIn){
		this._fadeIn = fadeIn;
		var method = this._tick;
		this._interval = window.setInterval(Function.createDelegate(this,this._tick), 100);
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
		this._overlay.style.opacity = value*.01;
		this._overlay.style.filter = "alpha(opacity="+value+")";
		this._overlay.style.display = (value===0)? "none" : "";
	}
}
window.get_overlay = function(){if(!window._overlay)window._overlay=new MySpace._overlay();return window._overlay;};

MySpace.popup = function(template, titleText){
	this._element = template;
	this._titleText = titleText;
	this.initialize();
}
MySpace.popup.prototype = {
	_element:null,_buttons:null,_wrapper:null,_box:null,_state:null,
	_title:null,_titleText:null,_icon:null,_defaultButton:null,
	show: function(callBack){
		if(window._activePopup)throw "A popup is already active.";
		if(callBack)this._callBack = callBack;
		window.get_overlay().show();
		this._wrapper.style.display = "";
		this._defaultButton.focus();
		window._activePopup = this;
	},
	_hide: function(){
		window.get_overlay().hide();
		this._wrapper.style.display = "none";
		window._activePopup = null;
	},
	add_button: function(text, isDefault){
		var b=document.createElement("input");
		b.type="button";
		b.value=text;
		if(!this._defaultButton || isDefault)
			this._defaultButton = b;
		b._popup = this;
		b.onclick = this._buttonClick;
		this._buttons.appendChild(b);
		return b;
	},
	get_class: function(value){return this._box.className;},
	set_class: function(value){this._box.className = value;},
	get_state: function(value){return this._state;},
	set_state: function(value){this._state = value;},
	_buttonClick: function(e){
		this._popup._hide();
		var cb=this._popup._callBack;
		if(cb)this._popup._callBack(this, e);
	},
	initialize: function(){
		var temp=document.createElement("div");
		temp.innerHTML="<div class='popup_wrapper' style='z-index:1000001;left:0px;width:100%;display:none'><div class='popup_box'><div class='popup_title'></div><div class='popup_buttons'></div></div></div>";
		var wrapper = this._wrapper = temp.firstChild;
		this._box = this._wrapper.firstChild;
		this._title = this._box.firstChild;
		this._buttons = this._box.lastChild;
		this._title.innerHTML = this._titleText;
		if(this._element.parentNode)
			this._element.parentNode.removeChild(this._element);
		this._element.className = "popup_content";
		this._box.insertBefore(this._element, this._buttons);
		document.body.appendChild(wrapper);
	}
}
MySpace.popupGeneric = function(message, callback, buttonText){
	var template = document.createElement("div");
	var p = new MySpace.popup(template,MySpaceRes.Common.Attention);
	p.add_button(buttonText);
	template.innerHTML=message;
	p.show(callback);
	return p;
}
MySpace.popupAlert = function(message, callback){new MySpace.popupGeneric(message,callback,MySpaceRes.Common.Ok);}
MySpace.popupConfirm = function(message, callback){
	var p=new MySpace.popupGeneric(message,callback,MySpaceRes.Common.Yes);
	p.add_button(MySpaceRes.Common.No);
}

MySpace.popupChangeLanguage = function(domain){
	//var msg=MySpace.ClientContext.IsLoggedIn? MySpaceRes.Header.PreferredCultureSave : MySpaceRes.Header.PreferredCultureUpdate;
	var template = document.getElementById("toggleTemplate");
	var p = new MySpace.popup(template,MySpaceRes.Common.Attention);
	p.set_state({Continue:p.add_button("Continue / Continuer"),Cancel:p.add_button("Cancel / Annuler", true)});
	p.set_class(p.get_class()+" popupChangeLanguage");
	p.show(MySpace.changeCulture);
}
MySpace.changeCulture = function(sender,args){
	var popup=sender._popup;
	if(sender===popup.get_state().Cancel) return;//clicked cancel
	var c=popup._element.getElementsByTagName("input");
	if(c.length>0)
		if(c[0].checked) alert("Persist user's language");
		else alert("Not saving- just going to the culture's site");
	else alert("checkbox not found- just going to the culture's site");
}


}
/*
     FILE ARCHIVED ON 08:59:58 Aug 31, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:38:43 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.583
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.015
  esindex: 0.011
  cdx.remote: 7.682
  LoadShardBlock: 128.946 (3)
  PetaboxLoader3.datanode: 111.564 (4)
  load_resource: 150.644
  PetaboxLoader3.resolve: 100.062
*/