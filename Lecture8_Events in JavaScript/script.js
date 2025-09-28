// Event Handling

let btn2 = document.querySelector('#btn2');

btn2.onclick = () => {
    alert('Button 2 Clicked!');
    let a = 10;
    a++;
    console.log(a);
};

let div2 = document.querySelector('#div2');

div2.onmouseover = () => {
    div2.style.backgroundColor = 'blue';
    alert('You are on div2!');
};

// Overwrites the previous handling, and executes/performs this one.
div2.onmouseover = () => {
    div2.style.backgroundColor = 'green';
    alert('You are on div2!')
};

btn2.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    alert('Button 2 Clicked!');
    let a = 10;
    a++;
    console.log(a);
};

// Event Listeners 

// Add Event Listeners
let div = document.querySelector('#div');

div.addEventListener("click", 
    () => {
    div.style.backgroundColor = 'blue';
    console.log("First event listener.")
    alert('You are on div1!');
});

div.addEventListener("click", 
    (e) => {
    console.log("Second event listener.")
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    alert('You are still on div1!');
});

// Remove Event Listeners
div.addEventListener("click",           // Added Event Listener
    () => {
    console.log("Handler1."); 
});
div.addEventListener("click",           // Added Event Listener
    () => {                                     
    console.log("Handler2.");                 
});                                          
                                                     
let handler3 = () => {                         
    console.log("Handler3.")                   
};                                               
                                                
div.addEventListener("click", handler3);// Added Event Listener
div.addEventListener("click", 
    () => {
    console.log("Handler4.");           // Added Event Listener
});

div.removeEventListener("click", handler3);
