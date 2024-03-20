var counter = 1;
const footerHeight = document.querySelector('footer').offsetTop;
const maxHeight = footerHeight - 1000;
document.getElementById('main-video').addEventListener('click', function () {
    popUp("videos/funny-cats.mp4");
    this.play();
});


function popUp(videoSrc) {
    //create video element
    const copy = document.createElement('video');
    //give it the source of the original video
    copy.src = videoSrc;
    //add a class for styling
    copy.classList.add('pop-up');
    //set it to a random position on the screen
    copy.style.left = `${Math.random() * window.innerWidth}px`;
    copy.style.top = `${Math.random() * (footerHeight - maxHeight) + maxHeight}px`;
    //set it to show
    copy.style.display = 'block';
    //play the video
        copy.play();
    //give it the function to create another copy on click
    copy.addEventListener('click', function () {
      
        popUp(videoSrc);
    });
    document.body.appendChild(copy);
    //assign it a z-index one higher than the previous
    copy.style.zIndex = counter++;

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
