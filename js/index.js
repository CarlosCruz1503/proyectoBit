const time = document.querySelector("#time-text-pomodoro");
const startButtom = document.querySelector("#startButton");

let seconds = 60
let minutes = 24
let bloqueo = 0
startButtom.addEventListener("click", () => {
    bloqueo++
    if (bloqueo == 1){
        const interval = setInterval(() => {
            seconds--
            if (seconds == 00 && minutes != -1) {
                seconds = 60
                minutes--
            }
            time.textContent = `${minutes} : ${seconds}`;
            if (minutes == -1) {
                clearInterval(interval)
                time.textContent = "End";
            }
        }, 1000)
    }
})