if(!window.loaded){var onMessageHandler=function(a,b,c){"getPosition"==a.msg&&(a=getElementPositionAt(a.x,a.y))&&c(a)},getElementPositionAt=function(a,b){return(a=getElementAt(a,b,0))?getPosition(a):null},getElementAt=function(a,b,c){var d=document.elementFromPoint(a,b);if(!d||c>MAX_ELEMENT_DEPTH)return d;var e=d.getBoundingClientRect();if(e.width>=MIN_SIZE&&e.height>=MIN_SIZE)return d;e=d.style.pointerEvents;d.style.pointerEvents="none";a=getElementAt(a,b,c+1);d.style.pointerEvents=e;return a},getPosition=
function(a){a=a.getBoundingClientRect();var b=-Math.min(0,a.left),c=-Math.min(0,a.top);return{x:a.left+b,y:a.top+c,width:a.width-b,height:a.height-c}};window.loaded=!0;var MIN_SIZE=24,MAX_ELEMENT_DEPTH=10;chrome.extension.onMessage.addListener(onMessageHandler)};
