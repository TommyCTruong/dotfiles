!function(e){var n,r;if("undefined"!=typeof chrome)r=chrome.runtime;else{if("undefined"==typeof browser)return;r=browser.runtime}n=function(e){return e&&"number"==typeof e.performanceType},r&&"function"==typeof r.sendMessage&&e&&"function"==typeof e.addEventListener&&e.addEventListener("message",function(e){if(n(e.data))try{r.sendMessage(e.data)}catch(e){e.toString&&console.error("performanceMessaging.js runtime.sendMessage error: "+e.toString())}})}(window);