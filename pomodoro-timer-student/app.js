//App logic in JS goes here
// The data/time we want to countdown to

const presetTimer = {
    pomodoro : 25,
    LongBreaK : 15,
    shortBreak : 5,
    seconds : 0


};

let Timer = {
    mins : 0,
    seconds : 0

};
let isTimerRunning = false;
// Setup
UpdateTimeDisplay()

function SetTime(timeMins) {
    Timer.mins = timeMins;
    Timer.seconds= presetTimer.seconds;
    resetMins=Timer.mins;
    resetseconds=Timer.seconds;
    UpdateTimeDisplay();


    
}

function Onclick_PomodoroBtn() {

    SetTime(presetTimer.pomodoro);

}

function Onclick_ShortBreakBtn() {
    SetTime(presetTimer.shortBreak);



}

function Onclick_LongBreakBtn() {
    SetTime(presetTimer.LongBreaK);
    
}

function UpdateResetTime() {
    

}

function UpdateTimeDisplay() {
    formattedSeconds= ("0" + Timer.seconds).slice(-2)
    document.getElementById("timerText").innerHTML = `${Timer.mins}:${formattedSeconds}`

}

function ToggleTimer() {

    if(!isTimerRunning) { 
        isTimerRunning= true
        document.getElementById("toggleBtn").textContent="Pause"
        interval = setInterval(function () {
        Timer.seconds--;
        if(Timer.seconds < 0){
            Timer.mins--;
            Timer.seconds=59;
        
            
        }

        UpdateTimeDisplay();
        if(Timer.mins==0 && Timer.seconds==0){
            clearInterval(interval);
            document.body.style.backgroundColour = "Green";
            setTimeout(() =>{
                alert("Times up!")
            },100)
    
        }
        

    }, 1000)    // delay for each interval in milliseconds

    }
    else{
        clearInterval(interval);
        isTimerRunning=false
        document.getElementById("toggleBtn").textContent="Start"
        document.getElementById("resetBtn").disabled=true


    }
}

function Reset() {
    Timer.mins=resetMins
    Timer.seconds=resetseconds
    UpdateTimeDisplay();
    //get reset variable
    //reset time

}
