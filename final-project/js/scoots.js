/* This pulls in the current date and time for me */
document.getElementById("year").textContent = new Date().getFullYear();
/*
var d = new Date();
var day = d.getDate();
const WeekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("currentTime").innerHTML = WeekDay[d.getDay()] + ", " + (new Date().toLocaleString("en", {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
}));
*/
document.getElementById("lastModified").textContent = document.lastModified;

/* This is the responsive button that makes the drop down menu appear on click from the small viewport */
const responsebutton = document.querySelector('.response');
const mainnav = document.querySelector('.navigation')
responsebutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

/* This changes the language in the mobile view from Open Menu to Close Menu */
var button = document.getElementById("switch");
button.addEventListener('click',
    function () {
        if (button.getAttribute("data-text-swap") == button.innerHTML) {
            button.innerHTML = button.getAttribute("data-text-original");
        } else {
            button.setAttribute("data-text-original", button.innerHTML);
            button.innerHTML = button.getAttribute("data-text-swap");
        }
    }, false);

/* This is for the image slide show on the large and medium view ports */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}