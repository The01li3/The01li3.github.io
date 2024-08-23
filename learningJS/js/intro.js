/*intro functions*/
function modOnePossibilitiesPt1(pThis) {
    pThis.innerHTML = "Hello World"; //double ""
    pThis.innerHTML = 'Hello World2'; //single ''
    pThis.style.fontSize = "10px"; //resize
    //pThis.style.display = "none"; // hide
    pThis.style.display = "block"; // show
    pThis.innerHTML = "Ive Been Initialised " + (5 + 6); //Operators
}
function modOnePossibilitiesPt2() {
    vIntOne = 5; vIntTwo = 6; vIntThree = vIntOne + vIntTwo; //spaces between operators
    document.getElementById("btnMessage").innerHTML = vIntThree; //using variables
    console.log("Initial pressed"); //normal debugging
    alert("Initial pressed, comment in console.log");
}
