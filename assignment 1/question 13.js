//  13)Age Eligibility
// Write a function checkAge that takes an age as input. The function should return "Allowed" if the
// age is between 18 and 65 (inclusive), and "Not allowed" otherwise.

// function checkage(age){
//     if(age>=18 && age<=65)
//     {
//         return "Allowed";
//     }
//     return "Not allowed";
// }
// let age=67;
// console.log(checkage(age));



function checkAge(age){
    if (age>=18 && age<=65){
        return "allowed";
    }
    return "not allowed";
}
let age=75;
console.log(checkAge(age));
