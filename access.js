let choice = document.querySelector("#gameselect");
let open = document.querySelector("button");
let alert = document.querySelector(".alert");

console.log(choice);
console.log(open);

open.addEventListener("click", () =>{
    if(choice.value != ""){
        alert.classList.add("hide");
        window.open(`${choice.value}.html`);
    }
    else{
        alert.classList.remove("hide");
    }
})