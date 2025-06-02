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

var GeoIP = new Array();
GeoIP["REMOTE_IP"] = "207.241.229.43";
GeoIP["COUNTRY_CODE"] = "US";
GeoIP["REGION"] = "CA";
GeoIP["CITY"] = "San Francisco";
GeoIP["DMA_CODE"] = "807";
GeoIP["AREA_CODE"] = "415";
GeoIP["LATITUDE"] = "37.799000";
GeoIP["LONGITUDE"] = "-122.466003";
GeoIP["POSTAL_CODE"] = "94129";
GeoIP["MAYA_COUNTRY_CODE"] = 207;

for (var lhb_geo_data in GeoIP) {
    var lhb_geo_override = lhb_readCookie("GEOIP_"+lhb_geo_data);
    if (null != lhb_geo_override) {
        GeoIP[lhb_geo_data] = lhb_geo_override;
    }
}

function lhb_readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {c = c.substring(1,c.length);}
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

function lhb_getEscapedHeaderHTML() {
    return "%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20hdrBr%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22hdrBr%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20hdrBrBck%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22hdrBrBck%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20hdrBrBck%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20genHdr%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22genHdr%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20general%20lnks%20--%3E%3Cdiv%20id%3D%22genLnks%22%3E%3Ca%20href%3D%22http%3A%2F%2Fwww.lycos.com%2F%22%20target%3D%22_top%22%3ELycos%20Home%3C%2Fa%3E%26nbsp%3B%26nbsp%3B%3Cspan%20class%3D%22vert%22%3E%7C%3C%2Fspan%3E%26nbsp%3B%26nbsp%3B%3Cimg%20src%3D%22http%3A%2F%2Fly.lygo.com%2Fly%2Fhb%2Fimg%2Fmail.gif%22%20width%3D%2214%22%20height%3D%229%22%20alt%3D%22Lycos%20Mail%22%20class%3D%22mailImg%22%2F%3E%26nbsp%3B%26nbsp%3B%3Ca%20href%3D%22http%3A%2F%2Fmail.lycos.com%2F%22%20class%3D%22mail%22%20target%3D%22_top%22%3ELycos%20Mail%3C%2Fa%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20general%20lnks%20--%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20tR%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22tR%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20srchFrm%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cform%20id%3D%22srchFrm%22%20action%3D%22http%3A%2F%2Fsearch.lycos.com%2Findex.php%22%20target%3D%22_top%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20srch%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22srch%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchRow1Ctnt%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchLab%22%3E%3Cdiv%20id%3D%22labImg%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchTxt%22%3ESearch%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchField%22%3E%3Cinput%20type%3D%22text%22%20name%3D%22query%22%20class%3D%22fld%22%20value%3D%22%22%2F%3E%3Cinput%20type%3D%22hidden%22%20name%3D%22src%22%20value%3D%22hb7%22%20%2F%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchBtn%22%3E%3Cinput%20type%3D%22image%22%20class%3D%22srchImg%22%20src%3D%22http%3A%2F%2Fc.lygo.com%2Fs.gif%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchRow1Shdw%22%3E%3Cimg%20src%3D%22http%3A%2F%2Fc.lygo.com%2Fs.gif%22%20width%3D%221%22%20height%3D%221%22%20border%3D%220%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20srch%20--%3E%3C%2Fform%3E%3C%21--END%20srchFrm%20--%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20tR%20--%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20genHdr%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20hdrBr%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20setup%20space%20--%3E%3Cdiv%20id%3D%22spc%22%3E%3C%2Fdiv%3E%3C%21--%20END%20setup%20space%20--%3E";
}

function lhb_drawHeader() {
    if (!lhb_handleCanada()) {
        lhb_insertStyleSheets();
        document.write(unescape(lhb_getEscapedHeaderHTML()));
    }
}

function lhb_handleCanada() {
    return false;
}

function lhb_insertStyleSheets() {
    lhb_insertStylesheet("https://web.archive.org/web/20080522032737/http://hb.lycos.com/css/hb.css");
    lhb_insertStylesheet("https://web.archive.org/web/20080522032737/http://hb.lycos.com/css/about.css");
}


function lhb_createHeaderElement() {
    header = Document.createElement("div");
    header.innerHTML = unescape(lhb_getEscapedHeaderHTML());
    return header;
}

function lhb_getEscapedFooterHTML() {
    return "%3C%21--%20BEGIN%20footer%20--%3E%0A%3Cdiv%20id%3D%22lyFtr%22%3E%0A%3Ca%20href%3D%22http%3A%2F%2Finfo.lycos.com%2Flycosinfo.asp%22%3ECompany%20Info%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Finfo.lycos.com%2Fprivacy%2Fprivacy.html%22%3EPrivacy%20Policy%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Finfo.lycos.com%2Flegal%2Flegal.html%22%3ETerms%20of%20Service%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Finfo.lycos.com%2Fjobs%2Fjobs.html%22%3EJobs%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Fadvertising.lycos.com%2Fcontactus.html%22%3EAdvertise%20With%20Us%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Fwww.lycos.com%2Fretriever.html%22%3ERetriever%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Fwww.help.lycos.com%22%3EHelp%3C%2Fa%3E%0A%3Cbr%2F%3E%0ACopyright%20%26%23169%3B%202008%20Lycos%20Inc.%20All%20Rights%20Reserved.%0A%3C%2Fdiv%3E%0A%3C%21--%20END%20footer%20--%3E";
}

function lhb_drawFooter() {
    document.write(unescape(lhb_getEscapedFooterHTML()));
}

function lhb_createFooterElement() {
    footer = document.createElement("p");
    footer.innerHTML = unescape(lhb_getEscapedFooterHTML());
    return footer;
}

function lhb_insertStylesheet(style_uri) {
    if (document.createStyleSheet) {
        this.document.createStyleSheet(style_uri);
    } else {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = style_uri;
        link.media = "screen";
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}

function lhb_insertScript(url) {
    var script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    script.setAttribute("src", url);
    document.getElementsByTagName("head")[0].appendChild(script);
}




}
/*
     FILE ARCHIVED ON 03:27:37 May 22, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:30:15 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.53
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.014
  esindex: 0.009
  cdx.remote: 7.92
  LoadShardBlock: 256.097 (6)
  PetaboxLoader3.datanode: 375.691 (7)
  load_resource: 389.426
  PetaboxLoader3.resolve: 116.861
*/