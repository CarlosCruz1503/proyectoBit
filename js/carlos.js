const time = document.querySelector("#time-text-pomodoro");
const startButtom = document.querySelector("#startButton");
const workButtom = document.querySelector("#button-work");
const restButtom = document.querySelector("#button-rest");

let seconds = 59
let minutes = 24
let bloqueo = 0

var intervalId = null;

workButtom.addEventListener("click", () => {
    seconds = 59
    minutes = 24
    time.textContent = `${minutes} : ${seconds}`
    clearInterval(intervalId);
    bloqueo = 0
    startButtom.innerHTML = "START"
})

restButtom.addEventListener("click", () => {
    seconds = 59
    minutes = 4
    time.textContent = `${minutes} : ${seconds}`
    clearInterval(intervalId);
    bloqueo = 0
    startButtom.innerHTML = "START"
})

startButtom.addEventListener("click", () => {
    bloqueo++
    if (bloqueo == 1) {
        intervalId = setInterval(() => {
            seconds--
            if (seconds == 00 && minutes != -1) {
                seconds = 60
                minutes--
            }
            time.textContent = `${minutes} : ${seconds}`;
            if (minutes == -1) {
                clearInterval(intervalId)
                time.textContent = "End";
            }
            startButtom.innerHTML = "STOP"
        }, 1000)
    }
    if (bloqueo != 1) {
        clearInterval(intervalId)
        startButtom.innerHTML = "START"
        bloqueo = 0
    }
})