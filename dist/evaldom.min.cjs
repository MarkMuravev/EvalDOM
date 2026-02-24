'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// @ts-nocheck
const DOM=(()=>{const nodes=[],evaluate=()=>{if(window&&window.document){const result=window.document.evaluate("//*[contains(text(), '{{') and contains(text(), '}}')]",document,null,XPathResult.ANY_TYPE,null);let node=null;for(;node=result.iterateNext();){const e=String(node.outerHTML),t=e.substring(e.indexOf("{{"),e.indexOf("}}")+2),n=t.substring(t.indexOf("{{")+2,t.indexOf("}}")),d=e.split(t);nodes.push({current:node,html:d,code:n});}nodes.forEach(node=>{const htmlString=node.html[0]+eval(node.code)+node.html[1],updated=(new DOMParser).parseFromString(htmlString,"text/html").body.firstChild;node.current.replaceWith(updated),node.current=updated;});}};return {evaluate:evaluate}})();"undefined"!=typeof window&&(window.DOM=DOM,window.document.addEventListener("DOMContentLoaded",()=>DOM.evaluate()));

exports.default = DOM;
//# sourceMappingURL=evaldom.min.cjs.map
