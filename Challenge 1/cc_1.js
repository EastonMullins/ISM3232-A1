let employeeName = "Easton Mullins";
const employeeID = 138;
var isActive = true;

console.log("Employee Name:" ,employeeName, "Type:" , typeof employeeName);
console.log("ID:" , employeeID, "Type:" , typeof employeeID);
console.log("Status:", isActive, "Type:", typeof isActive);
//Task 1 Employee Information


let productName = "Cheeseburger";
const productPrice = 4.99;
var isAvailable = true;

console.log("Product Name:" ,productName, "Type:" , typeof productName);
console.log("Price:" , productPrice, "Type:" , typeof productPrice);
console.log("In Stock:", isAvailable, "Type:", typeof isAvailable);
//Task 2 Product Details


let accountBalance = 1000;

accountBalance += 250; // Addition
console.log("Payment from Catering Order", accountBalance);

accountBalance *= 1.2; // Multiplication
console.log ("Investment Returns", accountBalance);

accountBalance -= 200; // Subtraction
console.log ("Purchased Ground Beef", accountBalance);

accountBalance /= 1.5 // Division
console.log ("Taxes:", accountBalance);
//Task 3 Financial Transactions


let customerName = "Bucky";
let welcomemessage = "Hello, " + customerName + " we have recieved your order and it is one the way!";
console.log (welcomemessage);
//Task 4 Customer Messaging

let isloggedIn = true;
if (isloggedIn){console.log("Welcome! " + employeeName);} else {console.log("Try Again.");}
//Task 5 Access Control