# JavaScript Block Scope Example

This example demonstrates the concept of block scope in JavaScript using the `let` keyword.

## Description

The code showcases how variables declared with `let` inside a block (`if` statement in this case) are only accessible within that block. This differs from the behavior of `var`, which would have created a function-scoped variable, potentially leading to unexpected results.

## How to run

1. Save the code as `bug.js`
2. Open your browser's developer console.
3. Run the `bug.js` file (e.g., by pasting its contents into the console). 
4. Observe the output, demonstrating that the variable `x` has different values inside and outside of the `if` block.

## Solution

The solution file (`bugSolution.js`) isn't necessary in this case since the bug itself showcases a correct and expected behavior of JavaScript's block scope.  There is no error or bug to fix; the behavior is a feature of `let`. If there were to be a bug to fix it would be in the original code design decision where global variables were not preferred