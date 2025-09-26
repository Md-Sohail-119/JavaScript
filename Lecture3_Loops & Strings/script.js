// console.log("Mohd Sohail");
// console.log("Mohd Sohail");
// console.log("Mohd Sohail");
// console.log("Mohd Sohail");
// console.log("Mohd Sohail");

// for loop

for(let i=1; i<=5; i++) {
    console.log("Mohd Sohail");
}

// for calculating the sum of first n natural no.s
let count = 0;
n = prompt("Enter a natural no.: ");
for(i=1; i<=n; i++) {
    count = count + i;
}
console.log(count);

let a = 1;
// while loop
while(a<=5) {
    console.log(a);
    a++;
}

let b = 10;
// do while loop
do {
    console.log(b);
    b--;
} while(b!=0)

// for-of loop
let c = prompt("Enter a string: ")
size = 0;
for(let val of c) {
    size++;
}
console.log(size);

// for-in loop
let student = {
    name : "Mohd Sohail Siddique",
    age : 19,
    cgpa : 9.65,
    isPass : true
};
for(let key in student) {
    console.log("key = ", key, "\t", "value = ", student[key]);
}
