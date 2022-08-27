/* Copyright (c) 2022 Synology Inc. All rights reserved. */

Ext.ns("SYNO.SDS.NoteStationClipper");Ext.define("SYNO.SDS.NoteStationClipper.ClipperDialog",{extend:"SYNO.SDS.BaseWindow",constructor:function(a){this.serverInfo=a.serverInfo;this.settingMode=a.settingMode;this.callParent([this.fillConfig(a)])},fillConfig:function(a){var c=Ext.urlDecode(window.location.search.substr(1));var b;this.host_website=c.website;b=Ext.apply({width:300,height:this.settingMode?320:410,layout:"fit",maximizable:false,minimizable:false,closable:true,resizable:false,draggable:false,cls:"syno-nsc-clipper-dialog",items:[this.formPanel=new SYNO.ux.FormPanel({labelWidth:30,useGradient:false,autoFlexcroll:false,items:[{xtype:"syno_displayfield",height:48,value:this.getLogoValue(),cls:"syno-nsc-logo",hidden:!this.settingMode},{xtype:"syno_displayfield",itemCls:"syno-nsc-info-item",value:this.getVersionValue(),hidden:!this.settingMode},{xtype:"syno_displayfield",value:this.getDSValue(),itemCls:"syno-nsc-info-item",cls:"syno-nsc-info-ds",hidden:!this.settingMode},{xtype:"syno_displayfield",value:this.getAccountValue(),itemCls:"syno-nsc-info-item",hidden:!this.settingMode},{xtype:"syno_displayfield",height:10,hidden:!this.settingMode},this.titleField=new SYNO.ux.DisplayField({hideLabel:true,itemCls:"syno-nsc-title-item",width:240,value:c.title,hidden:this.settingMode,htmlEncode:true}),this.clipTypeCombo=new SYNO.ux.ComboBox({width:210,itemCls:"syno-nsc-cliptype-item",triggerAction:"all",mode:"local",editable:false,value:"fullpage",displayField:"display",valueField:"value",store:this.getClipTypeStore(),listeners:{scope:this,select:this.clipTypeChanged}}),this.notebookCombo=new SYNO.ux.ComboBox({itemCls:"syno-nsc-notebook-item",width:210,triggerAction:"all",mode:"local",editable:false,displayField:"title",valueField:"object_id",store:this.getNotebookStore(),setValue:function(d){var f=d;if(this.valueField){var e=this.findRecord(this.valueField,d);if(e){f=e.data.orig_title}else{if(Ext.isDefined(this.valueNotFoundText)){f=this.valueNotFoundText}}}this.lastSelectionText=f;if(this.hiddenField){this.hiddenField.value=Ext.value(d,"")}Ext.form.ComboBox.superclass.setValue.call(this,f);this.value=d;return this},listeners:{scope:this,select:this.saveOptions}}),{xtype:"syno_button",text:_NSC("common","save"),btnStyle:"blue",width:"99%",hidden:this.settingMode,scope:this,handler:function(){this.maskPanel();chrome.runtime.sendMessage({action:"save",data:{title:this.titleField.value.trim(),type:this.clipTypeCombo.getValue(),notebook_id:this.notebookCombo.getValue(),tags:this.getTagsArray(),comment:this.comment.getValue().trim()}})}},{xtype:"syno_displayfield",height:14,itemCls:"syno-nsc-sep-item",hidden:this.settingMode},this.tagsField=new SYNO.SDS.NoteStationClipper.TagSuperBox({hidden:this.settingMode,supportNestedTag:a.ns_version>=520,listeners:{scope:this,additem:this.updateFormScroller,removeitem:this.updateFormScroller,newitem:this.onAddNewitem}}),this.comment=new SYNO.ux.TextArea({width:210,itemCls:"syno-nsc-comment-item",xtype:"syno_textarea",emptyText:_NSC("message","hint_add_comment"),hidden:this.settingMode}),this.ezModeCheck=new SYNO.ux.Checkbox({boxLabel:_NSC("capture","ez_capture_mode"),itemCls:"syno-nsc-ezcapture-item",listeners:{scope:this,check:this.saveOptions}}),{xtype:"syno_displayfield",height:48,itemId:"status_field",hidden:true}]})],listeners:{scope:this,afterrender:this.afterrenderHandler}},a);return b},setClipType:function(a){this.clipTypeCombo.setValue(a)},close:function(){chrome.runtime.sendMessage({action:this.settingMode?"toggle_setting":"toggle_clipper"});this.callParent(arguments)},onWindowClosed:Ext.emptyFn,getLogoValue:function(){var a='<div class="syno-nsc-logo-corp">Synology</div>';a+='<div class="syno-nsc-logo-proj">Web Clipper</div>';if(SYNO.SDS.NoteStationClipper.Utils.checkIsBeta()){a+='<span class="syno-nsc-logo-beta">BETA</span>'}return a},getVersionValue:function(){this.versionId=Ext.id();var a='<div class="syno-nsc-info-version" id="'+this.versionId+'"><label class="syno-nsc-info-label">'+_NSC("setting","version")+": </label>";this.feedbackId=Ext.id();a+=chrome.app.getDetails().version;a+='&nbsp</div><label class="syno-nsc-info-link" id="'+this.feedbackId+'">'+_NSC("setting","feedback")+"</label>";return a},getDSValue:function(){var a='<label class="syno-nsc-info-label">'+_NSC("setting","disk_station")+": </label>";a+=Ext.util.Format.htmlEncode(this.serverInfo.SERVER);return a},getAccountValue:function(){this.accountId=Ext.id();var a='<div class="syno-nsc-info-account" id="'+this.accountId+'"><label class="syno-nsc-info-label">'+_NSC("setting","account")+": </label>";this.logoutId=Ext.id();a+=Ext.util.Format.htmlEncode(this.serverInfo.USER);a+='&nbsp</div><label class="syno-nsc-info-link" id="'+this.logoutId+'">'+_NSC("common","logout")+"</label>";return a},getTagsArray:function(){var b=this.tagsField.getValueEx();var a=[];Ext.each(b,function(c){a.push(c.title)});return a},getClipTypeStore:function(c){var a,b=[];if("gmail"===this.host_website){b.push(["gmail_thread",_NSC("capture","gmail_thread")])}else{if("mailplus"===this.host_website){b.push(["mailplus_thread",_NSC("capture","gmail_thread")])}else{b.push(["simplified",_NSC("capture","simplify_content")],["fullpage",_NSC("capture","whole_content")])}}b.push(["whole_screenshot",_NSC("capture","whole_screenshot")],["screenshot",_NSC("capture","screenshot")]);a=new Ext.data.ArrayStore({autoDestroy:true,fields:["value","display"],data:b});return a},getNotebookStore:function(){var a=new Ext.data.JsonStore({autoDestroy:true,root:"notebooks",idProperty:"object_id",fields:["title","object_id","orig_title"]});return a},updateFormScroller:function(){this.formPanel.updateScroller()},onAddNewitem:function(b,a,c){a=a.trim();if(a){b.addItem({tag_id:a+"@"+this.uid,title:a},true)}this.formPanel.updateScroller()},clipTypeChanged:function(c,a,b){if(!this.settingMode){chrome.runtime.sendMessage({action:"toggle_simplify",toggle_on:c.getValue()==="simplified"});chrome.runtime.sendMessage({action:"toggle_screenshot",toggle_on:c.getValue()==="screenshot"});chrome.runtime.sendMessage({action:"toggle_gmail_thread",toggle_on:c.getValue()==="gmail_thread"});chrome.runtime.sendMessage({action:"toggle_mailplus_thread",toggle_on:c.getValue()==="mailplus_thread"})}this.saveOptions()},saveOptions:function(){if(!Ext.isEmpty(this.host_website)){return}chrome.storage.sync.set({clipper_options:{notebookid:this.notebookCombo.getValue(),clip_type:this.clipTypeCombo.getValue(),ezCapture:this.ezModeCheck.getValue()}})},afterrenderHandler:function(){if(!this.initialized){this.titleField.getEl().dom.setAttribute("contenteditable",true);Ext.get(this.logoutId).addListener("click",this.logout,this);Ext.get(this.feedbackId).addListener("click",this.toSupportPage,this);Ext.get(this.versionId).dom.style.maxWidth=235-Ext.get(this.feedbackId).getWidth()+"px";Ext.get(this.accountId).dom.style.maxWidth=235-Ext.get(this.logoutId).getWidth()+"px";this.initialized=true}this.loadAllNotebooks()},loadAllNotebooks:function(){this.maskPanel();chrome.runtime.sendMessage({action:"ajax_request",data:{api:"SYNO.NoteStation.Notebook",version:1,method:"list"}},this.loadNotebookCallback.createDelegate(this))},loadNotebookCallback:function(c){var d,a;this.unmaskPanel();if(true===c.success){try{d=Ext.util.JSON.decode(c.response.responseText)}catch(b){d=null}}if(Ext.isEmpty(d)){this.handleConnectFail(c);return}a={notebooks:[]};Ext.each(d.data.notebooks,function(e){if("owner"!==e.perm&&"rw"!==e.perm){return}e.orig_title=Ext.isEmpty(e.title)?_NS("notebook","default"):e.title;e.title=Ext.util.Format.htmlEncode(e.orig_title);a.notebooks.push(e)});this.notebookCombo.getStore().loadData(a,false);this.notebookCombo.setValue(this.notebookCombo.getStore().getAt(0).get("object_id"));this.initDefaultValue();this.loadAllTags()},loadAllTags:function(){this.maskPanel();chrome.runtime.sendMessage({action:"ajax_request",data:{api:"SYNO.NoteStation.Tag",version:1,method:"list"}},this.loadTagCallback.createDelegate(this))},loadTagCallback:function(b){this.unmaskPanel();if(b.success){var a=[];var c=Ext.util.JSON.decode(b.response.responseText);Ext.each(c.data.tags,function(d){a.push(new Ext.data.Record({tag_id:d.tag_id,title:d.title}))},this);this.tagsField.getTagStore().add(a)}else{this.handleConnectFail(b)}},initDefaultValue:function(){var a=this,c="simplified",b=false;chrome.storage.sync.get("clipper_options",function(d){if(!Ext.isEmpty(d)&&!Ext.isEmpty(d.clipper_options)){if(!Ext.isEmpty(MainDialog.notebookCombo.store.getById(d.clipper_options.notebookid))){MainDialog.notebookCombo.setValue(d.clipper_options.notebookid)}c=d.clipper_options.clip_type;b=d.clipper_options.ezCapture}if("gmail"===a.host_website){c="gmail_thread";b=false}else{if("mailplus"===a.host_website){c="mailplus_thread";b=false}}MainDialog.ezModeCheck.setValue(b);MainDialog.clipTypeCombo.setValue(c);MainDialog.clipTypeChanged(MainDialog.clipTypeCombo)})},logout:function(){this.maskPanel();chrome.runtime.sendMessage({action:"logout"})},toSupportPage:function(){var a="https://myds.synology.com/support/{0}?category=support_form_category_Packages&sub_category=support_form_category_Packages_web_clipper";window.open(SYNO.SDS.NoteStationClipper.Utils.checkIsBeta()?String.format(a,"beta_dsm_form.php"):String.format(a,"support_form.php"))},handleConnectFail:function(b){var a=function(){alert(_NSC("common","commfail"));if(true!==this.settingMode){this.close()}};if(false===b.success&&true===this.serverInfo.QUICKCONNECT){this.maskPanel();chrome.runtime.sendMessage({action:"retry_quickconnect",data:this.serverInfo},(function(c){this.unmaskPanel();if(!Ext.isObject(c)){return}this.serverInfo=c;this.afterrenderHandler()}).createDelegate(this))}else{a.call(this)}},maskPanel:function(){if(this.settingMode){if(this.notebookCombo.isVisible()&&0===this.notebookCombo.store.getCount()){this.notebookCombo.setValue(_NSC("common","loading"));this.notebookCombo.disable()}if(this.tagsField.isVisible()&&0===this.tagsField.getCount()){this.tagsField.setRawValue(_NSC("common","loading"));this.tagsField.disable()}}else{this.formPanel.el.mask(_NSC("common","loading"),"x-mask-loading")}},unmaskPanel:function(){if(this.settingMode){if(this.notebookCombo.isVisible()&&this.notebookCombo.disabled){this.notebookCombo.clearValue();this.notebookCombo.enable()}if(this.tagsField.isVisible()&&this.tagsField.disabled){this.tagsField.clearValue();this.tagsField.enable()}}else{this.formPanel.el.unmask()}}});