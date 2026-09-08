let studyTime= document.getElementById("studytime");
let breakTime= document.getElementById("breaktime");
let startTime= document.getElementById("timerstartpage");
let timerTime= document.getElementById("breakstartpage");
let done = document.getElementById("done");
let timerButton = document.getElementById("timerButton");
let timerIcon = document.querySelector(".stop-icon");
let startbutton= document.getElementById("start-btn");
let alarmSound = new Audio("sparkling-chime-sound.mp3");
let countdown;
let timeLeft;
let breakCountdown;

function goBack(){
    window.location.href = "index.html";
}

if (startTime) {
    let savedTime = localStorage.getItem("studyTime");
    timeLeft = Number(savedTime) * 60;
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    startTime.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function updateBreakTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerTime.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
    if (timeLeft === 0) {
        clearInterval(breakCountdown);
        alarmSound.play();
        localStorage.removeItem("studyTime");
        localStorage.removeItem("breakTime");
        window.location.href = "index.html";
        return;
    }
    timeLeft--;
}

if (timerTime) {
    let savedBreakTime = localStorage.getItem("breakTime");
    timeLeft = Number(savedBreakTime) * 60;
    updateBreakTimer();
    breakCountdown = setInterval(updateBreakTimer, 1000);
}

function resetTimer(){
    clearInterval(countdown);
    countdown = null;
    let savedTime = localStorage.getItem("studyTime");
    timeLeft = Number(savedTime) * 60;
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    startTime.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
    done.textContent = "";
    timerIcon.classList.remove("resume");
    timerIcon.classList.add("stop-icon");
}
function updateTimer() {
    minutes = Math.floor(timeLeft / 60);
    seconds = timeLeft % 60;
    startTime.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
    if (timeLeft === 0) {
        clearInterval(countdown);
        countdown = null;
        alarmSound.play();
        let savedStudyTime = localStorage.getItem("studyTime");
        let breakMinutes;
        if (savedStudyTime === "25" || savedStudyTime === "30") {
            breakMinutes = 5;
        }
        else if (savedStudyTime === "45" || savedStudyTime === "50") {
            breakMinutes = 10;
        }
        else if (savedStudyTime === "60") {
            breakMinutes = 15;
        }
        else if (savedStudyTime === "90") {
            breakMinutes = 20;
        }
        localStorage.setItem("breakTime", breakMinutes);
        window.location.href = "break.html";
        return;
}
    timeLeft--;
}

function startTimer() {
    if (countdown) {
        clearInterval(countdown);
        countdown = null;
        timerIcon.classList.remove("stop-icon");
        timerIcon.classList.add("resume");
        return;
    }
    done.textContent = "";
    countdown = setInterval(updateTimer, 1000);
    timerIcon.classList.remove("resume");
    timerIcon.classList.add("stop-icon");
    startbutton.textContent="Pause"
    updateTimer();
}

function showBreakTime(){
    if (studyTime.value == "25"){
        breakTime.textContent = "5 minutes";
        localStorage.setItem("breakTime", "5");
    }
    else if (studyTime.value == "30"){
        breakTime.textContent = "5 minutes";
        localStorage.setItem("breakTime", "5");
    }
    else if (studyTime.value == "45"){
        breakTime.textContent = "10 minutes";
        localStorage.setItem("breakTime", "10");
    }
    else if (studyTime.value == "50"){
        breakTime.textContent = "10 minutes";
        localStorage.setItem("breakTime", "10");
    }
    else if (studyTime.value == "60"){
        breakTime.textContent = "15 minutes";
        localStorage.setItem("breakTime", "15");
    }
    else if (studyTime.value == "90"){
        breakTime.textContent = "20 minutes";
        localStorage.setItem("breakTime", "20");
    }
    else{
        breakTime.textContent = "Please pick a desired study time!";
    }
}
if (studyTime && breakTime) {
    studyTime.addEventListener("change", showBreakTime);
    showBreakTime();
}

function goToTimer() {
    localStorage.setItem("studyTime", studyTime.value);
    window.location.href = "timer.html";
}