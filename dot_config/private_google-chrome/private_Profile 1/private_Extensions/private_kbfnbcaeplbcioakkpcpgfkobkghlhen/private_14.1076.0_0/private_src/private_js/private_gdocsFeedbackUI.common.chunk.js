(self.webpackChunk=self.webpackChunk||[]).push([[4628],{51897:(e,t,a)=>{var o=a(25682),n="chrome-extension://__MSG_@@extension_id__/",r="moz-extension://__MSG_@@extension_id__/",l="safari-web-extension://__MSG_@@extension_id__/",c=self.GR_RESOURCE_ROOT||n,i=self.GR_RESOURCE_ROOT||r,s=self.GR_RESOURCE_ROOT||l;e.exports={__css:o.toString().replace(new RegExp(n,"g"),c).replace(new RegExp(r,"g"),i).replace(new RegExp(l,"g"),s),...o.locals}},95115:(e,t,a)=>{a.r(t),a.d(t,{GdocsFeedbackUI:()=>c});var o=a(27378),n=a(19106),r=a(67166),l=a(53844);class c extends o.Component{constructor(){super(...arguments),this._close=()=>this.props.close(),this._onSubmitFeedback=e=>{n.J.feedbackSentButtonClick(e.text,"gdocs",e.score)}}render(){return o.createElement(r.X,{mainContent:o.createElement(l.q5,{title:o.createElement("span",null,"How do you like ",o.createElement("br",null)," Grammarly for Google Docs?"),onClose:this._close,onSubmit:this._onSubmitFeedback,style:{height:528},withScore:!0}),onClose:this._close})}}},31944:(e,t,a)=>{a.d(t,{J:()=>c});var o=a(57050),n=a(27378),r=a(12187),l=a(22536);const c=({onChange:e,labelId:t,className:a,checkboxClassName:c,labelClassName:i,checked:s,children:d,disabled:m,dataGrammarlyPart:u="ui-kit-checkbox",tabIndex:b=0})=>{const[f,k]=n.useState(null!=s&&s);n.useEffect((()=>{k(Boolean(s))}),[s]);const h=t=>{t.preventDefault(),t.stopPropagation(),k(!f),null==e||e(!f)};return n.createElement("div",{"data-grammarly-part":u,...(0,r.Sh)(l.checkboxContainer,a)},n.createElement("div",{...(0,r.Sh)(l.checkbox,c,f?l.checkboxChecked:null),role:"checkbox","aria-checked":f,tabIndex:b,"aria-labelledby":t,onKeyDown:e=>{" "===e.key&&h(e)},onClick:m?o.Q1:h},f?n.createElement("div",{className:l.checkboxCheckmark}):null),n.createElement("label",{id:t,onClick:h,className:i},d))}},84488:(e,t,a)=>{a.d(t,{G:()=>r});var o=a(27378),n=a(31542);const r=({children:e,style:t,dataGrammarlyPart:a="ui-kit-iframe",...r})=>{const[l,c]=o.useState(null),i=o.useCallback((e=>{var t,a;let o=null;"contentDocument"in e.target&&(o=null!==(a=null===(t=e.target.contentDocument)||void 0===t?void 0:t.body)&&void 0!==a?a:null),c(o),o&&(o.style.margin="0",o.style.height="100vh")}),[]);return o.createElement("iframe",{...r,style:{border:"none",...t},onLoad:i,srcDoc:"<html><body></body></html>","data-grammarly-part":a},l&&(0,n.createPortal)(e,l))}},47422:(e,t,a)=>{a.d(t,{z:()=>i});var o=a(27378),n=a(84488),r=a(68370),l=a(51897),c=a.n(l);const i=({placeholder:e,onChange:t,ariaLabel:a,className:l})=>{const[i,s]=o.useState("");return o.useEffect((()=>{t(i)}),[i]),o.createElement(n.G,{dataGrammarlyPart:"ui-kit-textbox",className:l,style:{width:"100%",height:"100%"}},o.createElement(r.b,null,c().__css),o.createElement("div",{role:"textbox",className:c().textBox,contentEditable:!0,onInput:e=>s(e.target.innerText),"data-placeholder":e,"aria-placeholder":e,"aria-label":a}))}},53844:(e,t,a)=>{a.d(t,{q5:()=>f,dK:()=>b});var o=a(27378),n=a(12187),r=a(21420);const l=({options:e,onChange:t=(()=>null),ariaLabel:a,className:l})=>{const c=[],[i,s]=o.useState(null);o.useEffect((()=>{var a;null!==i&&(null===(a=c[i])||void 0===a||a.focus()),t(null!==i?e[i].value:null)}),[i]);const d=null!==i?e[i]:null;return o.createElement("div",{"data-grammarly-part":"ui-kit-radio-group",className:l},o.createElement("div",{className:r.radioGroup,role:"radiogroup","aria-label":a,onKeyDown:t=>{if(" "!==t.key||d){if("ArrowRight"===t.key||"ArrowDown"===t.key){t.preventDefault(),t.stopPropagation();s(((i||0)+1)%e.length)}else if("ArrowLeft"===t.key||"ArrowUp"===t.key){t.preventDefault(),t.stopPropagation();const a=(i||0)-1;s(a<0?e.length-1:a)}}else t.preventDefault(),t.stopPropagation(),s(0)}},e.map(((e,t)=>{const a=(null==d?void 0:d.value)===e.value,l=0===t;return o.createElement("div",{key:e.value,...(0,n.Sh)(r.radioGroupOption,a?r.radioGroupOptionSelected:null),role:"radio",tabIndex:a||l&&!d?0:-1,"aria-checked":a,onClick:e=>{e.preventDefault(),e.stopPropagation(),s(t)},ref:e=>c.push(e)},e.render())}))))};var c,i=a(24606),s=a(47422),d=a(31944),m=a(51217),u=a(44544);function b(e){return"score"in e}!function(e){e.bad="bad",e.ok="ok",e.good="good"}(c||(c={}));const f=({hideLogo:e=!1,align:t="center",fixSubmitButtonOverflowBottomPadding:a=!1,...r})=>{var b;const f=[c.bad,c.ok,c.good],[k,h]=o.useState(null),[p,g]=o.useState(""),[x,v]=o.useState(!1),[S,F]=o.useState(!1);let _;return _=S&&!1!==r.showPostSubmitScreen?o.createElement("div",{"data-grammarly-part":"surveys-feedback-form-thank-you",...(0,n.Sh)(m.feedbackFormContainer,m.feedbackFormContainerAlignCenter)},o.createElement("div",{className:m.feedbackFormSuccessMessageTextContainer},o.createElement("div",{className:m.feedbackFormSuccessMessageIcon}),o.createElement("div",{className:m.feedbackFormSuccessMessageTitle},"Thank you!"),o.createElement("div",{className:m.feedbackFormSuccessMessageSubtitle},"Your feedback helps us improve.")),o.createElement(i.z,{className:m.feedbackFormSubmitButton,kind:"success",type:"submit",onClick:r.onClose},"Done"),a?o.createElement("div",{className:m.feedbackFormSubmitButtonFixOverflowBottomPadding},o.createElement("div",{className:m.feedbackFormSubmitButtonFixOverflowBottomPaddingChild})):null):o.createElement("div",{"data-grammarly-part":"surveys-feedback-form-fields",...(0,n.Sh)(m.feedbackFormContainer,"center"===t?m.feedbackFormContainerAlignCenter:null)},o.createElement("div",{className:m.feedbackFormFields},e?null:o.createElement("div",{className:m.feedbackFormLogo}),r.hideTitle?null:o.createElement("div",{...(0,n.Sh)(m.feedbackFormTitle,r.compactDisplay?m.compact:null)},r.title||o.createElement("span",null,"How do you like ",o.createElement("br",null)," Grammarly?")),r.withScore?o.createElement(o.Fragment,null,o.createElement(l,{ariaLabel:"Feedback Score",options:f.map((e=>({value:e,render(){let t,a;return e===c.bad?(t=u.feedbackFormOptionIconDisheartening,a="I dislike it"):e===c.ok?(t=u.feedbackFormOptionIconNeutral,a="It’s OK"):(t=t=u.feedbackFormOptionIconSmiling,a="I like it"),o.createElement("div",{className:u.feedbackFormOption},o.createElement("div",{...(0,n.Sh)(u.feedbackFormOptionIcon,t)}),o.createElement("div",null,a))}}))),onChange:h,...(0,n.Sh)(m.feedbackFormScore,r.compactDisplay?m.compact:null)}),r.hideTextBoxTitle?null:o.createElement("div",{className:m.feedbackFormTextBoxTitle},"Anything we can improve?")):null,o.createElement(s.z,{onChange:g,placeholder:r.placeholderText||"Your thoughts here",ariaLabel:"Feedback Text",...(0,n.Sh)(m.feedbackFormTextBox,r.compactDisplay?m.compact:null)}),r.domain?o.createElement(o.Fragment,null,r.hideDomainHelpText?null:o.createElement("div",{className:m.feedbackFormShareDomainTitle},"Help improve Grammarly by sharing the domain you’re on:"),o.createElement(d.J,{labelId:"feedback-form-share-domain-checkbox",onChange:v,className:m.feedbackFormShareDomainCheckbox},"Include the domain ",o.createElement("b",null,r.domain)," with my feedback")):null),o.createElement(i.z,{className:m.feedbackFormSubmitButton,kind:null!==(b=r.submitButtonKind)&&void 0!==b?b:"success",type:"submit",disabled:r.withScore?!k:!p,onClick:()=>{var e,t;r.withScore&&k?(null===(e=r.onSubmit)||void 0===e||e.call(r,{score:k,text:p,domain:x?r.domain:void 0}),F(!0)):!r.withScore&&p&&(null===(t=r.onSubmit)||void 0===t||t.call(r,{text:p,domain:x?r.domain:void 0}),F(!0))}},"Submit"),a?o.createElement("div",{className:m.feedbackFormSubmitButtonFixOverflowBottomPadding},o.createElement("div",{className:m.feedbackFormSubmitButtonFixOverflowBottomPaddingChild})):null),o.createElement("div",{style:r.style,"data-grammarly-part":"surveys-feedback-form"},_)}},25682:(e,t,a)=>{var o=a(93476)((function(e){return e[1]}));o.push([e.id,"._380Y1-textBox{font-family:grInter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._380Y1-textBox:empty:before{font-feature-settings:'ss03' on;font-family:grInter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}",""]),o.locals={textBox:"_380Y1-textBox"},e.exports=o},93476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=e(t);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(n[l]=!0)}for(var c=0;c<e.length;c++){var i=[].concat(e[c]);o&&n[i[0]]||(a&&(i[2]?i[2]="".concat(a," and ").concat(i[2]):i[2]=a),t.push(i))}},t}},22536:e=>{e.exports={checkboxContainer:"_3bj_g",checkbox:"xrB8R",checkboxChecked:"Uhddy",checkboxCheckmark:"_1qI2g",spin:"_3S_a3"}},21420:e=>{e.exports={radioGroup:"_3jZFB",radioGroupOption:"_1Boe7",radioGroupOptionSelected:"_37tnK"}},51217:e=>{e.exports={feedbackFormContainer:"_1M-GI",feedbackFormContainerAlignCenter:"_3QNrK",feedbackFormFields:"Jg_OY",feedbackFormTitle:"nPjzw",feedbackFormTextBoxTitle:"_2yUbL",feedbackFormLogo:"_2C-d7",compact:"_1wDKK",feedbackFormScore:"_3AmBq",feedbackFormTextBox:"FO2oU",feedbackFormShareDomainTitle:"_2UXTO",feedbackFormShareDomainCheckbox:"_3mSXM",feedbackFormSubmitButton:"_32xYR",feedbackFormSubmitButtonFixOverflowBottomPadding:"IJDSA",feedbackFormSubmitButtonFixOverflowBottomPaddingChild:"_3d5Tf",feedbackFormSuccessMessageTextContainer:"_2JO6Z",feedbackFormSuccessMessageIcon:"oVxds",feedbackFormSuccessMessageTitle:"_1MdvM",feedbackFormSuccessMessageSubtitle:"_1EKkw",spin:"_2ycFE"}},44544:e=>{e.exports={feedbackFormOption:"_9K_Q8",feedbackFormOptionIcon:"_259oL",feedbackFormOptionIconDisheartening:"_3NJTM",feedbackFormOptionIconNeutral:"i-5N8",feedbackFormOptionIconSmiling:"_1Dxi9",spin:"_2elyX"}}}]);