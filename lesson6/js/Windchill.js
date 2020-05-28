var CurrentTemp = document.getElementById("Temp").value;
var CurrentSpeed = document.getElementById("Speed").value;

function Chill (CurrentTemp, CurrentSpeed) {
    var Result = 35.74 + 0.6215 * CurrentTemp - 35.75 * Math.pow(CurrentSpeed, 0.16) + 0.4275 * CurrentTemp * Math.pow(CurrentSpeed, 0.16);
    return(Result);
}

if (CurrentTemp < 51 && CurrentSpeed > 2.9) {
    document.getElementById("WindChill").textContent = Result;
}
else {
    document.getElementById("WindChill").textContent = "N/A"
}