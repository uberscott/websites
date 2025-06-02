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

function wddxSerializer_serializeValue(obj){
	var bSuccess = true;
	var val;
	if (obj === null)
		this.write("<null/>");
	else if (typeof(val = obj.valueOf()) == "string")
		this.serializeString(val);
	else if (typeof(val = obj.valueOf()) == "number"){
		if (typeof(obj.getTimezoneOffset)=="function" && typeof(obj.toGMTString)=="function"){
			this.write("<dateTime>" + (obj.getYear() < 1000 ? 1900+obj.getYear() : obj.getYear()) + "-" + (obj.getMonth() + 1) + "-" + obj.getDate() + "T" + obj.getHours() + ":" + obj.getMinutes() + ":" + obj.getSeconds());
			if (this.useTimezoneInfo)this.write(this.timezoneString);
			this.write("</dateTime>");
		}
		else this.write("<number>" + val + "</number>");
	}
	else if (typeof(val = obj.valueOf()) == "boolean")
		this.write("<boolean value='" + val + "'/>");
	else if (typeof(obj) == "object"){
		if (typeof(obj.wddxSerialize) == "function")
			bSuccess = obj.wddxSerialize(this);
		else if (typeof(obj.join) == "function" && typeof(obj.reverse) == "function" && typeof(obj.sort) == "function" && typeof(obj.length) == "number"){
			this.write("<array length='" + obj.length + "'>");
			for (var i = 0; bSuccess && i < obj.length; ++i)
				bSuccess = this.serializeValue(obj[i]);
			this.write("</array>");
		}
		else{
			if (typeof(obj.wddxSerializationType) == 'string')
				this.write('<struct type="'+ obj.wddxSerializationType +'">');
			else this.write("<struct>");
			for (var prop in obj)
				if (prop != 'wddxSerializationType'){
					bSuccess = this.serializeVariable(prop, obj[prop]);
					if (! bSuccess)break;
				}
			this.write("</struct>");
		}
	}
	else bSuccess = false;
	return bSuccess;
}

function wddxSerializer_serializeAttr(s){for (var i = 0; i < s.length; ++i)this.write(this.at[s.charAt(i)]);}
function wddxSerializer_serializeAttrOld(s){this.write(s);}
function wddxSerializer_serializeString(s){
	this.write("<string>");
	for (var i = 0; i < s.length; ++i)this.write(this.et[s.charAt(i)]);
	this.write("</string>");
}

function wddxSerializer_serializeStringOld(s){
	this.write("<string><![CDATA[");
	pos = s.indexOf("]]>");
	if (pos != -1){
		startPos = 0;
		while (pos != -1){
			this.write(s.substring(startPos, pos) + "]]>]]&gt;<![CDATA[");
			startPos = pos + 3;
			if (startPos < s.length) pos = s.indexOf("]]>", startPos);
			else pos = -1;
		}
		this.write(s.substring(startPos, s.length));
	}
	else this.write(s);
	this.write("]]></string>");
}

function wddxSerializer_serializeVariable(name, obj){
	var bSuccess = true;
	if (typeof(obj) != "function")
	{
		this.write("<var name='");
		this.preserveVarCase ? this.serializeAttr(name) : this.serializeAttr(name.toLowerCase());
		this.write("'>");
		bSuccess = this.serializeValue(obj);
		this.write("</var>");
	}
	return bSuccess;
}

function wddxSerializer_write(str){this.wddxPacket[this.wddxPacket.length] = str;}
function wddxSerializer_writeOld(str){this.wddxPacket += str;}
function wddxSerializer_initPacket(){this.wddxPacket = [];}
function wddxSerializer_initPacketOld(){this.wddxPacket = "";}
function wddxSerializer_extractPacket(){return this.wddxPacket.join("");}
function wddxSerializer_extractPacketOld(){return this.wddxPacket;}
function wddxSerializer_serialize(rootObj){
	this.initPacket();
	this.write("<wddxPacket version='1.0'><header/><data>");
	var bSuccess = this.serializeValue(rootObj);
	this.write("</data></wddxPacket>");
	if (bSuccess) return this.extractPacket();
	else return null;
}

function WddxSerializer(){
	if (navigator.appVersion !== "" && navigator.appVersion.indexOf("MSIE 3.") == -1){
		var et = [];
		var n2c = [];
		var c2n = [];
		var at = [];
		for (var i = 0; i < 256; ++i){
			var d1 = Math.floor(i/64);
			var d2 = Math.floor((i%64)/8);
			var d3 = i%8;
			var c = eval("\"\\" + d1.toString(10) + d2.toString(10) + d3.toString(10) + "\"");
			n2c[i] = c;
			c2n[c] = i; 
			if (i < 32 && i != 9 && i != 10 && i != 13){
				var hex = i.toString(16);
				if (hex.length == 1)
					hex = "0" + hex;
				et[n2c[i]] = "<char code='" + hex + "'/>";
				at[n2c[i]] = "";
			}
			else if (i < 128){
				et[n2c[i]] = n2c[i];
				at[n2c[i]] = n2c[i];
			}
			else{
				et[n2c[i]] = "&#x" + i.toString(16) + ";";
				at[n2c[i]] = "&#x" + i.toString(16) + ";";
			}
		}
		et["<"] = "&lt;";
		et[">"] = "&gt;";
		et["&"] = "&amp;";

		at["<"] = "&lt;";
		at[">"] = "&gt;";
		at["&"] = "&amp;";
		at["'"] = "&apos;";
		at["\""] = "&quot;";

		this.n2c = n2c;
		this.c2n = c2n;
		this.et = et;    
		this.at = at;
		
		this.serializeString = wddxSerializer_serializeString;
		this.serializeAttr = wddxSerializer_serializeAttr;
		this.write = wddxSerializer_write;
		this.initPacket = wddxSerializer_initPacket;
		this.extractPacket = wddxSerializer_extractPacket;
	}
	else{
		// The browser is most likely MSIE 3.x, it is NS 2.0 compatible
		this.serializeString = wddxSerializer_serializeStringOld;
		this.serializeAttr = wddxSerializer_serializeAttrOld;
		this.write = wddxSerializer_writeOld;
		this.initPacket = wddxSerializer_initPacketOld;
		this.extractPacket = wddxSerializer_extractPacketOld;
	}
	var tzOffset = (new Date()).getTimezoneOffset();
	if (tzOffset >= 0)this.timezoneString = '-';
	else this.timezoneString = '+';
	this.timezoneString += Math.floor(Math.abs(tzOffset) / 60) + ":" + (Math.abs(tzOffset) % 60);
	this.preserveVarCase = false;
	this.useTimezoneInfo = true;
	this.serialize = wddxSerializer_serialize;
	this.serializeValue = wddxSerializer_serializeValue;
	this.serializeVariable = wddxSerializer_serializeVariable;
}

function wddxRecordset_isColumn(name){return (typeof(this[name]) == "object" && name.indexOf("_private_") == -1);}
function wddxRecordset_getRowCount(){
	var nRowCount = 0;
	for (var col in this)
		if (this.isColumn(col)){nRowCount = this[col].length;break;}
	return nRowCount;
}

function wddxRecordset_addColumn(name){
	var nLen = this.getRowCount();
	var colValue = new Array(nLen);
	for (var i = 0; i < nLen; ++i)colValue[i] = null;
	this[this.preserveFieldCase ? name : name.toLowerCase()] = colValue;
}

function wddxRecordset_addRows(n){
	for (var col in this)
		if (this.isColumn(col)){
			var nLen = this[col].length;
			for (var i = nLen; i < nLen + n; ++i)
				this[col][i] = null;
		}
}
function wddxRecordset_getField(row, col){return this[this.preserveFieldCase ? col : col.toLowerCase()][row];}
function wddxRecordset_setField(row, col, value){this[this.preserveFieldCase ? col : col.toLowerCase()][row] = value;}
function wddxRecordset_wddxSerialize(serializer){
	// Create an array and a list of column names
	var colNamesList = "";
	var colNames = [];
	var i = 0;
	for (var col in this)
		if (this.isColumn(col)){
			colNames[i++] = col;
			if (colNamesList.length > 0)colNamesList += ",";
			colNamesList += col;
		}
	var nRows = this.getRowCount();
	
	serializer.write("<recordset rowCount='" + nRows + "' fieldNames='" + colNamesList + "'>");
	
	var bSuccess = true;
	for (i = 0; bSuccess && i < colNames.length; i++){
		var name = colNames[i];
		serializer.write("<field name='" + name + "'>");
		for (var row = 0; bSuccess && row < nRows; row++)
			bSuccess = serializer.serializeValue(this[name][row]);
		serializer.write("</field>");
	}
	serializer.write("</recordset>");
	return bSuccess;
}

function wddxRecordset_dump(escapeStrings){
	var nRows = this.getRowCount();
	var colNames = [];
	var i = 0;
	for (var col in this)
		if (typeof(this[col]) == "object")
			colNames[i++] = col;
	var o = "<table border=1><tr><td><b>RowNumber</b></td>";
	for (i = 0; i < colNames.length; ++i)
		o += "<td><b>" + colNames[i] + "</b></td>";
	o += "</tr>";
	for (var row = 0; row < nRows; ++row){
		o += "<tr><td>" + row + "</td>";
		for (i = 0; i < colNames.length; ++i){
			var elem = this.getField(row, colNames[i]);
			if (escapeStrings && typeof(elem) == "string"){
				var str = "";
				for (var j = 0; j < elem.length; ++j){
					var ch = elem.charAt(j);
					if (ch == '<')str += "&lt;";
					else if (ch == '>')str += "&gt;";
					else if (ch == '&')str += "&amp;";
					else str += ch;
				}
				o += ("<td>" + str + "</td>");
			}
			else o += ("<td>" + elem + "</td>");
		}
		o += "</tr>";
	}
	o += "</table>";
	return o;
}

function WddxRecordset(){
	this.preserveFieldCase = false;
	if (typeof(wddxRecordsetExtensions) == "object")
		for (var prop in wddxRecordsetExtensions)
			this[prop] = wddxRecordsetExtensions[prop];
	this.getRowCount = wddxRecordset_getRowCount;
	this.addColumn = wddxRecordset_addColumn;
	this.addRows = wddxRecordset_addRows;
	this.isColumn = wddxRecordset_isColumn;
	this.getField = wddxRecordset_getField;
	this.setField = wddxRecordset_setField;
	this.wddxSerialize = wddxRecordset_wddxSerialize;
	this.dump = wddxRecordset_dump;

	if (WddxRecordset.arguments.length > 0)
		if (typeof(val = WddxRecordset.arguments[0].valueOf()) == "boolean")
			this.preserveFieldCase = WddxRecordset.arguments[0];
		else{
			var cols = WddxRecordset.arguments[0];
			var nLen = 0;
			if (WddxRecordset.arguments.length > 1){
				if (typeof(val = WddxRecordset.arguments[1].valueOf()) == "boolean")
					this.preserveFieldCase = WddxRecordset.arguments[1];
				else{
					nLen = WddxRecordset.arguments[1];
					if (WddxRecordset.arguments.length > 2)
						this.preserveFieldCase = WddxRecordset.arguments[2];
				}
			}
			for (var i = 0; i < cols.length; ++i){
				var colValue = new Array(nLen);
				for (var j = 0; j < nLen; ++j)colValue[j] = null;
				this[this.preserveFieldCase ? cols[i] : cols[i].toLowerCase()] = colValue;
			}
		}
}

function registerWddxRecordsetExtension(name, func){
	if (typeof(name) == "string" && typeof(func) == "function"){
		if (typeof(wddxRecordsetExtensions) != "object")
			wddxRecordsetExtensions = {};
		wddxRecordsetExtensions[name] = func;
	}
}

function wddxBinary_wddxSerialize(serializer) {serializer.write("<binary encoding='" + this.encoding + "'>" + this.data + "</binary>");return true;}
function WddxBinary(data, encoding){
	this.data = data !== null ? data : "";
	this.encoding = encoding !== null ? encoding : "base64";
	this.wddxSerialize = wddxBinary_wddxSerialize;
}

function _WDDXRemotingClient_addRequestParameter(name, value){
	nameValueObject = {};
	nameValueObject.name = name;
	nameValueObject.value = value;
	this.requestNameValueArray[this.requestNameValueArray.length] = nameValueObject;
}


function _WDDXRemotingClient_sendRequest(){
	for (var i=0; i < this.requestNameValueArray.length; i++)
		this.requestURL += "&" + this.requestNameValueArray[i].name + "=" + this.requestNameValueArray[i].value;
	this.requestURL = this.requestURL.replace(/&/, "?");
	var IFrameObj = document.getElementById(this.bufferID);
	if (!IFrameObj) {return;}
	if (browser.isIE){
		IFrameObj.src = this.requestURL;
		return;
	}
	if (IFrameObj.contentDocument){
		IFrameObj.contentDocument.location.replace(this.requestURL);
		return;
	}
	if (IFrameObj.contentWindow){
		IFrameObj.contentWindow.document.location.replace(this.requestURL);
		return;
	}
	IFrameObj.src = this.requestURL;
	return;
}


function _WDDXRemotingClient_receiveResponse(){this.callbackFunction(this.results);}
function WDDXRemotingClient(requestURL, callbackFunction, bufferID){
	if (typeof requestID == "undefined"){
		requestID = -1;
		remotingClientArray = [];
	}
	requestID++;
	remotingClientArray[requestID] = this;
	this.requestID = requestID;
	this.bufferID = bufferID;
	this.requestURL = requestURL;
	this.callbackFunction = callbackFunction;
	this.requestNameValueArray = [];
	this.results = new WddxRecordset();
	this.addRequestParameter = _WDDXRemotingClient_addRequestParameter;
	this.sendRequest = _WDDXRemotingClient_sendRequest;
	this.receiveResponse = _WDDXRemotingClient_receiveResponse;
}

function _OnlineNowNodeParser_locateNodes(){
	var CurrentNode = null;
	var i = 0;
	while ((CurrentNode = document.getElementById("UserDataNode" + i)) !== null){
		NodeIndex = this.NodeArray.length;
		this.NodeArray[NodeIndex] = {};
		this.NodeArray[NodeIndex].NodeID = CurrentNode.id;
		var Attributes = CurrentNode.className.split(";");
		for (var AttributeIterator = 0; AttributeIterator < Attributes.length; AttributeIterator++){
			var Name = Attributes[AttributeIterator].split("=")[0];
			var Value = Attributes[AttributeIterator].split("=")[1];
			if (Name !== "" && Value !== "") {eval("this.NodeArray[" + NodeIndex + "]." + Name + "=\"" + Value + "\";");}
		}			
		i++;
	}
}

function _OnlineNowNodeParser_run(){
	this.locateNodes();	
	var UserIDList = "";
	if (this.NodeArray.length > 0){
		for (var i=0; i < this.NodeArray.length; i++)
			if (UserIDList.indexOf(":" + this.NodeArray[i].UserID + ":") == -1) {UserIDList += ":" + this.NodeArray[i].UserID + ":,";}
		UserIDList = UserIDList.replace(/[:]/g, "").replace(/[,]$/gi, "");
		this.remotingClient.addRequestParameter("UserIDList", UserIDList);
		this.remotingClient.sendRequest();
	}
}

function _OnlineNowNodeParser_processResults(Results){
	if (Results.getRowCount() > 0){
		var ThisUserID = "";
		for (var i = 0; i < Results.getRowCount(); i++){
			var UserObject = {};
			UserObject.UserID = Results["userid"][i];
			UserObject.OnlineNow = Results["onlinenow"][i];
			ThisUserID = "" + Results["userid"][i];
			this.UserArray[ThisUserID] = UserObject;
		}
		for (i = 0; i < this.NodeArray.length; i++){
			ThisUserID = "" + this.NodeArray[i].UserID;
			this.replaceUserNode(i, ThisUserID);
		}
	}
}

function _OnlineNowNodeParser_replaceUserNode(NodeIndex, UserIndex){
	var NodeObject = this.NodeArray[NodeIndex];
	var UserObject = this.UserArray[UserIndex];

	var ThisNode = document.getElementById(NodeObject.NodeID);
	if (ThisNode){
		if (typeof UserObject != "object"){
			UserObject = {};
			UserObject.UserID = -1;
			UserObject.FirstName = "Unknown User";
			UserObject.ImageID = -1;
			UserObject.ImageType = "";
			UserObject.LastLogin = "";
			UserObject.OnlineNow = 0;
		}
		switch (NodeObject.DataPoint.toLowerCase()){
			case "onlinenow":
				var OnlineImageURL = ImageStore[0].url + "/site/images/clear.gif";
				if (UserObject.OnlineNow == 1){
					try{OnlineImageURL = onlineNowImage.src;}
					catch(err){OnlineImageURL = ImageStore[0].url + "/site/images/onlinenow.gif";}
				}
				ThisNode.innerHTML = "<IMG BORDER=\"0\" SRC=\"" + OnlineImageURL + "\" WIDTH=\"80\" HEIGHT=\"20\">";
				break;
		}
	}
}

function OnlineNowNodeParser(bufferID){
	this.UserArray = [];
	this.NodeArray = [];
	this.requestURL = onlineNowInfoURL;
	this.run = _OnlineNowNodeParser_run;
	this.locateNodes = _OnlineNowNodeParser_locateNodes;
	this.replaceUserNode = _OnlineNowNodeParser_replaceUserNode;
	this.processResults = _OnlineNowNodeParser_processResults;
	var me = this;
	var CallbackFunction = function(Results) {me.processResults(Results);};
	this.remotingClient = new WDDXRemotingClient(this.requestURL, CallbackFunction, bufferID);
}


}
/*
     FILE ARCHIVED ON 14:03:52 Aug 31, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:48:18 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.988
  exclusion.robots: 0.041
  exclusion.robots.policy: 0.018
  esindex: 0.024
  cdx.remote: 73.16
  LoadShardBlock: 637.542 (3)
  PetaboxLoader3.datanode: 461.117 (4)
  PetaboxLoader3.resolve: 272.315 (2)
  load_resource: 153.978
*/