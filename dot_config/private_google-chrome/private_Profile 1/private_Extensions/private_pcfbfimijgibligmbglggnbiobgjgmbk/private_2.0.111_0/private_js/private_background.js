/* Copyright (c) 2022 Synology Inc. All rights reserved. */

Ext.ns("SYNO.SDS.NoteStationClipper.Background");Ext.apply(SYNO.SDS.NoteStationClipper.Background,{info:null,showOpenFailedMessage:function(){if(!Ext.isEmpty(chrome.runtime.lastError)){alert(_NSC("message","error_clipper_open_fail"))}},resetStorage:function(a){chrome.storage.sync.get(null,function(b){chrome.storage.sync.clear(function(){Ext.iterate(a,function(c,d){b[c]=d});chrome.storage.sync.set(b)})})},checkLoginStatus:function(){var a=this;chrome.storage.sync.get("SYNO_NoteStationClipper",function(b){if(b.SYNO_NoteStationClipper&&b.SYNO_NoteStationClipper.SID!==""){if(Ext.isString(b.SYNO_NoteStationClipper.passwd)){delete b.SYNO_NoteStationClipper.passwd;a.resetStorage(b)}chrome.browserAction.setPopup({popup:""});chrome.contextMenus.update("setting",{enabled:true});a.info=b.SYNO_NoteStationClipper;a.updateNSVersion(a.info,Ext.emptyFn)}else{chrome.contextMenus.update("setting",{enabled:false});chrome.browserAction.setPopup({popup:"login.html"});a.info=null}})},appendContextMenu:function(){chrome.contextMenus.create({id:"setting",title:_NSC("common","common_settings"),contexts:["browser_action"],documentUrlPatterns:["http://*/*","https://*/*"],onclick:function(b,a){chrome.tabs.sendMessage(a.id,{action:"toggle_setting"},SYNO.SDS.NoteStationClipper.Background.showOpenFailedMessage)}})},handleEasyCapture:function(b,c){var a={tab:b};if("gmail"===SYNO.SDS.NoteStationClipper.Utils.website){SYNO.SDS.NoteStationClipper.Background.toggleGmailThread(a,true,function(){SYNO.SDS.NoteStationClipper.Background.getPageContent(a,{title:undefined,type:"gmail_thread",notebook_id:c.notebookid})});return}if("mailplus"===SYNO.SDS.NoteStationClipper.Utils.website){SYNO.SDS.NoteStationClipper.Background.toggleMailPlusThread(a,true,function(){SYNO.SDS.NoteStationClipper.Background.getPageContent(a,{title:undefined,type:"mailplus_thread",notebook_id:c.notebookid})});return}switch(c.clip_type){case"whole_screenshot":case"fullpage":SYNO.SDS.NoteStationClipper.Background.getPageContent(a,{title:undefined,type:c.clip_type,notebook_id:c.notebookid});break;case"simplified":SYNO.SDS.NoteStationClipper.Background.toggleSimplify(a,true,function(d){SYNO.SDS.NoteStationClipper.Background.getPageContent(a,{title:undefined,type:c.clip_type,notebook_id:c.notebookid})});break;case"screenshot":SYNO.SDS.NoteStationClipper.Background.toggleScreenshot(a,true);break;default:break}},clickBrowserActionHandler:function(a){if(SYNO.SDS.NoteStationClipper.Utils.isGmail(a.url)){SYNO.SDS.NoteStationClipper.Utils.website="gmail"}else{if(SYNO.SDS.NoteStationClipper.Utils.isMailPlus(a.favIconUrl)){SYNO.SDS.NoteStationClipper.Utils.website="mailplus"}else{SYNO.SDS.NoteStationClipper.Utils.website=null}}chrome.browserAction.getPopup({tabId:a.id},function(b){if(b!==""){return}chrome.storage.sync.get("clipper_options",function(c){if(!Ext.isEmpty(c.clipper_options)&&c.clipper_options.ezCapture===true){SYNO.SDS.NoteStationClipper.Background.handleEasyCapture(a,c.clipper_options)}else{chrome.tabs.sendMessage(a.id,{action:"toggle_clipper"},SYNO.SDS.NoteStationClipper.Background.showOpenFailedMessage)}})})},onTabChange:function(a){chrome.storage.sync.set({activeInfo:a})},onWindowChange:function(a){chrome.tabs.query({currentWindow:true,active:true},function(d){var c=Ext.isObject(d[0])&&Ext.isNumber(d[0].id)?d[0].id:-1;var b={tabId:c,windowId:a};SYNO.SDS.NoteStationClipper.Background.onTabChange(b)})},logout:function(a){chrome.storage.sync.get("SYNO_NoteStationClipper",function(b){if(b.SYNO_NoteStationClipper&&b.SYNO_NoteStationClipper.SID!==""){chrome.contextMenus.update("setting",{enabled:false});chrome.storage.sync.set({SYNO_NoteStationClipper:{SID:"",HOST:""}});chrome.storage.sync.remove("clipper_options");chrome.browserAction.setPopup({popup:"login.html"});chrome.tabs.sendMessage(a.tab.id,{action:"close_all_frame"});Ext.Ajax.request({url:b.SYNO_NoteStationClipper.HOST+"/webapi/auth.cgi",params:{api:"SYNO.API.Auth",version:1,method:"logout",session:"notestation",_sid:JSON.stringify(b.SYNO_NoteStationClipper.SID)}})}})},getPageContent:function(a,b){chrome.storage.sync.get("activeInfo",function(c){chrome.tabs.sendMessage(a.tab.id,{action:"get_content",data:b},SYNO.SDS.NoteStationClipper.Background.showOpenFailedMessage)})},toggleGmailThread:function(c,b,a){chrome.tabs.sendMessage(c.tab.id,{action:"toggle_gmail_thread",type:b},function(d){if(Ext.isFunction(a)){a({success:true})}})},toggleMailPlusThread:function(c,b,a){chrome.tabs.sendMessage(c.tab.id,{action:"toggle_mailplus_thread",type:b},function(d){if(Ext.isFunction(a)){a({success:true})}});if(b){chrome.tabs.insertCSS(c.tab.id,{file:"./css/mailplus.css"})}},toggleSimplify:function(c,b,a){chrome.tabs.sendMessage(c.tab.id,{action:"toggle_simplify",type:b},function(d){if(Ext.isFunction(a)){a({success:true})}});if(b){chrome.tabs.insertCSS(c.tab.id,{file:"./css/simplify_reader.css"})}},toggleScreenshot:function(b,a){chrome.tabs.sendMessage(b.tab.id,{action:"toggle_screenshot",type:a},SYNO.SDS.NoteStationClipper.Background.showOpenFailedMessage);if(a){chrome.tabs.insertCSS(b.tab.id,{file:"css/screenshot.css"})}},getScreenshot:function(c,b,a){chrome.tabs.captureVisibleTab(c.tab.windowId,{format:"jpeg",quality:100},function(d){a({screenshotUrl:d})})},toggleSetting:function(a){chrome.tabs.sendMessage(a.tab.id,{action:"toggle_setting"},SYNO.SDS.NoteStationClipper.Background.showOpenFailedMessage)},toggleClipper:function(b,c){var a;if(Ext.isObject(c)&&!Ext.isEmpty(c.tab_id)){a=c.tab_id}else{a=b.tab.id}chrome.tabs.sendMessage(a,{action:"toggle_clipper"},SYNO.SDS.NoteStationClipper.Background.showOpenFailedMessage)},closeStatus:function(a,b){chrome.tabs.sendMessage(a.tab.id,{action:"close_status",data:b})},onUpdateSession:function(b,c){if(b&&b.success&&b.data.sid){this.info.SID=b.data.sid;if(!Ext.isEmpty(b.data.did)){this.info.did=b.data.did}var a={};a.SYNO_NoteStationClipper=this.info;chrome.storage.sync.set(a);c(true)}else{c(false,b)}},updateSession:function(a,b){SYNO.SDS.NoteStationClipper.Utils.getAPIInfo(this.info.HOST,(function(e,j,c){var i;try{i=JSON.parse(c.responseText)}catch(g){b(false,c);return}if(!j||!i||!i.success){b(false,i);return}var f=i.data["SYNO.API.Auth"];if(!Ext.isObject(f)){f={path:"auth.cgi",maxVersion:3,minVersion:1}}var d=this.info.HOST+"/webapi/auth.cgi";var h={api:"SYNO.API.Auth",version:f.maxVersion,method:"login",format:"sid",session:"notestation",account:this.info.account,passwd:a.passwd};if(this.info.otp){h.otp_code=this.info.otp;delete this.info.otp}if(f.maxVersion>=6&&!Ext.isEmpty(this.info.did)){h.device_id=this.info.did}if(!Ext.isString(a.passwd)){this.onUpdateSession({success:false,error:{code:400}},b);return}Ext.Ajax.request({url:d,params:h,scope:this,callback:function(l,n,k){if(n){var m=JSON.parse(k.responseText);this.onUpdateSession(m,b)}else{b(false,k)}}})}).createDelegate(this))},updateNSVersion:function(a,c){var b=this;SYNO.SDS.NoteStationClipper.Utils.checkNoteStationVersion(a,function(e,d){if(!e||!d.data.result[0].success||!d.data.result[1].success){c(false);return}a.version=d.data.result[0].data.version;a.uid=d.data.result[0].data.uid;b.setupAppInfo(a);c(a)})},sendAjaxRequest:function(c,g,a){var e=this;var b=Ext.apply({},g);var f=this.sendAjaxRequest.createDelegate(this,[c,b,a],false);if(Ext.isEmpty(g.params)){g.params={}}if(g.html5upload){g.url=this.info.HOST+"/webapi/entry.cgi";g.url+="?api="+g.api;g.url+="&version="+g.version;g.url+="&method="+g.method;g.url+="&_sid="+JSON.stringify(this.info.SID)}else{g.params._sid=this.info.SID;g.params=Ext.copyTo(g.params,g,"api, method, version")}delete g.api;delete g.method;delete g.version;g.params=SYNO.API.EncodeParams(g.params);var d=Ext.apply({url:this.info.HOST+"/webapi/entry.cgi",callback:function(j,m,h){var i=false;try{var l=Ext.util.JSON.decode(h.responseText);if(l.error.code===105||l.error.code===106||l.error.code===107){i=true}}catch(k){}if(!i){a({opt:j,success:m,response:h})}else{e.updateSession({},function(o,n){if(o){f()}else{alert(String.format(_NSC("common","error_system"),_NSC("app","displayname")));SYNO.SDS.NoteStationClipper.Background.logout(c)}})}}},g);Ext.Ajax.request(d)},fetchUrl:function(b,e,a){var c=0,d=[];if(!e||!a){return false}Ext.iterate(e.paramInfo.files,function(g,f){var h;if(Ext.isEmpty(f.fetch_url)){return}c++;h=new XMLHttpRequest();h.open("GET",f.fetch_url);h.responseType="blob";h.onreadystatechange=function(){if(4!==h.readyState){return}c--;if(200===h.status){f.blob=h.response}if(0<c){return}SYNO.SDS.NoteStationClipper.Background.createNote(b,e,a)};delete f.fetch_url;d.push(h)});Ext.iterate(d,function(f){f.send()});return !Ext.isEmpty(d)},createNote:function(b,d,a){var e=new window.FormData();if(true===this.fetchUrl(b,d,a)){return}d.paramInfo.params.attachment=[];Ext.iterate(d.paramInfo.files,function(g,h){var i=Ext.copyTo({rotate:true},h,"action,format,ref,convert,rotate,file_ref,pdf_ref");switch(h.format){case"url":i.name=g;i.source=h.source;break;case"raw":var f;if(h.blob){f=h.blob}else{f=SYNO.SDS.NoteStation.Utils.dataURItoBlob(h.DataURI)}f.name=h.name;i.name=Ext.id();e.append(i.name,f,h.name||g);break;default:break}d.paramInfo.params.attachment.push(i)});Ext.iterate(d.paramInfo.params,function(f,g){e.append(f,JSON.stringify(g))});var c=Ext.apply({api:"SYNO.NoteStation.Note",method:"create",version:2,timeout:300000,html5upload:true,uploadData:e,params:d.paramInfo.params},d);this.sendAjaxRequest(b,c,a)},passThroughMessage:function(b,c,a){chrome.tabs.sendMessage(b.tab.id,c,function(d){a(d)})},retryQuickConnect:function(c,e,a){var b=Ext.apply({},e);var d=this;SYNO.SDS.NoteStationClipper.Utils.GetQuickConnectHost(e.SERVER,e.HOST.startsWith("https://"),function(g,f){if(!g){a(false);return}b.HOST=f.host;d.updateNSVersion(b,a)},this)},setupAppInfo:function(a){this.info=a;chrome.storage.sync.set({SYNO_NoteStationClipper:a})},getAppInfo:function(a){a(this.info)},messageHandler:function(c,b,a){switch(c.action){case"logout":SYNO.SDS.NoteStationClipper.Background.logout(b);break;case"save":SYNO.SDS.NoteStationClipper.Background.getPageContent(b,c.data);break;case"toggle_simplify":SYNO.SDS.NoteStationClipper.Background.toggleSimplify(b,c.toggle_on);break;case"toggle_screenshot":SYNO.SDS.NoteStationClipper.Background.toggleScreenshot(b,c.toggle_on);break;case"toggle_gmail_thread":SYNO.SDS.NoteStationClipper.Background.toggleGmailThread(b,c.toggle_on);break;case"toggle_mailplus_thread":SYNO.SDS.NoteStationClipper.Background.toggleMailPlusThread(b,c.toggle_on);break;case"get_screenshot":SYNO.SDS.NoteStationClipper.Background.getScreenshot(b,c.data,a);break;case"toggle_setting":SYNO.SDS.NoteStationClipper.Background.toggleSetting(b);break;case"toggle_clipper":SYNO.SDS.NoteStationClipper.Background.toggleClipper(b,c);break;case"setup_appinfo":SYNO.SDS.NoteStationClipper.Background.setupAppInfo(c.data);break;case"get_appinfo":SYNO.SDS.NoteStationClipper.Background.getAppInfo(a);break;case"retry_quickconnect":SYNO.SDS.NoteStationClipper.Background.retryQuickConnect(b,c.data,a);break;case"close_status":SYNO.SDS.NoteStationClipper.Background.closeStatus(b);break;case"ajax_request":SYNO.SDS.NoteStationClipper.Background.sendAjaxRequest(b,c.data,a);break;case"create_note":SYNO.SDS.NoteStationClipper.Background.createNote(b,c.data,a);break;case"select_clip_type":case"unmask_clipper":SYNO.SDS.NoteStationClipper.Background.passThroughMessage(b,c,a);break;default:console.log("ERROR: INVALID MESSAGE!!!",c);break}return true}});chrome.browserAction.onClicked.addListener(SYNO.SDS.NoteStationClipper.Background.clickBrowserActionHandler);chrome.tabs.onActivated.addListener(SYNO.SDS.NoteStationClipper.Background.onTabChange);chrome.windows.onFocusChanged.addListener(SYNO.SDS.NoteStationClipper.Background.onWindowChange);chrome.runtime.onMessage.addListener(SYNO.SDS.NoteStationClipper.Background.messageHandler);SYNO.SDS.NoteStationClipper.Background.appendContextMenu();SYNO.SDS.NoteStationClipper.Background.checkLoginStatus();