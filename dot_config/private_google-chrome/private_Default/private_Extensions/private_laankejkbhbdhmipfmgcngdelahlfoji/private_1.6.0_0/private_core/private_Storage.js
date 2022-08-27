define(["core/Logger","core/ObjectUtils"],function(t,e){var n,i={LOCAL:1,SYNC:2,HTML5:3,map:null,cache:{},initAPI:function(t){n=t,n.mixin("Storage",{addOnChangeListener:this.addOnChangeListener.bind(this),init:this.init.bind(this),get:this.get.bind(this),getAll:this.getAll.bind(this),set:this.set.bind(this),merge:this.merge.bind(this),remove:this.remove.bind(this),setBucket:this.setBucket.bind(this),setHTML5:this.setHTML5.bind(this),getHTML5:this.getHTML5.bind(this),removeHTML5:this.removeHTML5.bind(this)})},init:function(t){var e=this;this.cache={},this.map=null,this.getSynced("storageMap",function(n){"undefined"!=typeof n?e.map=n:(e.map={},e.saveMap()),"function"==typeof t&&t()})},get:function(t,e,n){e="function"==typeof e?e:function(){},this.inCache(t)&&!n?e(this.getCached(t)):this.inSync(t)?this.getSynced(t,e):this.inHTML5(t)?e(this.getHTML5(t)):this.getLocal(t,e)},refresh:function(t,e){this.get(t,e,!0)},getAll:function(t,e){if(t="string"==typeof t?t.toUpperCase():t,"function"!=typeof e)throw new Error("[Storage.getAll()] callback must be a function");if(t)"SYNC"===t?n.Chrome.Storage.getSync(null,e):"LOCAL"===t?n.Chrome.Storage.getLocal(null,e):"HTML5"===t&&e(localStorage);else{var i={};n.Chrome.Storage.getSync(null,function(t){i.SYNC=t,n.Chrome.Storage.getLocal(null,function(t){i.LOCAL=t,i.HTML5=localStorage,e(i)})})}},set:function(t,e,n){e="function"==typeof e?e:function(){},n="string"==typeof n?n.toUpperCase():null;var i={},o={},c=!1,s=!1,r=!1,a=!1;for(var h in t)t.hasOwnProperty(h)&&(this.inSync(h)||"SYNC"===n?(i[h]=t[h],c=!0):this.inHTML5(h)||"HTML5"===n?this.setHTML5(h,t[h]):(o[h]=t[h],s=!0));c&&this.setSynced(i,function(){r=!0,s&&!a||e()}),s&&this.setLocal(o,function(){a=!0,c&&!r||e()}),c||s||e()},remove:function(t,e,n){e="function"==typeof e?e:function(){},this.inSync(t)||"SYNC"===n?this.removeSynced(t,e):this.inHTML5(t)||"HTML5"===n?(this.removeHTML5(t),e()):this.removeLocal(t,e),"undefined"!=typeof this.map[t]&&(delete this.map[t],this.saveMap())},merge:function(t,e,n,i){var o=this;"SYNC"===n?this.getSynced(t,function(n){o.getLocal(t,function(c){o.doMerge(t,e,c,n,i)})}):"LOCAL"===n&&this.getLocal(t,function(n){o.getSynced(t,function(c){o.doMerge(t,e,c,n,i)})})},doMerge:function(t,n,i,o,c){i=e.isObjLiteral(i)?i:{},o=e.isObjLiteral(o)?o:{},this.remove(t),this.setBucket(t,n,!0);var s={};s[t]=e.merge(i,o,!0),this.set(s,c)},setBucket:function(t,e,n){if(this.isArray(t))for(var i=0;i<t.length;i++)this.setBucket(t[i],e,n);else"string"==typeof t&&("string"==typeof e&&(e=e.toUpperCase()),e="undefined"!=typeof this[e]?e:"HTML5",this.map[t]=this[e],this.saveMap(),"HTML5"!==e&&n!==!0&&this.migrate(t,e))},saveMap:function(t){t=t||this.map,this.setSynced({storageMap:t})},migrate:function(t,e){var n=this;"SYNC"===e?this.getLocal(t,function(e){var i={};i[t]=e,n.setSynced(i),n.removeLocal(t)}):"LOCAL"===e&&this.getSynced(t,function(e){var i={};i[t]=e,n.setLocal(i),n.removeSynced(t)})},addOnChangeListener:function(t){t="function"==typeof t?t:function(){},n.Chrome.Storage.addListener("onChanged",t)},inCache:function(t){return"undefined"!=typeof this.cache[t]},inSync:function(t){return this.map[t]===this.SYNC},inLocal:function(t){return this.map[t]===this.LOCAL},inHTML5:function(t){return this.map[t]===this.HTML5},setCached:function(t){for(var e in t)t.hasOwnProperty(e)&&(this.cache[e]=t[e])},getCached:function(t){return this.cache[t]},removeCached:function(t){delete this.cache[t]},setSynced:function(t,e){e="function"==typeof e?e:function(){},this.setCached(t);for(var i in t)t.hasOwnProperty(i)&&this.setHTML5("sync_"+i,JSON.stringify(t[i]));n.Chrome.Storage.setSync(t,e)},getSynced:function(t,e){e="function"==typeof e?e:function(){};var i=this;n.Chrome.Storage.getSync(t,function(n){if("string"==typeof t){if("undefined"==typeof n){var o=i.getHTML5("sync_"+t);n={},n[t]=JSON.parse(o)||{}}i.setCached(n),e(n[t])}else e(n)})},removeSynced:function(t,e){e="function"==typeof e?e:function(){},this.removeCached(t),this.removeHTML5("sync_"+t),n.Chrome.Storage.removeSync(t,e)},setLocal:function(t,e){e="function"==typeof e?e:function(){},this.setCached(t),n.Chrome.Storage.setLocal(t,e)},getLocal:function(t,e){e="function"==typeof e?e:function(){};var i=this;n.Chrome.Storage.getLocal(t,function(n){if("string"==typeof t){n=n||{};var o=n[t];"undefined"!=typeof o&&null!==o||(o=i.getFromLocalStorageBackup(t));var c={};c[t]=o,i.setCached(c),e(o)}else e(n)})},getFromLocalStorageBackup:function(t){var e=null,n=localStorage.getItem(t);if("undefined"!=typeof n&&null!==n){try{e=JSON.parse(n)}catch(t){e=n}var i={};i[t]=e,this.setLocal(i)}return e},removeLocal:function(t,e){e="function"==typeof e?e:function(){},this.removeCached(t),n.Chrome.Storage.removeLocal(t,e)},setHTML5:function(t,e){var n={};n[t]=e,this.setCached(n),localStorage.setItem(t,e)},getHTML5:function(t){var e=localStorage.getItem(t),n={};return n[t]=e,this.setCached(n),e},removeHTML5:function(t){this.removeCached(t),localStorage.removeItem(t)},isArray:function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length}};return i});