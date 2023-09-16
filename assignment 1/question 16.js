// 16)Color Selection
// Write a function selectColor that takes a color choice ("red", "blue", "green") and whether the
// color is available (true or false). If the color is available and the choice is "blue" or "green,"
// return "Selected." If the choice is "red," return "Not available." For any other choice, return
// "Invalid choice."


// function selectColor(x){

//     if (x== "red"|| x=="blue" || x=="green"){
//         return "true";
//     }
 
//    else if(x=="blue" || x=="green")
//    {
//     return "selected";
//    }
//    else if(x=="red"){
//     return "not available";    
//    }
//    return "invalid choice";

//  }
//  let x="green";
//  console.log(selectColor(x));



function selectColor(x){
    if (x=="red" || x=="blue" || x=="green"){
        return "true";
    }
    else if (x=="blue" || x=="green"){
        return "selected";
    }
    else if (x=="red"){
        return "not available";
    }
    return "invalid choice";
}

let x="blue";
console.log(selectColor(x));