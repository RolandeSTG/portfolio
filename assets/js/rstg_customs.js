/*************************************************************************
 * Additional scripts to customize this portfolio
 * 
 * @author: Rolande St-Gelais 
 *************************************************************************/

let demoVideo = document.getElementById("demo-video");
let btnVideo = document.getElementById("btn-video");

demoVideo.onended = (event) => {
    btnVideo.innerText = "Watch again..."
}

demoVideo.onplay = (event) => {
    btnVideo.innerText = "Pause Demo..."
}

demoVideo.onpause = (event) => {
    btnVideo.innerText = "Resume Demo..."
}

function playPauseVideo() {	
    if (demoVideo.paused) {
        demoVideo.play();
    }
    else {
        demoVideo.pause();
    }	
}
