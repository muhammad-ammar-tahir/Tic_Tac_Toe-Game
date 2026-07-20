let btns = document.querySelectorAll(".btn");

let rst_btn = document.querySelector("#reset");

const winning_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let X = true;
let O = false;

btns.forEach((btn) => {
    btn.addEventListener("click" , () =>{
        
        if(btn.innerHTML == "" && X == true ){
            btn.innerHTML = "X";
            X = false ;
            O = true ;
        }
        else if(btn.innerHTML == "" && O == true ){
            btn.innerHTML = "O";
            O = false;
            X = true;
        }
    })
    rst_btn.addEventListener("click" , () =>{
        btn.innerHTML = "";
        X = true;
        O = false;
    })
})




// 20 mint