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

/*DEFAULT TIMINGS */
var vBreak =  parseInt(document.getElementById("RoundBreak").value);
var vPause = parseInt(document.getElementById("RepositionTime").value);;


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
var vBreakAudio = document.getElementById("audBreak");

var viRounds = 3;
var vArrAllTimes = [["Warmup",30,6,1,5,vBreak]]; //time,moves,reps,rest,break,pause

for(let i=1; i<=viRounds; i++){
    vArrAllTimes.push(["Round " + i,45,5,2,10,vBreak]);
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

    if (vIconlock.classList.contains('bi-unlock-fill')) {
        vIconlock.classList.remove('bi-unlock-fill');
        vIconlock.classList.add('bi-lock-fill');
        vBtnStart.disabled = false; 
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }   
        for (var i = 0; i < viRounds; i++) {
            console.log(document.getElementById(i + 'time').value);
            var vcName = document.querySelectorAll('h3')[i].textContent;     
            var viTime = parseInt(document.getElementById(i + 'time').value); 
            var viMoves = parseInt(document.getElementById(i + 'moves').value);  
            var viReps = parseInt(document.getElementById(i + 'reps').value);            
            var viRest = parseInt(document.getElementById(i + 'rest').value);            
            var viBreak = parseInt(document.getElementById("RoundBreak").value);; // keep original break value if not editable
            var viPause = parseInt(document.getElementById("RepositionTime").value);

            // If you also want to read "break" from an input, you'd add:
            // var breakVal = document.getElementById(i + 'break').value;
    
        updatedArr.push([vcName,viTime, viMoves, viReps, viRest, viBreak, viPause]);
        }        
        vArrAllTimes = updatedArr;
        vArrAllTimes.push(["Finished",0,0,0,0,0,0]);

        for(var i = 0; i < vArrAllTimes.length; i++) { //each line
            for(var j = 1; j <= vArrAllTimes[i][3];j++) { //cycle reps
                for(var k=1; k <= vArrAllTimes[i][2];k++){//cycle moves
                    vArrTimings.push([vArrAllTimes[i][1],"Time",vArrAllTimes[i][0] + " Rep: " + j + " Exercise: " + k]);
                    if (j == vArrAllTimes[i][3] && k == vArrAllTimes[i][2]) { //end of reps and moves                     
                        vArrTimings.push([vArrAllTimes[i][5],"Break","Next: " + vArrAllTimes[i + 1][0] + " Rep: 1 Exercise: 1"]);
                    } else if (k == vArrAllTimes[i][2]) { //end of moves
                        vArrTimings.push([vArrAllTimes[i][4],"Rest","Next: " + vArrAllTimes[i][0] + " Rep: " + (j + 1) + " Exercise: 1"])
                    } else if (j == vArrAllTimes[i][3]){ //end of reps
                        vArrTimings.push([vArrAllTimes[i][6],"Rest","Next: " + vArrAllTimes[i][0] + " Rep: " + (j) + " Exercise: " + (k + 1)])
                    } else{
                        vArrTimings.push([vArrAllTimes[i][6],"Rest","Next: " + vArrAllTimes[i][0] + " Rep: " + (j) + " Exercise: " + (k + 1)])
                    }
                }
            }           
        }
        console.log("All");
        console.log(vArrAllTimes);
        console.log("Time");
        console.log(vArrTimings);
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
        vTimer.innerHTML = vArrTimings[0][0] - vSeconds;
        
        //document.getElementById('body-id').style.backgroundColor = "red";
        //vRestAudio.play();
        if (vSeconds >= vArrTimings[0][0]) {
            if (vArrTimings[1][1] == "Rest") {
                vRestAudio.play();
            } else if (vArrTimings[1][1] == "Time") {
                vGoAudio.play();
            } else if (vArrTimings[1][1].startsWith("Break")) {
                vBreakAudio.play();
            }
            
            vArrTimings.shift(); 
            
            vSeconds = 0;
            document.getElementById("currentDiv").innerHTML = vArrTimings[0][2];
            
        }        
        setTimeout(startTimer,500);
    }
}