let str1 = "Mohd Sohail Siddique"
let str2 = 'Mohd Sohail'

console.log(str1.length);
console.log(str2.length);

console.log(str1[0]);
console.log(str2[4]);;

// Template literals
let specialString = `This is a template literal: `;
console.log(specialString);
console.log(typeof specialString);

// example of template literal
obj = {
    item : "pen",
    price : 10
};
console.log("The cost of this", obj.item, "is", obj.price, "Rs");

let output = `The cost of this ${obj.item} is ${obj.price} Rs`;     // ${} This is string interpolation.
console.log(output);

let sentence = `This is a template literal ${1*2*3}.`;

// string methods
let str = "dHtuGJhJSkjh";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let string = "   fyguhs bhguhsi cyguhds    ";
console.log(string.trim());

console.log(str.slice(1, 6));       // 6 is not included, and end 6 is not compulsary to pass
console.log(str.concat(string));
console.log(str.replace("h", "l"));
console.log(str.replaceAll("h", "l"));
console.log(str.charAt(2));