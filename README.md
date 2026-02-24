
# EvalDOM

EvalDOM is a lightweight JavaScript library that enables dynamic content evaluation within HTML documents using XPath. It automatically identifies and evaluates expressions enclosed in `{{ }}` markers, replacing them with the results of JavaScript code execution.

## Features

- **XPath-based Node Selection**: Uses XPath to locate nodes containing expressions.
- **Dynamic Content Evaluation**: Evaluates JavaScript expressions within `{{ }}` markers.
- **Automatic Replacement**: Replaces expression markers with evaluated results in the DOM.
- **Lightweight**: Minimal overhead with no external dependencies.
- **Real-time Language Translation**: Perfect for organizing real-time translation of DOM element labels into various languages using predefined templates.
- **Runtime Execution**: Can be called manually via `DOM.evaluate()` after page loading for dynamic content updates.
- **Multiple Import Formats**: Supports ES Module, CommonJS, and UMD formats.

## Installation

### As a Script Tag

Include the script in your HTML document:

```html
<script type="module" src="./dist/evaldom.esm.js"></script>
```

### As an ES Module

```javascript
import DOM from './dist/evaldom.esm.js';
// or
import { evaluate } from './dist/evaldom.esm.js';
```

### Via NPM

```bash
npm install evaldom
```

Then import in your JavaScript (with bundler):

```javascript
import DOM from 'evaldom';
// or
import { evaluate } from 'evaldom';
```

... or import in your JavaScript (without bundler):

```js
import DOM from './node_modules/evaldom/dist/evaldom.esm.js';
// or
import { evaluate } from './node_modules/evaldom/dist/evaldom.esm.js';
```

### As UMD (Browser Global)

```html
<script src="./dist/evaldom.umd.js"></script>
<script>
  // Access via global variable DOM
  DOM.evaluate();
</script>
```

## Usage

Place expressions in your HTML using the `{{ }}` syntax. EvalDOM will automatically evaluate and replace them:

```html
<p>Result: {{ 2 + 2 }}</p>
<p>Current time: {{ new Date().toLocaleString() }}</p>
```

## Practical Use Cases

### 1. **Real-time Language Translation**

```html
<p>{{ translations[language].welcome }}</p>
<p>{{ translations[language].greeting }}</p>
```

### 2. **Dynamic Data Display**

```html
<p>User: {{ userData.name }}</p>
<p>Balance: {{ userData.balance.toFixed(2) }} USD</p>
<p>Discount: {{ (userData.discount * 100).toFixed(1) }}%</p>
```

### 3. **Conditional Content Rendering**

```html
<p>{{ user.isLoggedIn ? 'Welcome back!' : 'Please log in' }}</p>
<p>{{ item.price > 100 ? 'Expensive item' : 'Budget friendly' }}</p>
```

### 4. **Dynamic Calculations**

```html
<p>Total: {{ quantity * price }}</p>
<p>Discounted: {{ price * (1 - discount) }}</p>
<p>Tax: {{ (quantity * price * taxRate).toFixed(2) }}</p>
```

### 5. **Template-based Content Generation**

```html
<p>{{ `Hello ${user.firstName} ${user.lastName}` }}</p>
<p>{{ `${new Date().getFullYear()} - ${company.name}` }}</p>
```

### 6. **Interactive Dashboard Elements**

```html
<p>Active Users: {{ dashboard.users.active }}</p>
<p>Server Load: {{ dashboard.server.load.toFixed(1) }}%</p>
<p>Uptime: {{ Math.floor(dashboard.server.uptime / 3600) }} hours</p>
```

### 7. **Localization with Date/Time Formatting**

```html
<p>Today: {{ new Date().toLocaleDateString('en-US') }}</p>
<p>Formatted: {{ new Date().toLocaleDateString('fr-FR') }}</p>
<p>Time: {{ new Date().toLocaleTimeString('de-DE') }}</p>
```

## Runtime Execution

EvalDOM can be manually triggered after page loading using the `DOM.evaluate()` method:

```javascript
// After initial page load and DOM manipulation
DOM.evaluate(); // Re-evaluates all expressions in the DOM
```

This allows for dynamic updates when content is modified programmatically after the initial load.

## Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>EvalDOM Example</title>
</head>
<body>
    <p>Result: {{ 2 + 2 }}</p>
    <p>Current time: {{ new Date().toLocaleString() }}</p>
  
    <script src="evaldom.js"></script>
</body>
</html>
```

## Language Translation Use Case

EvalDOM is particularly well-suited for real-time language translation of DOM elements. You can define translation templates and switch languages dynamically:

```html
<p>{{ translations[language].welcome }}</p>
<p>{{ translations[language].greeting }}</p>
```

Where `translations` is an object containing language-specific strings, and `language` is a variable that can be changed to switch languages instantly.

## How It Works

1. The library waits for the DOM to load using `DOMContentLoaded` event
2. It uses XPath to locate all nodes containing `{{` and `}}` expressions
3. For each found expression, it extracts the JavaScript code between the markers
4. The code is evaluated using `eval()` and the result replaces the expression
5. The updated HTML replaces the original node in the DOM

## Limitations

- Only supports simple JavaScript expressions within the markers
- Uses `eval()` for code execution, which can be a security concern
- Requires modern browser support for XPath and DOMParser APIs
- May not work properly with complex nested HTML structures

## License

MIT
