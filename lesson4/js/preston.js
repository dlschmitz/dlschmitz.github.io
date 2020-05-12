/*This pulls in the current date and time for me*/
document.getElementById("year").textContent = new Date().getFullYear();
var d = new Date();
var date = d. getDate();
var month = d. getMonth() + 1;
var year = d. getFullYear();
var dateStr = month + "/" + date + "/" + year;
document.getElementById("CurrentTime").innerHTML = " " + dateStr + " " + new Date(new Date().getTime()).toLocaleTimeString();

const responsebutton = document.querySelector('.response');
const mainnav = document.querySelector('.navi')

responsebutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
/*This changes the language in the mobile view from Open Menu to Close Menu */
var button = document.getElementById("Switch");
button.addEventListener('click', 
function() {
    if (button.getAttribute("data-text-swap") == button.innerHTML) {
        button.innerHTML = button.getAttribute("data-text-original");
    }
    else {
        button.setAttribute("data-text-original", button.innerHTML);
        button.innerHTML = button.getAttribute("data-text-swap");
    }
}, false);