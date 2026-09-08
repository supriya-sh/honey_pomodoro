let studyTime= document.getElementById("studytime");
let breakTime= document.getElementById("breaktime");
let startTime= document.getElementById("timerstartpage");
let done = document.getElementById("done");
let timerButton = document.getElementById("timerButton");
let timerIcon = document.querySelector(".stop-icon");
let startbutton= document.getElementById("start-btn")
let countdown;
let timeLeft;

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
        done.textContent = "Done! Take some break!!";
        return;
    }
    timeLeft--;
}

// function startTimer() {
//     done.textContent = "";
//     updateTimer();
//     countdown = setInterval(updateTimer, 1000);
// }

function startTimer() {

    // If timer is running, pause it
    if (countdown) {

        clearInterval(countdown);
        countdown = null;

        timerIcon.classList.remove("stop-icon");
        timerIcon.classList.add("resume");

        return;
    }

    // If timer is paused, start again
    done.textContent = "";
    countdown = setInterval(updateTimer, 1000);
    timerIcon.classList.remove("resume");
    timerIcon.classList.add("stop-icon");
    startbutton.textContent="Pause"
    updateTimer();
}

function showBreakTime(){
    if (studyTime.value=="25"){
        breakTime.textContent="5 minutes";
    }
    else if (studyTime.value=="30"){
        breakTime.textContent="5 minutes";
    }
    else if (studyTime.value=="45"){
        breakTime.textContent="10 minutes";
    }
    else if (studyTime.value=="50"){
        breakTime.textContent="10 minutes";
    }
    else if (studyTime.value=="60"){
        breakTime.textContent="15 minutes";
    }
    else if (studyTime.value=="90"){
        breakTime.textContent="20 minutes";
    }
    else{
        breakTime.textContent="Please pick a desired study time!"
    }
    
};
if (studyTime && breakTime) {
    studyTime.addEventListener("change", showBreakTime);
    showBreakTime();
}
function goToTimer() {
    localStorage.setItem("studyTime", studyTime.value);
    window.location.href = "timer.html";
}