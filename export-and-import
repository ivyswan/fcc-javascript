// A script that uses this module type can now use import and export. Should be inside <body>
<script type="module" src="filename.js"></script>

// Named Export
export const add = (x, y) => {
    return x + y;
}
// or
const add = (x, y) => {
    return x + y;
}
export { add };

// Import
import { add, subtract } from './filename.js';

// Import everything
import * as variableName from "./filename.js";
variableName.add(2, 3);
variableName.subtract(5, 3);

// Export Default - cannot use export default with var, let, or const
export default function add(x, y) {
    return x + y;
} //named function

export default function (x, y) {
    return x + y;
} //anonymous function

// Import a Default Export - no curly braces
import add from "./math_functions.js";