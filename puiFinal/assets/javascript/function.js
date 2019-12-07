// 
// Calvino Life Page
// 

// Scroll Reveal js library used for Calvino Life page events
ScrollReveal().reveal('.event', {delay: 800});
ScrollReveal().reveal('.event right', { delay: 1000 });

// Audio on Calvino Life Page 
// Referenced https://www.w3schools.com/html/html5_audio.asp
let song; 

function setup() {
    song = loadSound('../audio/calvino.mp3');
    song.play();
}



// 
// Main Page
// 


// Dynamic portrait on Main Page/button to Calvino Life Page
document.getElementById("portrait").onmouseover = function() {
    document.getElementById("portrait").src = "assets/images/CalvinoFaceYellow.png";
}

document.getElementById("portrait").onmouseout = function() {
    document.getElementById("portrait").src = "assets/images/CalvinoFace.png";
}

// Overlays for Book Covers on Main Page
/* Referenced https://www.w3schools.com/howto/howto_css_overlay.asp */
function onWN() {
    document.getElementById("overlayWN").style.display ="block";
}

function offWN() {
    document.getElementById("overlayWN").style.display = "none";
}

function onIC() {
    document.getElementById("overlayIC").style.display ="block";
}

function offIC() {
    document.getElementById("overlayIC").style.display = "none";
}

function onBT() {
    document.getElementById("overlayBT").style.display ="block";
}

function offBT() {
    document.getElementById("overlayBT").style.display = "none";
}

function onUJS() {
    document.getElementById("overlayUJS").style.display ="block";
}

function offUJS() {
    document.getElementById("overlayUJS").style.display = "none";
}

function onIF() {
    document.getElementById("overlayIF").style.display ="block";
}

function offIF() {
    document.getElementById("overlayIF").style.display = "none";
}

function onDL() {
    document.getElementById("overlayDL").style.display ="block";
}

function offDL() {
    document.getElementById("overlayDL").style.display = "none";
}

