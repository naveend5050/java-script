// 11)Grade Calculator
// Write a function calculateGrade that takes a student's score as input and prints their
// corresponding grade: "A" for scores 90 and above, "B" for scores 80-89, "C" for scores 70-79,
// "D" for scores 60-69, and "F" for scores below 60.


// function calculateGrade(score){
//     if( score>=90)
//     { return "A";}
//     else if(score<=89 && score>=80)
//     {return "B";}
//     else if(score<=79 && score>=70)
//     {return "C";}
//     else if(score<=69 && score>=60)
//     {return "D";}
//     else(score<60)
//     { return "F"}
//    }
//    let score =70;
//    console.log(calculateGrade(score));

function calculateGrade(score){
    if(score>=90){return "A";}
    else if (score>=80 && score<=89){return "B";}
    else if (score>=70 && score<=79){return "C";}
    else if (score>=60 && score<=69){return "D";}
    else(score<60)
    {
        return "E";}
}
let score =50;
console.log(calculateGrade(score));