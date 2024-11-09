import { calculateBMI, estimateHeight } from './bmiCalc.js';

// Arrays to store user data
let names = [];
let ages = [];
let weights = [];

// Function to add a user's data
function addUserData(name, age, weight) {
    names.push(name);
    ages.push(age);
    weights.push(weight);
}

// Function to display all users' BMI and height estimation
function displayUserInfo() {
    console.log("User Information:");
    names.forEach((name, index) => {
        const age = ages[index];
        const weight = weights[index];
        const height = estimateHeight(age);
        const bmi = calculateBMI(weight, height);
        
        console.log(`Name: ${name}, Age: ${age}, Weight: ${weight}kg, Height: ${height}m, BMI: ${bmi}`);
        categorizeBMI(bmi);
    });
}

// Function to categorize BMI using control flow
function categorizeBMI(bmi) {
    switch (true) {
        case (bmi < 18.5):
            console.log("BMI Category: Underweight");
            break;
        case (bmi >= 18.5 && bmi <= 24.9):
            console.log("BMI Category: Normal weight");
            break;
        case (bmi >= 25 && bmi <= 29.9):
            console.log("BMI Category: Overweight");
            break;
        default:
            console.log("BMI Category: Obese");
    }
}

// Example usage
// Prompt user data 
addUserData("Alice", 25, 68);
addUserData("Bob", 32, 85);
addUserData("Charlie", 15, 45);

// Display user info and BMI category
displayUserInfo();

// Manipulating arrays using splice and shift
names.splice(1, 1); // Remove Bob
weights.shift(); // Remove Alice's weight

// Display updated data after array manipulation
console.log("\nUpdated User Information:");
displayUserInfo();
