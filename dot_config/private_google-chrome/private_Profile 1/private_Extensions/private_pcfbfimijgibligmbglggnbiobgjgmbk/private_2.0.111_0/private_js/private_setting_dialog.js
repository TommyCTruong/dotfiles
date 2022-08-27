/* Copyright (c) 2022 Synology Inc. All rights reserved. */

Ext.ns("SYNO.SDS.NoteStationClipper");Ext.onReady(function(){chrome.storage.sync.get("SYNO_NoteStationClipper",function(a){if(a.SYNO_NoteStationClipper&&a.SYNO_NoteStationClipper.HOST!==""){MainDialog=new SYNO.SDS.NoteStationClipper.ClipperDialog({serverInfo:a.SYNO_NoteStationClipper,settingMode:true}).show()}})});