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

if(!window.onerror){
	try{window.onerror = function(){try{return location.href.indexOf("stage") == -1 && location.href.indexOf("release") == -1 && location.href.indexOf("myspace") != -1;}catch(ex){} return true; }}catch(e){}
}

//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjax.js
Function.__typeName="Function";Function.__class=true;Function.createCallback=function(b,a){return function(){var e=arguments.length;if(e>0){var d=[];for(var c=0;c<e;c++)d[c]=arguments[c];d[e]=a;return b.apply(this,d)}return b.call(this,a)}};Function.createDelegate=function(a,b){return function(){return b.apply(a,arguments)}};Function.emptyFunction=Function.emptyMethod=function(){};Function._validateParams=function(e,c){var a;a=Function._validateParameterCount(e,c);if(a){a.popStackFrame();return a}for(var b=0;b<e.length;b++){var d=c[Math.min(b,c.length-1)],f=d.name;if(d.parameterArray)f+="["+(b-c.length+1)+"]";a=Function._validateParameter(e[b],d,f);if(a){a.popStackFrame();return a}}return null};Function._validateParameterCount=function(e,a){var c=a.length,d=0;for(var b=0;b<a.length;b++)if(a[b].parameterArray)c=Number.MAX_VALUE;else if(!a[b].optional)d++;if(e.length<d||e.length>c){var f=Error.parameterCount();f.popStackFrame();return f}return null};Function._validateParameter=function(c,a,h){var b,g=a.type,l=!!a.integer,k=!!a.domElement,m=!!a.mayBeNull;b=Function._validateParameterType(c,g,l,k,m,h);if(b){b.popStackFrame();return b}var e=a.elementType,f=!!a.elementMayBeNull;if(g===Array&&typeof c!=="undefined"&&c!==null&&(e||!f)){var j=!!a.elementInteger,i=!!a.elementDomElement;for(var d=0;d<c.length;d++){var n=c[d];b=Function._validateParameterType(n,e,j,i,f,h+"["+d+"]");if(b){b.popStackFrame();return b}}}return null};Function._validateParameterType=function(b,c,k,j,h,d){var a;if(typeof b==="undefined")if(h)return null;else{a=Error.argumentUndefined(d);a.popStackFrame();return a}if(b===null)if(h)return null;else{a=Error.argumentNull(d);a.popStackFrame();return a}if(c&&c.__enum){if(typeof b!=="number"){a=Error.argumentType(d,Object.getType(b),c);a.popStackFrame();return a}if(b%1===0){var e=c.prototype;if(!c.__flags||b===0){for(var g in e)if(e[g]===b)return null}else{var i=b;for(var g in e){var f=e[g];if(f===0)continue;if((f&b)===f)i-=f;if(i===0)return null}}}a=Error.argumentOutOfRange(d,b,String.format(Sys.Res.enumInvalidValue,b,c.getName()));a.popStackFrame();return a}if(j&&b!==window&&b!==document&&!(window.HTMLElement&&b instanceof HTMLElement)&&typeof b.nodeName!=="string"){a=Error.argument(d,Sys.Res.argumentDomElement);a.popStackFrame();return a}if(c&&!c.isInstanceOfType(b)){a=Error.argumentType(d,Object.getType(b),c);a.popStackFrame();return a}if(c===Number&&k)if(b%1!==0){a=Error.argumentOutOfRange(d,b,Sys.Res.argumentInteger);a.popStackFrame();return a}return null};Error.__typeName="Error";Error.__class=true;Error.create=function(d,b){var a=new Error(d);a.message=d;if(b)for(var c in b)a[c]=b[c];a.popStackFrame();return a};Error.argument=function(a,c){var b="Sys.ArgumentException: "+(c?c:Sys.Res.argument);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentException",paramName:a});d.popStackFrame();return d};Error.argumentNull=function(a,c){var b="Sys.ArgumentNullException: "+(c?c:Sys.Res.argumentNull);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentNullException",paramName:a});d.popStackFrame();return d};Error.argumentOutOfRange=function(c,a,d){var b="Sys.ArgumentOutOfRangeException: "+(d?d:Sys.Res.argumentOutOfRange);if(c)b+="\n"+String.format(Sys.Res.paramName,c);if(typeof a!=="undefined"&&a!==null)b+="\n"+String.format(Sys.Res.actualValue,a);var e=Error.create(b,{name:"Sys.ArgumentOutOfRangeException",paramName:c,actualValue:a});e.popStackFrame();return e};Error.argumentType=function(d,c,b,e){var a="Sys.ArgumentTypeException: ";if(e)a+=e;else if(c&&b)a+=String.format(Sys.Res.argumentTypeWithTypes,c.getName(),b.getName());else a+=Sys.Res.argumentType;if(d)a+="\n"+String.format(Sys.Res.paramName,d);var f=Error.create(a,{name:"Sys.ArgumentTypeException",paramName:d,actualType:c,expectedType:b});f.popStackFrame();return f};Error.argumentUndefined=function(a,c){var b="Sys.ArgumentUndefinedException: "+(c?c:Sys.Res.argumentUndefined);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentUndefinedException",paramName:a});d.popStackFrame();return d};Error.format=function(a){var c="Sys.FormatException: "+(a?a:Sys.Res.format),b=Error.create(c,{name:"Sys.FormatException"});b.popStackFrame();return b};Error.invalidOperation=function(a){var c="Sys.InvalidOperationException: "+(a?a:Sys.Res.invalidOperation),b=Error.create(c,{name:"Sys.InvalidOperationException"});b.popStackFrame();return b};Error.notImplemented=function(a){var c="Sys.NotImplementedException: "+(a?a:Sys.Res.notImplemented),b=Error.create(c,{name:"Sys.NotImplementedException"});b.popStackFrame();return b};Error.parameterCount=function(a){var c="Sys.ParameterCountException: "+(a?a:Sys.Res.parameterCount),b=Error.create(c,{name:"Sys.ParameterCountException"});b.popStackFrame();return b};Error.prototype.popStackFrame=function(){if(typeof this.stack==="undefined"||this.stack===null||typeof this.fileName==="undefined"||this.fileName===null||typeof this.lineNumber==="undefined"||this.lineNumber===null)return;var a=this.stack.split("\n"),c=a[0],e=this.fileName+":"+this.lineNumber;while(typeof c!=="undefined"&&c!==null&&c.indexOf(e)===-1){a.shift();c=a[0]}var d=a[1];if(typeof d==="undefined"||d===null)return;var b=d.match(/@(.*):(\d+)$/);if(typeof b==="undefined"||b===null)return;this.fileName=b[1];this.lineNumber=parseInt(b[2]);a.shift();this.stack=a.join("\n")};if(!window)this.window=this;window.Type=Function;window.__rootNamespaces=[];window.__registeredTypes={};Type.prototype.callBaseMethod=function(a,d,b){var c=this.getBaseMethod(a,d);if(!b)return c.apply(a);else return c.apply(a,b)};Type.prototype.getBaseMethod=function(d,c){var b=this.getBaseType();if(b){var a=b.prototype[c];return a instanceof Function?a:null}return null};Type.prototype.getBaseType=function(){return typeof this.__baseType==="undefined"?null:this.__baseType};Type.prototype.getInterfaces=function(){var a=[],b=this;while(b){var c=b.__interfaces;if(c)for(var d=0,f=c.length;d<f;d++){var e=c[d];if(!Array.contains(a,e))a[a.length]=e}b=b.__baseType}return a};Type.prototype.getName=function(){return typeof this.__typeName==="undefined"?"":this.__typeName};Type.prototype.implementsInterface=function(d){this.resolveInheritance();var c=d.getName(),a=this.__interfaceCache;if(a){var e=a[c];if(typeof e!=="undefined")return e}else a=this.__interfaceCache={};var b=this;while(b){var f=b.__interfaces;if(f)if(Array.indexOf(f,d)!==-1)return a[c]=true;b=b.__baseType}return a[c]=false};Type.prototype.inheritsFrom=function(b){this.resolveInheritance();var a=this.__baseType;while(a){if(a===b)return true;a=a.__baseType}return false};Type.prototype.initializeBase=function(a,b){this.resolveInheritance();if(this.__baseType)if(!b)this.__baseType.apply(a);else this.__baseType.apply(a,b);return a};Type.prototype.isImplementedBy=function(a){if(typeof a==="undefined"||a===null)return false;var b=Object.getType(a);return !!(b.implementsInterface&&b.implementsInterface(this))};Type.prototype.isInstanceOfType=function(b){if(typeof b==="undefined"||b===null)return false;if(b instanceof this)return true;var a=Object.getType(b);return !!(a===this)||a.inheritsFrom&&a.inheritsFrom(this)||a.implementsInterface&&a.implementsInterface(this)};Type.prototype.registerClass=function(c,b,d){this.prototype.constructor=this;this.__typeName=c;this.__class=true;if(b){this.__baseType=b;this.__basePrototypePending=true}if(!window.__classes)window.__classes={};window.__classes[c.toUpperCase()]=this;if(d){this.__interfaces=[];for(var a=2;a<arguments.length;a++){var e=arguments[a];this.__interfaces.push(e)}}return this};Type.prototype.registerInterface=function(a){this.prototype.constructor=this;this.__typeName=a;this.__interface=true;return this};Type.prototype.resolveInheritance=function(){if(this.__basePrototypePending){var b=this.__baseType;b.resolveInheritance();for(var a in b.prototype){var c=b.prototype[a];if(!this.prototype[a])this.prototype[a]=c}delete this.__basePrototypePending}};Type.getRootNamespaces=function(){return Array.clone(window.__rootNamespaces)};Type.isClass=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__class};Type.isInterface=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__interface};Type.isNamespace=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__namespace};Type.parse=function(typeName,ns){var fn;if(ns){if(!window.__classes)return null;fn=window.__classes[ns.getName().toUpperCase()+"."+typeName.toUpperCase()];return fn||null}if(!typeName)return null;if(!Type.__htClasses)Type.__htClasses={};fn=Type.__htClasses[typeName];if(!fn){fn=eval(typeName);Type.__htClasses[typeName]=fn}return fn};Type.registerNamespace=function(f){var d=window,c=f.split(".");for(var b=0;b<c.length;b++){var e=c[b],a=d[e];if(!a){a=d[e]={};if(b===0)window.__rootNamespaces[window.__rootNamespaces.length]=a;a.__namespace=true;a.__typeName=c.slice(0,b+1).join(".");a.getName=function(){return this.__typeName}}d=a}};Object.__typeName="Object";Object.__class=true;Object.getType=function(b){var a=b.constructor;if(!a||typeof a!=="function"||!a.__typeName||a.__typeName==="Object")return Object;return a};Object.getTypeName=function(a){return Object.getType(a).getName()};Boolean.__typeName="Boolean";Boolean.__class=true;Boolean.parse=function(b){var a=b.trim().toLowerCase();if(a==="false")return false;if(a==="true")return true};Date.__typeName="Date";Date.__class=true;Date._appendPreOrPostMatch=function(e,b){var d=0,a=false;for(var c=0,g=e.length;c<g;c++){var f=e.charAt(c);switch(f){case "'":if(a)b.append("'");else d++;a=false;break;case "\\":if(a)b.append("\\");a=!a;break;default:b.append(f);a=false;break}}return d};Date._expandFormat=function(a,b){if(!b)b="F";if(b.length===1)switch(b){case "d":return a.ShortDatePattern;case "D":return a.LongDatePattern;case "t":return a.ShortTimePattern;case "T":return a.LongTimePattern;case "F":return a.FullDateTimePattern;case "M":case "m":return a.MonthDayPattern;case "s":return a.SortableDateTimePattern;case "Y":case "y":return a.YearMonthPattern;default:throw Error.format(Sys.Res.formatInvalidString)}return b};Date._expandYear=function(c,a){if(a<100){var b=(new Date).getFullYear();a+=b-b%100;if(a>c.Calendar.TwoDigitYearMax)return a-100}return a};Date._getParseRegExp=function(b,e){if(!b._parseRegExp)b._parseRegExp={};else if(b._parseRegExp[e])return b._parseRegExp[e];var c=Date._expandFormat(b,e);c=c.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1");var a=new Sys.StringBuilder("^"),j=[],f=0,i=0,h=Date._getTokenRegExp(),d;while((d=h.exec(c))!==null){var l=c.slice(f,d.index);f=h.lastIndex;i+=Date._appendPreOrPostMatch(l,a);if(i%2===1){a.append(d[0]);continue}switch(d[0]){case "dddd":case "ddd":case "MMMM":case "MMM":a.append("(\\D+)");break;case "tt":case "t":a.append("(\\D*)");break;case "yyyy":a.append("(\\d{4})");break;case "fff":a.append("(\\d{3})");break;case "ff":a.append("(\\d{2})");break;case "f":a.append("(\\d)");break;case "dd":case "d":case "MM":case "M":case "yy":case "y":case "HH":case "H":case "hh":case "h":case "mm":case "m":case "ss":case "s":a.append("(\\d\\d?)");break;case "zzz":a.append("([+-]?\\d\\d?:\\d{2})");break;case "zz":case "z":a.append("([+-]?\\d\\d?)");break}Array.add(j,d[0])}Date._appendPreOrPostMatch(c.slice(f),a);a.append("$");var k=a.toString().replace(/\s+/g,"\\s+"),g={"regExp":k,"groups":j};b._parseRegExp[e]=g;return g};Date._getTokenRegExp=function(){return /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g};Date.parseLocale=function(a){return Date._parse(a,Sys.CultureInfo.CurrentCulture,arguments)};Date.parseInvariant=function(a){return Date._parse(a,Sys.CultureInfo.InvariantCulture,arguments)};Date._parse=function(g,c,h){var e=false;for(var a=1,i=h.length;a<i;a++){var f=h[a];if(f){e=true;var b=Date._parseExact(g,f,c);if(b)return b}}if(!e){var d=c._getDateTimeFormats();for(var a=0,i=d.length;a<i;a++){var b=Date._parseExact(g,d[a],c);if(b)return b}}return null};Date._parseExact=function(s,y,j){s=s.trim();var m=j.dateTimeFormat,v=Date._getParseRegExp(m,y),x=(new RegExp(v.regExp)).exec(s);if(x!==null){var w=v.groups,f=null,c=null,h=null,g=null,d=0,n=0,o=0,e=0,k=null,r=false;for(var p=0,z=w.length;p<z;p++){var a=x[p+1];if(a)switch(w[p]){case "dd":case "d":h=Date._parseInt(a);if(h<1||h>31)return null;break;case "MMMM":c=j._getMonthIndex(a);if(c<0||c>11)return null;break;case "MMM":c=j._getAbbrMonthIndex(a);if(c<0||c>11)return null;break;case "M":case "MM":var c=Date._parseInt(a)-1;if(c<0||c>11)return null;break;case "y":case "yy":f=Date._expandYear(m,Date._parseInt(a));if(f<0||f>9999)return null;break;case "yyyy":f=Date._parseInt(a);if(f<0||f>9999)return null;break;case "h":case "hh":d=Date._parseInt(a);if(d===12)d=0;if(d<0||d>11)return null;break;case "H":case "HH":d=Date._parseInt(a);if(d<0||d>23)return null;break;case "m":case "mm":n=Date._parseInt(a);if(n<0||n>59)return null;break;case "s":case "ss":o=Date._parseInt(a);if(o<0||o>59)return null;break;case "tt":case "t":var u=a.toUpperCase();r=u===m.PMDesignator.toUpperCase();if(!r&&u!==m.AMDesignator.toUpperCase())return null;break;case "f":e=Date._parseInt(a)*100;if(e<0||e>999)return null;break;case "ff":e=Date._parseInt(a)*10;if(e<0||e>999)return null;break;case "fff":e=Date._parseInt(a);if(e<0||e>999)return null;break;case "dddd":g=j._getDayIndex(a);if(g<0||g>6)return null;break;case "ddd":g=j._getAbbrDayIndex(a);if(g<0||g>6)return null;break;case "zzz":var q=a.split(/:/);if(q.length!==2)return null;var i=Date._parseInt(q[0]);if(i<-12||i>13)return null;var l=Date._parseInt(q[1]);if(l<0||l>59)return null;k=i*60+(a.startsWith("-")?-l:l);break;case "z":case "zz":var i=Date._parseInt(a);if(i<-12||i>13)return null;k=i*60;break}}var b=new Date;if(f===null)f=b.getFullYear();if(c===null)c=b.getMonth();if(h===null)h=b.getDate();b.setFullYear(f,c,h);if(b.getDate()!==h)return null;if(g!==null&&b.getDay()!==g)return null;if(r&&d<12)d+=12;b.setHours(d,n,o,e);if(k!==null){var t=b.getMinutes()-(k+b.getTimezoneOffset());b.setHours(b.getHours()+parseInt(t/60),t%60)}return b}};Date._parseInt=function(a){return parseInt(a.replace(/^[\s0]+(\d+)$/,"$1"))};Date.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Date.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Date.prototype._toFormattedString=function(e,h){if(!e||e.length===0||e==="i")if(h&&h.name.length>0)return this.toLocaleString();else return this.toString();var d=h.dateTimeFormat;e=Date._expandFormat(d,e);var a=new Sys.StringBuilder,b;function c(a){if(a<10)return "0"+a;return a.toString()}function g(a){if(a<10)return "00"+a;if(a<100)return "0"+a;return a.toString()}var j=0,i=Date._getTokenRegExp();for(;true;){var l=i.lastIndex,f=i.exec(e),k=e.slice(l,f?f.index:e.length);j+=Date._appendPreOrPostMatch(k,a);if(!f)break;if(j%2===1){a.append(f[0]);continue}switch(f[0]){case "dddd":a.append(d.DayNames[this.getDay()]);break;case "ddd":a.append(d.AbbreviatedDayNames[this.getDay()]);break;case "dd":a.append(c(this.getDate()));break;case "d":a.append(this.getDate());break;case "MMMM":a.append(d.MonthNames[this.getMonth()]);break;case "MMM":a.append(d.AbbreviatedMonthNames[this.getMonth()]);break;case "MM":a.append(c(this.getMonth()+1));break;case "M":a.append(this.getMonth()+1);break;case "yyyy":a.append(this.getFullYear());break;case "yy":a.append(c(this.getFullYear()%100));break;case "y":a.append(this.getFullYear()%100);break;case "hh":b=this.getHours()%12;if(b===0)b=12;a.append(c(b));break;case "h":b=this.getHours()%12;if(b===0)b=12;a.append(b);break;case "HH":a.append(c(this.getHours()));break;case "H":a.append(this.getHours());break;case "mm":a.append(c(this.getMinutes()));break;case "m":a.append(this.getMinutes());break;case "ss":a.append(c(this.getSeconds()));break;case "s":a.append(this.getSeconds());break;case "tt":a.append(this.getHours()<12?d.AMDesignator:d.PMDesignator);break;case "t":a.append((this.getHours()<12?d.AMDesignator:d.PMDesignator).charAt(0));break;case "f":a.append(g(this.getMilliseconds()).charAt(0));break;case "ff":a.append(g(this.getMilliseconds()).substr(0,2));break;case "fff":a.append(g(this.getMilliseconds()));break;case "z":b=this.getTimezoneOffset()/60;a.append((b>=0?"+":"-")+Math.floor(Math.abs(b)));break;case "zz":b=this.getTimezoneOffset()/60;a.append((b>=0?"+":"-")+c(Math.floor(Math.abs(b))));break;case "zzz":b=this.getTimezoneOffset()/60;a.append((b>=0?"+":"-")+c(Math.floor(Math.abs(b)))+d.TimeSeparator+c(Math.abs(this.getTimezoneOffset()%60)));break}}return a.toString()};Number.__typeName="Number";Number.__class=true;Number.parseLocale=function(a){return Number._parse(a,Sys.CultureInfo.CurrentCulture)};Number.parseInvariant=function(a){return Number._parse(a,Sys.CultureInfo.InvariantCulture)};Number._parse=function(g,f){var a=g.trim();if(a.match(/infinity/i)!==null)return parseFloat(a);if(a.match(/^0x[a-f0-9]+$/i)!==null)return parseInt(a);var d=f.numberFormat,b=d.NumberDecimalSeparator,c=d.NumberGroupSeparator,e=new RegExp("^[+-]?[\\d\\"+c+"]*\\"+b+"?\\d*([eE][+-]?\\d+)?$");if(!a.match(e))return Number.NaN;a=a.split(c).join("");a=a.replace(b,".");return parseFloat(a)};Number.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Number.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Number.prototype._toFormattedString=function(d,j){if(!d||d.length===0||d==="i")if(j&&j.name.length>0)return this.toLocaleString();else return this.toString();var q=["n %","n%","%n"],p=["-n %","-n%","-%n"],r=["(n)","-n","- n","n-","n -"],o=["$n","n$","$ n","n $"],n=["($n)","-$n","$-n","$n-","(n$)","-n$","n-$","n$-","-n $","-$ n","n $-","$ n-","$ -n","n- $","($ n)","(n $)"];function i(p,k,j,l,o){var e=j[0],g=1,c=p.toString(),a="",m="",i=c.split(".");if(i.length>1){c=i[0];a=i[1];var h=a.split(/e/i);if(h.length>1){a=h[0];m="e"+h[1]}}if(k>0){var f=a.length-k;if(f>0)a=a.slice(0,k);else if(f<0)for(var n=0;n<Math.abs(f);n++)a+="0";a=o+a}else a="";a+=m;var b=c.length-1,d="";while(b>=0){if(e===0||e>b)if(d.length>0)return c.slice(0,b+1)+l+d+a;else return c.slice(0,b+1)+a;if(d.length>0)d=c.slice(b-e+1,b+1)+l+d;else d=c.slice(b-e+1,b+1);b-=e;if(g<j.length){e=j[g];g++}}return c.slice(0,b+1)+l+d+a}var a=j.numberFormat,e=Math.abs(this);if(!d)d="D";var b=-1;if(d.length>1)b=parseInt(d.slice(1));var c;switch(d.charAt(0)){case "d":case "D":c="n";if(b!==-1){var g=""+e,k=b-g.length;if(k>0)for(var m=0;m<k;m++)g="0"+g;e=g}if(this<0)e=-e;break;case "c":case "C":if(this<0)c=n[a.CurrencyNegativePattern];else c=o[a.CurrencyPositivePattern];if(b===-1)b=a.CurrencyDecimalDigits;e=i(Math.abs(this),b,a.CurrencyGroupSizes,a.CurrencyGroupSeparator,a.CurrencyDecimalSeparator);break;case "n":case "N":if(this<0)c=r[a.NumberNegativePattern];else c="n";if(b===-1)b=a.NumberDecimalDigits;e=i(Math.abs(this),b,a.NumberGroupSizes,a.NumberGroupSeparator,a.NumberDecimalSeparator);break;case "p":case "P":if(this<0)c=p[a.PercentNegativePattern];else c=q[a.PercentPositivePattern];if(b===-1)b=a.PercentDecimalDigits;e=i(Math.abs(this),b,a.PercentGroupSizes,a.PercentGroupSeparator,a.PercentDecimalSeparator);break;default:throw Error.format(Sys.Res.formatBadFormatSpecifier)}var l=/n|\$|-|%/g,f="";for(;true;){var s=l.lastIndex,h=l.exec(c);f+=c.slice(s,h?h.index:c.length);if(!h)break;switch(h[0]){case "n":f+=e;break;case "$":f+=a.CurrencySymbol;break;case "-":f+=a.NegativeSign;break;case "%":f+=a.PercentSymbol;break}}return f};RegExp.__typeName="RegExp";RegExp.__class=true;Array.__typeName="Array";Array.__class=true;Array.add=Array.enqueue=function(a,b){a[a.length]=b};Array.addRange=function(a,b){a.push.apply(a,b)};Array.clear=function(a){a.length=0};Array.clone=function(a){if(a.length===1)return [a[0]];else return Array.apply(null,a)};Array.contains=function(a,b){return Array.indexOf(a,b)>=0};Array.dequeue=function(a){return a.shift()};Array.forEach=function(b,e,d){for(var a=0,f=b.length;a<f;a++){var c=b[a];if(typeof c!=="undefined")e.call(d,c,a,b)}};Array.indexOf=function(d,e,a){if(typeof e==="undefined")return -1;var c=d.length;if(c!==0){a=a-0;if(isNaN(a))a=0;else{if(isFinite(a))a=a-a%1;if(a<0)a=Math.max(0,c+a)}for(var b=a;b<c;b++)if(typeof d[b]!=="undefined"&&d[b]===e)return b}return -1};Array.insert=function(a,b,c){a.splice(b,0,c)};Array.parse=function(value){if(!value)return [];return eval(value)};Array.remove=function(b,c){var a=Array.indexOf(b,c);if(a>=0)b.splice(a,1);return a>=0};Array.removeAt=function(a,b){a.splice(b,1)};String.__typeName="String";String.__class=true;String.prototype.endsWith=function(a){return this.substr(this.length-a.length)===a};String.prototype.startsWith=function(a){return this.substr(0,a.length)===a};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.trimEnd=function(){return this.replace(/\s+$/,"")};String.prototype.trimStart=function(){return this.replace(/^\s+/,"")};String.format=function(){return String._toFormattedString(false,arguments)};String.localeFormat=function(){return String._toFormattedString(true,arguments)};String._toFormattedString=function(l,j){var c="",e=j[0];for(var a=0;true;){var f=e.indexOf("{",a),d=e.indexOf("}",a);if(f<0&&d<0){c+=e.slice(a);break}if(d>0&&(d<f||f<0)){c+=e.slice(a,d+1);a=d+2;continue}c+=e.slice(a,f);a=f+1;if(e.charAt(a)==="{"){c+="{";a++;continue}if(d<0)break;var h=e.substring(a,d),g=h.indexOf(":"),k=parseInt(g<0?h:h.substring(0,g))+1,i=g<0?"":h.substring(g+1),b=j[k];if(typeof b==="undefined"||b===null)b="";if(b.toFormattedString)c+=b.toFormattedString(i);else if(l&&b.localeFormat)c+=b.localeFormat(i);else if(b.format)c+=b.format(i);else c+=b.toString();a=d+1}return c};Type.registerNamespace("Sys");Sys.IDisposable=function(){};Sys.IDisposable.prototype={};Sys.IDisposable.registerInterface("Sys.IDisposable");Sys.StringBuilder=function(a){this._parts=typeof a!=="undefined"&&a!==null&&a!==""?[a.toString()]:[];this._value={};this._len=0};Sys.StringBuilder.prototype={append:function(a){this._parts[this._parts.length]=a},appendLine:function(a){this._parts[this._parts.length]=typeof a==="undefined"||a===null||a===""?"\r\n":a+"\r\n"},clear:function(){this._parts=[];this._value={};this._len=0},isEmpty:function(){if(this._parts.length===0)return true;return this.toString()===""},toString:function(a){a=a||"";var b=this._parts;if(this._len!==b.length){this._value={};this._len=b.length}var d=this._value;if(typeof d[a]==="undefined"){if(a!=="")for(var c=0;c<b.length;)if(typeof b[c]==="undefined"||b[c]===""||b[c]===null)b.splice(c,1);else c++;d[a]=this._parts.join(a)}return d[a]}};Sys.StringBuilder.registerClass("Sys.StringBuilder");if(!window.XMLHttpRequest)window.XMLHttpRequest=function(){var b=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];for(var a=0;a<b.length;a++)try{var c=new ActiveXObject(b[a]);return c}catch(d){}return null};Sys.Browser={};Sys.Browser.InternetExplorer={};Sys.Browser.Firefox={};Sys.Browser.Safari={};Sys.Browser.Opera={};Sys.Browser.agent=null;Sys.Browser.hasDebuggerStatement=false;Sys.Browser.name=navigator.appName;Sys.Browser.version=parseFloat(navigator.appVersion);if(navigator.userAgent.indexOf(" MSIE ")>-1){Sys.Browser.agent=Sys.Browser.InternetExplorer;Sys.Browser.version=parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" Firefox/")>-1){Sys.Browser.agent=Sys.Browser.Firefox;Sys.Browser.version=parseFloat(navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1]);Sys.Browser.name="Firefox";Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" Safari/")>-1){Sys.Browser.agent=Sys.Browser.Safari;Sys.Browser.version=parseFloat(navigator.userAgent.match(/Safari\/(\d+\.\d+)/)[1]);Sys.Browser.name="Safari"}else if(navigator.userAgent.indexOf("Opera/")>-1)Sys.Browser.agent=Sys.Browser.Opera;Type.registerNamespace("Sys.UI");Sys._Debug=function(){};Sys._Debug.prototype={_appendConsole:function(a){if(typeof Debug!=="undefined"&&Debug.writeln)Debug.writeln(a);if(window.console&&window.console.log)window.console.log(a);if(window.opera)window.opera.postError(a);if(window.debugService)window.debugService.trace(a)},_appendTrace:function(b){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value+=b+"\n"},assert:function(c,a,b){if(!c){a=b&&this.assert.caller?String.format(Sys.Res.assertFailedCaller,a,this.assert.caller):String.format(Sys.Res.assertFailed,a);if(confirm(String.format(Sys.Res.breakIntoDebugger,a)))this.fail(a)}},clearTrace:function(){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value=""},fail:function(message){this._appendConsole(message);if(Sys.Browser.hasDebuggerStatement)eval("debugger")},trace:function(a){this._appendConsole(a);this._appendTrace(a)},traceDump:function(a,b){var c=this._traceDump(a,b,true)},_traceDump:function(a,c,f,b,d){c=c?c:"traceDump";b=b?b:"";if(a===null){this.trace(b+c+": null");return}switch(typeof a){case "undefined":this.trace(b+c+": Undefined");break;case "number":case "string":case "boolean":this.trace(b+c+": "+a);break;default:if(Date.isInstanceOfType(a)||RegExp.isInstanceOfType(a)){this.trace(b+c+": "+a.toString());break}if(!d)d=[];else if(Array.contains(d,a)){this.trace(b+c+": ...");return}Array.add(d,a);if(a==window||a===document||window.HTMLElement&&a instanceof HTMLElement||typeof a.nodeName==="string"){var k=a.tagName?a.tagName:"DomElement";if(a.id)k+=" - "+a.id;this.trace(b+c+" {"+k+"}")}else{var i=Object.getTypeName(a);this.trace(b+c+(typeof i==="string"?" {"+i+"}":""));if(b===""||f){b+="    ";var e,j,l,g,h;if(Array.isInstanceOfType(a)){j=a.length;for(e=0;e<j;e++)this._traceDump(a[e],"["+e+"]",f,b,d)}else for(g in a){h=a[g];if(!Function.isInstanceOfType(h))this._traceDump(h,g,f,b,d)}}}Array.remove(d,a)}}};Sys._Debug.registerClass("Sys._Debug");Sys.Debug=new Sys._Debug;Sys.Debug.isDebug=false;function Sys$Enum$parse(c,e){var a,b,i;if(e){a=this.__lowerCaseValues;if(!a){this.__lowerCaseValues=a={};var g=this.prototype;for(var f in g)a[f.toLowerCase()]=g[f]}}else a=this.prototype;if(!this.__flags){i=e?c.toLowerCase():c;b=a[i.trim()];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c,this.__typeName));return b}else{var h=(e?c.toLowerCase():c).split(","),j=0;for(var d=h.length-1;d>=0;d--){var k=h[d].trim();b=a[k];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c.split(",")[d].trim(),this.__typeName));j|=b}return j}}function Sys$Enum$toString(c){if(typeof c==="undefined"||c===null)return this.__string;var d=this.prototype,a;if(!this.__flags||c===0){for(a in d)if(d[a]===c)return a}else{var b=this.__sortedValues;if(!b){b=[];for(a in d)b[b.length]={key:a,value:d[a]};b.sort(function(a,b){return a.value-b.value});this.__sortedValues=b}var e=[],g=c;for(a=b.length-1;a>=0;a--){var h=b[a],f=h.value;if(f===0)continue;if((f&c)===f){e[e.length]=h.key;g-=f;if(g===0)break}}if(e.length&&g===0)return e.reverse().join(", ")}return ""}Type.prototype.registerEnum=function(c,b){for(var a in this.prototype)this[a]=this.prototype[a];this.__typeName=c;this.parse=Sys$Enum$parse;this.__string=this.toString();this.toString=Sys$Enum$toString;this.__flags=b;this.__enum=true};Type.isEnum=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__enum};Type.isFlags=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__flags};Sys.EventHandlerList=function(){this._list={}};Sys.EventHandlerList.prototype={addHandler:function(b,a){Array.add(this._getEvent(b,true),a)},removeHandler:function(c,b){var a=this._getEvent(c);if(!a)return;Array.remove(a,b)},getHandler:function(b){var a=this._getEvent(b);if(!a||a.length===0)return null;a=Array.clone(a);if(!a._handler)a._handler=function(c,d){for(var b=0,e=a.length;b<e;b++)a[b](c,d)};return a._handler},_getEvent:function(a,b){if(!this._list[a]){if(!b)return null;this._list[a]=[]}return this._list[a]}};Sys.EventHandlerList.registerClass("Sys.EventHandlerList");Sys.EventArgs=function(){};Sys.EventArgs.registerClass("Sys.EventArgs");Sys.EventArgs.Empty=new Sys.EventArgs;Sys.CancelEventArgs=function(){Sys.CancelEventArgs.initializeBase(this);this._cancel=false};Sys.CancelEventArgs.prototype={get_cancel:function(){return this._cancel},set_cancel:function(a){this._cancel=a}};Sys.CancelEventArgs.registerClass("Sys.CancelEventArgs",Sys.EventArgs);Sys.INotifyPropertyChange=function(){};Sys.INotifyPropertyChange.prototype={};Sys.INotifyPropertyChange.registerInterface("Sys.INotifyPropertyChange");Sys.PropertyChangedEventArgs=function(a){Sys.PropertyChangedEventArgs.initializeBase(this);this._propertyName=a};Sys.PropertyChangedEventArgs.prototype={get_propertyName:function(){return this._propertyName}};Sys.PropertyChangedEventArgs.registerClass("Sys.PropertyChangedEventArgs",Sys.EventArgs);Sys.INotifyDisposing=function(){};Sys.INotifyDisposing.prototype={};Sys.INotifyDisposing.registerInterface("Sys.INotifyDisposing");Sys.Component=function(){if(Sys.Application)Sys.Application.registerDisposableObject(this)};Sys.Component.prototype={_id:null,_initialized:false,_updating:false,get_events:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_id:function(){return this._id},set_id:function(a){this._id=a},get_isInitialized:function(){return this._initialized},get_isUpdating:function(){return this._updating},add_disposing:function(a){this.get_events().addHandler("disposing",a)},remove_disposing:function(a){this.get_events().removeHandler("disposing",a)},add_propertyChanged:function(a){this.get_events().addHandler("propertyChanged",a)},remove_propertyChanged:function(a){this.get_events().removeHandler("propertyChanged",a)},beginUpdate:function(){this._updating=true},dispose:function(){if(this._events){var a=this._events.getHandler("disposing");if(a)a(this,Sys.EventArgs.Empty)}delete this._events;Sys.Application.unregisterDisposableObject(this);Sys.Application.removeComponent(this)},endUpdate:function(){this._updating=false;if(!this._initialized)this.initialize();this.updated()},initialize:function(){this._initialized=true},raisePropertyChanged:function(b){if(!this._events)return;var a=this._events.getHandler("propertyChanged");if(a)a(this,new Sys.PropertyChangedEventArgs(b))},updated:function(){}};Sys.Component.registerClass("Sys.Component",null,Sys.IDisposable,Sys.INotifyPropertyChange,Sys.INotifyDisposing);function Sys$Component$_setProperties(a,i){var d,j=Object.getType(a),e=j===Object||j===Sys.UI.DomElement,h=Sys.Component.isInstanceOfType(a)&&!a.get_isUpdating();if(h)a.beginUpdate();for(var c in i){var b=i[c],f=e?null:a["get_"+c];if(e||typeof f!=="function"){var k=a[c];if(!b||typeof b!=="object"||e&&!k)a[c]=b;else Sys$Component$_setProperties(k,b)}else{var l=a["set_"+c];if(typeof l==="function")l.apply(a,[b]);else if(b instanceof Array){d=f.apply(a);for(var g=0,m=d.length,n=b.length;g<n;g++,m++)d[m]=b[g]}else if(typeof b==="object"&&Object.getType(b)===Object){d=f.apply(a);Sys$Component$_setProperties(d,b)}}}if(h)a.endUpdate()}function Sys$Component$_setReferences(c,b){for(var a in b){var e=c["set_"+a],d=$find(b[a]);e.apply(c,[d])}}var $create=Sys.Component.create=function(h,f,d,c,g){var a=g?new h(g):new h,b=Sys.Application,i=b.get_isCreatingComponents();a.beginUpdate();if(f)Sys$Component$_setProperties(a,f);if(d)for(var e in d)a["add_"+e](d[e]);b._createdComponents[b._createdComponents.length]=a;if(a.get_id())b.addComponent(a);if(i)if(c)b._addComponentToSecondPass(a,c);else a.endUpdate();else{if(c)Sys$Component$_setReferences(a,c);a.endUpdate()}return a};Sys.UI.MouseButton=function(){throw Error.notImplemented()};Sys.UI.MouseButton.prototype={leftButton:0,middleButton:1,rightButton:2};Sys.UI.MouseButton.registerEnum("Sys.UI.MouseButton");Sys.UI.Key=function(){throw Error.notImplemented()};Sys.UI.Key.prototype={backspace:8,tab:9,enter:13,esc:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,del:127};Sys.UI.Key.registerEnum("Sys.UI.Key");Sys.UI.DomEvent=function(c){var a=c;this.rawEvent=a;this.altKey=a.altKey;if(typeof a.button!=="undefined")this.button=typeof a.which!=="undefined"?a.button:a.button===4?Sys.UI.MouseButton.middleButton:a.button===2?Sys.UI.MouseButton.rightButton:Sys.UI.MouseButton.leftButton;if(a.type==="keypress")this.charCode=a.charCode||a.keyCode;else if(a.keyCode&&a.keyCode===46)this.keyCode=127;else this.keyCode=a.keyCode;this.clientX=a.clientX;this.clientY=a.clientY;this.ctrlKey=a.ctrlKey;this.target=a.target?a.target:a.srcElement;if(this.target){var b=Sys.UI.DomElement.getLocation(this.target);this.offsetX=typeof a.offsetX!=="undefined"?a.offsetX:window.pageXOffset+(a.clientX||0)-b.x;this.offsetY=typeof a.offsetY!=="undefined"?a.offsetY:window.pageYOffset+(a.clientY||0)-b.y}this.screenX=a.screenX;this.screenY=a.screenY;this.shiftKey=a.shiftKey;this.type=a.type};Sys.UI.DomEvent.prototype={preventDefault:function(){if(this.rawEvent.preventDefault)this.rawEvent.preventDefault();else if(window.event)window.event.returnValue=false},stopPropagation:function(){if(this.rawEvent.stopPropagation)this.rawEvent.stopPropagation();else if(window.event)window.event.cancelBubble=true}};Sys.UI.DomEvent.registerClass("Sys.UI.DomEvent");var $addHandler=Sys.UI.DomEvent.addHandler=function(a,d,e){if(!a._events)a._events={};var c=a._events[d];if(!c)a._events[d]=c=[];var b;if(a.addEventListener){b=function(b){return e.call(a,new Sys.UI.DomEvent(b))};a.addEventListener(d,b,false)}else if(a.attachEvent){b=function(){return e.call(a,new Sys.UI.DomEvent(window.event))};a.attachEvent("on"+d,b)}c[c.length]={handler:e,browserHandler:b}},$addHandlers=Sys.UI.DomEvent.addHandlers=function(e,d,c){for(var b in d){var a=d[b];if(c)a=Function.createDelegate(c,a);$addHandler(e,b,a)}},$clearHandlers=Sys.UI.DomEvent.clearHandlers=function(a){if(a._events){var e=a._events;for(var b in e){var d=e[b];for(var c=d.length-1;c>=0;c--)$removeHandler(a,b,d[c].handler)}a._events=null}},$removeHandler=Sys.UI.DomEvent.removeHandler=function(a,e,f){var d=null,c=a._events[e],d=null;for(var b=0,g=c.length;b<g;b++)if(c[b].handler===f){d=c[b].browserHandler;break}if(a.removeEventListener)a.removeEventListener(e,d,false);else if(a.detachEvent)a.detachEvent("on"+e,d);c.splice(b,1)};Sys.IContainer=function(){};Sys.IContainer.prototype={};Sys.IContainer.registerInterface("Sys.IContainer");Sys._ScriptLoader=function(){this._scriptsToLoad=null;this._scriptLoadedDelegate=Function.createDelegate(this,this._scriptLoadedHandler)};Sys._ScriptLoader.prototype={dispose:function(){this._stopLoading();if(this._events)delete this._events;this._scriptLoadedDelegate=null},loadScripts:function(a,c,d,b){this._loading=true;this._allScriptsLoadedCallback=c;this._scriptLoadFailedCallback=d;this._scriptLoadTimeoutCallback=b;if(a>0)this._timeoutCookie=window.setTimeout(Function.createDelegate(this,this._scriptLoadTimeoutHandler),a*1000);this._loadScriptsInternal()},notifyScriptLoaded:function(){if(!this._loading)return;this._currentTask._notified++;if(Sys.Browser.agent===Sys.Browser.Safari)if(this._currentTask._notified===1)window.setTimeout(Function.createDelegate(this,function(){this._scriptLoadedHandler(this._currentTask.get_scriptElement(),true)}),0)},queueCustomScriptTag:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,a)},queueScriptBlock:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{text:a})},queueScriptReference:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{src:a})},_createScriptElement:function(c){var a=document.createElement("SCRIPT");a.type="text/javascript";for(var b in c)a[b]=c[b];return a},_loadScriptsInternal:function(){if(this._scriptsToLoad&&this._scriptsToLoad.length>0){var b=Array.dequeue(this._scriptsToLoad),a=this._createScriptElement(b);if(a.text&&Sys.Browser.agent===Sys.Browser.Safari){a.innerHTML=a.text;delete a.text}if(typeof b.src==="string"){this._currentTask=new Sys._ScriptLoaderTask(a,this._scriptLoadedDelegate);this._currentTask.execute()}else{document.getElementsByTagName("HEAD")[0].appendChild(a);Sys._ScriptLoader._clearScript(a);this._loadScriptsInternal()}}else{var c=this._allScriptsLoadedCallback;this._stopLoading();if(c)c(this)}},_raiseError:function(a){var c=this._scriptLoadFailedCallback,b=this._currentTask.get_scriptElement();this._stopLoading();if(c)c(this,b,a);else throw Sys._ScriptLoader._errorScriptLoadFailed(b.src,a)},_scriptLoadedHandler:function(a,b){if(b&&this._currentTask._notified)if(this._currentTask._notified>1)this._raiseError(true);else{Array.add(Sys._ScriptLoader._getLoadedScripts(),a.src);this._currentTask.dispose();this._currentTask=null;this._loadScriptsInternal()}else this._raiseError(false)},_scriptLoadTimeoutHandler:function(){var a=this._scriptLoadTimeoutCallback;this._stopLoading();if(a)a(this)},_stopLoading:function(){if(this._timeoutCookie){window.clearTimeout(this._timeoutCookie);this._timeoutCookie=null}if(this._currentTask){this._currentTask.dispose();this._currentTask=null}this._scriptsToLoad=null;this._loading=null;this._allScriptsLoadedCallback=null;this._scriptLoadFailedCallback=null;this._scriptLoadTimeoutCallback=null}};Sys._ScriptLoader.registerClass("Sys._ScriptLoader",null,Sys.IDisposable);Sys._ScriptLoader.getInstance=function(){var a=Sys._ScriptLoader._activeInstance;if(!a)a=Sys._ScriptLoader._activeInstance=new Sys._ScriptLoader;return a};Sys._ScriptLoader.isScriptLoaded=function(b){var a=document.createElement("script");a.src=b;return Array.contains(Sys._ScriptLoader._getLoadedScripts(),a.src)};Sys._ScriptLoader.readLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){var b=Sys._ScriptLoader._referencedScripts=[],c=document.getElementsByTagName("SCRIPT");for(i=c.length-1;i>=0;i--){var d=c[i],a=d.src;if(a.length)if(!Array.contains(b,a))Array.add(b,a)}}};Sys._ScriptLoader._clearScript=function(a){if(!Sys.Debug.isDebug)a.parentNode.removeChild(a)};Sys._ScriptLoader._errorScriptLoadFailed=function(b,d){var a;if(d)a=Sys.Res.scriptLoadMultipleCallbacks;else a=Sys.Res.scriptLoadFailed;var e="Sys.ScriptLoadFailedException: "+String.format(a,b),c=Error.create(e,{name:"Sys.ScriptLoadFailedException","scriptUrl":b});c.popStackFrame();return c};Sys._ScriptLoader._getLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){Sys._ScriptLoader._referencedScripts=[];Sys._ScriptLoader.readLoadedScripts()}return Sys._ScriptLoader._referencedScripts};Sys._ScriptLoaderTask=function(b,a){this._scriptElement=b;this._completedCallback=a;this._notified=0};Sys._ScriptLoaderTask.prototype={get_scriptElement:function(){return this._scriptElement},dispose:function(){if(this._disposed)return;this._disposed=true;this._removeScriptElementHandlers();Sys._ScriptLoader._clearScript(this._scriptElement);this._scriptElement=null},execute:function(){this._addScriptElementHandlers();document.getElementsByTagName("HEAD")[0].appendChild(this._scriptElement)},_addScriptElementHandlers:function(){this._scriptLoadDelegate=Function.createDelegate(this,this._scriptLoadHandler);if(Sys.Browser.agent!==Sys.Browser.InternetExplorer){this._scriptElement.readyState="loaded";$addHandler(this._scriptElement,"load",this._scriptLoadDelegate)}else $addHandler(this._scriptElement,"readystatechange",this._scriptLoadDelegate);this._scriptErrorDelegate=Function.createDelegate(this,this._scriptErrorHandler);$addHandler(this._scriptElement,"error",this._scriptErrorDelegate)},_removeScriptElementHandlers:function(){if(this._scriptLoadDelegate){var a=this.get_scriptElement();if(Sys.Browser.agent!==Sys.Browser.InternetExplorer)$removeHandler(a,"load",this._scriptLoadDelegate);else $removeHandler(a,"readystatechange",this._scriptLoadDelegate);$removeHandler(a,"error",this._scriptErrorDelegate);this._scriptErrorDelegate=null;this._scriptLoadDelegate=null}},_scriptErrorHandler:function(){if(this._disposed)return;this._completedCallback(this.get_scriptElement(),false)},_scriptLoadHandler:function(){if(this._disposed)return;var a=this.get_scriptElement();if(a.readyState!=="loaded"&&a.readyState!=="complete")return;var b=this;window.setTimeout(function(){b._completedCallback(a,true)},0)}};Sys._ScriptLoaderTask.registerClass("Sys._ScriptLoaderTask",null,Sys.IDisposable);Sys.ApplicationLoadEventArgs=function(b,a){Sys.ApplicationLoadEventArgs.initializeBase(this);this._components=b;this._isPartialLoad=a};Sys.ApplicationLoadEventArgs.prototype={get_components:function(){return this._components},get_isPartialLoad:function(){return this._isPartialLoad}};Sys.ApplicationLoadEventArgs.registerClass("Sys.ApplicationLoadEventArgs",Sys.EventArgs);Sys._Application=function(){Sys._Application.initializeBase(this);this._disposableObjects=[];this._components={};this._createdComponents=[];this._secondPassComponents=[];this._unloadHandlerDelegate=Function.createDelegate(this,this._unloadHandler);this._loadHandlerDelegate=Function.createDelegate(this,this._loadHandler);Sys.UI.DomEvent.addHandler(window,"unload",this._unloadHandlerDelegate);Sys.UI.DomEvent.addHandler(window,"load",this._loadHandlerDelegate)};Sys._Application.prototype={_creatingComponents:false,_disposing:false,get_isCreatingComponents:function(){return this._creatingComponents},add_load:function(a){this.get_events().addHandler("load",a)},remove_load:function(a){this.get_events().removeHandler("load",a)},add_init:function(a){if(this._initialized)a(this,Sys.EventArgs.Empty);else this.get_events().addHandler("init",a)},remove_init:function(a){this.get_events().removeHandler("init",a)},add_unload:function(a){this.get_events().addHandler("unload",a)},remove_unload:function(a){this.get_events().removeHandler("unload",a)},addComponent:function(a){this._components[a.get_id()]=a},beginCreateComponents:function(){this._creatingComponents=true},dispose:function(){if(!this._disposing){this._disposing=true;if(window.pageUnload)window.pageUnload(this,Sys.EventArgs.Empty);var c=this.get_events().getHandler("unload");if(c)c(this,Sys.EventArgs.Empty);var b=Array.clone(this._disposableObjects);for(var a=0,e=b.length;a<e;a++)b[a].dispose();Array.clear(this._disposableObjects);Sys.UI.DomEvent.removeHandler(window,"unload",this._unloadHandlerDelegate);if(this._loadHandlerDelegate){Sys.UI.DomEvent.removeHandler(window,"load",this._loadHandlerDelegate);this._loadHandlerDelegate=null}var d=Sys._ScriptLoader.getInstance();if(d)d.dispose();Sys._Application.callBaseMethod(this,"dispose")}},endCreateComponents:function(){var b=this._secondPassComponents;for(var a=0,d=b.length;a<d;a++){var c=b[a].component;Sys$Component$_setReferences(c,b[a].references);c.endUpdate()}this._secondPassComponents=[];this._creatingComponents=false},findComponent:function(b,a){return a?Sys.IContainer.isInstanceOfType(a)?a.findComponent(b):a[b]||null:Sys.Application._components[b]||null},getComponents:function(){var a=[],b=this._components;for(var c in b)a[a.length]=b[c];return a},initialize:function(){if(!this._initialized&&!this._initializing){this._initializing=true;window.setTimeout(Function.createDelegate(this,this._doInitialize),0)}},notifyScriptLoaded:function(){var a=Sys._ScriptLoader.getInstance();if(a)a.notifyScriptLoaded()},registerDisposableObject:function(a){if(!this._disposing)this._disposableObjects[this._disposableObjects.length]=a},raiseLoad:function(){var b=this.get_events().getHandler("load"),a=new Sys.ApplicationLoadEventArgs(Array.clone(this._createdComponents),!this._initializing);if(b)b(this,a);if(window.pageLoad)window.pageLoad(this,a);this._createdComponents=[]},removeComponent:function(b){var a=b.get_id();if(a)delete this._components[a]},unregisterDisposableObject:function(a){if(!this._disposing)Array.remove(this._disposableObjects,a)},_addComponentToSecondPass:function(b,a){this._secondPassComponents[this._secondPassComponents.length]={component:b,references:a}},_doInitialize:function(){Sys._Application.callBaseMethod(this,"initialize");var a=this.get_events().getHandler("init");if(a){this.beginCreateComponents();a(this,Sys.EventArgs.Empty);this.endCreateComponents()}this.raiseLoad();this._initializing=false},_loadHandler:function(){if(this._loadHandlerDelegate){Sys.UI.DomEvent.removeHandler(window,"load",this._loadHandlerDelegate);this._loadHandlerDelegate=null}this.initialize()},_unloadHandler:function(){this.dispose()}};Sys._Application.registerClass("Sys._Application",Sys.Component,Sys.IContainer);Sys.Application=new Sys._Application;var $find=Sys.Application.findComponent;Type.registerNamespace("Sys.Net");Sys.Net.WebRequestExecutor=function(){this._webRequest=null;this._resultObject=null};Sys.Net.WebRequestExecutor.prototype={get_webRequest:function(){return this._webRequest},_set_webRequest:function(a){this._webRequest=a},get_started:function(){throw Error.notImplemented()},get_responseAvailable:function(){throw Error.notImplemented()},get_timedOut:function(){throw Error.notImplemented()},get_aborted:function(){throw Error.notImplemented()},get_responseData:function(){throw Error.notImplemented()},get_statusCode:function(){throw Error.notImplemented()},get_statusText:function(){throw Error.notImplemented()},get_xml:function(){throw Error.notImplemented()},get_object:function(){if(!this._resultObject)this._resultObject=Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData());return this._resultObject},executeRequest:function(){throw Error.notImplemented()},abort:function(){throw Error.notImplemented()},getResponseHeader:function(){throw Error.notImplemented()},getAllResponseHeaders:function(){throw Error.notImplemented()}};Sys.Net.WebRequestExecutor.registerClass("Sys.Net.WebRequestExecutor");window.XMLDOM=function(d){if(!window.DOMParser){var c=["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument"];for(var b=0;b<c.length;b++)try{var a=new ActiveXObject(c[b]);a.async=false;a.loadXML(d);a.setProperty("SelectionLanguage","XPath");return a}catch(f){}return null}else try{var e=new window.DOMParser;return e.parseFromString(d,"text/xml")}catch(f){return null}return null};Sys.Net.XMLHttpExecutor=function(){Sys.Net.XMLHttpExecutor.initializeBase(this);var a=this;this._xmlHttpRequest=null;this._webRequest=null;this._responseAvailable=false;this._timedOut=false;this._timer=null;this._aborted=false;this._started=false;this._onReadyStateChange=function(){if(a._xmlHttpRequest.readyState===4){a._clearTimer();a._responseAvailable=true;a._webRequest.completed(Sys.EventArgs.Empty);if(a._xmlHttpRequest!=null){a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest=null}}};this._clearTimer=function(){if(a._timer!=null){window.clearTimeout(a._timer);a._timer=null}};this._onTimeout=function(){if(!a._responseAvailable){a._clearTimer();a._timedOut=true;a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest.abort();a._webRequest.completed(Sys.EventArgs.Empty);a._xmlHttpRequest=null}}};Sys.Net.XMLHttpExecutor.prototype={get_timedOut:function(){return this._timedOut},get_started:function(){return this._started},get_responseAvailable:function(){return this._responseAvailable},get_aborted:function(){return this._aborted},executeRequest:function(){this._webRequest=this.get_webRequest();var c=this._webRequest.get_body(),a=this._webRequest.get_headers();this._xmlHttpRequest=new XMLHttpRequest;this._xmlHttpRequest.onreadystatechange=this._onReadyStateChange;var e=this._webRequest.get_httpVerb();this._xmlHttpRequest.open(e,this._webRequest.getResolvedUrl(),true);if(a)for(var b in a){var f=a[b];if(typeof f!=="function")this._xmlHttpRequest.setRequestHeader(b,f)}if(e.toLowerCase()==="post"){if(a===null||!a["Content-Type"])this._xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if(!c)c=""}var d=this._webRequest.get_timeout();if(d>0)this._timer=window.setTimeout(Function.createDelegate(this,this._onTimeout),d);this._xmlHttpRequest.send(c);this._started=true},getResponseHeader:function(b){var a;try{a=this._xmlHttpRequest.getResponseHeader(b)}catch(c){}if(!a)a="";return a},getAllResponseHeaders:function(){return this._xmlHttpRequest.getAllResponseHeaders()},get_responseData:function(){return this._xmlHttpRequest.responseText},get_statusCode:function(){return this._xmlHttpRequest.status},get_statusText:function(){return this._xmlHttpRequest.statusText},get_xml:function(){var a=this._xmlHttpRequest.responseXML;if(!a||!a.documentElement){a=new XMLDOM(this._xmlHttpRequest.responseText);if(!a||!a.documentElement)return null}else if(navigator.userAgent.indexOf("MSIE")!==-1)a.setProperty("SelectionLanguage","XPath");if(a.documentElement.namespaceURI==="https://web.archive.org/web/20081216130713/http://www.mozilla.org/newlayout/xml/parsererror.xml"&&a.documentElement.tagName==="parsererror")return null;if(a.documentElement.firstChild&&a.documentElement.firstChild.tagName==="parsererror")return null;return a},abort:function(){if(this._aborted||this._responseAvailable||this._timedOut)return;this._aborted=true;this._clearTimer();if(this._xmlHttpRequest&&!this._responseAvailable){this._xmlHttpRequest.onreadystatechange=Function.emptyMethod;this._xmlHttpRequest.abort();this._xmlHttpRequest=null;var a=this._webRequest._get_eventHandlerList().getHandler("completed");if(a)a(this,Sys.EventArgs.Empty)}}};Sys.Net.XMLHttpExecutor.registerClass("Sys.Net.XMLHttpExecutor",Sys.Net.WebRequestExecutor);Sys.Net._WebRequestManager=function(){this._this=this;this._defaultTimeout=0;this._defaultExecutorType="Sys.Net.XMLHttpExecutor"};Sys.Net._WebRequestManager.prototype={add_invokingRequest:function(a){this._get_eventHandlerList().addHandler("invokingRequest",a)},remove_invokingRequest:function(a){this._get_eventHandlerList().removeHandler("invokingRequest",a)},add_completedRequest:function(a){this._get_eventHandlerList().addHandler("completedRequest",a)},remove_completedRequest:function(a){this._get_eventHandlerList().removeHandler("completedRequest",a)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_defaultTimeout:function(){return this._defaultTimeout},set_defaultTimeout:function(a){this._defaultTimeout=a},get_defaultExecutorType:function(){return this._defaultExecutorType},set_defaultExecutorType:function(a){this._defaultExecutorType=a},executeRequest:function(webRequest){var executor=webRequest.get_executor();if(!executor){var failed=false;try{var executorType=eval(this._defaultExecutorType);executor=new executorType}catch(a){failed=true}webRequest.set_executor(executor)}if(executor.get_aborted())return;var evArgs=new Sys.Net.NetworkRequestEventArgs(webRequest),handler=this._get_eventHandlerList().getHandler("invokingRequest");if(handler)handler(this,evArgs);if(!evArgs.get_cancel())executor.executeRequest()}};Sys.Net._WebRequestManager.registerClass("Sys.Net._WebRequestManager");Sys.Net.WebRequestManager=new Sys.Net._WebRequestManager;Sys.Net.NetworkRequestEventArgs=function(a){Sys.Net.NetworkRequestEventArgs.initializeBase(this);this._webRequest=a};Sys.Net.NetworkRequestEventArgs.prototype={get_webRequest:function(){return this._webRequest}};Sys.Net.NetworkRequestEventArgs.registerClass("Sys.Net.NetworkRequestEventArgs",Sys.CancelEventArgs);Sys.Net.WebRequest=function(){this._url="";this._headers={};this._body=null;this._userContext=null;this._httpVerb=null;this._executor=null;this._invokeCalled=false;this._timeout=0};Sys.Net.WebRequest.prototype={add_completed:function(a){this._get_eventHandlerList().addHandler("completed",a)},remove_completed:function(a){this._get_eventHandlerList().removeHandler("completed",a)},completed:function(b){var a=Sys.Net.WebRequestManager._get_eventHandlerList().getHandler("completedRequest");if(a)a(this._executor,b);a=this._get_eventHandlerList().getHandler("completed");if(a)a(this._executor,b)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_url:function(){return this._url},set_url:function(a){this._url=a},get_headers:function(){return this._headers},get_httpVerb:function(){if(this._httpVerb===null){if(this._body===null)return "GET";return "POST"}return this._httpVerb},set_httpVerb:function(a){this._httpVerb=a},get_body:function(){return this._body},set_body:function(a){this._body=a},get_userContext:function(){return this._userContext},set_userContext:function(a){this._userContext=a},get_executor:function(){return this._executor},set_executor:function(a){this._executor=a;this._executor._set_webRequest(this)},get_timeout:function(){if(this._timeout===0)return Sys.Net.WebRequestManager.get_defaultTimeout();return this._timeout},set_timeout:function(a){this._timeout=a},getResolvedUrl:function(){return Sys.Net.WebRequest._resolveUrl(this._url)},invoke:function(){Sys.Net.WebRequestManager.executeRequest(this);this._invokeCalled=true}};Sys.Net.WebRequest._resolveUrl=function(b,a){if(b&&b.indexOf("://")!==-1)return b;if(!a||a.length===0){var c=document.getElementsByTagName("base")[0];if(c&&c.href&&c.href.length>0)a=c.href;else a=document.URL}var d=a.indexOf("?");if(d!==-1)a=a.substr(0,d);a=a.substr(0,a.lastIndexOf("/")+1);if(!b||b.length===0)return a;if(b.charAt(0)==="/"){var e=a.indexOf("://"),g=a.indexOf("/",e+3);return a.substr(0,g)+b}else{var f=a.lastIndexOf("/");return a.substr(0,f+1)+b}};Sys.Net.WebRequest._createQueryString=function(d,b){if(!b)b=encodeURIComponent;var a=new Sys.StringBuilder,f=0;for(var c in d){var e=d[c];if(typeof e==="function")continue;var g=Sys.Serialization.JavaScriptSerializer.serialize(e);if(f!==0)a.append("&");a.append(c);a.append("=");a.append(b(g));f++}return a.toString()};Sys.Net.WebRequest._createUrl=function(a,b){if(!b)return a;var d=Sys.Net.WebRequest._createQueryString(b);if(d.length>0){var c="?";if(a&&a.indexOf("?")!==-1)c="&";return a+c+d}else return a};Sys.Net.WebRequest.registerClass("Sys.Net.WebRequest");Sys.Net.WebServiceProxy=function(){};Sys.Net.WebServiceProxy.prototype={set_timeout:function(a){this._timeout=a},get_timeout:function(){return this._timeout},set_defaultUserContext:function(a){this._userContext=a},get_defaultUserContext:function(){return this._userContext},set_defaultSucceededCallback:function(a){this._succeeded=a},get_defaultSucceededCallback:function(){return this._succeeded},set_defaultFailedCallback:function(a){this._failed=a},get_defaultFailedCallback:function(){return this._failed},set_path:function(a){this._path=a},get_path:function(){return this._path},_invoke:function(d,e,g,f,c,b,a){if(c===null||typeof c==="undefined")c=this.get_defaultSucceededCallback();if(b===null||typeof b==="undefined")b=this.get_defaultFailedCallback();if(a===null||typeof a==="undefined")a=this.get_defaultUserContext();return Sys.Net.WebServiceProxy.invoke(d,e,g,f,c,b,a,this.get_timeout())}};Sys.Net.WebServiceProxy.registerClass("Sys.Net.WebServiceProxy");Sys.Net.WebServiceProxy.invoke=function(k,a,j,d,i,c,f,h){var b=new Sys.Net.WebRequest;b.get_headers()["Content-Type"]="application/json; charset=utf-8";if(!d)d={};var g=d;if(!j||!g)g={};b.set_url(Sys.Net.WebRequest._createUrl(k+"/"+a,g));var e=null;if(!j){e=Sys.Serialization.JavaScriptSerializer.serialize(d);if(e==="{}")e=""}b.set_body(e);b.add_completed(l);if(h&&h>0)b.set_timeout(h);b.invoke();function l(d){if(d.get_responseAvailable()){var e=d.get_statusCode(),b=null;try{var j=d.getResponseHeader("Content-Type");if(j.startsWith("application/json"))b=d.get_object();else if(j.startsWith("text/xml"))b=d.get_xml();else b=d.get_responseData()}catch(m){}var k=d.getResponseHeader("jsonerror"),g=k==="true";if(g)b=new Sys.Net.WebServiceError(false,b.Message,b.StackTrace,b.ExceptionType);if(e<200||e>=300||g){if(c){if(!b||!g)b=new Sys.Net.WebServiceError(false,String.format(Sys.Res.webServiceFailedNoMsg,a),"","");b._statusCode=e;c(b,f,a)}}else if(i)i(b,f,a)}else{var h;if(d.get_timedOut())h=String.format(Sys.Res.webServiceTimedOut,a);else h=String.format(Sys.Res.webServiceFailedNoMsg,a);if(c)c(new Sys.Net.WebServiceError(d.get_timedOut(),h,"",""),f,a)}}return b};Sys.Net.WebServiceProxy._generateTypedConstructor=function(a){return function(b){if(b)for(var c in b)this[c]=b[c];this.__type=a}};Sys.Net.WebServiceError=function(c,d,b,a){this._timedOut=c;this._message=d;this._stackTrace=b;this._exceptionType=a;this._statusCode=-1};Sys.Net.WebServiceError.prototype={get_timedOut:function(){return this._timedOut},get_statusCode:function(){return this._statusCode},get_message:function(){return this._message},get_stackTrace:function(){return this._stackTrace},get_exceptionType:function(){return this._exceptionType}};Sys.Net.WebServiceError.registerClass("Sys.Net.WebServiceError");Type.registerNamespace("Sys.Services");Sys.Services._ProfileService=function(){Sys.Services._ProfileService.initializeBase(this);this.properties={}};Sys.Services._ProfileService.DefaultWebServicePath="";Sys.Services._ProfileService.prototype={_defaultFailedCallback:null,_defaultLoadCompletedCallback:null,_defaultSaveCompletedCallback:null,_path:"",_timeout:0,get_defaultFailedCallback:function(){return this._defaultFailedCallback},set_defaultFailedCallback:function(a){this._defaultFailedCallback=a},get_defaultLoadCompletedCallback:function(){return this._defaultLoadCompletedCallback},set_defaultLoadCompletedCallback:function(a){this._defaultLoadCompletedCallback=a},get_defaultSaveCompletedCallback:function(){return this._defaultSaveCompletedCallback},set_defaultSaveCompletedCallback:function(a){this._defaultSaveCompletedCallback=a},get_path:function(){return this._path},set_path:function(a){if(!a||!a.length)a="";this._path=a},get_timeout:function(){return this._timeout},set_timeout:function(a){this._timeout=a},load:function(b,d,e,f){var c={},a;if(!b)a="GetAllPropertiesForCurrentUser";else{a="GetPropertiesForCurrentUser";c={properties:this._clonePropertyNames(b)}}this._invoke(this._get_path(),a,false,c,Function.createDelegate(this,this._onLoadComplete),Function.createDelegate(this,this._onLoadFailed),[d,e,f])},save:function(d,a,c,e){var b=this._flattenProperties(d,this.properties);this._invoke(this._get_path(),"SetPropertiesForCurrentUser",false,{values:b},Function.createDelegate(this,this._onSaveComplete),Function.createDelegate(this,this._onSaveFailed),[a,c,e])},_clonePropertyNames:function(e){var c=[],d={};for(var b=0;b<e.length;b++){var a=e[b];if(!d[a]){Array.add(c,a);d[a]=true}}return c},_flattenProperties:function(a,h,i){var b={},e,d;if(a&&a.length===0)return b;for(var c in h){e=h[c];d=i?i+"."+c:c;if(Sys.Services.ProfileGroup.isInstanceOfType(e)){var g=this._flattenProperties(a,e,d);for(var f in g){var j=g[f];b[f]=j}}else if(!a||Array.indexOf(a,d)!==-1)b[d]=e}return b},_get_path:function(){var a=this.get_path();if(!a.length)a=Sys.Services._ProfileService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_onLoadComplete:function(a,f,g){if(typeof a!=="object")throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,g,"Object"));var d=this._unflattenProperties(a);for(var b in d)this.properties[b]=d[b];var c=f[0],e=c?c:this._defaultLoadCompletedCallback;if(e)e(a.length,f[2],"Sys.Services.ProfileService.load")},_onLoadFailed:function(d,c){var a=c[1],b=a?a:this._defaultFailedCallback;if(b)b(d,c[2],"Sys.Services.ProfileService.load")},_onSaveComplete:function(d,c,f){if(typeof d!=="number")throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Number"));var a=c[0],e=c[2],b=a?a:this._defaultSaveCompletedCallback;if(b)b(d,e,"Sys.Services.ProfileService.save")},_onSaveFailed:function(e,c){var a=c[1],d=c[2],b=a?a:this._defaultFailedCallback;if(b)b(e,d,"Sys.Services.ProfileService.save")},_unflattenProperties:function(e){var c={},d,f,h=0;for(var a in e){h++;f=e[a];d=a.indexOf(".");if(d!==-1){var g=a.substr(0,d);a=a.substr(d+1);var b=c[g];if(!b||!Sys.Services.ProfileGroup.isInstanceOfType(b)){b=new Sys.Services.ProfileGroup;c[g]=b}b[a]=f}else c[a]=f}e.length=h;return c}};Sys.Services._ProfileService.registerClass("Sys.Services._ProfileService",Sys.Net.WebServiceProxy);Sys.Services.ProfileService=new Sys.Services._ProfileService;Sys.Services.ProfileGroup=function(a){if(a)for(var b in a)this[b]=a[b]};Sys.Services.ProfileGroup.registerClass("Sys.Services.ProfileGroup");Sys.Services._AuthenticationService=function(){Sys.Services._AuthenticationService.initializeBase(this)};Sys.Services._AuthenticationService.DefaultWebServicePath="";Sys.Services._AuthenticationService.prototype={_defaultFailedCallback:null,_defaultLoginCompletedCallback:null,_defaultLogoutCompletedCallback:null,_path:"",_timeout:0,_authenticated:false,get_defaultFailedCallback:function(){return this._defaultFailedCallback},set_defaultFailedCallback:function(a){this._defaultFailedCallback=a},get_defaultLoginCompletedCallback:function(){return this._defaultLoginCompletedCallback},set_defaultLoginCompletedCallback:function(a){this._defaultLoginCompletedCallback=a},get_defaultLogoutCompletedCallback:function(){return this._defaultLogoutCompletedCallback},set_defaultLogoutCompletedCallback:function(a){this._defaultLogoutCompletedCallback=a},get_isLoggedIn:function(){return this._authenticated},get_path:function(){return this._path},set_path:function(a){if(!a||!a.length)a="";this._path=a},get_timeout:function(){return this._timeout},set_timeout:function(a){this._timeout=a},login:function(c,b,a,h,f,d,e,g){this._invoke(this._get_path(),"Login",false,{userName:c,password:b,createPersistentCookie:a},Function.createDelegate(this,this._onLoginComplete),Function.createDelegate(this,this._onLoginFailed),[c,b,a,f,d,e,g])},logout:function(c,a,b,d){this._invoke(this._get_path(),"Logout",false,{},Function.createDelegate(this,this._onLogoutComplete),Function.createDelegate(this,this._onLogoutFailed),[c,a,b,d])},_get_path:function(){var a=this.get_path();if(!a.length)a=Sys.Services._AuthenticationService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_onLoginComplete:function(f,c,g){if(typeof f!=="boolean")throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,g,"Boolean"));var b=c[3],d=c[4],e=c[6],a=d?d:this._defaultLoginCompletedCallback;if(f){this._authenticated=true;if(a)a(true,e,"Sys.Services.AuthenticationService.login");if(typeof b!=="undefined"&&b!==null)window.location.href=b}else if(a)a(false,e,"Sys.Services.AuthenticationService.login")},_onLoginFailed:function(d,c){var a=c[5],b=a?a:this._defaultFailedCallback;if(b)b(d,c[6],"Sys.Services.AuthenticationService.login")},_onLogoutComplete:function(g,a,f){if(g!==null)throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"null"));var c=a[0],b=a[1],e=a[3],d=b?b:this._defaultLogoutCompletedCallback;this._authenticated=false;if(d)d(null,e,"Sys.Services.AuthenticationService.logout");if(!c)window.location.reload();else window.location.href=c},_onLogoutFailed:function(d,c){var a=c[2],b=a?a:this._defaultFailedCallback;if(b)b(d,c[3],"Sys.Services.AuthenticationService.logout")},_setAuthenticated:function(a){this._authenticated=a}};Sys.Services._AuthenticationService.registerClass("Sys.Services._AuthenticationService",Sys.Net.WebServiceProxy);Sys.Services.AuthenticationService=new Sys.Services._AuthenticationService;Type.registerNamespace("Sys.Serialization");Sys.Serialization.JavaScriptSerializer=function(){};Sys.Serialization.JavaScriptSerializer.registerClass("Sys.Serialization.JavaScriptSerializer");Sys.Serialization.JavaScriptSerializer._stringRegEx=new RegExp('["\b\f\n\r\t\\\\\x00-\x1F]',"i");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder=function(b,a,h){var c;switch(typeof b){case "object":if(b)if(Array.isInstanceOfType(b)){a.append("[");for(c=0;c<b.length;++c){if(c>0)a.append(",");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b[c],a)}a.append("]")}else{if(Date.isInstanceOfType(b)){a.append('"\\/Date(');a.append(b.getTime());a.append(')\\/"');break}var e=[],i=0;for(var g in b){if(g.startsWith("$"))continue;e[i++]=g}if(h)e.sort();a.append("{");var j=false;for(c=0;c<i;c++){var f=b[e[c]];if(typeof f!=="undefined"&&typeof f!=="function"){if(j)a.append(",");else j=true;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(e[c],a,h);a.append(":");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(f,a,h)}}a.append("}")}else a.append("null");break;case "number":if(isFinite(b))a.append(String(b));else throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers);break;case "string":a.append('"');if(Sys.Browser.agent===Sys.Browser.Safari||Sys.Serialization.JavaScriptSerializer._stringRegEx.test(b)){var k=b.length;for(c=0;c<k;++c){var d=b.charAt(c);if(d>=" "){if(d==="\\"||d==='"')a.append("\\");a.append(d)}else switch(d){case "\b":a.append("\\b");break;case "\f":a.append("\\f");break;case "\n":a.append("\\n");break;case "\r":a.append("\\r");break;case "\t":a.append("\\t");break;default:a.append("\\u00");if(d.charCodeAt()<16)a.append("0");a.append(d.charCodeAt().toString(16))}}}else a.append(b);a.append('"');break;case "boolean":a.append(b.toString());break;default:a.append("null");break}};Sys.Serialization.JavaScriptSerializer.serialize=function(b){var a=new Sys.StringBuilder;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b,a,false);return a.toString()};Sys.Serialization.JavaScriptSerializer.deserialize=function(data){if(data.length===0)throw Error.argument("data",Sys.Res.cannotDeserializeEmptyString);try{var exp=data.replace(new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)\\)\\\\/\\"',"g"),"$1new Date($2)");return eval("("+exp+")")}catch(a){throw Error.argument("data",Sys.Res.cannotDeserializeInvalidJson)}};Sys.CultureInfo=function(c,b,a){this.name=c;this.numberFormat=b;this.dateTimeFormat=a};Sys.CultureInfo.prototype={_getDateTimeFormats:function(){if(!this._dateTimeFormats){var a=this.dateTimeFormat;this._dateTimeFormats=[a.MonthDayPattern,a.YearMonthPattern,a.ShortDatePattern,a.ShortTimePattern,a.LongDatePattern,a.LongTimePattern,a.FullDateTimePattern,a.RFC1123Pattern,a.SortableDateTimePattern,a.UniversalSortableDateTimePattern]}return this._dateTimeFormats},_getMonthIndex:function(a){if(!this._upperMonths)this._upperMonths=this._toUpperArray(this.dateTimeFormat.MonthNames);return Array.indexOf(this._upperMonths,this._toUpper(a))},_getAbbrMonthIndex:function(a){if(!this._upperAbbrMonths)this._upperAbbrMonths=this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames);return Array.indexOf(this._upperMonths,this._toUpper(a))},_getDayIndex:function(a){if(!this._upperDays)this._upperDays=this._toUpperArray(this.dateTimeFormat.DayNames);return Array.indexOf(this._upperDays,this._toUpper(a))},_getAbbrDayIndex:function(a){if(!this._upperAbbrDays)this._upperAbbrDays=this._toUpperArray(this.dateTimeFormat.AbbreviatedDayNames);return Array.indexOf(this._upperAbbrDays,this._toUpper(a))},_toUpperArray:function(c){var b=[];for(var a=0,d=c.length;a<d;a++)b[a]=this._toUpper(c[a]);return b},_toUpper:function(a){return a.split("\u00A0").join(" ").toUpperCase()}};Sys.CultureInfo._parse=function(b){var a=Sys.Serialization.JavaScriptSerializer.deserialize(b);return new Sys.CultureInfo(a.name,a.numberFormat,a.dateTimeFormat)};Sys.CultureInfo.registerClass("Sys.CultureInfo");Sys.CultureInfo.InvariantCulture=Sys.CultureInfo._parse('{"name":"","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":true,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"\u00A4","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":true},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, dd MMMM yyyy HH:mm:ss","LongDatePattern":"dddd, dd MMMM yyyy","LongTimePattern":"HH:mm:ss","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'","ShortDatePattern":"MM/dd/yyyy","ShortTimePattern":"HH:mm","SortableDateTimePattern":"yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'","YearMonthPattern":"yyyy MMMM","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":true,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]}}');if(typeof __cultureInfo==="undefined")var __cultureInfo='{"name":"en-US","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":false,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"$","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":false},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, MMMM dd, yyyy h:mm:ss tt","LongDatePattern":"dddd, MMMM dd, yyyy","LongTimePattern":"h:mm:ss tt","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'","ShortDatePattern":"M/d/yyyy","ShortTimePattern":"h:mm tt","SortableDateTimePattern":"yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'","YearMonthPattern":"MMMM, yyyy","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":false,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]}}';Sys.CultureInfo.CurrentCulture=Sys.CultureInfo._parse(__cultureInfo);delete __cultureInfo;Sys.UI.Point=function(a,b){this.x=a;this.y=b};Sys.UI.Point.registerClass("Sys.UI.Point");Sys.UI.Bounds=function(c,d,b,a){this.x=c;this.y=d;this.height=a;this.width=b};Sys.UI.Bounds.registerClass("Sys.UI.Bounds");Sys.UI.DomElement=function(){};Sys.UI.DomElement.registerClass("Sys.UI.DomElement");Sys.UI.DomElement.addCssClass=function(a,b){if(!Sys.UI.DomElement.containsCssClass(a,b))if(a.className==="")a.className=b;else a.className+=" "+b};Sys.UI.DomElement.containsCssClass=function(b,a){return Array.contains(b.className.split(" "),a)};Sys.UI.DomElement.getBounds=function(a){var b=Sys.UI.DomElement.getLocation(a);return new Sys.UI.Bounds(b.x,b.y,a.offsetWidth||0,a.offsetHeight||0)};var $get=Sys.UI.DomElement.getElementById=function(f,e){if(!e)return document.getElementById(f);if(e.getElementById)return e.getElementById(f);var c=[],d=e.childNodes;for(var b=0;b<d.length;b++){var a=d[b];if(a.nodeType==1)c[c.length]=a}while(c.length){a=c.shift();if(a.id==f)return a;d=a.childNodes;for(b=0;b<d.length;b++){a=d[b];if(a.nodeType==1)c[c.length]=a}}return null};switch(Sys.Browser.agent){case Sys.Browser.InternetExplorer:Sys.UI.DomElement.getLocation=function Sys$UI$DomElement$getLocation(a){if(a.self||a.nodeType===9)return new Sys.UI.Point(0,0);var d=a.getClientRects();if(!d||!d.length)return new Sys.UI.Point(0,0);var e=a.ownerDocument.parentWindow,g=e.screenLeft-top.screenLeft-top.document.documentElement.scrollLeft+2,h=e.screenTop-top.screenTop-top.document.documentElement.scrollTop+2,c=e.frameElement||null;if(c){var b=c.currentStyle;g+=(c.frameBorder||1)*2+(parseInt(b.paddingLeft)||0)+(parseInt(b.borderLeftWidth)||0)-a.ownerDocument.documentElement.scrollLeft;h+=(c.frameBorder||1)*2+(parseInt(b.paddingTop)||0)+(parseInt(b.borderTopWidth)||0)-a.ownerDocument.documentElement.scrollTop}var f=d[0];return new Sys.UI.Point(f.left-g,f.top-h)};break;case Sys.Browser.Safari:Sys.UI.DomElement.getLocation=function(c){if(c.window&&c.window===c||c.nodeType===9)return new Sys.UI.Point(0,0);var g=0,h=0,j=null,f=null,b;for(var a=c;a;j=a,(f=b,a=a.offsetParent)){b=Sys.UI.DomElement._getCurrentStyle(a);var e=a.tagName;if((a.offsetLeft||a.offsetTop)&&(e!=="BODY"||(!f||f.position!=="absolute"))){g+=a.offsetLeft;h+=a.offsetTop}}b=Sys.UI.DomElement._getCurrentStyle(c);var d=b?b.position:null,k=d&&d!=="static";if(!d||d!=="absolute")for(var a=c.parentNode;a;a=a.parentNode){e=a.tagName;if(e!=="BODY"&&e!=="HTML"&&(a.scrollLeft||a.scrollTop)){g-=a.scrollLeft||0;h-=a.scrollTop||0}b=Sys.UI.DomElement._getCurrentStyle(a);var i=b?b.position:null;if(i&&i==="absolute")break}return new Sys.UI.Point(g,h)};break;case Sys.Browser.Opera:Sys.UI.DomElement.getLocation=function(b){if(b.window&&b.window===b||b.nodeType===9)return new Sys.UI.Point(0,0);var d=0,e=0,i=null;for(var a=b;a;i=a,a=a.offsetParent){var f=a.tagName;d+=a.offsetLeft||0;e+=a.offsetTop||0}var g=b.style.position,c=g&&g!=="static";for(var a=b.parentNode;a;a=a.parentNode){f=a.tagName;if(f!=="BODY"&&f!=="HTML"&&(a.scrollLeft||a.scrollTop)&&(c&&(a.style.overflow==="scroll"||a.style.overflow==="auto"))){d-=a.scrollLeft||0;e-=a.scrollTop||0}var h=a&&a.style?a.style.position:null;c=c||h&&h!=="static"}return new Sys.UI.Point(d,e)};break;default:Sys.UI.DomElement.getLocation=function(d){if(d.window&&d.window===d||d.nodeType===9)return new Sys.UI.Point(0,0);var e=0,f=0,i=null,h=null,b=null;for(var a=d;a;i=a,(h=b,a=a.offsetParent)){var c=a.tagName;b=Sys.UI.DomElement._getCurrentStyle(a);if((a.offsetLeft||a.offsetTop)&&!(c==="BODY"&&(!h||h.position!=="absolute"))){e+=a.offsetLeft;f+=a.offsetTop}if(i!==null&&b){if(c!=="TABLE"&&c!=="TD"&&c!=="HTML"){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}if(c==="TABLE"&&(b.position==="relative"||b.position==="absolute")){e+=parseInt(b.marginLeft)||0;f+=parseInt(b.marginTop)||0}}}b=Sys.UI.DomElement._getCurrentStyle(d);var g=b?b.position:null,j=g&&g!=="static";if(!g||g!=="absolute")for(var a=d.parentNode;a;a=a.parentNode){c=a.tagName;if(c!=="BODY"&&c!=="HTML"&&(a.scrollLeft||a.scrollTop)){e-=a.scrollLeft||0;f-=a.scrollTop||0;b=Sys.UI.DomElement._getCurrentStyle(a);e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}}return new Sys.UI.Point(e,f)};break}Sys.UI.DomElement.removeCssClass=function(d,c){var a=" "+d.className+" ",b=a.indexOf(" "+c+" ");if(b>=0)d.className=(a.substr(0,b)+" "+a.substring(b+c.length+1,a.length)).trim()};Sys.UI.DomElement.setLocation=function(b,c,d){var a=b.style;a.position="absolute";a.left=c+"px";a.top=d+"px"};Sys.UI.DomElement.toggleCssClass=function(b,a){if(Sys.UI.DomElement.containsCssClass(b,a))Sys.UI.DomElement.removeCssClass(b,a);else Sys.UI.DomElement.addCssClass(b,a)};Sys.UI.DomElement._getCurrentStyle=function(a){var b=(a.ownerDocument?a.ownerDocument:a.documentElement).defaultView;return b&&a!==b&&b.getComputedStyle?b.getComputedStyle(a,null):a.style};Sys.UI.Behavior=function(b){Sys.UI.Behavior.initializeBase(this);this._element=b;var a=b._behaviors;if(!a)b._behaviors=[this];else a[a.length]=this};Sys.UI.Behavior.prototype={_name:null,get_element:function(){return this._element},get_id:function(){var a=Sys.UI.Behavior.callBaseMethod(this,"get_id");if(a)return a;if(!this._element||!this._element.id)return "";return this._element.id+"$"+this.get_name()},get_name:function(){if(this._name)return this._name;var a=Object.getTypeName(this),b=a.lastIndexOf(".");if(b!=-1)a=a.substr(b+1);if(!this.get_isInitialized())this._name=a;return a},set_name:function(a){this._name=a},initialize:function(){Sys.UI.Behavior.callBaseMethod(this,"initialize");var a=this.get_name();if(a)this._element[a]=this},dispose:function(){Sys.UI.Behavior.callBaseMethod(this,"dispose");if(this._element){var a=this.get_name();if(a)this._element[a]=null;Array.remove(this._element._behaviors,this);delete this._element}}};Sys.UI.Behavior.registerClass("Sys.UI.Behavior",Sys.Component);Sys.UI.Behavior.getBehaviorByName=function(b,c){var a=b[c];return a&&Sys.UI.Behavior.isInstanceOfType(a)?a:null};Sys.UI.Behavior.getBehaviors=function(a){if(!a._behaviors)return [];return Array.clone(a._behaviors)};Sys.UI.Behavior.getBehaviorsByType=function(d,e){var a=d._behaviors,c=[];if(a)for(var b=0,f=a.length;b<f;b++)if(e.isInstanceOfType(a[b]))c[c.length]=a[b];return c};Sys.UI.VisibilityMode=function(){throw Error.notImplemented()};Sys.UI.VisibilityMode.prototype={hide:0,collapse:1};Sys.UI.VisibilityMode.registerEnum("Sys.UI.VisibilityMode");Sys.UI.Control=function(a){Sys.UI.Control.initializeBase(this);this._element=a;a.control=this;this._oldDisplayMode=this._element.style.display;if(!this._oldDisplayMode||this._oldDisplayMode=="none")this._oldDisplayMode=""};Sys.UI.Control.prototype={_parent:null,_visibilityMode:Sys.UI.VisibilityMode.hide,get_element:function(){return this._element},get_id:function(){if(!this._element)return "";return this._element.id},set_id:function(){throw Error.invalidOperation(Sys.Res.cantSetId)},get_parent:function(){if(this._parent)return this._parent;else{var a=this._element.parentNode;while(a){if(a.control)return a.control;a=a.parentNode}return null}},set_parent:function(a){this._parent=a},get_visibilityMode:function(){return this._visibilityMode},set_visibilityMode:function(a){if(this._visibilityMode!==a){this._visibilityMode=a;if(this.get_visible()===false)if(this._visibilityMode===Sys.UI.VisibilityMode.hide)this._element.style.display=this._oldDisplayMode;else this._element.style.display="none"}this._visibilityMode=a},get_visible:function(){return this._element.style.visibility!="hidden"},set_visible:function(a){if(a!=this.get_visible()){this._element.style.visibility=a?"visible":"hidden";if(a||this._visibilityMode===Sys.UI.VisibilityMode.hide)this._element.style.display=this._oldDisplayMode;else this._element.style.display="none"}},addCssClass:function(a){Sys.UI.DomElement.addCssClass(this._element,a)},dispose:function(){Sys.UI.Control.callBaseMethod(this,"dispose");if(this._element){this._element.control=undefined;delete this._element}},initialize:function(){Sys.UI.Control.callBaseMethod(this,"initialize");var a=this._element},onBubbleEvent:function(){return false},raiseBubbleEvent:function(b,c){var a=this.get_parent();while(a){if(a.onBubbleEvent(b,c))return;a=a.get_parent()}},removeCssClass:function(a){Sys.UI.DomElement.removeCssClass(this._element,a)},toggleCssClass:function(a){Sys.UI.DomElement.toggleCssClass(this._element,a)}};Sys.UI.Control.registerClass("Sys.UI.Control",Sys.Component)
Sys.Res={'argumentInteger':'Value must be an integer.','scriptLoadMultipleCallbacks':'The script \'{0}\' contains multiple calls to Sys.Application.notifyScriptLoaded(). Only one is allowed.','invokeCalledTwice':'Cannot call invoke more than once.','webServiceFailed':'The server method \'{0}\' failed with the following error: {1}','argumentType':'Object cannot be converted to the required type.','argumentNull':'Value cannot be null.','controlCantSetId':'The id property can\'t be set on a control.','formatBadFormatSpecifier':'Format specifier was invalid.','webServiceFailedNoMsg':'The server method \'{0}\' failed.','argumentDomElement':'Value must be a DOM element.','invalidExecutorType':'Could not create a valid Sys.Net.WebRequestExecutor from: {0}.','cannotCallBeforeResponse':'Cannot call {0} when responseAvailable is false.','actualValue':'Actual value was {0}.','enumInvalidValue':'\'{0}\' is not a valid value for enum {1}.','scriptLoadFailed':'The script \'{0}\' could not be loaded.','parameterCount':'Parameter count mismatch.','cannotDeserializeEmptyString':'Cannot deserialize empty string.','formatInvalidString':'Input string was not in a correct format.','invalidTimeout':'Value must be greater than or equal to zero.','cannotAbortBeforeStart':'Cannot abort when executor has not started.','argument':'Value does not fall within the expected range.','cannotDeserializeInvalidJson':'Cannot deserialize. The data does not correspond to valid JSON.','invalidHttpVerb':'httpVerb cannot be set to an empty or null string.','nullWebRequest':'Cannot call executeRequest with a null webRequest.','eventHandlerInvalid':'Handler was not added through the Sys.UI.DomEvent.addHandler method.','cannotSerializeNonFiniteNumbers':'Cannot serialize non finite numbers.','argumentUndefined':'Value cannot be undefined.','webServiceInvalidReturnType':'The server method \'{0}\' returned an invalid type. Expected type: {1}','servicePathNotSet':'The path to the web service has not been set.','argumentTypeWithTypes':'Object of type \'{0}\' cannot be converted to type \'{1}\'.','cannotCallOnceStarted':'Cannot call {0} once started.','badBaseUrl1':'Base URL does not contain ://.','badBaseUrl2':'Base URL does not contain another /.','badBaseUrl3':'Cannot find last / in base URL.','setExecutorAfterActive':'Cannot set executor after it has become active.','paramName':'Parameter name: {0}','cannotCallOutsideHandler':'Cannot call {0} outside of a completed event handler.','format':'One of the identified items was in an invalid format.','assertFailedCaller':'Assertion Failed: {0}\r\nat {1}','argumentOutOfRange':'Specified argument was out of the range of valid values.','webServiceTimedOut':'The server method \'{0}\' timed out.','notImplemented':'The method or operation is not implemented.','assertFailed':'Assertion Failed: {0}','invalidOperation':'Operation is not valid due to the current state of the object.','breakIntoDebugger':'{0}\r\n\r\nBreak into debugger?'};
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();
///////////////////////////////////////////////////////////////////////////
//  Comments for this code can be found in source control
//////////////////////////////////////////////////////////////////////////
Type.registerNamespace("MySpace");

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

function generalizeDomain(){
	var domain = document.domain;
	if(domain[domain.length-1]===".")return;
	var domains = domain.split(".");
	var domainsLength = domains.length;
	if (domainsLength >= 2){document.domain = domains[domainsLength - 2] + "." + domains[domainsLength - 1];}
}
var supressFuseactions = {"blog.create":0,"blog.edit":1,"blog.commentreply":2,"blog.comment":3,"forums.post":4,"mail.compose":5,"mail.message":6, "mail.reply":7, "mail.forward":8};
if(typeof supressGeneralizeDomain==="undefined" && typeof supressFuseactions[fuseaction]==="undefined") generalizeDomain();


// Stop using TextFilterWBR! 
// use MySpace.Util.InjectWBR, MySpace.Util.ApplyWBRtoElements and MySpace.Util.ApplyWBRtoElement
function TextFilterWBR(){
    var regex = new RegExp(/[^\s]{3}/mgi);
    var hs = this.match(/(<.*?>|&[#0-9a-zA-Z]{1,5};)/mgi);
    var o=[];
    var offset = 0;
    if(hs){
        for(var i = 0 ; i < hs.length; i++){
            o.push(this.substring(offset, offset = (this.indexOf(hs[i],offset))).replace(regex, "$&<wbr/>"));
            o.push(this.substring(offset, offset += hs[i].length));
        }
    }
    if(offset<this.length) 
        o.push(this.substring(offset,this.length).replace(regex, "$&<wbr/>"));
    
    return o.join("");
}
String.prototype.call = function(f,c){
    return f.call(this,c);
}
MySpace.Util=function(){throw "Cannot instantiate static class.";};
MySpace.Util.applyWBRToElements = function(elements,options){
	/// <param name="elements" type="Array" elementType="DomElement"></param>
	/// <param name="frequency" type="Number" integer="true" optional="true"></param>
	/// <param name="regex" type="RegExp" optional="true"></param>
	for(var i=0;i<elements.length;i++)
		MySpace.Util.applyWBRToElement(elements[i],options);
}
MySpace.Util.applyWBRToElement=function(element,options){
	/// <param name="elements" type="Array" elementType="DomElement"></param>
	/// <param name="options" type="Object" optional="true">
	///  options can include:
	///   frequency: number of non-whitespace chars to break after (defaults to 20)
	///   breakCharsRegex: regex for additional places where a break can be added after (defaults to all punctuation chars)
	/// </param>
	if(MySpace.Application.keyDisabled("CommonWordBreaker")){ return; }
	
	options=options || {};
	var frequency=options.frequency || 20;
	var breakCharsRegex=options.breakCharsRegex || MySpace.Util.applyWBRToElement._breakCharsRegex;
	var wrapChar=MySpace.Util.applyWBRToElement._wrapChar;
	var longWordRegex=new RegExp("\\S{"+frequency+",}", "g");
	var unbrokenCharsRegex=new RegExp("[^"+wrapChar+"]{"+frequency+"}(?!"+wrapChar+")", "g");	// 20 non-zwsp chars, not followed by a zwsp
	var replaceValue=MySpace.Util.applyWBRToElement._replaceValue;
	var bigChunkRegex=new RegExp("\\S{"+frequency+"}(?!$)", "g");	// 20 non-whitespace chars, not at the end of the string
	
	_r(element);
	function _r(e){
		if(!e || !e.childNodes)return;
		
		for(var i=0;i<e.childNodes.length;i++){
			var el=e.childNodes[i];
			if(/(STYLE|SCRIPT)/.test(el.nodeName)){ continue; }
			
			if(el.nodeType===3){
				if(Sys.Browser.agent===Sys.Browser.Safari){
                //check if the browser version is 3 or later
                    if (Sys.Browser.version > 522.12){
					//Safari doesn't support WBR well, so use zero-width space even though
					//it breaks copy-and-paste
					if(!MySpace.Util.applyWBRToElement._replaceFunctionSupported){ return; }

					el.nodeValue=el.nodeValue.replace(longWordRegex, function(word){
						return word.replace(breakCharsRegex, replaceValue).replace(unbrokenCharsRegex, replaceValue);
                        
					});
                    }else { return; }
				}else{
					//Keep splitting the text node and inserting a WBR every 20 chars, or
					//whenever punctuation is found
					var match;
					while(match=bigChunkRegex.exec(el.nodeValue)){
						var splitIdx=match.index+frequency;
						
						breakCharsRegex.lastIndex=match.index;
						var breakMatch=breakCharsRegex.exec(el.nodeValue);
						if(breakMatch && breakMatch.index<match.index+frequency){
							splitIdx=breakMatch.index+1;
						}

						var parent=el.parentNode;
						el=el.splitText(splitIdx);
						parent.insertBefore(document.createElement("wbr"), el);
						bigChunkRegex.lastIndex=0;
						
						// Advance past the newly created text node and WBR node
						i += 2;
					}
				}
			}
			else _r(el);
		}
	}
}
MySpace.Util.applyWBRToElement._breakCharsRegex=/[-!@#$%&*()_=+\[{\]}\\|;:'",.<>\/?`~^]/g;
MySpace.Util.applyWBRToElement._wrapChar="\u200B";	// zero-width space
MySpace.Util.applyWBRToElement._replaceValue="$&"+MySpace.Util.applyWBRToElement._wrapChar;
//Test for old Safari's (before 2.0.4) that don't support passing a function to String.replace
MySpace.Util.applyWBRToElement._replaceFunctionSupported=("x".replace(/./, function(){return "y";}) === "y");

Function.createPartial=function(scope, method /*, ...*/){
	var pre=[];
	for(var i=2;i<arguments.length;i++){ pre.push(arguments[i]); }
	var named=typeof method=="string";
	return function(){
		var f=named ? (scope || window)[method] : method;
		var args=pre.concat([]);
		for(var i=0;i<arguments.length;i++){ args.push(arguments[i]); }
		return f && f.apply(scope || window, args);
	};
};


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

function openWin( windowURL, windowName, windowFeatures ) {
	return window.open( windowURL, windowName, windowFeatures ) ;
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


function BrowserDetect() {
	var ua = navigator.userAgent.toLowerCase();

	this.isGecko	   = (ua.indexOf('gecko') != -1 && ua.indexOf('safari') == -1);
	this.isSafari	  = (ua.indexOf('safari') != - 1);
	this.isIE		  = (ua.indexOf('msie') != -1 && (ua.indexOf('webtv') == -1) );

	this.versionMinor = parseFloat(navigator.appVersion);

	if (this.isGecko) {
		this.versionMinor = parseFloat( ua.substring( ua.indexOf('/', ua.indexOf('gecko/') + 6) + 1 ) );
	}
	else if (this.isIE && this.versionMinor >= 4) {
		this.versionMinor = parseFloat( ua.substring( ua.indexOf('msie ') + 5 ) );
	}
	else if (this.isSafari) {
		this.versionMinor = parseFloat( ua.substring( ua.lastIndexOf('safari/') + 7 ) );
	}

	this.versionMajor = parseInt(this.versionMinor, 10);

	this.isWin	= (ua.indexOf('win') != -1);
	this.isMac	= (ua.indexOf('mac') != -1);

	this.isIE6x = (this.isIE && this.versionMajor == 6);
	this.isIE6up = (this.isIE && this.versionMajor >= 6);
}
var browser = new BrowserDetect();


// start MySpace Profile ShortCut
var profile_AddToFriends = '';
var profile_BlockUser='';  
        
        function shortCut(ddl)
	    {   if(ddl == null){return;}
	        if(!ddl.selectedIndex && !(ddl.selectedIndex > 0))
	        {   return; }
	        var selectedVal = ddl.options[ddl.selectedIndex].value.toLowerCase();
            var sTargetUrl  = '';                      
            var sFriendID   = MySpace.ClientContext.DisplayFriendId;
            var myToken     = MySpace.ClientContext.MyToken;
            var USERID_TOM  = 6221;
		    
		    
            switch(selectedVal)
            {   case 'sendmessage':
                    if(sFriendID == USERID_TOM)
                        sTargetUrl = 'https://web.archive.org/web/20081216130713/http://collect.myspace.com/index.cfm?fuseaction=profile.mailTom&MyToken=' + myToken;
                    else
                        sTargetUrl = 'https://web.archive.org/web/20081216130713/http://messaging.myspace.com/index.cfm?fuseaction=mail.message&friendID=' + sFriendID + '&MyToken=' + myToken;
                    break;                
                case 'forwardtofriend':
                    sTargetUrl = 'https://web.archive.org/web/20081216130713/http://messaging.myspace.com/index.cfm?fuseaction=mail.forward&f=forwardprofile&friendID=' + sFriendID;

                    break;
                
                case 'addtofriends':
                    if(profile_AddToFriends.length>0)
                        sTargetUrl = profile_AddToFriends;
                    else
                        sTargetUrl = 'https://web.archive.org/web/20081216130713/http://collect.myspace.com/index.cfm?fuseaction=invite.addfriend_verify&friendID=' + sFriendID + '&MyToken=' + myToken;
                    break;
                
                case 'addtofavorites':
                    sTargetUrl = 'https://web.archive.org/web/20081216130713/http://collect.myspace.com/index.cfm?fuseaction=user.addToFavorite&public=0&friendID=' + sFriendID;

                    break;
                
                case 'blockuser':
                    if (confirm(profile_BlockUser))
                        sTargetUrl = 'https://web.archive.org/web/20081216130713/http://collect.myspace.com/index.cfm?fuseaction=block.blockUser&userID=' + sFriendID;
                    else
                        return;
                    break;
                
                case 'addtogroup':
                    sTargetUrl = 'https://web.archive.org/web/20081216130713/http://groups.myspace.com/index.cfm?fuseaction=groups.addtogroup&friendID=' + sFriendID;
                    break;
                
                case 'rankuser':
                    sTargetUrl = 'https://web.archive.org/web/20081216130713/http://collect.myspace.com/index.cfm?fuseaction=RateImage.UserRating&UserID=' + sFriendID;
                    break;
                
                case 'instantmessage':
                    shortCut_InstantMsg();
                    return;
                    break;
                
                default:
            } 
	        //alert(selectedVal + '\n' + sTargetUrl);
		location.href = sTargetUrl;
        }
// end MySpace Profile ShortCut


// start MySpace IM code
function getIMwin(h,w) {
	var getIMurl = "https://web.archive.org/web/20081216130713/http://www.myspace.com/Modules/IM/Pages/GetIM.aspx";
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

Type.registerNamespace("MySpace");
MySpace._Application = function() { MySpace._Application.initializeBase(this); }
MySpace._Application.prototype = { 
    Culture : {IPCulture:0, PreferredCulture:1},
	_list : {},
	_intMaintenanceConfigs : null,
	_maintenanceConfigs : null,
	isDOMLoaded : false,		
	add_DOMloaded : function(handler) {
		Array.add(this._getEvent("domloaded"), handler);
	},
	intlFeatureDisabled : function(key, culture, cultureType) {
	    if (!MySpace.ClientIntMaintenanceConfigs) MySpace.ClientIntMaintenanceConfigs = {};
	    	        
	    if (MySpace.ClientIntMaintenanceConfigs[key.toLowerCase()]) {
            var feature = MySpace.ClientIntMaintenanceConfigs[key.toLowerCase()];
            
            return this._checkFeatureDisabled(feature, culture, cultureType);
	    }
	    else
	        return false;
	},
	intlSubFeatureDisabled : function(featureKey, subFeatureKey, culture, cultureType) {
	    if (!MySpace.ClientIntMaintenanceConfigs) MySpace.ClientIntMaintenanceConfigs = {};
	    	        
	     if (MySpace.ClientIntMaintenanceConfigs[featureKey.toLowerCase()]) {
	        var feature = MySpace.ClientIntMaintenanceConfigs[featureKey.toLowerCase()];
	        
	        if (!this._checkFeatureDisabled(feature, culture, cultureType)) {
	            if (feature.subfeatures[subFeatureKey.toLowerCase()]) {
	                return this._checkFeatureDisabled(feature.subfeatures[subFeatureKey.toLowerCase()], culture, cultureType);
	            }
	            else
	                return false;
            }
            else
                return true;
	     }
	     else 
	        return false;
	},
	keyDisabled : function(key) {
        if (!MySpace.ClientMaintenanceConfigs) MySpace.ClientMaintenanceConfigs = {};
      
		if (MySpace.ClientMaintenanceConfigs[key.toLowerCase()] < 1)
			return true;
		else
			return false;	
	},
	remove_DOMloaded : function(handler) {
		var evt = this._getEvent("domloaded");
		if (!evt) return;
		Array.remove(evt, handler);
	},
	_checkFeatureDisabled : function(feature, culture, cultureType) {
	    if (feature.enabled) {
	        if (cultureType == MySpace.Application.Culture.PreferredCulture) {
                if (feature.excPrefCltr.length == 0 && feature.allPrefCltr.length == 0)
                    return false;
                
                if (Array.contains(feature.excPrefCltr, culture))
                    return true;
                   
                if (feature.allPrefCltr.length == 0 || Array.contains(feature.allPrefCltr, culture))
                    return false;
                else
                    return true;
            } else if (cultureType == MySpace.Application.Culture.IPCulture) {
                if (feature.excIPCltr.length == 0 && feature.allIPCltr.length == 0)
                    return false;
                    
                if (Array.contains(feature.excIPCltr, culture))
                    return true;
                    
                if (feature.allIPCltr.length == 0 || Array.contains(feature.allIPCltr, culture))
                    return false;
                else
                    return true;
            }
        }
        else 
            return true;
        
        return !feature.enabled;
	},
	_getEvent : function(id, create) {
		if (!this._list[id])
			this._list[id] = [];
		return this._list[id];
	},
	_raiseDOMloaded : function() {
	    this.isDOMLoaded=true;
	    
		var evt = this._getEvent("domloaded");
		if (!evt || (evt.length === 0)) return null;
		evt = Array.clone(evt);
		if (!evt._handler) {
			evt._handler = function(source, args) {
				for (var i = 0, l = evt.length; i < l; i++) {
					evt[i](source, args);
				}
			};
		}
		var h = evt._handler;
		if (h)
			h(this, null);
		var handler = this.get_events().getHandler('DOMloaded');
		if(handler) {
			var eventArgs = new Sys.EventArgs();
			handler(this, eventArgs);
		}
	}
}
MySpace._Application.registerClass('MySpace._Application', Sys.Component);
MySpace.Application = new MySpace._Application();

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

MySpace.Cookie=function(name, rawValue){
	/// <param name="name" type="String"></param>
	/// <param name="rawValue" type="String"></param>
	this._name = name;
	this._rawValue = rawValue;
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
			if(domain!=="localhost" && domain.charAt(0)!==".")
				throw Error.invalidOperation("domain must start with '.'");
			parts[1]="domain="+domain;
		}
		if(expires)parts[parts.length]="expires="+expires.toGMTString();
		parts[parts.length]="path=/";
		document.cookie = parts.join("; "); 
		MySpace.Cookies=new MySpace._Cookies();
	},
	remove:function(cookieName, domain){
		/// <param name="cookieName" type="String"></param>
		this.save(new MySpace.Cookie(cookieName,""),domain,new Date().addDays(-1));
	}
}
MySpace._Cookies.registerClass('MySpace._Cookies');
MySpace.Cookies=new MySpace._Cookies();

Type.registerNamespace("MySpace.UI");

///////////////////////
// NEW GLOBAL HEADER //
///////////////////////
var msglobalnav = {

    $$: function(el, tag) { return el.getElementsByTagName(tag) },
    menuItems: [],
    isIntlFooterOn: false,
    searchTypesOn: 0,
    searchTimer: null,
    searchFramer: null,

    loadStrings: function(defs) {
        for (var classKey in defs) {
            if (!MySpaceRes[classKey]) { MySpaceRes[classKey] = {}; }

            for (var resourceKey in defs[classKey]) {
                MySpaceRes[classKey][resourceKey] = defs[classKey][resourceKey];
            }
        }
    },

    initNavigation: function() {
        var leftUL = $get("leftNav");
        var rightUL = $get("rightNav");
        var leftItems = leftUL.hasChildNodes ? leftUL.childNodes : [];
        var rightItems = rightUL.hasChildNodes ? rightUL.childNodes : [];
        var sheet = document.styleSheets[0];


        for (var i = 0; i < leftItems.length; i++)
            if (leftItems[i].nodeName === "LI" && leftItems[i].className.indexOf("dropDown") > -1) this.menuItems.push(leftItems[i]);
        for (var i = 0; i < rightItems.length; i++)
            if (rightItems[i].nodeName === "LI" && rightItems[i].className.indexOf("dropDown") > -1) this.menuItems.push(rightItems[i]);

        for (var i = 0; i < this.menuItems.length; i++) {
            var mi = this.menuItems[i];
            var subItems = this.$$(mi, "LI");
            var ul = this.$$(mi, "UL")[0];
            if (subItems.length > 0) {
                var min = 140;
                for (var j = 0; j < subItems.length; j++) { if (min < subItems[j].offsetWidth) { min = subItems[j].offsetWidth; } }
                if (this.$$(mi, "IFRAME")[0]) {
                    var currentId = (mi.id) ? mi.id : "";
                    sheet.addRule('div#topnav li#' + currentId + ' li', '{width:' + min + 'px;}');
                    sheet.addRule('div#topnav li#' + currentId + ' iframe', '{width:' + (min + 2) + 'px; height:' + ul.offsetHeight + 'px;}');
                }
            }
        }
    },

    addIE6Events: function() {

        for (var i = 0; i < this.menuItems.length; i++) {
            var mi = this.menuItems[i];
            var subItems = this.$$(mi, "LI");
            if (subItems.length > 0) {
                if (this.$$(mi, "IFRAME")[0]) {
                    mi.onmouseover = function() { this.className += (this.className.indexOf("hover") > -1) ? "" : " hover"; }
                    mi.onmouseout = function() { this.className = this.className.replace(" hover", ""); event.cancelBubble = true; }
                }
            }
        }
    },
    
    applyAlphaImageLoader : function(id, url, method) {
        var el = document.getElementById(id);
        if (el == null) return;
        var img = new Image();
        img.src = url;
        el.style.backgroundImage = 'none';
        $addHandler(window, 'load', function() {
            el.style.filter = 'progid:DXImagetransform.Microsoft.AlphaImageLoader(enabled="true", src="' + url + '", sizingMethod="' + method + '");';
        });
    },

    openSearchTypes: function(arg) {

        var isHeader = (arg.toLowerCase() === 'header');
        var searchMenuListBox = 'srchMenuListBox_' + arg;
        var searchList = $get(searchMenuListBox);
        if (searchList == null) return;

        searchList.className += (searchList.className.indexOf(' open') > -1) ? '' : ' open';
        var pos = Sys.UI.DomElement.getLocation(searchList);
        if (isHeader) {
            if (this.searchFramer == null) { this.searchFramer = this.$$(searchList, "IFRAME")[0]; }
            if (this.searchFramer) {
                this.searchFramer.style.width = searchList.offsetWidth + 'px';
                this.searchFramer.style.height = searchList.offsetHeight + 'px';
            }
        }
        window.clearTimeout(this.searchTimer);
        this.searchTimer = null;
    },

    hideSearchTypes: function(arg) {
        var x = this;
        this.searchTimer = setTimeout(function() {

            var searchMenuListBox = 'srchMenuListBox_' + arg;
            var searchList = $get(searchMenuListBox);
            if (searchList == null) return;

            searchList.className = '';
            if (x.searchFramer == null) { x.searchFramer = x.$$(searchList, "IFRAME")[0]; }

            x.searchTimer = null;
        }, 500);
    },

    switchSearchTypeTo: function(v, searchType) {
        var _after = '<small>&#9660;</small>';
        var types;
        var searchText = 'search_t_' + searchType;
        var searchTypeValue = 'searchTypeValue_' + searchType;
        var srchMenuListBox = 'srchMenuListBox_' + searchType;
        var typeName = v + '_' + searchType;
        if ($get(searchText)) $get(searchText).value = v;
        if ($get(typeName))
            if ($get(searchTypeValue)) $get(searchTypeValue).innerHTML = $get(typeName).innerHTML + _after;

        if ($get(srchMenuListBox)) $get(srchMenuListBox).className = '';

        window.clearTimeout(this.searchTimer);
        this.searchTimer = null;
    },

    srchMenuList: function(isOn, searchType) {
        var x = this;
        if (isOn) {
            window.clearTimeout(this.searchTimer);
            this.searchTimer = null;
        }
        else {
            this.searchTimer = setTimeout(function() {

                var srchMenuListBox = 'srchMenuListBox_' + searchType;
                if ($get(srchMenuListBox)) $get(srchMenuListBox).className = '';
                x.searchTimer = null;
            }, 500);
        }
    },

    searchLocation: function(url, fuseaction, type, qry) {
        var fuseAction = $get(fuseaction);
        var typeElement = $get(type);
        var qryElement = $get(qry);
        if (qryElement.value.length > 0) {
            window.location = url + fuseAction.name + "=" + fuseAction.value + "&" + typeElement.name + "=" + typeElement.value
								+ "&" + qryElement.name + "=" + qryElement.value + '&submit=Search';
        }
        return false;
    },

    toggleInternationalLinks: function() {
        var internationalLinks = $get('internationalLinks');
        var intlLink = $get('intlLink');
        if (this.isIntlFooterOn) {
            internationalLinks.style.left = "-100000px";
        }
        else {
            var pos = Sys.UI.DomElement.getLocation(intlLink);
            internationalLinks.style.top = (-internationalLinks.offsetHeight) + 'px';
            internationalLinks.style.left = (pos.x - (internationalLinks.offsetWidth / 2) + (intlLink.offsetWidth / 2)) + 'px';
        }        
        this.isIntlFooterOn = !this.isIntlFooterOn;
    },

    initializeProfileSearchMenu: function(defaultVal) {

        if (!defaultVal) return;

        if (MySpace.ClientContext.FunctionalContext) {
            if (MySpace.ClientContext.FunctionalContext === "UserViewProfile") {
                if (MySpace.ClientContext.ProfileType === "Band") {
                    switchSearchTypeTo('Music', 'Header');
                }
            }
        }
    },
    
    
    // BACKWARDS COMPATIBILITY (V1,Ad Profiles ONLY)
	framer : null,
    menuTopOffset : (Sys.Browser.agent === Sys.Browser.InternetExplorer) ? -3 : 0,
    menuLeftOffset : (Sys.Browser.agent === Sys.Browser.InternetExplorer) ? -3 : 0,
    linkOffset : (Sys.Browser.agent === Sys.Browser.InternetExplorer && document.compatMode == "BackCompat") ? 0 : -15,
    timerOut : null,
    menuOutTime : 250,
    currentItemId : null,
    
    toggle : function(id, show) {
        if (show) {
            var subNavDropDown = this.getSubNav(id);
            //cancel the time
            if (this.timerOut) {
                clearTimeout(this.timerOut);
                this.timerOut = null;
            }

            //turn off previous					
            if (this.currentItemId != null) {
                var current = this.getItems(this.currentItemId);
                current.parent.className = '';
                this.framer.style.left = '-100000px';
                current.child.style.left = '-100000px';
                this.currentItemId = null;
            }
            //turn-on new one
            subNavDropDown.child.style.left = subNavDropDown.childLeft
            subNavDropDown.child.style.top = subNavDropDown.childTop
            subNavDropDown.parent.className = 'open';

            if (this.framer == null) { this.framer = document.getElementById('framer'); }
            
            this.framer.style.left = subNavDropDown.childLeft;
            this.framer.style.top = subNavDropDown.childTop;
            this.framer.style.width = subNavDropDown.child.offsetWidth + 'px';
            this.framer.style.height = subNavDropDown.child.offsetHeight + 'px';
            this.framer.style.zIndex = subNavDropDown.child.style.zIndex + 1;
            this.framer.style.display = 'block';
            this.currentItemId = id;
        }
        else {
            this.timerOut = setTimeout(function(){msglobalnav.hideDropDown(id);}, this.menuOutTime);
        }
    },    
    
    getSubNav : function(id) {
        var items = this.getItems(id);
        var subNavDropDown = {};
        subNavDropDown.parent = items.parent;
        subNavDropDown.child = items.child;
        if (!items.parent.resized){
			this.fixedSub(subNavDropDown.child, subNavDropDown.parent);
			items.parent.resized = true;
		}
        var pos = Sys.UI.DomElement.getLocation(items.parent);
		subNavDropDown.childLeft = pos.x + 'px';
        subNavDropDown.childTop = (pos.y + items.parent.offsetHeight) + 'px';
        return subNavDropDown;
    },
    
    getItems : function(id) { 
		return { 'child': document.getElementById('subNav' + id), 'parent': document.getElementById('nav' + id) };
    },
    
    fixedSub : function(sub, parent) {
        //FIX FOR UHP
        var d = document.getElementById('userdisplay');
        var uhpOffset = 0;
        if (d && d.className === 'module' && d.tagName === 'DIV') { uhpOffset = 1; }

        var items = sub.getElementsByTagName('LI');

        var max = 140;
        for (var i = 0; i < items.length; i++) {
            if (max < items[i].offsetWidth) { max = items[i].offsetWidth; }
        }
        
        if (max < parent.offsetWidth) max = parent.offsetWidth;
        sub.style.width = max + 'px';

        for (var i = 0; i < items.length; i++) {
            items[i].style.width = max + 'px';
            items[i].getElementsByTagName('A')[0].style.width = (max + this.linkOffset + uhpOffset) + 'px';
        }
    },
    
    hideDropDown : function(id) {
        var subNavDropDown = this.getItems(id);
        subNavDropDown.parent.className = '';
        this.framer.style.left = '-100000px';
        this.framer.style.display = 'none';
        subNavDropDown.child.style.left = '-100000px';
        this.timerOut = null;
        this.currentItemId = null;
    },
    
    subToggle : function(id, show) {
        if (show) {
            if (this.timerOut) {
                clearTimeout(this.timerOut);
                this.timerOut = null;
            }
        }
        else {
            this.timerOut = setTimeout(function(){msglobalnav.hideDropDown(id);}, this.menuOutTime);
        }
    }
    
};



MySpace.UI.DefaultTextboxBehavior=function(e){
	MySpace.UI.DefaultTextboxBehavior.initializeBase(this, [e]);
	
	this._defaultValue="";
};
MySpace.UI.DefaultTextboxBehavior.prototype={
	initialize:function(){
		MySpace.UI.DefaultTextboxBehavior.callBaseMethod(this, "initialize");

		var e=this.get_element();
		
		this.set_value(e.value);
		
		this._focusHandler=Function.createDelegate(this, this._onFocus);
		$addHandler(e, "focus", this._focusHandler);
		this._blurHandler=Function.createDelegate(this, this._onBlur);
		$addHandler(e, "blur", this._blurHandler);
	},
	
	dispose:function(){
		$removeHandler(this.get_element(), "focus", this._focusHandler);
		$removeHandler(this.get_element(), "blur", this._blurHandler);
		MySpace.UI.DefaultTextboxBehavior.callBaseMethod(this, "dispose");
	},
	
	_onFocus:function(e){
		if(this.get_element().value==this._defaultValue){
			this.get_element().value="";
			this._updateClass();
		}
	},
	_onBlur:function(e){
		if(!this.get_element().value){
			this.get_element().value=this._defaultValue;
			this._updateClass();
		}
	},
	
	_updateClass:function(){
		var e=this.get_element();
		if(e.value==this._defaultValue){
			Sys.UI.DomElement.addCssClass(e, "msDefaultTextbox");
		}
		else{
			Sys.UI.DomElement.removeCssClass(e, "msDefaultTextbox");
		}
	},
	
	get_defaultValue:function(){ return this._defaultValue; },
	set_defaultValue:function(val){
		if(this.get_element().value==this._defaultValue){
			this.get_element().value=val;
		}
		this._defaultValue=val;
	},
	
	get_value:function(){
		if(this.get_element().value==this._defaultValue){
			return "";
		}
		else{
			return this.get_element().value;
		}	
	},
	set_value:function(val){
		this.get_element().value=val || this._defaultValue;
		this._updateClass();
	}
};
MySpace.UI.DefaultTextboxBehavior.registerClass("MySpace.UI.DefaultTextboxBehavior", Sys.UI.Behavior);


MySpace.UI.ProfileImageLink={
	counter:0,
	images:[],
	
	onLoad:function(img,evt){	        
		if(!(img && img.tagName && img.tagName.toLowerCase()=="img")){
			img=evt.target || evt.srcElement;
		}
		
		if(String(img.src).indexOf(".")>0 && img.getAttribute("thsrc")){
			var i=this.counter++;
			this.images[i]={image:img, bgLoader:new Image()};
			this.images[i].bgLoader.onload=Function.createPartial(MySpace.UI.ProfileImageLink, "onBgLoad", i);
			this.images[i].bgLoader.onerror=Function.createPartial(MySpace.UI.ProfileImageLink, "onBgError", i);
			this.images[i].bgLoader.src=img.getAttribute("thsrc");
		}
		
		img.onload = null;
	},
	
	onBgLoad:function(i){
		var bgLoader=this.images[i].bgLoader,
			image=this.images[i].image,
			maxWidth=parseInt(image.getAttribute("MaxWidth")),
			maxHeight=parseInt(image.getAttribute("MaxHeight"));
		
		if(bgLoader.height>bgLoader.width){
			image.style.height=maxHeight+"px";
			image.style.maxHeight=maxHeight+"px"; // Needed for Firefox2
			image.style.width=(bgLoader.width*maxHeight/bgLoader.height)+"px";
		}
		else{
			var imgHeight=bgLoader.height*maxWidth/bgLoader.width;
			image.style.height=imgHeight+"px";
			image.style.width=maxWidth+"px";
			var fixHeight=(maxHeight - imgHeight ) / 2;
			if(fixHeight*2 < maxWidth){
				image.style.paddingTop=image.style.paddingBottom=fixHeight + "px";
			}
		}        

		image.setAttribute("alsrc",image.getAttribute("thsrc"));
		image.setAttribute("thsrc","")        
		image.src=image.getAttribute("alsrc");       
		bgLoader.onload = null;
	},
	
	onBgError:function(i){
		UseNoPicImage(this.images[i].image);
	}
};


//
// MySpace.Timer component
//

MySpace.Timer=function(){
	MySpace.Timer.initializeBase(this);
	this._interval=1000;
	this._enabled=false;
	this._timer=null
};
MySpace.Timer.prototype={
	get_interval:function(){
		return this._interval
	},
	set_interval:function(a){
		if(this._interval!==a){
			this._interval=a;
			this.raisePropertyChanged("interval");
			if(!this.get_isUpdating()&&this._timer!==null)this.restartTimer()
		}
	},
	get_enabled:function(){
		return this._enabled
	},
	set_enabled:function(a){
		if(a!==this.get_enabled()){
			this._enabled=a;
			this.raisePropertyChanged("enabled");
			if(!this.get_isUpdating())if(a)this._startTimer();
			else this._stopTimer()
		}
	},
	add_tick:function(a){
		this.get_events().addHandler("tick",a)
	},
	remove_tick:function(a){
		this.get_events().removeHandler("tick",a)
	},
	dispose:function(){
		this.set_enabled(false);
		this._stopTimer();
		MySpace.Timer.callBaseMethod(this,"dispose")
	},
	updated:function(){
		MySpace.Timer.callBaseMethod(this,"updated");
		if(this._enabled)this.restartTimer()
	},
	_timerCallback:function(){
		var a=this.get_events().getHandler("tick");
		if(a)a(this,Sys.EventArgs.Empty)
	},
	restartTimer:function(){
		this._stopTimer();
		this._startTimer()
	},
	_startTimer:function(){
		this._timer=window.setInterval(Function.createDelegate(this,this._timerCallback),this._interval)
	},
	_stopTimer:function(){
		window.clearInterval(this._timer);
		this._timer=null
	}
};
MySpace.Timer.registerClass("MySpace.Timer",Sys.Component);



//
// MySpace.UI.PopupBehavior
//

MySpace.UI.PopupBehavior=function(element){
	/// <summary>
	/// The PopupBehavior is used to show/hide an element at a position
	/// relative to another element
	/// </summary>
	/// <param name="element" type="Sys.UI.DomElement" mayBeNull="false" domElement="true">
	/// The DOM element the behavior is associated with
	/// </param>
	MySpace.UI.PopupBehavior.initializeBase(this, [element]);

	this._x=0;
	this._y=0;
	this._positioningMode=MySpace.UI.PositioningMode.Absolute;
	this._parentElement=null;
	this._parentElementID=null;
	this._moveHandler=null;
	this._firstPopup=true;	
	this._originalParent=null;
	this._visible=false;
	this._hideOnDocumentClick=false;
	
	this._onShow=null;
	this._onShowEndedHandler=null;
	this._onHide=null;
	this._onHideEndedHandler=null;
}
MySpace.UI.PopupBehavior.prototype={
	initialize:function(){
		/// <summary>
		/// Initialize the PopupBehavior
		/// </summary>
		MySpace.UI.PopupBehavior.callBaseMethod(this, 'initialize');
		
		this._hidePopup();
		this.get_element().style.position="absolute";
		
		// Create handlers for the animation ended events
		this._onShowEndedHandler=Function.createDelegate(this, this._onShowEnded);
		this._onHideEndedHandler=Function.createDelegate(this, this._onHideEnded);
		
		$addHandler(document.body, "mousedown", Function.createDelegate(this, this._onDocumentClick));
	},
	
	dispose:function(){
		/// <summary>
		/// Dispose the PopupBehavior
		/// </summary>
	
		var element=this.get_element();
		if(element){
			if(this._visible){
				this.hide();
			}
			if(this._originalParent){
				element.parentNode.removeChild(element);
				this._originalParent.appendChild(element);
				this._originalParent=null;
			}
			
			// Remove expando properties
			element._hideWindowedElementsIFrame=null;
		}
		this._parentElement=null;

		// Remove the animation ended events and wipe the animations
		// (we don't need to dispose them because that will happen
		// automatically in our base dispose)
		if(this._onShow && this._onShowEndedHandler){
			this._onShow.remove_ended(this._onShowEndedHandler);
		}
		this._onShowEndedHandler=null;
		this._onShow=null;
		if(this._onHide && this._onHideEndedHandler){
			this._onHide.remove_ended(this._onHideEndedHandler);
		}
		this._onHideEndedHandler=null;
		this._onHide=null;
		
		MySpace.UI.PopupBehavior.callBaseMethod(this, 'dispose');
	},
	
	show:function(){
		/// <summary>
		/// Show the popup
		/// </summary>
		
		// Ignore requests to hide multiple times
		if(this._visible){
			return;
		}
		
		var eventArgs=new Sys.CancelEventArgs();
		this.raiseShowing(eventArgs);
		if(eventArgs.get_cancel()){
			return;
		}
		
		// Either show the popup or play an animation that does
		// (note: even if we're animating, we still show and position
		// the popup before hiding it again and playing the animation
		// which makes the animation much simpler)
		this._visible=true;
		var element=this.get_element();
		element.style.visibility="visible";
		this.setupPopup();
		if(this._onShow){
			element.style.visibility="hidden";
			this.onShow();
		} else {
			this.raiseShown(Sys.EventArgs.Empty);
		}
	},
	
	hide:function(){
		/// <summary>
		/// Hide the popup
		/// </summary>
		
		// Ignore requests to hide multiple times
		if(!this._visible){
			return;
		}
		
		var eventArgs=new Sys.CancelEventArgs();
		this.raiseHiding(eventArgs);
		if(eventArgs.get_cancel()){
			return;
		}

		// Either hide the popup or play an animation that does
		this._visible=false;
		if(this._onHide){
			this.onHide();
		} else {
			this._hidePopup();
			this._hideCleanup();
		}
	},
	
	getBounds:function(){
		/// <summary>
		/// Get the expected bounds of the popup relative to its parent
		/// </summary>
		/// <returns type="Sys.UI.Bounds" mayBeNull="false">
		/// Bounds of the popup relative to its parent
		/// </returns>
		/// <remarks>
		/// The actual final position can only be calculated after it is
		/// initially set and we can verify it doesn't bleed off the edge
		/// of the screen.
		/// </remarks>
	
		var element=this.get_element();
		
		// offsetParent (doc element if absolutely positioned or no offsetparent available)
		var offsetParent=element.offsetParent;
		if(!offsetParent || (offsetParent==document.documentElement)){ offsetParent=document.body; }
		
		// diff=difference in position between element's offsetParent and the element we will attach popup to.
		// this is basically so we can position the popup in the right spot even though it may not be absolutely positioned
		var diff;
		var parentBounds;
		if(this._parentElement){
			// we will be positioning the element against the assigned parent
			parentBounds=Sys.UI.DomElement.getBounds(this._parentElement);
			
			var offsetParentLocation=Sys.UI.DomElement.getLocation(offsetParent);
			diff={x: parentBounds.x - offsetParentLocation.x, y:parentBounds.y - offsetParentLocation.y};
		} else {
			// we will be positioning the element against the offset parent by default, since no parent element given
			parentBounds=Sys.UI.DomElement.getBounds(offsetParent);
			diff={x:0, y:0};
		}

		// width/height of the element, needed for calculations that involve width like centering
		var width=element.offsetWidth - (element.clientLeft ? element.clientLeft * 2:0);
		var height=element.offsetHeight - (element.clientTop ? element.clientTop * 2:0);

		// Setting the width causes the element to grow by border+passing every
		// time.  But not setting it causes strange behavior in safari. Just set it once.
		if(this._firstpopup){
			element.style.width=width + "px";
			this._firstpopup=false;
		}
		
		var position;
		switch (this._positioningMode){
			case MySpace.UI.PositioningMode.Center:
				position={
					x: Math.round(parentBounds.width / 2 - width / 2),
					y: Math.round(parentBounds.height / 2 - height / 2)
				};
				break;
			case MySpace.UI.PositioningMode.BottomLeft:
				position={
					x: 0,
					y: parentBounds.height
				};
				break;
			case MySpace.UI.PositioningMode.BottomRight:
				position={
					x: parentBounds.width - width,
					y: parentBounds.height
				};
				break;
			case MySpace.UI.PositioningMode.TopLeft:
				position={
					x: 0,
					y: -element.offsetHeight
				};
				break;
			case MySpace.UI.PositioningMode.TopRight:
				position={
					x: parentBounds.width - width,
					y: -element.offsetHeight
				};
				break;
			case MySpace.UI.PositioningMode.Right:
				position={
					x: parentBounds.width,
					y: 0
				};
				break; 
			case MySpace.UI.PositioningMode.Left:
				position={
					x: -element.offsetWidth,
					y: 0
				};
				break;				   
			default:
				position={x: 0, y: 0};
		}
		position.x += this._x + diff.x;
		position.y += this._y + diff.y;
		
		
		return new Sys.UI.Bounds(position.x, position.y, width, height);
	},

	adjustPopupPosition:function(bounds){
		/// <summary>
		/// Adjust the position of the popup after it's originally bet set
		/// to make sure that it's visible on the page.
		/// </summary>
		/// <param name="bounds" type="Sys.UI.Bounds" mayBeNull="true" optional="true">
		/// Original bounds of the parent element
		/// </param>

		var element=this.get_element();
		if(!bounds){
			bounds=this.getBounds();
		}
		
		// Get the new bounds now that we've shown the popup
		var newPosition=Sys.UI.DomElement.getBounds(element);
		var updateNeeded=false;

		if(newPosition.x < 0){
			bounds.x -= newPosition.x;
			updateNeeded=true;
		}
		if(newPosition.y < 0){
			bounds.y -= newPosition.y;
			updateNeeded=true;
		}

		// If the popup was off the screen, reposition it
		if(updateNeeded){
			Sys.UI.DomElement.setLocation(element, bounds.x, bounds.y);
		}
	},
	
	addBackgroundIFrame:function(){
		/// <summary>
		/// Add an empty IFRAME behind the popup (for IE6 only) so that SELECT, etc., won't
		/// show through the popup.
		/// </summary>
	
		// Get the child frame
		var element=this.get_element();
		if((Sys.Browser.agent === Sys.Browser.InternetExplorer) && (Sys.Browser.version < 7)){
			var childFrame=element._hideWindowedElementsIFrame;
			
			// Create the child frame if it wasn't found
			if(!childFrame){
				childFrame=document.createElement("iframe");
				childFrame.src="javascript:'<html></html>';";
				childFrame.style.position="absolute";
				childFrame.style.display="none";
				childFrame.scrolling="no";
				childFrame.frameBorder="0";
				childFrame.tabIndex="-1";
				childFrame.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
				element.parentNode.insertBefore(childFrame, element);
				element._hideWindowedElementsIFrame=childFrame;
				this._moveHandler=Function.createDelegate(this, this._onMove);
				Sys.UI.DomEvent.addHandler(element, "move", this._moveHandler);
			}
			
			// Position the frame exactly behind the element
			childFrame.style.width=element.offsetWidth+"px";
			childFrame.style.height=element.offsetHeight+"px";
			childFrame.style.display=element.style.display;
			if(element.currentStyle && element.currentStyle.zIndex){
				childFrame.style.zIndex=element.currentStyle.zIndex;
			}
			else if(element.style.zIndex){
				childFrame.style.zIndex=element.style.zIndex;
			}
		}
	},
	
	setupPopup:function(){
		/// <summary>
		/// Position the popup relative to its parent
		/// </summary>
		
		var element=this.get_element();
		var bounds=this.getBounds();
		Sys.UI.DomElement.setLocation(element, bounds.x, bounds.y);

		// Tweak the position, set the zIndex, and add the background iframe in IE6
		this.adjustPopupPosition(bounds);
		element.zIndex=1000;
		this.addBackgroundIFrame();
	},
	
	_hidePopup:function(){
		/// <summary>
		/// Internal hide implementation
		/// </summary>
		
		var element=this.get_element();
		element.style.visibility="hidden";
		if(element.originalWidth){
			element.style.width=element.originalWidth + "px";
			element.originalWidth=null;
		}
	},
	
	_hideCleanup:function(){
		/// <summary>
		/// Perform cleanup after hiding the element
		/// </summary>
	
		var element=this.get_element();
		
		// Remove the tracking handler
		if(this._moveHandler){
			Sys.UI.DomEvent.removeHandler(element, "move", this._moveHandler);
			this._moveHandler=null;
		}
		
		// Hide the child frame
		if(Sys.Browser.agent === Sys.Browser.InternetExplorer){
			var childFrame=element._hideWindowedElementsIFrame;
			if(childFrame){
				childFrame.style.display="none";
			}
		}
		
		this.raiseHidden(Sys.EventArgs.Empty);
	},
	
	_onDocumentClick:function(e){
		if(!this._hideOnDocumentClick || !this._visible){ return; }
		
		for(var node=e.target; node; node=node.parentNode){
			if(node==this.get_element()){
				return;
			}
		}
		
		this.hide();
	},
	
	_onMove:function(){
		/// <summary>
		/// Track the popup's movements so the hidden IFrame (IE6 only) can
		/// be moved along with it
		/// </summary>
		
		var element=this.get_element();
		if(element._hideWindowedElementsIFrame){
			element.parentNode.insertBefore(element._hideWindowedElementsIFrame, element);
			element._hideWindowedElementsIFrame.style.top=element.style.top;
			element._hideWindowedElementsIFrame.style.left=element.style.left;
		}
	},
	
	get_onShow:function(){
		/// <value type="MySpace.UI.Effects.Animation" mayBeNull="true">
		/// Animation to play when the popup is shown
		/// </value>
		return this._onShow;
	},
	set_onShow:function(value){
		this._onShow=value;
		if(value){
			value.set_target(this.get_element());
			value.add_ended(this._onShowEndedHandler);
		}
	},
	onShow:function(){
		/// <summary>
		/// Play the OnShow animation
		/// </summary>
		/// <returns />
		if(this._onShow){
			if(this._onHide){
				this._onHide.stop();
			}
			this._onShow.play();
		}
	},
	_onShowEnded:function(){
		/// <summary>
		/// Handler for the OnShow Animation's Ended event
		/// </summary>
		
		// Make sure the popup is where it belongs
		this.adjustPopupPosition();
		this.addBackgroundIFrame();
		
		this.raiseShown(Sys.EventArgs.Empty);
	},
	
	get_onHide:function(){
		/// <value type="MySpace.UI.Effects.Animation" mayBeNull="true">
		/// Animation to play when the popup is hidden
		/// </value>
		return this._onHide;
	},
	set_onHide:function(value){
		this._onHide=value;
		if(value){
			value.set_target(this.get_element());
			value.add_ended(this._onHideEndedHandler);
		}
	},
	onHide:function(){
		/// <summary>
		/// Play the OnHide animation
		/// </summary>
		/// <returns />
		if(this._onHide){
			if(this._onShow){
				this._onShow.stop();
			}
			this._onHide.play();
		}
	},
	_onHideEnded:function(){
		/// <summary>
		/// Handler for the OnHide Animation's Ended event
		/// </summary>
		
		this._hideCleanup();
	},
	
	get_parentElement:function(){
		/// <value type="Sys.UI.DomElement" domElement="true">
		/// Parent dom element.
		/// </value>
		
		if(!this._parentElement && this._parentElementID){
			this.set_parentElement($get(this._parentElementID));
		}		
		return this._parentElement;
	},
	set_parentElement:function(element){
		this._parentElement=element;
	},
	
	get_parentElementID:function(){
		/// <value type="String">
		/// Parent dom element.
		/// </value>
		
		if(this._parentElement){
			return this._parentElement.id
		}
		return this._parentElementID;
	},
	set_parentElementID:function(elementID){
		this._parentElementID=elementID;
		if(this.get_isInitialized()){
			this.set_parentElement($get(elementID));
		}
	},
		
	get_positioningMode:function(){
		/// <value type="MySpace.UI.PositioningMode">
		/// Positioning mode.
		/// </value>
		return this._positioningMode;
	},
	set_positioningMode:function(mode){
		this._positioningMode=mode;
	},
	
	get_x:function(){
		/// <value type="Number">
		/// X coordinate.
		/// </value>
		return this._x;
	},
	set_x:function(value){
		if(value != this._x){
			this._x=value;
			
			// Reposition the popup if it's already showing
			if(this._visible){
				this.setupPopup();
			}
		}
	},
	
	get_y:function(){
		/// <value type="Number">
		/// Y coordinate.
		/// </value>
		return this._y;
	},
	set_y:function(value){
		if(value != this._y){
			this._y=value;
			
			// Reposition the popup if it's already showing
			if(this._visible){
				this.setupPopup();
			}
		}
	},
	
	get_visible:function(){
		/// <value type="Boolean" mayBeNull="false">
		/// Whether or not the popup is currently visible
		/// </value>
		return this._visible;
	},
	
	get_hideOnDocumentClick:function(){ return this._hideOnDocumentClick; },
	set_hideOnDocumentClick:function(value){ this._hideOnDocumentClick=value; },
	
	add_showing:function(handler){
		/// <summary>
		/// Add an event handler for the showing event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('showing', handler);
	},
	remove_showing:function(handler){
		/// <summary>
		/// Remove an event handler from the showing event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('showing', handler);
	},
	raiseShowing:function(eventArgs){
		/// <summary>
		/// Raise the showing event
		/// </summary>
		/// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
		/// Event arguments for the showing event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('showing');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_shown:function(handler){
		/// <summary>
		/// Add an event handler for the shown event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('shown', handler);
	},
	remove_shown:function(handler){
		/// <summary>
		/// Remove an event handler from the shown event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('shown', handler);
	},
	raiseShown:function(eventArgs){
		/// <summary>
		/// Raise the shown event
		/// </summary>
		/// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
		/// Event arguments for the shown event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('shown');
		if(handler){
			handler(this, eventArgs);
		}
	},	
	
	add_hiding:function(handler){
		/// <summary>
		/// Add an event handler for the hiding event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('hiding', handler);
	},
	remove_hiding:function(handler){
		/// <summary>
		/// Remove an event handler from the hiding event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('hiding', handler);
	},
	raiseHiding:function(eventArgs){
		/// <summary>
		/// Raise the hiding event
		/// </summary>
		/// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
		/// Event arguments for the hiding event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('hiding');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_hidden:function(handler){
		/// <summary>
		/// Add an event handler for the hidden event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('hidden', handler);
	},
	remove_hidden:function(handler){
		/// <summary>
		/// Remove an event handler from the hidden event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('hidden', handler);
	},
	raiseHidden:function(eventArgs){
		/// <summary>
		/// Raise the hidden event
		/// </summary>
		/// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
		/// Event arguments for the hidden event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('hidden');
		if(handler){
			handler(this, eventArgs);
		}
	}
}
MySpace.UI.PopupBehavior.registerClass('MySpace.UI.PopupBehavior', Sys.UI.Behavior);


MySpace.UI.PositioningMode=function(){
	/// <summary>
	/// Positioning mode describing how the popup should be positioned
	/// relative to its specified parent
	/// </summary>
	/// <field name="Absolute" type="Number" integer="true" />
	/// <field name="Center" type="Number" integer="true" />
	/// <field name="BottomLeft" type="Number" integer="true" />
	/// <field name="BottomRight" type="Number" integer="true" />
	/// <field name="TopLeft" type="Number" integer="true" />
	/// <field name="TopRight" type="Number" integer="true" />
	/// <field name="Right" type="Number" integer="true" />
	/// <field name="Left" type="Number" integer="true" />
	throw Error.invalidOperation();
}
MySpace.UI.PositioningMode.prototype={
	Absolute: 0,
	Center: 1,
	BottomLeft: 2,
	BottomRight: 3,
	TopLeft: 4,
	TopRight: 5,
	Right: 6,
	Left: 7
}
MySpace.UI.PositioningMode.registerEnum('MySpace.UI.PositioningMode');




//
// AutoComplete
//

MySpace.UI.AutoCompleteBehavior=function(element){
	/// <summary>
	/// This behavior can be attached to a textbox to enable auto-complete/auto-suggest scenarios.
	/// </summary>
	/// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false">
	/// DOM Element the behavior is associated with
	/// </param>
	/// <returns />
	MySpace.UI.AutoCompleteBehavior.initializeBase(this, [element]);
	
	// Path to the web service, or null if a page method
	this._servicePath=null;
	
	// Name of the web method
	this._serviceMethod=null;
	
	// User/page specific context provided to the web method
	this._contextKey=null;
	
	// Whether or not the the user/page specific context should be used
	this._useContextKey=false;
	this._minimumPrefixLength=3;
	this._completionItems=null;
	this._completionInterval=1000;
	this._completionListWrapperID=null;	
	this._completionListElementID=null;
	this._completionListAlwaysVisible=false;
	this._currentPrefix=null;
	this._selectIndex=-1;
	this._enableCaching=true;
	this._flyoutHasFocus=false;
	this._textBoxHasFocus=false;
	this._completionListCssClass=null;
	this._completionListItemCssClass=null;
	this._completionListFixedHeight=null;
	this._completionListMaxHeight=200;
	this._completionListWidth=null;
	this._lazyLoadPlaceholderHeight=null;
	this._groupHeaderCssClass=null;
	this._highlightedItemCssClass=null;
	this._delimiterCharacters=null;
	this._firstRowSelected=false;
	this._showOnlyCurrentWordInCompletionListItem=false;
	this._webRequest=null;  
};

MySpace.UI.AutoCompleteBehavior.prototype={
	initialize: function(){
		/// <summary>
		/// Initializes the autocomplete behavior.
		/// </summary>
		/// <returns />
		MySpace.UI.AutoCompleteBehavior.callBaseMethod(this, 'initialize');
		
		this._popupBehaviorHiddenHandler=Function.createDelegate(this, this._popupHidden);
		this._tickHandler=Function.createDelegate(this, this._onTimerTick);
		this._focusHandler=Function.createDelegate(this, this._onGotFocus);
		this._blurHandler=Function.createDelegate(this, this._onLostFocus);
		this._keyDownHandler=Function.createDelegate(this, this._onKeyDown);
		this._mouseDownHandler=Function.createDelegate(this, this._onListMouseDown);
		this._mouseUpHandler=Function.createDelegate(this, this._onListMouseUp);
		this._mouseOverHandler=Function.createDelegate(this, this._onListMouseOver);
		this._completionListBlurHandler=Function.createDelegate(this, this._onCompletionListBlur);
		this._completionListScrollHandler=Function.createDelegate(this, this._drawMissingItems);
		this._bodyClickHandler=Function.createDelegate(this, this._onBodyClick);
		
		this._timer=new MySpace.Timer();
		this._timer.set_interval(this._completionInterval);
		this._timer.add_tick(this._tickHandler);
		
		var element=this.get_element();
		this.initializeTextBox(element);
		
		if(this._completionListElementID !== null){
			this._completionListElement=$get(this._completionListElementID);
		}
		if(this._completionListElement == null){
			this._completionListElement=document.createElement('div');
			this._completionListElement.id=this.get_id() + '_completionListElem';
			element.parentNode.insertBefore(this._completionListElement, element.nextSibling);
		}
		if(this._completionListWrapperID){
			this._completionListWrapper=$get(this._completionListWrapperID);
		}
		else{
			this._completionListWrapper=this._completionListElement;
		}
		this.initializeCompletionList();
		
		if(this._completionListAlwaysVisible){
			// List starts out visible, so we need to show data right away
			this._onTimerTick();
		}
		else{
			this._popupBehavior=$create(MySpace.UI.PopupBehavior, 
					{ 'id':this.get_id()+'PopupBehavior', 'parentElement':element, "positioningMode": MySpace.UI.PositioningMode.BottomLeft }, null, null, this._completionListWrapper);
			this._popupBehavior.add_hidden(this._popupBehaviorHiddenHandler);
		
			// Create the animations (if they were set before initialize was called)
			if(this._onShow){
				this._popupBehavior.set_onShow(this._onShow);
			}
			if(this._onHide){
				this._popupBehavior.set_onHide(this._onHide);
			}
		}
	},
	
	dispose: function(){
		/// <summary>
		/// Disposes the autocomplete behavior
		/// </summary>
		/// <returns />
	   
		if(this._popupBehavior){
			if(this._popupBehaviorHiddenHandler){
				this._popupBehavior.remove_hidden(this._popupBehaviorHiddenHandler);
			}
			this._popupBehavior.dispose();
			this._popupBehavior=null;
		}
		if(this._timer){		
			this._timer.dispose();
			this._timer=null;
		}

		var element=this.get_element();
		if(element){
			$removeHandler(element, "focus", this._focusHandler);
			$removeHandler(element, "blur", this._blurHandler);
			$removeHandler(element, "keydown", this._keyDownHandler);
			$removeHandler(this._completionListElement, 'blur', this._completionListBlurHandler);
			$removeHandler(this._completionListElement, 'scroll', this._completionListScrollHandler);
			$removeHandler(this._completionListElement, 'mousedown', this._mouseDownHandler);
			$removeHandler(this._completionListElement, 'mouseup', this._mouseUpHandler);
			$removeHandler(this._completionListElement, 'mouseover', this._mouseOverHandler);
		}
		if(this._bodyClickHandler){
			$removeHandler(document.body, 'click', this._bodyClickHandler);
			this._bodyClickHandler=null;
		}
		
		this._popupBehaviorHiddenHandler=null;
		this._tickHandler=null;
		this._focusHandler=null;
		this._blurHandler=null;
		this._keyDownHandler=null;
		this._completionListBlurHandler=null;
		this._mouseDownHandler=null;
		this._mouseUpHandler=null;
		this._mouseOverHandler=null;
		
		MySpace.UI.AutoCompleteBehavior.callBaseMethod(this, 'dispose');
	},
	
	initializeTextBox: function(element){
		/// <summary>
		/// Initializes the textbox
		/// </summary>
		/// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
		/// <returns />	
		element.autocomplete="off";
		element.setAttribute("autocomplete", "off");
		$addHandler(element, "focus", this._focusHandler);		
		$addHandler(element, "blur", this._blurHandler);
		$addHandler(element, "keydown", this._keyDownHandler);
	},
	
	initializeCompletionList: function(){
		/// <summary>
		/// Initializes the autocomplete list element
		/// </summary>
		/// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
		/// <returns />		
		
		var element=this._completionListElement;
		var wrapper=this._completionListWrapper;
		var completionListStyle=element.style;
		
		if(this._completionListCssClass){
			Sys.UI.DomElement.addCssClass(element, this._completionListCssClass);
		}
		else{
			completionListStyle.textAlign='left';
			completionListStyle.overflow='auto';
			completionListStyle.overflowX='hidden';
			completionListStyle.cursor='default';
			completionListStyle.padding='0px';
			completionListStyle.margin='0px! important';
			if(Sys.Browser.agent === Sys.Browser.Safari){
				completionListStyle.border='solid 1px gray';	
				completionListStyle.backgroundColor='white';
				completionListStyle.color='black';			
			}
			else{
				completionListStyle.border='solid 1px buttonshadow';			
				completionListStyle.backgroundColor='window';
				completionListStyle.color='windowtext';
			}
			if(!this._completionListAlwaysVisible){
				wrapper.style.visibility='hidden';
			}
		}
		if(this._completionListFixedHeight){
			completionListStyle.height=this._completionListFixedHeight+"px";
		}
		$addHandler(element, "mousedown", this._mouseDownHandler);
		$addHandler(element, "mouseup", this._mouseUpHandler);
		$addHandler(element, "mouseover", this._mouseOverHandler);
		$addHandler(element, "blur", this._completionListBlurHandler); 
		$addHandler(element, "scroll", this._completionListScrollHandler);  
		$addHandler(document.body, 'click', this._bodyClickHandler);
	},
	
	_currentCompletionWord: function(){
		var elementValue=this.get_value();
		var word=elementValue;
		
		if(this.get_isMultiWord()){
			var startIndex=this._getCurrentWordStartIndex();
			var endIndex=this._getCurrentWordEndIndex(startIndex);
			
			if(endIndex <= startIndex){
				word=elementValue.substring(startIndex);
			} else{
				word=elementValue.substring(startIndex, endIndex);
			}
		}
		
		return word;
	},
	
	_getCursorIndex: function(){
		return this.get_element().selectionStart;
	},
	
	_getCurrentWordStartIndex: function(){
		var elementText=this.get_value().substring(0,this._getCursorIndex());
		
		var index=0;
		var lastIndex=-1;
		
		for(var i=0; i < this._delimiterCharacters.length; ++i){
			var curIndex=elementText.lastIndexOf(this._delimiterCharacters.charAt(i));
			if(curIndex > lastIndex){
				lastIndex=curIndex;
			}
		}	
		
		index=lastIndex;
		if(index >= this._getCursorIndex()){
			index=0;
		}
		
		return index < 0 ? 0:index + 1;	
	},
	
	_getCurrentWordEndIndex: function(wordStartIndex){
		var elementValue=this.get_value();
		var elementText=elementValue.substring(wordStartIndex);
		var index=0;
		
		for(var i=0; i < this._delimiterCharacters.length; ++i){
			var curIndex=elementText.indexOf(this._delimiterCharacters.charAt(i));
			if(curIndex > 0 && (curIndex < index || index == 0)){
				index=curIndex;
			}
		}
			   
		return index <= 0 ? elementValue.length:index + wordStartIndex;
	},
	
	get_isMultiWord:function(){
		/// <value type="Boolean" mayBeNull="false">
		/// Whether the behavior is currently in multi-word mode
		/// </value>
		return (this._delimiterCharacters != null) && (this._delimiterCharacters != '');
	},
	
	_getTextWithInsertedWord: function(wordToInsert){
		var text=wordToInsert;
		var replaceIndex=0;
		var originalText=this.get_value();
		
		if(this.get_isMultiWord()){
			var startIndex=this._getCurrentWordStartIndex();
			var endIndex=this._getCurrentWordEndIndex(startIndex);
			var prefix='';
			var suffix='';
			
			if(startIndex > 0){
				prefix=originalText.substring(0, startIndex);
			}
			if(endIndex > startIndex){
				suffix=originalText.substring(endIndex);
			}
			
			text=prefix + wordToInsert + suffix;
		}
		
		return text;
	},
	
	_hideCompletionList: function(){
		/// <summary>
		/// Hides the autocomplete flyout list
		/// </summary>
		/// <returns />
		
		if(!(this._popupBehavior && this._popupBehavior.get_visible())){
			return;
		}
		
		var eventArgs=new Sys.CancelEventArgs();
		this.raiseHiding(eventArgs);
		if(eventArgs.get_cancel()){
			return;
		}

		// Actually hide the popup
		this.hidePopup();
	},
	
	showPopup:function(){
		/// <summary>
		/// Show the completion list popup
		/// </summary>
		/// <remarks>
		/// If you cancel the showing event, you should still call
		/// showPopup to ensure consistency of the internal state
		/// </remarks>
		if(this._popupBehavior){
			this._popupBehavior.show();
			this.raiseShown(Sys.EventArgs.Empty);
		}
	},
	
	hidePopup:function(){
		/// <summary>
		/// Hide the completion list popup
		/// </summary>
		/// <remarks>
		/// If you cancel the hiding event, you should still
		/// call hidePopup to ensure consistency of the internal
		/// state
		/// </remarks>

		if(this._popupBehavior){
			this._popupBehavior.hide();
		}
		else{
			this._popupHidden();
		}
	},
	
	_popupHidden:function(){
		/// <summary>
		/// Clean up the completion list popup after it has been hidden
		/// </summary>
	
		this._completionListElement.innerHTML='';
		this._selectIndex=-1;
		this._flyoutHasFocus=false;
		
		this.raiseHidden(Sys.EventArgs.Empty);
	},
	
	_highlightItem: function(item){
		/// <summary>
		/// Highlights the specified item
		/// </summary>
		/// <param name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
		/// <returns />
		
		var children=this._completionListElement.childNodes;

		// Unselect any previously highlighted item
		for(var i=0; i < children.length; i++){
			var child=children[i];
			if(child._highlighted){
				child._highlighted=false;
				if(this._completionListItemCssClass){
					Sys.UI.DomElement.removeCssClass(child, this._highlightedItemCssClass);
					Sys.UI.DomElement.addCssClass(child, this._completionListItemCssClass);
				}
				else{
					if(Sys.Browser.agent === Sys.Browser.Safari){
						child.style.backgroundColor='white';
						child.style.color='black';
					}
					else{
						child.style.backgroundColor='window';
						child.style.color='windowtext';
					}
				}
				this.raiseItemOut(new MySpace.UI.AutoCompleteItemEventArgs(child, child.firstChild.nodeValue, child._value));
			}
		}
		
		// Highlight the new item
		if(this._highlightedItemCssClass){
			Sys.UI.DomElement.removeCssClass(item, this._completionListItemCssClass);
			Sys.UI.DomElement.addCssClass(item, this._highlightedItemCssClass);
		}
		else{
			if(Sys.Browser.agent === Sys.Browser.Safari){
				item.style.backgroundColor='lemonchiffon';
			}
			else{
				item.style.backgroundColor='highlight';
				item.style.color='highlighttext';
			}
			
		}
		item._highlighted=true;
		if(!item._isPlaceholder){
			this.raiseItemOver(new MySpace.UI.AutoCompleteItemEventArgs(item, item.firstChild.nodeValue, item._value));
		}
	},

	_onBodyClick:function(ev){
		var tgt=ev.target;
		while(tgt){
			if(tgt==this._completionListWrapper){
				return;
			}
			tgt=tgt.parentNode;
		}
		this._onCompletionListBlur(ev);
	},
	
	_onCompletionListBlur: function(ev){
		/// <summary>
		/// Handler for the blur event on the autocomplete flyout.
		/// </summary>
		/// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
		/// <returns />	
		this._hideCompletionList();
	},
	
	_getCompletionItem:function(node){
		/// <summary>
		/// Finds the list item that the node descends from, if any
		/// </summary>
		/// <returns />
		/// <param name="node" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
		while(node){
			if(node.parentNode==this._completionListElement && !node._isGroupHeader){
				return node;
			}
			node=node.parentNode;
		}
	},
	
	_onListMouseDown: function(ev){
		/// <summary>
		/// Handler for the mousedown event on the autocomplete flyout.
		/// </summary>
		/// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
		/// <returns />	
		var item=this._getCompletionItem(ev.target); 
		if(item){
			this._setText(item);
			this._flyoutHasFocus=false;
			ev.stopPropagation();
		}
		else{ // focus is still on the flyout and we do not want to hide it
			this._flyoutHasFocus=true;
		}
	},
	
	_onListMouseUp: function(ev){
		/// <summary>
		/// Handler for the mouseup event on the autocomplete flyout.
		/// </summary>
		/// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
		/// <returns />	
		if(!this._flyoutHasFocus){
			try{
				this.get_element().focus();
			}catch(e){} // IE throws if the input box has been hidden
		}
	},
	
	_onListMouseOver: function(ev){
		/// <summary>
		/// Handler for the mouseover event on the autocomplete flyout.
		/// </summary>
		/// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
		/// <returns />	  
		var item=ev.target;
		if(item !== this._completionListElement){
			item=this._getCompletionItem(item);
			if(item){
				this._highlightItem(item);
				this._selectIndex=Array.indexOf(item.parentNode.childNodes, item);
			}
		}
	},

	_onGotFocus: function(ev){
		/// <summary>
		/// Handler for textbox focus event.
		/// </summary>
		/// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
		/// <returns />	  
		this._textBoxHasFocus=true;
		if(this._flyoutHasFocus){
			// hide the flyout now that the focus is back on the textbox
			this._hideCompletionList();		  
		}
		if((this._minimumPrefixLength == 0) && (!this.get_value())){
			this._timer.set_enabled(true); 
			// only start the timer if the minimumprefixlength is 0
			// since we would like to retrieve results even if
			// the user has not entered any text and the textbox is empty.
		}
	},
	
	_onKeyDown: function(ev){
		/// <summary>
		/// Handler for the textbox keydown event.
		/// </summary>
		/// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
		/// <returns />	  
		this._timer.set_enabled(false); 
		// the last key press occured so we need to "reset" the timer.
		var k=ev.keyCode ? ev.keyCode:ev.rawEvent.keyCode;
		if(k === Sys.UI.Key.esc){
			this._hideCompletionList();
			ev.preventDefault();
			ev.stopPropagation();
		}
		else if(k === Sys.UI.Key.up){
			var newIndex=this._getAdjacentItemIndex(this._selectIndex, -1);
			if(newIndex >= 0){
				this._selectIndex=newIndex;
				this._handleScroll(this._completionListElement.childNodes[newIndex], newIndex);
				this._highlightItem(this._completionListElement.childNodes[newIndex]);
				ev.stopPropagation();	 
				ev.preventDefault();
			}
		}
		else if(k === Sys.UI.Key.down){
			var newIndex=this._getAdjacentItemIndex(this._selectIndex, 1);	
			if(newIndex < this._completionListElement.childNodes.length){
				this._selectIndex=newIndex;
				this._handleScroll(this._completionListElement.childNodes[newIndex], newIndex);
				this._highlightItem(this._completionListElement.childNodes[newIndex]);			  
				ev.stopPropagation();				
				ev.preventDefault();
			}
		}
		else if(k === Sys.UI.Key.enter){
			if(this._selectIndex !== -1){
				this._setText(this._completionListElement.childNodes[this._selectIndex]);
				ev.preventDefault();
				ev.stopPropagation();
			} else{
				// close the popup
				this.hidePopup();
			}
		}
		else if(k === Sys.UI.Key.tab){
			if(this._selectIndex !== -1){
				this._setText(this._completionListElement.childNodes[this._selectIndex]);
			}
		}
		else{
			this._timer.set_enabled(true);
			// start the timer to retrieve results since now it is an actual key
		}
	},
	
	_getAdjacentItemIndex:function(index, offset){
		var childNodes=this._completionListElement.childNodes;
		
		do{
			index+=offset;
		}while(index>=0 && index<childNodes.length && childNodes[index]._isGroupHeader);
		
		return index;
	},
	
	_handleScroll:function(element, index){
		/// <summary>
		/// Method to determine if an item is in view or not
		/// </summary>
		/// <returns />
		/// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
		/// <param name="index" type="Number" DomElement="false" mayBeNull="true" />		
		var flyout=this._completionListElement,
			elemHeight=element.offsetHeight || 0,
			isAbsolute=element.offsetParent==flyout,
			offsetStart=isAbsolute ? 0 : flyout.offsetTop;
		
		var scrollDown=element.offsetTop-offsetStart+elemHeight-flyout.scrollTop-flyout.offsetHeight;
		if(scrollDown>0){ flyout.scrollTop += scrollDown; }
		
		var scrollUp=flyout.scrollTop-element.offsetTop+offsetStart;
		if(scrollUp>0){ flyout.scrollTop -= scrollUp; }
	},
	
	_handleFlyoutFocus:function(){
		/// <summary>
		/// Method to handle flyout focus if textbox loses focus.
		/// </summary>
		/// <returns />   
		if(!this._textBoxHasFocus){ 
			if(!this._flyoutHasFocus){
				if(this._webRequest){
					// abort the web service call if we are losing focus. no sense having it delay future web requests.
					this._webRequest.get_executor().abort();
					this._webRequest=null;
				}
				// the textbox lost focus and the flyout does not have it
				this._hideCompletionList();
			} else{
				// keep the flyout around otherwise
			}
		}
	},	 
	
	_onLostFocus: function(){
		/// <summary>
		/// Handler textbox blur event.
		/// </summary>
		/// <returns />	 
		this._textBoxHasFocus=false;   
		this._timer.set_enabled(false);
		/* the rest of the onblur handling will be done in
		this method after a minor delay to ensure we do not close the flyout 
		if a user clicks on its scroll bars for example */  
		window.setTimeout(Function.createDelegate(this, this._handleFlyoutFocus), 500);
	},  
	
	_onMethodComplete: function(result, context){
		/// <summary>
		/// Handler invoked when the webservice call is completed.
		/// </summary>
		/// <param name="result" type="Object" DomElement="false" mayBeNull="true" />
		/// <param name="context" type="String" DomElement="false" mayBeNull="true" />		
		/// <returns /> 
		this._webRequest=null; // clear out our saved WebRequest object	
		this._update(context, result, /* cacheResults */ true);
	},
	
	_onMethodFailed: function(err, response, context){
		/// <summary>
		/// Handler invoked when the webservice call fails, currently a noop
		/// </summary>
		/// <param name="err" type="Object" DomElement="false" mayBeNull="true" />		
		/// <param name="result" type="Object" DomElement="false" mayBeNull="true" />
		/// <param name="context" type="String" DomElement="false" mayBeNull="true" />
		/// <returns />	 
		// clear out our saved WebRequest object
		this._webRequest=null; 
	},
	
	_onTimerTick: function(sender, eventArgs){
		/// <summary>
		/// Handler invoked when a timer tick occurs
		/// </summary>
		/// <param name="sender" type="Object" mayBeNull="true"/>
		/// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="true" />		
		/// <returns />
		
		// turn off the timer until another key is pressed.
		this._timer.set_enabled(false);
		
		var text=this._currentCompletionWord();
		
		if(text.trim().length < this._minimumPrefixLength){
			this._currentPrefix=null;
			this._update('', null, /* cacheResults */ false);
			return;
		}
		
		var isShowing=(!this._popupBehavior || this._popupBehavior.get_visible());
		// there is new content in the textbox or the textbox is empty but the min prefix length is 0
	   if((this._currentPrefix !== text || !isShowing) || ((text == "") && (this._minimumPrefixLength == 0))){
			this._currentPrefix=text;
			if((text != "") && this._cache && this._cache[text]){
				this._update(text, this._cache[text], /* cacheResults */ false);
				return;
			}
			// Raise the populating event and optionally cancel the web service invocation
			var eventArgs=new Sys.CancelEventArgs();
			this.raisePopulating(eventArgs);
			if(eventArgs.get_cancel()){
				return;
			}
			
			this._fetchCompletionItems(text);
		}
	},
	
	_fetchCompletionItems:function(prefixText){
		if(this._servicePath && this._serviceMethod){
			// Create the service parameters and optionally add the context parameter
			// (thereby determining which method signature we're expecting...)
			var params={ prefixText:this._currentPrefix };
			if(this._useContextKey){
				params.contextKey=this._contextKey;
			}
			
			if(this._webRequest){
				// abort the previous web service call if we 
				// are issuing a new one and the previous one is 
				// active.
				this._webRequest.get_executor().abort();
				this._webRequest=null;
			}
			// Invoke the web service
			this._webRequest=Sys.Net.WebServiceProxy.invoke(this.get_servicePath(), this.get_serviceMethod(), false, params,
										Function.createDelegate(this, this._onMethodComplete),
										Function.createDelegate(this, this._onMethodFailed),
										prefixText);
		}
		else{
			var matches=this.getCompletionItems(prefixText);
			if(matches){
				this._update(prefixText, matches);
			}
		}
	},
	
	getCompletionItems:function(prefixText){
		prefixText=prefixText.toLowerCase();
		var matches=[];
		
		for(var i=0;i<this._completionItems.length;i++){
			var item=this._completionItems[i];
			if((item.text || item).toLowerCase().startsWith(prefixText)){
				matches.push(this._completionItems[i]);
			}
		}
	
		return matches;
	},
	
	_setText: function(item){
		/// <summary>
		/// Method to set the selected autocomplete option on the textbox
		/// </summary>
		/// <param name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="true">
		/// Item to select
		/// </param>
		/// <returns />
		
		var text=null;
		if(item){
			text=item._text || (item.firstChild ? item.firstChild.nodeValue : null);
		}
		this._timer.set_enabled(false);

		var newText=this._showOnlyCurrentWordInCompletionListItem ? this._getTextWithInsertedWord(text):text;
		this.set_value(newText, true);

		this.raiseItemSelected(new MySpace.UI.AutoCompleteItemEventArgs(item, text, item ? item._value:null));

		this._currentPrefix=this._currentCompletionWord();
		this._hideCompletionList();
	},
	
	_update: function(prefixText, completionItems, cacheResults){
		/// <summary>
		/// Method to update the status of the autocomplete behavior
		/// </summary>
		/// <param name="prefixText" type="String" DomElement="false" mayBeNull="true" />
		/// <param name="completionItems" type="Object" DomElement="false" mayBeNull="true" />
		/// <param name="cacheResults" type="Object" DomElement="false" mayBeNull="true" />
		/// <returns />	   
		if(cacheResults && this.get_enableCaching()){
			if(!this._cache){
				this._cache={};
			}
			this._cache[prefixText]=completionItems;
		}
		
		this._currentCompletionItems=completionItems;
		
		// If the target control loses focus or 
		// if the value in textbox has changed before the webservice returned
		// completion items we don't need to show popup 
		if((!this._completionListAlwaysVisible && !this._textBoxHasFocus) || (prefixText != this._currentCompletionWord())){
			this._hideCompletionList();
			return;
		}  
		
		if(this._completionListAlwaysVisible || (completionItems && completionItems.length)){
			this._completionListElement.innerHTML='';
			this._selectIndex=-1;
			var _firstChild=null, text=null, value=null, itemElement=null, placeholderHeight=this._lazyLoadPlaceholderHeight;
			
			for(var i=0; i < completionItems.length; i++){
				if(completionItems[i] && completionItems[i].groupHeader){
					itemElement=this.createGroupHeader(completionItems[i]);
				}
				else if(placeholderHeight){
					itemElement=document.createElement("div");
					itemElement.style.height=placeholderHeight+"px";
					itemElement._isPlaceholder=true;
				}
				else{
					itemElement=this.createCompletionItem(completionItems[i]);
					
					// set the first child if it is null
					if(_firstChild == null){
						_firstChild=itemElement;
					}
				}

				this._completionListElement.appendChild(itemElement);
			}
			var elementBounds=Sys.UI.DomElement.getBounds(this.get_element());		
			this._completionListElement.style.width=(this.get_completionListWidth() || Math.max(1, elementBounds.width - 2)) + 'px';
			
			this.raisePopulated(Sys.EventArgs.Empty);
			
			var eventArgs=new Sys.CancelEventArgs();
			this.raiseShowing(eventArgs);
			if(!eventArgs.get_cancel()){
				if(!this._completionListFixedHeight){
					this._completionListElement.style.height="1px";
				}
				this.showPopup();
				
				if(!this._completionListFixedHeight){
					// Cap its size at the max height
					this._completionListElement.style.height="";
					if(this._completionListElement.offsetHeight > this._completionListMaxHeight){
						this._completionListElement.style.height=this._completionListMaxHeight+"px";
					}
				}
				this._completionListElement.scrollTop=0;
				
				// Check if the first Row is to be selected by default and if yes highlight it and updated selectIndex.
				if(this._firstRowSelected && (_firstChild != null)){
					this._highlightItem( _firstChild );
					this._selectIndex=0;
				}
				
				this._drawMissingItems();
			}			
		} else{
			this._hideCompletionList();
		}
	},
	
	_drawMissingItems:function(){
		var list=this._completionListElement,
			isAbsolute=list.childNodes[0] && (list.childNodes[0].offsetParent==list),
			offsetStart=isAbsolute ? 0 : list.offsetTop,
			yStart=offsetStart+list.scrollTop-4*this._lazyLoadPlaceholderHeight,
			yEnd=yStart+list.offsetHeight+8*this._lazyLoadPlaceholderHeight,
			childNodesLength=list.childNodes.length,
			el=null;
			
		for(var i=0;i<childNodesLength;i++){			
			el=list.childNodes[i];
			
			if(el.offsetTop < yStart){ continue; }
			if(el.offsetTop > yEnd){ break; }
			
			if(el._isPlaceholder){
				var newEl=this.createCompletionItem(this._currentCompletionItems[i]);
				list.replaceChild(newEl, el);
				
				if(this._selectIndex==-1 && this._firstRowSelected){
					this._highlightItem(newEl);
					this._selectIndex=i;
				}
			}
		}
	},
	
	createCompletionItem:function(item){
		// Create the item				
		var itemElement=document.createElement('div');
		var text, value;
		
		// Get the text/value for the item
		if(item && item.text){
			// Use the text and value pair returned from the web service
			text=item.text;
			value=item.value;
		} else{
			// If the web service only returned a regular string, use it for
			// both the text and the value
			text=item;
			value=item; 
		} 

		// Set the text/value for the item
		// ShowOnlyCurrentWordInCompletionListItem support
		var optionText=this._showOnlyCurrentWordInCompletionListItem ? text: this._getTextWithInsertedWord(text);
		itemElement.appendChild(document.createTextNode(optionText));
		itemElement._value=value;
		
		if(this._completionListItemCssClass){
			Sys.UI.DomElement.addCssClass(itemElement, this._completionListItemCssClass);
		}
		else{
			var itemElementStyle=itemElement.style;
			itemElementStyle.padding='0px';
			itemElementStyle.textAlign='left';
			itemElementStyle.textOverflow='ellipsis';
			itemElementStyle.cursor='pointer';
			// workaround for safari since normal colors do not
			// show well there.
			if(Sys.Browser.agent === Sys.Browser.Safari){
				itemElementStyle.backgroundColor='white';
				itemElementStyle.color='black';
			} else{
				itemElementStyle.backgroundColor='window';
				itemElementStyle.color='windowtext';
			}
		}	
		
		return itemElement;
	},
	
	createGroupHeader:function(item){
		var itemElement=document.createElement("div");
		itemElement.appendChild(document.createTextNode(item.groupHeader));
		itemElement._isGroupHeader=true;
		
		if(this._groupHeaderCssClass){
			Sys.UI.DomElement.addCssClass(itemElement, this._groupHeaderCssClass);
		}
		else{
			var itemElementStyle=itemElement.style;
			itemElementStyle.fontWeight='bold';
			itemElementStyle.fontStyle='italic';
		}
		
		return itemElement;
	},
	
	get_value:function(){
		var el=this.get_element();
		var b=Sys.UI.Behavior.getBehaviorByName(el, "DefaultTextboxBehavior");
		return b ? b.get_value() : el.value;
	},
	set_value:function(val, noUpdate){
		var el=this.get_element();
		var b=Sys.UI.Behavior.getBehaviorByName(el, "DefaultTextboxBehavior");
		if(b){
			b.set_value(val);
		}
		else{
			el.value=val || "";
		}
		if(!noUpdate){
			this._onTimerTick();	// Force an update of the completion list		
		}
	},
	
	get_onShow:function(){
		/// <value type="String" mayBeNull="true">
		/// Generic OnShow Animation's JSON definition
		/// </value>
		return this._popupBehavior ? this._popupBehavior.get_onShow():this._onShow;
	},
	set_onShow:function(value){
		if(this._popupBehavior){
			this._popupBehavior.set_onShow(value)
		} else{
			this._onShow=value;
		}
	},
	onShow:function(){
		/// <summary>
		/// Play the OnShow animation
		/// </summary>
		/// <returns />
		if(this._popupBehavior){
			this._popupBehavior.onShow();
		}
	},
		
	get_onHide:function(){
		/// <value type="String" mayBeNull="true">
		/// Generic OnHide Animation's JSON definition
		/// </value>
		return this._popupBehavior ? this._popupBehavior.get_onHide():this._onHide;
	},
	set_onHide:function(value){
		if(this._popupBehavior){
			this._popupBehavior.set_onHide(value)
		} else{
			this._onHide=value;
		}
	},
	onHide:function(){
		/// <summary>
		/// Play the OnHide animation
		/// </summary>
		/// <returns />
		if(this._popupBehavior){
			this._popupBehavior.onHide();
		}
	},
	
	get_visible:function(){
		return this._popupBehavior && this._popupBehavior.get_visible(); 
	},
	
	get_completionItems:function(){
		return this._completionItems;
	},
	set_completionItems:function(value){
		this._completionItems=value;
	},
	
	get_completionInterval: function(){
		/// <value type="Number" integer="true" maybeNull="true">
		/// Auto completion timer interval in milliseconds.
		/// </value>
		return this._completionInterval;
	},
	set_completionInterval: function(value){
		this._completionInterval=value;
	},
	
	get_completionList: function(){
		/// <value type="Sys.UI.DomElement" domElement="true" maybeNull="true">
		/// List dom element.
		/// </value>
		return this._completionListElement;
	},
	set_completionList: function(value){
		this._completionListElement=value;
	},
	
	get_minimumPrefixLength: function(){
		/// <value type="Number" integer="true" maybeNull="true">
		/// Minimum text prefix length required to call the webservice.
		/// </value>
		return this._minimumPrefixLength;
	},
	set_minimumPrefixLength: function(value){
		this._minimumPrefixLength=value;
	},
	
	get_serviceMethod: function(){
		/// <value type="String" maybeNull="false">
		/// Web service method.
		/// </value>
		return this._serviceMethod;
	},
	set_serviceMethod: function(value){
		this._serviceMethod=value;
	},
	
	get_servicePath: function(){
		/// <value type="String" maybeNull="true">
		/// Web service url.
		/// </value>
		return this._servicePath;
	},
	set_servicePath: function(value){
		this._servicePath=value;
	},
	
	get_contextKey:function(){
		/// <value type="String" mayBeNull="true">
		/// User/page specific context provided to an optional overload of the
		/// web method described by ServiceMethod/ServicePath.  If the context
		/// key is used, it should have the same signature with an additional
		/// parameter named contextKey of type string.
		/// </value>
		return this._contextKey;
	},
	set_contextKey:function(value){
		this._contextKey=value;
		this.set_useContextKey(true);
	},
	
	get_useContextKey:function(){
		/// <value type="Boolean">
		/// Whether or not the ContextKey property should be used.  This will be
		/// automatically enabled if the ContextKey property is ever set
		/// (on either the client or the server).  If the context key is used,
		/// it should have the same signature with an additional parameter
		/// named contextKey of type string.
		/// </value>
		return this._useContextKey;
	},
	set_useContextKey:function(value){
		this._useContextKey=value;
	},
	
	get_enableCaching: function(){
		/// <value type="Boolean" maybeNull="true">
		/// Get or sets whether suggestions retrieved from the webservice
		/// should be cached.
		/// </value>
		return this._enableCaching;
	},
	set_enableCaching: function(value){
		this._enableCaching=value;
	},
	
	get_completionListWrapperID:function(){
		return this._completionListWrapperID;
	},
	set_completionListWrapperID:function(value){
		this._completionListWrapperID=value;
	},
	
	get_completionListElementID: function(){
		/// <value type="String" maybeNull="true">
		/// ID of the completion div element.
		/// </value>
		return this._completionListElementID;
	},
	set_completionListElementID: function(value){
		this._completionListElementID=value;
	},  
	
	get_completionListAlwaysVisible:function(){
		return this._completionListAlwaysVisible;
	},
	set_completionListAlwaysVisible:function(value){
		this._completionListAlwaysVisible=value;
	},
	
	get_completionListCssClass:function(){
		/// <value type="String" maybeNull="true">
		/// Css class name that will be used to style the completion list element.
		/// </value>
		return this._completionListCssClass;
	},
	set_completionListCssClass:function(value){
		this._completionListCssClass=value;	
	},   
	
	get_completionListItemCssClass:function(){
		/// <value type="String" maybeNull="true">
		/// Css class name that will be used to style an item in the completion list.
		/// </value>
		return this._completionListItemCssClass;
	},
	set_completionListItemCssClass:function(value){
		this._completionListItemCssClass=value;	
	},
	
	get_completionListFixedHeight:function(){
		/// <value type="Number" maybeNull="true">
		/// Height in pixels of the completion list.  If not specified, the list will grow or
		/// shrink to fit the displayed items (subject to completionListMaxHeight).
		/// </value>
		return this._completionListFixedHeight;
	},
	set_completionListFixedHeight:function(value){
		this._completionListFixedHeight=value;
	},
	
	get_completionListMaxHeight:function(){
		/// <value type="Number" maybeNull="true">
		/// Maximum height in pixels of the completion list.  Has no effect if
		/// a completionListFixedHeight is specified. Default is 200.
		/// </value>
		return this._completionListMaxHeight;
	},
	set_completionListMaxHeight:function(value){
		this._completionListMaxHeight=value;
	},
	
	get_completionListWidth:function(){
		return this._completionListWidth;
	},
	set_completionListWidth:function(value){
		this._completionListWidth=value;
	},

	get_lazyLoadPlaceholderHeight:function(){
		return this._lazyLoadPlaceholderHeight;
	},
	set_lazyLoadPlaceholderHeight:function(value){
		this._lazyLoadPlaceholderHeight=value;
	},
	
	get_groupHeaderCssClass:function(){
		return this._groupHeaderCssClass;
	},
	set_groupHeaderCssClass:function(value){
		this._groupHeaderCssClass=value;
	},
	
	get_highlightedItemCssClass:function(){
		/// <value type="String" maybeNull="true">
		/// Css class name that will be used to style a highlighted item in the list.
		/// </value>
		return this._highlightedItemCssClass;
	},
	set_highlightedItemCssClass:function(value){
		this._highlightedItemCssClass=value;
	},
	
	get_delimiterCharacters: function(){
		/// <value type="String">
		/// Gets or sets the character(s) used to seperate words for autocomplete.
		/// </value>
		return this._delimiterCharacters;
	},
	set_delimiterCharacters: function(value){
		this._delimiterCharacters=value;
	},
	
	get_firstRowSelected:function(){
		/// <value type="Boolean" maybeNull="true">
		/// Flag to determine if the first option in the flyout is selected or not. 
		/// </value>
		return this._firstRowSelected;
	},
	set_firstRowSelected:function(value){
		this._firstRowSelected=value;
	},
	
	get_showOnlyCurrentWordInCompletionListItem:function(){
		/// <value type="Boolean">
		/// If Delimiter characters are specified and showOnlyCurrentWordInCompletionListItem is 
		/// set to true, then the completion list displays suggestions just for the current word, 
		/// otherwise, it displays the whole string that will show up in the TextBox if that
		/// item is selected, which is the current default.
		/// </value>
		return this._showOnlyCurrentWordInCompletionListItem;
	},
	set_showOnlyCurrentWordInCompletionListItem:function(value){
		this._showOnlyCurrentWordInCompletionListItem=value;
	},

	add_populating:function(handler){
		/// <summary>
		/// Add an event handler for the populating event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('populating', handler);
	},
	remove_populating:function(handler){
		/// <summary>
		/// Remove an event handler from the populating event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('populating', handler);
	},
	raisePopulating:function(eventArgs){
		/// <summary>
		/// Raise the populating event
		/// </summary>
		/// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
		/// Event arguments for the populating event
		/// </param>
		/// <returns />
		/// <remarks>
		/// The populating event can be used to provide custom data to AutoComplete
		/// instead of using a web service.  Just cancel the event (using the
		/// CancelEventArgs) and pass your own data to the _update method.
		/// </remarks>
		
		var handler=this.get_events().getHandler('populating');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_populated:function(handler){
		/// <summary>
		/// Add an event handler for the populated event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('populated', handler);
	},
	remove_populated:function(handler){
		/// <summary>
		/// Remove an event handler from the populated event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('populated', handler);
	},
	raisePopulated:function(eventArgs){
		/// <summary>
		/// Raise the populated event
		/// </summary>
		/// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
		/// Event arguments for the populated event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('populated');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_showing:function(handler){
		/// <summary>
		/// Add an event handler for the showing event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('showing', handler);
	},
	remove_showing:function(handler){
		/// <summary>
		/// Remove an event handler from the showing event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('showing', handler);
	},
	raiseShowing:function(eventArgs){
		/// <summary>
		/// Raise the showing event
		/// </summary>
		/// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
		/// Event arguments for the showing event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('showing');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_shown:function(handler){
		/// <summary>
		/// Add an event handler for the shown event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('shown', handler);
	},
	remove_shown:function(handler){
		/// <summary>
		/// Remove an event handler from the shown event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('shown', handler);
	},
	raiseShown:function(eventArgs){
		/// <summary>
		/// Raise the shown event
		/// </summary>
		/// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
		/// Event arguments for the shown event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('shown');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_hiding:function(handler){
		/// <summary>
		/// Add an event handler for the hiding event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('hiding', handler);
	},
	remove_hiding:function(handler){
		/// <summary>
		/// Remove an event handler from the hiding event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('hiding', handler);
	},
	raiseHiding:function(eventArgs){
		/// <summary>
		/// Raise the hiding event
		/// </summary>
		/// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
		/// Event arguments for the hiding event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('hiding');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_hidden:function(handler){
		/// <summary>
		/// Add an event handler for the hidden event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('hidden', handler);
	},
	remove_hidden:function(handler){
		/// <summary>
		/// Remove an event handler from the hidden event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('hidden', handler);
	},
	raiseHidden:function(eventArgs){
		/// <summary>
		/// Raise the hidden event
		/// </summary>
		/// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
		/// Event arguments for the hidden event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('hidden');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_itemSelected:function(handler){
		/// <summary>
		/// Add an event handler for the itemSelected event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('itemSelected', handler);
	},
	remove_itemSelected:function(handler){
		/// <summary>
		/// Remove an event handler from the itemSelected event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('itemSelected', handler);
	},
	raiseItemSelected:function(eventArgs){
		/// <summary>
		/// Raise the itemSelected event
		/// </summary>
		/// <param name="eventArgs" type="MySpace.UI.AutoCompleteItemEventArgs" mayBeNull="false">
		/// Event arguments for the itemSelected event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('itemSelected');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_itemOver:function(handler){
		/// <summary>
		/// Add an event handler for the itemOver event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('itemOver', handler);
	},
	remove_itemOver:function(handler){
		/// <summary>
		/// Remove an event handler from the itemOver event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('itemOver', handler);
	},
	raiseItemOver:function(eventArgs){
		/// <summary>
		/// Raise the itemOver event
		/// </summary>
		/// <param name="eventArgs" type="MySpace.UI.AutoCompleteItemEventArgs" mayBeNull="false">
		/// Event arguments for the itemOver event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('itemOver');
		if(handler){
			handler(this, eventArgs);
		}
	},
	
	add_itemOut:function(handler){
		/// <summary>
		/// Add an event handler for the itemOut event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().addHandler('itemOut', handler);
	},
	remove_itemOut:function(handler){
		/// <summary>
		/// Remove an event handler from the itemOut event
		/// </summary>
		/// <param name="handler" type="Function" mayBeNull="false">
		/// Event handler
		/// </param>
		/// <returns />
		this.get_events().removeHandler('itemOut', handler);
	},
	raiseItemOut:function(eventArgs){
		/// <summary>
		/// Raise the itemOut event
		/// </summary>
		/// <param name="eventArgs" type="MySpace.UI.AutoCompleteItemEventArgs" mayBeNull="false">
		/// Event arguments for the itemOut event
		/// </param>
		/// <returns />
		
		var handler=this.get_events().getHandler('itemOut');
		if(handler){
			handler(this, eventArgs);
		}
	}
}
MySpace.UI.AutoCompleteBehavior.registerClass('MySpace.UI.AutoCompleteBehavior', Sys.UI.Behavior);


MySpace.UI.AutoCompleteItemEventArgs=function(item, text, value){
	/// <summary>
	/// Event arguments used when the itemSelected event is raised
	/// </summary>
	/// <param name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="true">
	/// Item
	/// </param>
	/// <param name="text" type="String" mayBeNull="true">
	/// Text of the item
	/// </param>
	/// <param name="value" type="String" mayBeNull="true" optional="true">
	/// Value of the item different from text if specifically returned by the webservice
	/// as autocomplete json text/value item(using AutoComplete.CreateAutoCompleteItem); otherwise same as text.
	/// </param>
	MySpace.UI.AutoCompleteItemEventArgs.initializeBase(this);
	
	this._item=item;
	this._text=text;
	this._value=(value !== undefined) ? value:null;
}
MySpace.UI.AutoCompleteItemEventArgs.prototype={
	get_item:function(){
		/// <value type="Sys.UI.DomElement" DomElement="true" mayBeNull="true">
		/// Item
		/// </value>
		return this._item;
	},
	set_item:function(value){
		this._item=value;
	},
	
	get_text:function(){
		/// <value type="String" maybeNull="true">
		/// Text of the item
		/// </value>
		return this._text;
	},
	set_text:function(value){
		this._text=value;
	},
	
	get_value:function(){
		/// <value type="String" maybeNull="true">
		/// Value of the item different from text if specifically returned by the webservice
		/// as autocomplete json text/value item(using AutoComplete.CreateAutoCompleteItem); otherwise same as text.
		/// </value>
		return this._value;
	},
	set_value:function(value){
		this._value=value;
	}
}
MySpace.UI.AutoCompleteItemEventArgs.registerClass('MySpace.UI.AutoCompleteItemEventArgs', Sys.EventArgs);


MySpace.UI.ComboBoxBehavior=function(element){
	MySpace.UI.ComboBoxBehavior.initializeBase(this, [element]);
	
	this._lazyLoadPlaceholderHeight=13;
};
MySpace.UI.ComboBoxBehavior.prototype={
	initialize:function(){
		MySpace.UI.ComboBoxBehavior.callBaseMethod(this, 'initialize');
	
		var el=this.get_element();
		Sys.UI.DomElement.addCssClass(el, "msComboBox");
		
		var arrow=this._arrowNode=document.createElement("img");
		arrow.src="https://web.archive.org/web/20081216130713/http://x.myspacecdn.com/modules/common/static/img/spacer.gif";
		arrow.className="msComboBoxArrow";
		arrow.style.height=(el.offsetHeight-2)+"px";
		$addHandler(arrow, "click", Function.createDelegate(this, this._toggleComboBoxList));
		
		// CSS hack is needed on Safari but not Chrome
		if(navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1){
			Sys.UI.DomElement.addCssClass(arrow, "msComboBoxArrowSafari");
		}
		
		if(el.nextSibling){
			el.parentNode.insertBefore(arrow, el.nextSibling);
		}
		else{
			el.parentNode.appendChild(arrow);
		}
	},
	
	_toggleComboBoxList:function(ev){
		if(this._popupBehavior && this._popupBehavior.get_visible()){
			this.hidePopup();
		}
		else{
			this._textBoxHasFocus=true;
			this._showingFullList=true;
			this._fetchCompletionItems("");
			this._showingFullList=false;
		}
		
		ev.stopPropagation();
	},
	
	_onKeyDown:function(ev){
		var k=ev.keyCode ? ev.keyCode:ev.rawEvent.keyCode;
		if(k==Sys.UI.Key.down && this._popupBehavior && !this._popupBehavior.get_visible()){
			this._toggleComboBoxList(ev);
		}
		else{
			MySpace.UI.ComboBoxBehavior.callBaseMethod(this, "_onKeyDown", arguments);
		}
	},
	
	_currentCompletionWord:function(){
		if(this._showingFullList){
			return "";
		}
		else{
			return MySpace.UI.ComboBoxBehavior.callBaseMethod(this, "_currentCompletionWord");
		}
	},
	
	get_completionListWidth:function(){
		var elementBounds=Sys.UI.DomElement.getBounds(this.get_element());		
		return elementBounds.width + this._arrowNode.offsetWidth - 2;
	}
};
MySpace.UI.ComboBoxBehavior.registerClass("MySpace.UI.ComboBoxBehavior", MySpace.UI.AutoCompleteBehavior);



//
// JsonpWebServiceProxy class
//

Type.registerNamespace("MySpace.Net");
MySpace.Net.JsonpWebServiceProxy = function() {};
MySpace.Net.JsonpWebServiceProxy.registerClass("MySpace.Net.JsonpWebServiceProxy");

MySpace.Net.JsonpWebServiceProxy.invoke=function(url, params, onSuccess, onFailure, jsonpParam, context, timeout){
	params[jsonpParam || "jsonp"]="MySpace.Net.JsonpWebServiceProxy._handlers["+(++this._counter)+"]";
	
	var count=this._counter;
	this._handlers[count]=function(res){
		MySpace.Net.JsonpWebServiceProxy._handle(el, count, res, onSuccess, onFailure, context);
	};
	
	var pairs=[];
	for(var key in params){
		pairs.push(encodeURIComponent(key)+"="+encodeURIComponent(params[key]));
	}
	url=url+(url.indexOf("?")==-1 ? "?" : "&")+pairs.join("&");
	
	var el=document.createElement("script");
	el.type="text/javascript";
	el.src=url;

	var errorHandler=function(){
		if(MySpace.Net.JsonpWebServiceProxy._handlers[count] != Function.emptyFunction){
			MySpace.Net.JsonpWebServiceProxy._handle(el, count, {}.x, onSuccess, onFailure, context);
		}
	};
	$addHandler(el, "error", errorHandler);
	setTimeout(errorHandler, timeout || 30000);
	
	document.getElementsByTagName("head")[0].appendChild(el);
};
MySpace.Net.JsonpWebServiceProxy._handle=function(el, counter, result, onSuccess, onFailure, context){
	for(var i=0;i<this._deadScripts.length;i++){
		var node=this._deadScripts[i];
		node.parentNode.removeChild(node);
	}
	this._deadScripts=[];
	
	$clearHandlers(el);
	this._handlers[counter]=Function.emptyFunction;
	this._deadScripts.push(el);
		
	if(typeof result != "undefined"){
		if(onSuccess){ onSuccess(result, context); }
	}
	else{
		if(onFailure){ onFailure(context); }
	}
};
MySpace.Net.JsonpWebServiceProxy._counter=0;
MySpace.Net.JsonpWebServiceProxy._handlers=[];
MySpace.Net.JsonpWebServiceProxy._deadScripts=[];


//
// Status/mood control
//

MySpace.UI.HeaderStatusMood=function(e){
	MySpace.UI.HeaderStatusMood.initializeBase(this, [e]);
};
MySpace.UI.HeaderStatusMood.init=function(){
	if(!MySpace.UI.HeaderStatusMood._instance){
		MySpace.UI.HeaderStatusMood._instance=$create(MySpace.UI.HeaderStatusMood, null, null, null, $get('headerStatusMood'));
	}
};
MySpace.UI.HeaderStatusMood.prototype={
	initialize:function(){
		MySpace.UI.HeaderStatusMood.callBaseMethod(this, 'initialize');

		var e=this.get_element();
		var status=e.getAttribute("status");
		var mood=e.getAttribute("mood");
		var moodUrl=e.getAttribute("moodUrl") || this._spacerUrl;
		var thmUrl=e.getAttribute("thmUrl");
		var time=e.getAttribute("time");

		var html="";		
		
		if(thmUrl){
			html="<a id='hsmThumb' href='"+e.getAttribute("homeUrl")+"'>"+
						"<img src='"+thmUrl+"' id='hsmMyImage' alt='' height='28' style='visibility:hidden;' onload='if(this.offsetWidth>32)this.height=Math.round(30*30/this.offsetWidth);this.style.marginTop=((32-this.offsetHeight)/2)+\"px\";this.onload=null;this.style.visibility=\"\"' />"+
				  "</a>";
		}
		
		html+="<div id='hsmMain'"+(status ? "" : " style='visibility:hidden;'")+">"+
					"<div id='hsmStatusLine'>"+
						"<span class='hsmLabel'>"+MySpaceRes.Status.lblStatus+"</span> "+
						"<span id='hsmUserName' style='display:"+(status==MySpaceRes.Status.none ? "none" : "inline")+"'>"+e.getAttribute("userName")+"</span> "+
						"<span id='hsmStatus'>"+status+"</span>"+
						(time ? " &nbsp; <span id='hsmTimestamp'>"+time+"</span>" : "")+
					"</div>"+
					"<div>"+
						"<span class='hsmLabel'>"+MySpaceRes.Status.Mood+"</span> "+
						"<span id='hsmMoodName'>"+(mood || "")+"</span>"+
						"&nbsp;<img src='"+moodUrl+"' id='hsmMoodImage' alt='' /> "+
						"<span class='hsmParen'>(</span>"+
						"<a href='#' id='hsmUpdateLink'>"+MySpaceRes.UserPage.Update+"</a>"+
						"<span class='hsmParen'>)</span>"+
					"</div>"+
				"</div>";
						
		e.innerHTML=html;
		
		this.webServiceURL=e.getAttribute("webServiceURL");
		this.hash=e.getAttribute("hash");
		
		this._mainNode=$get("hsmMain");
		this._updateLink=$get("hsmUpdateLink");
		this._userNameNode=$get("hsmUserName");
		this._statusNode=$get("hsmStatus");
		this._statusLine=$get("hsmStatusLine");
		this._timestampNode=$get("hsmTimestamp");
		this._moodNameNode=$get("hsmMoodName");
		this._moodImage=$get("hsmMoodImage");
		
		this._truncate=!Sys.UI.DomElement.containsCssClass(e, "hsmNoTruncate");
		
		this._addHandler(this._updateLink, "click", "_showUpdateDialog");
		
		if(status){
			this._currentStatus=this._getText(this._statusNode);
			this._currentMood=this._getText(this._moodNameNode);
			this._truncateStatus();
			
			this._saveStatusInCookie({
				status: status,
				moodName: mood,
				moodPictureURL: moodUrl
			});
		}
		else if(this._getStatusFromCookie()){
			this._onSaveSuccess(this._getStatusFromCookie());
		}
		else{
			this._call("GetMoodStatus", {}, "_onSaveSuccess");
		}
	},
	
	_spacerUrl:"https://web.archive.org/web/20081216130713/http://x.myspacecdn.com/modules/common/static/img/spacer.gif",
	
	dispose:function(){
		for(var i=0;i<this._handlers.length;i++){
			$removeHandler.apply(window,this._handlers[i]);
		}

		MySpace.UI.HeaderStatusMood.callBaseMethod(this, 'dispose');
	},
	
	_call:function(action, args, onSuccess, onFailure){
		args.action=action;
		args.hash=this.hash;
		MySpace.Net.JsonpWebServiceProxy.invoke(this.webServiceURL, args,
			onSuccess ? Function.createDelegate(this, this[onSuccess]): null,
			onFailure ? Function.createDelegate(this, this[onFailure]): null);
	},
	
	_cancelEvent:function(e){
		if(e){
			var evt=new Sys.UI.DomEvent(e);
			e.preventDefault();
			e.stopPropagation();
		}
	},
	
	_addHandler:function(el, type, methodName){
		var hdlr=Function.createDelegate(this, this[methodName]);
		$addHandler(el, type, hdlr);
		
		if(!this._handlers){ this._handlers=[]; }
		this._handlers.push([el,type,hdlr]);
	},
	
	_getText:function(node){
		if(node && node.childNodes[0]){
			return node.childNodes[0].nodeValue;
		}
		return null;
	},
	
	_getStatusFromCookie:function(){
		var cookie=MySpace.Cookies[this._cookieName];
		if(!cookie){return null;}
		
		var vals=cookie.get_values();
		if(!("StatusUid" in vals)){return null;}
		
		if(vals.StatusUid != MySpaceClientContext.UserId){return null;}
		
		return {status: vals.Status, moodName: vals.MoodName, moodPictureURL: vals.MoodImg};
	},
	_saveStatusInCookie:function(vals){
		var cookie=MySpace.Cookies[this._cookieName] || new MySpace.Cookie(this._cookieName, "");
		var cookieVals=cookie.get_values() || (cookie._values={});
		
		if(vals.status){ cookieVals.Status=vals.status; }
		cookieVals.StatusUid=MySpaceClientContext.UserId;
		if(vals.moodName){ cookieVals.MoodName=vals.moodName; }
		if(vals.moodPictureURL){ cookieVals.MoodImg=vals.moodPictureURL; }
		
		MySpace.Cookies.save(cookie,".myspace.com");
	},
	_cookieName:"MSSession",
			
	_showUpdateDialog:function(e){
		this._cancelEvent(e);
		
		if(!this._updateDialog){ this._createUpdateDialog(); }
		
		this._statusInput.value=this._currentStatus;
		this._moodInput.value=this._currentMood;
		this._setSmileyUrl(this._moodImage.src || this._spacerUrl);
	
		this._updateDialog.style.display="block";
		
		this._statusInput.focus();
	},
	
	_createUpdateDialog:function(){
		var dlg=this._updateDialog=document.createElement("div");
		dlg.id="hsmUpdateDialog";
		this.get_element().appendChild(dlg);
		
		dlg.innerHTML=
			'<table>' +
			'	<tr>' +
			'		<td class="hsmLabel">' + MySpaceRes.Status.lblStatus + '</td>' +
			'		<td>' +
			'			<input id="hsmStatusInput" maxlength="160" tabindex="500">' +
			'			<a href="#" id="hsmClearLink">' + MySpaceRes.Status.Clear + '</a>' +
			'		</td>' +
			'	</tr>' +
			'	<tr>' +
			'		<td class="hsmLabel">' + MySpaceRes.Status.Mood + '</td>' +
			'		<td valign="middle">' +
			'			<div id="hsmMoodWrapper">' +
			'				<input id="hsmMoodInput" tabindex="501" maxlength="16">' +
			'			</div>' +
			'			<div id="hsmSmileyWrapper" tabindex="502">' +
			'				<img src="' + this._spacerUrl + '" id="hsmUpdateMoodImage">' +
			'				<img id="hsmSmileyArrow" src="' + this._spacerUrl + '">' +
			'			</div>' +
			'			<div id="hsmSmileyPalette"></div>' +
			'		</td>' +
			'	</tr>' +
			'	<tr>' +
			'		<td></td>' +
			'		<td>' +
			'			<div id="hsmCancelBtn" class="hsmButton" tabindex="504">' +
							MySpaceRes.HomeDisplay.Cancel +
			'				<div class="hsmButtonRight"></div>' +
			'			</div>' +
			'			<div id="hsmDoneBtn" class="hsmButton" tabindex="503">' +
							MySpaceRes.Status.Done +
			'				<div class="hsmButtonRight"></div>' +
			'			</div>' +
			'		</td>' +
			'	</tr>' +
			'</table>';
			
		this._statusInput=$get("hsmStatusInput");
		this._moodInput=$get("hsmMoodInput");
		this._updateMoodImage=$get("hsmUpdateMoodImage");
		this._smileyArrow=$get("hsmSmileyArrow");
		this._smileyPalette=$get("hsmSmileyPalette");
		this._doneBtn=$get("hsmDoneBtn");
		
		// IE quirks mode - inputs don't size properly unless we set the height
		if(Sys.Browser.agent == Sys.Browser.InternetExplorer && document.compatMode == "BackCompat"){
			this._statusInput.style.height=this._moodInput.style.height="22px";
		}
		
		this._addHandler($get("hsmClearLink"), "click", "_clearStatus");
		this._addHandler(this._doneBtn, "click", "_saveStatus");
		this._addHandler($get("hsmCancelBtn"), "click", "_closeDialog");
		this._addHandler(this._statusInput, "focus", "_onFocusInput");
		this._addHandler(this._moodInput, "focus", "_onFocusInput");
		this._addHandler($get("hsmSmileyWrapper"), "click", "_showSmileyPalette");
		this._addHandler(this._smileyPalette, "click", "_onClickSmiley");
		this._addHandler(this._smileyPalette, "blur", "_hideSmileyPalette");
		this._addHandler(this._updateDialog, "keydown", "_enterKeyHandler");
		this._addHandler(document, "keypress", "_escKeyHandler");
		
		this._moodComboBox=$create(MySpace.UI.ComboBoxBehavior, {
			minimumPrefixLength:1,
			completionItems:[this._currentMood],
			completionInterval:500
		}, {
			itemSelected:Function.createDelegate(this, this._onMoodSelected)
		}, null, this._moodInput);
		
		this._smileyPopupBehavior=$create(MySpace.UI.PopupBehavior, {
			parentElement:$get("hsmSmileyWrapper"),
			positioningMode:MySpace.UI.PositioningMode.BottomLeft,
			hideOnDocumentClick:true,
			x:-1, y:-2
		}, null, null, this._smileyPalette);
		
		this._call("GetMoodList", {}, "_populateMoodList");
	},
	
	_populateMoodList:function(result){
		var smileys={};
		var items=[];
		
		this._addSmiley(this._spacerUrl);
		
		for(var i=0;i<result.length;i++){
			var mood=result[i];
			
			items.push({text:mood.name, value:mood});
			
			if(mood.smiley && !(mood.smiley in smileys)){
				smileys[mood.smiley]=true;
				this._addSmiley(mood.smiley);
			}
		}
		
		this._moodComboBox.set_completionItems(items);
	},
	_addSmiley:function(url){
		var img=document.createElement("img");
		img.src=this._spacerUrl;
		img.style.backgroundImage="url('"+url+"')";
		img.url=url;
		this._smileyPalette.appendChild(img);
		
		if(this._smileyPalette.getElementsByTagName("img").length % 7 == 0){
			this._smileyPalette.appendChild(document.createElement("br"));
		}
	},
	_onMoodSelected:function(sender, args){
		this._setSmileyUrl(args.get_value().smiley || this._spacerUrl);
	},
	
	_clearStatus:function(e){
		this._cancelEvent(e);
		this._statusInput.value=MySpaceRes.Status.none;
	},
	
	_onFocusInput:function(e){
		var inp=e.target;
		setTimeout(function(){
			inp.select();
		}, 50);
	},
	
	_showSmileyPalette:function(e){
		this._smileyPopupBehavior.show();
		this._smileyPalette.focus();
	},
	_hideSmileyPalette:function(e){
		this._smileyPopupBehavior.hide();
	},
	_onClickSmiley:function(e){
		var img=e.target;
		if(img.tagName.toLowerCase()!="img"){ return; }
		
		this._hideSmileyPalette();
		this._setSmileyUrl(img.url);
	},
	_setSmileyUrl:function(url){
		this._currentSmileyUrl=url;
		this._updateMoodImage.style.backgroundImage="url('"+url+"')";
	},
	
	_enterKeyHandler:function(e){
		if(!this._moodComboBox.get_visible() && e.keyCode==13){ // enter
			if(e.target==this._cancelBtn){ this._closeDialog(e); }
			else{ this._saveStatus(e); }
		}
	},
	_escKeyHandler:function(e){
		if(e.charCode==27 && this._updateDialog && this._updateDialog.style.display!="none"){
			this._closeDialog(e);
		}
	},
	
	_saveStatus:function(e){
		this._cancelEvent(e);
		
		if(this._saveInProgress){ return; }
		
		var args={
			status:this._statusInput.value,
			mood:this._moodInput.value,
			smiley:this._currentSmileyUrl
		};
		
		this._doneBtn.childNodes[0].nodeValue=MySpaceRes.Common.PleaseWait;
		
		this._call("SaveCustomMoodStatus", args, "_onSaveSuccess", "_onSaveError");
		this._saveInProgress=true;
	},
	
	_onSaveSuccess:function(result){
		this._onSaveComplete();
		
		this._saveStatusInCookie(result);
		
		if(!result.status || result.status=="null" || result.status=="undefined"){
			result.status=MySpaceRes.Status.none;
		}
		
		this._statusNode.innerHTML=result.status;
		if(this._timestampNode){ this._timestampNode.innerHTML=result.timestamp; }
		this._moodNameNode.innerHTML=result.moodName;
		this._moodImage.src=result.moodPictureURL;
		
		this._userNameNode.style.display=(result.status==MySpaceRes.Status.none)?"none":"inline";
		
		this._currentMood=this._getText(this._moodNameNode);
		this._currentStatus=this._getText(this._statusNode);
		this._truncateStatus();
		
		this._mainNode.style.visibility="visible";
		
		//hide the module tip if any
		var moduletip=$get("mtStatusMood");
		if (moduletip){
		    moduletip.style.display="none";
		}
		
		this._closeDialog();
	},
	_onSaveError:function(){
		this._onSaveComplete();
		var msg=$get("hsmErrorText").innerHTML.replace(/<br.*>/gi, "\n");
		alert(msg);
	},
	_onSaveComplete:function(){
		this._saveInProgress=false;
		if(this._doneBtn){ this._doneBtn.childNodes[0].nodeValue=MySpaceRes.Status.Done; }
	},
	
	_truncateStatus:function(){
		if(!this._truncate){
			MySpace.Util.applyWBRToElement(this._statusLine);
			return;
		}
		
		if(this._statusLine.scrollWidth > this._statusLine.offsetWidth){
			this._statusLine.title=this._getText(this._userNameNode)+" "+this._currentStatus;
		}
		else{
			this._statusLine.title="";
		}
		
		if(Sys.Browser.agent!=Sys.Browser.Firefox){ return; }	// IE/Safari support text-overflow
		
		for(var i=this._currentStatus.length;i>=0;i--){
			if(this._statusLine.scrollWidth <= this._statusLine.offsetWidth) { break; }
			
			this._statusNode.childNodes[0].nodeValue=this._currentStatus.substring(0,i) + "\u2026"; // ellipsis
		}
	},
	
	_closeDialog:function(e){
		this._cancelEvent(e);
		if(this._updateDialog){
			this._moodComboBox.hidePopup();
			this._updateDialog.style.display="none";
		}
	}
};
MySpace.UI.HeaderStatusMood.registerClass('MySpace.UI.HeaderStatusMood', Sys.UI.Behavior);

}
/*
     FILE ARCHIVED ON 13:07:13 Dec 16, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:12:33 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.508
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 14.578
  LoadShardBlock: 378.634 (3)
  PetaboxLoader3.datanode: 123.054 (4)
  PetaboxLoader3.resolve: 333.188 (2)
  load_resource: 275.022
*/