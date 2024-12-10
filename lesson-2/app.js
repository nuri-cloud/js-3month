let item = document.getElementById("text")

item.innerHTML = "hello "

//......................


let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let countDisplay = document.getElementById("count");
let multiplyDisplay = document.getElementById("multiply");
let idDisplay = document.getElementById("id");
let a = document.getElementById("count")
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 16){
        setNumber()
    }
})


let timer = 0

function setNumber() {
    timer++;
    count.innerHTML = timer;
}

increment.onclick = setNumber



function setNumber2() {
    timer--;
    count.innerHTML = timer;

}

decrement.onclick = setNumber2

function setNumber2() {
    if (timer > 0) {
        timer--;
        countDisplay.innerHTML = timer;
    } else {
        alert("Значение не может быть меньше 0");
    }
}

// 1 тапшырма

function setNumber3() {
    let multiply = prompt("кайсы сан жазасын")
    timer *= multiply;
  count.innerHTML = timer;

}

multiplyDisplay.onclick = setNumber3

// 2 тапшырма

function setNumber4() {
    let id = prompt("кайсы сан жазасын")
    timer /= id;
  count.innerHTML = timer;

}

idDisplay.onclick = setNumber4

  // 3 тапшырма


// const box = document.getElementById("box");

// document.addEventListener("keydown", function(event) {
//     if (
//         event.code === "ArrowLeft" || 
//         event.code === "ArrowUp" || 
//         event.code === "ArrowRight" || 
//         event.code === "ArrowDown"
//     ) {
//         moveBox(event.code);
//     }
// });

// function moveBox(direction) {
//     const currentPosition = box.getBoundingClientRect();
//     let newLeft = currentPosition.left;
//     let newTop = currentPosition.top;

//     if (direction === "ArrowLeft") {
//         newLeft -= 10; 
//     } else if (direction === "ArrowUp") {
//         newTop -= 10;
//     } else if (direction === "ArrowRight") {
//         newLeft += 10; 
//     } else if (direction === "ArrowDown") {
//         newTop += 10; 
//     }

   
//     box.style.left = newLeft - 10 + "px"; 
//     box.style.top = newTop - 10 + "px"; 
// }





