(self.webpackChunk=self.webpackChunk||[]).push([[8813],{48643:(e,t,n)=>{n.d(t,{EJ:()=>F,T9:()=>T,l5:()=>P});var r,o=n(59312),i=n(27378),a=n(71249),s=n(40327),u=n(38983),p=n(5739),l=n(93508),c=n(77176),d=n(16118),h=n(32952),f=n(98403),v=n(44586),m=n(76974),_=n(24209),y=n(38062),b=n(50628),w=n(80900),E=n(17343),x=n(60797),g=n(69935),C=n(19751),k=n(5114),D=n(8125),P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._state=t.props.state.pipe(l.O(void 0),c.U((function(e,t){return{state:e,key:t}})),d.G(),c.U((function(e){var n=e[0],r=e[1],o=t.props.stateToClassMapper(n.state,r.state);return{prev:{key:n.key,state:n.state,view:A(o.prev)},next:{key:r.key,state:r.state,view:A(o.next)}}}))),t._elements=u.h.create(r.empty),t._done=new h.xQ,t._subs=[],t}return(0,o.ZT)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.children;this._subs.push(this._state.pipe(c.U((function(n){var o=n.prev,i=n.next,a=t;return void 0===t?r.empty:[(0,s.pipe)(o.state,k.fromNullable,k.map((function(t){return a({state:t,view:o.view,type:"prev",done:function(){return e._done.next("prev")}})})),k.chain(k.fromNullable),k.map((function(e){return{key:o.key,entry:e}}))),(0,s.pipe)(a({state:i.state,view:i.view,type:"next"}),k.fromNullable,k.map((function(e){return{key:i.key,entry:e}})))]}))).subscribe(f.wW(this._elements)),this._done.subscribe((function(t){"prev"===t&&e._elements.modify((function(e){e[0];var t=e[1];return[k.none,t]})),"next"===t&&e._elements.set(r.empty)})))},t.prototype.componentWillUnmount=function(){this._subs.forEach((function(e){return e.unsubscribe()})),this._subs=[]},t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,r=e.onMount,o=e.onMouseDown;return t?i.createElement(p.F.div,{className:n,mount:r,onMouseDown:o},this._elements.view(a.IX.compact).view((function(e){return e.map((function(e){return i.createElement(i.Fragment,{key:e.key},e.entry)}))}))):null},t}(i.Component),F=function(e){return{start:e,end:e}};function A(e){var t=e.start,n=e.end;return v.y.create((function(e){e.next(t);var r=requestAnimationFrame((function(){return requestAnimationFrame((function(){return e.next(n)}))}));return function(){return cancelAnimationFrame(r)}}))}!function(e){e.empty=[k.none,k.none]}(r||(r={}));var T=function(e){var t=e.content.pipe(c.U((function(t){return{className:e.classes.rendered,el:t,onTransitionEnd:D.Q1}})),c.U(k.some),l.O(k.none),d.G(),c.U((function(t){var n=t[0],r=t[1];return(0,s.pipe)(n,k.fold((function(){return k.map(m.of)(r)}),(function(t){return(0,s.pipe)(r,k.map((function(n){var r=new h.xQ;return _.T(m.of({className:e.classes.removing,el:t.el,onTransitionEnd:function(){return r.next()}}),y.S3(r.pipe(b.P()),w.H(e.timeout)).pipe(E.h(n)))})))})))})),x.oA,g.B(),C.shareReplay({refCount:!0,bufferSize:1}));return i.createElement(p.F.div,{className:t.pipe(c.U((function(e){return e.className}))),onTransitionEnd:t.pipe(c.U((function(e){return e.onTransitionEnd})))},t.pipe(c.U((function(e){return e.el}))))}},18813:(e,t,n)=>{n.d(t,{L:()=>R});var r=n(59312),o=n(27378),i=n(40327),a=n(38983),s=n(12187),u=n(5739),p=n(16118),l=n(66310),c=n(80900),d=n(17343),h=n(76974),f=n(95093),v=n(77176),m=n(28043),_=n(2834),y=n(38194),b=n(93508),w=n(598),E=n(2844),x=n(98403),g=n(24713),C=n(50628),k=n(32952),D=n(18208),P=n(19962),F=n(5114),A=n(22232),T=n(8125),S=n(48643),M=n(99094),N=n(33678),U=n(101),H=n(90845),B=n(67992),L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,r.ZT)(t,e),t}(S.l5),R=function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n._uuid=D.fg(12),n._initialState=!1,n._hovered=a.h.create(n._initialState),n._hidden=a.h.create(!n._initialState),n._listPosState=a.h.create({}),n._dropdownEl=null,n._subs=[],n._viewport=a.h.create(P.UL.empty),n._labelRef=o.createRef(),n.hovered=n._hovered.pipe(p.G(),l.w((function(e){var r=e[0];return e[1]?c.H(n.props.showDelay).pipe(d.h(!0)):r?c.H(void 0===n.props.closeDelay?t.defaultProps.closeDelay:n.props.closeDelay).pipe(d.h(!1)):h.of(!1)})),f.T(t._hoveredForce.pipe(v.U(F.exists((function(e){return e===n._uuid}))))),m.x(),_.b((function(e){return e&&t._hoveredForce.next(F.some(n._uuid))})),_.b((function(e){return e&&n._hidden.set(!1)})),y.B(),b.O(n._initialState)),n._handleClickForAppearanceHover=function(e){var r=e.target;if(!P.pK(r)&&!0!==n.props.dontCloseOnClickInside){var o=!P.q_(r,B.P.list);t._hoveredForce.next(o?F.some(n._uuid):F.none),n._hovered.set(o)}},n._handleMouseEnterForAppearanceHover=function(){n._hovered.set(!0)},n._handleClickForAppearanceClick=function(e,t){t&&!e.isTrusted||n._hovered.modify((function(e){return!e}))},n._handleMouseEnterForAppearanceClick=function(e){var r=e.target;P.q_(r,B.P.list)&&(t._hoveredForce.next(F.some(n._uuid)),n._hovered.set(!0))},n._handleLabelKeyDownForAppearance=function(e){"Enter"!==e.key&&" "!==e.key||(n._hovered.set(!0),e.preventDefault())},n}return(0,r.ZT)(t,e),t.prototype._getHAlign=function(e){switch(e){case"left":case"auto":return{left:"0"};case"right":return{right:"0"};case"center":var t=this._dropdownEl?this._dropdownEl.offsetWidth:0;return{right:"50%",marginRight:"-".concat(t/2,"px")};default:return(0,A.vE)(e)}},t.prototype._getVAlign=function(e){switch(e){case"top":return{bottom:"100%"};case"bottom":case"auto":return{top:"100%"};default:return(0,A.vE)(e)}},t.prototype.calcDropdownPosition=function(){var e=this,t=this.props.align,n=this.props.vAlign;this._listPosState.set((0,r.pi)((0,r.pi)({},this._getHAlign(t)),this._getVAlign(n)));var o="auto"===t,i="auto"===n;(o||i)&&requestAnimationFrame((function(){if(e._dropdownEl){var a=e._viewport.get(),s=e._dropdownEl.getBoundingClientRect();e._listPosState.set((0,r.pi)((0,r.pi)({},e._getHAlign(o?a.right<s.right?"right":"left":t)),e._getVAlign(i?a.bottom<s.bottom?"top":"bottom":n)))}}))},t.prototype.componentDidMount=function(){var e=this;this._subs.push(this.hovered.pipe(_.b((function(t){e.props.onVisibilityChange&&e.props.onVisibilityChange(t)})),w.c((0,i.pipe)(F.fromNullable(this.props.customPosition),F.fold((function(){return h.of(F.none)}),(function(e){var t=e.top,n=e.left;return E.aj(x.Dx(t),x.Dx(n)).pipe(v.U(F.some))}))))).subscribe(F.fold((function(){return e.calcDropdownPosition()}),(function(t){var n=t[0],r=t[1];return e._listPosState.set({top:n,left:r})}))),this.context.pipe(g.j("rect")).subscribe(x.wW(this._viewport))),this.props.forceHide&&this._subs.push(this._hidden.pipe(l.w(x.wX(this.props.forceHide.pipe(C.P())))).subscribe((function(){return e._hidden.set(!0)})))},t.prototype.componentWillUnmount=function(){this._subs.forEach((function(e){return e.unsubscribe()})),this._subs=[]},t.prototype.componentWillReciveProps=function(){this.calcDropdownPosition()},t.prototype.mapStateToClass=function(e,t){var n={start:"",end:""};return t?{prev:n,next:{start:B.P.transparent,end:""}}:{prev:{start:"",end:B.P.transparent},next:n}},t.prototype._behavior=function(e){var t=this;return"mouseClick"===this.props.appearanceBehavior?{onClickCapture:function(n){return t._handleClickForAppearanceClick(n,e)},onMouseEnter:this._handleMouseEnterForAppearanceClick,onMouseLeave:function(){return t._hovered.set(t._initialState)}}:{onClickCapture:this._handleClickForAppearanceHover,onMouseEnter:this._handleMouseEnterForAppearanceHover,onMouseLeave:function(){return t._hovered.set(t._initialState)}}},t.prototype._labelBehavior=function(){return{onKeyDown:this._handleLabelKeyDownForAppearance}},t.prototype._attachDropdownElementBehavior=function(){var e,t=this;null===(e=this._dropdownEl)||void 0===e||e.addEventListener("keydown",(function(e){var n;"Escape"===e.key&&(t._hovered.set(t._initialState),e.preventDefault(),e.stopPropagation(),(null===(n=t._labelRef.current)||void 0===n?void 0:n.firstChild)&&setTimeout((function(){var e,n;return null===(n=null===(e=t._labelRef.current)||void 0===e?void 0:e.firstChild)||void 0===n?void 0:n.focus()}),0))}))},t.prototype._handleDropdownElementMount=function(e){this._dropdownEl=e,this._attachDropdownElementBehavior()},t.prototype.render=function(){var e=this,t=this.props,n=t.label,i=t.id,a=t.name,p=t.theme,l=void 0===p?{}:p,c=Boolean(i)?"label-".concat(a,"-").concat(i):"label-".concat(a);return o.createElement(N.a.Context.Consumer,null,(function(t){return o.createElement(M.f.Context.Consumer,null,(function(i){return o.createElement(M.f.Context.Provider,{value:M.f.withValue(i,{hovered:e._hovered})},o.createElement("div",(0,r.pi)({},(0,s.Sh)(B.P.wrapper,l.dropdownContainer),e._behavior(t.has(N.a.Flag.onlyTrustedEvents)),{"aria-haspopup":"listbox"}),o.createElement("label",(0,r.pi)({id:c},e._labelBehavior(),{ref:e._labelRef}),n),o.createElement(L,{state:e.hovered,stateToClassMapper:e.mapStateToClass},(function(t){return t.state?o.createElement(u.F.div,null,e._hidden.view((function(n){return o.createElement(W,(0,r.pi)({key:"list",name:e.props.name,onTransitionEnd:"prev"===t.type?function(){return e._hidden.set(!0)}:T.Q1},(0,s.Sh)(l.dropdownList,t.view),{mount:e._handleDropdownElementMount.bind(e),style:e._listPosState,hidden:n,ariaLabelledBy:c,activeDescendantId:e.props.activeDescendantId}),e.props.children)}))):null}))))}))}))},t.defaultProps={align:"auto",vAlign:"auto",showDelay:500,closeDelay:500,appearanceBehavior:"mouseHover"},t.Delimiter=function(){return o.createElement("div",{className:B.P.delimiter})},t._hoveredForce=new k.xQ,t.contextType=U.l.Context,t}(o.PureComponent),W=function(e){var t=H.P.useElWatcher(),n=t.ref,i=t.onMount;return H.P.FocusTrap.useFocusTrap(n),o.createElement(M.f.Context.Consumer,null,(function(t){var n=M.f.emptyWithName("".concat(void 0!==t.name?"".concat(t.name,"/"):"","dropdown-").concat(e.name));return o.createElement(M.f.Context.Provider,{value:n},o.createElement(u.F.div,(0,r.pi)({},(0,s.Sh)(e.className,!0===e.hidden?B.P.hidden:B.P.list),{style:e.style,mount:function(t){i(t),void 0!==e.mount&&e.mount(t)},role:"listbox","aria-labelledby":e.ariaLabelledBy,"data-role":"dropdown-list","data-name":"dropdown-"+e.name,"aria-activedescendant":e.activeDescendantId,onTransitionEnd:e.onTransitionEnd}),e.children))}))}},67992:(e,t,n)=>{n.d(t,{P:()=>u});var r=n(44060),o=n(89894),i=n(32096),a={position:"absolute",zIndex:i.VN,display:"flex",flexDirection:"column",margin:"".concat(o.ux.rem(.5)," 0"),padding:"".concat(o.ux.rem(.5)," 0"),minWidth:o.ux.percent(100),borderRadius:o.ux.rem(i.Jr),background:r.Il.CoreNeutral0,boxShadow:r.uc.Z200,opacity:1,transition:"opacity .2s"},s={margin:o.ux.rem(.5),height:o.ux.px(1),backgroundColor:r.Il.CoreNeutral20},u={wrapper:o.ux.style({position:"relative"}),list:o.ux.style(a),transparent:o.ux.style({opacity:0}),hidden:o.ux.style({display:"none"}),delimiter:o.ux.style(s)}}}]);