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

var defaultFuseAction = "vids.ajaxAction"; var defaultMethod = "get"; var url = "/index.cfm"; var pageTypeId = ""; var commentsAction = ""; var addCommentsAction = ""; var deleteCommentAction = ""; var progressBarPath = "https://web.archive.org/web/20070904191541/http://x.myspace.com/images/myspacetv/progressbar.gif"; function LoginAlert(msg)
{ if (confirm(msg))
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "ENFORCELOGIN"}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); if (json.ServerResponse.IsRequestSuccessful)
location.href = json.ServerResponse.DisplayText; else
alert(json.ServerResponse.DisplayText);}
});}
}
function GetMoreVideos(selectedTab)
{ switch (selectedTab)
{ case "related":
$("morevideos_related").className = "more_from_user"; $("morevideos_user").className = ""; $("morevids_related").style.display = "block"; $("morevids_user").style.display = "none"; break; case "user":
default:
$("morevideos_user").className = "more_from_user"; $("morevideos_related").className = ""; $("morevids_user").style.display = "block"; $("morevids_related").style.display = "none"; break;}
}
function ChannelSubscription(typeId, displayTagId, handlerAction)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: handlerAction, id: typeId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); if (!json.ServerResponse.IsRequestSuccessful)
{ alert(json.ServerResponse.DisplayText);}
else if (displayTagId == "")
{ location.href = url + "?fuseaction=vids.mySubscriptions";}
else
{ var notice = $(displayTagId); notice.update('<span class="successfulRequest">' + json.ServerResponse.DisplayText + '</span>');}
}
});}
function DeleteVideo(videoId)
{ if(confirm(Resources.playlist_areyousure))
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "DELETEVIDEO", videoid: videoId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); if (json.ServerResponse.IsRequestSuccessful)
location.href = url + "?fuseaction=vids.myVideos"; else
alert(json.ServerResponse.DisplayText);}
});}
}
function RemoveFavoriteVideo(videoId)
{ if(confirm(Resources.playlist_areyousure))
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "DELETEFAVOURITEVIDEO", videoid: videoId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); if (json.ServerResponse.IsRequestSuccessful)
location.href = url + "?fuseaction=vids.myFavorites"; else
alert(json.ServerResponse.DisplayText);}
});}
}
function SetVideoPublic(videoId)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "SETVIDEOPUBLIC", videoid: videoId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); var status = $('videostatus_' + videoId); var notice = $('makeprivate_' + videoId); if (json.ServerResponse.IsRequestSuccessful)
{ status.update(Resources.subscription_public); notice.update("<a href=\"javascript:SetVideoPrivate(" + videoId + ");\">" + Resources.videoitem_makeprivate + "</a>");}
alert(json.ServerResponse.DisplayText);}
});}
function SetVideoPrivate(videoId)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "SETVIDEOPRIVATE", videoid: videoId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); var status = $('videostatus_' + videoId); var notice = $('makeprivate_' + videoId); if (json.ServerResponse.IsRequestSuccessful)
{ status.update(Resources.subscription_private); notice.update("<a href=\"javascript:SetVideoPublic(" + videoId + ");\">" + Resources.videoitem_makepublic + "</a>");}
alert(json.ServerResponse.DisplayText);}
});}
function AddToChannel(videoId, displayTagId, hash)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "ADDTOCHANNEL", videoid: videoId, h: hash}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); if (displayTagId == "" || !json.ServerResponse.IsRequestSuccessful)
{ alert(json.ServerResponse.DisplayText);}
else
{ var notice = $(displayTagId); notice.update('<span class="successfulRequest">' + json.ServerResponse.DisplayText + '</span>');}
}
});}
function AddToProfile(videoId, displayTagId, hash)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "ADDTOPROFILE", videoid: videoId, h: hash}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); if (displayTagId == "" || !json.ServerResponse.IsRequestSuccessful)
{ alert(json.ServerResponse.DisplayText);}
else
{ var notice = $(displayTagId); notice.innerHTML = '<span class="successfulRequest">' + json.ServerResponse.DisplayText + '</span>';}
}
});}
function RemoveFromProfile(videoId, displayTagId, hash)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "REMOVEPROFILEVIDEO", videoid: videoId, h: hash}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); if (displayTagId == "" || !json.ServerResponse.IsRequestSuccessful)
{ alert(json.ServerResponse.DisplayText);}
else
{ var notice = $(displayTagId); notice.innerHTML = '<span class="successfulRequest">' + json.ServerResponse.DisplayText + '</span>';}
}
});}
function AddToFavorites(videoId, displayTagId, hash)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "SAVETOFAVOURITE", videoid: videoId, h: hash}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); var notice = $(displayTagId); if (json.ServerResponse.IsRequestSuccessful)
notice.innerHTML = '<span class="successfulRequest">' + json.ServerResponse.DisplayText + '</span>'; else
alert(json.ServerResponse.DisplayText);}
});}
function FlagVideoAsInappropriate(videoId, displayTagId, hash)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "FLAGVIDEO", videoid: videoId, h: hash}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); var notice = $(displayTagId); if (json.ServerResponse.IsRequestSuccessful)
notice.update('<span class="successfulRequest">' + json.ServerResponse.DisplayText + '</span>'); else
alert(json.ServerResponse.DisplayText);}
});}
function rateVideo(videoId, displayTagId, hash, choice)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "RATING", videoid: videoId, h: hash, rating: choice}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); var notice = $(displayTagId); if (json.ServerResponse.IsRequestSuccessful)
notice.innerHTML = '<span class="successfulRequest">' + json.ServerResponse.DisplayText + '</span>'; else
alert(json.ServerResponse.DisplayText);}
});}
function SetChannelPublic(channelId)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "SETCHANNELPUBLIC", channelid: channelId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); var status = $("videostatus"); var notice = $("changevideostatus"); if (json.ServerResponse.IsRequestSuccessful)
{ status.update(Resources.subscription_public); notice.update('<a href="javascript:SetChannelPrivate(' + channelId + ');">' + Resources.videoitem_makeprivate + '</a>'); alert(json.ServerResponse.DisplayText);}
else
alert(json.ServerResponse.DisplayText);}
});}
function SetChannelPrivate(channelId)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "SETCHANNELPRIVATE", channelid: channelId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); var status = $("videostatus"); var notice = $("changevideostatus"); if (json.ServerResponse.IsRequestSuccessful)
{ status.update(Resources.subscription_private); notice.update('<a href="javascript:SetChannelPublic(' + channelId + ');">' + Resources.videoitem_makepublic + '</a>'); alert(json.ServerResponse.DisplayText);}
else
alert(json.ServerResponse.DisplayText);}
});}
function SetNotificationsOn(channelId)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "SETNOTIFICATIONSON", channelid: channelId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); var status = $("notificationstatus"); var notice = $("changenotificationstatus"); if (json.ServerResponse.IsRequestSuccessful)
{ status.update(Resources.subscription_notificationon); notice.update('<a href="javascript:SetNotificationsOff(' + channelId + ');">' + Resources.subscription_turnoff + '</a>'); alert(json.ServerResponse.DisplayText);}
else
alert(json.ServerResponse.DisplayText);}
});}
function SetNotificationsOff(channelId)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: "SETNOTIFICATIONSOFF", channelid: channelId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); var status = $("notificationstatus"); var notice = $("changenotificationstatus"); if (json.ServerResponse.IsRequestSuccessful)
{ status.update(Resources.subscription_notificationoff); notice.update('<a href="javascript:SetNotificationsOn(' + channelId + ');">' + Resources.subscription_turnon + '</a>'); alert(json.ServerResponse.DisplayText);}
else
alert(json.ServerResponse.DisplayText);}
});}
var CommentPlacement = { ViewVideoTop: 1, ViewVideoBottom: 2, ViewChannelTop: 3, ViewVideoChannelTop: 4, Video_Video: 1, Channel_Channel: 21, Channel_ChannelBeFirst: 22, Channel_Profile: 23, Channel_Video: 24, Home_HotVideo: 41
}
var commentlicious = { posLeft: 0, posTop : 0, captchaURL : "", captchaGuid : "", _hasForm: false, addForm : function(){ if (this._hasForm) return; getPageType(); var div = document.createElement('div'); div.id = "comment_form"; var h = document.getElementsByTagName('body')[0]; h = h.insertBefore(div,h.firstChild); h.innerHTML = "<div id=\"comment_form_inner0\"><div id=\"comment_form_inner1\">"+ "<h2 onmousedown=\"dragStart(event, 'comment_form')\" title=\"" + Resources.comment_title_hover +"\">"+ "<a href=\"#\" onclick=\"return commentlicious.hide(false);\" id=\"hide_button\" title=\"" +Resources.comment_close_hover +"\">X</a>"+Resources.comment_title+"</h2>"+ "<fieldset>"+ "<div id=\"commentArea\">"+ "<label for=\"ajax_comment\">"+Resources.comment_instructions+"</label>"+ "<br /><small>"+Resources.comment_characterremaining+" <span id=\"ajax_comment_length\">250</span></small>"+ "<textarea class=\"commenttext\" name=\"ajax_comment\" id=\"ajax_comment\" rows=\"4\"></textarea>"+ "</div>"+ "<div id=\"comment_form_captcha\" style=\"display: none;\">"+ Resources.captcha_enter_text+ "<img id=\"captchaImg\" src=\"\" />"+ "<a href=\"#\" onclick=\"return commentlicious.refreshCaptcha();\"><img id=\"captchaRefresh\" src=\"http://x.myspace.com/images/icons/refreshicon2.jpg\"></a>"+ "<div id=\"captcha_response\"><input name=\"captcha_text\" id=\"captcha_text\" type=\"text\" size=\"8\" maxlength=\"10\" />&nbsp;<label for=\"captcha_text\">" + Resources.captcha_user_input + "</label></div>"+ "</div>"+ "<div id=\"comment_buttons\">"+ "<input type=\"button\" name=\"addcomment\" id=\"addcomment\" value=\""+Resources.btn_submit+"\" onclick=\"commentlicious.commentSubmitClick();\" />"+ "<input type=\"button\" name=\"cancel\" id=\"cancel\" value=\""+Resources.btn_cancel+"\" onclick=\"commentlicious.hide(false);\" style=\"margin-left:20px;\" />"+ "</div>"+ "</fieldset>"+ "</div></div> "+ "<div id=\"comment_shadow\"> </div> "; document.getElementById("ajax_comment").onkeyup= function(){ showCharsRemaining("ajax_comment","ajax_comment_length",250);}
this._hasForm = true;}, getCoords: function(me){ var e = me; this.posLeft= 0; this.posTop = 0; while(e){ this.posLeft+=e.offsetLeft; this.posTop+=e.offsetTop; e=e.offsetParent;}
}, showForm: function( placement, me ){ this.getCoords(me); if ((placement == CommentPlacement.ViewVideoTop) || (placement == CommentPlacement.ViewVideoBottom) || (placement == CommentPlacement.Video_Video)){ this.posTop += 10; this.posLeft += 15;} else if (placement == CommentPlacement.ViewVideoChannelTop){ this.posTop += 70; this.posLeft += 15;} else if (placement == CommentPlacement.Channel_Channel){ this.posTop = this.posTop + ((this.posTop < 250)?10:-80); this.posLeft -= 410;} else if (placement == CommentPlacement.Channel_ChannelBeFirst){ this.posTop = this.posTop + ((this.posTop < 250)?-40:-170); this.posLeft += 15;}
return this.show(this.posTop,this.posLeft);}, show: function(top,left){ if (!this._hasForm) this.addForm(); $("commentArea").style.display = "block"; var h = document.getElementById("comment_form"); h.style.position = "absolute"; h.style.top = top+"px"; h.style.left = left+"px"; h.style.display = "block"; document.getElementById("ajax_comment").focus(); this.getCaptchaData(); return false;}, hide: function(){ var h = document.getElementById("comment_form"); h.style.display = "none"; document.getElementById("ajax_comment").value = ""; $("ajax_comment_length").innerHTML = "250"; $("addcomment").onclick = function onclick(event) { commentlicious.commentSubmitClick();}
$("comment_form_captcha").style.display = "none"; $("captcha_text").value = ""; $("captchaImg").src = ""; this.captchaURL = ""; this.captchaGuid = ""; return false;}, commentSubmitClick: function()
{ var commentBody = $("ajax_comment").value; if (commentBody.length == 0)
{ alert(Resources.comment_error1); $("ajax_comment").focus(); return false;}
if (commentBody.length > 250)
{ alert(Resources.comment_error2); $("ajax_comment").focus(); return false;}
if (this.captchaURL == "")
{ AddCommentWithCaptchaClick(commentBody, "", "");}
else
{ $("addcomment").onclick = function onclick(event) { commentlicious.captchaSubmitClick();}
this.showCaptcha();}
}, captchaSubmitClick: function()
{ var userCaptchaValue = $("captcha_text").value; if (userCaptchaValue == "" || userCaptchaValue.length == 0)
{ alert(Resources.captcha_not_valid ); $("captcha_text").focus();}
else
{ AddCommentWithCaptchaClick($("ajax_comment").value, userCaptchaValue, this.captchaGuid);}
}, showCaptcha: function()
{ $("commentArea").style.display = "none"; $("comment_form_captcha").style.display = "block"; $("captchaImg").src = this.captchaURL; $("captcha_text").value = ""; $("captcha_text").focus();}, refreshCaptcha: function()
{ this.getCaptchaData(); this.showCaptcha(); return false;}, getCaptchaData: function()
{ var uidValue = new Date().getMilliseconds(); var setNewData = this.setCaptchaData.bind(this); new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: captchaTypeCheck, uid: uidValue}, onSuccess: setNewData
});}, setCaptchaData: function(transport)
{ var json = transport.responseText.evalJSON(); this.captchaURL = json.ServerResponse.CaptchaUrl; this.captchaGuid = json.ServerResponse.CaptchaGuid; $("captchaImg").src = this.captchaURL;}
}
function ShowCommentForm(placement, me){ return commentlicious.showForm(placement, me);}
function DeleteComment(commentId)
{ getPageType(); if (confirm("Are you sure you want to delete this comment?"))
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: deleteCommentAction, id: pageTypeId, commentid: commentId}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); if (json.ServerResponse.IsRequestSuccessful)
{ CommentsPageClick(0); PagingContext.totalRows = PagingContext.totalRows - 1; alert(json.ServerResponse.DisplayText);}
else
{ alert(json.ServerResponse.DisplayText);}
}
});}
}
function AddCommentWithCaptchaClick(commentBody, captcha, guid)
{ new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: addCommentsCaptchaAction, id: pageTypeId, body: commentBody, ctext: captcha, cguid: guid}, onSuccess: function(transport)
{ var json = transport.responseText.evalJSON(); if (json.ServerResponse.IsRequestSuccessful)
{ commentlicious.hide(); CommentsPageClick(0); PagingContext.totalRows = PagingContext.totalRows + 1; if ($('hypFirstComment') != null)
$('hypFirstComment').style.display = "none";}
else
{ if (json.ServerResponse.CaptchaUrl != null)
{ commentlicious.captchaURL = json.ServerResponse.CaptchaUrl; commentlicious.captchaGuid = json.ServerResponse.CaptchaGuid; alert(json.ServerResponse.DisplayText); commentlicious.showCaptcha();}
else
{ commentlicious.hide(); alert(json.ServerResponse.DisplayText);}
}
}
});}
function AddCommentClick(commentType)
{ getPageType(); var commentBody = (document.getElementById("ajax_comment").value).escapeHTML(); if (commentBody.length == 0)
{ alert(Resources.comment_error1); return false;}
if (commentBody.length > 250)
{ alert(Resources.comment_error2); return false;}
new Ajax.Request(url, { method: defaultMethod, parameters: {fuseaction: defaultFuseAction, action: commentType, id: pageTypeId, body: commentBody, h: commentHash}, onSuccess: function(transport)
{ commentlicious.hide(); var json = transport.responseText.evalJSON(); if (json.ServerResponse.IsRequestSuccessful)
{ CommentsPageClick(0); PagingContext.totalRows = PagingContext.totalRows + 1; if ($('hypFirstComment') != null)
$('hypFirstComment').style.display = "none";}
else
{ alert(json.ServerResponse.DisplayText);}
}
});}
function getPageType()
{ try
{ pageTypeId = ChannelID; commentsAction = "GETCHANNELCOMMENTS"; addCommentsAction = "ADDCHANNELCOMMENT"; addCommentsCaptchaAction = "ADDCHANNELCOMMENT"; deleteCommentAction = "DELETECHANNELCOMMENT"; captchaTypeCheck = "CHECKWHETHERTODISPLAYCAPTCHAFORCHANNEL";}
catch(e)
{ pageTypeId = videoID; commentsAction = "GETVIDEOCOMMENTS"; addCommentsAction = "ADDVIDEOCOMMENT"; addCommentsCaptchaAction = "ADDVIDEOCOMMENTWITHCAPTCHA"; deleteCommentAction = "DELETEVIDEOCOMMENT"; captchaTypeCheck = "CHECKWHETHERTODISPLAYCAPTCHA";}
}
function CommentsPageClick(p)
{ getPageType(); new commentsData(p); return false;}
var commentsData = Class.create(); commentsData.prototype = { requestedPageNumber: 1, currentPageNumber: 2, lastCommentId: 1, firstCommentId: 1, pageSize: 10, commentsTable: 1, initialize: function(p)
{ this.currentPageNumber = p + 1; this.requestedPageNumber = PagingContext.currentPage + 1; this.commentsTable = $("tblComments").tBodies[0]; this.getNewData();}, getNewData: function()
{ if (this.commentsTable.rows.length > 0)
{ this.firstCommentId = this.commentsTable.rows[0].id; this.lastCommentId = this.commentsTable.rows[(this.commentsTable.rows.length) - 1].id;}
var showNewData = this.showNewData.bind(this); new Ajax.Request(url, { method: defaultMethod, parameters:
{ fuseaction: defaultFuseAction, action: commentsAction, id: pageTypeId, rpn: this.requestedPageNumber, cpn: this.currentPageNumber, lcid: this.lastCommentId, fcid: this.firstCommentId, ps: this.pageSize
}, onSuccess: showNewData
});}, showNewData: function(transport)
{ var json = transport.responseText.evalJSON(); this.clearExistingData(this.commentsTable); this.makePaging(); for (var i = 0; i < json.Comments.length; i++)
{ this.insertComment(json.Comments[i], json.HasCommentOptions);}
wordBreakerDoComments();}, clearExistingData: function(tbody)
{ while (tbody.rows.length > 0)
{ tbody.deleteRow(0);}
}, makePaging: function()
{ PagingContext.currentPage = this.currentPageNumber - 1; PagingContext.startRow = 1 + PagingContext.currentPage * PagingContext.pageSize; var outStr = makePaging(); document.getElementById("PagingHeader").innerHTML = outStr; document.getElementById("PagingFooter").innerHTML = outStr;}, insertComment: function(obj, hasCommentOptions)
{ var tblComments = this.commentsTable; var tblRow = document.createElement("TR"); var tblCell1 = document.createElement("TD"); var tblCell2 = document.createElement("TD"); var pTag = document.createElement("P"); var divTag = document.createElement("DIV"); var aTag = document.createElement("A"); var aTag2 = document.createElement("A"); with (obj.Comment)
{ tblRow.id = CommentID; aTag.href = ChannelURL; aTag.innerHTML = wordBreaker.fix(DisplayName) + "<br /><img src='" + PicSrc + "' />"; pTag.className = "posting_date"; pTag.innerHTML = PostingDate; divTag.innerHTML = Body; if ($("firstCommentRow"))
$("firstCommentRow").style.display = "none"; tblCell1.className = "poster"; tblCell2.className = "comment"; if (hasCommentOptions)
{ aTag2.href = "javascript:DeleteComment(" + CommentID + ");" ; aTag2.className = "comment_options"; aTag2.innerHTML = Resources.delete_comment; tblCell2.appendChild(aTag2);}
tblCell1.appendChild(aTag); tblCell2.appendChild(pTag); tblCell2.appendChild(divTag); tblRow.appendChild(tblCell1); tblRow.appendChild(tblCell2); tblComments.appendChild(tblRow);}
}
}; function SortedVideosClick(cid, sb, objLink)
{ new videosData(cid, sb, objLink); return false;}
var videosData = Class.create(); videosData.prototype = { channelId: 1, startPage: 1, numOfRecords: 20, sortBy: 5, dateTimePeriod: "all", videosTable: 1, selectedLink: "", initialize: function(cid, sb, objLink)
{ this.channelId = cid; this.sortBy = sb; this.selectedLink = objLink; this.videosTable = $("myVideosList").tBodies[0]; this.getNewData();}, getNewData: function()
{ var showNewData = this.showNewData.bind(this); new Ajax.Request(url, { method: defaultMethod, parameters:
{ fuseaction: defaultFuseAction, action: "GETSORTEDVIDEOS", channelid: this.channelId, sp: this.startPage, nor: this.numOfRecords, sb: this.sortBy, f: this.dateTimePeriod
}, onSuccess: showNewData
});}, showNewData: function(transport)
{ var json = transport.responseText.evalJSON(); this.clearExistingData(this.videosTable); for (var i = 0; i < json.Videos.length; i++)
{ this.insertVideoRow(json.Videos[i], i);}
this.setLinksStyle(); wordBreakerVideoDescription();}, clearExistingData: function(tbody)
{ while (tbody.rows.length > 0)
{ tbody.deleteRow(0);}
}, setLinksStyle: function()
{ var sortedLinksCollection = $('myVideosSortingLinks').getElementsByTagName('a'); for (var i = 0; i < sortedLinksCollection.length; i++)
{ with (sortedLinksCollection[i].style)
{ color = ''; textDecoration = 'underline'; cursor = 'pointer';}
}
with (this.selectedLink.style)
{ color = '#000000'; textDecoration = 'none'; cursor = 'text';}
}, insertVideoRow: function(obj, counter)
{ if (counter % 2 == 0)
{ this.insertVideoCell(true, obj, counter);}
else
{ this.insertVideoCell(false, obj, counter);}
}, insertVideoCell: function(isNewRow, obj, counter)
{ var tdCell1 = document.createElement("TD"); var tdCell2 = document.createElement("TD"); var divTag1 = document.createElement("DIV"); var divTag2 = document.createElement("DIV"); var divTag3 = document.createElement("DIV"); var divTag4 = document.createElement("DIV"); var aTag = document.createElement("A"); var aTag2 = document.createElement("A"); var h2Tag = document.createElement("H2"); with(obj.Video)
{ aTag.className = "video_picture"; aTag.href = VideoURL; aTag.innerHTML = "<img src='" + PicSrc + "' />"; aTag2.innerHTML = Title; aTag2.href = VideoURL; tdCell1.className = "video_still"; tdCell1.appendChild(aTag); tdCell2.className = "video_info"; h2Tag.className = "title"; h2Tag.appendChild(aTag2); divTag1.className = "text"; divTag1.innerHTML = "<strong>" + Runtime + "</strong>"; divTag2.className = "description"; divTag2.innerHTML = Description; divTag3.className = "rating"; divTag3.innerHTML = Resources.rating + ": <strong>" + Rating + "%</strong>"; divTag4.className = "text"; divTag4.innerHTML = "<span>" + Resources.added + ": " + DateAdded + "</span>"; divTag4.innerHTML += "<br /><span>" + Resources.plays + ": " + Plays + "</span>"; divTag4.innerHTML += "<br /><span>" + Resources.comments + ": " + Comments + "</span>";}
tdCell2.appendChild(h2Tag); tdCell2.appendChild(divTag1); tdCell2.appendChild(divTag2); tdCell2.appendChild(divTag3); tdCell2.appendChild(divTag4); if (isNewRow)
{ var tblRow = document.createElement("TR"); tblRow.appendChild(tdCell1); tblRow.appendChild(tdCell2); this.videosTable.appendChild(tblRow);}
else
{ var tblRow = this.videosTable.rows[(this.videosTable.rows.length) - 1]; tblRow.appendChild(tdCell1); tblRow.appendChild(tdCell2);}
if (counter % 2 == 0)
this.videosTable.appendChild(tblRow);}
};


}
/*
     FILE ARCHIVED ON 19:15:41 Sep 04, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:09:46 Jun 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.43
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 38.911
  LoadShardBlock: 68.925 (3)
  PetaboxLoader3.datanode: 97.325 (4)
  load_resource: 135.879
  PetaboxLoader3.resolve: 98.407
*/