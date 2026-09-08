let studyTime= document.getElementById("studytime");
let breakTime= document.getElementById("breaktime");
let startTime= document.getElementById("timerstartpage");
let done = document.getElementById("done");

function breakTimer(){
    
}



if (startTime) {
    let savedTime = localStorage.getItem("studyTime");
    startTime.textContent = savedTime + ":  00";
}

function pauseTimer(){
    
}

function startTimer() {
    pauseTimer();
    let savedTime = localStorage.getItem("studyTime");
    timeLeft = Number(savedTime) * 60;
    done.textContent = "";
    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
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
    updateTimer();
    countdown = setInterval(updateTimer, 1000);
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