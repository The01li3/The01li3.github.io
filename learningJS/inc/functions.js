function fnShowHide(pButton, pBody,){
    const vButtonArr = pButton.innerHTML.split(" ");
    var vButtonText = "";
    for (let i = 1; i < vButtonArr.length; i++) {
        vButtonText += vButtonArr[i] + " ";
    }
    if (document.getElementById(pBody).style.display == "block"){
        document.getElementById(pBody).style.display = "none";
        pButton.innerHTML = "Show " + vButtonText;
    } else {
        document.getElementById(pBody).style.display = "block";
        pButton.innerHTML = "Hide " + vButtonText;
    }
}

function fnReplaceHTML(pInput){
    pInput = pInput.replace(/</g, "&lt");
    pInput = pInput.replace(/>/g, "&gt");
    return pInput;
}