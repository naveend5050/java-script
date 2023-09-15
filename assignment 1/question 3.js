//3)Write a JavaScript function that hides email addresses to prevent unauthorized access.
//Test Data :
//console.log(protect_email("robin_singh@example.com"));
//"robin...@example.com"

// const mailid ='ramyathatiparti@gmail.com';

// protect_email = function (user_email) {
//     var avg, splitted, part1, part2;
//     splitted = user_email.split("@");
//     part1 = splitted[0];
//     avg = part1.length / 2;
//     part1 = part1.substring(0, (part1.length - avg));
//     part2 = splitted[1];
//     return part1 + "...@" + part2;
// };

// console.log(protect_email("ramya_thatiparthi@gmail.com"));

const emailID="dnani304@gmail.com";
console.log(emailID);
const splitemail=emailID.split("@");
console.log(splitemail);
const hideEmail=splitemail[0].slice(0,5)+"...@"+splitemail[1];
console.log(hideEmail);
