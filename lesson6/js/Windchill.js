let t = document.getElementById('Temp').textContent;
let s = document.getElementById('Speed').textContent;

if (t <= 50 && s >= 3) {
    let p = Math.pow(s, 0.16);
    let f = 35.74 + 0.6215 * t - 35.75 - p + 0.4275 * t * p;
    let result = f.toFixed(1);
    document.getElementById('WindChill').innerHTML = result + '&#8457;';
} else {
    document.getElementById('WindChill').textContent = "N/A";
}