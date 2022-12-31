let turn = "X";
const changeTurn = () => {
    return turn === "X" ? "0" : "X";

}

let gameOver = false;

// FUNCTIONS TO CHECK WIN


const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    wins.forEach(e => {
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== ""))
        {
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " WON";
            gameOver=true;
        }
    })
}



// GAME LOGIC

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".boxtext");
    element.addEventListener("mousedown", () =>{
        element.style.backgroundColor = "green";
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });

    element.addEventListener("mouseup", (e) =>{
        element.style.backgroundColor = "aquamarine";
    })
})


//  RESET BUTTON 
// const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    
    let boxText = document.querySelectorAll(".boxtext");
    
    Array.from(boxText).forEach(element =>{
        element.innerText = "";
    });

    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
})