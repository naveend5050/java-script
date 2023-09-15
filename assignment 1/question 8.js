// 8)Time of Day Greeting
// Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and
// prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for
// hours 12-17, and "Good evening" for hours 18-23.
// const hour = new Date().getHours();
// function greetTimeOfDay(hour){
// if (hour <12){
//     return "good morning";
// }
// else if(hour < 18){
//    return"good afternoon";
// }
// else {
//   return "good evening"
// }
// }
// console.log(hour);


// const date = new Date();
// const currentTime = date.getHours();


// if (currentTime >= 6 && currentTime < 12) {
//  console.log("Good Morning");
// } 
// else if (currentTime >= 12 && currentTime < 18)
//  {
//     console.log("good After Noon");
// } 
// else {
//  console.log("Good Evening");
// }

const date = new Date();
const currentTime = date.getHours();
if (currentTime >= 6 && currentTime < 12){
    console.log("good morning");
}
else if(currentTime >= 12 && currentTime < 17){
    console.log("good afternoon");
}
else{
    console.log("good evening");
}