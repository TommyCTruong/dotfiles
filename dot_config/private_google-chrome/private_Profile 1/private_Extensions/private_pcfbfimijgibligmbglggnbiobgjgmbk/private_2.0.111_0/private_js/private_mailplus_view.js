/* Copyright (c) 2022 Synology Inc. All rights reserved. */

Ext.ns("SYNO.SDS.NoteStationClipper");Ext.define("SYNO.SDS.NoteStationClipper.MailPlusView",{extend:"SYNO.ux.FormPanel",mail_panel:null,mail_data:null,constructor:function(a){this.mail_data=a;this.callParent([this.fillConfig({})])},fillConfig:function(a){return Ext.apply({cls:"syno-nsc-mailplus-thread-panel",border:false,frame:false,renderTo:document.body,width:document.body.offsetWidth,hideLabel:true,hideLabels:true,autoFlexcroll:false,autoScroll:false,bodyCfg:{cls:"syno-nsc-mailplus-thread-content"},items:this.createItems(),listeners:{afterrender:this.afterrender,scope:this}},a)},afterrender:function(){var c=this.getComponent("content_panel");var b=this.getComponent("select_all");var a=this.getComponent("subject");if(c){c.setHeight(window.innerHeight-b.getHeight()-a.getHeight())}},removeAllClasses:function(a){a.removeAttribute("class");Ext.iterate(a.querySelectorAll("*[class]"),function(b){b.removeAttribute("class")});return a},getFileUrl:function(b){var a={};if(!Ext.isEmpty(this.mail_data.token)){a.SynoToken=this.mail_data.token}a.api="SYNO.MailClient.Attachment";a.version=1;a.method="download";a.id=Ext.encode(b);if(this.mail_data.token){a.SynoToken=this.mail_data.token}return this.mail_data.baseUrl+"?"+Ext.urlEncode(a)},getThreadFiles:function(c){var a="",d='<div class="syno-nsc-mailplus-attachment-header" style="color: #505A64"><b>'+_NSC("mail","attachment")+"</b></div>";var b='<div class="syno-nsc-mailplus-attachment-item" style="color: #505A64;">{0}</div>';if(!c||Ext.isEmpty(c.attachment)){return a}Ext.iterate(c.attachment,function(e){a+=String.format(b,Ext.util.Format.htmlEncode(e.name));e.fetch_url=this.getFileUrl(e.id)},this);return d+a},calculateSelectAll:function(){var b,a=true;Ext.iterate(this.findByType("syno_checkbox"),function(c){if(c.itemId==="select_all"){b=c;return}if(false===c.getValue()){a=false;return false}});b.setValue(a)},createItems:function(){var d,c,b=this,a=[];d=Ext.util.Format.htmlEncode(this.mail_data.title);a.push({xtype:"syno_displayfield",itemId:"subject",cls:"syno-nsc-mailplus-title-area",html:'<div class="syno-nsc-mailplus-title-icon"></div><div class="syno-nsc-mailplus-title-text">'+d+"</div>"});a.push({xtype:"syno_checkbox",itemId:"select_all",wrapCls:"syno-ux-form-check-wrap syno-nsc-mailplus-title-select-all",checked:true,boxLabel:"Select All",onClick:function(f){var e=!this.checked;if(!this.disabled&&!this.readOnly){this.setValue(e);Ext.iterate(b.findByType("syno_checkbox"),function(h,g){if(h.itemId==="select_all"){return}h.setValue(e)})}}});c={xtype:"syno_panel",bodyCssClass:"syno-nsc-mailplus-content-panel-body",border:false,frame:false,autoScroll:true,itemId:"content_panel",items:[]};Ext.iterate(this.mail_data.messages,function(f,e){if(!Ext.isObject(f)){return}c.items.push([{xtype:"syno_checkbox",msg_id:f.id,msg_index:e,checked:true,wrapCls:"syno-ux-form-check-wrap syno-nsc-mailplus-sender",boxLabel:String.format('<span class="syno-nsc-mailplus-sender-name" style="color: #505A64">{0}</span> <span class="syno-nsc-mailplus-sender-mail"  style="color: #96A0AA;">{1}</span>',Ext.util.Format.htmlEncode(f.from),Ext.util.Format.htmlEncode(f.email)),handler:function(k,j){var i=this.getComponent("content_panel");var g=i.find("msg_content_id",k.msg_id),h;if(!Ext.isEmpty(g)){h=g[0];if(j&&h.collapsed){h.expand()}else{if(!j&&!h.collapsed){h.collapse()}}}this.calculateSelectAll()},scope:this},{xtype:"syno_displayfield",cls:"syno-nsc-mailplus-receive-time",name:"receive_time",style:{color:"#00B8E6"},value:new Date(f.arrival_time*1000).toLocaleString()},{xtype:"syno_panel",msg_content_id:f.id,itemId:f.id,items:[{xtype:"syno_displayfield",cls:"syno-nsc-mailplus-content",itemId:"content",html:f.body.html},{xtype:"syno_displayfield",itemId:"attachment",cls:"syno-nsc-mailplus-attachment-split",html:this.getThreadFiles(f)}]},{xtype:"syno_panel",html:"<hr>",border:false}])},this);a.push(c);return a},getData:function(){var c=document.createElement("div"),b={},a;a=this.find("checked",true);if(Ext.isEmpty(a)&&false===window.confirm(_NSC("capture","only_mail_title"))){chrome.runtime.sendMessage({action:"unmask_clipper"});return}Ext.iterate(a,function(d){var g,e,f;if(d.xtype!=="syno_checkbox"||"select_all"===d.itemId){return}if(!Ext.isFunction(d.nextSibling)){return}f=d.nextSibling();g=f.nextSibling();if(Ext.isEmpty(g)){return}e=g.getComponent("content");c.innerHTML+=String.format("<div>{0}</div>",d.boxLabel);c.innerHTML+=String.format('<div class="{0}" style="color: #00B8E6">{1}</div>',f.initialConfig.cls,f.getValue());c.innerHTML+=this.removeAllClasses(e.el.dom).innerHTML;if(!Ext.isEmpty(this.mail_data.messages[d.msg_index].attachment)){c.innerHTML+='<div style="color: #505A64"><b>'+_NSC("mail","attachment")+"</b></div>"}Ext.iterate(this.mail_data.messages[d.msg_index].attachment,function(j,h){var i=d.msg_id+"_mailplus_"+j.id;c.innerHTML+=String.format('<a style="color: #505A64" href="#" file_ref="{0}">{1}</a><br>',i,Ext.util.Format.htmlEncode(j.name));b[i]={action:"create",format:"raw",name:j.name,rotate:false,fetch_url:j.fetch_url,file_ref:i}});c.innerHTML+="<hr>"},this);Ext.apply(b,SYNO.SDS.NoteStationClipper.Utils.getImageFiles(c,undefined,{is_mailplus:true}));return{content:c.innerHTML,files:b,brief:c.textContent.substr(0,80)}}});(function(){var a=[];window.waitForMailPlusView=function(b){a.push(b);window.trigger_callback()};window.trigger_callback=function(){var b;if(!window.mailplus_view){return}for(b=0;b<a.length;b++){if(!Ext.isFunction(a[b])){continue}a[b]()}a=[]}})();window.addEventListener("message",function(b){var a=Ext.urlDecode(window.location.search.substr(1)).origin;if("get_content"===b.data.action){window.waitForMailPlusView(function(){var c=window.mailplus_view.getData();if(!c){return}window.top.postMessage(Ext.apply({action:"save_content",data:b.data.data},c),a)})}else{if("init_mailplus"===b.data.action){window.mailplus_view=new SYNO.SDS.NoteStationClipper.MailPlusView(b.data.data).show();Ext.getBody().unmask();window.trigger_callback()}}});Ext.onReady(function(){Ext.getBody().addClass("sds-window-v5").mask(_NSC("common","loading"),"x-mask-loading")});