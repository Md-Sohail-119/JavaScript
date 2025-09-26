let marks = [78, 90, 56, 34, 23, 10];
console.log(marks);
console.log(marks.length);      // property of array

let heroes = ["Shaktiman", "Hulk", "Spiderman", "Ironman", "Thor"];
console.log(heroes);
console.log(heroes.length);

console.log(heroes[2][4]);

// Using for loop
for(let i=0; i<heroes.length; i++) {
    console.log(heroes[i]);
}

// Using for-of loop
for(let hero of heroes) {
    console.log(hero);
}

let cities = ["Mumbai", "Delhi", "hyderabad", "Bengaluru", "Pune"];
for(let city in cities) {
    console.log(cities[city].toUpperCase());
}

// Array methods
// push
let fruits = ["apple", "banana", "grape", "guava", "chikoo"];
fruits.push("pineapple", "dragon fruit", "date");
console.log(fruits);

// pop
let deleted = fruits.pop();
console.log("Deleted item is", deleted);
console.log(fruits);

// toString
let newfruits = fruits.toString();
console.log(newfruits);
console.log(fruits);

// concat
let vegetables = ["onion", "potato", "tomato"];
let junk = ["burger", "frankie", "fried momos"];
let food = fruits.concat(vegetables, junk);
console.log(food);
console.log(fruits);
console.log(vegetables);
console.log(junk);

// unshift
vegetables.unshift("carrot", "cauliflower");
console.log(vegetables);

// shift
let deleted_veggie = vegetables.shift();
console.log(deleted_veggie);
console.log(vegetables);

// slice
let sliced = fruits.slice(2, 6);
console.log(sliced);
console.log(fruits);

// splice(start index, no. of elements to be deleted, new elements to be added)
console.log(vegetables);
vegetables.splice(1, 2, "bottlegourd", "cabbage", "capcicum");
console.log(vegetables);
vegetables.splice(3);       // if no. of items to be deleted is not provided it will delete all the items from the given index till the end.
console.log(vegetables);