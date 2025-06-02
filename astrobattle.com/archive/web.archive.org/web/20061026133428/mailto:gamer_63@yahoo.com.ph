<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>  <head><script type="text/javascript" src="https://web-static.archive.org/_static/js/bundle-playback.js?v=1B2M2Y8A" charset="utf-8"></script>
<script type="text/javascript" src="https://web-static.archive.org/_static/js/wombat.js?v=1B2M2Y8A" charset="utf-8"></script>
<script>window.RufflePlayer=window.RufflePlayer||{};window.RufflePlayer.config={"autoplay":"on","unmuteOverlay":"hidden","showSwfDownload":true};</script>
<script type="text/javascript" src="https://web-static.archive.org/_static/js/ruffle/ruffle.js"></script>
<script type="text/javascript">
    __wm.init("https://web.archive.org/web");
  __wm.wombat("http://ph.yahoo.com:80/?","20061106010008","https://web.archive.org/","web","https://web-static.archive.org/_static/",
	      "1162774808");
</script>
<link rel="stylesheet" type="text/css" href="https://web-static.archive.org/_static/css/banner-styles.css?v=1B2M2Y8A" />
<link rel="stylesheet" type="text/css" href="https://web-static.archive.org/_static/css/iconochive.css?v=1B2M2Y8A" />
<!-- End Wayback Rewrite JS Include -->

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript" src="https://web.archive.org/web/20061106010008js_/http://sg.yimg.com/i/fp/js/sp_weather.js"></script>
     
    <script type="text/javascript">
      var now=new Date,t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0,t8=0,t9=0,t10=0,t11=0,t12=0,cc='',ylp='';t1=now.getTime();
    </script>
    
      <script language="javascript"><!--
lck='',sss=1162774807,ylp='',_lcs='';
--></script>      <script language="javascript" type="text/javascript">
var YAHOO=window.YAHOO||{};YAHOO.namespace=function(_1){if(!_1||!_1.length){return null;}var _2=_1.split(".");var _3=YAHOO;for(var i=(_2[0]=="YAHOO")?1:0;i<_2.length;++i){_3[_2[i]]=_3[_2[i]]||{};_3=_3[_2[i]];}return _3;};YAHOO.namespace("util");YAHOO.namespace("widget");YAHOO.namespace("example");
YAHOO.namespace("Fd");
YAHOO.namespace("Fp");
/// Viewport Detection
///web.archive.org/web/20061106010008/http://yahoo.fp.nscreenwidth = (typeof(document.documentElement.clientWidth)=='number') ? document.documentElement.clientWidth : false;
/// Screen Resolution Detection
YAHOO.Fp.nScreenWidth = (screen && typeof(screen.availWidth)=='number') ? screen.availWidth : false;
YAHOO.Fp.bNarrow = (YAHOO.Fp.nScreenWidth ? (YAHOO.Fp.nScreenWidth<1024 ? 1 : 0) : -1);
YAHOO.Fp.d = document;
YAHOO.Fp.$ = function(id){
  return (typeof(id)=='string') ? YAHOO.Fp.d.getElementById(id) : false;
}
/// backwards compat
var $=YAHOO.Fp.$;
var d=YAHOO.Fp.d;
/// /backwards compat
YAHOO.cookie = {
  get : function(n){
    var v = '',
      c = ' ' + document.cookie + ';',
      s = c.indexOf((' ' + n + '='));
    if (s >= 0) {
      s += n.length + 2;
      v = unescape(c.substring(s, c.indexOf(';', s)));
    }
    return v;
  },
  set : function(n,v){
    var a=arguments,al=a.length;
    document.cookie = n + "=" + v + 
        ((al>2&&a[2]!="") ? ";expires=" + (new Date(a[2] * 1000)).toGMTString() : "") + 
        ";path="    + ((al>3&&a[3]!="") ? a[3] : "/") + 
        ";domain="  + ((al>4&&a[4]!="") ? a[4] : ".yahoo.com");
  },
  getsub : function(n){
    var sCookie = this.get(n);
    
  },
  checksub : function(sCookie,s){
    var aParts = sCookie.split('&'),nParts = aParts.length,aKeyVal;
    if (nParts==1) {
      return sCookie.indexOf(s);
    } else {
      for(var i=0; i<nParts; i++){
        aKeyVal = aParts[i].split('=');
        if(aKeyVal[0]==s){
          return i;
        }
      }
    }
    return -1;
  },
  getsub : function(n,s){
    var sCookie = this.get(n);
    var nExists = this.checksub(sCookie,s);
    if (nExists>-1) {
      return sCookie.split('&')[nExists].split('=')[1];
    } else if (sCookie.indexOf(s)>0) {
      return sCookie.split('=')[1];
    }
    return '';
  },
  setsub : function(n,s,v){
    var sCookie = this.get(n),a=arguments,al=a.length;
    var expires = (al>3&&a[3]) || '';
    var path    = (al>4&&a[4]) || '/';
    var domain  = (al>5&&a[5]) || 'www.yahoo.com';
    var aParts = sCookie.split('&');
    var nExists = this.checksub(sCookie,s);
    if (sCookie=='') {
      sNewVal=(s+'='+v).toString();
    } else {
      if(nExists==-1){nExists=aParts.length;}
      aParts[nExists]=s+'='+v;
      sNewVal = aParts.join('&');
    }
    return this.set(n,sNewVal,expires,path,domain);
  }
}
YAHOO.Fp.changePageSize = function(bCheck){
  if((location.search.indexOf('rs=')!=1 && location.pathname.indexOf('cgi')<0) || !bCheck){
    if(bCheck){
      var bcn=new Image;
      bcn.src=(ylp?ylp:'p.gif')+'&igpv=1';
    }
    location.replace('http://'+location.hostname+location.pathname+(bCheck ? '?rs=1' : ''));
  }
}
YAHOO.Fp.sPhpFsCookie="";YAHOO.Fp.sFsCookie = YAHOO.cookie.get("FPS");
///web.archive.org/web/20061106010008/http://alert('['+YAHOO.Fp.sFsCookie+']' + '\n' + '['+YAHOO.Fp.sFsCookie.indexOf("t")+']' + '\n' + '['+YAHOO.Fp.bNarrow+']' + '\n' + '['+YAHOO.Fp.sPhpFsCookie+']');
if(YAHOO.Fp.sFsCookie.indexOf("t")!=0 && YAHOO.Fp.bNarrow!=-1){
  YAHOO.cookie.set("FPS",(YAHOO.Fp.bNarrow ? "ds" : "dl"),400*3600000);
  
  if(YAHOO.Fp.bNarrow==1){
  
    YAHOO.Fp.changePageSize(1);
  }
}else if(YAHOO.Fp.sPhpFsCookie != YAHOO.Fp.sFsCookie){
  YAHOO.Fp.changePageSize(1);
}
YAHOO.Fp.togglePageSize = function(sSize){
  YAHOO.cookie.set("FPS",sSize,400*3600000);
  // YAHOO.Fp.changePageSize(0);
  var rootUrl = location.pathname.substr(0, location.pathname.lastIndexOf('/'));
  if ( sSize == 'ts' ) {
    location.replace( rootUrl + '/index_1.php' );
  } else {
    location.replace( rootUrl + '/index.php' );
  }
}
// jad:for page size switching
if ( YAHOO.cookie.get('FPS') == 'ts' ) {
  YAHOO.Fp.togglePageSize( 'ts' );
}
YAHOO.Fp.nPageSize = 0;
YAHOO.Fp._ie=YAHOO.Fp._ie7=0;
YAHOO.Fp._ff='0';
YAHOO.Fp._ffv='0';
YAHOO.Fp._sf='0';
YAHOO.Fp._sfv='0';
YAHOO.Fp._op='0';
YAHOO.Fp._mac='0';
YAHOO.Fp._hostname=location.hostname;
YAHOO.Fp._ylh = typeof(YLH)!='undefined'?YLH+'/':'';
</script>
<!--[if IE]><script language="javascript" type="text/javascript">YAHOO.Fp._ie=1;</script><![endif]-->
<!--[if IE 7]><script language="javascript" type="text/javascript">YAHOO.Fp._ie7=1;</script><![endif]-->
    <script type="text/javascript">
      
var b,dt,l='',n='0',r,s,y;
y=' '+document.cookie+';';
if ((b=y.indexOf(' Y=v'))>=0) {
	y=y.substring(b,y.indexOf(';',b))+'&';
	if ((b=y.indexOf('l='))>=0) {
		l=y.substring(b+2,y.indexOf('&',b));
		if((b=y.indexOf('n='))>=0)n=y.substring(b+2,y.indexOf('&',b));
	}
}
dt=new Date();
s=Math.round(dt.getTime()/1000);
r=Math.round(parseInt(n,32)%1021);
if (lck!=l) {
	document.write('<meta http-equiv="Expires" content="-1">');
	if (location.search.indexOf('r'+r+'=')!=1) {
		location.replace('http://'+location.hostname+location.pathname+'?r'+r+'='+s);
	}
}
      
function err(a,b,c) {
  var img=new Image;
  
    img.src='https://web.archive.org/web/20061106010008/http://srd.yahoo.com/hp5-err/'+escape(a)+','+escape(b)+','+escape(c)+'/*1';
  
  return true;
}
    window.onerror=err; //// commenting this line for debugging
  
      function funld() {
	var img=new Image;
	now=new Date;
	t6=now.getTime();
  
    img.src='https://web.archive.org/web/20061106010008/http://www.yahoo.com/'+(ylp?ylp:'p.gif?t=0')+cc+'&ni='+document.images.length+'&sss='+sss+'&t1='+t1+'&d1='+(t2-t1)+'&d2='+(t3-t1)+'&d3='+(t4-t1)+'&d4='+(t5-t1)+'&d5='+(t6-t1) +'&d6='+(t7-t1)+'&d7='+(t8-t1)+'&d8='+(t9-t1)+'&d9='+(t10-t1)+'&d10='+(t11-t1)+'&d11='+(t12-t1);
  
}
  window.onbeforeunload=funld;
  
    </script>
    
    <title>Yahoo! Philippines</title>
    <meta http-equiv="PICS-Label" content="(PICS-1.1 &quot;http://www.icra.org/ratingsv02.html&quot; l r (cz 1 lz 1 nz 1 oz 1 vz 1) gen true for &quot;http://www.yahoo.com&quot; r (cz 1 lz 1 nz 1 oz 1 vz 1) &quot;http://www.rsac.org/ratingsv01.html&quot; l r (n 0 s 0 v 0 l 0) gen true for &quot;http://www.yahoo.com&quot; r (n 0 s 0 v 0 l 0))">
    <base href="https://web.archive.org/web/20061106010008/http://ph.yahoo.com/" target="_top">
    
      <script type="text/javascript">
      
                YAHOO.Fp.use_two_col=0;
      
      
                YAHOO.Fp.use_bt5=0;
      
      
                YAHOO.Fp.use_editable_trough=0;
      
      
                YAHOO.Fp.use_static_pa=0;
      
      </script>
    
    <style type="text/css">
      body{font:84.5% arial,helvetica,clean,sans-serif;*font-size:small;*font:x-small;}
table{font-size:inherit;font:100%;}
select,input,textarea{font:99% arial,helvetica,clean,sans-serif;}
pre,code{font:115% monospace;*font-size:100%;}
body *{line-height:1.22em;}
.btn-more-2, .hd li.on em, div.hd li.sparkle a, .hd, #mastheadbd .top, #mastheadbd, #doors li a, #today .ft li.on a{
  /* background-image:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t5/grd-1px.gif); */
  background-image:url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/fp/img/grd-1px.gif);
  background-repeat:repeat-x;
}
#minimantle, #trough ul, #pa {
  background-image:url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/fp/img/grd-4px.gif);
  background-repeat:repeat-x;
}
.more, .bullet, .audio, .video, .slideshow, .search, #minimantle li, a#editpage, a#editpage.on{
  /* background-image:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/thm/1/icons.gif); */
  background-image:url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/fp/img/icons.gif);
  background-repeat:no-repeat;
}
.md{
  background:#fff;
  border:1px solid #b0bec7;
}
#left .md{
  border:1px solid #91a7b4;
  border-color:#b0bdc6 #91a7b4 #91a7b4 #b0bdc6;
}
.hd{
  color:#18397c;
  background-color:#fff;
  background-position:bottom left;
  border:1px solid #b0bec7;
  border-bottom:1px solid #93a6b4;
}
.hd li a{
  color:#18397c;
}
.hd li .pipe{
  background:#788a98;
  border-right:1px solid #fff;
}
.hd li.on em{
  border:1px solid #91a7b4;
  border-top-color:#778a98;
  border-bottom:1px solid #fff;
  background-color:#fff;
  background-position:0 -178px;
}
.hd li.first em{
  border-left:none;
}
.hd li.on a{
  color:#c63;
}
div.hd li.sparkle em{
  border:1px solid #768c9a;
  border-bottom:1px solid #93a6b4;
}
div.hd li.sparkle a{
  background-color:#b5cdd9;
  background-position:0 -530px;
  border:1px solid #fff;
}  #minimantle{
    border:1px solid #b0bbcf;
    border-width:0 1px 1px 0;
    background-color:#e2e7ea;
    background-position:0 -2041px;
  }
  #minimantle .md-sub{
    border:1px solid #dde4e9;
  }
  #smallbiz.md-sub{
    border-bottom:1px solid #e2e7ea;
  }
  #advertising.md-sub{
    border-top:1px solid #dde4e9;
  }#minimantle h2 a{
  color:#333;
}
#minimantle li{
  background-position:-8px -1px;
  *background-position:-8px -1px;
}
#mastheadbd .top{
  background-color:#e2eaed;
}
#mastheadbd{
  background-color:#eef3f6;
  background-position:0 -30px;
  border:1px solid #dbe2e8;
  border-width:0 1px;
  border-bottom:1px solid #cad5db;
}
/*
#searchIE{
  position:absolute;
  filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="http://us.i1.yimg.com/us.yimg.com/i/ww/thm/1/search_1.1.png", sizingMethod="scale");
	height:101%;
	width:100%;
}
*/
#doors li{background:#dde6eb}
#doors li strong{
  border:1px solid #dee6e9;border-color:#dee6e9 #586b7a #586b7a #dee6e9}
#doors li a{
  border:1px solid #fff;
  background-color:#fff;
  background-position:bottom left;
}
  #trough{
    background:#91a7b4;
  }
  #trough .bd{
    border:1px solid #fff;
    border-width:0 1px 1px 0;
  }#trough span{    background:#f8f9fb;
    border-top:1px solid #91a7b5;
  }
  #trough ul{
    background-color:#f8f9fc;
  }
  #trough li{
    border-bottom:1px solid #c2cfd8;
  }
  #trough li a {
    background:url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/fp/img/trough_1.2.gif) 0 0 no-repeat;
  }
  span#edityservicescx{
    border:1px solid #b0bdc6 #91a7b4 #91a7b4 #b0bdc6;
    border-width:0 0 1px 1px;
  }
  #edityservices{
    /* background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/thm/1/icons.gif) 0 -257px repeat-x; */
    background-image:url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/fp/img/icons.gif) 0 -257px repeat-x;
  }
a#editpage{
  background-position:100% -598px;
}
a#editpage.on{
  background-position:100% -648px;
}
#today .ft li.on{
  border:1px solid #afbec5;
  border-color:#afbec5 #afbdc5 #afbdc5 #b0bfc6;
}
#today .ft li.on a{
  color:#666;
  background-color:#fcfcfc;
  background-position:0 -296px;
}
#newsft{
  background:#F1F5F6;
  border-top:1px solid #b0bec7;
}
#newsbottom{
  border-top:1px solid #fff;
}
#marketplace hr{
  border-top:1px solid #dce3e9;
  color:#dce3e9;
}
#pa{
  border-color:#afbdc6 #556b78 #556b78 #afbdc6;
  background-position:0 -2700px;
}
#pabd{
  border:1px solid #c9d7e2;
  border-width:0 1px 1px 0;
}
#patabs ul.patabs li div{
  background:#9dadc4;
}
#patabs ul.patabs li h4{
  background:#6b7fa0;
}
#patabs ul.patabs li a{
  border:1px solid #c9d6de;
  border-color:#aec0ce #3d5360 #3d5360 #aec0ce;
  background:#fff;
}
#patabs ul.patabs li.tab-on a, #patabs .papreviewdiv{
  border-color:#566c7a #c2d0d9 #c2d0d9 #c2d0d9;
  border-width:1px 1px 0 1px;
  /* background:#fff url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/pa-preview-shadow.gif) repeat-x; */
  background:#fff url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/fp/img/pa-preview-shadow.gif) repeat-x;
}
#patabs ul.patabs li.tab-on div{
  background:#fff;
}
#patabs ul.patabs li.first a{
  border-left-width:1px;
}
#patabs ul.patabs li.last a{
  border-right-width:1px;
}
#patabs .papreviewdiv{
  border:1px solid #c4cfd5;
  border-top-color:#566c7a;
}
#footer{
  color:#16387c;
}
#footer li{
  border-right:1px solid #b0bec7;
}
#copyright{
  color:#666;
}
.feedback {
  border-right:1px solid #b0bec7;
}
#eyebrow #shpd a{text-decoration:none; display:inline; float:none;}
.shdw{-moz-border-radius:4px;background:#ccc;z-index:1000;position:absolute;top:2em;left:1.5em;}
#shpd .bd{border:1px solid #4333BC;-moz-border-radius:4px;width:360px;background:#fff;position:relative;top:-2px;left:-2px;z-index:1001;color:#333;}
#pnt{position:absolute;top:-6px;left:30%;width:11px;height:6px;font-size:0px;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/shpa1.gif);}
#shpd .shp{width:40px;height:37px;font-size:0px;line-height:0px;top:10px;left:10px;display:block;position:absolute;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/ydrag.gif);}
.shp strong{display:none;}
#shpd ol{margin:9px 9px 9px 60px;padding:0 0 0 1.5em;list-style:decimal;}
#shpd li{padding:0;}
#shpd p{border-top:1px solid #ccc; font-family:verdana !important; margin:0 9px 9px;text-align:center;}
      #mastheadbd .top{
  display:block;
  position:relative;
  left:-1px;
  margin-right:-2px;
  height:4px;
  font-size:0;
  background:#e2eaed url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/fp/grd-1px.gif) repeat-x;
}
      body{
  text-align:center;
  color:#333;
  direction:ltr;
}
body,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dt,dd,p,form,fieldset,legend,input,img{margin:0;padding:0;}
img,fieldset{border:0;}
ul,ol{list-style:none;}
legend{height:0;font-size:0;}
label{cursor:pointer;cursor:hand;}
cite{font:normal 85% verdana;}
em{font-style:normal;}
cite span{font-weight:bold;}
a{color:#16387c;}
a:link,a:visited{text-decoration:none;}
a:hover{text-decoration:underline;}
.on a:hover{text-decoration:none;}
.a11y,legend{position:absolute;left:-5000px;width:100px;} /* for accessibility - hide for standard viewing */
u{
  text-decoration:none;
}
ol:after, ul:after, 
  .md:after, .md-sub:after, .hd:after, .bd:after, .ft:after, .fixfloat:after, 
  #colcx:after, #rightcx:after, #eyebrow:after, #masthead:after, #search:after, #tabs:after, #sbox:after, #doors:after, #patabs:after, #patop:after, #trough-overlay-bd div:after, #newsft:after, #newsbottom:after{ /* this gives a container that has floated child elements layout (non-IE) */
    content:".";
    display:block;
    font-size:0px;   /* The px IS NEEDED on this line and the line below for certain browsers */
    line-height:0px;
    height:0;
    clear:both;
    visibility:hidden;
}
ol, ul, .md, .md-sub, .hd, .bd, .ft, .fixfloat, #colcx, #rightcx, #eyebrow, #masthead, #search, #tabs, #sbox, #doors, #patabs, #patop, #newsft, #newsbottom{zoom:1;_height:1px;} /* this gives a container that has floated child elements layout (IE) */
.iemw{ /* IE Min-Width */
  display:none; /* hide this for most browsers */
  
    width:950px;
  
  font-size:0px;
  line-height:0px;
  height:0px;
  *display:block; /* only show for IE */
}
.submit,.s2{
  padding:2px 5px;
  font:bold 77% verdana;
  overflow:visible;
  color:#000;
  background:#ddd;
  cursor:pointer;
  cursor:hand;
}
.inputtext{
  border:1px solid #f0f0f0;
  border-color:#7c7c7c #cecece #c3c3c3 #7c7c7c;
  /* background:#fff url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/sbox-bg.gif) no-repeat; */
  background:#fff url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/fp/img/sbox-bg.gif) no-repeat;
}
.more, .bullet, .audio, .video, .slideshow, .search, #minimantle li{
  font:normal 77% verdana;
  padding:2px 0 2px 18px;
}
#page .more{background:none;padding:2px 0 2px 5px;font-weight:bold;}
.plain{padding:2px 0;}
.bullet{background-position:-7px 1px;padding-left:9px;}
.video{background-position:-3px -50px;}
.audio{background-position:-3px -100px;}
.slideshow{background-position:-3px -151px;}
.search{background-position:-3px -200px;}
.btn-more{ /* Blue button, which is no longer a button */
  position:absolute;
  bottom:5px;
  right:10px;
  font:bold 77% verdana;
  white-space:nowrap;
}
.btn-more-2{ /* Yellow button */
  padding:1px 5px 2px;
  *padding:1px 5px 0;
  font:bold 100% arial;
  color:#000;
  white-space:nowrap;
  border:1px solid #999b9a;
  background-color:#ce9200;
  background-position:0 -450px;
}
.alert{
  font:normal 77% verdana;
  color:#f00;
}
a.norgie{
  float:left;
  width:19px;
  height:20px;
  margin:auto;
}
a.mover{
  float:right;
  margin:0 4px;
  width:19px;
  height:20px;
  display:none; /* for bucket 1 */
}
.bd span,.ft span{display:none;}
.bd .current,.ft .current,.current span{display:block;}
.md{ /* module */
  position:relative;
  margin:0 0 10px;
}
.hd{ /* header */
  position:relative;
  margin:-1px -1px 0;
}
.hd h2{
  position:relative;
  font:bold 100% arial;
  padding:1px 11px;
  border-bottom:1px solid #fff;
}
.tabs{
  padding:0;
}
.tabs .hd h2{
  left:25px;
  top:-2px;
}
.bd{ /* body */
  padding:5px 10px 10px;
}
.ft{ /* footer */
  padding:9px;
}
.ad{ /* advertisement */
  margin:0 0 10px;
}
.hide .bd,.hide .ft{display:none;}
.hd ul{
  position:relative;
  width:100%;
  border-bottom:1px solid #fff;
}
.hd ul li{
  position:relative;
  float:left;
}
.hd li.last{
  float:right;
    _margin-right:-2px;
  }
.hd li em{
  position:relative;
  display:block;
    width:99%;
  _width:99.5%;
  min-height:14px; 
  _height:14px;
    padding:2px 0 0px;
  margin-right:-1px;
  border-right:0;
}
.hd li a{
  display:block;
  font:normal 92% arial;
  outline:none;
  text-align:center;
  white-space:nowrap;
  z-index:50;
  padding:1px;
  margin-top:-1px;
}
.hd li.on{
  z-index:60;
  margin-bottom:-1px;
}
.hd li .pipe{
  display:block;
  position:absolute;
  top:1px;
  right:-1px;
  height:1.15em;
  width:1px;
  _width:2px;
}
.hd li.on .pipe{
  visibility:hidden;
}
.hd li.on em{
  padding-bottom:1px;
  margin:-1px 0 -1px;
  *margin-bottom:-2px;
}
.hd li.on a{
  font-weight:bold;
  z-index:60;
  border:0;
  padding:1px;
}
.hd li.sparkle{
  z-index:70;
}
div.hd li.sparkle em{
  left:-1px;
  padding:1px 0 0;
  margin:-1px -1px -2px 0;
}
div.hd li.sparkle a{
  font-weight:bold;
  padding:1px;
  z-index:70;
}
.hd li.off .pipe,
.hd li.on .pipe,
.hd li.last .pipe,
.hd li.sparkle .pipe{
  visibility:hidden;
}
#news .hd ul li{width:33.3%;*width:33.2%;}
#today .hd ul li{width:25%;*width:24.9%;}
.md-sub h3{
  font-size:100%;
}
#client{
  position:absolute;
  visibility:hidden;
}
#page{
  margin:0 auto;
  border-bottom:1px solid transparent;
  *border:0;
  
    position:relative;
    min-width:950px;
    width:70em;
    *width:71.3em;
  
  text-align:left;
}
  #colcx{
    position:relative;
    width:950px;
  }
  #left{
    float:left;
    width:170px;
    margin:0 0 10px 0;
  }
  #rightcx{
    float:right;
    width:780px;
  }
  .colpadding{
    margin-left:10px;
  }
  #middle{
    float:left;
    width:420px;
  }
#right{
  float:left;
  
  width: 360px;
  
  *margin-right:-200px; /* to prevent IE from wrapping the third column */
}
  #masthead{
    min-width:950px;
    *margin-right:1px;
  }
#loading{
  display:none;
  position:absolute;
  top:2px;
  right:2px;
  z-index:999;
}
#minimantle{
  margin:10px 0;
}
#minimantle .md-sub{
  padding:5px 0 10px 10px;
}
#smallbiz.md-sub{
  padding-bottom:5px;
}
#minimantle h2{
  font:bold 100% arial;
  margin-bottom:4px;
}
#minimantle li{
  font:bold 85% verdana;
  padding:1px 0 1px 8px;
  *padding:0 0 0 8px;
  voice-family:"\"}\"";
  voice-family:inherit;
  property:value;
  *padding:0 0 0 8px;
}
#minimantle li a{
  margin-left:-15px;
  voice-family:"\"}\"";
  voice-family:inherit;
  property:value;
  margin-left:0;
}
#mantlecx{
  margin:0 0 10px;
}
#xyz{
  width:0;
  height:0;
  
}
div.more-link { text-align: right; padding:4px 10px 3px; font: bold 75% verdana; }
      
      #masthead{
  z-index:90;
  position:relative;
  p\osition:static;
}
#mastheadbd .top{
  display:block;
  position:relative;
  left:-1px;
  margin-right:-2px;
  height:4px;
  font-size:0;
}
#mastheadbd .mh_footer{
  position:relative;
    margin-top:-30px;
  *margin-top:-25px;
  _margin-top:-30px;
    height:35px;
  clear:both;
  z-index:99;
}
#mastheadbd{
  min-height:106px;
  height:7.85em;
  margin:0 auto 10px;
}
      #masthead h1{
  float:left;
  
    margin:17px 0 0 20px;
    *margin-left:8px;
  
  *width:219px;
  height:50px;
  *height:45px;
}
      #searchother{
  *display:none;
  position:absolute;
  left:0;
  height:100%;
  max-height:120px;
  min-height:85px;
  width:100%;
}
#searchwrapper{
  position:absolute;
  position:relative;
  
    top:auto;  
  
  
    
    left:0;
    margin-left:260px;
    
    width:70%;
    _width:90%;
  
  
    height:6.1em;
  
  padding:0 0 10px;
}
#searchIE{
  /*display:none;*/
  *display:block;
  position:absolute;
  width:100%;
  height:113%;
  _height:92%;
  voice-family:"\"}\"";
  voice-family:inherit;
  property:value;
  
    _height:90%; 
  
  filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://us.i1.yimg.com/us.yimg.com/i/ww/thm/1/search_1.1.png', sizingMethod='scale');
}
#search{
  position:relative;
  z-index:10;
  
    top:15px;
  
  min-height:89px;
  _height:89px;
  overflow:hidden;
}
#vsearchtabs{
  position:relative;
  
    _display:inline;
    
      left:88px;
    
  
	margin:0 0 5px;
  }
#vsearchtabs li{
	display:inline;
  border-right:1px solid #b0bec7;
}
#vsearchtabs li.last,#vsearchtabs li.last a{
  border:0;
}
#vsearchtabs li a{
	padding:0 7px;
	font-size:92%;
  border-right:1px solid #fff;
  cursor:pointer;
}
#vsearchtabs li.on a{
	color:#333;
	font-weight:bold;
}
#sbox{
	clear:both;
  margin:0 0 1px;
}
#sbox label{
	float:left;
}
#searchlabel{
  
  	position:relative;
    
      margin:2px 8px 0 20px;
    
  	font:bold 122% arial;
  	color:#333;
  
}
#p,#scsz{
	width:100%;
	padding:3px 0 3px 3px;
  _height:24px;
}
#searchbox .plong{
	width:100%;
  
}
#searchbtn{
 
}
#search .btn-more-2 {
  float:left;
  position:relative;
  
      margin-left:-1px;
    padding:2px 5px;
    *padding:1px;
  
  	min-width:80px;
        padding:2px 10px;
        _padding:2px 10px 0;
  	/*width:7em;*/
    /*_width:100px;*/
  
  *overflow:visible;
  cursor:pointer;
  z-index:50;
  text-align:center;
  text-align:center;
}
#searchbox{
	float:left;
  
    
      width:52%;
      _width:49%;
    
  
	text-align:left;
	margin-bottom:0;
	*margin-top:-1px;
}
#searchbox .plabel,#searchbox .cszlabel2{
  
    width:44.5%;
  
}
#searchbox .cszlabel1{
	text-align:center;
	font-weight:bold;
	padding-top:5px;
	width:8.4%;
	*width:7.0%;
}
#searchbox span{
	font-size:77%;
}
#sboxfooter{
  
  float:left;
  
	position:relative;
  
    left:8.5em;
  	
      width:62.5%;
  	
  
  padding-bottom:6px;
	font:normal 77% verdana;
  
    text-align:center;
  
  white-space:nowrap;
  zoom:1;
}
#sboxfooter img{
  margin:0 5px -5px 0;
}
#sboxfooter a.answers{
	font-weight:bold;
}
      #doors{
  position:absolute;
  left:20px;
  *left:10px;
  bottom:4px;
  *bottom:3px;
  border:0;
  background:0;
  }
#doors ul{
  border:0;
}
#doors li{
  float:left;
  margin:0 0 0 5px;
}
#doors li strong{
  display:block;
  position:relative;
  top:-1px;
  left:-1px;
    min-width:82px;
  *width:5.5em;
  _width:3em;
  }
#doors li a{
  position:relative;
    min-width:60px;
  _width:4.8em;
    margin:0;
  padding:1px 6px;
  font:normal 100% arial;
}
      
  #trough{
    position:relative;
    overflow:hidden;
    *overflow:visible;
  }
  #trough .bd{
    padding:0;
  }
  #trough span{
    display:block;
  }
  
    #trough span{
  
    position:relative;
    margin:-1px -1px 0 0;
    padding:5px;
  }
  #trough .btn-more-2{
    display:block;
    position:static;
    padding:1px 2px;
    font-size:92%;
    text-align:center;
    white-space:nowrap;
  }
  #trough li{
    padding:3px 0 3px 5px;
    p\adding:3px 0;
    margin-left:-15px;
    ma\rgin-left:0;
  }
  #trough li a{
    display:block;
    *display:inline;
    min-height:12px;
    padding:3px 0 3px 25px;
    margin:-1px 0 -2px;
        font:bold 84% verdana;
    voice-family:"\"}\"";
    voice-family:inherit;
    property:value;
    _margin-left:0;
  }
  #trough li.adaptive{
    padding:3px 0 3px 5px;
    *padding:2px 0 2px 5px;
  }
  #trough li em{
    font:bold 122% arial;
  }
  #trough li em a{        
        padding:1px 0 1px 25px; 
      }   
span#edityservicescx{
  display:block;
  position:relative;
  padding:1px;
  text-align:right;
  margin-right:-1px;
}
#edityservices{
  display:block;
  width:43px;
  height:11px;
  font-size:0px;
  text-indent:-5000px;
  margin-left:auto;
}
#edityservices:hover{
  text-decoration:none;
}
.t_autos a {
  /* here goes the comment */
  background-position:400px -120px !important;
}
.t_entertainment a {
  background-position:0 0 !important;
}
.t_finance a {
  background-position:0 -757px !important;
}
.t_games a {
  background-position:0 -1599px !important;
}
.t_geocities a {
  background-position:0 -199px !important;
}
.t_astrology a {
  background-position:0 -1357px !important;
}
.t_personals a {
  background-position:0 -40px !important;
}
.t_photos a {
  background-position:0 -839px !important;
}
.t_sports a {
  background-position:0 -700px !important;
}
.t_travel a {
  background-position:0 -78px !important;
}
.t_groups a {
  background-position:0 -1399px !important;
}
.t_news a {
  background-position:0 -900px !important;
}
.t_mail a {
  background-position:0 -950px !important;
}
.t_360 a {
  background-position:0 -1000px !important;
}
.t_myweb a {
  background-position:0 -1050px !important;
}
.t_my a {
  background-position:0 -1280px !important;
}
.t_chat a {
  background-position:0 -1200px !important;
}
.t_messenger a {
  background-position:0 -1250px !important;
}
.t_calender a {
  background-position:0 -1300px !important;
}
.t_address a {
  background-position:0 -1350px !important;
}
.t_notepad a {
  background-position:0 -1400px !important;
}
.t_weather a {
  background-position:0 -1500px !important;
}
.t_fantasysports a {
  background-position:0 -959px !important;
}
.t_mobile a {
  background-position:0 -1600px !important;
}
.t_movies a {
  background-position:0 -560px !important;
}
.t_local a {
  background-position:0 -1700px !important;
}
.t_people a {
  background-position:0 -1850px !important;
}
.t_answers a {
  background-position:-400px -118px !important;
}
.t_alerts a {
  background-position:0 -1950px !important;
}
.t_briefcase a {
  background-position:0 -2000px !important;
}
.t_health a {
  background-position:0 -2050px !important;
}
.t_buzz a {
  background-position:0 -2100px !important;
}
.t_peoplesearch a {
  background-position:0 -2150px !important;
}
.t_classifieds a {
  background-position:-400px -279px !important;
}
.t_education a {
  background-position:0 -279px !important;
}
.t_greetings a {
  background-position:0 -679px !important;
}
.t_tickets a {
  background-position:0 -2650px !important;
}
.t_search a {
  background-position:0 -2700px !important;
}
.t_auctions a {
  background-position:0 -1159px !important;
}
.t_international a {
  background-position:0 -2800px !important;
}
.t_tech a {
  background-position:0 -2850px !important;
}
.t_video a {
  background-position:0 -999px !important;
}
      
        #pagesettingscx{
  position:absolute;
  right:10px;
  bottom:3px;
  zoom:1;
  z-index:90;
}
a#editpage{
  font:normal 77% verdana;
  padding-right:15px;
  zoom:1;
  display:block; 
  *display:inline;
  height:12px;
}
#pagesettings{
  display:none;
  position:absolute;
  top:100%;
  right:-3px;
  min-width:140px;
  width:11.3em;
  margin:2px 0 0;
  background:#acc0c9;
  z-index:99;
}
#pagesettings .bd{
  position:relative;
  top:-1px;
  left:-1px;
  padding:0;
  background:#fffac6;
  border:1px solid #000;
  border-color:#cad5db #6b8792 #6b8792 #cad5db;
}
#pagesettings .bd span{
  display:block;
  padding:15px 5px;
  font:bold 77% verdana;
  white-space:nowrap;
  border:1px solid #fff;
  border-width:0 1px 1px 0;
}
#pagesettings h4{
  float:left;
  _margin-right:-2px;
  font:bold 100% verdana;
}
#pagesettings ol{
  border:1px solid transparent;
  margin:-1px;
  *border:0;
  *margin:0;
}
#pagesettings ol li{
  float:left;
  display:inline;
  margin-left:6px;
}
#themes li a{
  display:block;
  width:13px;
  height:12px;
  text-indent:-5000px;
  font-size:0px;
  background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t6/theme-icons.gif) no-repeat;
  cursor:pointer;
  cursor:hand;
  zoom:1;
}
#themes li a:hover{
  text-decoration:none;
}
#themes #t1{background-position:0 0;}
#themes #t2{background-position:-19px 0;}
#themes #t3{background-position:-38px 0;}
#themes #t4{background-position:-57px 0;}
#themes #t5{background-position:-75px 0;}
#themes #t1.on{background-position:0 -15px;}
#themes #t2.on{background-position:-19px -15px;}
#themes #t3.on{background-position:-38px -15px;}
#themes #t4.on{background-position:-57px -15px;}
#themes #t5.on{background-position:-75px -15px;}
#pagesettingscx #sizetogglelink{
  display:block;
  margin-top:10px;
  padding-top:8px;
  border-top:1px solid #cbd4db;
  zoom:1;
}
      
      
      
      
#today{
  min-height:206px;
  _height:206px;
}
#today h3{
  font:bold 122% arial;
  color:#16387c;
}
#today h3 a{
  font:bold 100% arial;
}
#today h3 a.video{
  padding-left:18px;
  background-position:-3px -47px;
}
#today p{
  margin:5px 0;
}
#today .bd{
  position:relative;
  /*
  padding:6px 0 4px 10px;
  _padding:7px 0 5px 10px;
  */
/*
  min-height:114px;
  _height:116px;
*/
  background:#fff;
}
#today .bd img{
  float:left;
  margin-right:10px;
  width:156px;
  height:117px;
  padding:1px;
  border:1px solid #9dafbd;
  border-color:#9eb1c0 #677787 #677787 #9eb1c0;
}
#today .bd img.editor{
  width:auto;
  height:auto;
}
#today .bd span.current span{
  float:left;
  /*width:56.5%;*/
  margin-bottom:-6px;
  overflow:hidden;
}
#today .bd h3,#today .bd p,#today .bd ul{
  margin:0 0 6px;
}
#today .bd ol,#today .bd ul,#today .bd ul li{
  float:left;
}
#today .bd ul{
  float:left;
}
#today .bd ul li a{
  margin-right:10px;
  white-space:nowrap;
  zoom:1;
}
#today .bd ul.inline li a{
  margin-right:3px;
  font:normal 77% verdana;
}
#today .bd ul.inline{
  margin-left:-10px;
}
#today .bd ul.inline li{
  display:inline;
  float:none;
  margin:-2px 0 -2px 4px;
  padding-left:5px;
  border-left:1px solid #B0BEC7;
}
#today .bd ol li a{
  display:block;
  *display:inline;
  zoom:1;
}
#today .ft{
  position:relative;
/*
  padding:0 5px 17px;
  _padding:0 5px 18px;
*/
  padding-top:0;
  background:#fff;
}
#today .ft ul{
  float:left;
  *float:none;
  padding:2px 0 0;
  width:100%;
}
#today .ft li{
  position:relative;
  float:left;
  width:46%;
  margin-right:2%;
  min-height:30px;
  _height:30px;
  border:1px solid #fff;
}
#today .ft li img{
  width:29px;
  height:21px;
  float:left;
  margin:0 5px 0 2px;
  padding:1px;
  border:1px solid #9eb1c0;
  border-color:#9eb1c0 #677787 #677787 #9eb1c0;
}
#today .ft li a{
  display:block;
  float:left;
  padding:2px 0;
  margin:1px;
  min-height:22px;
  _height:22px;
  font:normal 77% verdana;
}
#today .ft li a .editor{
  position:absolute;
  left:0;
}
#today .ft li.on {
  /* background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t5/grd-1px.gif) repeat-x; */
  background:url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/fp/img/grd-1px.gif) repeat-x;
  background-position:0 -296px;
}
#today .ft li.on a {
  background:none;
}
#today .ft li a+a {
  width: 130px;
}
.photo, .showtime {
  float:left;
  font:normal 77% verdana;
  padding:1px 0 2px 20px;
  margin-top: 2px;
  background-position:1px -3px;
}
div.more-link { padding-top:2px; padding-bottom:2px; _padding-bottom:0; }
.photo {background:url(https://web.archive.org/web/20061106010008im_/http://sg.i1.yimg.com/us.yimg.com/i/nt/ic/ut/bsc/photo16_1.gif) no-repeat;}
.showtime {background:url(https://web.archive.org/web/20061106010008im_/http://sg.i1.yimg.com/us.yimg.com/i/nt/ic/ut/bsc/time16_1.gif) no-repeat;}
.hotel, .flight {font:normal 77% verdana;padding:2px 0 2px 20px;background-position:1px -3px;}
.hotel{background:url(https://web.archive.org/web/20061106010008im_/http://sg.i1.yimg.com/us.yimg.com/i/nt/ic/ut/bsc/hotel16_1.gif) no-repeat;}
.flight{background:url(https://web.archive.org/web/20061106010008im_/http://sg.i1.yimg.com/us.yimg.com/i/nt/ic/ut/bsc/flights16_1.gif) no-repeat;}
#todaybd ul.tvrtip { float:left;padding-top:5px;_padding-top:0;clear:both;padding-bottom:0;margin-bottom:0; }
      #news{
  background:#f5f7f6;
  /*
  min-height:207px;
  _height:207px;
  */
}
#newsbd{
  position:relative;
  padding:5px 10px 0;
  background:#fff;
  /*
  min-height:184px
  _height:184px;
  */
}
div#newsbd.bd {
  padding:3px 10px 0;
}
#newstop{
  position:relative;
  margin:0 -10px 0 0;
  min-height:150px;
  _height:147px;
}
#news.afterhours #newstop{
  min-height:142px;
  _height:142px;
}
#news .single-panel{
  padding:5px 0 8px;
    min-height:134px;
    *min-height:134px;
  _height:134px;
}
#newstop i {
  color:#dadada;
}
#newsft{
  position:relative;
  margin:0 -10px;
  font:normal 77% verdana;
  color:#333;
}
#newsbottom{
  /* padding:4px 0 4px 10px; */
}
#news.afterhours #newsbottom{
  padding:4px 0 4px 10px;
  _padding-bottom:6px;
}
#finance-data{
  float:left;
}
#news-sponsor{
  float:left;
  display:inline;
  min-height:19px;
  _height:21px;
  margin-left:10px;
  padding-top:3px;
  font-size:92%;
  color:#333;
}
#news.afterhours #news-sponsor{
  position:relative;
  top:1px;
  _top:0;
  min-height:25px;
  height:auto;
  margin:-12px 0 0 10px;
  _margin-top:-10px;
  white-space:nowrap;
}
#news-sponsor img{
  float:left;
  display:block;
  margin:1px 0 0;
}
#news.afterhours #news-sponsor img{
  display:inline;
  position:relative;
  top:3px;
  *top:4px;
}
#markets span, #markets ul, #markets li, #quotes fieldset{
  display:inline;
  font-size:95%;
}
#news.afterhours #markets{
  margin:0;
}
#markets h3{
  font:normal 100% verdana;
  display:inline;
}
#markets {
  _padding-top:1px;
}
#markets li{
  white-space:nowrap;
    margin-left:5px;
  }
#quotes a{
  color:#333;
}
#quotes{
  margin-top:5px;
}
#quotes a,#s{
  margin-right:5px;
}
input#s{
  font-size:107%;
  padding:1px;
}
#quotes .submit{
  font-size:100%;
  padding:0 3px;
}
#newsbd li a cite{
  display:block;
  font:normal 77% verdana;
  color:#333;
}
#newsbd li a:hover cite{
  text-decoration:none;
}
#markets .up{color:#359c00;}
#markets .down{color:#c00;}
#videonewsct ul{
  margin-left:-5px;
}
#videonewsct li{
  float:left;
  margin:0 -1px 10px 2px;
  padding:0 0 0 1px;
  width:49%;
}
#videonewsct li img{
  float:left;
  margin-right:5px;
  padding:1px;
  border:1px solid #9dafbd;
  border-color:#9eb1c0 #677787 #677787 #9eb1c0;
}
#news ul.btn-more{
  position:absolute;
  bottom:5px;
  right:5px;
  margin:0; 
  padding:0 0 1px;
  color:#16387c;
}
#news ul.btn-more li{
  display:inline; 
  margin-right:5px;
  padding-right:5px;
  line-height:1em;
  border-right:1px solid #94a1c3;
}
#news ul.btn-more li a{
  line-height:1em;
}
#news ul.btn-more li.first{
  border:0;
  padding:0;
  font-weight:normal;
}
#news ul.btn-more li.last{
  border:0;
  margin:0;
  padding:0;
}
div.more-link { padding-top:2px; padding-bottom:2px; _padding-bottom:0; }
      #marketplace .bd{
  min-height:125px;
  _height:125px;
}
#marketplace table{
  margin-bottom:-5px;
}
#marketplace hr{
  display:block;
  margin:4px 0 3px;
  *margin:-3px 0;
}
      
  #patop{
    position:relative;
    padding:8px 9px 9px;
  }
  #patop .so{
    padding:2px 0;
  }
  #patop .so a{
    font-weight:bold;
  }
  #reg li{
   _margin-left:-15px;
   _ma\rgin:0;
  }
  #reg h2{
    font:normal 122% arial;
  }
  #reg h2 a{
    font-weight:bold;
  }
  #signup,#signout{
    position:absolute;
    top:2px;
    right:0;
    t\op:10px;
    r\ight:10px;
  }
  #signout{
    top:11px;
    right:10px;
    font:normal 77% verdana;
  }
#patabs{
  padding:0 2px 2px 5px;
  
    margin-top:-5px;
  
  width:348px;
}
#patabs ul.patabs li{
  color:#8899a9;
  float:left;
  
  /*width:33.3%;*/
  
  width:32.8%;
  _width:33%;
}
#patabs ul.patabs{
  position:relative;
  z-index:10;
}
#patabs ul.patabs li div{
  display:block;
  position:relative;
  z-index:2;
  margin:4px 3px 0;
}
#patabs ul.patabs li.first div{
  margin-left:2px;
}
#patabs ul.patabs li h4,#patabs ul.patabs li a{
  display:block;
  position:relative;
  z-index:2;
  top:-1px;
  left:-1px;
  font:bold 92% verdana;
}
#patabs ul.patabs li a{
  z-index:20;
  padding:1px 0;
  *padding:0;
}
#patabs ul.patabs li.tab-on a{
  margin:-1px -1px -3px;
  top:0;
  left:0;
  *background-position:0 1px;
}
#patabs li a.details b{
  display:block;
    margin-top:-3px;
   *margin-bottom:-1px;
   padding-right:2px;
  font-size:92%;
  font-weight:normal;
}
#patabs li.tab-on .icon{
  padding-bottom:17px;
}
#patabs li .details .icon{
    padding:3px 0 4px 40px;
    *padding-bottom:5px;
}
#patabs li.tab-on .details .icon{
    padding:3px 0 12px 40px;
  *padding-bottom:13px;
  }
#patabs li .icon{
  display:block;
  z-index:10;
  padding:8px 0 9px 40px;
  /* background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t7/pa-icons2.gif) 5px 3px no-repeat; */
  background:url(https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/fp/img/pa-icons2.gif) 5px 3px no-repeat;
}
#patabs .papreviewdiv{
  position:relative;
  z-index:1;
  visibility:hidden;
  
    margin-right:1px;
    *margin-right:0;
    _margin-right:1px;
  
}
#patabs .preview-on{
  visibility:visible;
  padding-top:4px;
  width:338px;
}
#patabs .papreviewdiv span{
  display:none;
  /*background:#fff;*/
}
#patabs .papreviewdiv span.current{
  padding:0 10px 0;
  _padding:0;
  display:block;
}
#patabs #messenger .icon{
  padding-left:31px;
  background-position:2px -497px;
}
#patabs #music .icon{
  background-position:5px -197px;
}
#patabs #answers .icon{
  padding-left:36px;
  background-position:5px -695px;
}
#patabs #weather .icon{
  background-position:5px -297px;
}
#patabs #traffic .icon{
  background-position:5px -397px;
}
#patabs #movies .icon{
  background-position:5px -597px;
}
#patabs #horoscope .icon{
  padding-left:29px;
  background-position:3px -797px;
}
#pa #weatherdisplay * {
  border:none;
  background:#fff;
  background-image:none;
  border:0;
}
      
         .nav a{position:absolute;z-index:90;top:40%;width:22px;height:18px;text-indent:-5000px;overflow:hidden;}
.nav a.back{left:3px;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/back.gif) no-repeat;}
.nav a.frwd{right:3px;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/next.gif) no-repeat;}
/// PA Messaging for Default and Errors
.pa-alert{text-align:center;color:#16387c;padding:0 20px;_padding:0;}
.pa-alert h3,.pa-alert ul{margin:5px auto 0;text-align:left;}
.pa-alert h3{_margin-left:20px;_padding-left:20px;}
.default{_margin-left:-20px;}
.default li{float:left;padding-left:20px;}
.default li.last{width:14em;padding-left:10px;margin-top:15px;}
.default li.last a{font-weight:bold;text-decoration:underline;margin-top:20px;}
.error ul{width:80%;margin-top:30px;}
.error li{float:none;margin:0;}
.error li.first{border:1px solid #c2d0d9;padding:5px 10px;text-align:center}
.error li.first a{text-decoration:underline;font-weight:bold;}
.error li.last{text-align:right;font:bold 77% verdana;}
.loading{margin-top:35px;text-align:center;color:#16387c;}
#pa .loading h3{font-size:122%;text-align:center;}
/// /PA Messaging for Default and Errors
.papreviewdiv .btn-more{bottom:3px;right:10px;z-index:1;}
.papreviewfooter .fleft{float:left;}
.papreviewfooter .fright{float:right;}
#mailpreview table{margin-bottom:1.2em; width:100%;border-collapse:collapse;font:normal 100% arial;margin-top:3px;table-layout:fixed; border-bottom:1px solid #ebeff2;}
#mailpreview table td{width:33%; height:152%;background:#fff;border-top:1px solid #ebeff2;white-space:nowrap;overflow:hidden;}
#mailpreview table td.left{padding-left:8px;}
#mailpreview table td.right{padding-left:18px;}
#mailpreview table td  a{float:left;white-space:nowrap;overflow:hidden;}
#mailpreview th{font:normal 85% verdana;}
#mailpreview .pamailfooter {position:absolute; bottom:5px; 
bottom:5px;
left:10px; right:10px; font:77% verdana; }
.pamailfooter {font-size:85%;}
.pamailfooter  .fleft{float:left;}
.pamailfooter  .fright{float:right;}
#mailpreview .hdr{color:#333;}
#mailpreview .seen1{color:#666;}
#mailpreview .btn-more{font-size:85%;}
#mailpreview .hdr th.left{padding-left:8px;}
#mailpreview .hdr th.right{padding-left:18px;}
#mailpreview .seen0{color:#16387c;font-weight:bold;}
#musicpreview,#horoscopepreview{padding-bottom:1em;_padding-bottom:.7em;}
#musicpreview{text-align:center;margin:0 auto;}
#musicpreview h3{font:bold 100% arial;text-align:left;margin:3px 0 3px 10px;color:#16387c;}
#musicpreview h3 em{font-weight:normal;}
.station{position:relative;left:1px;width:275px;margin:5px auto 10px;text-align:left;background:#F8F9FD;}
#horoscopepreview{text-align:center;margin:0 auto;height:7.6em;}
#horoscopepreview h3{font-size:100%; padding-left:5px; text-align:left;}
#horoscopepreview .station{background:#fff;}
.station-bd{min-height:70px;*height:70px;padding-right:10px;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/music-mask-1.gif) 100% 0 no-repeat;}
.station-hd,.station-ft{position:absolute;left:0;font-size:0px;width:275px;height:5px;}
.station-hd{top:0;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/music-mask-0.gif) no-repeat;}
.station-ft{bottom:-1px;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/music-mask-2.gif) no-repeat;}
.station-name{float:left;min-height:15px;*height:15px;width:170px;font:bold 100% arial;*font-size:85%;margin:2px 0 0;}
.photo-link{float:left;margin:0 5px 0 0;border-right:1px solid #353535;width:70px;height:70px;text-align:center;}
#horoscopepreview .photo-link{background:#F1F5F6;border:0;}
.station-photo{width:70px;height:70px;}
#horoscopepreview .station-photo{width:35px;height:35px;margin-top:15px;}
#horoscopepreview .papreviewfooter{position:absolute;bottom:5px;left:10px;right:10px;bottom:5px;font:77% verdana;}
.artists{float:left;width:185px;min-height:28px;*height:28px;font:normal 77% verdana;color:#666;}
#horoscopepreview .artists{padding-bottom:5px;}
.artists a{display:block;overflow:hidden;color:#666;}
.listen{float:right;width:45px;height:15px;margin:5px -3px 5px 0;text-indent:-5000px;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/music_button.gif) no-repeat;display:none; *display:inline;}
.papreviewheader {
	margin-top:4px;
	padding:0 10px;
	height:1.5em;
	clear:both;
	overflow: hidden;
}
.papreviewheader .fleft {float:left;font-size:100%;font-weight:bold;}
.papreviewheader .fright {float:right;font:85% verdana;}
.papreviewheader .fright a {background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t1/ulm-norgie-dn.gif) no-repeat left 50%; padding-left:15px;}
#moviespreview h3{
  font:bold 100% arial;
  text-align:left;
  margin:3px 0 3px 10px;
  color:#16387c;
}
#page #moviespreview span{display:block;}
#moviespreview {
  padding-bottom:1.9em;
}
#moviespreview li img{
  position:relative;
  z-index:5;
  width:85px;
  height:55px;
}
ol.movies{
  position:relative;
  margin:5px 32px 0;
  z-index:10;
}
.movies a span, .movies a cite{
  display:block;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  padding-top:55px;
  background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/movies-mask-shadow.gif) no-repeat top center;
  text-align:center;
  z-index:10;
  font:normal 85% verdana;
}
.movies li{
  float:left;
  position:relative;
  width:33%;
  text-align:center;
}
.movies li .poster{
display:none;
}
.movies .details-show .details{
  display:block;
}
.movies li .details{
  display:none;
  position:absolute;
  top:-3px;
  left:1px;
  z-index:20;
  min-width:88px;
  _width:88px;
  min-height:3.75em;
  background:#fcf8d2 url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/movies-ol-tr.gif) top right no-repeat;
}
.details .mvbd{
  margin:0 6px 0 0;
  padding-left:3px;
  min-height:70px;
  _height:70px;
  font:normal 85% verdana;
  border:1px solid #c2be7f;
  border-width:1px 0 0 1px;
}
.boxoffice .details .mvbd{
  min-height:85px;
  _height:85px;
}
#moviespreview .details ul{margin:0;}
.details h5{font:bold 100% arial;}
.details .rate{font-weight:bold;}
.details li{display:block;white-space:nowrap;float:none;}
.details li em{font:bold 100% arial;color:#f46924;}
.details .tl,.details .bl,.details .br{position:absolute;right:0;bottom:-6px;width:100%;height:6px;background:#fff url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/movies-ol-br.gif) bottom right no-repeat;}
.details .tl{bottom:auto;top:-1px;left:0;width:2px;height:2px;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/movies-ol-tl.gif) no-repeat;}
.details .bl{right:auto;left:0;bottom:0;width:4px;font-size:0px;background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/movies-ol-bl.gif) bottom left no-repeat;}
#pamssgr{
  position:relative;
  padding:1px 5px 2px;
}
#pamssgr span#panav{
  display:block;
  position:absolute;
  top:1px;
  right:5px;
  white-space:nowrap;
}
#pamssgr .hdr{
  color:#16387c;
}
#msgrcount{
  display:inline;
  float:none;
}
#panav a{
  font:bold 77% verdana;
  color:#16387c;
}
#panavprev{
  padding-left:10px;
  background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/pointer-blue-left.gif) center left no-repeat;
}
#panavnext{
  padding-right:10px;
  background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/pointer-blue-right.gif) center right no-repeat;
}
#pamssgr ol{
  display:none;
}
#pamssgr ol li{
  margin:3px 0 0;
}
#pamssgr .current{
  display:block;
  padding-bottom:20px;
  *padding:auto;
}
#pamssgr .blast{
  width:16px;
  height:16px;
  zoom:1;
}
#pamssgr li a.on{
  background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/us/psg/sr/gr/s1/new_blast.gif) 0 0 no-repeat;
}
#pamssgr .buddy{
  margin-left:5px;
  padding-left:18px;
  font-weight:bold;
  background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/us/msg/6/gr/online_12px_1.gif) 0 2px no-repeat;
}
#pamssgr .buddyop{
	color:#16387c;
}
	
#pamssgr .ft{
  position:absolute;
  bottom:5px;
  padding:0 5px;
  *padding:0;
  margin:0;
  font:bold 77% verdana;
}
#pamssgr .three60{
  float:left;
  font-weight:normal;
}
#pamssgr .psmssgrlnch{
  float:right;
  _padding-right:10px;
}
#Ymsgr02{position:absolute; left:-1000px;}
#weatherpreview {xwidth:334px;min-height:110px;}
.papreviewheader {
	margin:0;
	padding:0 10px;
	height:1.4em;
	clear:both;
	overflow: hidden;
}
	.papreviewheader .fleft {float:left; font-size:100%; font-weight:bold; line-height:150%;}
	.papreviewheader .fleft a{line-height:150%;}
	.papreviewheader .fright {float:right; font:85% verdana; display:inline !important; }
	.papreviewheader .fright a {background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t1/ulm-norgie-dn.gif) no-repeat left 50%; padding-left:15px; line-height:170%;}
	.papreviewheader .fright a.up {background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t1/ulm-norgie-up.gif) no-repeat left 50%; padding-left:15px; line-height:170%;}
	#localfooter {height:1.2em; line-height:150%; background:url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/pa-preview-shadow.gif) repeat-x; xbackground-position-y:-1px; padding:0 10px; position:relative;}
	
#weatherpreview .forcast {position:relative; top:4px; clear:both; margin:1px 10px; margin-bottom:1.3em; font-size:92%; height:5em;}
#weatherpreview .forcast div {position:relative; float:left; width:48%; background:#f0f0f0 url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/weather_bg.png) no-repeat 100% 100%; }
#weatherpreview .tr, #weatherpreview .bl, #weatherpreview .tl {
	position:absolute;
	width:10px;
	height:10px;
	background:#F7FAFC url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/weather_bg.png) no-repeat right bottom;
}
#weatherpreview .tr{
	top:-3px;
	right:0;
	*right:-1px;
	background-position: right top;
}
#weatherpreview .tl{
	top:-4px;
	left:-4px;
	background-position: left top;
}
#weatherpreview .bl{
	bottom:0;
	left:-3px;
	background-position: left bottom;
}
	
#weatherpreview .forcast .tomorrow{float:right;}
#weatherpreview dl {margin:7px 0 5px 12px; min-height:60px; *height:60px;}
#weatherpreview dt {padding:0;margin:0;font-weight:bold; padding-left:40px;font-size:107%; }
#weatherpreview dd {padding:3px 0; margin:0; padding-left:40px; line-height:150%;font:92% verdana;}
#weatherpreview dd.info {font:92% verdana;}
#weatherpreview dd em{font-style:normal; font-weight:bold;}
#weatherpreview .high{color:#F46227; padding-right:4px;}
#weatherpreview .low {color:#00B2EB;padding-right:4px;}
#weatherpreview .info {display:inline;}
#weatherfooter{position:absolute;bottom:5px;
left:10px; right:10px; font:77% verdana;}
#weatherfooter .fleft{float:left;}
#weatherfooter .extended{float:right; font-weight:bold; text-align:right;}
#ulmformweather, #ulmformtraffic, #ulmformevents {margin:0;}
.ulmform {
	position:relative;
	padding: 9px;
	/*background: #ffc;*/
*height:auto;
	_height: 1%;
	/*border: 2px solid #95ADB7;*/ 
}
	form.nocookie { 
		margin: 10px 10px 0 !important;
		border: 3px solid #95ADB7; 
	}
	.nocookie {
		margin:9px;
		border:1px solid #95ADB7;
	}
	.ulmform fieldset {
		*position:relative;
		margin: 0;
		padding:0 0 0 59px;
		border: 0;
		background: url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t4/local_map.gif) no-repeat 10px 22px;
	}
	.ulmform fieldset.invalid {
		margin: -5px 0 -4px;
	}	
	#weatherpreview .ulmform fieldset {
		background: url(https://web.archive.org/web/20061106010008im_/http://us.i1.yimg.com/us.yimg.com/i/ww/t1/weather-form-icon.gif) no-repeat 9px 50%;
	}
	.ulmform input{
		margin:0 5px 0 0;
	}
	.ulmform .inputtext{
		padding:2px;
	}
	.ulmform label {
		margin:3px 0;
		display: block;
		font:92% arial;
	}
	.ulmform fieldset.cl{
		padding-top:4px;
		padding-bottom:5px;
	}
	.ulmform #csz {
		width:13em;
		*width:12.5em;
		_width:13em;
		padding:2px;
		margin-left:0;
	}
	#ulmdefault{
		*margin:-1px 0 0 -3px;
		}
	#ulmdefaultlbl, label.ulmdefaultlbl {
		left:0;
		margin:3px 0;
		*margin:1px 0;
		font-size:85%;
	}
	.ulmform fieldset.cl #ulmdefaultlbl{
		maring:5px 0 7px;
	}
	.ulmform .alert, .cszlabelinvalid{
		color: red;
	}
	.ulmform .nonus {
		margin:-4px;
		margin-top:-9px;
		padding-left:35px;
		background-position-y:30px;
		background-position-x:0;
	}
	.ulmform .nonus #csz{
		margin-left:5px;
	}
	.ulmform .nonus #cszlabel{
		margin-right:-5px;
	}
	.ulmform fieldset.picklist{
		border:1px solid #ccc;
		padding:10px 0 10px 65px;
	}
	#picklist dl {
		margin: 6px 0 10px;
		padding: 3px;
		height: 67px;
		border: 1px solid #ccc;
		overflow: auto;
		background: #fff;
	}
	#picklist dt {
		margin: 0;
		padding: 0;
		font-weight: bold;
	}
	#picklist dd {
		margin: 0;
		padding: 0 0 0 20px;
	}
	#picklist a {
		display: block;
	}
      
      .ad{
  text-align:center;
  margin-bottom:9px;
}
.ad table{
  margin:0 auto;
}
      #pulse{
  position:relative;
  min-height:202px;
  _height:201px;
}
#pulse .btn-more{
  z-index:50;
}
      #footer{
  clear:both;
  text-align:center;
  padding:10px 0;
  
    margin:0 0 10px 10px;
  
}
#footer ul{
  margin-bottom:3px;
}
#footer li{
  display:inline;
  padding:0 5px 0 0;
  margin: 0 5px 0 0;
}
#footer li.last{
  border:0;
  padding-right:0;
  margin-right:0;
}
#copyright{
  padding:0 5px;
  font:normal 100% arial;
}
#copyright li.first{
  border:0;
  padding-right:0;
  margin-right:5px;
}
.feedback {
  padding: 0 5px;
}
      
      
    </style>
    <script type="text/javascript">
    now=new Date;
    t2=now.getTime();
    </script>
  </head>
  <body>
    <div id="page">
      
      <div id="masthead">
        <div id="mastheadhd">
  <style type="text/css">
#eyebrow { margin:3px 0 3px; font: normal 77% verdana, sans-serif; }
#eyebrow #ypromo { float:left; }
#eyebrow #ypromo li.toolbar { float:left; padding-right: 5px; }
#eyebrow #headline { float:right; width:49%; text-align:right; }
</style>
<div id="eyebrow">
  <ul id="ypromo">
    <li class="toolbar">           <a id="backtoold" class="eyebrowborder" href="s/1753">Get Y! Toolbar</a> | <a id="sethomepage" href="s/1754"><b>Make Yahoo! Philippines your home page</b></a>           </li>
  </ul>
  <div id="ffhpcx"></div>
  <div id="headline">
      </div>
</div>
<script language="javascript" type="text/javascript">
YAHOO.Fp.hm=document.getElementById('sethomepage');
YAHOO.Fp.hp=1;
YAHOO.Fp.cp=0;
YAHOO.Fp.checkToolbar = function(){
  var cpre=/ CP=v=(\d+)&br=(.)/,cpv,cpbr,c=' '+document.cookie;
  if(c.match(cpre)){
    YAHOO.Fp.cp=1;
    cpv=RegExp.$1;
    cpbr=RegExp.$2;
    if((cpbr=='i'&&cpv<60100)||(cpbr=='f'&&cpv<10001)){
      YAHOO.Fp.cp=0;
      document.getElementById('tba').innerHTML='New';
    }else{
      YAHOO.Fp.cp=0;
      document.getElementById('toolbar').innerHTML='<a href=\'r\/1m\'>Get Yahoo! DSL</a>';
    }
  }
}
YAHOO.Fp.checkToolbar();
</script>
<!--[if IE]>
<a id="ieshp"></a>
<script language="javascript" type="text/javascript">
YAHOO.Fp.checkHomePage = function(){
  YAHOO.Fp.sp='http://'+location.hostname;
  _ieshp=document.getElementById("ieshp");
  _ieshp.style.behavior='url(#default#homepage)';
  YAHOO.Fp.hm.onclick=function(){
    var bcn=new Image;
    bcn.src=YAHOO.Fp._ylh+"r/hz";
    _ieshp.setHomePage(YAHOO.Fp.sp);
    YAHOO.Fp.checkSHP();
    return false;
  }
  YAHOO.Fp.hp=(_ieshp.isHomePage(YAHOO.Fp.sp)||_ieshp.isHomePage(YAHOO.Fp.sp+'/')||_ieshp.isHomePage(YAHOO.Fp.sp+location.pathname+location.search));
}
YAHOO.Fp.checkHomePage();
YAHOO.Fp.checkSHP = function(){
	var _hp=(_ieshp.isHomePage(YAHOO.Fp.sp)||_ieshp.isHomePage(YAHOO.Fp.sp+'/'));
	if (typeof(YAHOO.cookie) != "undefined" && YAHOO.cookie.set) {YAHOO.cookie.set("D","","-1","/","yahoo.com");}
	var bcn2=new Image;
	bcn2.src=YAHOO.Fp._ylh+"r/"+(_hp?"hy":"hx");
	if(_hp){
		YAHOO.Fp.shp=1;
		YAHOO.cookie.set("HP","1","","","yahoo.com");
		alert("Your home page is now Yahoo!\nThe home button of your browser goes directly to Yahoo!");
		YAHOO.Fp.eyebrow();
	}
}
</script>
<![endif]-->
<script language="javascript" type="text/javascript">
YAHOO.Fp.shp=1; /// boolean - true if y! is the home page
YAHOO.Fp._hpc=YAHOO.cookie.get("HP"); /// number - value of the HP cookie
YAHOO.Fp._hlr=(window.history.length==((YAHOO.Fp._ie)?0:1)); /// boolean - result of the history length check - true of the first page view of the browser session
if( (YAHOO.Fp._ie==1 && YAHOO.Fp.hp) || /// is IE and IE home page check returned true OR
     (YAHOO.Fp._ff==1 && YAHOO.Fp._hlr) ){ /// is Firefox and history length check returned true
  YAHOO.cookie.set("HP","1","","","yahoo.com"); /// Set the HP cookie to a value of 1
}else{
  YAHOO.Fp.shp=0; /// change shp to be false indicating we don't think the users home page is y!
}
YAHOO.Fp.scp=(YAHOO.Fp._ie||YAHOO.Fp._ffv>=parseFloat('1.0'))?YAHOO.Fp.cp:1; /// boolean - check to make sure we're using IE or Firefox and, if we are, set to the value of cp
YAHOO.Fp.eyebrow = function(){
	document.getElementById('ypromo').style.display=(!YAHOO.Fp.shp||!YAHOO.Fp.scp)?'block':'none';
	document.getElementById('sethomepage').parentNode.style.display=(!YAHOO.Fp.shp)?'block':'none';
	document.getElementById('toolbar').style.display=(!YAHOO.Fp.scp)?'block':'none';
}
YAHOO.Fp.eyebrow();
</script>
<![if !IE]>
<script language="javascript" type="text/javascript">
if(YAHOO.Fp._ff){
  var hm=document.getElementById('sethomepage');
        hm.href=((typeof(YLH)!='undefined')?YLH+'/':'')+'r/hf';
        if (typeof(app_c_pp)!='undefined') app_c_pp('hpf',YAHOO.Fp.shp?1:0);
        cc='&hpf='+(YAHOO.Fp.shp?1:0);
        hm.style.position = 'relative';
        hm.onclick=function(){
            if(!YAHOO.util.Event){
                        document.location = hm.href;
                        return;
            }
                var shpd = document.getElementById('shpd')
                if(!shpd){
                    shpd=document.createElement('div');
                        shpd.id='shpd';
                        shpd.className='shdw';
                        shpd.innerHTML='<div class=bd><div id=pnt></div><a title="Yahoo!" class=shp href="https://web.archive.org/web/20061106010008/http://ph.yahoo.com"><strong>Yahoo!</strong></a><ol><li>Drag the "Y!" and drop it onto the "House" icon.</li><li>Select "Yes" from the pop up window.</li><li>Nothing, you&#146;re done..</li></ol><div class=hr></div><p>If this didn&#146;t work for you or you want more detailed instructions <a href="https://web.archive.org/web/20061106010008/http://ph.yahoo.com/sethomepage/">click here</a>.</p></div>';
                        hm.parentNode.appendChild(shpd);
                        YAHOO.util.Event.addListener(document, 'click', function
(){document.getElementById('shpd').style.display='none';});
                }
                shpd.style.display = 'block';
                var bcn=new Image;bcn.src="r/hf";
                return false;
        }
}
</script>
<![endif]>
        </div>
        <div id="mastheadbd">
                    <span class="top"></span>
    <h1><img src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/fp/ymh_sprt_ph.gif" width="204" height="52" alt="Yahoo!" title="Yahoo"/></h1>
    <script type="text/javascript">
/* chnageVert override, taken from js_1.7.4.js */
var __tab_map = {
  'vstweb':'Web',
  'vstimg':'Images',
  'vstvid':'Video',
  'vstdir':'Directory',
  'vstnws':'News'
};
var __tab_map_trans = {
  'Web':'Web',
  'Images':'Images',
  'Video':'Video',
  'Directory':'Directory',
  'News':'News'
};
var __tab_btn_lst = {
  // web, directory
  'Web':true,
  'Images':false,
  'Video':false,
  'Directory':true,
  'News':false
};
YAHOO.Fp.changeVert =
function(args,self){
  var obj=args.obj,tab=self;
  YAHOO.Fd.addClass(obj.dCurTab,'on');
  YAHOO.Fd.addClass(tab.parentNode,'on');
  obj.dCurTab=tab.parentNode;
  document.sf1.action=tab.href;
  // var text=tab.innerHTML;
  var text=__tab_map[tab.id];
  document.getElementById('searchwrapper').className='tab-'+text.toLowerCase();
  if(typeof(this.first)=="undefined")
    this.searchbox=document.getElementById("searchbox").innerHTML;
  this.first=true;
  var searchbox=document.getElementById("searchbox");
  var leftfooter=document.getElementById("sboxfooter");
  var rightfooter=document.getElementById("sboxlinks");
  if(typeof(YAHOO.Fp.nSearchBoxWidth)=='undefined'){
    YAHOO.Fp.nSearchBoxWidth=YAHOO.util.Dom.getStyle("searchbox","width");
  }
  if(text=="Local"){
    if(leftfooter)
      leftfooter.style.display="none";
    if(rightfooter)
      rightfooter.style.display="none";
    var value=document.sf1.p.value;
    if(searchbox)
      searchbox.innerHTML=YAHOO.Fp.sLocalSearchHtml;
    document.sf1.p.value=value;
    document.sf1.csz.value=(typeof(_lcs)!="undefined"?_lcs:"");
  }else{
    if(searchbox.innerHTML!=this.searchbox){
      var value=document.sf1.p.value;
      searchbox.innerHTML=this.searchbox;
      document.sf1.p.value=value;
    }
    if(leftfooter)
      leftfooter.style.display="block";
    if(rightfooter)rightfooter.style.display="block";
  }
  frPrefix="FP-tab-";
  _ver=(typeof(ver)!="undefined"?ver:"");
  if(typeof(YAHOO.Fp.oSearch)=='object'){
    document.sf1.fr.value=frPrefix+YAHOO.Fp.oSearch[text].frcode+"-t"+_ver;
    var nAdvSearch=document.getElementById('advsearch');
    if(nAdvSearch){
      nAdvSearch.href=YAHOO.Fp.oSearch[text].rlink;
      nAdvSearch.innerHTML=YAHOO.Fp.oSearch[text].title;
    }
  }
  
  // toggle display of second button depending on values in __tab_btn_lst
  document.getElementById('localsubmit').style.display = ( __tab_btn_lst[text] == true ) ? 'inline' : 'none' ;
  if(document.getElementById("searchlabel")){
    // document.getElementById("searchsubmit").value=text+" Search";
    
    document.getElementById("searchsubmit").value=__tab_map_trans[text]+" Search";
    
  }
  document.getElementById("p").title=text+" search: enter a search term and press Enter";
  setTimeout("document.sf1.p.focus()",1);
};
</script>
<div id="searchwrapper">
  <div id="searchIE">
      </div>
  
    <img src="/web/20061106010008im_/http://ph.yahoo.com/" id="searchother" alt="">  
  <form name="sf1" id="search" action="https://web.archive.org/web/20061106010008/http://ph.search.yahoo.com/search">
    <fieldset>
            <legend>Yahoo! Search</legend>
	  
			<ul id="vsearchtabs">
			  <li class="first on"><a href="https://web.archive.org/web/20061106010008/http://ph.search.yahoo.com/search?fr=FP-pull-web-t&amp;p" id="vstweb">Web</a></li>
			  <li><a href="https://web.archive.org/web/20061106010008/http://ph.search.yahoo.com/search/images?fr=FP-pull-img-t&amp;p=" id="vstimg">Images</a></li>
			  <li><a href="https://web.archive.org/web/20061106010008/http://ph.video.search.yahoo.com/search/video?fr=FP-tab-vid-t909&amp;ei=UTF-8&amp;p=" id="vstvid">Video</a></li>
			  <li><a href="https://web.archive.org/web/20061106010008/http://ph.search.yahoo.com/search/dir?fr=FP-pull-img-t&amp;p=" id="vstdir">Directory</a></li>
			  <li class="last"><a href="https://web.archive.org/web/20061106010008/http://ph.search.yahoo.com/search/news?fr=FP-pull-news-t&amp;p=" id="vstnws">News</a></li>
			</ul>      
	  
      <div id="sbox">
        <label id="searchlabel" for="p">Search:</label>
        <div id="searchbox">
          <input class="plong inputtext" type="text" id="p" name="p" accesskey="s">
        </div>
		<span id="searchbtn">
			<input type="submit" name="sm" id="searchsubmit" class="btn-more-2" value="All The Web">
			<input type="submit" name="y" id="localsubmit" class="btn-more-2" value="Philippines">
        </span>
		<input type="hidden" name="fr" value="FP-tab-web-t">
        <input type="hidden" name="toggle" value="1">
        <input type="hidden" name="cop" value="">
        <input type="hidden" name="ei" value="UTF-8">
        <script language="javascript">
          document.sf1.p.focus();
          /*document.sf1.action = "r/sx/*-http://search.yahoo.com/search";*/
          document.sf1.fr.value = "FP-tab-web-t"+(typeof(ver)!='undefined'?ver:"");
        </script>
      </div>
      
    
      <div id="sboxfooter">
      
        
                  
      
      </div>
    
    
    </fieldset>
  </form>
</div>
          <script type="text/javascript">
          now=new Date;
          t3=now.getTime();
          </script>
      <div class="mh_footer">
            
    <div id="pagesettingscx">
  <a href="r/tp" id="editpage">Page Options</a>
  <div id="pagesettings">
    <div class="bd">
      <span>
        <h4>Color:</h4>
        <ol id="themes">
          <li><a id="t1" title="Ocean">Ocean</a></li>
          <li><a id="t4" title="Tangerine">Tangerine</a></li>
          <li><a id="t3" title="Violet">Violet</a></li>
          <li><a id="t2" title="Oyster">Oyster</a></li>
          <li><a id="t5" title="Grass">Grass</a></li>
        </ol>
        
          <a id="sizetogglelink" href="r/ty">Switch to Narrow Page</a>
        
      </span>
    </div>
  </div>
</div>
            
      </div>
        </div>
        <div id="mastheadft"></div>
      </div>
      <div id="colcx">
                
        <div id="left">
      
      <style type="text/css">
#trough-overlay {
  left:-1000px;
  display:none;
}
#trough-overlay ol {
  width: 20%;
}
#trough-overlay div#properties, #trough-overlay div#properties-intl {
  padding:5px;
}
#trough-overlay ol.col1 {
  width:19%;
}
#trough-overlay ol.col2 {
  width:19%;
}
#trough-overlay ol.col3 {
  width:22%;
}
#trough-overlay ol.col4 {
  width:21%;
}
#trough-overlay ol.col5 {
  width:19%;
}
</style>
<div id="trough-overlay">
<span class="shadow1">
<span class="shadow2">
<div id="trough-overlay-content">
<h2>Yahoo! Services</h2>
<a href="r/72" id="trough-close" onclick="YAHOO.Fp.trough.toggleTrough(0, {sAction : 'close'});return false;">Close</a>
<div id="trough-overlay-bd" class="bd">
<div id="properties">
<ol id="drawer-1" start="1" class="col1">
           <li><a href="s/275">Addresses</a></li>
<li><a href="s/276">Auctions</a></li>
<li><a href="s/277">Avatars</a></li>
<li><a href="s/278">Babel Fish</a></li>
<li><a href="s/279">Briefcase</a></li>           </ol>
<ol id="drawer-2" start="12" class="col2">
           <li><a href="s/280">Calendar</a></li>
<li><a href="s/281">Classifieds</a></li>
<li><a href="s/282">Directory</a></li>
<li><a href="s/283">Education</a></li>
<li><a href="s/284">Football (UK)</a></li>           </ol>
<ol id="drawer-3" start="23" class="col3">
           <li><a href="s/285">Games</a></li>
<li><a href="s/286">GeoCities</a></li>
<li><a href="s/287">Groups</a></li>
<li><a href="s/288">Horoscopes (US)</a></li>
<li><a href="s/289">Mail</a></li>           </ol>
<ol id="drawer-4" start="34" class="col4">
           <li><a href="s/290">Message Boards</a></li>
<li><a href="s/291">Messenger</a></li>
<li><a href="s/292">Mobile</a></li>
<li><a href="s/293">News</a></li>
<li><a href="s/294">Personals</a></li>           </ol>
<ol id="drawer-5" start="45" class="col5">
           <li><a href="s/1567">Photos</a></li>
<li><a href="s/1568">Search</a></li>
<li><a href="s/1569">Sports</a></li>
<li><a href="s/1570">Toolbar</a></li>
<li><a href="s/1571">Video</a></li>           </ol>
</div>
<div id="properties-intl">
<ol id="drawer-i-1" start="1" class="col1">
           <li><a href="s/654">Y! Argentina</a></li>
<li><a href="s/655">Y! Asia</a></li>
<li><a href="s/656">Y! AU &amp; NZ</a></li>
<li><a href="s/657">Y! Austria</a></li>
<li><a href="s/657">Y! Brazil</a></li>
<li><a href="s/658">Y! Canada-EN</a></li>
<li><a href="s/659">Y! Canada-FR</a></li>
<li><a href="s/660">Y! Catalan</a></li>           </ol>
<ol id="drawer-i-2" start="9" class="col2">
           <li><a href="s/661">Y! China</a></li>
<li><a href="s/662">Y! Denmark</a></li>
<li><a href="s/663">Y! Finland</a></li>
<li><a href="s/664">Y! France</a></li>
<li><a href="s/665">Y! Germany</a></li>
<li><a href="s/666">Y! Greece</a></li>
<li><a href="s/667">Y! Hong Kong</a></li>           </ol>
<ol id="drawer-i-3" start="17" class="col3">
           <li><a href="s/795">Y! in Chinese</a></li>
<li><a href="s/797">Y! India</a></li>
<li><a href="s/799">Y! Indonesia</a></li>
<li><a href="s/801">Y! Italy</a></li>
<li><a href="s/803">Y! Japan</a></li>
<li><a href="s/804">Y! Korean</a></li>
<li><a href="s/805">Y! Malaysia</a></li>           </ol>
<ol id="drawer-i-4" start="25" class="col4">
           <li><a href="s/675">Y! Mexico</a></li>
<li><a href="s/676">Y! Netherlands</a></li>
<li><a href="s/677">Y! Norway</a></li>
<li><a href="s/678">Y! Russia</a></li>
<li><a href="s/679">Y! Singapore</a></li>
<li><a href="s/680">Y! Spain</a></li>
<li><a href="s/681">Y! Sweden</a></li>           </ol>
<ol id="drawer-i-5" start="33" class="col5">
           <li><a href="s/682">Y! Switzerland</a></li>
<li><a href="s/683">Y! Taiwan</a></li>
<li><a href="s/684">Y! Telemundo</a></li>
<li><a href="s/685">Y! Thailand</a></li>
<li><a href="s/686">Y! UK &amp; IE</a></li>
<li><a href="s/687">Y! United States</a></li>
<li><a href="s/688">Y! Vietnam</a></li>           </ol>
</div>
<div id="seriously"><a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/allservices/*http://asia.yahoo.com/family/more/index.html">&#187; All Yahoo! Services</a></div>
</div>
</div>
</span>
</span>
</div>
      <div id="trough" class="md">
        <div class="bd">
    
          <ul class="col1" id="trough-links">
                       <li class="t_education"><a href="s/689" title="Education">Education</a></li>                      <li class="t_games"><a href="s/690" title="Games">Games</a></li>                   
                       <li class="t_geocities"><a href="s/691" title="Geocities">Geocities</a></li>                      <li class="t_groups"><a href="s/692" title="Groups">Groups</a></li>                   
                       <li class="t_photos"><a href="s/856" title="Photos">Photos</a></li>                      <li class="t_astrology"><a href="s/1027" title="Y! US Astrology">Horoscopes<sup>+</sup></a></li>                   
                       <li class="t_personals"><a href="s/695" title="Personals">Personals</a></li>                      <li class="t_video"><a href="s/832" title="Video">Video</a></li>                     </ul>
          <span id="allyservicescx">
            <a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/allservices/*http://asia.yahoo.com/family/more/index.html" id="allyservices" class="btn-more-2" title="All Yahoo! Services">All Yahoo! Services</a>
          </span>
    
        </div>
      </div>
      
          <div id="minimantle" class="md">
    <div id="mobile" class="md-sub">
  <h2>           Yahoo! Mobile           </h2>
  <ul id="mobile-links">
    <li>           <a href="s/696">SMS Messenger</a>           </li>
    <li>           <a href="s/697">Yahoo! WAP</a>           </li>
  
    <li>           <a href="s/698">Yahoo! Go</a>           </li>
    <li>           <a href="s/699">Yahoo! Mobile</a>           </li>
  </ul>
</div>
    <div id="intl" class="md-sub">
  <h2>           Yahoo! International           </h2>
  <ul id="international-links">
    <li>           <a href="s/700">Indonesia</a>           </li>
    <li>           <a href="s/701">Malaysia</a>           </li>
  
    <li>           <a href="s/702">Singapore</a>           </li>
    <li>           <a href="s/703">Thailand</a>           </li>
  
    <li>           <a href="s/704">United States</a>           </li>
    <li>           <a href="s/705">Vietnam</a>           </li>
  </ul>
  <div style="clear:both;padding-top:5px;font:bold 75% verdana;">&raquo;            <a href="s/306"> More Countries</a>           </div>
</div>
          </div>
          
        </div>
        
      
      <div id="rightcx">
      
        <div id="middle">
        
          <div class="colpadding">
        
        
          <div id="news" class="md">
  <div class="hd tabs">
    <h3 class="a11y">News Navigation</h3>
    <ul id="newstabs">
    
      <li class="on first" style="width:25%">
        <em><a id="inthenews2" href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/tabs/*http://asia.news.yahoo.com/">In the News</a></em>
        <span class="pipe"></span>
      </li>
      <li style="width:25%">
        <em><a id="finance" href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/tabs/*http://asia.news.yahoo.com/business/">Business</a></em>
        <span class="pipe"></span>
      </li>
      <li style="width:25%">
        <em><a id="entertainment" href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/tabs/*http://asia.news.yahoo.com/ent/">Entertainment</a></em>
        <span class="pipe"></span>
      </li>
      <li class="last" style="width:25%">
        <em><a id="sports" href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/tabs/*http://asia.news.yahoo.com/sports/">Sports</a></em>
        <span class="pipe"></span>
      </li>
    
    </ul>
  </div>
  <div id="newsbd" class="bd">
    <span id="inthenews2ct" class="current">
      <div id="newstop">
          <div style="text-align:left;font-family:verdana;padding:0 0 5px;font-size:10px;color: rgb(51,51,51);">9:00 am, Mon Nov 6</div>
                     &#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/top/*http://asia.news.yahoo.com/061105/afp/061105233945hightech.html" title="Indian cities emerge global winners as best offshoring sites">Indian cities emerge global winners as best offshoring...</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/top/*http://asia.news.yahoo.com/061104/afp/061104112217spo.html" title="Former winners notch victories at World Pool Championship">Former winners notch victories at World Pool...</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/top/*http://asia.news.yahoo.com/061103/afp/061103071028spo.html" title="Pool players from 40 countries converge on Manila for World title">Pool players from 40 countries converge on Manila for...</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/top/*http://asia.news.yahoo.com/061031/3/2s4x9.html" title="Typhoon Cimaron heads for Vietnam">Typhoon Cimaron heads for Vietnam</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/top/*http://asia.news.yahoo.com/061105/afp/061105232212top.html" title="Saddam sentenced to hang">Saddam sentenced to hang</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/top/*http://asia.news.yahoo.com/061105/afp/061105224828top.html" title="World applauds 'justice' for Saddam, wary of hangman's noose">World applauds 'justice' for Saddam, wary of hangman's...</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/top/*http://asia.news.yahoo.com/061105/afp/061105205520top.html" title="Three killed in Gaza as Israel vows to press assault">Three killed in Gaza as Israel vows to press assault</a><br>
                     <div class="more-link">           <a href="s/307">&raquo; More News</a>           </div>
        </div>
        <div id="newsft">
          <div id="newsbottom">
            <div id="news-sponsor">
                         <!-- SpaceID=0 robot -->
                       </div>
          </div>
        </div>
    </span>
    
    <span id="financect">
      <div id="newstop">
          <div style="text-align:left;padding:0 0 5px;font-family:verdana;font-size:10px;color: rgb(51,51,51);">9:00 am, Mon Nov 6</div>
                                           &#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/biz/*http://asia.news.yahoo.com/061106/3/2sebq.html" title="Malaysia Hot Stocks-Market seen up, led by MMC Corp">Malaysia Hot Stocks-Market seen up, led by MMC Corp</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/biz/*http://asia.news.yahoo.com/061106/3/2sebp.html" title="TEXT-Australia's Promina buys underwriting agency">TEXT-Australia's Promina buys underwriting agency</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/biz/*http://asia.news.yahoo.com/061106/ap/d8l787t00.html" title="U.S. Gas Prices Start to Stabilize">U.S. Gas Prices Start to Stabilize</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/biz/*http://asia.news.yahoo.com/061106/ap/d8l788o00.html" title="Tokyo, London Stock Exchanges in Talks">Tokyo, London Stock Exchanges in Talks</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/biz/*http://asia.news.yahoo.com/061105/afp/061105083728business.html" title="China, Africa sign deals worth 1.9 billion dollars">China, Africa sign deals worth 1.9 billion dollars</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/biz/*http://asia.news.yahoo.com/061105/afp/061105025511business.html" title="Beauty queen and sniffer dogs help Vietnam ready for APEC summit">Beauty queen and sniffer dogs help Vietnam ready for...</a><br>
                     <div id="markets">
            <ul>
                          </ul>
          </div>
          <div class="more-link">           <a href="s/308">&raquo; More Business News</a>           </div>
        </div>
        <div id="newsft">
          <div id="newsbottom">
            <div id="news-sponsor">
                         <!-- SpaceID=0 robot -->
                       </div>
          </div>
        </div>
    </span>
    
    
    <span id="entertainmentct">
      <div id="newstop">
          <div style="text-align:left;padding:0 0 5px;font-family:verdana;font-size:10px;color: rgb(51,51,51);">9:00 am, Mon Nov 6</div>
                     &#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/ent/*http://asia.news.yahoo.com/061105/afp/061105234940people.html" title="Ex-PM Bulent Ecevit, dead at 81, dominated Turkish politics">Ex-PM Bulent Ecevit, dead at 81, dominated Turkish...</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/ent/*http://asia.news.yahoo.com/061105/afp/061105100538people.html" title="Saddam Hussein, the Iraqi despot sentenced to hang">Saddam Hussein, the Iraqi despot sentenced to hang</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/ent/*http://asia.news.yahoo.com/061105/afp/061105095359people.html" title="Taiwan politician dubbed 'Mr Clean' dies">Taiwan politician dubbed 'Mr Clean' dies</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/ent/*http://asia.news.yahoo.com/061105/ap/d8l74mq80.html" title="Eritrea Releases Gospel Singer Berhane">Eritrea Releases Gospel Singer Berhane</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/ent/*http://asia.news.yahoo.com/061105/ap/d8l73k0g1.html" title="Keith, Haggard Win BMI Country Awards">Keith, Haggard Win BMI Country Awards</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/ent/*http://asia.news.yahoo.com/061105/3/2sdtm.html" title="Early Bond reviews would make Moneypenny proud">Early Bond reviews would make Moneypenny proud</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/ent/*http://asia.news.yahoo.com/061105/3/2sdyn.html" title="Jolie, Indian minister talk on refugees, Gandhi">Jolie, Indian minister talk on refugees, Gandhi</a><br>
                     <div class="more-link">           <a href="s/310">&raquo; More Entertainment News</a>           </div>
        </div>
        <div id="newsft">
          <div id="newsbottom">
            <div id="news-sponsor">
                         <!-- SpaceID=0 robot -->
                       </div>
          </div>
        </div>
    </span>
    
    
    <span id="sportsct">
      <div id="newstop">
          <div style="text-align:left;padding:0 0 5px;font-family:verdana;font-size:10px;color: rgb(51,51,51);">9:00 am, Mon Nov 6</div>
                     &#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/sports/*http://asia.news.yahoo.com/061105/ap/d8l76q700.html" title="NBA Standings">NBA Standings</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/sports/*http://asia.news.yahoo.com/061105/ap/d8l76phg0.html" title="Heat-76ers, Box">Heat-76ers, Box</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/sports/*http://asia.news.yahoo.com/061105/ap/d8l7688g0.html" title="Spurs-Raptors, Box">Spurs-Raptors, Box</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/sports/*http://asia.news.yahoo.com/061105/ap/d8l75sto0.html" title="Magic-Hawks, Box">Magic-Hawks, Box</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/sports/*http://asia.news.yahoo.com/061105/3/2sdwn.html" title="Late Harewood goal sinks Arsenal">Late Harewood goal sinks Arsenal</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/sports/*http://asia.news.yahoo.com/061105/3/2sdzq.html" title="Lennon strike hands Spurs victory over Chelsea">Lennon strike hands Spurs victory over Chelsea</a><br>
&#149;&nbsp;<a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/news/sports/*http://asia.news.yahoo.com/061105/3/2sdyc.html" title="Davydenko destroys Hrbaty in Paris Masters final">Davydenko destroys Hrbaty in Paris Masters final</a><br>
                     <div class="more-link">           <a href="s/309">&raquo; More Sports News</a>           </div>
        </div>
        <div id="newsft">
          <div id="newsbottom">
            <div id="news-sponsor">
                         <!-- SpaceID=0 robot -->
                       </div>
          </div>
        </div>
    </span>
    
  </div>
</div>
          <div id="ad" class="ad">
           <!-- SpaceID=0 robot -->
           </div>
          
        
            
            <div id="adwest" class="ad">
            
            
            </div>
            
            <script type="text/javascript">now=new Date;t5=now.getTime();</script>
            
            <div id="today" class="md">
  
  <div class="hd">
    <h2>Video</h2>
  </div>
  
  <div id="todaybd" class="bd">
    
    <span id="video1ct" class="current">
               <a href="s/1797"><img src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/video/156x117_internetlove.jpg"></a>                  <h3>           <a href="s/1798">Love on the Internet</a>           </h3>
                  Trying to find love on the Internet? This is for you - an original music video written and produced by a talented young denizen of cyberspace.
<ul>
<li><a class="video" href="s/1799">Watch it now</a></li></ul>               </span>
    <span id="video2ct">
               <a href="s/1800"><img src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/video/156x117_usexything.jpg"></a>                  <h3>           <a href="s/1801">You Sexy Thing!</a>           </h3>
                  Some things are just too good to resist. An cute animation about a mouse and his love affair with cheese. 
<ul>
<li><a class="video" href="s/1802">Watch it now</a></li></ul>?               </span>
    <span id="video3ct">
               <a href="s/1803"><img src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/video/156x117_fart.jpg"></a>                  <h3>           <a href="s/1804">How the dinosaurs became extinct</a>           </h3>
                  Once upon a time, dinosaurs ruled the earth. Then, 65 million years ago, they were extinct. But the question remains: what killed the dinosaurs?
<ul>
<li><a class="video" href="s/1805">Watch it now</a></li></ul>               </span>
    <span id="video4ct">
               <a href="s/1806"><img src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/video/156x117_dumbdog.jpg"></a>                  <h3>           <a href="s/1807">Dumb Dog</a>           </h3>
                  Some dogs are afraid of cats, other dogs chase their own tails…but this dog probably stands alone on this one.
<ul>
<li><a class="video" href="s/1808">Watch it now</a></li></ul>               </span>
    
    
  </div>
  
  <div id="todayft" class="ft">
    <span id="footer1" class="current">
    <ul id="todaystories1">
        <li id="video1|checksum" class="on">
                    <a href="s/1797"><img src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/video/156x117_internetlove.jpg"></a>                               <a href="s/1798">Love on the Internet</a>                   </li>
        <li id="video2|checksum">
                    <a href="s/1800"><img src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/video/156x117_usexything.jpg"></a>                               <a href="s/1801">You Sexy Thing!</a>                   </li>
        <li id="video3|checksum">
                    <a href="s/1803"><img src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/video/156x117_fart.jpg"></a>                               <a href="s/1804">How the dinosaurs became extinct</a>                   </li>
        <li id="video4|checksum">
                    <a href="s/1806"><img src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/sg/video/156x117_dumbdog.jpg"></a>                               <a href="s/1807">Dumb Dog</a>                   </li>
      </ul>
      <div class="more-link"><a id="more-featured" href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/fea/video/*http://ph.video.yahoo.com/">&#187; More videos</a></div>
    </span>
    
  </div>
  
</div>
            
            <script type="text/javascript">now=new Date;t6=now.getTime();</script>
            
    <div id="marketplace" class="md">
    <div class="hd">
      <h2>Games</h2>
    </div>
    <div id="marketplacebd" class="bd">
    
                 Think you're good enough? Pit yourself against the best around the world. Be warned! This can be really addictive.
		<table>
			<tr>
				<td>
		<table>
			<tr>
				<td><img src="https://web.archive.org/web/20061106010008im_/http://aa.i1.yimg.com/us.yimg.com/i/aa/ga/sm/sgi.gif"></td>
				<td><a href="s/311">Gin Rummy</a></td>					
			</tr>
			<tr>
				<td><img src="https://web.archive.org/web/20061106010008im_/http://aa.i1.yimg.com/us.yimg.com/i/aa/ga/sm/she.gif"></td>
				<td><a href="s/312">Hearts</a></td>
			</tr>
			<tr>
				<td><img src="https://web.archive.org/web/20061106010008im_/http://aa.i1.yimg.com/us.yimg.com/i/aa/ga/sm/ssp.gif"></td>
				<td><a href="s/313">Spades</a></td>
			</tr>
		</table>
				</td>
				<td>
		<table>
			<tr>
				<td><img src="https://web.archive.org/web/20061106010008im_/http://aa.i1.yimg.com/us.yimg.com/i/aa/ga/sm/sbg.gif"></td>
				<td><a href="s/314">Backgammon</a></td>
			</tr>
			<tr>
				<td><img src="https://web.archive.org/web/20061106010008im_/http://aa.i1.yimg.com/us.yimg.com/i/aa/ga/sm/sdo.gif"></td>
				<td><a href="s/315">Dominoes</a></td>
			</tr>
			<tr>
				<td><img src="https://web.archive.org/web/20061106010008im_/http://aa.i1.yimg.com/us.yimg.com/i/aa/ga/sm/smjs.gif"></td>
				<td><a href="s/316">MahJong Solitaire</a></td>
			</tr>
		</table>
				</td>
				<td>
		<table>
			<tr>
				<td><img src="https://web.archive.org/web/20061106010008im_/http://aa.i1.yimg.com/us.yimg.com/i/aa/ga/sm/sbl.gif"></td>
				<td><a href="s/317">JT's Blocks™</a></td>
			</tr>
			<tr>
				<td><img src="https://web.archive.org/web/20061106010008im_/http://aa.i1.yimg.com/us.yimg.com/i/aa/ga/sm/syt.gif"></td>
				<td><a href="s/318">Yahoo! Towers</a></td>
			</tr>
			<tr>
				<td><img src="https://web.archive.org/web/20061106010008im_/http://aa.i1.yimg.com/us.yimg.com/i/aa/ga/sm/slt.gif"></td>
				<td><a href="s/319">Literati</a></td>
			</tr>
		</table>
				</td>
			</tr>	
		</table>                 <div class="more-link">           <a href="s/320">&#187; More Games</a>           </div>
    
    </div>
  </div>
      <script type="text/javascript">now=new Date;t7=now.getTime();</script>
            
        </div>
            
        </div>
        <div id="right">
    <div class="colpadding">
   <div id="pa" class="md" style="border-right:none;">
  <div id="pabd">
      <div id="patop">
      <ul id="reg" class="so">
      
        <li>Check your mail status: <a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/pa/eb/*https://login.yahoo.com/config/login_verify2?.src=www&amp;.intl=ph&amp;.done=http://ph.yahoo.com/">Sign In</a></li>
      
        <li id="signup">Free Mail: <a href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/pa/eb/*https://edit.yahoo.com/config/eval_register?.v=&amp;.intl=ph&amp;new=1&amp;.done=&amp;.src=ym&amp;.partner=&amp;.p=&amp;promo=&amp;.last=">Sign Up</a></li>
      </ul>
    </div>
    
  <div id="patabs">
    <ul id="tabs1" class="patabs first">
      <li id="mail" class="first">
        <div>
          <h4>
          
            <a id="pamail" accesskey="m" href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/pa/buttons/*http://mail.yahoo.com/?.intl=ph"><span class="icon">Mail</span></a>  
          
          </h4>
        </div>
      </li>
      <li id="messenger">
        <div>
          <h4>
            <a id="pamsgr" href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/pa/buttons/*http://sg.messenger.yahoo.com"><span class="icon">Messenger</span></a>
          </h4>
        </div>
      </li>	
      <li id="weather" class="last">
        <div>
          <h4>
            <a id="paweather" href="https://web.archive.org/web/20061106010008/http://aa.rd.yahoo.com/spirit/ph/pa/buttons/*http://weather.yahoo.com"><span class="icon">Weather</span></a>
          </h4>
        </div>
      </li>	
    </ul>
     
      <div id="tabs1previewdiv" class="papreviewdiv"></div>
      <ul id="tabs2" class="patabs last" style="display:none;height:1px;">
      </ul>
      <div id="tabs2previewdiv" class="papreviewdiv" style="display:none;height:1px;"></div>
     
  </div>
  </div>
</div>
   <div id="ad" class="ad">
    
      
                   <!-- SpaceID=0 robot -->
                 
     
    </div>
            <script type="text/javascript">
            now=new Date;
            t8=now.getTime();
            </script>
            
            <div id="mantlecx">
   
            </div>
   <style type="text/css">
.mantleBuild h3 { 
	font:bold 100% arial; 
	margin-bottom:2px;
}
.mantleBuild h3 a {
	display:block; 
	color:#597300;
}
.mantleBuild .btn-more-left {
	position: absolute;
	bottom: 5px;
	font-family: verdana;
	font-style: normal;
	font-variant: normal;
	font-weight: bold;
	font-size: 77%;
	line-height: normal;
	font-size-adjust: none;
	font-stretch: normal;
	white-space: nowrap;
}
	
.mantleBuild img{
	float:left;
	margin-right:8px;
	border:1px solid #9CAFBD; 
	border-right:1px solid #647684; 
	border-bottom:1px solid #647684
}
.mantleBuild .btn-more, #mantle .btn-more-left {
	bottom:10px;
}
</style>
           <div id="mantle" class="md mantleBuild"><div class="hd"><h2><a href="s/1485">Inside Yahoo!</a></h2></div><div class="bd"><a href="s/1485"><img height="68" width="92" src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/fp/92x68_ie7pic.jpg" alt=""></a><h3><a href="s/1486">IE  7 optimised for Yahoo!</a></h3><p>Try the new IE 7 with your favourite Yahoo! services 1 click away.</p><a class="btn-more-left" href="s/1485">&raquo; Download Now</a></div></div>                         <style type="text/css">
#pulse .hd a{
font:normal 77%/150% verdana;
display:block; 
float:right;
}
#pulse h3{
font:normal 125% arial;
text-align:center;
color:#666;
margin-bottom:7px;
}
#pulse .bd{
padding:5px 10px;
}	
#pulse img{
float:left;
margin:0;
}
#pulse ol{
float: left;
width:15em;
}
#pulse li{
margin: 0 0 3px;
margin-left:10px;
font:bold 100% arial;
color:#16387c;
}
#pulse li h5{
display:inline;
font-size:100%;
}
#pulse li div{
zoom:1;
margin:-2px 0 0;
font:normal 85% verdana;
color:#666;
}
#pulse li div a{
color:#666;
}
</style>
<div id="pulse" class="md">
	<div class="hd"><h2>Yahoo! Pulse</h2></div>
	<div id="pulsebd" class="bd">
		<h3>Top Celebrity Image Search Spikes</h3>
		<a href="s/1809"><img width="116" height="116" src="https://web.archive.org/web/20061106010008im_/http://sg.yimg.com/i/buzz/angelina.jpg" alt="Angelina Jolie" border="0"></a>
		<ol class="first">
			<li class="tt1"><a href="s/1809">Angelina Jolie</a><div>Mischievous beauty</div></li>
			<li class="tt2"><a href="s/1810">Paris Hilton</a><div>Her not-so-simple life</div></li>
			<li class="tt3"><a href="s/1811">Jessica Simpson</a><div>It's a public affair</div></li>
			<li class="tt4"><a href="s/1812">Kirsten Dunst</a><div>Sunny, sexy, girl-next-door</div></li>
		</ol>
	</div>
	<p>&nbsp;</p>
	<a class="btn-more" href="s/1813">&#187; Light Search Page</a>					
</div>                       <script type="text/javascript">
            now=new Date;
            t10=now.getTime();
            </script>
        </div>
        </div>
  <div id="footer" class="md">
             <a href="s/858">Company Info</a> | <a href="s/859">Privacy Policy</a> | <a href="s/860">Terms of Service</a> | <a href="s/861">Jobs</a> | <a href="s/862">Advertise With Us</a> <br/>
Disclaimer: <sup>+</sup> Service by Yahoo! Inc<br>
	  <span id="copyright">
     Copyright © 2006 Yahoo! Pte Ltd. All rights reserved.
	<a href="s/863">Intellectual Property Rights Policy.</a>
	 </span>           </div>
      
      </div>
      
      </div>
      
    </div>
    
  
<script type="text/javascript">
/// searchbox fr codes
YAHOO.Fp.oSearch = {
  Web : {'frcode':'web-t', 'rlink':'r/so', 'title':'Advanced Search'},
  Images  : {'frcode':'img-t', 'rlink':'r/01', 'title':'Advanced Search'},
  // Video        : {'frcode':'vid-t', 'rlink':'r/15', 'title':'Advanced Search'},
  Video   : {'frcode':'vid-t909', 'rlink':'r/15', 'title':'Advanced Search'},
  Audio   : {'frcode':'aud-t', 'rlink':'r/sy', 'title':'Preferences'},
  Directory : {'frcode':'dir-t', 'rlink':'r/0b', 'title':'Advanced Search'},
  Local   : {'frcode':'lcl-t'},
  News    : {'frcode':'news-t', 'rlink':'r/0c', 'title':'Advanced Search'},
  Shopping : {'frcode':'prod-t', 'rlink':'r/07', 'title':'Advanced Search'}
};
/// Object to hold the error messag es and error flags when the ajax call fails or backend returns a -1 when user hovers over the pa tabs
YAHOO.Fp.oPaErrorManager = {
  mail : {
      html : "go to <a href='r/phma'>ph.mail.yahoo.com</a> to retrieve your mail</li><li class='last'><a href='r/phma'>&#187; Go To Mail", 
      status : false,
      buffer : false,
      requestDelayTimeout : null, 
      requestFailTimeout : null,
			bProcessed : 0,
			dScriptNode : null
  },
  messenger : {
      html : "launch <a href='r/sgmg'>Yahoo Messenger</a> to view friends online.</li><li class='last'><a href=''>&#187; Launch Messenger",
      status : false,
      buffer : false,
      requestDelayTimeout : null, 
      requestFailTimeout : null,
			bProcessed : 0,
			dScriptNode : null
  }, 
  weather : {
      html : "go to <a href='r/wa'>weather.yahoo.com</a> to get the weather.</li><li class='last'><a href='r/wa'>&#187; Go To Weather",
      status : false,
      buffer : false,
      requestDelayTimeout : null, 
      requestFailTimeout : null,
			dScriptNode : null
  },
  traffic : {
      html : "go to <a href='r/kf'>Yahoo! Local</a> to get the local traffic.</li><li class='last'><a href='r/kf'>&#187; Go To Local", 
      status : false,
      buffer : false,
      requestDelayTimeout : null, 
      requestFailTimeout : null,
			dScriptNode : null
  },
	events : {
      html : "go to <a href='r/kf'>Yahoo! Local</a> to get the local events.</li><li class='last'><a href='r/kf'>&#187; Go To Local", 
      status : false,
      buffer : false,
      requestDelayTimeout : null, 
      requestFailTimeout : null,
			dScriptNode : null
  },
  music : {
      html : "<h3><a href='r/uc'>LAUNCHcast Radio:</a> <em><a href='r/ud'>Featured stations</a></em></h3><div class='station'><div class='station-hd'></div><div class='station-bd' class='fixfloat'><a class='photo-link' href='r/ut/*-http://music.yahoo.com/launchcast/stations/station.asp?i=341'><img class='station-photo' src='https://web.archive.org/web/20061106010008/http://us.ent1.yimg.com/images.launch.yahoo.com/000/025/969/25969265.jpg'></a><h4><a class='station-name' href='r/ut/*-http://music.yahoo.com/launchcast/stations/station.asp?i=341'>Today's Big Hits</a></h4><p class='artists'><a href='r/ut/*-http://music.yahoo.com/launchcast/stations/station.asp?i=341'>Mary J. Blige, Kelly Clarkson, Sean Paul, Beyonce</a></p><a class='listen' href='r/ul/*-http://music.yahoo.com/lc/?rt=1&rp1=341&rp2=0' onclick=\"YAHOO.Fp.launchMusicWindow('https://web.archive.org/web/20061106010008/http://radio.music.yahoo.com/radio/player/default.asp?clientID=1&clientStationID=0&p=1&m=341&d=0',491,365,'https://web.archive.org/web/20061106010008/http://music.yahoo.com/lc/?rt=1&rp1=341&rp2=0');return false;\">Listen</a></div><div class='station-ft'></div></div><a class='btn-more' href='r/ua'>&#187; View All Stations</a><div class='nav'><a class='back' onclick=\"return  YAHOO.Fp.oPaModule.getModuleData('music',{nav:'prev',curr_stn:1})\" href='r/um'>Previous</a><a class='frwd' onclick=\"return YAHOO.Fp.oPaModule.getModuleData('music',{nav:'next',curr_stn:1})\" href='r/um'>Next</a></div>", 
      error : false,
      status : false,
      buffer : false,
      requestDelayTimeout : null, 
      requestFailTimeout : null,
			dScriptNode : null
  },
  horoscope : {
      html : "go to <a href='https://web.archive.org/web/20061106010008/http://astrology.yahoo.com/'>Yahoo! Horoscopes</a> to get your horoscope.</li><li class='last'><a href='https://web.archive.org/web/20061106010008/http://astrology.yahoo.com/'>&#187; Go To Horoscopes", 
      error : false,
      status : false,
      buffer : false,
      requestDelayTimeout : null, 
      requestFailTimeout : null,
			dScriptNode : null
  },
  template : {
      templateHdr : "<div class='pa-alert error'><ul><li class='first'>Please ", 
      templateFtr : "</a></li></ul></div>"
  }
}
</script>
    
<script type="text/javascript">
YAHOO.Fp.dod = function(){
  var aArgs = arguments, nArgsLength = aArgs.length;
  this.oTypes = {
    js : "script" , 
    css : "link"
  }
  sNode=(nArgsLength>3) ? this.oTypes[aArgs[3]] : this.oTypes["js"];
  
  this.oAttributes = {
    sNode       : sNode , 
    aType       : ["type", (sNode=="script" ? "text/javascript" : "text/css") ] , 
    aSource     : [ (sNode=="script" ? "src" : "href" ) , aArgs[0] ] , 
    aName       : ( sNode=="script" ? [ "name" , "javascript" ] : [ "rel" , "stylesheet" ] ) , 
    sId         : ( this.id++ || 0 ) ,
    bBreakCache : ( (nArgsLength>1 && aArgs[1]!='') ? aArgs[1] : 0 ) , 
    bRemove     : ( (nArgsLength>2 && aArgs[2]!='') ? aArgs[2] : 0 )
  }
  
  this.get = function(){
    var d = document;
    var dNode = d.createElement(this.oAttributes.sNode);
    dNode.setAttribute( this.oAttributes.aType[0] , this.oAttributes.aType[1] );
    dNode.setAttribute( this.oAttributes.aName[0] , this.oAttributes.aName[1] );
    dNode.setAttribute( "id" , "src" + this.oAttributes.sId );
    if(this.oAttributes.bBreakCache){
      this.oAttributes.aSource[1] += "?rnd=" + Math.random();
    }
    ///web.archive.org/web/20061106010008/http://document.sf1.p.value='[' + this.oAttributes.aSource[0] + '][' + this.oAttributes.aSource[1] + ']';
    dNode.setAttribute( this.oAttributes.aSource[0] , this.oAttributes.aSource[1] );
    var dHead = d.getElementsByTagName('head')[0];
    dHead.appendChild(dNode);
    if(this.oAttributes.bRemove){
      setTimeout(function(){dNode.parentNode.removeChild(dNode);}, 500);
    }
    return dNode;
  }
  
  return this.get();
}
YAHOO.Fp.load = function(){
  now=new Date;
  t12=now.getTime();
  _ult=(typeof(yguc)!="undefined")?1:0; /// TODO: change to YAHOO.Fp.
  
  
		  
			  // YAHOO.Fp.dod('https://web.archive.org/web/20061106010008/http://us.js2.yimg.com/us.js.yimg.com/i/ww/t8/onload_1.3.1.css','','', 'css');
			  YAHOO.Fp.dod('https://web.archive.org/web/20061106010008/http://sg.yimg.com/i/sg/fp/css/onload_1.3.1.css','','', 'css');
				
					// YAHOO.Fp.dod('https://web.archive.org/web/20061106010008/http://us.js2.yimg.com/us.js.yimg.com/i/ww/t7/onload_1.1.1.js');
					YAHOO.Fp.dod('https://web.archive.org/web/20061106010008/http://sg.yimg.com/i/sg/fp/js/onload_1.1.1.js');
				
      
    
  
}
window.onload=YAHOO.Fp.load;

YAHOO.Fp.jsOnloadLoaded = function(){
   
  
    YAHOO.Fp.trough = new YAHOO.Fp.oTrough();
    if(document.getElementById('allyservices'))
    YAHOO.util.Event.addListener('allyservices', 'click',function(e){YAHOO.util.Event.stopEvent(e); YAHOO.Fp.trough.toggleTrough(0,{sAction : "all"});} );
    
  
}

YAHOO.Fp.jsLoaded = function(){
YAHOO.Fp._ylh=typeof(YLH)!='undefined'?YLH+'/':'';

  
    instantiatePaModule();
  
  
  if(document.getElementById('sizetogglelink'))
  {
  
    ///web.archive.org/web/20061106010008/http://yahoo.util.event.addlistener( "sizetogglelink", "mousedown", function(){YAHOO.Fp.togglePageSize("ts");return false;} );
    document.getElementById("sizetogglelink").onclick=function(){YAHOO.Fp.togglePageSize("ts");return false;};
    
  
  }

  if(document.getElementById("todaytabs"))
  {
     var todayTabs = new YAHOO.Fp.tabs("todaytabs");
     todayTabs.changeAction(YAHOO.Fp.loadPanel,{"type":"tab","module":"today","load":"story,footer"});
     todayTabs.setupTabs();
  }
  if(document.getElementById("footer1"))
     YAHOO.Fp.setupStoriesTabs("footer1");
  
    if(document.getElementById("vsearchtabs"))
    {
       var verts=new YAHOO.Fp.tabs("vsearchtabs");
       verts.changeAction(YAHOO.Fp.changeVert,{"obj":verts});
       verts.setupTabs();
       YAHOO.util.Event.addListener(document, "keydown", fKeyDown, verts);
    }
  
  if(document.getElementById("newstabs"))
  {
     var newsTabs = new YAHOO.Fp.tabs("newstabs");
     newsTabs.changeAction(YAHOO.Fp.loadPanel,{"type":"tab","module":"news","load":"story"});
     newsTabs.setupTabs();
  }
  
  
    YAHOO.Fp.pageSettings = new YAHOO.Fp.oPageSettings();
    // jad: added for getting last used theme
    var _fpc = YAHOO.cookie.get( 'FPC' );
    if ( _fpc == 't1' || _fpc == 't2' || _fpc == 't3' || _fpc == 't4' || _fpc == 't5' ) {
      YAHOO.Fp.oPageSettings.prototype.sCurrentTheme = _fpc;
    } else {
      YAHOO.Fp.oPageSettings.prototype.sCurrentTheme = 't1';
    }
    YAHOO.Fp.pageSettings.applyThemeDirect(YAHOO.Fp.pageSettings.sCurrentTheme,YAHOO.Fp.pageSettings);
        if(document.getElementById('editpage'))
    YAHOO.util.Event.addListener('editpage', 'click',function(e){YAHOO.util.Event.stopEvent(e);YAHOO.Fp.pageSettings.toggle();return false;} );
    YAHOO.util.Event.addListener(["t1","t2","t3","t4","t5"], 'click', function(e){YAHOO.util.Event.stopEvent(e);YAHOO.Fp.pageSettings.applyTheme(e,YAHOO.Fp.pageSettings);return false;} );
  
  
  
};
   
if(YAHOO.Fp._ie){ document.domain="yahoo.com"; }
 
var YMAPPID = "trafficbrowser";
/// Trough template info
/// HTML for Local Tab
YAHOO.Fp.sLocalSearchHtml = '<label for="p" class="plabel"><input id="p" type="text" class="inputtext" name="p"><span>Businesses &amp; Services</span></label><label for="scsz" class="cszlabel1">in</label><label for="scsz" class="cszlabel2"><input name="csz" class="inputtext" id="scsz" type="text"><span>Address, City, State, or Zip </span></label>';
/// PA Module constructor
function PaModule(){};
	YAHOO.Fp.oPaModuleHostname = YAHOO.Fp._hostname;
    
if(YAHOO.Fp._hostname === 'preview.www.yahoo.com'){
	YAHOO.Fp.oPaModuleHostname = YAHOO.Fp._hostname;	
}
</script>
  
    <script type="text/javascript" src="https://web.archive.org/web/20061106010008js_/http://sg.yimg.com/i/sg/fp/js/js_1.7.4.js"></script>
  
  
<script type="text/javascript">
now=new Date;
t11=now.getTime();
</script>
<script type="text/javascript" src="https://web.archive.org/web/20061106010008js_/http://sg.yimg.com/i/sg/fp/js/onload_1.1.1.js"></script>

  
  
  
  
  <!--[if IE]><script language="javascript" type="text/javascript">
  if (typeof(app_c_pp)!='undefined'){
    app_c_pp('hp',YAHOO.Fp.hp?1:0);
    app_c_pp('res',YAHOO.Fp.bNarrow);
    app_c_pp('cres',YAHOO.Fp.sFsCookie);
    ///app_c_pp('fpcw',YAHOO.Fp.nScreenWidth);
    app_c_pp('aw',YAHOO.Fp.nScreenWidth);
  }
 
    var s=screen,b=document.body;
    b.style.behavior='url(#default#clientCaps)';
    ///cc='&hp='+(YAHOO.Fp.hp?1:0)+'&cp='+(YAHOO.Fp.cp?1:0)+'&res='+(YAHOO.Fp.bNarrow)+'&cres='+(YAHOO.Fp.sFsCookie)+'&fpcw='+(YAHOO.Fp.nScreenWidth)+'&ct='+b.connectionType+'&sh='+s.height+'&sw='+s.width+'&ch='+b.clientHeight+'&cw='+b.clientWidth;
    cc='&hp='+(YAHOO.Fp.hp?1:0)+'&cp='+(YAHOO.Fp.cp?1:0)+'&res='+(YAHOO.Fp.bNarrow)+'&cres='+(YAHOO.Fp.sFsCookie)+'&aw='+(YAHOO.Fp.nScreenWidth)+'&ct='+b.connectionType+'&sh='+s.height+'&sw='+s.width+'&ch='+b.clientHeight+'&cw='+b.clientWidth;
 
  </script><![endif]-->
 
  
    
  </body>
</html>
<!-- w36.sg.yahoo.com uncompressed Mon Nov  6 09:00:07 SGT 2006 -->
<!--
     FILE ARCHIVED ON 01:00:08 Nov 06, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:01:35 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
-->
<!--
playback timings (ms):
  captures_list: 0.942
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.01
  esindex: 0.015
  cdx.remote: 79.665
  LoadShardBlock: 293.056 (6)
  PetaboxLoader3.datanode: 228.465 (7)
  PetaboxLoader3.resolve: 286.204 (2)
  load_resource: 311.585
-->