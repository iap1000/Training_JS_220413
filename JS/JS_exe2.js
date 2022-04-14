// @@@@@@@@@@@  Exe2 @@@@@@@@@@@@@
let actual_number = 0;
document.getElementById("inc").addEventListener('click',function(){
    actual_number += 1;
    count_actualize();
    console.log(actual_number);
})
document.getElementById("dec").addEventListener('click',function(){
    actual_number -= 1;
    count_actualize();
    console.log(actual_number);
})
document.getElementById("reset").addEventListener('click',function(){
    actual_number = 0;
    count_actualize();
    console.log(actual_number);
})
const exe2_number = document.querySelector("#counter_text");

function count_actualize() {
    exe2_number.textContent = actual_number;
    if(actual_number>0) {
        exe2_number.style.color = "green";
    } else if (actual_number < 0) {
        exe2_number.style.color = "red";
    } else {
        exe2_number.style.color = "black";
    }
}