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

/*Lazy image loading*/

const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}