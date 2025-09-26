let divs = document.querySelectorAll(".box");
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

let temp = "I";
for(let div in divs) {
    // let temp = div+1;
    // console.log(temp);
    divs[div].innerText = divs[div].innerText + `. Adding unique value to div ${temp}.`;
    console.log(divs[div].innerText);
    temp = temp + "I";
}


// divs[0].innerText = divs[0].innerText + ". Adding unique value to div I.";
// divs[1].innerText = divs[1].innerText + ". Adding unique value to div II.";
// divs[2].innerText = divs[2].innerText + ". Adding unique value to div III.";
