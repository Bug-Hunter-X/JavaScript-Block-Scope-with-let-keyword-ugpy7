function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This x is different than the one declared outside the if statement 
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}