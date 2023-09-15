// 14)Ticket Pricing
// Write a function calculateTicketPrice that takes two parameters: a person's age and whether/
// they have a student ID (true or false). If the person is under 18 or a student, they get a discount.
// If both conditions are met, return "Discounted price," otherwise return "Regular price."

// function calculateTicketPrice(a,b){
// if(a<18 && b==true)
// {
//    return "Discounted price";
// }
// else if(a<18 || b==true)
// { return " they get a discount.";}
// else 
// {return "Regular price";}
  
// }

// let a=66; //i have given input 18 we should enter it
// let b=false; //i have given input 18 we should enter it
// console.log (calculateTicketPrice (a,b));


function calculateTicketPrice(age,statment){
    if (age<18 && statment== true )
    {
        return "Discounted price";
    }
    else if (age<18 || statment== true)
    {
        return "they get a discount";
    }
    else{return "Regular price";} 
}
let age=20;
let statment=false;
console.log(calculateTicketPrice(age,statment));