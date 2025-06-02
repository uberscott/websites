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

function MySpaceSearchMenu(name)
{
  this.name = name;
	this.tabs = new Object();
	this.rows = new Array();
	this.rows[0] = 0;
	this.invalidSearchMessage = '';
	this.searchBox = null;
	this.searchButton = null;
	this.enableWarningMessages = true;
	this.lastWarningMessage = '';
	this.tabOrder = null;
	
	this.currentRow = 0;
	this.maxRowSize = 8;
	this.leftArrowImage = 'https://web.archive.org/web/20070831140522/http://x.myspace.com/images/srch-lf.gif';
	this.rightArrowImage = 'https://web.archive.org/web/20070831140522/http://x.myspace.com/images/srch-rt.gif';
	
	this.Create = MySpaceSearchMenu_CreateMenu;
	this.CreateMenuRow = MySpaceSearchMenu_CreateMenuRow;
	this.SetSearchTarget = MySpaceSearchMenu_SetSearchTarget;
	this.CheckUserInput = MySpaceSearchMenu_CheckUserInput;
	this.NextRow = MySpaceSearchMenu_DisplayNextRow;
	this.PrevRow = MySpaceSearchMenu_DisplayPrevRow;
	this.ShowRow = MySpaceSearchMenu_ShowRow;
	this.AddTab = MySpaceSearchMenu_AddTab;
}

function MySpaceSearchMenu_AddTab(tabName, tabLabel)
{
	this.tabs[tabName] = new Object();
	this.tabs[tabName].label = tabLabel;
}

function MySpaceSearchMenu_CreateMenu(searchBoxId)
{
	this.searchBoxId = searchBoxId;

	var i;
	if (this.tabOrder != null)
	{
		var j = parseInt((this.tabOrder.length / this.maxRowSize).toString());
		for (i=0; i < j; i++) this.rows[i] = this.maxRowSize;
		this.rows[i] = this.tabOrder.length % this.maxRowSize;
	}
	
	for (i=0; i<this.rows.length; i++) if (this.rows[i] > 0) this.CreateMenuRow(i);
}

function MySpaceSearchMenu_CreateMenuRow(cr)
{
	//output the div start tag
	document.writeln('<div id="row' + cr + '" align="left" class="hide">');

	//insert previous arrow if applicable
	if (cr > 0)
	{
		document.writeln('<a id="row' + cr + '_leftarrow" href="javascript:' + this.name + '.PrevRow();">');
		document.writeln('<img src="' + this.leftArrowImage + '" style="border:none;" width="7"/></a>');
	}

	//generate menu items
	var i,j,k;
	for (i = 0; i < this.rows[cr]; i++)
	{  
	  j = i + (cr * this.maxRowSize);
	  k = this.tabOrder[j];
		document.write('<a href="javascript:' + this.name + '.SetSearchTarget(\'' + k + '\');" class="inactive" id="' + k + '">' + this.tabs[k].label + '</a>');
		if ((i+1) % this.rows[cr] != 0) document.writeln(" | ");
	}

	//insert next arrow if applicable
	if (cr < (this.rows.length-1))
	{
		document.writeln('<a id="row' + cr + '_rightarrow" href="javascript:' + this.name + '.NextRow();">');
		document.writeln('<img src="' + this.rightArrowImage + '" style="border:none;" width="7"/></a>');
	}
	
	//output the div end tag
	document.writeln('</div>');
}

function MySpaceSearchMenu_SetSearchTarget(tabName)
{
	var tab, index = 0;
	for (i=0; i < this.tabOrder.length; i++)
	{
		tab = document.getElementById(this.tabOrder[i]);
		if (tab != null) tab.className="inactive";
		if (tab.id == tabName) index = i;
	}
	
	row = parseInt((index / this.maxRowSize).toString());
	
	this.ShowRow(row);
	
	if (tabName == '')
	{
		tabName = this.tabOrder[this.maxRowSize * row];
	}
	
	tab = document.getElementById(tabName);
	
	if (tab != null)
	{
    tab.className="active";
		var searchBox = document.getElementById(this.searchBoxId);
		if (searchBox == null) return;
    var tabObj = this.tabs[tabName];
    if (this.enableWarningMessages
    && tabObj.warningMessage != undefined
    && tabObj.warningMessage != '')
    {
			this.lastWarningMessage = tabObj.warningMessage;
      searchBox.value = tabObj.warningMessage;
      searchBox.select();
    }
    else
    {
			if (this.lastWarningMessage != ''
				&& searchBox.value == this.lastWarningMessage)
			{
				searchBox.value = '';
			}
			this.lastWarningMessage = '';
    }
    
    //searchBox.form.setAttribute('onSubmit', 'return ' + this.name + '.CheckUserInput();');
		var searchForm = document.getElementById("srch");
		searchForm.onsubmit = function() {
				var searchBox = document.getElementById("q");
				var txt = searchBox.value;
				txt = txt.replace(/^([ \t])+/gi,"").replace(/([ \t])+$/gi,"");
				if (txt.length < 2)
				{
					searchBox.focus();
					return false;
				}
				return true;
			}
    
    var t = document.getElementById('t');
    if (t == undefined)
    {
			t = document.createElement('input');
			t.name = 't';
			t.id = 't';
			t.type = 'hidden';
			searchBox.form.appendChild(t);
    }
    t.value = tabName;
	}
}

function MySpaceSearchMenu_CheckUserInput()
{
	var searchBox = document.getElementById(this.searchBoxId);
	if (searchBox == null) return true;
	var txt = searchBox.value;
	//if (this.invalidSearchMessage == '' || this.invalidSearchMessage == undefined) return true;
	txt = txt.replace(/^([ \t])+/gi,"").replace(/([ \t])+$/gi,"");
	if (txt.length < 2)
	{
		//alert(this.invalidSearchMessage);
		searchBox.focus();
		return false;
	}
	return true;
}

function MySpaceSearchMenu_DisplayPrevRow()
{
	if (this.currentRow == 0) this.currentRow = this.rows.length-1;
	else this.currentRow -= 1;
	this.SetSearchTarget(this.tabOrder[this.currentRow * this.maxRowSize]);
}

function MySpaceSearchMenu_DisplayNextRow()
{
	if (this.currentRow >= this.rows.length-1) this.currentRow=0;
	else this.currentRow += 1;
	this.SetSearchTarget(this.tabOrder[this.currentRow * this.maxRowSize]);
}

function MySpaceSearchMenu_ShowRow(row)
{
	var item;
	for (i=0;i<this.rows.length; i++)
	{		    
		item = document.getElementById('row'+i);		  		    
		if (item != null) item.className='hide';
	}
	document.getElementById('row'+row).className='show';		
}

/* ----------------------------------------------------------------------- *|
		Function: chkGHeader (pronounced "check google header")
		Event:		form's onsubmit
		Does:			checks something's been entered.
|* ----------------------------------------------------------------------- */
function chkGHeader(){
	var q=document.getElementById("q");
	q.value=q.value.replace(/([ \t\r\n\f])*$/gi,"");
	q.value=q.value.replace(/^([ \t\r\n\f])*/gi,"");
	if (q.value.length==0){
		q.focus();
		return false;
	}
	return true;
}// chkGHeader

}
/*
     FILE ARCHIVED ON 14:05:22 Aug 31, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:34:34 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.598
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.017
  esindex: 0.011
  cdx.remote: 149.824
  LoadShardBlock: 381.601 (3)
  PetaboxLoader3.datanode: 231.628 (4)
  PetaboxLoader3.resolve: 264.138 (3)
  load_resource: 132.865
*/