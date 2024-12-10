// function check () {
//     alert("ok")
// }
// // setTimeout(check, 3000)
//  let text = setInterval(check, 2000) 

// setTimeout( () => {
//     clearInterval(text)
// }, 10000 )


// 1 тапшырма

let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

function zerou(value) {
    return value < 10 ? `0${value}` : value;
}

function updateTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    timer.innerHTML = `${zerou(hours)}:${zerou(minutes)}:${zerou(seconds)}`;
}


function startTimer() {
        intervalId = setInterval(updateTimer, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

function stopTimer() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(intervalId);
    intervalId = null; 

    seconds = 0;
    minutes = 0;
    hours = 0;

   
    timer.innerHTML = `${zerou(hours)}:${zerou(minutes)}:${zerou(seconds)}`;

    startBtn.disabled = false; 
    stopBtn.disabled = true; 
    resetBtn.disabled = true; 
}




startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer); 

stopBtn.disabled = true;
resetBtn.disabled = true;



//2 тапшырма

let age = prompt("Сколько тебе лет?");


if (age !== null) { 
    age = parseInt(age); 
    if (isNaN(age)) {
        alert("Пожалуйста, введите корректный возраст.");
    } else if (age < 13) {
        alert("Тебе нельзя войти. Тебе слишком мало лет.");
    } else if (age === 13 || age === 14 || age === 15) {
        alert("Тебе нельзя войти.");
    } else if (age === 16 || age === 17) {
        let permission = prompt("Тебе родители разрешили войти?");
        if (permission && permission.toLowerCase() === "да разрешили") {
            alert("Добро пожаловать!");
        } else {
            alert("Тебе нельзя войти.");
        }
    } else {
        alert("Добро пожаловать!");
    }
} else {
    alert("Вы отменили ввод.");
}




