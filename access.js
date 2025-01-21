let click = document.querySelector("#submit");
let info1 = document.querySelector("#username");
let info2 = document.querySelector("#pass");


click.addEventListener("click",() =>{
    console.log(info1.value);
    console.log(info2.value);
    if(info1.value == "kapil913" && info2.value == "kapil"){
        window.open("rps.html","_self");
    }
    else{
        alert("invalid credentials");
    }
})
