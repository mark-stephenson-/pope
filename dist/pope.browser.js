!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.pope={})}(this,function(e){"use strict";function n(e,n){if(function(e){return null!==e&&"object"==typeof e}(e)||"string"!=typeof n)return e;for(var r=n.split("."),t=0;t<r.length;t++){var o=r[t];if(null===(e=e.hasOwnProperty(o)?e[o]:null))break}return e}e.pope=function(e,r,t){t=t||{skipUndefined:!1,throwOnUndefined:!1};for(var o,i=/{{2}(.+?)}{2}/g,f=e;null!==(o=i.exec(e));){var p=o[1].trim();if(p){var u=n(r,p);if(void 0!==u&&null!==u)f=f.replace(o[0],u);else{if(t.throwOnUndefined){var d=new Error("Missing value for "+o[0]);throw d.key=p,d.code="E_MISSING_KEY",d}t.skipUndefined||(f=f.replace(o[0],""))}}}return f},e.prop=n,Object.defineProperty(e,"__esModule",{value:!0})});
