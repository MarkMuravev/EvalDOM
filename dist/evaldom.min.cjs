'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// @ts-nocheck
const DOM=(()=>{const evaluate=()=>{if(window&&window.document){const result=document.evaluate("//*[contains(text(), '{{') and contains(text(), '}}')]",document,null,XPathResult.ANY_TYPE,null),nodes=[];for(;node=result.iterateNext();)nodes.push(node);nodes.forEach(node=>{const html=node.outerHTML,expression=html.substring(html.indexOf("{{"),html.indexOf("}}")+2),code=expression.substring(expression.indexOf("{{")+2,expression.indexOf("}}"));node.outerHTML=html.replace(expression,eval(code));});}};return {evaluate:evaluate}})();window.document.addEventListener("DOMContentLoaded",()=>DOM.evaluate());

exports.default = DOM;
//# sourceMappingURL=evaldom.min.cjs.map
