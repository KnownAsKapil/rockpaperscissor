let btns = document.querySelectorAll(".box");
console.log(btns);

let winner = document.querySelector(".winner");

let resetbtn = document.querySelector(".reset");
resetbtn.addEventListener("click",reset);

let turnX= true;

let winningPos = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]];
btns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        //console.log("btn was clicked");
        if(btn.innerText === ''){
            btn.innerText = turnX ? "X" : "O";
            turnX = !turnX;
        }
        checkWinner();
    });
});

function checkDraw() {
    for (let btn of btns) {
        if (btn.innerText === '') {
            console.log("Not yet");
            return false; // Exit the function immediately if an empty button is found
        }
    }
    return true; // All buttons are filled
}


function checkWinner(){
    for(let i=0;i<winningPos.length;i++){
        let p1 = winningPos[i][0];
        let p2 = winningPos[i][1];
        let p3 = winningPos[i][2];
        if(btns[p1].innerText !== '' && btns[p1].innerText === btns[p2].innerText && btns[p2].innerText === btns[p3].innerText){
            //console.log("Winner is ",btns[p1].innerText);
            winner.innerText = "Winner is " + btns[p1].innerText;
            winner.classList.remove("hide");
            btns[p1].style.backgroundColor = "green";
            btns[p2].style.backgroundColor = "green";
            btns[p3].style.backgroundColor = "green";
            btns.forEach(btn =>{
                btn.disabled = true;
            });

        }
    }
    if(checkDraw())
        {
            winner.innerText = "Nobody Won";
            winner.classList.remove("hide");
        }
}

function reset(){
    btns.forEach(btn =>{
        btn.innerText = '';
        btn.style.backgroundColor = "#B2BCAA";
        btn.disabled = false;
        winner.classList.add("hide");
    });
    turnX = true;
}