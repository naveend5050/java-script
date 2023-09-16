// **6. Prime Number Check:**
// Write a program to check if a given number `n` is prime using a `for` loop.

// **Example:**
// ```javascript
const n = 7;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime); // true
