let products = ["Cheeseburger", "Soda", "Chicken Fingers", "French Fries", "Milkshake"];
products.push ("Mac and Cheese");
console.log(products);
let productsUpdated = products.pop();
console.log(productsUpdated);
console.log(products)
// Task 1 Store Inventory

let scores = [98, 76, 83, 91, 68];
console.log("Original Scores: ",scores);
scores.splice(1,1, 88);
console.log("Updated Scores: ",scores);

let total = scores.reduce((sum, score) => sum + score, 0);
let average =total / scores.length;

console.log("Average Score: ",average);
//Task 2 Student Scores

let employee = {
    name: "Easton Mullins",
    age: 20,
    department: "Data Science",
    isActive: true
};
console.log(employee);
employee.department = "Information Security";
console.log(employee);
employee.position = "Data Scientist";
console.log(employee);
//Task 3 Employee Records