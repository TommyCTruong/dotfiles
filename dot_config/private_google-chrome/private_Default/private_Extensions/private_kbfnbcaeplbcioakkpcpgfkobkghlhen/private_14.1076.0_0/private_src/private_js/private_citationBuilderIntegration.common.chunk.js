(self.webpackChunk=self.webpackChunk||[]).push([[3896],{3280:(e,t,n)=>{n.r(t),n.d(t,{createCitationBuilderViewModel:()=>p});var i=n(56409);function r(e){var t,n;if(self.navigator&&self.navigator.clipboard&&self.navigator.clipboard.write){const t=new Blob([e],{type:"text/html"}),n=new Blob([e.replace(/<\/?\w+>/gm,"")],{type:"text/plain"}),i=new ClipboardItem({"text/html":t,"text/plain":n});navigator.clipboard.write([i])}else{const i=document.createElement("div");i.innerHTML=e,i.style.position="fixed",i.style.pointerEvents="none",i.style.opacity="0",document.body.appendChild(i),null===(t=self.getSelection())||void 0===t||t.removeAllRanges();const r=document.createRange();r.selectNode(i),null===(n=self.getSelection())||void 0===n||n.addRange(r),document.execCommand("copy"),document.body.removeChild(i)}}var o=n(24441),a=n(74850);const l=(e,t)=>{const n=a.Y.create("CitationBuilderViewModel.Header");return{notify:(t,i,r)=>{i.forEach((({type:i})=>{switch(i){case"notify":t===o._&&n.trace("Back clicked");break;case"closeCard":e()}}))},activeView:t}};var s=n(6312),c=n(70026),d=n(38983);function p(e){const t=d.h.create(s.D.State.citeSource),n=()=>t.set(s.D.State.showWindow),o=()=>t.set(s.D.State.citeSource),a=new c.A({type:s.D.ViewType.Default},{type:s.D.ViewType.Default}),p=l(o,a.activeView),u=((e,t,n,i)=>({domain:e,disablePermanently:t,disableForSession:n,openWindow:i}))(e.domain,e.disableCitationBuilder.bind(e),e.disableCitationBuilderForSession.bind(e),n),m=(e=>({citationStyle:e.generationModel.style,sourceType:e.generationModel.kind,setCitationStyle:t=>{e.generationModel.setStyle(t)}}))(e),h={fullCitation:(g=e.generationModel).fullCitation,copyFullCitation:()=>{r(i.q.Utils.generatedCitationToRtf(g.fullCitation.get()))},copyInTextCitation:()=>{r(i.q.Utils.generatedCitationToRtf(g.inTextCitation.get()))}};var g;return{citation:e.citation,state:t,router:a,openWindow:n,closeWindow:o,header:p,gButton:u,styleTypeSelector:m,citationView:h,_model:e}}},6312:(e,t,n)=>{var i;n.d(t,{D:()=>i}),function(e){let t,n;!function(e){e.citeSource="citeSource",e.showWindow="showWindow"}(t=e.State||(e.State={})),function(e){e.Default="Default",e.EditCitation="EditCitation",e.AddMissingInformation="AddMissingInformation"}(n=e.ViewType||(e.ViewType={}))}(i||(i={}))},7635:(e,t,n)=>{n.r(t),n.d(t,{CitationBuilderIntegrationLayout:()=>d});var i=n(27378),r=n(41263),o=n(18505),a=n(2780),l=n(68383),s=n(86620),c=n(33678);class d{render(e,t){const n=self.document,d=o.VB.get({monitorAs:"citation-builder"}).inject(a.EM.fromDocument(self.document,"grammarly-citation-builder"),a.zs.appendChild(n.documentElement),l.G7.showWhenLoaded(i.createElement((()=>i.createElement("div",{style:{position:"fixed",bottom:"32px",left:"17px",zIndex:9999,"--rem":16}},i.createElement(c.a.Context.Provider,{value:new s.C},i.createElement(i.Suspense,{fallback:i.createElement(i.Fragment,null)},i.createElement(r.L,{chunkName:"citationBuilderIntegration"},i.createElement(e,{viewModel:t})))))),null)));return{dispose:()=>d.dispose()}}}},75172:(e,t,n)=>{n.r(t),n.d(t,{CitationBuilderView:()=>ut});var i={};n.r(i),n.d(i,{base:()=>G,button:()=>M,header1:()=>R,header2:()=>F,header3:()=>z,header3legacy:()=>W,header4:()=>$,header5:()=>Q,lawyer:()=>J,p1:()=>q,paper:()=>V,score:()=>Y,small:()=>U,smallLight:()=>Z,title:()=>X});var r=n(27378),o=n(6312),a=n(57050),l=n(50202),s=n(22249),c=n(53112);const d=({color:e=c.Z.neutral0})=>r.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.431 4h1.138c.16 0 .288.13.288.288 0 1.37 1.68 2.031 2.65 1.063a.294.294 0 0 1 .413-.002l.731.73c.114.115.112.3-.002.415-.968.968-.307 2.649 1.063 2.649.159 0 .288.129.288.288v1.138c0 .16-.13.288-.288.288-1.37 0-2.031 1.68-1.063 2.65.114.113.116.3.002.413l-.73.731a.294.294 0 0 1-.415-.002c-.968-.968-2.649-.307-2.649 1.063 0 .159-.129.288-.288.288H9.43a.288.288 0 0 1-.288-.288c0-1.37-1.68-2.031-2.65-1.063a.293.293 0 0 1-.413.002l-.731-.73a.294.294 0 0 1 .002-.415c.968-.968.307-2.649-1.063-2.649A.288.288 0 0 1 4 10.57V9.43c0-.16.13-.288.288-.288 1.37 0 2.031-1.68 1.063-2.65a.294.294 0 0 1-.002-.413l.73-.731a.294.294 0 0 1 .415.002c.968.968 2.649.307 2.649-1.063 0-.159.129-.288.288-.288ZM10 12.308a2.308 2.308 0 1 0 0-4.616 2.308 2.308 0 0 0 0 4.616Z",fill:e}));var p=n(18813),u=n(1509),m=n(64757),h=n(5739),g=n(12187),y=n(52238);const v=({viewModel:e})=>{const[t,n]=r.useState(!1),i=()=>n(!1),o=(0,l.N)({processGbuttonBlur:i,processGbuttonHover:()=>n(!0)},600,1200);return r.createElement(h.F.div,{className:y.citationGButtonContainer,...o.handlers},r.createElement("div",{className:y.citationGButtonSettingsContainer},r.createElement(p.L,{name:"disableCitationBuilder",label:r.createElement(f,{onClick:(0,a.ls)(i,o.reset.bind(o)),visible:t}),align:"left",vAlign:"top",appearanceBehavior:"mouseClick",theme:{dropdownList:y.dropdownContainer},showDelay:0},r.createElement(b,{viewModel:e}))),r.createElement("div",{className:y.citationGButton,onClick:(0,a.ls)(i,o.reset.bind(o),e.openWindow.bind(e))},r.createElement(s.V,{size:22}),r.createElement("span",{className:y.citeSource},"Cite source")))},b=({viewModel:e})=>r.createElement(r.Fragment,null,r.createElement(u.Z.Small,{className:y.disableMenuText},"Hide ",r.createElement("b",null,"Cite Source")," button for ",e.domain,"?"),r.createElement(m.zx.Flat,{name:"thisSessionDisable",onClick:e.disableForSession.bind(e)},"Yes, for this session"),r.createElement(m.zx.Flat,{name:"thisSessionDisable",onClick:e.disablePermanently.bind(e)},"Yes, from now on")),f=({onClick:e,visible:t})=>r.createElement("div",{...(0,g.Sh)(y.citationGButtonSettings,t?y.visible:y.hidden),onClick:e},r.createElement(d,null));var C=n(61922),_=n(42097);const S=({viewModel:e})=>r.createElement("div",{className:_.citationContainer},r.createElement("div",{className:_.fullCitationPreview},r.createElement(h.F.div,{className:_.fullCitationText},e.fullCitation.view((e=>e.result.map(((e,t)=>r.createElement(u.Z,{key:e.value+String(t),styleType:u.Z.Type.Base,nodeType:"span",className:_.citationText},e.italicize?r.createElement("i",null,e.value):e.value))))))),r.createElement("div",{className:_.buttonsContainer},r.createElement(m.zx.Group,{sticky:!0,className:_.buttonsGroup},r.createElement(m.zx.Primary,{name:"copyCitation",className:_.copyButton,onClick:e.copyFullCitation.bind(e)},"Copy"),r.createElement(p.L,{name:"citationMenu",label:r.createElement(m.zx.White,{name:"menu",className:_.moreButton},r.createElement(C.JO.Ellipsis,null)),align:"right",vAlign:"top"},r.createElement(m.zx.Flat,{name:"copyInText",onClick:e.copyInTextCitation.bind(e)},"Copy in-text citation")))));var x=n(57635),E=n(24441),w=n(29417),T=n(83412);const B=({vm:e})=>r.createElement(p.L,{name:"citationBuilderSettings",label:r.createElement(w.l,{enableTooltip:!0}),align:"right",vAlign:"bottom",showDelay:0,closeDelay:0,theme:{dropdownList:T.dropdownContainer}},r.createElement(b,{viewModel:e.gButton}));var k,H=n(24606),N=n(80895),I=n(84017),A=n(59312),D=n(44060),P=n(54861),L=n(45614),O=n(40327),j=n(83171);!function(e){e.stylesheet=function(e){return(0,O.pipe)(e,L.Su(((e,t)=>j.style(...t,{$debugName:e}))))},e.prefixedStylesheet=function(e,t){return(0,O.pipe)(t,L.Su(((t,n)=>j.style(...n,{$debugName:e+"-"+t}))))},e.percent=P.aQ,e.px=P.px,e.vh=P.sI,e.vw=P.E9,e.important=P.ef,e.color=P.$_,e.style=j.style,e.keyframes=j.keyframes,e.cssRule=j.cssRule,e.setStylesTarget=j.setStylesTarget,e.fontFace=j.fontFace,e.rem=e=>`calc(${e}px * var(--rem))`,e.joinClasses=e=>e.filter(Boolean).join(" "),e.seconds=e=>`${e}s`,e.linearGradient=P.bC}(k||(k={}));const R=k.style({margin:0,color:D.xv.H1Color,letterSpacing:D.xv.H1LetterSpacing,fontWeight:D.xv.H1Weight,fontSize:k.rem(D.xv.H1Size),lineHeight:k.rem(D.xv.H1LineHeight)}),F=k.style({margin:0,color:D.xv.H2Color,textTransform:"capitalize",letterSpacing:D.xv.H2LetterSpacing,fontWeight:D.xv.H2Weight,fontSize:k.rem(D.xv.H2Size),lineHeight:k.rem(D.xv.H2LineHeight)}),z=k.style({margin:0,color:D.xv.H3Color,letterSpacing:k.rem(D.xv.H3LetterSpacing),fontWeight:D.xv.H3Weight,fontSize:k.rem(D.xv.H3Size),lineHeight:k.rem(D.xv.H3LineHeight)}),W=k.style({margin:0,color:D.Il.CoreNeutral50,textTransform:"uppercase",letterSpacing:k.rem(.04625),fontWeight:700,fontSize:k.rem(.6875),lineHeight:k.rem(1.5)}),M=k.style({margin:0,color:D.xv.ButtonColor,letterSpacing:k.rem(D.xv.ButtonLetterSpacing),fontWeight:D.xv.ButtonWeight,fontSize:k.rem(D.xv.ButtonSize),lineHeight:k.rem(D.xv.ButtonLineHeight)}),$=k.style({margin:0,color:D.xv.H4Color,letterSpacing:k.rem(D.xv.H4LetterSpacing),fontWeight:D.xv.H4Weight,fontSize:k.rem(D.xv.H4Size),lineHeight:k.rem(D.xv.H4LineHeight)}),V=k.style({color:D.xv.PaperColor,letterSpacing:k.rem(D.xv.PaperLetterSpacing),fontWeight:D.xv.PaperWeight,fontSize:k.rem(D.xv.PaperSize),lineHeight:k.rem(D.xv.PaperLineHeight)}),G=k.style({color:D.xv.BodyColor,letterSpacing:k.rem(D.xv.BodyLetterSpacing),fontWeight:D.xv.BodyWeight,fontSize:k.rem(D.xv.BodySize),lineHeight:k.rem(D.xv.BodyLineHeight)}),U=k.style({color:D.xv.SmallColor,letterSpacing:k.rem(D.xv.SmallLetterSpacing),fontWeight:D.xv.SmallWeight,fontSize:k.rem(D.xv.SmallSize),lineHeight:k.rem(D.xv.SmallLineHeight)}),Z=k.style({color:D.xv.SmallLightColor,letterSpacing:k.rem(D.xv.SmallLightLetterSpacing),fontWeight:D.xv.SmallLightWeight,fontSize:k.rem(D.xv.SmallLightSize),lineHeight:k.rem(D.xv.SmallLightLineHeight)}),Y=k.style({color:D.xv.ScoreColor,letterSpacing:k.rem(D.xv.ScoreLetterSpacing),fontWeight:D.xv.ScoreWeight,fontSize:k.rem(D.xv.ScoreSize),lineHeight:k.rem(D.xv.ScoreLineHeight)}),J=k.style({color:D.Il.CoreNeutral70,letterSpacing:".1px",fontWeight:400,fontSize:k.rem(.6875),lineHeight:k.rem(1)}),X=k.style({color:D.Il.CoreNeutral90,textTransform:"uppercase",letterSpacing:".8px",fontWeight:700,fontSize:k.rem(.75),lineHeight:k.rem(2)}),q=k.style({color:D.Il.CoreNeutral90,letterSpacing:0,fontSize:k.rem(.9375),lineHeight:k.rem(1.5)}),Q=k.style({margin:0,color:D.Il.CoreNeutral50,textTransform:"uppercase",letterSpacing:k.rem(.04625),fontWeight:400,fontSize:k.rem(.5625),lineHeight:k.rem(1)});function K(e){var{nodeType:t,styleType:n,className:i,mount:o}=e,a=(0,A._T)(e,["nodeType","styleType","className","mount"]);const l=h.F[t];return r.createElement(l,Object.assign({},(0,g.Sh)(K.style[n],i),a,{mount:o}))}!function(e){let t;e.style=i,function(e){e.H1="header1",e.H2="header2",e.H3="header3",e.H3Legacy="header3legacy",e.H4="header4",e.H5="header5",e.Paper="paper",e.Base="base",e.Small="small",e.SmallLight="smallLight",e.Lawyer="lawyer",e.Title="title",e.Button="button",e.Score="score",e.P1="p1"}(t=e.Type||(e.Type={})),e.H1=t=>r.createElement(e,Object.assign({styleType:e.Type.H1,nodeType:"h1"},t)),e.H2=t=>r.createElement(e,Object.assign({styleType:e.Type.H2,nodeType:"h2"},t)),e.H3=t=>r.createElement(e,Object.assign({styleType:e.Type.H3,nodeType:"h3"},t)),e.H3Legacy=t=>r.createElement(e,Object.assign({styleType:e.Type.H3Legacy,nodeType:"h3"},t)),e.H4=t=>r.createElement(e,Object.assign({styleType:e.Type.H4,nodeType:"h4"},t)),e.H5=t=>r.createElement(e,Object.assign({styleType:e.Type.H5,nodeType:"h5"},t)),e.Paper=t=>r.createElement(e,Object.assign({styleType:e.Type.Paper,nodeType:"span"},t)),e.Base=t=>r.createElement(e,Object.assign({styleType:e.Type.Base,nodeType:"div"},t)),e.Small=t=>r.createElement(e,Object.assign({styleType:e.Type.Small,nodeType:"small"},t)),e.SmallLight=t=>r.createElement(e,Object.assign({styleType:e.Type.SmallLight,nodeType:"div"},t)),e.Lawyer=t=>r.createElement(e,Object.assign({styleType:e.Type.Lawyer,nodeType:"span"},t)),e.Title=t=>r.createElement(e,Object.assign({styleType:e.Type.Title,nodeType:"div"},t)),e.Button=t=>r.createElement(e,Object.assign({styleType:e.Type.Button,nodeType:"div"},t)),e.Score=t=>r.createElement(e,Object.assign({styleType:e.Type.Score,nodeType:"div"},t)),e.P1=t=>r.createElement(e,Object.assign({styleType:e.Type.P1,nodeType:"div"},t))}(K||(K={}));var ee,te=n(1169),ne=n(38983),ie=n(77176),re=n(32952),oe=n(8125),ae=n(5114),le=n(81531);!function(e){e.empty={hovered:void 0,disabled:void 0,active:void 0},e.withValue=(e,t)=>Object.assign(Object.assign({},e),t),e.emptyWithName=t=>e.withValue(e.empty,{name:t}),e.Context=r.createContext(e.empty)}(ee||(ee={}));var se,ce=n(31542),de=n(9922),pe=n(98403),ue=n(24209),me=n(49708),he=n(41398),ge=n(85985),ye=n(2834),ve=n(66310),be=n(40151),fe=n(80900),Ce=n(95093),_e=n(9223),Se=n(18208);!function(e){e.genUuid=()=>Se.fg(12),e.defaultState={visible:!1,content:ae.none},e.Context=r.createContext(void 0);class t{constructor(t=ne.h.create(e.defaultState)){this._state=t,this.visible=this._state.lens("visible"),this.content=this._state.lens("content"),this.hasContent=this._state.view((e=>ae.isSome(e.content))),this.state=this._state.view((e=>(0,O.pipe)(e.content,ae.filter((()=>e.visible))))),this.show=()=>{this.visible.set(!0)},this.hide=()=>{this._state.set(e.defaultState)}}getTooltipObservable(t,n,i,r){const o=ue.T(me.R(t,"mouseenter"),me.R(t,"focus")),a=ue.T(me.R(t,"mouseleave"),me.R(t,"blur")),l=e.genUuid(),s=()=>this._state.modify((t=>(0,O.pipe)(t.content,ae.exists((e=>e.uuid===l)))?e.defaultState:t));return o.pipe(he.M(pe.Dx(n).pipe(ge.h(Boolean)),((e,t)=>t)),ye.b((e=>this.content.set(ae.some({target:t,content:e,alignment:i,uuid:l})))),ve.w((()=>(0,O.pipe)(r,ae.fold((()=>be.E),(e=>fe.H(e)))).pipe(Ce.T(a),ye.b(s)))),_e.x(s))}}e.Impl=t,e.DefaultProvider=({children:n})=>r.createElement(e.Context.Provider,{value:new t},n)}(se||(se={}));class xe extends r.Component{constructor(){super(...arguments),this._subs=new de.w.Keeper,this._attachEvents=e=>{this._subs.push(this.context.getTooltipObservable(ce.findDOMNode(this),e.title,null!=e.align?e.align:"auto",ae.fromNullable(e.duration)).subscribe())}}componentDidMount(){this._attachEvents(this.props)}UNSAFE_componentWillReceiveProps(e){this._subs.dispose(),this._attachEvents(e)}componentWillUnmount(){this._subs.dispose()}render(){return r.Children.only(this.props.children)}}xe.contextType=se.Context;const Ee=.25,we=e=>Object.assign(Object.assign({},e.default),{$nest:{"&:not([data-disabled='true'])[data-hovered='true']":Object.assign({},e.hovered),"&[data-disabled='true']":Object.assign({},e.disabled),"&:not([data-disabled='true']):active":Object.assign({},e.clicked),"&[data-active='true']":Object.assign({},e.toggled),"&[hidden]":Object.assign({},e.hidden),"&:focus":{boxShadow:`0 0 0 1px ${D.Il.CoreNeutral0}, 0 0 0 3px ${D.Il.CoreBlue40}`,zIndex:1},"&:focus:not(:focus-visible)":{boxShadow:"none",$unique:!0},"&:focus-visible":{boxShadow:`0 0 0 1px ${D.Il.CoreNeutral0}, 0 0 0 3px ${D.Il.CoreBlue40}`,zIndex:1,$unique:!0}}}),Te=(e,t)=>({$nest:{"&[data-textpos='left']":{padding:`0 ${t} 0 ${e}`},"&[data-textpos='right']":{padding:`0 ${e} 0 ${t}`},"&[data-textpos='everywhere']":{padding:`0 ${e} 0 ${e}`}}}),Be={borderRadius:k.rem(Ee)},ke=we({default:{position:"relative",display:"inline-block",overflow:"hidden",padding:0,outline:"none",border:0,backgroundColor:"transparent",verticalAlign:"middle",whiteSpace:"nowrap",cursor:"default",userSelect:"none"},hovered:{cursor:"pointer"},disabled:{backgroundColor:"initial"},clicked:{},toggled:{},hidden:{display:"none"}}),He=k.style(ke),Ne=k.style(ke,Be,we({default:{padding:`0 ${k.rem(.5)}`,backgroundColor:"transparent",color:D.Il.CoreBlue50,lineHeight:k.rem(2),transition:"background-color .2s"},hovered:{backgroundColor:D.Il.CoreNeutral1},disabled:{color:D.Il.CoreNeutral30,fontWeight:"normal"},clicked:{transition:"none",transform:"scale(1)"},toggled:{},hidden:{}})),Ie=k.style({display:"inline-flex"}),Ae=k.style(ke,Be,Te(k.rem(D.Zh.ButtonPrimaryX),0),we({default:{backgroundColor:D.Il.BackgroundButtonPrimaryNormal,color:D.Il.CoreNeutral0,lineHeight:k.rem(2),transitionDuration:".2s"},hovered:{backgroundColor:D.Il.BackgroundButtonPrimaryHover,$nest:{"& > i":{fill:D.Il.CoreNeutral0,stroke:D.Il.CoreNeutral0}}},disabled:{backgroundColor:D.Il.BackgroundButtonPrimaryDisabled,color:D.Il.TextButtonPrimaryDisabled},clicked:{},toggled:{},hidden:{}}),{$nest:{"& > i":{fill:D.Il.CoreNeutral0,stroke:D.Il.CoreNeutral0}}}),De=k.style(ke,{$nest:{[`.${Ie} &`]:{padding:`0 ${k.rem(.5)}`,marginRight:k.px(2),borderRadius:0,$nest:{"&:first-child":{borderRadius:`${k.rem(Ee)} 0 0 ${k.rem(Ee)}`},"&:last-child":{marginRight:0,borderRight:"none",borderRadius:`0 ${k.rem(Ee)} ${k.rem(Ee)} 0`}}},[`.${Ie} &:not([data-active='true'])`]:{backgroundColor:D.Il.CoreNeutral10}}},we({default:{padding:`0 ${k.rem(.5)}`,borderRadius:k.rem(Ee),backgroundColor:D.Il.CoreNeutral10,color:D.Il.CoreBlue60,textTransform:"capitalize",letterSpacing:0,fontSize:k.rem(.875),lineHeight:k.rem(2),transitionDuration:".2s"},hovered:{backgroundColor:D.Il.CoreNeutral20},toggled:{backgroundColor:D.Il.CoreBlue50,color:D.Il.CoreNeutral0,$nest:{"&:hover":{backgroundColor:D.Il.CoreBlue40,color:D.Il.CoreNeutral0}}},disabled:{backgroundColor:D.Il.CoreNeutral10,color:D.Il.CoreNeutral50},clicked:{},hidden:{}})),Pe=k.style(ke,Be,Te(k.rem(D.Zh.ButtonPrimaryX),0),we({default:{display:"inline-flex",color:D.Il.CoreBlue50,lineHeight:k.rem(2),transitionDuration:".2s",transitionProperty:"border, background, color",flexWrap:"wrap",alignItems:"center"},hovered:{borderColor:D.Il.BackgroundButtonGhostHover,background:D.Il.BackgroundButtonGhostHover},disabled:{borderColor:D.Il.TextButtonGhostDisabled,color:D.Il.TextButtonGhostDisabled},clicked:{},toggled:{},hidden:{}}),{$nest:{"&[data-textpos] i[data-role='icon']":{margin:`${k.rem(-.1)} ${k.rem(.25)} 0 0`}}}),Le=k.style(ke,Be,Te(k.rem(.5),0),we({default:{display:"inline-flex",color:D.Il.CoreNeutral50,lineHeight:k.rem(2),transitionDuration:".2s",transitionProperty:"border, background, color",flexWrap:"wrap",alignItems:"center"},hovered:{background:D.Il.CoreNeutral1,color:D.Il.CoreBlue50},disabled:{color:D.Il.CoreNeutral30},clicked:{},toggled:{},hidden:{}})),Oe=k.style(ke,Te(k.rem(1),k.rem(.5)),we({default:{display:"inline-flex",color:D.Il.CoreNeutral90,textAlign:"left",fontWeight:"normal",fontSize:k.rem(.875),lineHeight:k.rem(2),transitionDuration:".2s",alignItems:"center"},hovered:{backgroundColor:D.Il.CoreNeutral10,color:D.Il.CoreBlue50},disabled:{color:D.Il.CoreNeutral40},clicked:{},toggled:{},hidden:{}}),{$nest:{"&[data-textpos] i[data-role='icon']":{margin:`${k.rem(-.1)} ${k.rem(.25)} 0 0`}}}),je=k.style(ke,Be,{display:"flex",margin:`0 ${k.rem(.5)} ${k.rem(.5)}`,padding:`0 ${k.rem(.3)} 0 ${k.rem(.5)}`,minHeight:k.rem(2),color:D.Il.CoreNeutral70,textAlign:"left",whiteSpace:"normal",fontWeight:"normal",lineHeight:k.rem(1.2),transition:"background .2s",alignItems:"center",$nest:{"&[data-hovered='true']":{background:D.Il.CoreNeutral10},"&[data-active='true']":{background:D.Il.CoreNeutral20}}}),Re=k.style({textDecoration:"none"}),Fe=k.style({display:"inline-flex",justifyContent:"space-around",$nest:{"& > *:not(:first-child)":{marginLeft:k.rem(.5)}}}),ze=k.style({display:"inline-flex",flexDirection:"column",$nest:{"& > *":{borderRadius:0}}});k.style({whiteSpace:"pre-line"});var We,Me=n(78674),$e=n(22232);!function(e){e.None="none",e.FromClickPoint="fromClickPoint",e.FromCenter="fromCenter"}(We||(We={}));class Ve extends r.Component{constructor(e,t){super(e),this._ripples=ne.h.create(Array()),this._disabled=ne.h.create(!1).view(),this._disabled=void 0===t.disabled?this._disabled:t.disabled}componentDidMount(){this._el&&(this._subscription=this.props.mouseDownEvents.pipe(ye.b((e=>{if(!this._disabled.get()&&this._el){const t=this._getAnimationStyle(this._el,e);this._ripples.modify((e=>[...e,t]))}})),Me.b(1e3),ye.b((()=>this._ripples.modify((()=>[]))))).subscribe())}componentWillUnmount(){Boolean(this._subscription)&&this._subscription.unsubscribe()}_getAnimationStyle(e,t){const n=e.getBoundingClientRect(),i=n.width;switch(this.props.animationMode){case We.None:throw new $e.ej("unsupported mode, do not mount component if you do not need ripple animation");case We.FromCenter:return{className:Je.rippleFromCenter,top:(n.height-i)/2,left:0,width:i,height:i};default:return{className:Je.ripple,top:t.pageY-n.top-i/2,left:t.pageX-n.left-i/2,width:i,height:i}}}render(){return r.createElement("span",{className:Je.rippleContainer,ref:e=>this._el=e},r.createElement(h.F.span,null,this._ripples.pipe(ie.U((e=>e.map(((e,t)=>r.createElement("span",{className:e.className,key:t,style:e}))))))))}}Ve.contextType=ee.Context;const Ge=k.keyframes({to:{opacity:0,transform:"scale(1)"}}),Ue=k.keyframes({to:{opacity:0,transform:"scale(2)"}}),Ze={position:"absolute",borderRadius:k.percent(100),backgroundColor:D.Il.CoreNeutral90,opacity:.15,transform:"scale(0)",animation:`${Ue} .4s`},Ye={animationName:Ge},Je=k.stylesheet({rippleContainer:[{position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",pointerEvents:"none"}],ripple:[Ze],rippleFromCenter:[Ze,Ye]}),Xe=e=>e?-1:0;var qe,Qe;!function(e){e[e.button=0]="button",e[e.div=1]="div",e[e.link=2]="link"}(qe||(qe={}));class Ke extends r.Component{constructor(e,t){super(e),this._hovered=ne.h.create(!1),this.mouseDownEvents=new re.xQ,this._setInternals(e),this._isHovered=void 0!==t.hovered?ne.h.combine(t.hovered,this._hovered,oe.or):this._hovered}static get _log(){return void 0===this.__buttonLogger&&(this.__buttonLogger=le.C8.Logging.getLogger("Button")),this.__buttonLogger}UNSAFE_componentWillReceiveProps(e){this._setInternals(e)}render(){const e={hovered:this._isHovered,disabled:"boolean"==typeof this._isDisabled?ne.h.create(this._isDisabled):this._isDisabled,active:"boolean"==typeof this._isActive?ne.h.create(this._isActive):this._isActive},t=this._getElement(this.props.tag,this.props.href);return r.createElement(ee.Context.Provider,{value:e},null!=this.props.title?r.createElement(xe,{title:this.props.title,align:Boolean(this.props.titleAlign)?this.props.titleAlign:"auto"},t):t)}_getElement(e,t){return void 0===t||e!==qe.link&&Boolean(e)?e===qe.button?this._genButtonEl():this._genDivEl():this._genLinkEl()}get _name(){const e=this.props.name,t="string"==typeof e?e:e.get();return void 0!==this.context.name?`${this.context.name}/${t}`:t}_setInternals(e){const{onClick:t,isDisabled:n}=e.onClick?this._getGenericButtonInternals(e.onClick,e.disabled):{onClick:void 0,isDisabled:void 0!==e.disabled&&e.disabled};this._onClick=e=>(Ke._log.info("Button clicked: "+this._name),t&&t(e).catch((e=>Ke._log.error("Button click failed: "+this._name,e)))),this._isDisabled=n,this._isActive=void 0!==e.active&&e.active}_genLinkEl(){return null!=this.props.styleType?r.createElement(K,Object.assign({id:this.props.id,styleType:this.props.styleType,nodeType:"a"},this._getLinkRenderProps(),{mount:this.props.mount})):r.createElement(h.F.a,Object.assign({id:this.props.id},this._getLinkRenderProps(),{mount:this.props.mount}))}_genDivEl(){return null!=this.props.styleType?r.createElement(K,Object.assign({id:this.props.id,styleType:this.props.styleType,nodeType:"div"},this._getDivRenderProps(),{mount:this.props.mount})):r.createElement(h.F.div,Object.assign({id:this.props.id},this._getDivRenderProps(),{mount:this.props.mount}))}_genButtonEl(){return null!=this.props.styleType?r.createElement(K,Object.assign({styleType:this.props.styleType,nodeType:"button"},this._getButtonRenderProps(this.props.role,this.props.type),{mount:this.props.mount})):r.createElement(h.F.button,Object.assign({},this._getButtonRenderProps(this.props.role,this.props.type),{mount:this.props.mount}))}_getLinkRenderProps(){var e;return this._getBaseRenderProps(Object.assign({href:this.props.href,target:this.props.target,rel:this.props.rel,role:null!==(e=this.props.role)&&void 0!==e?e:"button"},(0,g.Sh)(Re,this.props.className)))}_getDivRenderProps(){var e;return this._getBaseRenderProps({role:null!==(e=this.props.role)&&void 0!==e?e:"button",className:this.props.className})}_getButtonRenderProps(e,t="button"){return this._getBaseRenderProps({type:t,role:e,className:this.props.className})}_getBaseRenderProps(e){const t=(0,O.pipe)(ae.fromNullable(this.props.textPosition),ae.fold((()=>Qe.parseFromNodes(this.props.children)),ae.some),ae.map((e=>({"data-textpos":e}))),ae.getOrElse((()=>({}))));return Object.assign(Object.assign({onClick:this._onClick,onMouseOver:()=>this._hovered.set(!0),onMouseLeave:()=>this._hovered.set(!1),onMouseDown:({pageX:e,pageY:t})=>this.mouseDownEvents.next({pageX:e,pageY:t}),onKeyDown:e=>{" "!==e.key&&"Enter"!==e.key||(e.target.click(),e.preventDefault())},"data-name":this._name,"data-disabled":this._isDisabled,"aria-disabled":this._isDisabled,"data-active":this._isActive,"data-hovered":this._isHovered,"aria-label":this.props.ariaLabel,"aria-labelledby":this.props.ariaLabelledBy,"aria-hidden":this.props.ariaHidden,hidden:this.props.hidden,style:this.props.style,children:this._renderChildren(),tabIndex:void 0!==this.props.tabIndex?this.props.tabIndex:(n=this._isDisabled,"boolean"==typeof n?(0,O.pipe)(n,Xe):(0,O.pipe)(n,ie.U(Xe)))},t),e);var n}_renderChildren(){return Boolean(this.props.animationMode)&&this.props.animationMode!==We.None?this._renderChildrenAsArray().concat(this._renderRippleAnimation()):this.props.children}_renderChildrenAsArray(){return Array.isArray(this.props.children)?[].concat.apply([],this.props.children):[this.props.children]}_renderRippleAnimation(){var e;return r.createElement(Ve,{key:"ripple",animationMode:null!==(e=this.props.animationMode)&&void 0!==e?e:We.FromClickPoint,mouseDownEvents:this.mouseDownEvents})}_getGenericButtonInternals(e,t=!1){const n=ne.h.create(!1),i="boolean"==typeof t?n.view((e=>t||e)):ne.h.combine(t,n,oe.or);return{onClick:this._decorateOnClickWithStateManager(e,(e=>n.set(e)),(()=>i.get())),isDisabled:i}}_decorateOnClickWithStateManager(e,t,n){return i=>(0,A.mG)(this,void 0,void 0,(function*(){if(i.stopPropagation(),!n()){t(!0);try{return this._hovered.set(!1),yield e(i)}finally{t(!1)}}}))}}function et(e){return r.createElement(Ke,Object.assign({},tt(e,He)))}function tt(e,t){const{className:n}=(0,g.Sh)(e.className,t);return Object.assign(Object.assign({},e),{className:n})}Ke.displayName="BaseButton",Ke.contextType=ee.Context,Ke.__buttonLogger=void 0,function(e){const t=new Map([["+","everywhere"],["++","everywhere"],["+-","left"],["-+","right"],["+++","everywhere"],["+-+","everywhere"],["++-","left"],["-++","right"],["-+-","surrounded"]]);e.parseFromNodes=function(e){const n=te.isElement(e)?e.props.children:e,i=(Array.isArray(n)?n:[n]).map((e=>"string"==typeof e?"+":"-")).join("");return ae.fromNullable(t.get(i))}}(Qe||(Qe={})),function(e){e.Animated=e=>r.createElement(Ke,Object.assign({},Object.assign(Object.assign({},e),{animationMode:Boolean(e.animationMode)?e.animationMode:We.FromClickPoint}))),e.Primary=t=>r.createElement(e.Animated,Object.assign({styleType:K.Type.Button},tt(t,Ae))),e.Ghost=t=>r.createElement(e.Animated,Object.assign({styleType:K.Type.Button},tt(t,Pe))),e.Tertiary=t=>r.createElement(e.Animated,Object.assign({styleType:K.Type.Base},tt(t,Le))),e.Flat=t=>r.createElement(e.Animated,Object.assign({},tt(t,Oe))),e.White=t=>r.createElement(e.Animated,Object.assign({},tt(t,De))),e.SidebarFlat=e=>r.createElement(Ke,Object.assign({styleType:K.Type.H3Legacy},tt(e,je))),e.Caps=e=>r.createElement(Ke,Object.assign({styleType:K.Type.H3Legacy},tt(e,Ne))),e.Group=({children:e,className:t,align:n="horizontal",sticky:i,name:o})=>r.createElement(h.F.div,Object.assign({role:"group"},(0,g.Sh)(t,"horizontal"===n?!0===i?Ie:Fe:ze),{"data-name":o}),e)}(et||(et={}));var nt=n(47661);const it=["apa","mla","chicago"],rt=e=>"mla"===e||"apa"===e?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1),ot=({vm:e})=>r.createElement(p.L,{name:"styleTypeSelector",label:r.createElement(H.z,{includePadding:!1,kind:"transparent-hoverable",className:nt.selectorButton},r.createElement(N.C,{title:"beta"}),r.createElement("span",{className:nt.selectorButtonLabel},r.createElement(h.F.span,null,e.citationStyle.view(rt))," · ",r.createElement(h.F.span,{className:nt.sourceTypeLabel},e.sourceType)),r.createElement(C.JO.Arrow,null)),align:"right",vAlign:"bottom",dontCloseOnClickInside:!0,showDelay:0,closeDelay:0},r.createElement("div",{className:nt.dropdownContainer},r.createElement(u.Z.Small,null,"Style"),r.createElement(et.Group,{sticky:!0,className:nt.styleButtonGroup},it.map((t=>r.createElement(et.White,{name:t,key:t,disabled:"chicago"===t,active:e.citationStyle.view((e=>e===t)),className:nt.styleButton,onClick:()=>e.setCitationStyle(I.K.Style[t])},rt(t)))))));var at=n(1620),lt=n(87965),st=n(42103),ct=n(89076);const dt=e=>e.activeView.view((t=>r.createElement(E.h,{notify:e.notify,activeView:t}))),pt=({children:e,vm:t})=>r.createElement(lt.p,null,r.createElement(st.G.DefaultProvider,null,r.createElement(x.V,{includeContentPadding:!0,dataGrammarlyPart:"citation-window",headerContent:dt(t.header)},r.createElement("div",{className:ct.citationBuilderHeaderActions},r.createElement(ot,{vm:t.styleTypeSelector}),r.createElement(B,{vm:t}),r.createElement(at.P,{className:ct.citationBuilderCloseButton,onClick:()=>t.header.notify("close",[{type:"closeCard"}],{alertRef:ae.none}),tooltipMessage:"Close Citation Builder"})),e))),ut=e=>{return r.createElement(h.F.Fragment,null,(t=e.viewModel).state.view((e=>{switch(e){case o.D.State.citeSource:return r.createElement(v,{viewModel:t.gButton});case o.D.State.showWindow:return r.createElement(pt,{vm:t},r.createElement(h.F.div,null,t.router.activeView.view((e=>e.type===o.D.ViewType.Default?r.createElement(S,{viewModel:t.citationView}):r.createElement(r.Fragment,null)))));default:(0,$e.vE)(e)}})));var t}},70026:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(38983);class r{constructor(e,t){this._viewHistory=[],this._startupPlaceHolder=e,this._activeView=i.h.create(this._startupPlaceHolder),this._defaultView=t}get activeView(){return this._activeView.view()}get lastView(){return this._viewHistory[this._viewHistory.length-1]||this._defaultView}pushActiveView(e){const t=this._activeView.get();e.type!==t.type&&(t.type!==this._startupPlaceHolder.type&&this._viewHistory.push(t),this._activeView.set(e))}popActiveView(){const e=this._viewHistory.pop()||this._defaultView;this._activeView.set(e)}replaceActiveView(e){e.type!==this._activeView.get().type&&this._activeView.set(e)}}},86620:(e,t,n)=>{n.d(t,{C:()=>c,U:()=>i});var i,r=n(27378),o=n(29511),a=n(33678),l=n(88056),s=n(95574);!function(e){let t;!function(e){e.isAppleSystem="isAppleSystem"}(t=e.SidebarFlag||(e.SidebarFlag={})),e.Flag={...t,...a.a.Flag},e.Context=r.createContext(l.Y.invariantContent("Environment"))}(i||(i={}));class c{constructor(e=(0,o.O)()){this._flags=new Set,this.actions={openUrl:e=>s.vM((()=>{document.location.href=e.toString()})),openPopup:e=>s.vM((()=>{const t=self.open(e.toString(),void 0,"noreferrer");t&&(t.opener=null)}))},e.config.systemInfo.os.isMac&&this._flags.add(i.Flag.isAppleSystem),this._flags.add(i.Flag.supportsSVGDominantBaseline),this._flags.add(i.Flag.onlyTrustedEvents)}has(e){return this._flags.has(e)}}},57635:(e,t,n)=>{n.d(t,{V:()=>p});var i=n(27378),r=n(22679),o=n(20855),a=n(3860),l=n(29758),s=n(12187),c=n(5739),d=n(12267);const p=i.forwardRef((function({draggableRef:e,headerContent:t,className:n,children:p,includeContentPadding:u,footer:m,dataGrammarlyPart:h="single-card-assistant"},g){const[y,v]=i.useState(0),[b,f]=i.useState(0),[C,_]=i.useState(0),[S,x]=i.useState(0),E=i.useRef(null),w=i.useRef(null),T=i.useRef(null);i.useEffect((()=>{x(y+b+C)}),[y,b,C]);const B=i.useRef(null);i.useEffect((()=>{var e;return E.current?(null===(e=B.current)||void 0===e||e.disconnect(),B.current=l.N.getResizeObserver((()=>{E.current&&v(E.current.getBoundingClientRect().height)})),B.current.observe(E.current)):v(0),()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.disconnect()}}),[E.current]);const k=i.useRef(null);i.useEffect((()=>{var e;return w.current?(null===(e=k.current)||void 0===e||e.disconnect(),k.current=l.N.getResizeObserver((()=>{w.current&&f(w.current.getBoundingClientRect().height)})),k.current.observe(w.current)):f(0),()=>{var e;return null===(e=k.current)||void 0===e?void 0:e.disconnect()}}),[w.current]);const H=i.useRef(null);return i.useEffect((()=>{var e;return T.current?(null===(e=H.current)||void 0===e||e.disconnect(),H.current=l.N.getResizeObserver((()=>{T.current&&_(T.current.getBoundingClientRect().height)})),H.current.observe(T.current)):_(0),()=>{var e;return null===(e=H.current)||void 0===e?void 0:e.disconnect()}}),[m,T.current]),i.useEffect((()=>{w.current&&(w.current.scrollTop=0)}),[w.current,b]),i.createElement("div",{...(0,s.Sh)(d.singleCardAssistant,n),"data-grammarly-part":h,ref:g,style:{height:S}},i.createElement("div",{"data-grammarly-part":h+"-header",...(0,s.Sh)(d.singleCardAssistantHeader,e?d.singleCardAssistantHeaderDraggable:null),ref:t=>{E.current=t,null==e||e(t)}},i.createElement(c.F.Fragment,null,t)),i.createElement("div",{"data-grammarly-part":h+"-content",...(0,s.Sh)(d.singleCardAssistantContent,u?d.singleCardAssistantContentWithPadding:null),ref:w},p),m?i.createElement("div",{"data-grammarly-part":h+"-footer",className:d.singleCardAssistantFooter,ref:T,onClick:()=>m.onClick()},i.createElement("div",{className:d.singleCardAssistantFooterText},m.content),i.createElement(o.u,{message:m.tooltip,showDelay:r.gk},i.createElement(a.h,{onClick:()=>m.onClick()},i.createElement("div",{className:d.singleCardAssistantFooterButtonIcon})))):null)}))},24441:(e,t,n)=>{n.d(t,{_:()=>p,h:()=>u});var i=n(27378),r=n(6312),o=n(3860),a=n(5114),l=n(12187),s=n(79880),c=n(86068);const d=e=>i.createElement(o.h,{...e},i.createElement("div",{className:c.backIcon})),p="back-button",u=({notify:e,activeView:t})=>i.createElement("div",{...(0,l.Sh)(c.citationBuilderHeader)},i.createElement("div",{className:c.headerContent},t.type===r.D.ViewType.Default?i.createElement("div",{className:c.logoIcon}):i.createElement(i.Fragment,null,i.createElement(d,{onClick:()=>e(p,[{type:"notify",userAction:s.nz.Click}],{alertRef:a.none})}),i.createElement("div",{className:c.title},function(e){switch(e.type){case r.D.ViewType.AddMissingInformation:return"Add missing information";case r.D.ViewType.EditCitation:return"Edit citation";default:return""}}(t)))))},29417:(e,t,n)=>{n.d(t,{l:()=>d});var i=n(27378),r=n(22679),o=n(3860),a=n(20855),l=n(12187),s=n(75100),c=n.n(s);const d=({enableTooltip:e=!1,size:t="medium",...n})=>i.createElement(a.u,{message:"Settings",showDelay:r.gk,disabled:!e},i.createElement(o.h,{...n},i.createElement("div",{...(0,l.Sh)("small"===t?c().settingsButtonSmallIcon:null,"medium"===t?c().settingsButtonMediumIcon:null)})))},12267:e=>{e.exports={singleCardAssistant:"_29x5a",singleCardAssistantHeader:"eFwvd",singleCardAssistantHeaderDraggable:"_3wYqZ",singleCardAssistantContent:"_1r3xI",singleCardAssistantContentWithPadding:"Jgq6x",singleCardAssistantFooter:"_23i2M",singleCardAssistantFooterText:"mTIL9",singleCardAssistantFooterButtonIcon:"FJI7I",spin:"_2z-hC"}},52238:e=>{e.exports={citationGButtonContainer:"RxGxN",citationGButtonSettings:"_3vwBC",visible:"_3IWfc",hidden:"_3gzHg",citationGButtonSettingsContainer:"_1tBtJ",citationGButton:"bGjU_",citeSource:"_3NGxe",settingsIcon:"_1Csco",disableMenuText:"_2D-wy",dropdownContainer:"_13yWM",spin:"_2Pfa1"}},42097:e=>{e.exports={citationContainer:"NlnT4",fullCitationPreview:"VNiYQ",fullCitationText:"cnmSA",buttonsContainer:"_1-FSO",buttonsGroup:"_14uc7",moreButton:"_3LhGV",copyButton:"_1f50k",citationText:"_2OGV5"}},89076:e=>{e.exports={actions_hovered:"Bw4og",header:"mIo8B",draggableWrapper:"_1nGgR",draggable:"_2Ch-o",headerActions:"_3-GGd",citationBuilderHeaderActions:"_2eNe4",headerActionBtnProofitIcon:"jsMFu",headerActionBtnGoalsIcon:"_3YDXy",logoscore_fadein:"_2xVpz",fadein:"_1ASm3",logoscore_fadeout:"_2jd79",fadeout:"_3h50u",logo_score:"_2IyIe",styleTypeSelectorContainer:"_2rZ-8",citationBuilderCloseButton:"_2cxv7",spin:"_1PrXI"}},86068:e=>{e.exports={actions_hovered:"_26D5B",header:"_28Fzg",citationBuilderHeader:"_2oi8Z",draggableWrapper:"dL87W",draggable:"Hq-0P",headerActions:"_1wbQt",headerActionBtnProofitIcon:"_3EU94",headerActionBtnGoalsIcon:"_2E18U",logoscore_fadein:"_6a2eQ",fadein:"_140p0",logoscore_fadeout:"_31ZjI",fadeout:"_2oJRY",logo_score:"_2ZPbj",logoIcon:"XSeHJ",backIcon:"_2U1Dg",title:"_1Q_TG",headerContent:"_2wNC8",spin:"_3zLJC"}},83412:e=>{e.exports={dropdownContainer:"AIhYK"}},47661:e=>{e.exports={selectorButton:"_3jOE9",selectorButtonLabel:"_ovwb",sourceTypeLabel:"k80dp",dropdownContainer:"vSb5Z",styleButtonGroup:"_2VObs",styleButton:"wYzpD"}},75100:e=>{e.exports={settingsButtonMediumIcon:"_1PPTj",settingsButtonSmallIcon:"_20Pta",spin:"_2dlxE"}}}]);