
let t = document.getElementById('Temp').textContent;
let s = document.getElementById('Speed').textContent;

if (t <= 50 && s >= 3) {
    let result = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    document.getElementById("WindChill").textContent = result;
}
else {
    document.getElementById("WindChill").textContent = "N/A"
}