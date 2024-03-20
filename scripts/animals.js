//i wrote this code and then people saw i did an image carousel on my website and would not stop asking me about it so you're probably gonna see variations of it elsewhere...

const slides = document.getElementsByClassName("animal");
const thumbnails = document.getElementsByClassName("thumbnails");
var offset = 0;
var increment = 100;
var container = document.getElementById('thumbnail-container');
var offsetWidth = container.offsetWidth;
var scrollWidth = container.scrollWidth;
var width = scrollWidth - offsetWidth;

window.addEventListener('resize', function () {
    resize()
});

//recalculate widths if window is resized
function resize() {
    offsetWidth = container.offsetWidth;
    scrollWidth = container.scrollWidth;
    width = scrollWidth - offsetWidth;
}

//give each thumbnail its click function
for (let i = 0; i < slides.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        slidePopUp(slides[i])
    });
    //hide all slides 
    slides[i].style.display = "none";
}

//set the carousel to show the first slide in the series by default
slides[0].style.display = "grid";

function moveLeft() {
    //prevent user from scrolling backwards beyond the first image
    if (offset < 0) {
        offset += increment;

        //move each picture in the carousel accordingly
        for (let i = 0; i < thumbnails.length; i++) {
            thumbnails[i].style.transform = "translateX(" + offset + "px)";
        }

    }
}


function moveRight() {
    //prevent user from scrolling off into infinity
    if (offset > -width) {
        offset -= increment;
        for (let i = 0; i < thumbnails.length; i++) {
            thumbnails[i].style.transform = "translateX(" + offset + "px)";
        }
    }
}

//thumbnail buttons to control slide display
function slidePopUp(slide) {
    //hide whichever slide is currently being shown
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //show the clicked one
    slide.style.display = "grid";

}

//mobile nav bar open and close
function show() {
    var links = document.getElementById("links");
    if (links.style.display == "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}
