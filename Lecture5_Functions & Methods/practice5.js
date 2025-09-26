let n = prompt("Enter a no.:");

let arr = [];

for(let i=0; i<n; i++) {
    arr.push(i+1);
}
console.log(arr);

const sum = arr.reduce((prev, next) => {
    return prev + next;
});
console.log(sum);

const factorial = arr.reduce((prev, next) => {
    return prev * next;
});
console.log(factorial);
