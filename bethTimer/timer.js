function widget_addLoadEvent(pFunction)
{
    var vfnOldOnLoad = window.onload;
    if (typeof window.onload != 'function')
    {
        window.onload = pFunction;
    }
    else
    {
        window.onload = function()
        {
            vfnOldOnLoad();
            pFunction();
        }
    }
};

var vCount = 0;
var vSeconds = 0;
var vArrTimings = [];
var vTimer = document.getElementById("timer");
var vBtnLockTimes = document.getElementById("btn-lockTimes");
var vIconlock = document.getElementById("icnLock");
var vBtnStart = document.getElementById('btn-start');
var vBtnStop = document.getElementById('btn-pause');
var vBtnReset = document.getElementById('btn-refresh');
var vRestAudio = document.getElementById("audRest"); 
var vGoAudio = document.getElementById("audGo");

vBtnLockTimes.addEventListener("click", function () {
    var inputs = document.querySelectorAll(".time-input");

    var rep1 = document.getElementById("1reps").value;
    var time1 = document.getElementById("1time").value;
    var rest1 = document.getElementById("1rest").value;
    var rep2 = document.getElementById("2reps").value;
    var time2 = document.getElementById("2time").value;
    var rest2 = document.getElementById("2rest").value;
    var rep3 = document.getElementById("3reps").value;
    var time3 = document.getElementById("3time").value;
    var rest3 = document.getElementById("3rest").value;
    var rep4 = document.getElementById("4reps").value;
    var time4 = document.getElementById("4time").value;
    var rest4 = document.getElementById("4rest").value;

    if (vIconlock.classList.contains('bi-unlock-fill')) {
        vIconlock.classList.remove('bi-unlock-fill');
        vIconlock.classList.add('bi-lock-fill');
        vBtnStart.disabled = false; 
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].readOnly = true;
        }
        for (let i = 0; i < rep1; i++) { 
            vArrTimings.push(time1,rest1);                  
        }
        for (let i = 0; i < rep2; i++) { 
            vArrTimings.push(time2,rest2);        
        }
        for (let i = 0; i < rep3; i++) { 
            vArrTimings.push(time3,rest3);        
        }
        for (let i = 0; i < rep4; i++) { 
            vArrTimings.push(time4,rest4);        
        }
    } else {
        vIconlock.classList.add('bi-unlock-fill');
        vIconlock.classList.remove('bi-lock-fill');
        vBtnStart.disabled = true; 
        vBtnReset.disabled = true;
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].readOnly = false;
        }
    }
});


vBtnStart.addEventListener("click", function () {
    timer = true;
    vBtnStart.disabled = true; 
    vBtnStop.disabled = false;
    vBtnReset.disabled = false;
    startTimer();
});

vBtnStop.addEventListener("click", function() {
    vBtnStart.disabled = false;
    vBtnStop.disabled = true;
    vBtnReset.disabled = false;
    timer = false;
});

vBtnReset.addEventListener("click", function() {
    vTimer.innerHTML = "00";
    vBtnStart.disabled = false;
    vBtnStop.disabled = true;
    timer = false;
    vSeconds = 0;
});


function startTimer() {
    if(timer){
        vSeconds++;
        vTimer.innerHTML = vSeconds;
        //document.getElementById('body-id').style.backgroundColor = "red";
        //vRestAudio.play();
        if (vSeconds == vArrTimings[0]) {
            vArrTimings.shift();  
            vGoAudio.play();
            vSeconds = 0;
        }        
        setTimeout(startTimer,1000);
    }
}