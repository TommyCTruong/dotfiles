"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[748],{2748:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var l=n(5776),a=n(4184),o=n.n(a),c=n(7856),u=n.n(c),s=n(797);const i=e=>e.preventDefault();function r(e){var t;let n=e.placement,a=e.focusedItemIndex,c=e.items,r=e.onItemClick,d=e.isOpen;const m=(0,l.useRef)(),f=(0,l.useMemo)((()=>c.map(((e,t)=>({__html:m.current.sanitize(e),index:t})))),[c]);return(0,l.useEffect)((()=>{m.current=u()(window)}),[]),(0,l.createPortal)(l.default.createElement("div",{role:"menu",className:"top-full mt-1 react-contexify menu-secondary",style:{position:"absolute",top:null==n?void 0:n.y,left:null==n?void 0:n.x,opacity:d?1:0,width:null!==(t=null==n?void 0:n.width)&&void 0!==t?t:0,transform:"none"}},f.map(((e,t)=>l.default.createElement("div",{className:o()({focus:t===a},"react-contexify__item"),key:e.index,onClick:()=>r(c[t]),onMouseDown:i},l.default.createElement("div",{className:"react-contexify__item__content"},l.default.createElement(s.Z,null),l.default.createElement("span",{dangerouslySetInnerHTML:e})))))),document.body)}}}]);