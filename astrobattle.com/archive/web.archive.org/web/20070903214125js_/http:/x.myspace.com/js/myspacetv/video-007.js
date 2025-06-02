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

function trim(i){i=i.replace(/([ \t\r\n\f])*$/gi,""); return i.replace(/^([ \t\r\n\f])*/gi,"");}
function isDefined(variable){return (!(!( variable||false )))}
function tryResource(key,defaultVal){ if (!isDefined(window.Resources)){ window.Resources={}
}
if (!eval("Resources."+key)){ eval("Resources."+key+"=\""+defaultVal+"\"");}
}
function validateSearch(){ var h=document.getElementById((arguments.length>1)?arguments[1]:"srchq"); if (!h.isValid()){ alert((arguments.length>0)?arguments[0]:"Please enter one or more search words (minimum length 3 characters)"); h.focus(); return false;}
return true;}
function validateHeadSearch(errTxt){ if (!validateSearch(errTxt,"srchq")) return false; var stype = document.getElementById("srchtype"); if (stype.selectedIndex < 0) return false; var ssrch = document.getElementById("srch"); var sfuse = document.getElementById("srchfuse"); if(stype.options[stype.selectedIndex].value != "tvid"){ ssrch.action = "https://web.archive.org/web/20070904191534/http://searchresults.myspace.com/index.cfm"; sfuse.value = "advancedFind.hub";} else { ssrch.action = "/index.cfm"; sfuse.value = "vids.search";}
return true;}
var minSearchWordLength = 3; function wireSearch(){ var h= document.getElementById((arguments.length>1)?arguments[1]:"srchq"); h.defaultText= (arguments.length>0)?arguments[0]:"Search everyone's videos"; if (h.value == "")
h.value=h.defaultText; if (h.value == h.defaultText)
h.style.color="#999"; h.onfocus = function (){ this.value=trim(this.value); if (this.value == this.defaultText){ this.value=""; this.style.color="#000";}
}
h.onblur = function (){ this.value=trim(this.value); if (this.value.length<1){ this.value=this.defaultText; this.style.color="#999";}
}
h.isValid= function(){ this.value=trim(this.value); return ((this.value.length>=minSearchWordLength) && (this.value!=this.defaultText));}
}
function full(vid){ var fs = window.open( "https://web.archive.org/web/20070904191534/http://vids.myspace.com/index.cfm?fuseaction=vids.fullscreen&videoid=" + vid, "fsv", "toolbar=no,width=" + screen.availWidth + ",height=" + screen.availHeight + ",status=no,resizable=yes,fullscreen=yes,scrollbars=no"); fs.focus();}
function openPlayer(theURL,winName,features) { window.open(theURL,winName,features);}
var BrowserDetect = { init: function () { this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; this.OS = this.searchString(this.dataOS) || "an unknown OS";}, searchString: function (data) { for (var i=0;i<data.length;i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) != -1)
return data[i].identity;}
else if (dataProp)
return data[i].identity;}
}, searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index == -1) return; return parseFloat(dataString.substring(index+this.versionSearchString.length+1));}, dataBrowser: [ { string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb"
}, { string: navigator.vendor, subString: "Apple", identity: "Safari"
}, { prop: window.opera, identity: "Opera"
}, { string: navigator.vendor, subString: "iCab", identity: "iCab"
}, { string: navigator.vendor, subString: "KDE", identity: "Konqueror"
}, { string: navigator.userAgent, subString: "Firefox", identity: "Firefox"
}, { string: navigator.vendor, subString: "Camino", identity: "Camino"
}, { string: navigator.userAgent, subString: "Netscape", identity: "Netscape"
}, { string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE"
}, { string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv"
}, { string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"
} ], dataOS : [ { string: navigator.platform, subString: "Win", identity: "Windows"
}, { string: navigator.platform, subString: "Mac", identity: "Mac"
}, { string: navigator.platform, subString: "Linux", identity: "Linux"
}
]
}; function showCharsRemaining(InputId,OutputId,maxChars){ var inh=document.getElementById(InputId); var outh=document.getElementById(OutputId); if (inh.value.length > maxChars){ var s= (arguments.length > 3)?arguments[3]:" over"; outh.innerHTML = "<span style=\"color:#900;font-weight:bold;\">"+(inh.value.length - maxChars)+ " "+s+"</span>";} else { outh.innerHTML = (maxChars - inh.value.length);}
}
function errorHandler(){ this.msgs = new Array; this.ids = new Array; this.focusObj = null; this.outputId = "errorsBox"; this.errorHeader = "Please fix these problems:"; this.showAlert = true; this.init = function(){ this.msgs= new Array; this.ids= new Array;}
this.add = function(msg){ this.msgs[this.msgs.length]= msg; this.ids[this.ids.length]= (arguments.length > 1)?arguments[1]:null; if ((arguments.length > 1) && (this.focusObj==null)) this.focusObj=document.getElementById(arguments[1]);}
this.show = function(){ if (this.msgs.length < 1){ document.getElementById(this.outputId).innerHTML=""; return false;}
var out=""; var msg=""; for (var i=0; i < this.msgs.length;i++){ if (this.ids[i] != null)
out+="<li><a href=\"#\" onclick=\"document.getElementById('"+this.ids[i]+"').focus();return false;\">"+this.msgs[i]+"</a></li>"; else
out+="<li>"+this.msgs[i]+"</li>"; msg+= this.msgs[i]+"\n";}
out= "<ul>"+out+"</ul>"; var e= document.getElementById(this.outputId); e.innerHTML= "<p>"+this.errorHeader+"</p>"+out; if (this.showAlert) alert(msg); if (this.focusObj!=null) this.focusObj.focus(); return true;}
this.checkRequiredText= function(id,msg){ var ok=true; var h= document.getElementById(id); if (h){ h.value = trim(h.value); if (h.value.length < 1){ this.add(msg,id); ok=false;}
}
if (arguments.length > 2)
this.setClass(arguments[2],ok); return ok;}
this.checkTextMaxLength= function(id,msg,maxchars){ var ok=true; var h= document.getElementById(id); if (h){ if (h.value.length > maxchars){ this.add(msg,id); ok=false;}
}
if (arguments.length > 3)
this.setClass(arguments[3],ok); return ok;}
this.hasErrors = function(){ return (this.msgs.length > 0);}
this.setClass = function(id,ok){ document.getElementById(id).className=(ok)?"":"error";}
}
function getCheckCount(id){ var h=document.getElementById(id).getElementsByTagName("input"); var m=0; for (var i=0; i < h.length; i++)
if ((h[i].type=="checkbox") && h[i].checked) m++; return m
}
function getRadioBtnValue(radioId){ var f = document.getElementById(radioId).form; var n = document.getElementById(radioId).name; var c = -1; for (var i=0; i < f.elements.length; i++){ if ((f.elements[i].type=="radio") && (f.elements[i].name == n) && (f.elements[i].checked)){ c = i; break;}
}
if (c > -1)
return f.elements[c].value; else
return null;}
var checker = { ErrorHeader: "", CharsOver: " over", UserType: 1, Title: {id: "", msg: "", label: "tdTitle" }, Description: { id: "", msg: "", length_msg: "", label: "tdDescription" }, Tags: {id: "", msg: "", label: "tdTags" }, Categories: {msg: "", label: "tdCategories" }, IAgree: {id: "", msg: "", label: "tdTOS" }, isPrivate: {id: "", msg: "", label: "tdVisibility" }, MediaType: {id: "", msg: "", label: "tdMediaType" }, FilmCategories: {msg: "", label: "tdFilmCategories" }, ComedyCategories: {msg: "", label: "tdComedyCategories" }, MusicGenres: {msg: "Please select 1 (one) Music Genre", label: "tdBandCategories" }
}
var isOneClick= true; function validateUpload(){ if (!isOneClick) return false; var ok=true; var e = new errorHandler(); var h; e.init(); e.showAlert = false; e.errorHeader= checker.ErrorHeader; e.checkRequiredText(checker.Title.id, checker.Title.msg, checker.Title.label ); e.checkRequiredText(checker.Tags.id, checker.Tags.msg, checker.Tags.label); if (e.checkRequiredText(checker.Description.id, checker.Description.msg, checker.Description.label))
e.checkTextMaxLength(checker.Description.id,checker.Description.length_msg, 3000, checker.Description.label, checker.CharsOver); var m= getCheckCount("category_container"); ok= ((m > 0) && (m < 4)); if (!ok) e.add(checker.Categories.msg); e.setClass(checker.Categories.label,ok); ok= getRadioBtnValue(checker.isPrivate.id) != null; if(!ok) e.add(checker.isPrivate.msg); e.setClass(checker.isPrivate.label,ok); if ((checker.UserType==15) && (document.getElementById(checker.MediaType.id))){ ok= getRadioBtnValue(checker.MediaType.id) != null; if(!ok) e.add(checker.MediaType.msg); e.setClass(checker.MediaType.label,ok); var m= getCheckCount("comedycats_container"); ok= ((m > 0) && (m < 4)); if (!ok) e.add(checker.ComedyCategories.msg); e.setClass(checker.ComedyCategories.label,ok);} else if (checker.UserType==9){ var m= getCheckCount("filmcats_container"); ok= (m ==1); if (!ok) e.add(checker.FilmCategories.msg); e.setClass(checker.FilmCategories.label,ok);} else if (checker.UserType==7){ var m= getCheckCount("bandcats_container"); ok= (m ==1); if (!ok) e.add(checker.MusicGenres.msg); e.setClass(checker.MusicGenres.label,ok);}
h= document.getElementById(checker.IAgree.id); if (h){ ok=h.checked; if (!ok) e.add(checker.IAgree.msg, checker.IAgree.id); e.setClass(checker.IAgree.label,ok);}
e.show(); ok= !e.hasErrors(); if (ok){ isOneClick= false; if(h){ document.getElementById(checker.IAgree.id).form.submit();}
else { document.getElementById(checker.Title.id).form.submit();}
}
return ok;}
function initUpload(){ document.getElementById(checker.Description.id).onkeyup= function(){ showCharsRemaining(checker.Description.id,"chLeft",3000);}
document.getElementById(checker.Title.id).onkeyup= function(){ showCharsRemaining(checker.Title.id,"titleCharsLeft",64);}
}
function loadDone(fuse){ switch (fuse){ case "Categories":
wordBreaker.fixNested( "title", "H2", "A"); wordBreaker.fixNested( "text", "div", "A"); break; case "Channels":
wordBreaker.fixNested( "title", "H2", "A"); break; case "Home":
wordBreaker.setMaxLength( 35 ); wordBreaker.isPreserveBreaks = true; wordBreaker.isRewriteLinks = true; wordBreaker.fixByClass( "description", "div" ); wordBreaker.setMaxLength( 18 ); wordBreaker.isPreserveBreaks = false; wordBreaker.isRewriteLinks = false; wordBreaker.fixNested( "title", "h2", "a" ); setSubNavSelected(); break; case "MyFavorites":
wordBreaker.fixNested( "title", "H2", "A"); wordBreaker.fixNested( "text", "div", "A"); break; case "MyVideos":
wordBreaker.fixNested( "title", "H2", "A"); wordBreaker.isPreserveBreaks = true; wordBreaker.setMaxLength( 35 ); wordBreaker.addMoreLink("div", "description" ); break; case "MySubscriptions":
wordBreaker.fixNested( "title", "H2", "A"); wordBreaker.fixNested( "text", "div", "A"); break; case "Search":
wireSearch( Resources.search_default_text, "bodyq" ); wordBreaker.isPreserveBreaks = true; wordBreaker.setMaxLength( 33 ); wordBreaker.addMoreLink("div", "description" ); break; case "ViewChannel":
wordBreakerForChannel(); break; case "VideoCharts":
wordBreaker.fixNested( "title", "H2", "A"); wordBreaker.fixNested( "text", "div", "A"); break; case "ViewFavorites":
wordBreaker.fixNested( "title", "H2", "A"); break; case "ViewFriends":
wordBreaker.fixNested( "title", "H2", "A"); break; case "ViewSubscribers":
wordBreaker.fixNested( "title", "H2", "A"); break; case "ViewSubscriptions":
wordBreaker.fixNested( "title", "H2", "A"); break; case "ViewVideos":
wordBreaker.fixNested( "title", "H2", "A"); break; case "ViewVideo":
var outStr = makePaging(); document.getElementById( "PagingHeader" ).innerHTML = outStr; document.getElementById( "PagingFooter" ).innerHTML = outStr; wordBreaker.fixNested( "comment", "TD", "div" ); var h=document.getElementById("vid_description"); if (h){ wordBreaker.isPreserveBreaks = true; wordBreaker.isRewriteLinks = true; wordBreaker.setMaxLength(25); h.innerHTML = "<strong>" + Resources.description +"</strong> &nbsp;"+ wordBreaker.fix(h.innerHTML);}
break; default :
alert("loadDone: default");}
}
function initViewVideo(){ return false; document.getElementById("ajax_comment").onkeyup= function(){ showCharsRemaining("ajax_comment","ajax_comment_length",250);}
}
function initViewChannel(){ return false; document.getElementById("ajax_comment").onkeyup= function(){ showCharsRemaining("ajax_comment","ajax_comment_length",250);}
}
function validateViewVideo(){ if (!isOneClick) return false; var ok=true; var h= document.getElementById("ajax_comment"); if (h){ h.value = trim(h.value); if (h.value.length < 1){ h.focus(); alert( Resources.alert_commentempty); ok=false;}
}
return ok;}
function setSubNavSelected(){ var s = document.URL; var re=new RegExp("[&?]placement=(.+)(\\b|$)","gi"); var m = s.match(re); var subnav= "all"; if (m)
subnav= m[0].substring(m[0].lastIndexOf("=", m[0].length )+1); var e = document.getElementById("nav_sub").getElementsByTagName("a"); re=new RegExp("&placement="+subnav+"(\\b|$)","gi"); for (var i =0; i < e.length; i++){ s = e[i].getAttribute("href"); if (s.match(re)){ e[i].className= "selected";}
}
}
var videoID=-1; function voteClick(vote){ if (vote == 1)
alert("you voted YES for "+videoID); else
alert("you voted NO for "+videoID); return false;}
function blogThis(){ document.getElementById("postBlogForm").submit(); return false;}
function bulletinThis(){ document.getElementById("postBulletinForm").submit(); return false;}
function subscribeThis(){ return false;}
function wordBreakerVideoDescription(){ wordBreaker.setMaxLength( 22 ); wordBreaker.addMoreLink("div", "description" );}
function wordBreakerForChannel(){ wordBreaker.isRewriteLinks = false; wordBreaker.isPreserveBreaks = false; wordBreaker.setMaxLength( 12 ); wordBreaker.fixNested( "myinfo", "table", "h1"); var h=document.getElementById("featuredvideotitle"); if (h){ h= h.getElementsByTagName("a"); if (h) h[0].innerHTML = wordBreaker.fix(h[0].innerHTML);}
wordBreaker.setMaxLength( 8 ); wordBreaker.fixNested( "friend_name", "H2", "a"); wordBreaker.setMaxLength( 8 ); wordBreaker.fixNested( "channel_name", "H2", "a"); wordBreaker.fixNested( "title", "H2", "A"); wordBreaker.fixNested( "text", "div", "A"); wordBreakerVideoDescription();}
function wordBreakerDoComments()
{ wordBreaker.setMaxLength( 12 ); wordBreaker.fixByClass( "friend_name", "A" ); wordBreaker.isRewriteLinks = true; wordBreaker.isPreserveBreaks = true; wordBreaker.setMaxLength( 35 ); wordBreaker.fixNested( "comment", "td", "div");}
function statTrax(enabled,userID,videoID){ this.elapsed=0; this.startTime=null; this.endTime=null; this.intervalID=null; this.isFinished=false; this.isPaused=false; this.isEnabled = enabled; this.vUserID = userID; this.vVideoID = videoID; this.getDateTime= function(){ var dt = new Date(); var sdate = (dt.getUTCMonth()+1) +"/"+ dt.getUTCDate() +"/"+ dt.getUTCFullYear() +" "+ dt.getUTCHours() +":"+ dt.getUTCMinutes() +":"+ dt.getUTCSeconds(); return sdate.toString();}
this.start = function(){ if (!this.isEnabled) return false; if (this.isFinished) return; this.intervalID= window.setInterval(fl_count, 500); this.startTime=this.getDateTime();}
this.pause = function(){ if (!this.isEnabled) return false; this.isPaused=!this.isPaused;}
this.finish = function(){ if (!this.isEnabled) return false; this.endTime=this.getDateTime(); this.isFinished=true; window.clearInterval(this.intervalID);}
this.count = function(){ if (this.isFinished || this.isPaused) return; this.elapsed+=0.5;}
this.data= function(){ return this.vUserID+"|" +this.vVideoID+"|" +Math.round(this.elapsed)+"|" +((this.startTime==null)?this.getDateTime():this.startTime)+"|" +((this.endTime==null)?this.getDateTime():this.endTime)+"|" +this.isFinished;}
if (this.isEnabled)
window.onunload = function(){ if (document.getElementById("vplayer")){ var i= new Image(); i.src="https://web.archive.org/web/20070904191534/http://mediaservices.myspace.com/services/media/PlayEventHandler.ashx?data="+escape(gFlashTrax.data())+"&lud="+Math.random()*9539699; var n=0; var d=new Date(); var now= new Date(); do{n++;now= new Date();} while(!i.complete &&(n<20000) &&(now-d < 950));}
return (void 0);}
}
var gFlashTrax; function fl_init(enabled,userID,videoID){ gFlashTrax= new statTrax(enabled,userID,videoID);}
function fl_start(){gFlashTrax.start()}
function fl_pause(){gFlashTrax.pause()}
function fl_finish(){gFlashTrax.finish()}
function fl_count(){gFlashTrax.count()}
randomseed = Date.parse(new Date());


}
/*
     FILE ARCHIVED ON 19:15:34 Sep 04, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:09:42 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.564
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.013
  cdx.remote: 10.433
  LoadShardBlock: 620.466 (3)
  PetaboxLoader3.datanode: 88.588 (4)
  PetaboxLoader3.resolve: 620.334 (3)
  load_resource: 98.271
*/