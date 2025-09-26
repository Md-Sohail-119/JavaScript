let student = [85, 97, 44, 37, 76, 60];
let total = 0;
for(marks of student) {
    total = total + marks;
}

let avg = total / student.length;
console.log(`The average marks of the student is ${avg}`);
