/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,k){f=f.split(".");var e=a;f[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={i:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},h:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};
c={i:{1E3:{other:"0\u00a0\u0a39\u0a1c\u0a3c\u0a3e\u0a30"},1E4:{other:"00\u00a0\u0a39\u0a1c\u0a3c\u0a3e\u0a30"},1E5:{other:"0\u00a0\u0a32\u0a71\u0a16"},1E6:{other:"00\u00a0\u0a32\u0a71\u0a16"},1E7:{other:"0\u00a0\u0a15\u0a30\u0a4b\u0a5c"},1E8:{other:"00\u00a0\u0a15\u0a30\u0a4b\u0a5c"},1E9:{other:"0\u00a0\u0a05\u0a30\u0a2c"},1E10:{other:"00\u00a0\u0a05\u0a30\u0a2c"},1E11:{other:"0\u00a0\u0a16\u0a30\u0a2c"},1E12:{other:"00\u00a0\u0a16\u0a30\u0a2c"},1E13:{other:"0\u00a0\u0a28\u0a40\u0a32"},1E14:{other:"00\u00a0\u0a28\u0a40\u0a32"}},
h:{1E3:{other:"0 \u0a39\u0a1c\u0a3c\u0a3e\u0a30"},1E4:{other:"00 \u0a39\u0a1c\u0a3c\u0a3e\u0a30"},1E5:{other:"0 \u0a32\u0a71\u0a16"},1E6:{other:"00 \u0a32\u0a71\u0a16"},1E7:{other:"0 \u0a15\u0a30\u0a4b\u0a5c"},1E8:{other:"00 \u0a15\u0a30\u0a4b\u0a5c"},1E9:{other:"0 \u0a05\u0a30\u0a2c"},1E10:{other:"00 \u0a05\u0a30\u0a2c"},1E11:{other:"0 \u0a16\u0a30\u0a2c"},1E12:{other:"00 \u0a16\u0a30\u0a2c"},1E13:{other:"0 \u0a28\u0a40\u0a32"},1E14:{other:"00 \u0a28\u0a40\u0a32"}}};var d={la:"y",sa:"y G",ma:"MMM y",na:"MMMM y",ta:"MM/y",K:"MMM d",L:"MMMM dd",N:"M/d",M:"MMMM d",qa:"MMM d, y",ja:"EEE, MMM d",ra:"EEE, MMM d, y",o:"d",pa:"MMM d, h:mm a zzzz"};d={la:"y",sa:"G y",ma:"MMM y",na:"MMMM y",ta:"MM/y",K:"d MMM",L:"MMMM dd",N:"d/M",M:"MMMM d",qa:"d MMM y",ja:"EEE, d MMM",ra:"EEE, d MMM y",o:"d",pa:"d MMM, h:mm a zzzz"};var h={B:["BC","AD"],A:["Before Christ","Anno Domini"],P:"JFMAMJJASOND".split(""),ca:"JFMAMJJASOND".split(""),J:"January February March April May June July August September October November December".split(" "),ba:"January February March April May June July August September October November December".split(" "),Y:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ea:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ia:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ga:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),fa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),R:"SMTWTFS".split(""),da:"SMTWTFS".split(""),Z:["Q1","Q2","Q3","Q4"],W:["1st quarter","2nd quarter","3rd quarter","4th quarter"],g:["AM","PM"],l:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ha:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],m:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],D:6,ka:[5,6],F:5};
h={B:["\u0a08. \u0a2a\u0a42.","\u0a38\u0a70\u0a28"],A:["\u0a08\u0a38\u0a35\u0a40 \u0a2a\u0a42\u0a30\u0a35","\u0a08\u0a38\u0a35\u0a40 \u0a38\u0a70\u0a28"],P:"\u0a1c \u0a2b\u0a3c \u0a2e\u0a3e \u0a05 \u0a2e \u0a1c\u0a42 \u0a1c\u0a41 \u0a05 \u0a38 \u0a05 \u0a28 \u0a26".split(" "),ca:"\u0a1c \u0a2b\u0a3c \u0a2e\u0a3e \u0a05 \u0a2e \u0a1c\u0a42 \u0a1c\u0a41 \u0a05 \u0a38 \u0a05 \u0a28 \u0a26".split(" "),J:"\u0a1c\u0a28\u0a35\u0a30\u0a40 \u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e\u0a08 \u0a05\u0a17\u0a38\u0a24 \u0a38\u0a24\u0a70\u0a2c\u0a30 \u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30 \u0a28\u0a35\u0a70\u0a2c\u0a30 \u0a26\u0a38\u0a70\u0a2c\u0a30".split(" "),
ba:"\u0a1c\u0a28\u0a35\u0a30\u0a40 \u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e\u0a08 \u0a05\u0a17\u0a38\u0a24 \u0a38\u0a24\u0a70\u0a2c\u0a30 \u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30 \u0a28\u0a35\u0a70\u0a2c\u0a30 \u0a26\u0a38\u0a70\u0a2c\u0a30".split(" "),Y:"\u0a1c\u0a28 \u0a2b\u0a3c\u0a30 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e \u0a05\u0a17 \u0a38\u0a24\u0a70 \u0a05\u0a15\u0a24\u0a42 \u0a28\u0a35\u0a70 \u0a26\u0a38\u0a70".split(" "),
ea:"\u0a1c\u0a28 \u0a2b\u0a3c\u0a30 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e \u0a05\u0a17 \u0a38\u0a24\u0a70 \u0a05\u0a15\u0a24\u0a42 \u0a28\u0a35\u0a70 \u0a26\u0a38\u0a70".split(" "),ia:"\u0a10\u0a24\u0a35\u0a3e\u0a30 \u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30 \u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30 \u0a2c\u0a41\u0a71\u0a27\u0a35\u0a3e\u0a30 \u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a28\u0a3f\u0a71\u0a1a\u0a30\u0a35\u0a3e\u0a30".split(" "),
ga:"\u0a10\u0a24\u0a35\u0a3e\u0a30 \u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30 \u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30 \u0a2c\u0a41\u0a71\u0a27\u0a35\u0a3e\u0a30 \u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a28\u0a3f\u0a71\u0a1a\u0a30\u0a35\u0a3e\u0a30".split(" "),aa:"\u0a10\u0a24 \u0a38\u0a4b\u0a2e \u0a2e\u0a70\u0a17\u0a32 \u0a2c\u0a41\u0a71\u0a27 \u0a35\u0a40\u0a30 \u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30 \u0a38\u0a3c\u0a28\u0a3f\u0a71\u0a1a\u0a30".split(" "),
fa:"\u0a10\u0a24 \u0a38\u0a4b\u0a2e \u0a2e\u0a70\u0a17\u0a32 \u0a2c\u0a41\u0a71\u0a27 \u0a35\u0a40\u0a30 \u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30 \u0a38\u0a3c\u0a28\u0a3f\u0a71\u0a1a\u0a30".split(" "),R:"\u0a10 \u0a38\u0a4b \u0a2e\u0a70 \u0a2c\u0a41\u0a71 \u0a35\u0a40 \u0a38\u0a3c\u0a41\u0a71 \u0a38\u0a3c".split(" "),da:"\u0a10 \u0a38\u0a4b \u0a2e\u0a70 \u0a2c\u0a41\u0a71 \u0a35\u0a40 \u0a38\u0a3c\u0a41\u0a71 \u0a38\u0a3c".split(" "),Z:["\u0a24\u0a3f\u0a2e\u0a3e\u0a39\u0a401","\u0a24\u0a3f\u0a2e\u0a3e\u0a39\u0a402",
"\u0a24\u0a3f\u0a2e\u0a3e\u0a39\u0a403","\u0a24\u0a3f\u0a2e\u0a3e\u0a39\u0a404"],W:["\u0a2a\u0a39\u0a3f\u0a32\u0a40 \u0a24\u0a3f\u0a2e\u0a3e\u0a39\u0a40","\u0a26\u0a42\u0a1c\u0a40 \u0a24\u0a3f\u0a2e\u0a3e\u0a39\u0a40","\u0a24\u0a40\u0a1c\u0a40 \u0a24\u0a3f\u0a2e\u0a3e\u0a39\u0a40","\u0a1a\u0a4c\u0a25\u0a40 \u0a24\u0a3f\u0a2e\u0a3e\u0a39\u0a40"],g:["\u0a2a\u0a42.\u0a26\u0a41.","\u0a2c\u0a3e.\u0a26\u0a41."],l:["EEEE, d MMMM y","d MMMM y","d MMM y","d/M/yy"],ha:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a",
"h:mm a"],m:["{1} {0}","{1} {0}","{1}, {0}","{1}, {0}"],D:6,ka:[6,6],F:5};var l={u:".",G:",",S:"%",oa:"0",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"NaN",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"\u00a4#,##0.00",v:"USD"};l={u:".",G:",",S:"%",oa:"0",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"NaN",s:"#,##,##0.###",X:"[#E0]",T:"#,##,##0%",j:"\u00a4\u00a0#,##,##0.00",v:"INR"};b("I18N_DATETIMESYMBOLS_ERAS",h.B);b("I18N_DATETIMESYMBOLS_ERANAMES",h.A);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.P);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.ca);b("I18N_DATETIMESYMBOLS_MONTHS",h.J);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.ba);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Y);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.ea);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ia);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ga);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.fa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.R);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.da);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.Z);b("I18N_DATETIMESYMBOLS_QUARTERS",h.W);b("I18N_DATETIMESYMBOLS_AMPMS",h.g);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.l);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ha);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.m);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.D);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ka);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.F);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.la);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.ma);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.na);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.L);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.N);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.M);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.ja);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.o);
void 0!==h.ua&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ua);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.u);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.S);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.oa);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.V);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.I);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.C);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.U);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.H);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.O);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.s);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.X);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.T);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.v);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.i);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.h);
