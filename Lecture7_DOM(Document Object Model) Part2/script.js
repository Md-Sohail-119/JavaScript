// DOM Manipulation


// Attributes

// to get the attribute value
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// to set the attribute value
para = document.querySelector("p");
para.setAttribute("class", "newclass");
console.log(para);


// Style

let d = document.querySelector("div");
console.log(d);
console.log(d.style)
d.style.backgroundColor = "green";
d.style.fontSize = "19px";
d.innerText = d.innerText + " Hello All!";
// d.style.visibility = "hidden";


// Create Element

let newBtn = document.createElement("button");
newBtn.innerText = "Click";
console.log(newBtn);


// Insert Elements

// adds at the end of node (inside)
d.append(newBtn);

// adds at the start of the node (inside)
d.prepend(newBtn);

// adds before the node (outside)
d.before(newBtn);

// adds after the node (outside)
d.after(newBtn);

// Example: Adding a new Heading
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, I am new! </i>";

document.querySelector("body").prepend(newHeading);


// Delete Elements

// removes the node
para.remove();
// newHeading.remove();
