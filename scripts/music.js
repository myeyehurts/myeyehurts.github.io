//array of all the album cover pictures
const cover = document.getElementsByClassName("cover");
//array of all the mp3 files
var audio = ["music/arctic-monkeys-brianstorm.mp3",
    "music/buzzcocks-everybodys-happy-nowadays.mp3", "music/gang-of-four-at-home-hes-a-tourist.mp3", "music/the-cats-miaow-not-like-i-was-doing-anything.mp3", "music/the-growlers-social-man.mp3", "music/joy-division-warsaw.mp3", "music/fontaines-rocket-to-russia.mp3", "music/foxygen-san-francisco.mp3", "music/siouxsie-israel.mp3", "music/mamas-papas-california-dreamin.mp3", "music/wet-leg-chaise-longue.mp3", "music/dry-cleaning-dont-press-me.mp3", "music/mothers-of-invention-whats-the-ugliest-part-of-your-body.mp3", "music/seatbelts-cats-on-mars.mp3", "music/le-tigre-deceptacon.mp3", "music/new-order-blue-monday-88.mp3", "music/hierophants-shoemaker-levy-9.mp3", "music/lipps-inc-funkytown.mp3", "music/crack-cloud-philosophers-calling.mp3", "music/kraftwerk-das-model.mp3", "music/soft-cell-tainted-love.mp3", "music/doors-alabama-song.mp3", "music/nirvana-about-a-girl.mp3", "music/laufey-dreamer.mp3", "music/arctic-monkeys-one-point-perspective.mp3", "music/simon-and-garfunkel-i-am-a-rock.mp3", "music/streetlight-manifesto-point-counterpoint.mp3", "music/margaritas-podridas-petalos-mordidos.mp3", "music/muse-time-is-running-out.mp3", "music/the-frights-crust-bucket.mp3"];

//adds a function to each of the album cover images to play the corresponding song when clicked
for (let i = 0; i < cover.length; i++) {
    cover[i].addEventListener("click", function () {
        playAudio(cover[i], cover, audio[i]);
    });
}

//play/pause songs
function playAudio(cover, arr, audioSource) {
    //get audioplayer
    var audioPlayer = document.getElementById('audioPlayer');
    //if song is already playing when clicked, pause it
    if (cover.style.border == "3px solid white") {
        audioPlayer.pause();
        cover.style.border = "none";
    }
    else {
        //reset any borders
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.border = "none";
        }
        //pause any already playing songs
        audioPlayer.pause();
        //assign the requested song to the audio player as a source
        audioPlayer.src = audioSource;
        //play song
        audioPlayer.play();
        //add border to album cover to indicate playing
        cover.style.border = "3px solid white";
    }
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
