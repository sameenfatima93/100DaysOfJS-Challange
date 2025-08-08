///////______100_Days_of_JavaScript_Challange
///____________Day_3__________________________

// var fruitsName = ["apple" , "banana" , "orange" , "pinapple" , "strawberry" , "mango" , "graphs"]
// var userChoice = prompt("Enter the Fruit Name").toLowerCase();
// if (fruitsName.includes(userChoice)) {
//     console.log(" yes " + userChoice + " is availeble");
    
    
// } else {
//     console.log(" sorry " + userChoice+ " is not avalible");
    
// }

// var number = [2 , 5 , 4 , 7 , 3 , 6]
// var userChoice = +prompt("Enter any number")
// if (number.includes(userChoice)){
//     if (userChoice % 2 === 0) {

//         alert(" yes " +userChoice+ " is in the list and it is even ")
        
//     } else {
//    alert(" yes " +userChoice+ " is in the list and it is odd")
// }
    
// } else {
//    alert("your number not in the list")
// }


//______understanding___incolude
 var fruits = ["apple", "banana", "mango"];

 console.log(fruits.includes("banana")); // true
 console.log(fruits.includes("grapes")); // false


 var storeItems = ["apple", "banana", "mango", "milk", "bread"];
 var userChoice = prompt("What do you want to buy?").toLowerCase();

if (storeItems.includes(userChoice)) {
    alert("Yes, " + userChoice + " is available in our store!");
} else {
    alert("Sorry, " + userChoice + " is not available right now.");
 }
