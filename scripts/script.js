const truths = [];
const lies = [];
truths.push("i was hit by a bus once", "i can't whistle", "i share the same birthday, name, and height with a celebrity", "i sleep with the covers pulled up to my nose", "my cousins are all 20+ years older than me", "i have a freckle at the bottom of my right foot", "i think mayonnaise is horrible", "i attended a school that had no windows", "i've hardly seen any movies", "i don't drink coffee", "i was born in a different country from the rest of my immediate family", "i have a vision problem that can't be cured", "i've only ever met one of my grandparents", "i've seen 900+ episodes of one piece", "i will always drink a beverage through a straw if possible", "i used to think a hair dryer was also called a fan and would refer to it as such", "i can wiggle my little toe", "i knew how to operate a game controller before i knew how to write", "i can and will play the kazoo", "i did student council in high school", "i went trick or treating at age 18", "i have an A4 printout of a frog in my room", "i used to play the trumpet", "i can make gift bows out of sticky notes", "i have written a song about the housing crisis", "i have two ikea shark plushies both gifted by the same person", "i couldn't pronounce the english 'th' sound for most of my life", "i haven't thrown up in more than 5 years");
lies.push("i can operate a forklift", "my middle name is jelena", "i speak 4 languages", "i have been carrying around the same american coin in my wallet for months", "i own a typewriter", "i have more than 3000 liked songs on spotify", "i have made cheese before", "i am writing this prompt at 4:32 pm", "i have listened to the entire discography of king gizzard and the lizard wizard (25 albums)", "i repierced my earlobes twice", "i've never met anyone named dylan", "i put together the dresser in my room", "i own an easy bake oven", "i have dreamt something that later happened in real life");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var lie = 7;
var truthCounter = 0;
var lieCounter = 0;
const cards = [];
cards.push(card1, card2, card3);
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", gameCheck);
}

//sets up the two truths and a lie game
//is it efficient? probably not. but it works.
function gameSetup() {

    //hide next button
    var button = document.getElementById("next-button");
    button.style.display = "none";
    //in case the user goes through all of the possible truths
    if (truths.length == 0) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none";
        }
        var video = document.getElementById("funny-cats");
        video.style.display = "inline";
    }
    else {
        //generate a random number to correspond with an index of the truths array
        var num1 = Math.floor(Math.random() * truths.length);
        //generate a random number between 1 and 3 to correspond with one of the 3 cards
        var place = (Math.floor(Math.random() * 3));
        //set the card text to display the fact
        (cards[place]).innerText = truths[num1];
        //reset the card background
        (cards[place]).style.background = "rgb(186, 106, 106)";
        //remove element from array
        truths.splice(num1, 1);
        //repeat for the next fact
        num1 = Math.floor(Math.random() * truths.length);
        var place2 = (Math.floor(Math.random() * 3));
        //make sure the card number is not the same one that was just used
        while (place2 == place) {
            var place2 = (Math.floor(Math.random() * 3));
        }
        (cards[place2]).innerText = truths[num1];
        (cards[place2]).style.background = "rgb(186, 106, 106)";
        truths.splice(num1, 1);
        //generate a random number to correspond with an index of the lies array
        num1 = Math.floor(Math.random() * lies.length);
        //label this string as the lie
        lie = lies[num1];
        //generate random numbers until the last remaining empty card is found
        var place3 = (Math.floor(Math.random() * 3));
        while (place3 == place || place3 == place2) {
            var place3 = (Math.floor(Math.random() * 3));
        }
        //place the text in said card
        (cards[place3]).innerText = lie;
        (cards[place3]).style.background = "rgb(186, 106, 106)";
        lies.splice(num1, 1);
    }
}

//game response to user's selection
function gameCheck(event) {
    var card = event.target;
    if (card.innerText == lie) {
        //green background to indicate correct
        card.style.background = "#5C946E";
        //show next button for user to proceed
        var button = document.getElementById("next-button");
        button.style.display = "inline";
    }
    else {
        //red background to indicate wrong
        card.style.background = "#4B1414";
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



