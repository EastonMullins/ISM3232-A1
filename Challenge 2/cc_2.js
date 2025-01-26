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

let customers = [
    {name: "Francis Wood", email: "franciswood90@gmail.com", purchaseAmount: 150},
    {name: "Bryce King", email: "bricespice21@gmail.com", purchaseAmount: 200 },
    {name: "Rocky Bull", email: "rockybull@usf.edu", purchaseAmount: 300}
];
console.log(customers);
customers.push = ({name: "Lebron James", email: "kingjames23@gmail.com", purchaseAmount: 500});
console.log(customers);
//Task 4 - Customer Database

