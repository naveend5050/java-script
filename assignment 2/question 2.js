// **2. Factorial of a Number:**
// Write a program to calculate the factorial of a given number `n` using a `for` loop.

// **Example:**
// ```javascript
// const n = 5;
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }
// //1*2*3*4*5=120
// //5*4*3*2*1=120
// console.log(factorial); // 120

const n=5;
let factorial=1;
for (let i=1;i<=n;i++){
    factorial *=i;
}
console.log(factorial);

