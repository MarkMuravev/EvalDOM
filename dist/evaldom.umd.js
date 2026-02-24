(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.$ = {}));
})(this, (function (exports) { 'use strict';

    const DOM = (() => {
        const nodes = [];
        const evaluate = () => {
            if (window && window.document) {
                const result = window.document.evaluate("//*[contains(text(), '{{') and contains(text(), '}}')]", document, null, XPathResult.ANY_TYPE, null);
                let node = null;
                while ((node = result.iterateNext())) {
                    const html = String(node.outerHTML);
                    const expression = html.substring(html.indexOf('{{'), html.indexOf('}}') + 2);
                    const code = expression.substring(expression.indexOf('{{') + 2, expression.indexOf('}}'));
                    const data = html.split(expression);
                    nodes.push({ current: node, html: data, code });
                }

                nodes.forEach((node) => {
                    const htmlString = node.html[0] + eval(node.code) + node.html[1];
                    const updated = new DOMParser().parseFromString(htmlString, 'text/html').body.firstChild;
                    node.current.replaceWith(updated);
                    node.current = updated;
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
