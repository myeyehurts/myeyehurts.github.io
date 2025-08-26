const accentColor = "#68417a"; //colour for borders

class Carousel {
    constructor(thumbnailsClass, bigImageID, videoID, leftArrowID, rightArrowID, containerID) {
        this.thumbnails = document.querySelectorAll(thumbnailsClass);
        this.bigImage = document.querySelector(bigImageID)
        this.video = document.querySelector(videoID);
        this.leftArrow = document.querySelector(leftArrowID);
        this.rightArrow = document.querySelector(rightArrowID);
        this.container = document.querySelector(containerID);
        this.offset = 0;
        this.width = 0;
        this.increment = 150;

        this.resize(); //run resize once to get initial values for widths
        window.addEventListener("resize", () => this.resize()); //run resize function when window is resized

        this.thumbnails[0].style.border = "3px solid " + accentColor; //display the first thumbnail as selected with a border

        this.leftArrow.addEventListener("click", () => this.moveLeft()); //give arrow buttons their functions
        this.rightArrow.addEventListener("click", () => this.moveRight());
        for (let i = 0; i < this.thumbnails.length; i++) { //add click trigger to each thumbnail
            this.thumbnails[i].addEventListener("click", (event) => {
                this.imagePopUp(event.target)
            });
        }
    }

    //adjust recorded widths when the window is resized
    resize() {
        this.offsetWidth = this.container.offsetWidth;
        this.scrollWidth = this.container.scrollWidth;
        this.width = this.scrollWidth - this.offsetWidth;
    }

    //function for left arrow button
    moveLeft() {
        if (this.offset <= 0) { //prevent user from scrolling too far
            if (this.offset + this.increment > 0) { //additional protection for the edge case where pressing the button would send it slightly out of bounds
                this.offset = 0;
            }
            else {
                this.offset += this.increment;
            }
        }
        this.moveImages();
    }

    //function for right arrow button
    moveRight() {
        if (this.offset >= -this.width) { 
            if (this.offset - this.increment < -this.width) { 
                this.offset = -this.width;
            }
            else {
                this.offset -= this.increment;
            }
        }
        this.moveImages();
    }

    //shifts all images over in the appropriate direction on button click
    moveImages() {
        for (let i = 0; i < this.thumbnails.length; i++) {
            this.thumbnails[i].style.transform = "translateX(" + this.offset + "px)"; //offset is the total distance from the start
        }
    }

    //thumbnail buttons to control slide display
    imagePopUp(thumbnail) {
        for (let i = 0; i < this.thumbnails.length; i++) {
            this.thumbnails[i].style.border = "none"; //remove border from previous selected thumbnail
        }
        thumbnail.style.border = "3px solid " + accentColor; //add it to the new one
        if (thumbnail.tagName == 'IMG') { //if the selected thumbnail is an image, hide the video and display the image
            this.bigImage.src = thumbnail.src;
            this.video.style.display = "none";
            this.bigImage.style.display = "inline";
        }
        else { //vice versa for the video
            this.bigImage.style.display = "none";
            this.video.currentTime = 0; //reset video time
            this.video.style.display = "inline";
        }
    }
}

const spotifyCarousel = new Carousel(".spotify_thumbnails", "#spotify_demo_img", "#spotify_video", "#spotify_left_arrow", "#spotify_right_arrow", "#spotify_container");
const catCarousel = new Carousel(".cat_thumbnails", "#cat_demo_img", "#cat_video", "#cat_left_arrow", "#cat_right_arrow", "#cat_container");
const turnfableCarousel = new Carousel(".turnfable_thumbnails", "#turnfable_demo_img", "#turnfable_video", "#turnfable_left_arrow", "#turnfable_right_arrow", "#turnfable_container");


