// 15)Username Validation
// Write a function validateUsername that takes a username as input. The function should return
// "Valid" if the username has at least 6 characters and contains only letters and numbers.
// Otherwise, return "Invalid."

// function validateUsername(text){
//     if (text.length<=6)

//     {return "Valid"}

//     return "Invalid"
// }
// let text= "vinswe";

// console.log(validateUsername(text));

function validateUsername(text){
    if (text.length<=6){return "valid";}
    return "invalid";
}
let text="jailar";
console.log(validateUsername(text));
