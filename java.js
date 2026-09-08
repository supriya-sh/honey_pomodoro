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
// ALL DECLARATIONS FINISHED

function goBack(){ //WHEN GETTING OUT FROM TIMER PAGE(FOR THE BACK ARROW)
    window.location.href = "index.html";
}

//THIS FUNCTION IS ONLY TO SHOW THE TIMING BEFORE THE USER CLICKS START, NOT ANYTHING TO DO WITH THE COUNTDOWN
if (startTime) { //THIS MEANS THE DOCUMENT WHICH ONLY HAS ID OF STUDYTIME AS IT IS LINKED TO OTHER HTML FILES
    let savedTime = localStorage.getItem("studyTime"); //TO GET ITEM FROM FILE TO FILE WHERE STUDY TIME IS CHOSEN INTO A VALUE
    timeLeft = Number(savedTime) * 60; //CONVERT IT TO SECONDS
    let minutes = Math.floor(timeLeft / 60); //FLOOR CANCEL OUTS THE DECIMAL
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
    if (timeLeft === 0) { //FOR WHEN THE TIMER ENDS, WHAT THINGS ARE TO BE PERFORMED
        clearInterval(breakCountdown); //STOPS THE TIMER
        alarmSound.play();
        localStorage.removeItem("studyTime"); //BOTH OF THESE ARE REMOVED SO THAT WE CAN GO TO ANOTHER PAGE AND THIS PAGE COMPLETELY REFRESHES
        localStorage.removeItem("breakTime");
        window.location.href = "index.html"; //PATH WHERE IS TO BE GONE ACCORDINGLY
        return;
    }
    timeLeft--; //RUNS THE LOOP WHERE EVERY SECOND TIMELEFT IS DECREASED BY 1 WHICH CHANGES THE VALUE EVERYTIME, GIVES THE EFFECT OF A COUNTDOWN    
}

//UPDATE BREAKTIMER IS USED IN BOTH TIMER AND BREAK CASES, ONLY THE GIVEN TIMELEFT VALUE IS DIFFERENT
if (timerTime) {
    let savedBreakTime = localStorage.getItem("breakTime");
    timeLeft = Number(savedBreakTime) * 60;
    updateBreakTimer();
    breakCountdown = setInterval(updateBreakTimer, 1000);//THIS IS THE MAIN REASON THE TIMER DECREASES BY 1 SECOND AS IT SPECIFIES THAT UPDATEBREAKTIMER RUNS AFTER EVERY 1000 MILLISECONDS
}

function resetTimer(){
    clearInterval(countdown); //NOW THE COUNTDOWN THAT WAS RUNNING EVERY SECOND IS COMPLETELY RESETTED
    countdown = null;//ENSURES NO TIMER IS RUNNING
    let savedTime = localStorage.getItem("studyTime");
    timeLeft = Number(savedTime) * 60;
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    startTime.textContent =//NOW THE ORIGINAL TIME IS AGAIN SHOWN 
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
    done.textContent = "";//NOTHING TO BE SHOWN IN DONE CLASS
    timerIcon.classList.remove("resume");//REMOVES THE RESUME ICON AND ADDS THE STOP ICON INSTEAD
    timerIcon.classList.add("stop-icon");
}

//FOR EVERY TIME FOR STUDY CHOSEN, IT GIVES RESPECTIVE BREAK TIME AND STUDY TIME (DOESN'T SHOW IT TO USER THO, DONE LATER ON)
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

//THIS IS WHERE IT PRINTS TO USER THE BREAK TIME FOR EVERY STUDY TIME
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

if (studyTime && breakTime) {//RUNS ONLY ONLY IF BOTH OF STUDYTIME AND BREAKTIME IS IN SOME HTML PAGE
    studyTime.addEventListener("change", showBreakTime);//FOR EVERY CHANGED OPTION FROM THE DROPBOX, A DIFFERENT BREAK TIME IS DISPLAYED TO THE USER
    showBreakTime();
}

function goToTimer() {
    localStorage.setItem("studyTime", studyTime.value);//THE LOCAL STORAGE OF THE PAGE WHERE THE FUNCTION IS IN THE STUDY TIME OF THAT PAGE IS KEPT UNDER THE TITLE STUDYTIME
    window.location.href = "timer.html";
}