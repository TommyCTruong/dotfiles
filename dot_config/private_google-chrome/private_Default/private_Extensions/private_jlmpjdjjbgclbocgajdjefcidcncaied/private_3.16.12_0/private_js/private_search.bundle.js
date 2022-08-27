"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[464],{9283:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(6484),o=n.n(r),u=n(5776),l=n(5152),a=n.n(l),i=n(8767),s=n(8687),c=n.n(s),f=n(293);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,u=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=n(562),g=n(7291);const p=s.gql`
  query SearchPostSuggestions($query: String!) {
    searchPostSuggestions(query: $query) {
      hits {
        title
      }
    }
  }
`;var v=n(9647),m=n(1437);function S(e,t,n,r,o,u,l){try{var a=e[u](l),i=a.value}catch(e){return void n(e)}a.done?t(i):Promise.resolve(i).then(r,o)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,u=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const I=a()((()=>Promise.all([n.e(856),n.e(748)]).then(n.bind(n,2748))),{ssr:!1}),k={searchPostSuggestions:p,searchBookmarksSuggestions:v.gr,searchReadingHistorySuggestions:m.nr};function x(e){let t=e.initialQuery,n=e.autoFocus,r=void 0===n||n,l=e.placeholder,a=e.onSubmitQuery,s=e.suggestionType,y=void 0===s?"searchPostSuggestions":s;const p=(0,u.useRef)(),v=b((0,u.useState)(),2),m=v[0],w=v[1],x=b((0,u.useState)(),2),A=x[0],C=x[1],E=b((0,u.useState)(null),2),q=E[0],P=E[1],j=b((0,u.useState)([]),2),O=j[0],$=j[1],D=k[y],B=(0,i.useQuery)([y,A],(()=>c()(`${h.J}/graphql`,D,{query:A})),{enabled:!!A}),F=B.data,K=B.isLoading;(0,u.useEffect)((()=>{m||w(t)}),[t]);const Q=()=>P(null),R=()=>{if(q)return;const e=p.current.getBoundingClientRect(),t=e.left,n=e.bottom,r=e.width;P({x:t,y:n+window.scrollY,width:r})};(0,u.useEffect)((()=>{var e,t,n;K||(null!=O&&O.length||null==F||null===(e=F[y])||void 0===e||!e.hits.length||R(),$(null!==(t=null==F||null===(n=F[y])||void 0===n?void 0:n.hits.map((e=>e.title)))&&void 0!==t?t:[]))}),[F,K]);const T=function(){var e,t=(e=o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null==t||null===(n=t.replace)||void 0===n?void 0:n.call(t,/<(\/?)strong>/g,""),e.next=3,a(r||A);case 3:r&&w(r),Q();case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function l(e){S(u,r,o,l,a,"next",e)}function a(e){S(u,r,o,l,a,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}(),U=function(e,t){const n=d((0,u.useState)(-1),2),r=n[0],o=n[1];return(0,u.useEffect)((()=>{o(-1)}),[e]),{selectedItemIndex:r,onKeyDown:n=>{if(40===n.keyCode||38===n.keyCode){n.preventDefault();const t=e.length+1;if(r>-1){const e=40===n.keyCode?1:-1;o(((r+e)%t+t)%t)}else o(40===n.keyCode?0:t-1)}else 13===n.keyCode&&t(r>-1&&e[r])}}}(O,T),M=U.selectedItemIndex,z=U.onKeyDown,H=b((0,g.Z)((e=>C(e)),100),1)[0];(0,u.useEffect)((()=>{var e;r&&(null===(e=p.current)||void 0===e||e.querySelector("input").focus())}),[p,r]);const J=!!q&&!!O.length;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.U,{className:"flex-1 compact",inputId:"posts-search",fieldSize:"medium",placeholder:l,ref:p,value:m,valueChanged:e=>{if(!e.length)return Q(),void C("");e&&e!==t&&H(e),null===q&&R()},onKeyDown:z,onBlur:()=>{null!=A&&A.length&&Q()},onFocus:()=>(null==O?void 0:O.length)&&R(),"aria-haspopup":"true","aria-expanded":J}),u.default.createElement(I,{placement:q,items:O,focusedItemIndex:M,onItemClick:T,isOpen:J}))}}}]);