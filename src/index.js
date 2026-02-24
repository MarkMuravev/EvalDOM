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
    }

    return { evaluate }
})();

window.document.addEventListener("DOMContentLoaded", () => DOM.evaluate());
export default DOM;