/* This pulls in the current date and time for me */
document.getElementById("year").textContent = new Date().getFullYear();
var d = new Date();
var day = d.getDate();
const WeekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("CurrentTime").innerHTML = WeekDay[d.getDay()] + ", " + (new Date().toLocaleString("en", {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
})) + " " + new Date(new Date().getTime()).toLocaleTimeString();

/* This is the responsive button that makes the drop down menu appear on click from the small viewport */
const responsebutton = document.querySelector('.response');
const mainnav = document.querySelector('.navi')
responsebutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

/* This changes the language in the mobile view from Open Menu to Close Menu */
var button = document.getElementById("Switch");
button.addEventListener('click',
    function () {
        if (button.getAttribute("data-text-swap") == button.innerHTML) {
            button.innerHTML = button.getAttribute("data-text-original");
        } else {
            button.setAttribute("data-text-original", button.innerHTML);
            button.innerHTML = button.getAttribute("data-text-swap");
        }
    }, false);

/* Adjusts the rating scale */
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}