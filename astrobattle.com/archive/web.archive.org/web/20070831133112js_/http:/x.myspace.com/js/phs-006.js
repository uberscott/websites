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

var gPhsStrs= new Array(); var gPhsContinue=false; var gPhsIsWritten=false; var gPhsForm; function phstrim(i){i=i.replace(/([ \t\r\n\f])*$/gi,""); return i.replace(/^([ \t\r\n\f])*/gi,"");}
function phsclass(pH,pCN,pOn){ var re=new RegExp("(^|\\b|\\s)"+pCN+"(\\s|\\b|$)","gi"); if (pOn){ if (pH.className.search(re)<0)
pH.className+= " "+pCN;}
else{ if (pH.className.search(re)>-1){ pH.className= pH.className.replace(re, ' '); pH.className= pH.className.replace(/ +/g, ' ');}
}
}
function phsIsRisk(pF){ var er=false; for (var i=0; i < pF.elements.length; i++){ t=phstrim(pF.elements[i].type); if ((t=="button")||(t=="submit")){ er=true; break;}
}
return er;}
function phsgetfrm(pF){ if (!phsIsRisk(pF)) return false; if (pF.action=="[object]")
var s=new String(pF.attributes.getNamedItem("action").value); else
var s=new String(pF.getAttribute('action')); var r=s.match(/^\s*https?:/i); if (!r) return false; 
r=s.match(/^https?:\/\/(us\.|cn\.)?([^.]*\.)?(myspace\.(com|cn)|vipmypage\.com)\//i);
if (r) return false; pF.onsubmit=phsShowWarn; return true;}
function phsContinue(){ gPhsContinue=true; gPhsForm.submit();}
function phsHide(){ var h=document.getElementById("phstop"); h.style.display="none"; var g=document.getElementsByTagName("body"); phsclass(g[0],"phiswarn",false);}
function phsStyle(){ var f_newRules= new Array( ["","visibility:visible !important;padding:0;margin:0;float:none;"], ["*","visibility:visible !important;padding:0;margin:0;text-indent:0;color:#000;position:relative;float:none;"], ["h2","background-color:#9F2727;margin:0;padding:5px;color:#fff;font-size:16px;font-weight:bold;"], ["p","margin:0;padding:5px;font-size:12px;"], ["strong","font-size:12px;font-weight:bold;"], ["input","display:block;font-size:13px;margin:0 auto 5px;width:80%;"], ["div#phsalert","border:2px solid #ccc;position:absolute;background-color:#9F2727;z-index:1001;top:215px;left:33%;width:315px;padding-bottom:0;margin-bottom:0;padding:2px;"], ["div#phsalert div","padding-bottom:10px;margin-bottom:0;background-color:#fff !important;"], ["div#phsbg","display:block;visibility:visible;padding:0;margin:0;height:991px;width:1200px;position:absolute;top:0;left:0;background-color:#000;z-index:999;opacity:0.75;FILTER: Alpha(Opacity=80, FinishOpacity=70, Style=2);"], ["input#phsno","display:block;font-weight:bold;"], ["input#phsok","display:block;font-weight:normal;"] ); var x=""; x='<style type="text/css">'; x+="* html body.phiswarn select{visibility:hidden;}"; x+="body.phiswarn iframe{visibility:hidden;display:none;}"; x+="body.phiswarn object{visibility:hidden;display:none;}"; x+="body.phiswarn embed{visibility:hidden;display:none;}"; for (var i=0; i < f_newRules.length; i++)
x+="\n div#phstop "+f_newRules[i][0]+" {"+f_newRules[i][1]+"}"; x+='</style>'; document.write(x);}
function phsShowWarn(){ if (gPhsContinue) return true; gPhsForm=this; var g=document.getElementsByTagName("body"); if (!gPhsIsWritten){ var newDiv= document.createElement("div"); newDiv.id= "phstop"; newDiv.innerHTML= "<div id=\"phsalert\">"+ "<div>"+ "<h2>" +gPhsStrs["heading"]+ "</h2>"+ gPhsStrs["body"]+ "<center>"+ "<input type=\"button\" id=\"phsno\" value=\"" +gPhsStrs["btnCancel"]+ "\" onclick=\"return phsHide();\" />"+ "<input type=\"button\" id=\"phsok\" value=\"" +gPhsStrs["btnOK"]+ "\" onclick=\"return phsContinue();\" />"+ "</center>"+ "<p><a href=\"http://www.myspace.com/Modules/Common/Pages/SafetyTips.aspx\">"+gPhsStrs["linkSecurity"]+"</a></p>"+ "</div></div>"+ "<div id=\"phsbg\"></div>"; g[0].insertBefore(newDiv, g[0].firstChild);} else { var h=document.getElementById("phstop"); h.style.display="block";}
gPhsIsWritten=true; phsclass(g[0],"phiswarn",true); window.scrollTo(0,0); document.getElementById("phsalert").focus(); return false;}
function phscheck(){ var er=false; for(var i=0;i<document.forms.length;i++){ if (phsgetfrm(document.forms[i])){er= true;}
}
if (er){ var k= new Array("heading","body","btnCancel","btnOK","linkSecurity"); var d= new Array( "Urgent Security Alert", "<p><strong>Warning:</strong> You are submitting information to an outside site. This could be an attempt to steal your username and password.</p>"+ "<p>This is <strong>not</strong> a MySpace login page, please do not enter your MySpace login information (email address or password).</p>"+ "<p>Do you wish to continue your form submission?</p>", "NO, CANCEL my button click", "YES, I'll Continue Anyway", "&raquo; Learn more about &quot;phishing&quot; &amp; your security" ); for (var i=0;i<k.length;i++)
if (i<arguments.length)
gPhsStrs[k[i]]=arguments[i]; else
gPhsStrs[k[i]]=d[i]; phsStyle();}
}


}
/*
     FILE ARCHIVED ON 14:07:48 Aug 31, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:47:05 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.238
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.037
  esindex: 0.015
  cdx.remote: 513.072
  LoadShardBlock: 2117.306 (3)
  PetaboxLoader3.datanode: 1782.966 (4)
  PetaboxLoader3.resolve: 288.826 (2)
  load_resource: 196.926
*/