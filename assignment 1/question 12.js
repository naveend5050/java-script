// 12)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is
// even, and "Odd" if the number is odd.

// function evenOrOdd(x) {
//     if(x%2 ==0){
//         return "even";
//     }

//     else(x%2!=0) 
//     { return "odd";}

// }
//  let x=9;
//  console.log(evenOrOdd(x));

function evenOrOdd(x){
    if(x%2==0){
        return "even";
    }
    else(x%2!=0)
    {
        return "odd";
    }
}
let x=33;
console.log(evenOrOdd(x));
