// 10)Positive, Negative, or Zero
// Write a function positiveNegativeZero that takes a number as input and prints "Positive" if the
// number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.
 
// function num_p_n_z(x){
//     if(x>0){
//     return "positive";
//     }
//     else if(x<0){ return "negative";
//     }
//     else { return "zero"}
//     }
//     let x=-2
//     console.log(num_p_n_z(x));

function num_p_n_z(x){
    if (x>0){
        return"positive";
    }
    else if(x<0){
        return"negative";
    }
    else{return"zero"}
}
let x=-4;
console.log(num_p_n_z(x));