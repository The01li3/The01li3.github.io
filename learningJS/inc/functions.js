/*Shared Functions*/
function fnShowHide(pButton, pDiv,){
    const vButtonArr = pButton.innerHTML.split(" ");
    var vButtonText = "";
    for (let i = 1; i < vButtonArr.length; i++) {
        vButtonText += vButtonArr[i] + " ";
    }
    if (document.getElementById(pDiv).style.display == "block"){
        document.getElementById(pDiv).style.display = "none";
        pButton.innerHTML = "Show " + vButtonText;
    } else {
        document.getElementById(pDiv).style.display = "block";
        pButton.innerHTML = "Hide " + vButtonText;
    }
}

function fnReplaceHTML(pInput){
    pInput = pInput.replace(/</g, "&lt");
    pInput = pInput.replace(/>/g, "&gt");
    return pInput;
}