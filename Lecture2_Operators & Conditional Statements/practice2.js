let score = prompt("Enter your score in percentage:");

if ((score <= 100) && (score >= 80)) {
    console.log("You got an 'A' grade.");
} else if ((score < 80) && (score >= 70)) {
    console.log("You got an 'B' grade.");
} else if ((score < 70) && (score >= 60)) {
    console.log("You got an 'C' grade.");
} else if ((score < 60) && (score >= 50)) {
    console.log("You got an 'D' grade.");
} else if ((score < 50) && (score >= 0)) {
    console.log("You got an 'F' grade.");
} else {
    console.log("Invalid score.");
}


// or you can do in this way,
let grade;
if ((score <= 100) && (score >= 80)) {
    grade = "A";
} else if ((score < 80) && (score >= 70)) {
    grade = "B";
} else if ((score < 70) && (score >= 60)) {
    grade = "C";
} else if ((score < 60) && (score >= 50)) {
    grade = "D";
} else if ((score < 50) && (score >= 0)) {
    grade = "F";
} else {
    grade = "Invalid Score";
}

console.log("According to your score, your grade is:", grade);
