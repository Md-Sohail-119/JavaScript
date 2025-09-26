function myFunction() {     // parameters->input
    console.log("Hello World!");
    console.log("Welcome to my JavaScript journey!");
}
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();


function withParameters(msg, n) {      // arguments
    console.log(msg, n);
}
withParameters("I am learning JavaScript", 100);

function sum(x, y) {
    // x & y are local variables of this function
    s = x + y;
    console.log("Before return");
    return s;
    console.log("After return");
}
let val = sum(3, 4);
console.log(val);

// Modern JavaScript
// Arrow function for sum
const arrowSum = (a, b) => {
    console.log(a + b);
};
arrowSum(2, 20);

// Arrow function for multiplication
const arrowMul = (p, q) => {
    console.log(p * q);
};
arrowMul(5, 7);

const printHello = () => {
    console.log("Hello World!");
};
printHello();

function abc() {        // A callBack function is a function passed as an argument to another function.
    console.log("Hello World!");
}
function myFunc(abc) {  // Higher order functions/methods takes functions as a parameter or return a function. 
    return abc;
}
// Methods in JavaScript
// forEach loop in Arrays. These functions are higher order functions/methods.
let arr = ["INDIA", "US", "AUSTRALIA", "RUSSIA", "CHINA", "FRANCE", "GERMANY", "JAPAN"];
arr.forEach(function func(val, index, arr) {
    console.log(index, val, arr);
});
arr.forEach((val, index, arr) => {
    console.log(index, val.toLowerCase(), arr);
});

// Some more array methods
// Map
let a = [4, 6, 8, 10, 11, 3];
let newA = a.map((val) => {
    return val + 2;
});
console.log(newA);

// Filter. Return the value which gives true for a condition and stores them in an array.
let newArr = a.filter((item) => {
    return item % 2 !== 0;
})
console.log(newArr);

//Reduce. Return the reduced form of an array to a single value.
const reduced = a.reduce((result, current) => {
    return result + current;
})
console.log(reduced);

const max = a.reduce((prev, next) => {
    return prev > next? prev : next;
});
console.log(max);
