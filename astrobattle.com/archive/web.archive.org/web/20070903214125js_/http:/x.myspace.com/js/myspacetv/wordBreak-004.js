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

var wordBreaker = { _hasCSS : false, _maxLength : 12, _spacer : '<span class="enspacex" wbr="true"> </span>', re : { biggie: /\S{12,}/gi, nbsp: /&nbsp;/gi, gt: /&gt;/gi, lt: /&lt;/gi, amp: /&amp;/gi, spaces: /\s+/g, brk: /((&lt;|<)br\s*\/?(&gt;|>)|\n)/gi, excessbrk: /(<br>\s+){2,}/gi, piclnk: /\.(jpe?g|png|gif)$/gi, lnk: /^(http:\/\/[^\s"]+)$/gi
		},
	// "
isRewriteLinks : true, isPreserveBreaks : false, isDebug : false, resources : { normalLinkText: "[link]", imageLinkText: "[image link]", lessLinkText: "[less]", moreLinkText: "[more]"
}, setMaxLength : function(l){ if (this._maxLength == l) return; this._maxLength= l; this.re.biggie =new RegExp("\\S{"+l+",}","gi");}
}
wordBreaker.writeCSS = function(){ document.write( '<style type="text/css">'+ 'span.enspacex{font-size:1px;padding:0;margin:0;'+((this.isDebug)?"background:#f00;padding-top:6px;":"")+'} '+ '</style>' ); this._hasCSS = true;}
wordBreaker.addSpacers = function(txt){ var s=""; if (this.isRewriteLinks && this.re.lnk.test(txt)){ var x = (this.re.piclnk.test(txt))?this.resources.imageLinkText:this.resources.normalLinkText; newlink=txt.replace(this.re.lnk,"$1"); s=txt.replace(this.re.lnk,"<a href=\"" + this.MSPLinksEncode(newlink) + "\" target=\"_blank\" title=\"$1\">" +x+ "</a>");} else { var x=""; txt=txt.replace(this.re.gt,">"); txt=txt.replace(this.re.lt,"<"); txt=txt.replace(this.re.amp,"&"); var i=0; while (i< txt.length){ x=txt.substring(i,i+this._maxLength); d= x.lastIndexOf("_"); if (d>=0){ d++; x=txt.substring(i,i+d);} else { d=this._maxLength;}
i+=d; x=x.replace( "&", "&amp;" ); x=x.replace( ">", "&gt;" ); x=x.replace( "<", "&lt;" ); s+=x+ (i<txt.length?this._spacer:"");}
}
return s;}
wordBreaker.addMoreLink = function(tag,cls){ var maxLength = (arguments.length > 2)?arguments[2]:140; var e = this.getElementsByClass(tag,cls); var s = ""; var m = 0; for (var i=0; i < e.length; i++)
{ if(e[i].getAttribute("wbr") == null)
{ if (e[i].innerHTML.length <= maxLength){ e[i].innerHTML = wordBreaker.fix(e[i].innerHTML);} else { e[i].setAttribute("wbr_swap", wordBreaker.fix(e[i].innerHTML)+ ' <a href="#" onclick="return wordBreaker.doMoreSwap(this)">' +this.resources.lessLinkText+'</a> '); s = e[i].innerHTML.substr( 0, maxLength ); m = s.lastIndexOf(' '); if (m > 30)
s = e[i].innerHTML.substr( 0, m ); e[i].innerHTML = this.fix(s); e[i].innerHTML += ' ... <a href="#" onclick="return wordBreaker.doMoreSwap(this)">' +this.resources.moreLinkText+'</a> ';}
e[i].setAttribute('wbr', 'true');}
}
}
wordBreaker.doMoreSwap = function(me)
{ me = me.parentNode; var s = me.getAttribute("wbr_swap"); me.setAttribute("wbr_swap", me.innerHTML ); me.innerHTML = s; return false;}
wordBreaker.fix = function(txt){ if (!this._hasCSS) this.writeCSS(); txt=txt.replace(this.re.nbsp," "); if (this.isPreserveBreaks){ txt=txt.replace(this.re.brk," <br> "); txt=txt.replace(this.re.excessbrk," <br><br> ");} else { txt=txt.replace(this.re.brk," ");}
if (txt.match(this.re.biggie)){ txt=txt.replace(this.re.spaces," "); var t=txt.split(" "); var s=""; for (var i=0; i < t.length; i++){ if (t[i].length > this._maxLength)
s+=" "+this.addSpacers(t[i]); else
s+=" "+t[i];}
return s.substring(1,s.length);} else { return txt;}
}
wordBreaker.getElementsByClass = function(){ if (arguments.length > 1){ var tag = arguments[0]; var cls= arguments[1];} else { var tag = "*"; var cls= arguments[0];}
var rtn = new Array(); var e = document.getElementsByTagName(tag); var re=new RegExp("(^|\\b|\\s)"+cls+"(\\s|\\b|$)","gi"); for(var i = 0;i < e.length;i++){ if (e[i].className.search(re)>-1)
rtn[rtn.length]=e[i];}
return rtn;}
wordBreaker.getElementsByAttribute = function (){ if (arguments.length > 1){ var tag = arguments[0]; var attr= arguments[1];} else { var tag = "*"; var attr= arguments[0];}
var e = document.getElementsByTagName(tag); var rtn = new Array(); for(var i=0;i < e.length; i++){ if(e[i].getAttribute(attr) != null)
rtn[rtn.length] = e[i]
}
return rtn;}
wordBreaker.fixElemArray = function(e){ for(var i=0;i<e.length;i++){ if(e[i].getAttribute("wbr") == null){ e[i].innerHTML= this.fix(e[i].innerHTML); e[i].setAttribute('wbr', 'true');}
}
}
wordBreaker.fixByTag = function(tagName){ this.fixElemArray(document.getElementsByTagName(tagName));}
wordBreaker.fixByClass = function(className){ var tag = (arguments.length > 1)?arguments[1]:"*"; this.fixElemArray(this.getElementsByClass(tag,className));}
wordBreaker.fixByAttribute = function(attr){ var tag = (arguments.length > 1)?arguments[1]:"*"; this.fixElemArray(this.getElementsByAttribute(tag,attr))
}
wordBreaker.fixById = function(id){ var h = document.getElementById( id ); if (!h) return; h.innerHTML= this.fix(h.innerHTML);}
wordBreaker.fixNested = function( classname, tagname, nestedTagName ){ var e = new Array(); var m = this.getElementsByClass(tagname,classname); if (!m) return ; var subs = null; for (var i=0; i < m.length; i++ ){ subs=m[i].getElementsByTagName(nestedTagName); if (subs && (subs.length>0))
e[e.length]= subs[0];}
this.fixElemArray(e)
}
wordBreaker.MSPLinksEncode = function( input ){ var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; var output = ""; var chr1, chr2, chr3; var enc1, enc2, enc3, enc4; var i = 0; input = "01" + input; do { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64;} else if (isNaN(chr3)) { enc4 = 64;}
output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);} while (i < input.length); output = "https://web.archive.org/web/20070904191535/http://www.msplinks.com/" + output; return output;}


}
/*
     FILE ARCHIVED ON 19:15:35 Sep 04, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:09:43 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.502
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.009
  cdx.remote: 91.845
  LoadShardBlock: 387.746 (3)
  PetaboxLoader3.datanode: 99.992 (4)
  PetaboxLoader3.resolve: 474.066 (2)
  load_resource: 237.374
*/