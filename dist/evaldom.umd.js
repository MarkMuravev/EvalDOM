(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.$ = {}));
})(this, (function (exports) { 'use strict';

    const DOM = (() => {
        const evaluate = () => {
            if (window && window.document) {
                const result = document.evaluate("//*[contains(text(), '{{') and contains(text(), '}}')]", document, null, XPathResult.ANY_TYPE, null);
                const nodes = [];
                while ((node = result.iterateNext())) nodes.push(node);

                nodes.forEach(node => {
                    const html = node.outerHTML;
                    const expression = html.substring(html.indexOf('{{'), html.indexOf('}}') + 2);
                    const code = expression.substring(expression.indexOf('{{') + 2, expression.indexOf('}}'));
                    node.outerHTML = html.replace(expression, eval(code));
                });
            }
        };

        return { evaluate }
    })();

    window.document.addEventListener("DOMContentLoaded", () => DOM.evaluate());

    exports.default = DOM;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=evaldom.umd.js.map
