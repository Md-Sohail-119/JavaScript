alert("Error, This page is not responding.")
console.log("Hello, Welcome to my page.")
console.log("I am Mohd. Sohail Siddique.")

// Variables
fullName = "Mohd. Sohail Siddique"
age = 19;
totalPrice = 99.99
radius = 14;
a = null;
z = undefined;
isFollow = false;
console.log(fullName, age, totalPrice, radius, a, z, isFollow);

// fullName and fullname are different because it is case sensitive.
fullName = "Mohd. Sohail Siddique";      
fullname = "Xyz Siddique";

// Only letters, _, digits, and $ sign are allowed in variable names.
age1 = 19;
full_name = "Mohd. Sohail Siddique";
age$ = 19;

// Only a letter, _,or $ should be first character.
_fullName = "Mohd. Sohail Siddique";
$fullName = "Mohd. Sohail Siddique";
fullName = "Mohd. Sohail Siddique";

// Reserved names cannot be variable names.
// console = "Log";         // This is not allowed.
Console = "Log"             // This is allowed.

// Types of variable writing cases.
fullName = "Mohd. Sohail Siddique"; // Camel case.
fullname = "Mohd. Sohail Siddique"; // Normal case.
full_name = "Mohd. Sohail Siddique";  // Snake case. 
// full-name = "Mohd. Sohail Siddique";  // Kebab case.
FullName = "Mohd. Sohail Siddique";     // Pascal case.
console.log(fullname, fullName, age1, full_name, age$, _fullName, $fullName, Console, FullName);

// let, const, var
// var is old method to declare a variable, it allows to redeclare the variable. A global scope variable.
var age = 19;
var age = 20;
var age = 30;
console.log(age);

// let is used now, it gives an error if tried to redeclare but allows to update the variable. A block scope variable.
let price = 1000;
// let price = 2000;
// price = 3000;
console.log(price);

// const fixes the variable value and don't allow to redeclare or update the value. A block scope variable.
const PI = 3.14;
// const PI = 3.2;
// PI = 4;     This will give error in runtime.
console.log(PI);

// Since let is a block scope variable.
{
    let a = 5;
    console.log(a);
}
{
    let a = 10;;
    console.log(a);
}

// Since var is a global scope variable.
{
    let b = 15;
    console.log(b);
}
// console.log(b);

// Types of datatypes are primitive(7) and non-primitive(objects).
// primitive datatypes are: Number, String, Boolean, Undefined, Null, BigInt, Symbol.
let x =  BigInt("1234567890");
let y = Symbol("Hello!");
console.log(typeof x, typeof y);

// Object
const Student = {
    fullName : " A global scope variable.",
    age : 20,
    cgpa : 9.65,
    isPass : true
};

Student["fullName"] = "Mohd. Sohail Siddique";
Student["age"] = Student["age"] - 1;
console.log(Student, typeof Student);
console.log(Student["cgpa"]);
console.log(Student.age);