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
var vTimer = document.getElementById("timer");
var vBtnStart = document.getElementById('btn-start');
var vBtnStop = document.getElementById('btn-pause');
var vBtnReset = document.getElementById('btn-refresh');

vBtnStart.addEventListener("click", function () {
    timer = true;
    vBtnStart.disabled = true; 
    vBtnStop.disabled = false;
    startTimer();
});

vBtnStop.addEventListener("click", function() {
    vBtnStart.disabled = false;
    vBtnStop.disabled = true;
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
        setTimeout(startTimer,1000);
    }
}