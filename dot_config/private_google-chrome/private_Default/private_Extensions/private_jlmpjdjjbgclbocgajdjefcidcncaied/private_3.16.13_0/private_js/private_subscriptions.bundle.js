"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[841],{6744:(e,t,o)=>{function r(e){return null===e?"null":Array.isArray(e)?"array":typeof e}function n(e){return"object"===r(e)}function i(e,t){return e.length<124?e:t}o.r(t),o.d(t,{subscriptionClient:()=>d});var a,s;function c(e){if(!n(e))throw new Error(`Message is expected to be an object, but got ${r(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if("string"!=typeof e.type)throw new Error(`Message is expects the 'type' property to be a string, but got ${r(e.type)}`);switch(e.type){case s.ConnectionInit:case s.ConnectionAck:case s.Ping:case s.Pong:if("payload"in e&&!n(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or missing, but got "${e.payload}"`);break;case s.Subscribe:if("string"!=typeof e.id)throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${r(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!n(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${r(e.payload)}`);if("string"!=typeof e.payload.query)throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${r(e.payload.query)}`);if(null!=e.payload.variables&&!n(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${r(e.payload.variables)}`);if(null!=e.payload.operationName&&"string"!==r(e.payload.operationName))throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${r(e.payload.operationName)}`);if(null!=e.payload.extensions&&!n(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${r(e.payload.extensions)}`);break;case s.Next:if("string"!=typeof e.id)throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${r(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!n(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${r(e.payload)}`);break;case s.Error:if("string"!=typeof e.id)throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${r(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(t=e.payload,!(Array.isArray(t)&&t.length>0&&t.every((e=>"message"in e))))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break;case s.Complete:if("string"!=typeof e.id)throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${r(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break;default:throw new Error(`Invalid message 'type' property "${e.type}"`)}var t;return e}function p(e,t){return c(e),JSON.stringify(e,t)}function l(e){return n(e)&&"code"in e&&"reason"in e}!function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"}(a||(a={})),function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"}(s||(s={}));const d=function(e){const{url:t,connectionParams:o,lazy:r=!0,onNonLazyError:n=console.error,lazyCloseTimeout:d=0,keepAlive:y=0,disablePong:u,connectionAckWaitTimeout:g=0,retryAttempts:m=5,retryWait:f=async function(e){let t=1e3;for(let o=0;o<e;o++)t*=2;await new Promise((e=>setTimeout(e,t+Math.floor(2700*Math.random()+300))))},shouldRetry:b=l,isFatalConnectionProblem:w,on:h,webSocketImpl:x,generateID:E=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},jsonMessageReplacer:v,jsonMessageReviver:S}=e;let C;if(x){if(!("function"==typeof($=x)&&"constructor"in $&&"CLOSED"in $&&"CLOSING"in $&&"CONNECTING"in $&&"OPEN"in $))throw new Error("Invalid WebSocket implementation provided");C=x}else"undefined"!=typeof WebSocket?C=WebSocket:"undefined"!=typeof global?C=global.WebSocket||global.MozWebSocket:"undefined"!=typeof window&&(C=window.WebSocket||window.MozWebSocket);var $;if(!C)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const k=C,N=(()=>{const e=(()=>{const e={};return{on:(t,o)=>(e[t]=o,()=>{delete e[t]}),emit(t){var o;"id"in t&&(null===(o=e[t.id])||void 0===o||o.call(e,t))}}})(),t={connecting:(null==h?void 0:h.connecting)?[h.connecting]:[],opened:(null==h?void 0:h.opened)?[h.opened]:[],connected:(null==h?void 0:h.connected)?[h.connected]:[],ping:(null==h?void 0:h.ping)?[h.ping]:[],pong:(null==h?void 0:h.pong)?[h.pong]:[],message:(null==h?void 0:h.message)?[e.emit,h.message]:[e.emit],closed:(null==h?void 0:h.closed)?[h.closed]:[],error:(null==h?void 0:h.error)?[h.error]:[]};return{onMessage:e.on,on(e,o){const r=t[e];return r.push(o),()=>{r.splice(r.indexOf(o),1)}},emit(e,...o){for(const r of[...t[e]])r(...o)}}})();function I(e){const t=[N.on("error",(o=>{t.forEach((e=>e())),e(o)})),N.on("closed",(o=>{t.forEach((e=>e())),e(o)}))]}let T,A=0,P=!1,q=0,M=!1;async function O(){const[e,r]=await(null!=T?T:T=new Promise(((e,r)=>(async()=>{if(P){if(await f(q),!A)return T=void 0,r({code:1e3,reason:"All Subscriptions Gone"});q++}N.emit("connecting");const n=new k("function"==typeof t?await t():t,"graphql-transport-ws");let d,m;function b(){isFinite(y)&&y>0&&(clearTimeout(m),m=setTimeout((()=>{n.readyState===k.OPEN&&(n.send(p({type:s.Ping})),N.emit("ping",!1,void 0))}),y))}I((e=>{T=void 0,clearTimeout(d),clearTimeout(m),r(e),l(e)&&4499===e.code&&(n.close(4499,"Terminated"),n.onerror=null,n.onclose=null)})),n.onerror=e=>N.emit("error",e),n.onclose=e=>N.emit("closed",e),n.onopen=async()=>{try{N.emit("opened",n);const e="function"==typeof o?await o():o;if(n.readyState!==k.OPEN)return;n.send(p(e?{type:s.ConnectionInit,payload:e}:{type:s.ConnectionInit},v)),isFinite(g)&&g>0&&(d=setTimeout((()=>{n.close(a.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")}),g)),b()}catch(e){N.emit("error",e),n.close(a.InternalClientError,i(e instanceof Error?e.message:new Error(e).message,"Internal client error"))}};let w=!1;n.onmessage=({data:t})=>{try{const o=function(e,t){try{return c(e)}catch(o){if("string"!=typeof e)throw new Error("Only strings are parsable messages");return c(JSON.parse(e,t))}}(t,S);if(N.emit("message",o),"ping"===o.type||"pong"===o.type)return N.emit(o.type,!0,o.payload),void("pong"===o.type?b():u||(n.send(p(o.payload?{type:s.Pong,payload:o.payload}:{type:s.Pong})),N.emit("pong",!1,o.payload)));if(w)return;if(o.type!==s.ConnectionAck)throw new Error(`First message cannot be of type ${o.type}`);clearTimeout(d),w=!0,N.emit("connected",n,o.payload),P=!1,q=0,e([n,new Promise(((e,t)=>I(t)))])}catch(e){n.onmessage=null,N.emit("error",e),n.close(a.BadResponse,i(e instanceof Error?e.message:new Error(e).message,"Bad response"))}}})())));e.readyState===k.CLOSING&&await r;let n=()=>{};const m=new Promise((e=>n=e));return[e,n,Promise.race([m.then((()=>{if(!A){const t=()=>e.close(1e3,"Normal Closure");isFinite(d)&&d>0?setTimeout((()=>{A||e.readyState!==k.OPEN||t()}),d):t()}})),r])]}function R(e){if(l(e)&&(t=e.code,![1e3,1001,1006,1005,1012,1013,1013].includes(t)&&t>=1e3&&t<=1999||[a.InternalServerError,a.InternalClientError,a.BadRequest,a.BadResponse,a.Unauthorized,a.SubprotocolNotAcceptable,a.SubscriberAlreadyExists,a.TooManyInitialisationRequests].includes(e.code)))throw e;var t;if(M)return!1;if(l(e)&&1e3===e.code)return A>0;if(!m||q>=m)throw e;if(!b(e))throw e;if(null==w?void 0:w(e))throw e;return P=!0}return r||(async()=>{for(A++;;)try{const[,,e]=await O();await e}catch(e){try{if(!R(e))return}catch(e){return null==n?void 0:n(e)}}})(),{on:N.on,subscribe(e,t){const o=E();let r=!1,n=!1,i=()=>{A--,r=!0};return(async()=>{for(A++;;)try{const[a,c,l]=await O();if(r)return c();const d=N.onMessage(o,(e=>{switch(e.type){case s.Next:return void t.next(e.payload);case s.Error:return n=!0,r=!0,t.error(e.payload),void i();case s.Complete:return r=!0,void i()}}));return a.send(p({id:o,type:s.Subscribe,payload:e},v)),i=()=>{r||a.readyState!==k.OPEN||a.send(p({id:o,type:s.Complete},v)),A--,r=!0,c()},void await l.finally(d)}catch(e){if(!R(e))return}})().then((()=>{n||t.complete()})).catch((e=>{t.error(e)})),()=>{r||i()}},async dispose(){if(M=!0,T){const[e]=await T;e.close(1e3,"Normal Closure")}},terminate(){T&&N.emit("closed",{code:4499,reason:"Terminated",wasClean:!1})}}}({url:"wss://subs.daily.dev/graphql",lazy:!1})}}]);