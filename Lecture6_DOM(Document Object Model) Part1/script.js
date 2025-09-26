// alert("Knowlegde ahead!");
console.log(window);        // window is a global object of browser not javascript.
console.log("Hello1!");
window.console.log("Hello2!");      // console.log, alert, prompt, etc are the methods of window.
console.log(window.document);       // console.log will print the html code.
console.dir(window.document);       // console.dir will print the document which is the special object's properties and methods.


console.dir(document);
console.dir(document.body);
console.log(document.body);
console.log(document.head);

// DOM Manipulation

document.body.style.background = "green";
document.body.childNodes[3].innerText = "Abcd";

// accessing using Id
let header = document.getElementById("heading");
console.log(header);
console.dir(header);

let header4 = document.getElementById("headingsup");
console.log(header4);
console.dir(header4);

let button = document.getElementById("myId");
console.log(button);
console.dir(button);

// accessing using class
let header2 = document.getElementsByClassName("head");
console.log(header2);
console.dir(header2);

let header3 = document.getElementsByClassName("headsup");
console.log(header3);
console.dir(header3);

// accessing using tag
let para = document.getElementsByTagName("p");
console.log(para);
console.dir(para);

// accessing using query selector (tag)
// returns the first element found
let firstElementTag = document.querySelector("p");     
console.dir(firstElementTag);
console.log(firstElementTag);

// returns the all elements found
let allElementTag = document.querySelector("p");     
console.dir(allElementTag);
console.log(allElementTag);

// accessing using query selector (class)
// returns the first element found
let firstElementClass = document.querySelector(".head");     
console.dir(firstElementClass);
console.log(firstElementClass);

// returns the all elements found
let allElementClass = document.querySelector(".head");     
console.dir(allElementClass);
console.log(allElementClass);

// accessing using query selector (Id)
// returns the first element found
let firstElementId = document.querySelector("#heading");     
console.dir(firstElementId);
console.log(firstElementId);

// returns the all elements found
let allElementId = document.querySelector("#heading");     
console.dir(allElementId);
console.log(allElementId);


// Properties:

// tagName-
console.log(button);
console.log(button.tagName);

// innerText-
// There are 3 types of nodes in DOM: text nodes, comment nodes, element nodes
console.log(document.body.firstChild);      // first node of body is always text, which is automatically created
console.dir(document.body.firstChild);

console.log(document.body.lastChild);
console.dir(document.body.lastChild);

console.log(document.querySelector("div").children);
console.dir(document.querySelector("div").children);

let ul = document.querySelector(".fruits");
console.log(ul);
console.dir(ul);
console.log(ul.innerText);
console.dir(ul.innerText);

// innerHTML-
console.log(ul.innerHTML);
console.dir(ul.innerHTML);


ul.innerText = "abcdefghijklmnopqrstuvwxyz."
console.log(ul.innerText);
console.dir(ul.innerText);

ul.innerHTML = "<div>I am a boy.</div>"
console.log(ul.innerHTML);
console.dir(ul.innerHTML);

let newHeading = document.querySelector("h1");
newHeading.innerHTML = "<i>This is new Abcd.</i>";

let heading2 = document.querySelector("h2");
console.log(heading2.innerText);
console.log(heading2.textContent);
