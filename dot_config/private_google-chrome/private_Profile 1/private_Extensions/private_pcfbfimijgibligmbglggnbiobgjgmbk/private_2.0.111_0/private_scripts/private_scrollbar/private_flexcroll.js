/*
This license text has to stay intact at all times:
Author: Emrah BASKAYA @ www.hesido.com

This script is registered for use by:
Synology Inc.
Under the following licence agreement:
http://www.hesido.com/licenses.php?page=flexcrollcommercialunlimited

Key for this license: 20111109013412901
MD5 hash for this license: abdb3120e42f86d3af038d81a2ef5d36
End of license text---
*/
//fleXcroll v2.0.0
/* Copyright (c) 2022 Synology Inc. All rights reserved. */

var fleXenv={fleXlist:[],fleXcrollInit:function(){if(document.getElementById){document.write('<style type="text/css">.flexcroll-hide-default { overflow: hidden !important; } </style>')}this.addTrggr(window,"load",this.globalInit)},fleXcrollMain:function(aB,E){var az=document,L=window,A=navigator,K=(A.msPointerEnabled&&A.msMaxTouchPoints>0),ak={};E=E||false;if(!az.getElementById||!az.createElement){return}if(typeof(aB)=="string"){aB=document.getElementById(aB)}if(aB==null||A.userAgent.indexOf("OmniWeb")!=-1||((A.userAgent.indexOf("AppleWebKit")!=-1||A.userAgent.indexOf("Safari")!=-1)&&!(typeof(HTMLElement)!="undefined"&&HTMLElement.prototype))||A.vendor=="KDE"||(A.platform.indexOf("Mac")!=-1&&A.userAgent.indexOf("MSIE")!=-1)){if(aB!=null){ao(aB,"flexcroll-failed","flexcroll-hide-default")}if(window.onfleXcrollFail){window.onfleXcrollFail(aB)}return}if(aB.fleXcroll){aB.fleXcroll.updateScrollBars();return}if(fleXenv.checkHidden(aB)){return}if(!aB.id||aB.id==""){var ay="flex__",aD=1;while(document.getElementById(ay+aD)!=null){aD++}aB.id=ay+aD}aB.fleXdata=new Object();aB.fleXcroll=new Object();var aw=aB.id,ai=aB.fleXdata,N=aB.fleXcroll;ai.keyAct={_37:["-1s",0],_38:[0,"-1s"],_39:["1s",0],_40:[0,"1s"],_33:[0,"-1p"],_34:[0,"1p"],_36:[0,"-100p"],_35:[0,"+100p"]};ai.wheelAct=["-2s","2s"];ai.baseAct=["-2s","2s"];ai.scrollPosition=[[false,false],[false,false]];var av=ae("contentwrapper",true),aC=ae("mcontentwrapper",true),r=ae("scrollwrapper",true),Q=ae("copyholder",true);var au=ae("domfixdiv",true),ag=ae("zoomdetectdiv",true),ax=false;Q.sY.border="1px solid blue";Q.fHide();aB.style.overflow="hidden";ag.sY.fontSize="12px";ag.sY.height="1em";ag.sY.width="1em";ag.sY.position="absolute";ag.sY.zIndex="-999";ag.fHide();var at=aB.offsetHeight,H=aB.offsetWidth;aE(aB,Q,"0px",["border-left-width","border-right-width","border-top-width","border-bottom-width"]);var ap=aB.offsetHeight,v=aB.offsetWidth,aA=H-v,am=at-ap;var an=(aB.scrollTop)?aB.scrollTop:0,W=(aB.scrollLeft)?aB.scrollLeft:0;var al=document.location.href,M=/#([^#.]*)$/;var aj=["textarea","input","select"];ai.scroller=[];ai.forcedBar=[];ai.containerSize=ai.cntRSize=[];ai.contentSize=ai.cntSize=[];ai.edge=[false,false];ai.touchPrevent=false;ai.touchFlick=false;ai.reqS=[];ai.barSpace=[0,0];ai.forcedHide=[];ai.forcedPos=[];ai.paddings=[];ai.externaL=[false,false];ai.touchPos=[0,0];while(aB.firstChild){av.appendChild(aB.firstChild)}av.appendChild(au);aB.appendChild(aC);aB.appendChild(Q);var ad=af(aB,"position");if(ad!="absolute"&&ad!="fixed"){aB.style.position=ad="relative"}if(ad=="fixed"){aB.style.position="absolute"}var ac=af(aB,"text-align");aB.style.textAlign="left";aC.sY.width="100px";aC.sY.height="100px";aC.sY.top="0px";aC.sY.left="0px";aE(aB,Q,"0px",["padding-left","padding-top","padding-right","padding-bottom"]);var aa=aB.offsetWidth,J=aB.offsetHeight,ar;ar=aC.offsetHeight;aC.sY.borderBottom="2px solid black";if(aC.offsetHeight>ar){ax=true}aC.sY.borderBottomWidth="0px";aE(Q,aB,false,["padding-left","padding-top","padding-right","padding-bottom"]);X(aC);X(aB);ai.paddings[0]=aC.yPos-aB.yPos;ai.paddings[2]=aC.xPos-aB.xPos;aB.style.paddingTop=af(aB,"padding-bottom");aB.style.paddingLeft=af(aB,"padding-right");X(aC);X(aB);ai.paddings[1]=aC.yPos-aB.yPos;ai.paddings[3]=aC.xPos-aB.xPos;aB.style.paddingTop=af(Q,"padding-top");aB.style.paddingLeft=af(Q,"padding-left");var Y=ai.paddings[2]+ai.paddings[3],Z=ai.paddings[0]+ai.paddings[1];aB.style.position=ad;aC.style.textAlign=ac;aE(aB,aC,false,["padding-left","padding-right","padding-top","padding-bottom"]);r.sY.width=aB.offsetWidth+"px";r.sY.height=aB.offsetHeight+"px";aC.sY.width=aa+"px";aC.sY.height=J+"px";r.sY.position="absolute";r.sY.top="0px";r.sY.left="0px";ai.tDivZ=r.sY.zIndex;aC.appendChild(av);aB.appendChild(r);r.appendChild(ag);av.sY.position="relative";aC.sY.position="relative";av.sY.top="0";av.sY.width="100%";aC.sY.overflow="hidden";aC.sY.left=""+(0-ai.paddings[2])+"px";aC.sY.top=""+(0-ai.paddings[0])+"px";ai.zTHeight=ag.offsetHeight;ai.getContentWidth=function(){var c=av.childNodes,h=compPad=0;for(var g=0;g<c.length;g++){if(c[g].offsetWidth){h=Math.max(c[g].offsetWidth,h)}}ai.cntRSize[0]=((ai.reqS[1]&&!ai.forcedHide[1])||ai.forcedBar[1])?aB.offsetWidth-ai.barSpace[0]:aB.offsetWidth;ai.cntSize[0]=h+Y;return ai.cntSize[0]};ai.getContentHeight=function(){ai.cntRSize[1]=((ai.reqS[0]&&!ai.forcedHide[0])||ai.forcedBar[0])?aB.offsetHeight-ai.barSpace[1]:aB.offsetHeight;ai.cntSize[1]=av.offsetHeight+Z-2;return ai.cntSize[1]};ai.fixIEDispBug=function(){av.sY.display="none";av.sY.display="block"};ai.setWidth=function(){aC.sY.width=(ax)?(ai.cntRSize[0]-Y-aA)+"px":ai.cntRSize[0]+"px"};ai.setHeight=function(){aC.sY.height=(ax)?(ai.cntRSize[1]-Z-am)+"px":ai.cntRSize[1]+"px"};ai.createScrollBars=function(){ai.getContentWidth();ai.getContentHeight();r.vrt=new Array();var g=r.vrt;I(g,"vscroller",1);g.barPadding=[parseInt(af(g.sBr,"padding-top")),parseInt(af(g.sBr,"padding-bottom"))];g.sBr.sY.padding="0px";g.sBr.curPos=0;g.sBr.vertical=true;g.sBr.indx=1;av.vBar=g.sBr;f(g,0);ai.barSpace[0]=(ai.externaL[1])?0:g.sDv.offsetWidth;ai.setWidth();r.hrz=new Array();var c=r.hrz;I(c,"hscroller",0);c.barPadding=[parseInt(af(c.sBr,"padding-left")),parseInt(af(c.sBr,"padding-right"))];c.sBr.sY.padding="0px";c.sBr.curPos=0;c.sBr.vertical=false;c.sBr.indx=0;av.hBar=c.sBr;if(L.opera){c.sBr.sY.position="relative"}f(c,0);ai.barSpace[1]=(ai.externaL[0])?0:c.sDv.offsetHeight;ai.setHeight();r.sY.height=aB.offsetHeight+"px";c.jBox=ae("scrollerjogbox");r.appendChild(c.jBox);c.jBox.onmousedown=function(){c.sBr.scrollBoth=true;ai.goScroll=c.sBr;c.sBr.clicked=true;c.sBr.moved=false;r.vrt.sBr.moved=false;fleXenv.addTrggr(az,"selectstart",P);fleXenv.addTrggr(az,"mousemove",U);fleXenv.addTrggr(az,"mouseup",O);return false}};ai.goScroll=null;ai.createScrollBars();this.putAway(au,r);if(!this.addChckTrggr(aB,"mousewheel",b)||!this.addChckTrggr(aB,"DOMMouseScroll",b)){aB.onmousewheel=b}this.addChckTrggr(aB,"mousewheel",b);this.addChckTrggr(aB,"DOMMouseScroll",b);if(K){this.addChckTrggr(av,"MSPointerCancel",ab);this.addChckTrggr(r,"MSPointerCancel",ab)}this.addChckTrggr(av,K?"MSPointerDown":"touchstart",D);this.addChckTrggr(r,K?"MSPointerDown":"touchstart",D);if(typeof aB.getAttribute("tabindex")!=="string"){aB.setAttribute("tabIndex","-1")}this.addTrggr(aB,"keydown",function(g){if(aB.focusProtect){return}if(!g){var g=L.event}var c=g.keyCode;ai.pkeY=c;N.mDPosFix();if(ai.keyAct["_"+c]&&!window.opera){N.setScrollPos(ai.keyAct["_"+c][0],ai.keyAct["_"+c][1],true);if(g.preventDefault){g.preventDefault()}return false}});this.addTrggr(aB,"keyup",function(){ai.pkeY=false});this.addTrggr(az,"mouseup",aq);if(!E){this.addTrggr(aB,"mousedown",G)}function G(g){if(!g){g=L.event}var c=(g.target)?g.target:(g.srcElement)?g.srcElement:false;if(!c||(c.className&&c.className.match&&c.className.match(RegExp("\\bscrollgeneric\\b")))){return}ai.inMposX=g.clientX;ai.inMposY=g.clientY;n();X(aB);aq();fleXenv.addTrggr(az,"mousemove",i);ai.mTBox=[aB.xPos+10,aB.xPos+ai.cntRSize[0]-10,aB.yPos+10,aB.yPos+ai.cntRSize[1]-10]}function i(l){if(!l){l=L.event}var c=l.clientX,k=l.clientY,h=c+ai.xScrld,g=k+ai.yScrld;ai.mOnXEdge=(h<ai.mTBox[0]||h>ai.mTBox[1])?1:0;ai.mOnYEdge=(g<ai.mTBox[2]||g>ai.mTBox[3])?1:0;ai.xAw=c-ai.inMposX;ai.yAw=k-ai.inMposY;ai.sXdir=(ai.xAw>40)?1:(ai.xAw<-40)?-1:0;ai.sYdir=(ai.yAw>40)?1:(ai.yAw<-40)?-1:0;if((ai.sXdir!=0||ai.sYdir!=0)&&!ai.tSelectFunc){ai.tSelectFunc=L.setInterval(function(){if(ai.sXdir==0&&ai.sYdir==0){L.clearInterval(ai.tSelectFunc);ai.tSelectFunc=false;return}n();if(ai.mOnXEdge==1||ai.mOnYEdge==1){N.setScrollPos((ai.sXdir*ai.mOnXEdge)+"s",(ai.sYdir*ai.mOnYEdge)+"s",true)}},45)}}function aq(){fleXenv.remTrggr(az,"mousemove",i);if(ai.tSelectFunc){L.clearInterval(ai.tSelectFunc)}ai.tSelectFunc=false;if(ai.barClickRetard){L.clearTimeout(ai.barClickRetard)}if(ai.barClickScroll){L.clearInterval(ai.barClickScroll)}}function F(c){if(ai.touchFlick){window.clearInterval(ai.touchFlick);ai.touchFlick=false}if(!c){r.sY.zIndex=ai.tDivZ}}function n(){ai.xScrld=(L.pageXOffset)?L.pageXOffset:(az.documentElement&&az.documentElement.scrollLeft)?az.documentElement.scrollLeft:0;ai.yScrld=(L.pageYOffset)?L.pageYOffset:(az.documentElement&&az.documentElement.scrollTop)?az.documentElement.scrollTop:0}N.formUpdate=function(){for(var h=0,g;g=aj[h];h++){var c=aB.getElementsByTagName(g);for(var k=0,l;l=c[k];k++){if(!l.fleXprocess){fleXenv.addTrggr(l,"focus",function(){aB.focusProtect=true});fleXenv.addTrggr(l,"blur",onblur=function(){aB.focusProtect=false});l.fleXprocess=true}}}};aB.scrollUpdate=N.updateScrollBars=function(s){if(r.getSize[1]()===0||r.getSize[0]()===0){return}av.sY.padding="1px";var p=ai.reqS[0],h=ai.reqS[1],o=r.vrt,m=r.hrz,k,g,q=[];r.sY.width=aB.offsetWidth-aA+"px";r.sY.height=aB.offsetHeight-am+"px";q[0]=ai.cntRSize[0];q[1]=ai.cntRSize[1];ai.reqS[0]=ai.getContentWidth()>ai.cntRSize[0];ai.reqS[1]=ai.getContentHeight()>ai.cntRSize[1];var l=(p!=ai.reqS[0]||h!=ai.reqS[1]||q[0]!=ai.cntRSize[0]||q[1]!=ai.cntRSize[1])?true:false;o.sDv.setVisibility(ai.reqS[1]);m.sDv.setVisibility(ai.reqS[0]);k=(ai.reqS[1]||ai.forcedBar[1]);g=(ai.reqS[0]||ai.forcedBar[0]);ai.getContentWidth();ai.getContentHeight();ai.setHeight();ai.setWidth();if(!ai.reqS[0]||!ai.reqS[1]||ai.forcedHide[0]||ai.forcedHide[1]){m.jBox.fHide()}else{m.jBox.fShow()}if(k){V(o,(g&&!ai.forcedHide[0])?ai.barSpace[1]:0)}else{av.sY.top="0"}if(g){V(m,(k&&!ai.forcedHide[1])?ai.barSpace[0]:0)}else{av.sY.left="0"}if(l&&!s){N.updateScrollBars(true)}av.sY.padding="0px";ai.edge[0]=ai.edge[1]=false};aB.contentScroll=N.setScrollPos=function(h,g,p,o,m){var l,k=1;if((h||h===0)&&ai.scroller[0]){h=C(h,0);h*=(m||k);l=r.hrz.sBr;l.trgtScrll=(p)?Math.min(Math.max(l.mxScroll,l.trgtScrll-h),0):-h;l.realScrollPos()}if((g||g===0)&&ai.scroller[1]){g=C(g,1);g*=(m||k);l=r.vrt.sBr;l.trgtScrll=((p)?Math.min(Math.max(l.mxScroll,l.trgtScrll-g),0):-g);l.realScrollPos()}if(!p){ai.edge[0]=ai.edge[1]=false}if(aB.onfleXcroll&&!o){aB.onfleXcroll()}return ai.scrollPosition};N.scrollContent=function(g,c){g=Math.abs(g)<0.001?0:g;c=Math.abs(c)<0.001?0:c;return N.setScrollPos(g,c,true)};N.scrollToElement=function(g){if(g==null||!T(g)){return}var c=B(g);N.setScrollPos(c[0]+ai.paddings[2],c[1]+ai.paddings[0],false);N.setScrollPos(0,0,true)};aE(Q,aB,"0px",["border-left-width","border-right-width","border-top-width","border-bottom-width"]);this.putAway(Q,r);aB.scrollTop=0;aB.scrollLeft=0;N.formUpdate();this.fleXlist[this.fleXlist.length]=aB;ao(aB,"flexcrollactive",false);N.updateScrollBars();N.setScrollPos(W,an,true);if(al.match(M)){N.scrollToElement(az.getElementById(al.match(M)[1]))}ai.sizeChangeDetect=L.setInterval(function(){var c=ag.offsetHeight;if(c!=ai.zTHeight){N.updateScrollBars();ai.zTHeight=c}},2500);function C(g,h){var c=g.toString();g=parseFloat(c);return parseInt((c.match(/p$/))?g*ai.cntRSize[h]*0.9:(c.match(/s$/))?g*ai.cntRSize[h]*0.1:g)}function af(g,c){return fleXenv.getStyle(g,c)}function aE(h,g,o,m){var l=new Array();for(var k=0;k<m.length;k++){l[k]=fleXenv.camelConv(m[k]);g.style[l[k]]=af(h,m[k],l[k]);if(o){h.style[l[k]]=o}}}function ae(g,m,l,k){var h=(l)?l:az.createElement("div");if(!l){h.id=aw+"_"+g;h.className=(m)?g:g+" scrollgeneric"}h.getSize=[function(){return h.offsetWidth},function(){return h.offsetHeight}];h.setSize=(k)?[P,P]:[function(c){h.sY.width=c},function(c){h.sY.height=c}];h.getPos=[function(){return af(h,"left")},function(){return af(h,"top")}];h.setPos=(k)?[P,P]:[function(c){h.sY.left=c},function(c){h.sY.top=c}];h.fHide=function(){h.sY.visibility="hidden"};h.fShow=function(c){h.sY.visibility=(c)?af(c,"visibility"):"visible"};h.sY=h.style;return h}function I(h,g,m){var l=document.getElementById(aw+"-flexcroll-"+g);var k=(l!=null)?true:false;if(k){h.sDv=ae(false,false,l,true);ai.externaL[m]=true;h.sFDv=ae(g+"basebeg");h.sSDv=ae(g+"baseend");h.sBr=ae(false,false,fleXenv.getByClassName(l,"div","flexcroll-scrollbar")[0]);h.sFBr=ae(g+"barbeg");h.sSBr=ae(g+"barend")}else{h.sDv=ae(g+"base");h.sFDv=ae(g+"basebeg");h.sSDv=ae(g+"baseend");h.sBr=ae(g+"bar");h.sFBr=ae(g+"barbeg");h.sSBr=ae(g+"barend");r.appendChild(h.sDv);h.sDv.appendChild(h.sBr);h.sDv.appendChild(h.sFDv);h.sDv.appendChild(h.sSDv);h.sBr.appendChild(h.sFBr);h.sBr.appendChild(h.sSBr)}}function f(g,m){var l=g.sDv,k=g.sBr,h=k.indx;k.trgtScrll=0;k.minPos=g.barPadding[0];k.ofstParent=l;k.mDv=aC;k.scrlTrgt=av;k.targetSkew=0;V(g,m,true);k.doBarPos=function(c){if(!c){k.curPos=parseInt((k.trgtScrll*k.maxPos)/k.mxScroll)}k.curPos=(Math.min(Math.max(k.curPos,0),k.maxPos));k.setPos[h](k.curPos+k.minPos+"px");if(!k.targetSkew){k.targetSkew=k.trgtScrll-parseInt((k.curPos/k.sRange)*k.mxScroll)}k.targetSkew=(k.curPos==0)?0:(k.curPos==k.maxPos)?0:(!k.targetSkew)?0:k.targetSkew;if(c){k.trgtScrll=parseInt((k.curPos/k.sRange)*k.mxScroll);av.setPos[h](k.trgtScrll+k.targetSkew+"px");ai.scrollPosition[h]=[-k.trgtScrll-k.targetSkew,-k.mxScroll]}};k.realScrollPos=function(){k.curPos=parseInt((k.trgtScrll*k.sRange)/k.mxScroll);k.curPos=(Math.min(Math.max(k.curPos,0),k.maxPos));av.setPos[h](k.trgtScrll+"px");ai.scrollPosition[h]=[-k.trgtScrll,-k.mxScroll];k.targetSkew=false;k.doBarPos(false)};ai.barZ=af(k,"z-index");k.sY.zIndex=(ai.barZ=="auto"||ai.barZ=="0"||ai.barZ=="normal")?2:ai.barZ;aC.sY.zIndex=af(k,"z-index");k.onmousedown=function(){k.clicked=true;ai.goScroll=k;k.scrollBoth=false;k.moved=false;fleXenv.addTrggr(az,"selectstart",P);fleXenv.addTrggr(az,"mousemove",U);fleXenv.addTrggr(az,"mouseup",O);return false};k.onmouseover=aq;l.onmousedown=l.ondblclick=function(o){if(!o){var o=L.event}if(o.target&&(o.target==g.sFBr||o.target==g.sSBr||o.target==g.sBr)){return}if(o.srcElement&&(o.srcElement==g.sFBr||o.srcElement==g.sSBr||o.srcElement==g.sBr)){return}var c,p=[];n();N.mDPosFix();X(k);c=(k.vertical)?o.clientY+ai.yScrld-k.yPos:o.clientX+ai.xScrld-k.xPos;p[k.indx]=(c<0)?ai.baseAct[0]:ai.baseAct[1];p[1-k.indx]=0;N.setScrollPos(p[0],p[1],true);if(o.type!="dblclick"){aq();ai.barClickRetard=L.setTimeout(function(){ai.barClickScroll=L.setInterval(function(){N.setScrollPos(p[0],p[1],true)},80)},425)}return false};l.setVisibility=function(c){if(c){l.fShow(aB);ai.forcedHide[h]=(af(l,"visibility")=="hidden"||ai.externaL[h])?true:false;if(!ai.forcedHide[h]){k.fShow(aB)}else{if(!ai.externaL[h]){k.fHide()}}ai.scroller[h]=true;ao(l,"","flexinactive")}else{l.fHide();k.fHide();ai.forcedBar[h]=(af(l,"visibility")!="hidden")?true:false;ai.scroller[h]=false;k.curPos=0;av.setPos[h]("0px");ai.scrollPosition[h]=[false,false];ao(l,"flexinactive","")}aC.setPos[1-h]((ai.forcedPos[h]&&(c||ai.forcedBar[h])&&!ai.forcedHide[h])?ai.barSpace[1-h]-ai.paddings[h*2]+"px":(""+(0-ai.paddings[h*2])+"px"))};l.onmouseclick=P}function V(t,s,q){var p=t.sDv,g=t.sBr,o=t.sFDv,l=t.sFBr,k=t.sSDv,h=t.sSBr,m=g.indx;p.setSize[m](r.getSize[m]()-s+"px");p.setPos[1-m](r.getSize[1-m]()-p.getSize[1-m]()+"px");ai.forcedPos[m]=(parseInt(p.getPos[1-m]())===0)?true:false;t.padLoss=t.barPadding[0]+t.barPadding[1];t.baseProp=parseInt((p.getSize[m]()-t.padLoss)*0.75);g.aSize=Math.min(Math.max(Math.min(parseInt(ai.cntRSize[m]/ai.cntSize[m]*p.getSize[m]()),t.baseProp),45),t.baseProp);g.setSize[m](g.aSize+"px");g.maxPos=p.getSize[m]()-g.getSize[m]()-t.padLoss;g.curPos=Math.min(Math.max(0,g.curPos),g.maxPos);g.setPos[m](g.curPos+g.minPos+"px");g.mxScroll=aC.getSize[m]()-ai.cntSize[m];g.sRange=g.maxPos;o.setSize[m](p.getSize[m]()-k.getSize[m]()+"px");l.setSize[m](g.getSize[m]()-h.getSize[m]()+"px");h.setPos[m](g.getSize[m]()-h.getSize[m]()+"px");k.setPos[m](p.getSize[m]()-k.getSize[m]()+"px");if(!q){g.realScrollPos()}ai.fixIEDispBug()}N.mDPosFix=function(){aC.scrollTop=0;aC.scrollLeft=0;aB.scrollTop=0;aB.scrollLeft=0};this.addTrggr(L,"load",function(){if(aB.fleXcroll){N.updateScrollBars()}});function P(){return false}function U(l){if(!l){var l=L.event}var g=ai.goScroll,o,m,k,c;if(g==null){return}if(!fleXenv.w3events&&!l.button){O()}m=(g.scrollBoth)?2:1;for(var h=0;h<m;h++){o=(h==1)?g.scrlTrgt.vBar:g;if(g.clicked){if(!o.moved){N.mDPosFix();X(o);X(o.ofstParent);o.pointerOffsetY=l.clientY-o.yPos;o.pointerOffsetX=l.clientX-o.xPos;o.inCurPos=o.curPos;o.moved=true}o.curPos=(o.vertical)?l.clientY-o.pointerOffsetY-o.ofstParent.yPos-o.minPos:l.clientX-o.pointerOffsetX-o.ofstParent.xPos-o.minPos;if(g.scrollBoth){o.curPos=o.curPos+(o.curPos-o.inCurPos)}o.doBarPos(true);if(aB.onfleXcroll){aB.onfleXcroll()}}else{o.moved=false}}}function O(){if(ai.goScroll!=null){ai.goScroll.clicked=false;ai.goScroll.trgtScrll+=ai.goScroll.targetSkew}ai.goScroll=null;fleXenv.remTrggr(az,"selectstart",P);fleXenv.remTrggr(az,"mousemove",U);fleXenv.remTrggr(az,"mouseup",O);if(window.scrollState){var g=!ai.scroller[1]||(ai.scroller[1]&&((scrollState[1][0]==scrollState[1][1])||(scrollState[1][0]==0))),c=!ai.scroller[0]||(ai.scroller[0]&&ai.scroller[1]&&g)||(ai.scroller[0]&&((scrollState[0][0]==scrollState[0][1])||(scrollState[0][0]==0)));if(!(g&&c)){ai.edge[0]=false;ai.edge[1]=false}}}function S(g){var h,c=0;if(g){for(h in g){c++}}return c}function D(h){if(!h){h=L.event}if(this==r){r.sY.zIndex=ai.tDivZ}if(K&&h.pointerId){ak[h.pointerId]=[h.clientX,h.clientY]}aB.touchCount=S(ak);if(((K&&aB.touchCount!==1)||(!K&&h.targetTouches.length!=1))||(!ai.scroller[0]&&!ai.scroller[1])){ak={};return false}var c="",g=(h.target&&(h.target.href||(h.target.nodeType==3&&h.target.parentNode.href)))?true:false;ai.touchPos=K?[h.clientX,h.clientY]:[h.targetTouches[0].clientX,h.targetTouches[0].clientY];F();fleXenv.addChckTrggr(aB,K?"MSPointerMove":"touchmove",d);fleXenv.addChckTrggr(aB,K?"MSPointerUp":"touchend",j);ai.touchBar=(h.target&&h.target.id&&h.target.id.match(/_[vh]scrollerba[rs]e?/))?true:false;return false}function ab(c){ak={}}function d(h){if(!h){h=L.event}if((K&&aB.touchCount!==1)||(!K&&h.targetTouches.length!=1)){return false}fleXenv.remTrggr(aB,"mousedown",G);var c=K?[h.clientX,h.clientY]:[h.targetTouches[0].clientX,h.targetTouches[0].clientY];ai.touchPrevent=true;ai.moveDelta=[ai.touchPos[0]-c[0],ai.touchPos[1]-c[1]];if(ai.touchBar){ai.moveDelta[0]*=-(ai.cntSize[0]/ai.cntRSize[0]);ai.moveDelta[1]*=-(ai.cntSize[1]/ai.cntRSize[1])}N.scrollContent(ai.moveDelta[0],ai.moveDelta[1]);ai.touchPos[0]=c[0];ai.touchPos[1]=c[1];for(var g=0;g<2;g++){if(ai.moveDelta[g]!==0&&ai.scroller[g]&&(ai.moveDelta[1-g]==0||!ai.scroller[1-g])){if((ai.moveDelta[g]>0&&ai.scrollPosition[g][1]==ai.scrollPosition[g][0])||(ai.moveDelta[g]<0&&ai.scrollPosition[g][0]==0)){ai.touchPrevent=false}}if(!ai.scroller[g]&&ai.moveDelta[1-g]!==0&&Math.abs(ai.moveDelta[g]/ai.moveDelta[1-g])>1.1){ai.touchPrevent=false}}if(ai.touchPrevent){h.preventDefault();if(!K){r.sY.zIndex="9999"}}else{r.sY.zIndex=ai.tDivZ}}function e(h,g){var c=h<0?-1:1,k=h*g.velocityRate,k=Math.abs(k)<1?c*1:k;tickCount=Math.abs(k*g.velocityRate)/0.8;tickCount=tickCount<g.minTickCount?g.minTickCount:tickCount;tickCount*=g.tickRate;return{distance:k,tickCount:tickCount}}function j(l){if(!l){l=L.event}if(ak&&ak[l.pointerId]){delete ak[l.pointerId]}if((K&&S(ak)>0)||(!K&&l.targetTouches&&l.targetTouches.length>0)){return false}fleXenv.remTrggr(aB,K?"MSPointerMove":"touchmove",d);fleXenv.remTrggr(aB,K?"MSPointerUp":"touchend",j);if((ai.scroller[0]&&(ai.moveDelta)&&Math.abs(ai.moveDelta[0])>6)||(ai.scroller[1]&&(ai.moveDelta)&&Math.abs(ai.moveDelta[1])>6)){var k=0,g={tickRate:1.5,minTickCount:65,velocityRate:4/5},m=e(ai.moveDelta[0],g),h=e(ai.moveDelta[1],g),c=parseInt(Math.max(m.tickCount,h.tickCount),10);F(true);ai.touchFlick=window.setInterval(function(){if(k==c){F();return}var o=ah(m.distance,0,c,k),p=ah(h.distance,0,c,k);N.scrollContent(o,p);k++},parseInt(25/g.tickRate,10))}}function a(c){var g=0;if(c.wheelDeltaX){g=(Math.abs(c.wheelDeltaX)>Math.abs(c.wheelDeltaY))?c.wheelDeltaX:c.wheelDeltaY;g=g/120}else{if(c.wheelDelta){g=c.wheelDelta/120}else{if(c.detail){g=-c.detail/3}}}return -g}function b(o){if(!o){o=L.event}if(!this.fleXcroll){return}var h=this,m,g,l=false,p=0,k,c;N.mDPosFix();c=(o.target)?o.target:(o.srcElement)?o.srcElement:this;if((c.id&&c.id.match(/_hscroller/))||(o.wheelDeltaX&&Math.abs(o.wheelDeltaX)>Math.abs(o.wheelDeltaY))){l=true}p=a(o);k=(p<0)?0:1;ai.edge[1-k]=false;if((ai.edge[k]&&!l)||(!ai.scroller[0]&&!ai.scroller[1])){return}if(ai.scroller[1]&&!l){scrollState=N.setScrollPos(false,ai.wheelAct[k],true,null,Math.abs(p))}m=!ai.scroller[1]||l||(ai.scroller[1]&&((scrollState[1][0]==scrollState[1][1]&&p>0)||(scrollState[1][0]==0&&p<0)));if(ai.scroller[0]&&(!ai.scroller[1]||l)){scrollState=N.setScrollPos(ai.wheelAct[k],false,true,null,Math.abs(p))}g=!ai.scroller[0]||(ai.scroller[0]&&ai.scroller[1]&&m&&!l)||(ai.scroller[0]&&((scrollState[0][0]==scrollState[0][1]&&p>0)||(scrollState[0][0]==0&&p<0)));if(m&&g&&!l){ai.edge[k]=true}else{ai.edge[k]=false}if(o.preventDefault){o.preventDefault()}return false}function T(c){while(c.parentNode){c=c.parentNode;if(c==aB){return true}}return false}function X(g){var c=g,h=curtop=0;if(c.offsetParent){while(c){h+=c.offsetLeft;curtop+=c.offsetTop;c=c.offsetParent}}else{if(c.x){h+=c.x;curtop+=c.y}}g.xPos=h;g.yPos=curtop}function B(g){var c=g;curleft=curtop=0;while(!c.offsetHeight&&c.parentNode&&c!=av&&af(c,"display")=="inline"){c=c.parentNode}if(c.offsetParent){while(c!=av){curleft+=c.offsetLeft;curtop+=c.offsetTop;c=c.offsetParent}}return[curleft,curtop]}function ao(h,g,k){fleXenv.classChange(h,g,k)}function R(o,c,k,g,m){k=Math.max(k,1);var l=c-o,h=o+(Math.pow(((1/k)*g),m)*l);return(h>0)?Math.floor(h):Math.ceil(h)}function ah(k,c,h,g){return Math.easeOutQuint(g,k,(-1)*k,h-c)}Math.easeOutExpo=function(h,g,l,k){return l*(-Math.pow(2,-10*h/k)+1)+g};Math.easeOutQuint=function(h,g,l,k){h/=k;h--;return l*(h*h*h*h*h+1)+g};Math.easeOutQuad=function(h,g,l,k){h/=k;return -l*h*(h-2)+g}},globalInit:function(){if(fleXenv.catchFastInit){window.clearInterval(fleXenv.catchFastInit)}fleXenv.prepAnchors();fleXenv.initByClass();if(window.onfleXcrollRun){window.onfleXcrollRun()}},classChange:function(f,e,h){if(!f.className){f.className=""}var g=f.className;if(e&&!g.match(RegExp("(^|\\s)"+e+"($|\\s)"))){g=g.replace(/(\S$)/,"$1 ")+e}if(h){g=g.replace(RegExp("((^|\\s)+"+h+")+($|\\s)","g"),"$2").replace(/\s$/,"")}f.className=g},prepAnchors:function(){var e=/#([^#.]*)$/,k=/(.*)#.*$/,h=/(^|\s)flexcroll-in-page-link($|\s)/,j,f,c,g,a=document.getElementsByTagName("a"),b=document.location.href;if(b.match(k)){b=b.match(k)[1]}for(c=0;g=a[c];c++){f=(g.className)?g.className:"";if(g.href&&!g.fleXanchor&&g.href.match(e)&&((g.href.match(k)&&b===g.href.match(k)[1])||f.match(h))){g.fleXanchor=true;fleXenv.addTrggr(g,"click",function(m){if(!m){m=window.event}var i=(m.srcElement)?m.srcElement:this;while(!i.fleXanchor&&i.parentNode){i=i.parentNode}if(!i.fleXanchor){return}var d=document.getElementById(i.href.match(e)[1]),l=false;if(d==null){d=(d=document.getElementsByName(i.href.match(e)[1])[0])?d:null}if(d!=null){var n=d;while(n.parentNode){n=n.parentNode;if(n.fleXcroll){n.fleXcroll.scrollToElement(d);l=n}}if(l){if(m.preventDefault){m.preventDefault()}document.location.href=b+"#"+i.href.match(e)[1];l.fleXcroll.mDPosFix();return false}}})}}},initByClass:function(d){fleXenv.initialized=true;var c=fleXenv.getByClassName(document.getElementsByTagName("body")[0],"div",(d)?d:"flexcroll");for(var e=0,f;f=c[e];e++){if(!f.fleXcroll){fleXenv.fleXcrollMain(f)}}},scrollTo:function(e,d){if(typeof(e)=="string"){e=document.getElementById(e)}if(e==null){return false}var f=e;while(f.parentNode){f=f.parentNode;if(f.fleXcroll){if(d){document.location.href="#"+d}f.fleXcroll.scrollToElement(e);f.fleXcroll.mDPosFix();return true}}return false},updateScrollBars:function(d,c){for(var e=0,f;f=fleXenv.fleXlist[e];e++){f.fleXcroll.updateScrollBars();if(c){f.fleXcroll.formUpdate()}}if(d){fleXenv.prepAnchors()}},camelConv:function(b){var b=b.split("-"),c=b[0],d;for(d=1;parT=b[d];d++){c+=parT.charAt(0).toUpperCase()+parT.substr(1)}return c},getByClassName:function(o,n,m){if(typeof(o)=="string"){o=document.getElementById(o)}if(o==null){return false}var k=new RegExp("(^|\\s)"+m+"($|\\s)"),f,g=[],p=0;var j=o.getElementsByTagName(n);for(var h=0,l;l=j[h];h++){if(l.className&&l.className.match(k)){g[p]=l;p++}}return g},checkHidden:function(d){if(d==null){return true}var c;while(d.parentNode){c=fleXenv.getStyle(d,"display");if(c=="none"){return true}d=d.parentNode}return false},getStyle:function(d,c){if(window.getComputedStyle){return window.getComputedStyle(d,null).getPropertyValue(c)}if(d.currentStyle){return d.currentStyle[fleXenv.camelConv(c)]}return false},catchFastInit:window.setInterval(function(){var b=document.getElementById("flexcroll-init");if(b!=null){fleXenv.initByClass();window.clearInterval(fleXenv.catchFastInit)}},100),putAway:function(d,c){d.parentNode.removeChild(d);d.style.display="none";c.appendChild(d)},addTrggr:function(e,d,f){if(!fleXenv.addChckTrggr(e,d,f)&&e.attachEvent){e.attachEvent("on"+d,f)}},addChckTrggr:function(e,d,f){if(e.addEventListener){e.addEventListener(d,f,false);fleXenv.w3events=true;window.addEventListener("unload",function(){fleXenv.remTrggr(e,d,f)},false);return true}else{return false}},remTrggr:function(e,d,f){if(!fleXenv.remChckTrggr(e,d,f)&&e.detachEvent){e.detachEvent("on"+d,f)}},remChckTrggr:function(e,d,f){if(e.removeEventListener){e.removeEventListener(d,f,false);return true}else{return false}}};function CSBfleXcroll(b){fleXenv.fleXcrollMain(b)}fleXenv.fleXcrollInit();