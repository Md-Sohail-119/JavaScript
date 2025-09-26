// Conditional Statements

// if Statements
let age = 16;
let mode = "dark";
let color;

if (age >= 18) {
    console.log("You can vote.");
}
if (age <18) {
    console.log("You cannot vote.");
}

if (mode == "dark") {
    color = "black";
}
if (mode == "light") {
    color = "white";
}
console.log(color);

// if-else Statements
mode = "blue"
if (mode == "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);

age = 9;
if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}

let num = 10;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

if (mode == "dark") {
    color = "black";
} else if (mode == "blue") {
    color = "blue";
} else if (mode == "light") {
    color = "white";
} else {
    color = "pink";
}
console.log(color);

// For single line.
if (mode == "blue") console.log(mode);

// Ternary Operator, simpler or compact version of if-else
age >= 18 ? console.log("Adult") : console.log("Minor");
// or it can be done as,
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// To learn anything about HTML, CSS, JavaScript you can refer to MDN Docs.

// Switch Statement
let fruit = "Papaya";

switch (fruit) {
    case 'Apple':
        console.log("The fruit is Apple.");
    case 'Guava':
        console.log("The fruit is Guava.");
    case 'Papaya': 
        console.log("The fruit is Papaya.");
        break;
    case 'Banana':
        console.log("The fruit is Banana.");
    case 'Grape':
        console.log("The fruit is Grape.");
    default:
        console.log("The fruit is not found.");
}

