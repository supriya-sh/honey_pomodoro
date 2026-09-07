let studyTime= document.getElementById("studytime");
let breakTime= document.getElementById("breaktime");

function startTimer() {
    timeLeft = Number(studyTime.value) * 60;
    done.textContent = "";
    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timer.textContent =
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
studyTime.addEventListener("change", showBreakTime)
showBreakTime();