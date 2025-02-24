//mobile nav bar open and close
function showNav() {
    var links = document.getElementById("links");
    if (links.style.display == "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}

