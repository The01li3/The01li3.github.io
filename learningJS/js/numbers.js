function fnNumbersFillIn(){
    let x = "5" + 2 + 3;
    let y = 2 + 3 + "5";
    let vInputText;                  
    vInputText = `<pre>"5" + 2 + 3 = ${x}
    2 + 3 + "5" = ${y}</pre>`;  
    document.getElementById("variablex").innerHTML = vInputText;

    document.getElementById("PrecisionIssue").innerHTML = 0.2 + 0.1;

    document.getElementById("ConvertToNumberic").innerHTML = "6" * "2";
}