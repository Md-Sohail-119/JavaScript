let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("p");
let msgBox = document.querySelector(".msg");

msgBox.classList.add("hide");

let turn = true;    //for playerX: turn==true , for playerO: turn==false

const winPatterns = [ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn == true){
            box.innerText = "X";
            turn = false;
        }
        else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const checkwinner = () => {
        for(let pattern of winPatterns) {
            let pos1 = boxes[pattern[0]].innerText; 
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
            
            if((pos1 != "") && (pos1 == pos2) && (pos2 == pos3)) {
                if(pos1 === pos2 && pos2 === pos3 && pos1 === "X") {
                    msgBox.classList.remove("hide");
                    msg.innerText = "PlayerX is Winner.";
                }
                else if(pos1 === pos2 && pos2 === pos3 && pos1 === "O") {
                    msgBox.classList.remove("hide");
                    msg.innerText = "PlayerO is Winner.";
                }
                boxes.forEach((box) => {
                    box.disabled = true;
                });
                return;
            }
        }
    let count = 0;

    boxes.forEach((box) => {
        if(box.innerText != "") {
            count++;
        }
    });

    if(count === boxes.length) {
        msgBox.classList.remove("hide");
        msg.innerText = "Game Draw";
    }
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        msg.innerText = "";
        turn = true;
        box.disabled = false;
        msgBox.classList.add("hide");
    });
};

resetBtn.addEventListener("click", resetGame);
