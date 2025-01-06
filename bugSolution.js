/*This is a demonstration, there's no bug to fix. The code functions as intended showcasing block scope. */
function myFunction() {
 let x = 10; // Outer scope
 if (true) {
 let x = 20; // Inner scope, different variable 
 console.log(x); // 20
 }
 console.log(x); // 10
}
myFunction();