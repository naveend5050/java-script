//  9)Leap Year Check
//  Write a function isLeapYear that takes a year as input and prints "Leap year" if the year is
//  divisible by 4 and not divisible by 100, or if it's divisible by 400. Otherwise, print "Not a leap
//  year.
// function leapyear(year){

//     if ((year%4==0 && year%100!=0 ) || year%400==0){
//         return 'leap year';
//     }
//     else{
//     return'not leap year';
//     }
//     }
//     let year=2040;
//     console.log(leapyear(year));

function leapyear(year){
    if((year%4==0 && year%100!=0) || year%400==0){
        return"leap year";
    }else{
        return"not a leap year";
    }
}
let year=2020;
console.log(leapyear(year));