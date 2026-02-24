/**
 * DOM evaluator for processing templating expressions in HTML
 */
declare const DOM: {
    /**
     * Evaluates and replaces templating expressions in the DOM
     * 
     * This function searches for HTML elements containing templating expressions
     * in the format `{{ expression }}` and replaces them with the evaluated result
     * of the expression. The evaluation is performed using JavaScript's `eval()` function.
     * 
     * @returns {void}
     */
    evaluate(): void;
};

export default DOM;