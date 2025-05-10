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
var vArrHeadings = [];
var vTimer = document.getElementById("timer");
var vBtnLockTimes = document.getElementById("btn-lockTimes");
var vIconlock = document.getElementById("icnLock");
var vBtnStart = document.getElementById('btn-start');
var vBtnStop = document.getElementById('btn-pause');
var vBtnReset = document.getElementById('btn-refresh');
var vRestAudio = document.getElementById("audRest"); 
var vGoAudio = document.getElementById("audGo");
var vBreakAudio = document.getElementById("audBreak");

var viRounds = 3;
var vArrAllTimes = [["Warmup",30,6,1,5,30]]; //time,moves,reps,rest,break

for(let i=1; i<=viRounds; i++){
    vArrAllTimes.push(["Round " + i,45,5,2,10,30]);
}

// Convert array to object structure
var varResult = { rounds: [] };
for (var i = 0; i < vArrAllTimes.length; i++) {
    var row = vArrAllTimes[i];
    varResult.rounds.push({
        vcName: row[0],
        viTime: row[1],
        viMoves:row[2],
        viReps: row[3],        
        viRest: row[4],
        viBreak: row[5],
        id: i  // useful for setting unique input IDs
    });
}

function fnPopulateTimer() {
    var vScreenTemplate = Handlebars.compile(`
      {{#each rounds}}
        <h3 class="mt-4">{{vcName}}</h3> 
        <form class="container">
          <div class="row g-3">
            <div class="col-3">
              <label for="{{id}}time" class="form-label">Time:</label>
              <input type="number" id="{{id}}time" name="{{id}}time" class="form-control time-input" value="{{viTime}}">
            </div>
            <div class="col-3">
              <label for="{{id}}moves" class="form-label">Moves:</label>
              <input type="number" id="{{id}}moves" name="{{id}}moves" class="form-control time-input" value="{{viMoves}}">
            </div>
            <div class="col-3">
              <label for="{{id}}reps" class="form-label">Reps:</label>
              <input type="number" id="{{id}}reps" name="{{id}}reps" class="form-control time-input" value="{{viReps}}">
            </div>
            <div class="col-3">
              <label for="{{id}}rest" class="form-label">Rest:</label>
              <input type="number" id="{{id}}rest" name="{{id}}rest" class="form-control time-input" value="{{viRest}}">
            </div>
          </div>
        </form>
      {{/each}}
    `);
    document.getElementById("timerDiv").innerHTML = vScreenTemplate(varResult);
}

vBtnLockTimes.addEventListener("click", function () {
    var inputs = document.querySelectorAll(".time-input");
    var updatedArr = [];
    vArrTimings = [];
    vArrHeadings = []; 

    if (vIconlock.classList.contains('bi-unlock-fill')) {
        vIconlock.classList.remove('bi-unlock-fill');
        vIconlock.classList.add('bi-lock-fill');
        vBtnStart.disabled = false; 
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }   
        for (var i = 0; i < vArrAllTimes.length; i++) {
            var vcName = document.querySelectorAll('h3')[i].textContent;     
            var viTime = parseInt(document.getElementById(i + 'time').value); 
            var viMoves = parseInt(document.getElementById(i + 'moves').value);  
            var viReps = parseInt(document.getElementById(i + 'reps').value);            
            var viRest = parseInt(document.getElementById(i + 'rest').value);            
            var viBreak = parseInt(vArrAllTimes[i][4]); // keep original break value if not editable

            // If you also want to read "break" from an input, you'd add:
            // var breakVal = document.getElementById(i + 'break').value;
        
            updatedArr.push([vcName,viTime, viMoves, viReps, viRest, viBreak]);
          }        
          vArrAllTimes = updatedArr;

          for (var i = 0; i < vArrAllTimes.length; i++) {
            for (var j = 1; j <= vArrAllTimes[i][1];j++) {
                if (j != vArrAllTimes[i][1]) {
                    vArrTimings.push(parseInt(vArrAllTimes[i][2], 10),parseInt(vArrAllTimes[i][3], 10));
                    vArrHeadings.push("Time","Rest");
                } else {
                    vArrTimings.push(parseInt(vArrAllTimes[i][2], 10),parseInt(vArrAllTimes[i][4], 10));
                    vArrHeadings.push("Time","Break - " + vArrAllTimes[i][0]);
                }
            }           
        }
        console.log(vArrTimings);
        console.log(vArrHeadings);
    } else {
        vIconlock.classList.add('bi-unlock-fill');
        vIconlock.classList.remove('bi-lock-fill');
        vBtnStart.disabled = true; 
        vBtnReset.disabled = true;
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
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
        vTimer.innerHTML = vArrTimings[0] - vSeconds;
        
        //document.getElementById('body-id').style.backgroundColor = "red";
        //vRestAudio.play();
        if (vSeconds == vArrTimings[0]) {
            if (vArrHeadings[1] == "Rest") {
                vRestAudio.play();
            } else if (vArrHeadings[1] == "Time") {
                vGoAudio.play();
            } else if (vArrHeadings[1].startsWith("Break")) {
                vBreakAudio.play();
            }
            
            vArrTimings.shift(); 
            vArrHeadings.shift();            
            vSeconds = 0;
            document.getElementById("currentDiv").innerHTML = vArrHeadings[0];
            
        }        
        setTimeout(startTimer,1000);
    }
}