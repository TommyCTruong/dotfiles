/* Copyright (c) 2022 Synology Inc. All rights reserved. */

Ext.define("SYNO.SDS.NoteStationClipper.TagSuperBox",{extend:"SYNO.ux.SuperBoxSelect",constructor:function(a){this.callParent([this.fillConfig(a)])},fillConfig:function(a){return Ext.apply({itemCls:"syno-nsc-tag-item",useARIA:false,width:210,allowAddNewData:true,addNewDataOnBlur:true,mode:"local",resizable:true,grow:true,supportNestedTag:false,hidden:false,store:this.getTagStore(),minChars:1,triggerAction:"all",displayField:"title",valueField:"tag_id",colspan:2,enableKeyEvents:true,emptyText:_NSC("message","hint_add_tag"),tpl:new Ext.XTemplate('<tpl for="."><div class="x-combo-list-item" ext:qtip="{[this.getTooltip(values)]}">{values.title:htmlEncode}</div></tpl>',{getTooltip:function(b){return Ext.util.Format.htmlEncode(Ext.util.Format.htmlEncode(b.title))}}),displayFieldTpl:new Ext.XTemplate("{[this.getDisplayName(values)]}",{getDisplayName:(function(b){var d=b.title;var c="";if(!this.supportNestedTag){return Ext.util.Format.htmlEncode(d)}Ext.iterate(this.getTagArr(),function(e,g){var f=g.title;if(f.length<=c.length||f.length>=d){return true}if(SYNO.SDS.NoteStation.Utils.checkTagIsParent(f,d)){c=f}},this);return Ext.util.Format.htmlEncode(SYNO.SDS.NoteStation.Utils.getTagChild(d,c))}).createDelegate(this)})},a)},getTagStore:function(){if(this.tagStore){return this.tagStore}this.tagStore=new Ext.data.SimpleStore({remoteSort:true,autoDestroy:true,fields:["tag_id","title"]});return this.tagStore},getTagArr:function(){var a={};this.store.clearFilter();this.store.data.each(function(b){a[b.get("tag_id")]={id:b.get("tag_id"),title:b.get("title")}});this.usedRecords.each(function(b){a[b.get("tag_id")]={id:b.get("tag_id"),title:b.get("title")}});return a}});