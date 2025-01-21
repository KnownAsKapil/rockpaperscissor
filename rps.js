let userScore=0;
let compScore=0;
let uupdate = document.querySelector("#u-score");
let cupdate = document.querySelector("#c-score");
let user = document.querySelectorAll(".img");
console.log(user);
let text = document.querySelector(".result");

function generate(){
    let computer_choices = ["rock", "paper" ,"scissor"];
    let random_no = Math.floor(Math.random()*3);
    return computer_choices[random_no];
}

function tie_check(user,comp){
    if(user == comp){
        return true;
    }
    else{
        return false;
    }
}

function declarewinner(user,comp){

    if(user == "rock"){
        comp == "scissor" ? (userScore++ , text.innerText = "You Won", text.style.backgroundColor = 'green', text.style.color = 'white', uupdate.innerText = userScore) : 
        (text.style.backgroundColor = "red", text.style.color = "white", compScore++, text.innerText = "Computer Won", cupdate.innerText = compScore);
        }
    else if(user == "paper"){
        comp == "rock" ? (userScore++ , text.innerText = "You Won", text.style.backgroundColor = 'green', text.style.color = 'white', uupdate.innerText = userScore) : 
        (text.style.backgroundColor = "red", text.style.color = "white", compScore++, text.innerText = "Computer Won", cupdate.innerText = compScore);
        }
    else{
        comp == "paper" ? (userScore++ , text.innerText = "You Won", text.style.backgroundColor = 'green', text.style.color = 'white', uupdate.innerText = userScore) : 
        (text.style.backgroundColor = "red", text.style.color = "white", compScore++, text.innerText = "Computer Won", cupdate.innerText = compScore);
    }

    /*if(userScore == 10 || compScore == 10){
        endGame();
    }*/
    
}
/*function endGame(){
    user = null;
    if(userScore == 10){
        text.innerText = "You Won the Game";
        text.style.backgroundColor = "green";
        text.style.color = "white";
    }
    else{
        text.innerText = "Computer Won the Game";
        text.style.backgroundColor = "red";
        text.style.color = "white";
    }
    setTimeout(restart(), 5000);
}
function restart(){
    user = document.querySelectorAll(".img");
    userScore = 0;
    compScore = 0;
    uupdate.innerText = 0;
    cupdate.innerText = 0;
    text.innerText = "Let's Play Again";
    text.style.backgroundColor = "black";
    text.style.color = "white";
}*/
function startgame(turn){
    
    comp_choice = generate();
    console.log("Comp generated:- ", comp_choice);
    if(tie_check(turn,comp_choice)){
        text.innerText = "It's a tie";
        text.style.backgroundColor = "gray";
        text.style.color =  "black";
    }
    else{
        declarewinner(turn,comp_choice);
    }
    
    
    
}


user.forEach((img) => { 
    img.addEventListener("click",() =>{
        
        let turn = img.getAttribute("id");
        console.log("Choice was", turn);
        startgame(turn);

    })
})
