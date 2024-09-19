function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

function fnOnLoad(){
    document.getElementById("invoked").innerHTML += toCelsius(77);
    document.getElementById("nInvoked").innerHTML += toCelsius;
}
