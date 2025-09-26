// This is a single line comment.
/* This is a multiline comment,
which is used to comment in multiple line */

console.log("Hello World!");

// Arithmetic Operators
let a = 5;
let b = 10;
let c = a + b;
console.log("a=", a, "& b=", b);
console.log("a+b = ", c);
console.log("a-b = ", a-b);
console.log("axb = ", a*b);
console.log("a/b = ", a/b);
console.log("a%b = ", a%b);
console.log("a^b = ", a**b);

// Arithmetic Unary Operators
a++;
console.log("a = ", a);     // a = 6
a--;
console.log("a = ", a);     // a = 5

// Post and Pre Increament and Decreament
console.log("++a = ", ++a);     // ++a = 6
console.log("a++ = ", a++);     // a++ = 6
console.log("a = ", a);     // a = 7

console.log("--a = ", --a);     // --a = 6
console.log("a-- = ", a--);     // a-- = 6
console.log("a = ", a);     // a = 5 

// Assignment Operators
let y = 20;     // It is assigning 20 to y
console.log("y = ", y);

y += 2;     // This is same as y = y + 2
console.log("y = ", y);

y -= 10;    // This is same as y = y - 10
console.log("y = ", y);

y *= 10;    // This is same as y = y * 10
console.log("y = ", y);

y /=2;      // This is same as y = y / 2
console.log("y = ", y);

y %=3;      // This is same as y = y % 3
console.log("y = ", y);

y **=9;      // This is same as y = y ** 9
console.log("y = ", y);

// Comparision Operators
console.log("a == b is ", a == b);      // false
console.log("a != b is ", a != b);      // true

let d = 10;
let e = "10";
console.log("d == e is ", d == e);      // true, because it converts string into number and then compare them.
console.log("d === e is ", d === e);    // false, because === does not allow to convert its type into number.
console.log("d !== e is ", d !== e);    // true, because it also don't allow it to convert its type
console.log("a > b is ", a > b);
console.log("a >= b is ", a >= b);
console.log("a < b is ", a < b);
console.log("a <= b is ", a <= b);

// Logical Operators
let cond1 = a > b;      // false
let cond2 = a == b;     // false

console.log("cond1 && cond2 is ", cond1 && cond2);      // false
console.log("cond1 || cond2 is ", cond1 || cond2);      // false
console.log("!cond1 is ", !cond1);                      // true