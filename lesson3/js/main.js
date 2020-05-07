document.getElementById("year").textContent = new Date().getFullYear();

var d = new Date();
var date = d. getDate();
var month = d. getMonth() + 1;
var year = d. getFullYear();
var dateStr = month + "/" + date + "/" + year;

document.getElementById("CurrentTime").innerHTML = " " + dateStr + " " + new Date(new Date().getTime()).toLocaleTimeString();