// @@@@@@@@@@@  Exe1 @@@@@@@@@@@@@
let modo_op = 1;
const colors = ["green", "Red", "rgba(133,122,200)","#F15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click', function(){
    console.log("modo: " + modo_op);
    if (modo_op == 1){
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
        console.log(randomNumber);
    } else if(modo_op ==2) {
        const randomColor = getRandomHex();
        let hexColor = "#"+randomColor.toString(16);
        document.body.style.backgroundColor = hexColor;
        color.textContent = hexColor;
        console.log(hexColor);
    }    
})
function getRandomHex() {
    return Math.floor(Math.random()*0xFFFFFF);
}

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}

const hex = document.getElementById("hex_op");
hex.addEventListener('click',function(){
    modo_op = 2;
    console.log("Function hex");
})
const simple = document.getElementById("simple_op");
simple.addEventListener('click',function(){
    modo_op = 1;
    console.log("Function simple");
})